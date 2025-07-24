var coc = {};

function coc_hideCancelModal() {
    if(coc.cancelling) return;
    let modal = document.getElementById('coc-cancel-modal');
    if(modal != null) modal.parentNode?.removeChild(modal);
}

function coc_checkStatus(count,order_id) {
    if(count > 5) return;

    fetch('/apps/co/api/order_check?order='+order_id,{
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(function(response){
        if(!response.ok) throw new Error("Internal server error");
        return response.json();
    })
    .then(function(result){
        if(result.data.cancelled_at != null) {
            if(coc.shop === '6115a9-4f.myshopify.com') {
                let url = new URL(location.href);
                url.searchParams.set("order_cancelled","true");
                location.href = url.href;
            } else {
                location.reload();
            }
        } else {
            setTimeout(function(){ coc_checkStatus(count + 1, order_id) }, 1500);
        }
    })
    .catch(function(error){
        alert(error.message);
        let cancel_btn = document.querySelectorAll('.coc-btn-cancel');
        cancel_btn.forEach(function(btn){ btn.disabled = false; });
        coc.cancelling = false;
    });
}

function coc_handleCancelOrder(btn,order_id) {
    if(btn.disabled) return;
    const cancel_button = document.querySelector(".coc-cancel-button[data-order-id='"+order_id+"']");
    if(cancel_button == null) return;

    const cancel_btn = document.querySelectorAll('.coc-btn-cancel');
    const reason_error = document.querySelectorAll('.coc-error');
    const cancelling_text = typeof coc?.settings?.cancelling_text != 'undefined' ? coc.settings.cancelling_text : 'Cancelling...';
    const confirm_btn_text = typeof coc?.settings?.confirm_btn_text != 'undefined' ? coc.settings.confirm_btn_text : 'Proceed';
    const disabled_msg = coc?.settings?.disabled_msg || 'This order cannot be cancelled.';
    const not_cod_error_text = typeof coc?.settings?.not_cod_error != 'undefined' ? coc.settings.not_cod_error : 'This order cannot be cancelled as the chosen payment method is not Cash on Delivery (COD).';
    const expired_error = typeof window.coc.settings?.expired_error != 'undefined' ? window.coc.settings.expired_error : 'The order cannot be canceled because it was placed before [value] [unit].';
    
    if(typeof order_id == 'undefined') return;

    reason_error.forEach(error => error.classList.remove('coc-err-show'));

    const send_email = typeof coc?.settings?.send_email != 'undefined' ? coc.settings.send_email == 'true' : true;
    const enable_restock = typeof coc?.settings?.enable_restock != 'undefined' ? coc.settings.enable_restock == 'true' : true;
    const enable_refund = typeof coc?.settings?.enable_refund != 'undefined' ? coc.settings.enable_refund == 'true' : true;
    const refund_shipping = typeof coc?.settings?.refund_shipping != 'undefined' ? coc.settings.refund_shipping == 'true' : true;
    const reason_required = typeof coc?.settings?.reason_required != 'undefined' ? coc.settings.reason_required == 'true' : false;
    const predefined_required = typeof coc?.settings?.predefined_reason_required != 'undefined' ? coc.settings.predefined_reason_required == 'true' : false;
    const only_cod_cancel = typeof coc?.settings?.only_cod_cancel != 'undefined' ? coc.settings.only_cod_cancel == 'true' : false;
    const restrict_order = typeof coc?.settings?.restrict_order != 'undefined' ? coc.settings.restrict_order == 'true' : false;
    const restrict_product = typeof coc?.settings?.restrict_product != 'undefined' ? coc.settings.restrict_product == 'true' : false;

    let data = {
        shop: coc.shop,
        order_id: order_id,
        send_email,
        enable_restock,
        enable_refund,
        refund_shipping,
        only_cod_cancel,
        availability: {
            type: coc?.settings?.avail_type || 'until_ship',
            value: coc?.settings?.avail_val || "1",
            unit: coc?.settings?.avail_unit || 'days'
        },
        restrict_order,
        restrict_product
    }

    const select_reason = document.querySelector('select[name="coc_select_reason"]');
    const input_reason = document.querySelector('textarea[name="coc_input_reason"]');
    
    if (select_reason) {
        if (select_reason.value == '') {
            if (predefined_required) {
                if (select_reason.nextElementSibling) select_reason.nextElementSibling.classList.add('coc-err-show');
                return;
            }
        } else {
            data['tag'] = select_reason.value;
        }
    }

    if (input_reason) {
        if (input_reason.value == '') {
            if (reason_required) {
                if (input_reason.nextElementSibling) input_reason.nextElementSibling.classList.add('coc-err-show');
                return;
            }
        } else {
            data['reason'] = input_reason.value;
        }
    }

    const not_cod_error = document.querySelector('.coc-modal .coc-not-cod-error');
    if(not_cod_error != null) not_cod_error.remove();

    btn.disabled = true;
    btn.innerHTML = cancelling_text;
    
    cancel_btn.forEach(function(_btn){ _btn.disabled = true; });

    coc.cancelling = true;
    
    fetch('/apps/co/api/order_cancel', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(function(response){
        if(!response.ok) throw new Error("Internal server error");
        return response.json();
    })
    .then(function(result){
        if(result.error) {
            if(result.error == 'not-cod' || result.error == 'expired' || result.error == 'not-allow') {
                btn.disabled = false;
                btn.innerHTML = confirm_btn_text;
                cancel_btn.forEach(function(_btn){ _btn.disabled = false; });
                coc.cancelling = false;

                const error = document.createElement("p");
                error.classList.add("coc-error","coc-err-show", "coc-not-cod-error");
                if(result.error == 'not-cod') {
                    error.innerText = not_cod_error_text;
                } else if(result.error == "expired") {
                    error.innerText = expired_error.replace(/\[value\]/gi, data.availability.value).replace(/\[unit\]/gi, data.availability.unit);   
                } else {
                    error.innerText = disabled_msg;
                }
                document.querySelector('.coc-modal-body')?.appendChild(error);
            } else {
                throw "Failed to cancel order"                
            }           
        } else {
            coc_checkStatus(0,order_id);
            coc_hideCancelModal();
        }
    })
    .catch(function(error){
        coc_hideCancelModal();
        coc.cancelling = false;
        alert('Failed to cancel order');
    });
}

function coc_showCancelModal(order_id) {
    let modal = document.createElement('div');
    modal.setAttribute('id','coc-cancel-modal');
    modal.classList.add('coc-modal-outer');

    const settings =  {
        title: typeof coc?.settings?.dialog_title != 'undefined' ? coc.settings.dialog_title : 'Cancel Confirmation',
        msg: typeof coc?.settings?.dialog_msg != 'undefined' ? coc.settings.dialog_msg : 'Are you sure you want to cancel the order?',
        confirm: typeof coc?.settings?.confirm_btn_text != 'undefined' ? coc.settings.confirm_btn_text : 'Proceed',
        cancel: typeof coc?.settings?.cancel_btn_text != 'undefined' ? coc.settings.cancel_btn_text : 'Cancel',
        show_reasons: typeof coc?.settings?.show_reasons != 'undefined' ? coc.settings.show_reasons == 'true' : false,
        reasons: typeof coc?.settings?.reasons != 'undefined' ? coc.settings.reasons.split(',') : [''],
        reason_label: typeof coc?.settings?.reason_label != 'undefined' ? coc.settings.reason_label : 'Reason for Cancellation',
        reason_placeholder: typeof coc?.settings?.reason_placeholder != 'undefined' ? coc.settings.reason_placeholder : 'Select reason',
        custom_reason: typeof coc?.settings?.custom_reason != 'undefined' ? coc.settings.custom_reason == 'true' : false,
        reason_select_error: typeof coc?.settings?.reason_select_error != 'undefined' ? coc.settings.reason_select_error : 'Reason is required.'
    }

    const reasons = settings.reasons.filter((reason) => reason != '');
    let reasons_options = "<div class='coc-input-group'>";
    reasons_options += `<label class="coc-label" for='coc-lblReasons'>${settings.reason_label}</label>`;
    reasons_options += "<select id='coc-lblReasons' name='coc_select_reason'>";
    reasons_options += `<option value=''>${settings.reason_placeholder}</option>`;
    reasons.map(function(reason){
        const slug = reason.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-+|-+$/g, '');
        reasons_options += `<option value="cancel-${slug}">${reason}</option>`;
    });
    reasons_options += "</select>";
    reasons_options += `<p class='coc-error'>${settings.reason_select_error}</p>`;
    reasons_options += "</div>";

    let custom_reason = `<div class="coc-input-group">
        <label class="coc-label">${settings.reason_label}</label>
        <textarea class="coc-input" rows="4" maxlength="200" name="coc_input_reason"></textarea>
        <p class='coc-error'>${settings.reason_select_error}</p>
    </div>`;

    modal.innerHTML = `
        <div class="coc-modal">
            <div class="coc-modal-header">
                <h3 class="coc-modal-header-title">${settings.title}</h3>
                <button class="coc-close coc-btn-cancel" onclick="coc_hideCancelModal()">
                    <svg viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path d="M13.97 15.03a.75.75 0 1 0 1.06-1.06l-3.97-3.97 3.97-3.97a.75.75 0 0 0-1.06-1.06l-3.97 3.97-3.97-3.97a.75.75 0 0 0-1.06 1.06l3.97 3.97-3.97 3.97a.75.75 0 1 0 1.06 1.06l3.97-3.97 3.97 3.97Z"></path></svg>
                </button>
            </div>
            <div class="coc-modal-body">
                <p>${settings.msg}</p>
                ${(settings.show_reasons && reasons.length > 0) ? reasons_options : ''} 
                ${settings.custom_reason ? custom_reason : '' }
            </div>
            <div class="coc-modal-action">
                <button class="button coc-btn-cancel" onclick="coc_hideCancelModal()">${settings.cancel}</button>
                <button class="button " onclick="coc_handleCancelOrder(this,${order_id})">${settings.confirm}</button>
            </div>
        </div>
    `;
    document.body.insertBefore(modal, document.body.firstChild);
}

function coc_autoAddbutton() {
    let cancel_btns = document.querySelectorAll(".coc-cancel-button");
    let reorder_btns = document.querySelectorAll(".coc-reorder-button");

    if(cancel_btns.length > 0 || reorder_btns.length > 0) return;

    const show_cancel = coc.settings?.show_cancel || 'true';
    const show_reorder = coc.settings?.show_reorder || 'true';
    
    if(show_cancel == 'true' || show_reorder == 'true') {
        const orders = (Object.keys(coc.orders));
        if(orders.length == 0) return;
        
        if(coc.page == "account") {
            const table = document.querySelector('table:not(.cart-drawer table)');
            if(table == null) return;

            const thead = table.querySelector('thead');
            if(thead != null) {
                let tr = thead.querySelector('tr');
                let th = document.createElement('th');
                tr?.appendChild(th);
            }

            const tbody = table.querySelector('tbody');
            if(tbody != null) {
                let rows = tbody.querySelectorAll('tr');
                rows.forEach(function(row, index){
                    let td = document.createElement("td");
                    let div = document.createElement("div");
                    div.classList.add("coc-d-flex","coc-gap-2","coc-p-1");
                    if(show_cancel == 'true') {
                        let button = document.createElement("button");
                        button.className = `button coc-button coc-cancel-button ${coc.settings?.custom_class}`;
                        button.setAttribute("data-order-id",orders[index]);
                        button.disabled = true;
                        button.innerHTML = coc?.settings?.cancel_text || "Cancel";
                        button.style.margin = "0px";
                        div.appendChild(button);
                    }

                    if(show_reorder == 'true') {
                        let button = document.createElement("button");
                        button.className = `button coc-button coc-reorder-button ${coc.settings?.custom_class}`;
                        button.setAttribute("data-order-id",orders[index]);
                        button.innerHTML = coc?.settings?.reorder_text || "Reorder";
                        button.style.margin = "0px";
                        div.appendChild(button);
                    }

                    td.appendChild(div);
                    row.appendChild(td);
                });
            }
        } else {
            const table = document.querySelector('table:not(.cart-drawer table)');
            if(table == null) return;
            let div = document.createElement("div");

            div.classList.add("coc-d-flex","coc-flex-wrap","coc-gap-2","coc-py-2");     
            
            if(show_cancel == 'true') {
                let button = document.createElement("button");
                button.className = `button coc-button coc-cancel-button ${coc.settings?.custom_class}`;
                button.setAttribute("data-order-id",orders[0]);
                button.disabled = true;
                button.innerHTML = coc?.settings?.cancel_text || "Cancel";
                button.style.margin = "0px";
                div.appendChild(button);
            }

            if(show_reorder == 'true') {
                let button = document.createElement("button");
                button.className = `button coc-button coc-reorder-button ${coc.settings?.custom_class}`;
                button.setAttribute("data-order-id",orders[0]);
                button.innerHTML = coc?.settings?.reorder_text || "Reorder";
                button.style.margin = "0px";
                div.appendChild(button);
            }

            table.parentNode?.insertBefore(div, table);
        }
    }
}

document.addEventListener("DOMContentLoaded",function(){
    coc = typeof window.coc_config != "undefined" ? window.coc_config : {};

    coc_autoAddbutton();

    let cancel_btns = document.querySelectorAll(".coc-cancel-button");
    let reorder_btns = document.querySelectorAll(".coc-reorder-button");
    
    if(cancel_btns.length > 0 || reorder_btns.length > 0) {
        let orders = Object.keys(coc.orders);
        
        orders.forEach(function(order_id){
            let button = document.querySelector(".coc-cancel-button[data-order-id='"+order_id+"']");
            if(button != null) {
                let order = coc.orders[order_id];
                let show_cancel_btn;

                if(order.cancelled == false) {
                    show_cancel_btn = true;
                    let max_amount = parseFloat(coc?.settings?.max_amount || -1);
                    if(show_cancel_btn && max_amount > 0) {
                        max_amount = max_amount * 100;
                        if(order.total_price > max_amount) show_cancel_btn = false;
                    }
                } else {
                    show_cancel_btn = false;
                }

                if(show_cancel_btn) {
                    const avail = {
                        type: coc?.settings?.avail_type || 'until_ship',
                        value: coc?.settings?.avail_val || "1",
                        unit: coc?.settings?.avail_unit || 'days'
                    };
                    if(avail.type === 'within') {
                        const created_date = new Date(order.created_at);
                        const current_date = new Date();
                        const val = parseInt(avail?.value, 10);
                        let unit = 1000 * 60;
                        if(avail?.unit === 'hours') unit = 1000 * 60 * 60;
                        if(avail?.unit === 'days') unit = 1000 * 60 * 60 * 24;
                        let difference_time = (current_date - created_date) / unit;
                        if(difference_time > val) show_cancel_btn = false;
                    }
                }
                
                if(show_cancel_btn) {
                    button.innerHTML = coc?.settings?.cancel_text || "Cancel";
                    button.disabled = false;
                    button.classList.add('coc-cancel-active');
                } else if(order.cancelled == true) {
                    button.innerHTML = coc?.settings?.cancelled_text || "Cancelled";
                    button.disabled = true;
                    button.classList.add('coc-cancel-active');
                }
            }
        });
        
        let link_exist,items_arr,item_arr;
        reorder_btns.forEach(function(btn){
            btn.innerHTML = coc?.settings?.reorder_text || "Reorder";
            link_exist = true;
            const order_id = btn.getAttribute("data-order-id") || 0;
            if(typeof coc?.orders[order_id] != "undefined") {
                const order = coc.orders[order_id];
                items_arr = order.line_items.split(",");
                items_arr.forEach(function(item){
                    item_arr = item.split(":");
                    if(item_arr[0] == '') link_exist = false;
                });
                if(link_exist) btn.classList.add('coc-reorder-active');
            }
        });
    }

cancel_btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        e.stopPropagation();
        if (this.disabled) return;
        if (!this.classList.contains("coc-cancel-active")) return;

        const order_id = this.getAttribute("data-order-id");
        const order = coc.orders[order_id];

        if (order.fulfillment !== 'unfulfilled') {
            const message = coc.settings?.fulfilled_error || 
                "This order has already been shipped and can no longer be canceled. However, you may choose to refuse the delivery when it arrives at your doorstep.";
        
            const modal = document.createElement('div');
            modal.setAttribute('id', 'coc-cancel-modal');
            modal.classList.add('coc-modal-outer');
        
            modal.innerHTML = `
                <div class="coc-modal">
                    <div class="coc-modal-header">
                        <h3 class="coc-modal-header-title">Order cannot be cancelled!</h3>
                        <button class="coc-close coc-btn-cancel" onclick="coc_hideCancelModal()">
                            <svg viewBox="0 0 20 20" focusable="false" aria-hidden="true">
                                <path d="M13.97 15.03a.75.75 0 1 0 1.06-1.06l-3.97-3.97 3.97-3.97a.75.75 0 0 0-1.06-1.06l-3.97 3.97-3.97-3.97a.75.75 0 0 0-1.06 1.06l3.97 3.97-3.97 3.97a.75.75 0 1 0 1.06 1.06l3.97-3.97 3.97 3.97Z"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="coc-modal-body">
                        <p class="coc-error coc-err-show">${message}</p>
                    </div>
                </div>
            `;
        
            document.body.insertBefore(modal, document.body.firstChild);
            return;
        }
        coc_showCancelModal(order_id);
    });
}); 
    
    reorder_btns.forEach(function(btn){
        btn.addEventListener("click",function(e){
            e.stopPropagation();
            if(this.disabled) return;
            if(coc.reordering) return;

            const order_id = btn.getAttribute("data-order-id") || 0;
            if(typeof coc?.orders[order_id] == "undefined") return;

            coc.reordering = true;
            this.innerHTML = typeof coc?.settings?.reordering_text != 'undefined' ? coc.settings.reordering_text : 'Reordering...';

            let destination = typeof coc?.settings?.reorder_destination != 'undefined' ? coc.settings.reorder_destination : 'checkout';
            let url = `https://${coc.shop}/cart/${coc.orders[order_id].line_items}`;
            if(destination == 'cart') url += '?storefront=true';

            window.location.href = url;
        });
    });
});

