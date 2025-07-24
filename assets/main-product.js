//  ########### accordian
var acc = document.getElementsByClassName("new_accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("acc_active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
document.querySelectorAll(".popup_click").forEach((service) =>
  service.addEventListener("click", function () {
    let active_service = service.dataset.service;
    document.querySelectorAll(".overlay_wrapper").forEach((overlay) => {
      if (overlay.dataset.service == active_service) {
        overlay.classList.add("popup");
        document.body.style.overflow = "hidden";
      }
    });
  })
);
function close_overlay() {
  document
    .querySelectorAll(".overlay_wrapper")
    .forEach((overlay) => overlay.classList.remove("popup"));
  document.body.style.overflow = "scroll";
}

document
  .querySelectorAll(".close_overlay")
  .forEach((close_overlay_div) =>
    close_overlay_div.addEventListener("click", close_overlay)
  );
document
  .querySelectorAll(".overlay_content .icon-close")
  .forEach((close_overlay_svg) =>
    close_overlay_svg.addEventListener("click", close_overlay)
  );

document
  .querySelectorAll('.add_to_cart button[type="submit"]')
  .forEach((element) =>
    element.addEventListener("click", function () {
      document.querySelector(".loading").style.display = "flex";

      setTimeout(() => {
        document.querySelector(".loading").style.display = "none";
      }, "3000");
    })
  );

document.querySelector(".product_zoom").addEventListener("click", function () {
  document.querySelector(".product_zoom_close").style.display = "flex";
  let swiffy = document.querySelector(".main-carousel2");
  document
    .querySelector(".carousal_product")
    .classList.add("zoom_product_gallary");
  swiffy.classList.remove("slider-item-reveal");
  swiffy.classList.remove("slider-item-snapstart");
  document.body.style.overflow = "hidden";
});
document
  .querySelector(".product_zoom_close")
  .addEventListener("click", function () {
    document.querySelector(".product_zoom_close").style.display = "none";
    let swiffy = document.querySelector(".main-carousel2");
    document
      .querySelector(".carousal_product")
      .classList.remove("zoom_product_gallary");
    swiffy.classList.add("slider-item-reveal");
    swiffy.classList.add("slider-item-snapstart");
    document.body.style.overflow = "scroll";
  });

const looxAppWidget = document
  .querySelector(".shopify-app-block #looxReviews").closest('.container');
  looxAppWidget.classList.add("navigate");
looxAppWidget.setAttribute("id", "shopify-block-loox-product-reviews");

const productDescription = document.querySelector(".ProductMeta__Description");
const buy_buttons2 = document.querySelector(".buy-buttons.floating");
const allNavigate = document.querySelectorAll(".navigate");
const product_toggle = document.querySelector(".product_toggle");
const colorVariant = document.getElementById("color-variant");
window.addEventListener("scroll", navigate);
function navigate() {
  product_toggle.style.display =
    productDescription.offsetTop - 300 < window.scrollY &&
    window.innerWidth <= 1000
      ? "flex"
      : "none";

  // if (
  //  colorVariant && window.scrollY > colorVariant.offsetTop &&window.screen.availWidth < 1000
  // ) {
  //   buy_buttons2.style.display = "block";
  // } else {
  //   buy_buttons2.style.display = "none";
  // }


//  if (
//     window.scrollY > productDescription.offsetTop &&
//     window.screen.availWidth < 1000
//   ) {
//      buyButtons2.style.display = "block";
//   } else {
//      buyButtons2.style.display = "none";
//   }




  allNavigate.forEach((elemen) => {
    const element = document.querySelector(
      `[href="#${elemen.getAttribute("id")}"]`
    );
    if (
      elemen.offsetTop - 300 < window.scrollY &&
      elemen.offsetTop + elemen.clientHeight - 200 > window.scrollY
    ) {
      element.classList.add("active_nav");
    } else {
      element.classList.remove("active_nav");
    }
  });
}
 const sizeSelectorToggle = document.querySelector('.size_popup_button')
 const selectSizeButton =   document.querySelector('.select_size')
 const addCartButton =  document.querySelector('.add_to_cart')
  var notifyMeButttonElement =  document.querySelectorAll(".buy-buttons .notify___me")
let x = 1;
document.addEventListener("change",function(event){
if(x<2 && sizeSelectorToggle){ 
  if(selectSizeButton){
     selectSizeButton.style.display="none"
  }
   sizeSelectorToggle.style.display="none"
     addCartButton.style.display="block"
     notifyMeButttonElement.forEach((notifyMeButtton)=> notifyMeButtton.style.display = !event.target.className.includes("is-disabled") ? "none":"block" )
   x++;
}
})





// JS to handle the toggle and search header disturbancy 

const headerSearch = document.querySelector('header-search');
const productToggle = document.querySelector('.product_toggle');

// This function checks if search is open and hides/shows toggle accordingly
function updateToggleVisibility() {
  if (headerSearch.hasAttribute('open')) {
    productToggle.classList.add('hide-when-search');
  } else {
    productToggle.classList.remove('hide-when-search');
  }
}

// Observe for attribute changes (open/close)
const observer = new MutationObserver(updateToggleVisibility);
observer.observe(headerSearch, { attributes: true });

// Extra insurance: listen for scroll, resize, and DOM changes
window.addEventListener('scroll', updateToggleVisibility, { passive: true });
window.addEventListener('resize', updateToggleVisibility);

document.addEventListener('DOMContentLoaded', updateToggleVisibility); // Initial check on load

// Optional: also check on visibilitychange (e.g., if tab is hidden then shown)
document.addEventListener('visibilitychange', updateToggleVisibility);






// document.addEventListener("DOMContentLoaded", function() {
//     // List of shirt titles for which to hide the sizes
//     const linenShirts = [
//     "Men Black 100% Linen Shirt",
//     "Men Mango Yellow 100% Linen Shirt",
//     "Men White 100% Linen Shirt",
//     "Men Black 100% Linen Half Sleeve Shirt",
//     "Men Mango Yellow 100% Linen Half Sleeve Shirt",
//     "Men White 100% Linen Half Sleeve Shirt"
    
//   ];
//     // Find the product title on the page
//     const titleElem = document.querySelector('h1.product-title');
//     if (titleElem && linenShirts.includes(titleElem.textContent.trim())) {
//         // Hide XS, 3XL, 4XL swatches
//         ['option1-xs', 'option1-3xl', 'option1-4xl'].forEach(id => {
//             document.querySelectorAll(`label[for*="${id}"]`).forEach(label => {
//                 label.style.display = 'none';
//             });
//         });
//     }
// });







// document.addEventListener("DOMContentLoaded", function() {
//     // List of shirt titles for which to hide the sizes
//     const straightPant = [
//     "Navy Blue Airy Linen Straight Pant",
//     "Turquoise Airy Linen Straight Pant",
//     "Black Airy Linen Straight Pant",
//     "Rose Taupe Airy Linen Straight Pant"
    
//   ];
//     // Find the product title on the page
//     const titleElem = document.querySelector('h1.product-title');
//     if (titleElem && straightPant.includes(titleElem.textContent.trim())) {
//         // Hide XS, 4XL, 5XL swatches
//         ['option1-xs', 'option1-4xl', 'option1-5xl'].forEach(id => {
//             document.querySelectorAll(`label[for*="${id}"]`).forEach(label => {
//                 label.style.display = 'none';
//             });
//         });
//     }
// });