window.cocButtonEnable = () => {
    let coc_config = typeof window.coc_config != "undefined" ? window.coc_config : {};
    let orders = Object.keys(coc_config.orders);
    orders.forEach(function (order_id) {
        let buttons = document.querySelectorAll(".coc-cancel-button[data-order-id='" + order_id + "']");
        buttons.forEach(button => {
            let order = coc_config.orders[order_id];
            let show_cancel_btn;

            if (order.cancelled == false) {
                show_cancel_btn = order.fulfillment == 'unfulfilled';
                let max_amount = parseFloat(coc_config?.settings?.max_amount || -1);
                if (show_cancel_btn && max_amount > 0) {
                    max_amount = max_amount * 100;
                    if (order.total_price > max_amount) show_cancel_btn = false;
                }
            } else {
                show_cancel_btn = false;
            }

            if (show_cancel_btn) {
                button.innerHTML = coc_config?.settings?.cancel_text || "Cancel";
                button.disabled = false;
                button.classList.add('coc-cancel-active');
            } else if (order.cancelled == true) {
                button.innerHTML = coc_config?.settings?.cancelled_text || "Cancelled";
                button.classList.add('coc-cancel-active');
            }

            button.addEventListener("click",function(e){
                e.stopPropagation();
                if(this.disabled) return;
                if(!this.classList.contains("coc-cancel-active")) return;
                coc_showCancelModal(this.getAttribute("data-order-id"));
            });
        });
    });
}