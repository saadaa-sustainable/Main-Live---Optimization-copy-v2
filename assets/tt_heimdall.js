'use strict';

(() => {
  var e,
    r,
    a,
    t = Object.getOwnPropertyNames,
    o = (e, r) =>
      function () {
        return e && (r = (0, e[t(e)[0]])((e = 0))), r;
      },
    s = o({
      'src/pattern.ts'() {
        e =
          ' daum[ /]| deusu/| yadirectfetcher|(?:^|[^g])news(?!sapphire)|(?<! (?:channel/|google/))google(?!(app|/google| pixel))|(?<! cu)bots?(?:\\b|_)|(?<!(?:lib))http|(?<![hg]m)score|@[a-z][\\w-]+\\.|\\(\\)|\\.com\\b|\\btime/|^<|^[\\w \\.\\-\\(?:\\):]+(?:/v?\\d+(?:\\.\\d+)?(?:\\.\\d{1,10})*?)?(?:,|$)|^[^ ]{50,}$|^\\d+\\b|^\\w*search\\b|^\\w+/[\\w\\(\\)]*$|^active|^ad muncher|^amaya|^avsdevicesdk/|^biglotron|^bot|^bw/|^clamav[ /]|^client/|^cobweb/|^custom|^ddg[_-]android|^discourse|^dispatch/\\d|^downcast/|^duckduckgo|^facebook|^getright/|^gozilla/|^hobbit|^hotzonu|^hwcdn/|^jeode/|^jetty/|^jigsaw|^microsoft bits|^movabletype|^mozilla/5\\.0\\s[a-z\\.-]+$|^mozilla/\\d\\.\\d \\(compatible;?\\)$|^mozilla/\\d\\.\\d \\w*$|^navermailapp|^netsurf|^offline|^owler|^php|^postman|^python|^rank|^read|^reed|^rest|^rss|^snapchat|^space bison|^svn|^swcd |^taringa|^thumbor/|^track|^valid|^w3c|^webbandit/|^webcopier|^wget|^whatsapp|^wordpress|^xenu link sleuth|^yahoo|^yandex|^zdm/\\d|^zoom marketplace/|^{{.*}}$|adscanner/|analyzer|archive|ask jeeves/teoma|bit\\.ly/|bluecoat drtr|browsex|burpcollaborator|capture|catch|check\\b|checker|chrome-lighthouse|chromeframe|classifier|cloudflare|convertify|crawl|cypress/|dareboost|datanyze|dejaclick|detect|dmbrowser|download|evc-batch/|exaleadcloudview|feed|firephp|functionize|gomezagent|headless|httrack|hubspot marketing grader|hydra|ibisbrowser|images|infrawatch|insight|inspect|iplabel|ips-agent|java(?!;)|jsjcw_scanner|library|linkcheck|mail\\.ru/|manager|measure|neustar wpm|node|nutch|offbyone|optimize|pageburst|pagespeed|parser|perl|phantomjs|pingdom|powermarks|preview|proxy|ptst[ /]\\d|reputation|resolver|retriever|rexx;|rigor|rss\\b|scanner\\.|scrape|server|sogou|sparkler/|speedcurve|spider|splash|statuscake|supercleaner|synapse|synthetic|tools|torrent|trace|transcoder|url|virtuoso|wappalyzer|webglance|webkit2png|whatcms/|zgrab';
      }
    });
  function c(t) {
    return (
      Boolean(t) &&
      (function () {
        if (a instanceof RegExp) return a;
        try {
          a = new RegExp(e, 'i');
        } catch (e) {
          a = r;
        }
        return a;
      })().test(t)
    );
  }
  var i,
    n,
    l = o({
      'src/index.ts'() {
        s(), (r = /bot|crawl|http|lighthouse|scan|search|spider/i);
      }
    });
  ((i = {
    'src/browser.ts'() {
      l(),
        'object' != typeof globalThis
          ? 'object' != typeof window
            ? 'object' != typeof global
              ? 'object' == typeof self && (self.isBot = c)
              : (global.isBot = c)
            : (window.isBot = c)
          : (globalThis.isBot = c);
    }
  }),
  function () {
    return n || (0, i[t(i)[0]])((n = { exports: {} }).exports, n), n.exports;
  })();
})();

/*

// theme.liquid changes

{% comment %} Tectonic custom code starts {% endcomment %}

{{ 'tt_heimdall.js' | asset_url | script_tag }}

<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "srhhqq3pcm");
</script>

{% comment %} Tectonic custom code ends {% endcomment %}

*/

/*
  Refer to the theme liquid code
*/

var startTime = Date.now();

var COOKIE_DOMAINS = ['.saadaa.in'];
var AB_DEST_TECTONIC = 'tectonic';
var AB_DEST_SHOPIFY = 'shopify';

var TECTONIC_SHOP_DOMAIN = 'store.saadaa.in';
var SHOPIFY_SHOP_DOMAIN = 'saadaa.in';
var HEIMDALL_LOGGER_HOST = 'tectonic-heimdall.pages.dev';
var AB_DESTS = new Set([AB_DEST_SHOPIFY, AB_DEST_TECTONIC]);

var SESSION_ID_TTL_DAYS = 1 / (24 * 2);
var REFERRER_TTL_DAYS = 1 / (24 * 6);
var SESSION_DEST_COOKIE_TTL_DAYS = 1 / (24 * 2);

var AB_DEST_COOKIE_NAME = '_tt_ab_dest';
var AB_DEST_COOKIE_VERSION = '_tt_ab_dest_ver';
var AB_AD_DEST_COOKIE_NAME = '_tt_ab_ad_dest';
var AB_AD_DEST_COOKIE_VERSION = '_tt_ab_ad_dest_ver';
var TT_SESS_DEST = '__tt_heimdall_sess_dest';
var TT_SESS_TYPE = '__tt_heimdall_sess_type';
var TT_SESS_DEST_VERSION = '__tt_heimdall_sess_dest_ver';

var TT_HERMES_DEVICE_ID_KEY = '__tt_hermes_device_id';
var TT_SESSION_ID_KEY = '__tt_hermes_client_session_id';
var TT_CLIENT_INSTANCE_ID_KEY = '__tt_hermes_client_instance_id';

var CID_COOKIE_NAME = '_tt_shopify_cid';
var TT_HEIMDALL_REFERRER = '__tt_heimdall_referrer';

var TT_SHOPIFY_B2B_URL_PARAM = 'destination';
var TT_SHOPIFY_B2B_REFERRER = '__tt_shopify_b2b_referrer';
var TT_SHOPIFY_B2B = '__tt_shopify_b2b';

var TT_DEBUG_DEST_PARAM = 'tt_heimdall_debug_dest';
var SHOPIFY_THEME_EDITOR_PREVIEW_PARAM = 'oseid';
var SHOPIFY_THEME_PREVIEW_ID_PARAM = 'preview_theme_id';
var SHOPIFY_THEME_PREVIEW_KEY_PARAM = 'preview_key';
// var SHOPIFY_THEME_PREVIEW_COOKIE_PARAM = "preview_theme";
var SHOPIFY_THEME_PREVIEW_HOST = 'shopifypreview.com';
var SHOPIFY_USER_TOKEN_NAME = '_shopify_y';
var SHOPIFY_SESSION_TOKEN_NAME = '_shopify_s';

// below should be modified basis the needs
// threshold should be 1 - traffic%
var HEIMDALL_AB_CONFIG = {
  TEST_MODE: false,
  ROUTE_DESKTOP_TO_SHOPIFY: false,
  ROUTE_BOTS_TO_SHOPIFY: true,
  ROUTE_ADS_TO_SHOPIFY: false,
  TT_DEST_THRESH: 0.50,
  TT_DEST_VERSION: 3,
  TT_AD_DEST_THRESH: 0.50,
  TT_AD_DEST_VERSION: 3,
  TT_SESSION_DEST_VERSION: 3,
  CUTOVER_DONE: false,
  ORG: 'saadaa',
  CONFIG_VERSION: 6,
  ROUTER_VERSION: 1
};

var TEST_USERS_LIST = new Set(['1234']);

var SHOPIFY_ROUTES = new Set([
  '/cdn/shop',
  '/cart.js',
  '/widget',
  '/api/redirect-hit',
  '/_t/c',
  'robots.txt',
  '.mp4',
  '.js',
  '.css',
  '.json',
  '.html',
  '.png',
  '.jpeg',
  '.jpg',
  '.webp',
  'sitemap',
  '/checkouts',
  '/tools',
  '/pages',
  '/blogs',
  '/apps',
  '/policies',
  '/products/pick-any-3-winter-wears', 
  '/products/pick-any-3-men-airy-linen-long-kurta-1', 
  '/products/pick-any-3-women-airy-linen-flared-dress-1', 
  '/products/pick-any-3-women-airy-linen-straight-pant', 
  '/products/pick-any-3-women-airy-linen-shirt', 
  '/products/pick-any-3-women-viscose-palazzo-pant', 
  '/products/pick-any-3-women-viscose-pleated-top-1', 
  '/products/pick-any-3-women-airy-linen-long-kurta', 
  '/products/pick-any-3-women-airy-linen-short-kurta-1', 
  '/products/pick-any-3-women-cotton-pant', 
  '/products/pick-any-5-women-cotton-pant', 
  '/products/pick-any-4-men-airy-linen-long-kurta', 
  '/products/pick-any-2-men-airy-linen-long-kurta', 
  '/products/pack-of-4-men-100-linen-shirt-combo', 
  '/products/pack-of-2-men-100-linen-shirt-combo', 
  '/products/pack-of-4-men-100-half-sleeve-linen-shirts-combo', 
  '/products/pack-of-2-men-100-half-sleeve-linen-shirts-combo', 
  '/products/pack-of-4-men-short-kurta-combo', 
  '/products/pack-of-2-men-short-kurta-combo', 
  '/products/pack-of-2-men-cotton-pants-combo', 
  '/products/pack-of-4-men-cotton-pants-combo', 
  '/products/pack-of-2-women-cotton-pant-combo', 
  '/products/pack-of-2-women-airy-linen-short-kurta-combo', 
  '/products/pack-of-2-women-4-way-stretchable-pants-combo', 
  '/products/pack-of-2-women-viscose-palazzo-pant-combo', 
  '/products/pack-of-2-women-airy-linen-shirt-combo', 
  '/products/pack-of-2-women-wide-leg-pants-combo', 
  '/products/pack-of-2-women-v-neck-sleeveless-top-combo', 
  '/products/pack-of-2-women-viscose-pleated-top-combo', 
  '/products/pack-of-2-women-airy-linen-wide-leg-pant-combo', 
  '/products/pack-of-2-women-airy-linen-straight-pant-combo', 
  '/products/pack-of-2-women-airy-linen-flared-dress-combo', 
  '/products/pack-of-2-women-straight-fit-formal-pants-combo', 
  '/products/pack-of-2-women-airy-linen-long-kurta-combo', 
  '/products/women-straight-fit-formal-pants-combo', 
  '/products/women-airy-linen-flared-dress-combo', 
  '/products/women-airy-linen-straight-pant-combo', 
  '/products/women-airy-linen-wide-leg-pant-combo', 
  '/products/women-viscose-pleated-top-combo', 
  '/products/women-v-neck-sleeveless-top-combo', 
  '/products/women-wide-leg-pants-commbo', 
  '/products/women-airy-linen-shirt-combo', 
  '/products/women-viscose-palazzo-pant-combo', 
  '/products/women-v-neck-sleeveless-top-combo', 
  '/products/women-wide-leg-pants-commbo', 
  '/products/women-airy-linen-shirt-combo', 
  '/products/women-viscose-palazzo-pant-combo', 
  '/products/women-4-way-stretchable-pants-combo', 
  '/products/women-airy-linen-short-kurta', 
  '/products/women-airy-linen-long-kurta-combo'
]);

var TECTONIC_ALLOWED_PAGES = new Set([]);

function isEmptyStr(value) {
  return (
    value == null || (typeof value === 'string' && value.trim().length === 0)
  );
}

function matchesSymmetric(a, b) {
  var keysA = Object.keys(a),
    keysB = Object.keys(b);
  var keys = new Set([].concat(Object.keys(a), Object.keys(b)));
  if (keys.size !== keysA.length || keys.size !== keysB.length) return false;
  return Array.from(keys).every(
    key => a.hasOwnProperty(key) && b.hasOwnProperty(key) && a[key] === b[key]
  );
}

var logDetails = {
  config: {
    testMode: HEIMDALL_AB_CONFIG.TEST_MODE,
    destVersion: HEIMDALL_AB_CONFIG.TT_DEST_VERSION,
    destThreshold: HEIMDALL_AB_CONFIG.TT_DEST_THRESH,
    adDestThreshold: HEIMDALL_AB_CONFIG.TT_AD_DEST_THRESH,
    adDestVersion: HEIMDALL_AB_CONFIG.TT_AD_DEST_VERSION,
    sessionDestVersion: HEIMDALL_AB_CONFIG.TT_SESSION_DEST_VERSION,
    routeDesktopToShopify: HEIMDALL_AB_CONFIG.ROUTE_DESKTOP_TO_SHOPIFY,
    routeBotsToShopify: HEIMDALL_AB_CONFIG.ROUTE_BOTS_TO_SHOPIFY,
    routeAdsToShopify: HEIMDALL_AB_CONFIG.ROUTE_ADS_TO_SHOPIFY,
    isCutOverDone: HEIMDALL_AB_CONFIG.CUTOVER_DONE,
    org: HEIMDALL_AB_CONFIG.ORG,
    configVersion: HEIMDALL_AB_CONFIG.CONFIG_VERSION,
    routerVersion: HEIMDALL_AB_CONFIG.ROUTER_VERSION
  },
  input: {},
  state: {},
  output: {}
};

var globalProps = {
  referrer: document.referrer || ''
};

var currentUrl = window.location.href || '';
var currentUrlParams = window.location.search;

var debugDestination = '';
var isThemePreview = false;
var heimdallErr = null;
var isErrored = false;
var execTime = null;
var sendImmediately = false;
var isB2BReferrer = false;
var isB2BUser = false;
var shopifySession = getCookie(SHOPIFY_SESSION_TOKEN_NAME);
var shopifyUser = getCookie(SHOPIFY_USER_TOKEN_NAME);

function checkIfMobile(userAgent) {
  return (
    /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(userAgent) ||
    /\b(Android|Windows Phone|iPad|iPod)\b/i.test(userAgent)
  );
}

function checkIfSocialBrowser(userAgent) {
  return (
    !isEmptyStr(userAgent) &&
    (userAgent.toLowerCase().indexOf('fbav') !== -1 ||
      userAgent.toLowerCase().indexOf('fban') !== -1 ||
      userAgent.toLowerCase().indexOf('fbios') !== -1 ||
      userAgent.toLowerCase().indexOf('fb_iab') !== -1 ||
      userAgent.toLowerCase().indexOf('instagram') !== -1)
  );
}

function generateRandomId() {
  return (
    Math.random().toString(36).substring(2, 16) +
    Math.random().toString(36).substring(2, 16)
  );
}

var _sending = false;
var _deferSendTimer = null;

// we an an internal _id to each event object in the format upoc-counter
// this makes it easier for us to remove successfully sent event from local db
var _internalEventIdPrefix = new Date().getTime();
var _internalEventIdCounter = 0;

var transactions = {
  _key: 'tt-heimdall-logger',

  // maximum number of items allowed before we start dropping first items
  _maxLength: 100,

  // returns a list of all transactions or empty array
  all: function () {
    return JSON.parse(localStorage.getItem(transactions._key) || '[]');
  },

  // adds an item to the transaction log
  add: function (data) {
    // get existing transactions
    var existing = transactions.all();

    // increase event _id counter
    _internalEventIdCounter++;

    // add a unique event id (makes it easier for us to clean up sent events)
    data._id = _internalEventIdPrefix + '-' + _internalEventIdCounter;

    // if adding this item takes us over the max number of events
    if (existing.length + 1 > transactions._maxLength) {
      // remove the first item added
      existing.shift();
    }

    // add latest to end of stack
    existing.push(data);

    // save changes
    localStorage.setItem(transactions._key, JSON.stringify(existing));
  },

  // removes events from the transaction log
  remove: function (itemsToRemove) {
    // get array of ids to remove
    var idsToRemove = (itemsToRemove || []).map(function (item) {
      return item._id;
    });

    // go through existing transactions, removing items that contain a matching id
    var remaining = transactions.all().filter(function (item) {
      return idsToRemove.indexOf(item._id) === -1;
    });

    // save changes
    localStorage.setItem(transactions._key, JSON.stringify(remaining));
  },

  // clears any pending transactions
  clear: function () {
    localStorage.setItem(transactions._key, JSON.stringify([]));
  }
};

function promisesInSequence(promises) {
  var result = Promise.resolve();

  promises.forEach(function (promise) {
    result = result.then(promise);
  });

  return result;
}

function cloneObject(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function sendLog(logObject) {
  var url = 'https://'.concat(HEIMDALL_LOGGER_HOST, '/heimdall/log');
  var dataToSend = window.btoa(
    unescape(encodeURIComponent(JSON.stringify(logObject)))
  );

  // console.log("logObject", logObject, "dataToSend", dataToSend);

  url += '?log_data=' + encodeURIComponent(dataToSend);
  return fetch(url, { method: 'GET', keepalive: true });
}

function sendAsync() {
  // if we're busy sending
  if (_sending) {
    // clear defer timeout if it exists
    if (_deferSendTimer) clearTimeout(_deferSendTimer);
    // set a new timer to recall send in .5s
    _deferSendTimer = setTimeout(sendAsync, 500);
    // exit
    return;
  }

  // get all items waiting to be sent
  var items = transactions.all();

  // if we have nothing to send, exit
  if (items.length === -1) return;

  // otherwise, flag sending as started
  _sending = true;

  // clear defer timeout if it exists
  if (_deferSendTimer) {
    clearTimeout(_deferSendTimer);
    _deferSendTimer = null;
  }

  // convert each pending transaction into a request promise
  var requests = items.map(function (item) {
    return function () {
      // do not modify the original
      var itemToSend = cloneObject(item);
      // console.log("Sending deferred requests");
      return sendLog(itemToSend.eventBody)
        .then(function (respPromise) {
          // mark item as completed
          item.__completed = true;
          return respPromise.text();
        })
        .then(function (response) {
          // console.log("Log event response ", response);
        });
    };
  });

  // execute requests in order, if any fail, stop executing as we need transactions to be in order
  promisesInSequence(requests)
    .then(function () {
      // get completed requests
      var completedRequests = items.filter(function (item) {
        return item.__completed;
      });

      // remove completed requests from pending transaction
      transactions.remove(completedRequests);

      // mark sending complete
      _sending = false;
    })
    .catch(function (logSendErr) {
      // console.error("Error in sending batched requests", logSendErr)
      // something went wrong, allow this method to be recalled
      _sending = false;
    });
}

function setCookie(name, value, days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = 'expires='.concat(date.toUTCString(), ';');
  }
  COOKIE_DOMAINS.forEach(function (cookieDomain) {
    var cookieStr = ''
      .concat(name, '=')
      .concat(encodeURIComponent(value || ''), '; ')
      .concat(expires, ' domain=')
      .concat(cookieDomain, '; path=/;');
    // console.log("cookieStr", cookieStr);
    document.cookie = cookieStr;
  });
  // document.cookie = name + "=" + (value || "")  + expires + "; domain=.st9.tech; path=/";
}

function getCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0)
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
}

function eraseCookie(name) {
  COOKIE_DOMAINS.forEach(function (cookieDomain) {
    var cookieStr = ''
      .concat(name, '=; domain=')
      .concat(cookieDomain, '; path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;');
    document.cookie = cookieStr;
  });
  // document.cookie = name +'=; domain=.st9.tech; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function checkIsShopifyRoute(path, pathsList) {
  if (TECTONIC_ALLOWED_PAGES.has(path)) {
    return false;
  }

  if (pathsList.has(path)) {
    return true;
  }
  var pathsArr = Array.from(pathsList);
  for (let i = 0; i < pathsArr.length; i++) {
    var pathItem = pathsArr[i];
    if (path.startsWith(pathItem) || path.indexOf(pathItem) !== -1) {
      return true;
    }
  }
  return false;
}

function generateRedirectionUrl(
  ttResolvedDest,
  requestId,
  additionalUrlParams
) {
  var originalUrl = new URL(window.location.href);
  originalUrl.searchParams.delete('ttc');
  var originalUrlSearchParams = originalUrl.searchParams;
  var originHost = originalUrl.host;

  var redirectionHost =
    ttResolvedDest === AB_DEST_TECTONIC
      ? TECTONIC_SHOP_DOMAIN
      : SHOPIFY_SHOP_DOMAIN;

  var redirectionUrl = new URL(
    window.location.href.replace(originHost, redirectionHost)
  );

  Object.keys(additionalUrlParams || {}).forEach(function (key) {
    if (!isEmptyStr(additionalUrlParams[key])) {
      originalUrlSearchParams.append(key, additionalUrlParams[key]);
    }
  });

  if (requestId) {
    var finalQueryParams = '?'.concat('request_id=', requestId);
    if (originalUrlSearchParams.size > 0) {
      finalQueryParams = finalQueryParams.concat(
        '&',
        originalUrlSearchParams.toString()
      );
    }
    redirectionUrl.search = finalQueryParams;
    // redirectionUrl.searchParams.set("request_id", requestId);
  }

  return redirectionUrl.toString();
}

function getOrCreateHermesDeviceId() {
  var deviceId = getCookie(TT_HERMES_DEVICE_ID_KEY);
  if (isEmptyStr(deviceId)) {
    // console.log("Session id absent/expired generating");
    deviceId = generateRandomId();
  }
  setCookie(TT_HERMES_DEVICE_ID_KEY, deviceId, 180);
  return deviceId;
}

function getSessionId() {
  var sessionId = getCookie(TT_SESSION_ID_KEY);
  if (isEmptyStr(sessionId)) {
    // console.log("Session id absent/expired generating");
    sessionId = generateRandomId();
  }
  setCookie(TT_SESSION_ID_KEY, sessionId, SESSION_ID_TTL_DAYS);
  return sessionId;
}

function getClientInstanceId() {
  var clientInstanceId = getCookie(TT_CLIENT_INSTANCE_ID_KEY);
  if (isEmptyStr(clientInstanceId)) {
    // console.log("Client Instance Id absent/expired generating");
    clientInstanceId = generateRandomId();
  }
  setCookie(TT_CLIENT_INSTANCE_ID_KEY, clientInstanceId);
  return clientInstanceId;
}

// function getSessionExpirySec() {
//   if (!HEIMDALL_AB_CONFIG.TT_SESSION_COOKIE_RESET_HR) {
//     return null
//   }
//   var currentDate = new Date()
//   var configHours = HEIMDALL_AB_CONFIG.TT_SESSION_COOKIE_RESET_HR;
//   var tillDate = new Date(currentDate)
//   tillDate.setHours(configHours, 0, 0, 0, 0)
//   if (configHours <= currentDate.getHours()) {
//     tillDate.setDate(currentDate.getDate() + 1)
//   }
//   return Math.abs(tillDate - currentDate)
// }

function getCurrentSessionType() {
  return getCookie(TT_SESS_TYPE);
}

function setCurrentSessionDestination(dest, sessionType, expiry) {
  setCookie(TT_SESS_DEST, dest, expiry);
  setCookie(TT_SESS_TYPE, sessionType, expiry);
  setCookie(
    TT_SESS_DEST_VERSION,
    ''.concat(HEIMDALL_AB_CONFIG.TT_SESSION_DEST_VERSION),
    180
  );
}

function getCurrentSessionDestination() {
  var cookieSessDest = getCookie(TT_SESS_DEST);

  if (isEmptyStr(cookieSessDest)) {
    return null;
  }

  var cookieSessDestVer = getCookie(TT_SESS_DEST_VERSION);
  cookieSessDestVer = isEmptyStr(cookieSessDestVer)
    ? -1
    : parseInt(cookieSessDestVer);

  if (cookieSessDestVer < HEIMDALL_AB_CONFIG.TT_SESSION_DEST_VERSION) {
    return null;
  }

  return cookieSessDest;
}

try {
  window.addEventListener(window.cordova ? 'deviceready' : 'load', sendAsync, {
    passive: true
  });
  window.addEventListener('online', sendAsync, { passive: true });
} catch (sendSetupErr) {
  console.error('[HEIMDALL_SEND_SETUP_ERR] ', sendSetupErr);
}

try {
  debugDestination =
    new URLSearchParams(currentUrlParams).get(TT_DEBUG_DEST_PARAM) || '';
} catch (debugDestErr) {
  console.error('[HEIMDALL_DEBUG_SETUP_ERR] ', debugDestErr);
}

try {
  // console.log("currentUrlParams", currentUrlParams)
  var urlSearchParams = new URLSearchParams(currentUrlParams);
  // console.log("urlSearchParams", urlSearchParams)
  isThemePreview =
    !isEmptyStr(
      urlSearchParams.get(SHOPIFY_THEME_EDITOR_PREVIEW_PARAM) ||
        urlSearchParams.get(SHOPIFY_THEME_PREVIEW_ID_PARAM) ||
        urlSearchParams.get(SHOPIFY_THEME_PREVIEW_KEY_PARAM) ||
        ''
    ) || window.location.href.indexOf(SHOPIFY_THEME_PREVIEW_HOST) !== -1;
  // || getCookie(SHOPIFY_THEME_PREVIEW_COOKIE_PARAM) === '1';
  // console.log("SHOPIFY_THEME_PREVIEW_ID_PARAM", urlSearchParams.get(SHOPIFY_THEME_PREVIEW_ID_PARAM))
  // console.log("isThemePreview", isThemePreview)
} catch (previewParamErr) {
  console.error('[HEIMDALL_DEBUG_SETUP_ERR] ', previewParamErr);
}

try {
  isB2BReferrer = document.referrer.indexOf('shopify') !== -1;
  if (isB2BReferrer) {
    setCookie(TT_SHOPIFY_B2B_REFERRER, document.referrer, 180);
  } else {
    isB2BReferrer = !isEmptyStr(getCookie(TT_SHOPIFY_B2B_REFERRER));
  }
  var isB2BUrl =
    (new URLSearchParams(currentUrlParams).get(TT_SHOPIFY_B2B_URL_PARAM) ||
      '') === 'b2b';
  if (isB2BUrl || isB2BReferrer) {
    setCookie(TT_SHOPIFY_B2B, 'true', 180);
  }
  isB2BUser = !isEmptyStr(getCookie(TT_SHOPIFY_B2B));
} catch (b2bReferrerCheckError) {
  console.error('[HEIMDALL_DEBUG_SETUP_ERR] ', b2bReferrerCheckError);
}

function getConnectionType() {
  var connection =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection ||
    {};
  return connection.effectiveType || connection.type || '';
}

try {
  globalProps['connectionType'] = getConnectionType();
  var connection =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection;
  if (connection && connection.addEventListener) {
    connection.addEventListener('change', function () {
      globalProps['connectionType'] = getConnectionType();
    });
  }
} catch (connErr) {
  console.error('[HEIMDALL_SETUP_ERR] ', connErr);
}

// function updateCart(updates, attributes) {
//   // console.log("updateCartFunc", updates, attributes)
//   var shouldUpdate = (updates && updates.length > 0) || (attributes && attributes.length > 0);

//   if (shouldUpdate) {
//     var formData = new FormData();

//     updates.forEach((item) => {
//       formData.append("updates[" + item["variantId"] + "]", item["quantity"]);
//     });

//     attributes.forEach((attr) => {
//       // console.log("Updating cart attr")
//       formData.append("attributes[" + attr["key"] + "]", attr["value"]);
//     })

//     var host = window.shopifyRootHost.replace(/\/+$/, '');
//     fetch(host + "/cart/update.js", {
//       method: "POST",
//       body: formData,
//     })
//       .then((response) => {
//         return response.json();
//       })
//       .then((respJson) => {
//         // console.log("CART_SYNC_API_SUCCESS");
//         console.log("CART_SYNC_API_SUCCESS", respJson);
//       })
//       .catch((error) => {
//         console.error("CART_SYNC_API_ERR", error);
//       });
//   }
// }

// function sanitizeCartId(cartId) {
//   if (isEmptyStr(cartId)) {
//     return null
//   }
//   try {
//     var parsedCartId = new URL(cartId)
//     parsedCartId.searchParams.delete("key");
//     return parsedCartId.toString();
//   } catch (error) {
//     return null
//   }
// }

var latestEncodedCart = null;

// try {
//   // init version support for additional attributes, clearing of the same needs to be added.
//   var toOverwriteCartParam =
//     new URLSearchParams(currentUrlParams).get("ttc") || "";
//   // { "items": [], "attributes": {} }
//   var latestCart = window.cartItems || {};

//   var currentPromos = (window.cartPromos || []).filter((promo) => !isEmptyStr(promo))

//   var CLEAR_CART_ATTR_PAYLOAD = [{ "key": "tectonicSource", "value": "" }, { "key": "tectonicCartGeneratedID", "value": "" }, { "key": "tectonicCartId", "value": "" }]

//   if (!isEmptyStr(toOverwriteCartParam)) {
//     var toOverwriteCart = JSON.parse(atob(toOverwriteCartParam));
//     var curentCartItems = window.cartItems || {};
//     var remoteCartItems = toOverwriteCart["items"].reduce(
//       (obj, item) =>
//         Object.assign(obj, { [item["variantId"]]: item["quantity"] }),
//       {}
//     );
//     var remoteCartAttributes = toOverwriteCart["attributes"]

//     latestCart = remoteCartItems;

//     // console.log("cartItems", curentCartItems, remoteCartItems)

//     // console.log("remoteCartAttributes", remoteCartAttributes)

//     // var areCartSame = matchesSymmetric(toOverwriteCart["items"], curentCartItems)
//     var currentCart = Object.keys(curentCartItems),
//       remoteCart = Object.keys(remoteCartItems);
//     var allItems = new Set([].concat(currentCart, remoteCart));

//     // console.log("toOverwriteCart", toOverwriteCart, currentCart, remoteCart);
//     var updates = [];
//     var isCartCleared = true;
//     allItems.forEach((itemId) => {
//       var itemCurrentCount = objGetOrDefault(curentCartItems, itemId)
//       var itemRemoteCount = objGetOrDefault(remoteCartItems, itemId)
//       // console.log("itemDetails", typeof itemId, itemId, itemCurrentCount, itemRemoteCount)
//       if (itemRemoteCount == null) {
//         // not present in remote hence removing i.e setting quantity to zero
//         updates.push({ variantId: itemId, quantity: 0 });
//       } else if (itemRemoteCount != null && itemRemoteCount !== itemCurrentCount) {
//         // present in remote and the values are different, redundant null check above but just to be verbose
//         updates.push({ variantId: itemId, quantity: itemRemoteCount });
//         isCartCleared = false;
//       }
//     });

//     var attributes = [];
//     // if any updates set attributes
//     if (updates.length > 0) {
//       // if cart is cleared then remove the source
//       if (isCartCleared) {
//         attributes = CLEAR_CART_ATTR_PAYLOAD
//       } else {
//         attributes = [
//           { "key": "tectonicSource", "value": "tectonic" },
//           { "key": "tectonicCartGeneratedID", "value": objGetOrDefault(remoteCartAttributes, "tectonicCartGeneratedID", "") || "" },
//           { "key": "tectonicCartId", "value": sanitizeCartId(objGetOrDefault(remoteCartAttributes, "tectonicCartId", "")) || "" },
//           { "key": "ttShopifyUserId", "value": getCookie(SHOPIFY_USER_TOKEN_NAME) || "" },
//           { "key": "ttShopifySessionId", "value": getCookie(SHOPIFY_SESSION_TOKEN_NAME) || "" }
//         ]
//       }
//     }

//     // console.log("cartUpdates", updates, attributes)
//     // updateCart(updates, attributes)
//   } else if (window.cartItems.length === 0 && objGetOrDefault(window.cartAttr, "tectonicSource") === "tectonic") {
//     // updateCart([], CLEAR_CART_ATTR_PAYLOAD)
//   }

//   // this migt not be the latest data but before navigating to external we generally load a new page, so it should ideally have the new data
//   // latestEncodedCart = latestCart.length > 0 ? btoa(JSON.stringify(latestCart)) : "";
//   var cartDataToSend = { items: [], attributes: {}, discountCodes: currentPromos };
//   Object.keys(latestCart).forEach((itemId) => {
//     cartDataToSend["items"].push({
//       variantId: `${itemId}`,
//       quantity: latestCart[itemId],
//     });
//   });
//   latestEncodedCart = btoa(JSON.stringify(cartDataToSend));
//   // console.log("[HEIMDALL_CART] cartEncData", latestEncodedCart);
// } catch (cartSyncErr) {
//   console.error("[HEIMDALL_CART_SYNC_ERR] ", cartSyncErr);
// }

var requestId = generateRandomId();

try {
  var reqPath = window.location.pathname.replace(/\/$/, '').toLowerCase();

  var currentDestination = getCurrentSessionDestination();
  // console.log("currentDestination", currentDestination);

  var currentSessionType = getCurrentSessionType();
  // console.log("currentSessionType", currentSessionType);

  var userAgent = window.navigator.userAgent;
  // console.log("userAgent", userAgent);

  var sessionId = getSessionId();
  // console.log("sessionId", sessionId);

  var deviceId = getOrCreateHermesDeviceId();
  // console.log("deviceId", deviceId);

  var clientInstanceId = getClientInstanceId();

  // var customerId = window.customerId || "";
  // console.log("deviceId", deviceId);

  // const client = new ClientJS();
  // // Get the client's fingerprint id
  // const fingerprint = client.getFingerprint();
  // console.log("fingerprint", fingerprint);

  logDetails['input'] = {
    requestId: requestId,
    currentUrl: currentUrl,
    deviceId: deviceId,
    sessionId: sessionId,
    userAgent: userAgent,
    // customerId: customerId,
    clientInstanceId: clientInstanceId,
    currentSessionDestination: currentDestination,
    currentSessionType: currentSessionType,
    // toOverwriteCart: toOverwriteCartParam,
    shopifySession: shopifySession,
    shopifyUser: shopifyUser
  };

  var isDesktop = !checkIfMobile(userAgent);
  var isSocialBrowser = checkIfSocialBrowser(userAgent);
  var isBotReq = isBot(userAgent);

  // console.log("Device info", isDesktop, isSocialBrowser, isBotReq);

  var queryString = currentUrlParams;
  var queryParams = new URLSearchParams(queryString);
  var adQueryParams = [
    queryParams.get('tw_source'),
    queryParams.get('utm_source'),
    queryParams.get('utm_medium'),
    queryParams.get('utm_campaign'),
    queryParams.get('tw_adid'),
    queryParams.get('tw_campaign'),
    queryParams.get('fbclid'),
    queryParams.get('gclid'),
    queryParams.get('epik'),
    queryParams.get('ScCid')
  ]
    .filter(function (data) {
      return !isEmptyStr(data);
    })
    .map(function (ad_param) {
      return ad_param.toLowerCase();
    });

  // var isGoogleAdReq = adQueryParams.indexOf("google") >= 0 || queryString.includes("gclid");
  var isSocialBrowser = checkIfSocialBrowser(userAgent);
  var isAdReq = adQueryParams.length > 0 || isSocialBrowser;

  var tectonicCustIdCookie = getCookie(CID_COOKIE_NAME);

  // console.log(
  //   "[TT_HEIMDALL]",
  //   tectonicCustIdCookie
  // );

  var currentCookie = getCookie(AB_DEST_COOKIE_NAME);
  var currentCookieVersion = getCookie(AB_DEST_COOKIE_VERSION);
  var ttDirectABDest = isEmptyStr(currentCookie) ? '' : currentCookie;
  var ttDirectABDestVersion = isEmptyStr(currentCookieVersion)
    ? -1
    : parseInt(currentCookieVersion);

  logDetails['input']['ttDirectABDestCookie'] = ttDirectABDest;
  logDetails['input']['ttDirectABDestVersionCookie'] = ttDirectABDestVersion;

  var currentADCookie = getCookie(AB_AD_DEST_COOKIE_NAME);
  var currentADCookieVersion = getCookie(AB_AD_DEST_COOKIE_VERSION);
  var ttADABDest = isEmptyStr(currentADCookie) ? '' : currentADCookie;
  var ttADABDestVersion = isEmptyStr(currentADCookieVersion)
    ? -1
    : parseInt(currentADCookieVersion);

  logDetails['input']['ttADABDestCookie'] = ttADABDest;
  logDetails['input']['ttADABDestVersionCookie'] = ttADABDestVersion;

  var shouldRouteAdsToShopify = HEIMDALL_AB_CONFIG.ROUTE_ADS_TO_SHOPIFY;
  var shouldRouteDesktopToShopify = HEIMDALL_AB_CONFIG.ROUTE_DESKTOP_TO_SHOPIFY;
  var shouldRouteBotsToShopify = HEIMDALL_AB_CONFIG.ROUTE_BOTS_TO_SHOPIFY;
  var isTestMode = HEIMDALL_AB_CONFIG.TEST_MODE;
  var isCutoverDone = HEIMDALL_AB_CONFIG.CUTOVER_DONE;

  logDetails['state'] = {
    shouldRouteAdsToShopify: shouldRouteAdsToShopify,
    shouldRouteDesktopToShopify: shouldRouteDesktopToShopify,
    shouldRouteBotsToShopify: shouldRouteBotsToShopify,
    isTestMode: isTestMode,
    isCutoverDone: isCutoverDone,
    isB2BReferrer: isB2BReferrer,
    isB2BUser: isB2BUser,
    isAdReq: isAdReq,
    isSocialBrowser: isSocialBrowser,
    isBotReq: isBotReq,
    isDesktop: isDesktop,
    latestEncodedCart: latestEncodedCart
  };

  var hasDebugDestination = AB_DESTS.has(debugDestination);
  logDetails['state']['hasDebugDestination'] = hasDebugDestination;

  var isShopifyRoute = checkIsShopifyRoute(reqPath, SHOPIFY_ROUTES);
  logDetails['state']['isShopifyRoute'] = isShopifyRoute;

  var isTestUser =
    (tectonicCustIdCookie && TEST_USERS_LIST.has(tectonicCustIdCookie)) ||
    false;

  logDetails['state']['isTestUser'] = isTestUser;

  var shouldForceCurrReqToShopify =
    isB2BUser ||
    isB2BReferrer ||
    isShopifyRoute ||
    isThemePreview ||
    (shouldRouteAdsToShopify && isAdReq) ||
    (shouldRouteBotsToShopify && isBotReq) ||
    (shouldRouteDesktopToShopify && isDesktop);

  logDetails['state']['shouldForceCurrReqToShopify'] =
    shouldForceCurrReqToShopify;

  var isABReq =
    !isTestMode &&
    !shouldForceCurrReqToShopify &&
    !isTestUser &&
    !hasDebugDestination;

  logDetails['output']['isABReq'] = isABReq;

  var ttTempABDest = '';

  if (isTestMode || shouldForceCurrReqToShopify) {
    ttTempABDest = AB_DEST_SHOPIFY;
  }

  if (isTestUser && !shouldForceCurrReqToShopify) {
    ttTempABDest = AB_DEST_TECTONIC;
  }

  if (hasDebugDestination) {
    ttTempABDest = debugDestination;
  }

  logDetails['output']['tempABDest'] = ttTempABDest;

  var ttADDestProb = -1;
  var isModified = false;
  var isADCookieAbsentOrOutdated =
    !AB_DESTS.has(ttADABDest) ||
    ttADABDestVersion < HEIMDALL_AB_CONFIG.TT_AD_DEST_VERSION;

  logDetails['output']['isADCookieAbsentOrOutdated'] =
    isADCookieAbsentOrOutdated;

  if (
    isABReq &&
    !shouldRouteAdsToShopify &&
    isAdReq &&
    isADCookieAbsentOrOutdated
  ) {
    isModified = true;
    ttADDestProb = Math.random();
    if (ttADDestProb > HEIMDALL_AB_CONFIG.TT_AD_DEST_THRESH) {
      ttADABDest = AB_DEST_TECTONIC;
    } else {
      ttADABDest = AB_DEST_SHOPIFY;
    }
    ttADABDestVersion = HEIMDALL_AB_CONFIG.TT_AD_DEST_VERSION;
  }

  logDetails['output']['ttADABDestCookie'] = ttADABDest;
  logDetails['output']['ttADABDestVersionCookie'] = ttADABDestVersion;
  logDetails['output']['ttADDestProb'] = ttADDestProb;
  logDetails['output']['isADDestModified'] = isModified;

  var isRegularReq = ttTempABDest === '';

  logDetails['output']['isRegularReq'] = isRegularReq;

  var isDirectCookieAbsentOrOutdated =
    !AB_DESTS.has(ttDirectABDest) ||
    ttDirectABDestVersion < HEIMDALL_AB_CONFIG.TT_DEST_VERSION;

  logDetails['output']['isCookieAbsentOrOutdated'] =
    isDirectCookieAbsentOrOutdated;

  var ttDirectDestProb = -1;
  var isModified = false;

  if (isABReq && !isAdReq && isDirectCookieAbsentOrOutdated) {
    isModified = true;
    ttDirectDestProb = Math.random();
    if (isTestUser || ttDirectDestProb > HEIMDALL_AB_CONFIG.TT_DEST_THRESH) {
      ttDirectABDest = AB_DEST_TECTONIC;
    } else {
      ttDirectABDest = AB_DEST_SHOPIFY;
    }
    ttDirectABDestVersion = HEIMDALL_AB_CONFIG.TT_DEST_VERSION;
  }

  logDetails['output']['ttDirectABDestCookie'] = ttDirectABDest;
  logDetails['output']['ttDirectABDestVersionCookie'] = ttDirectABDestVersion;
  logDetails['output']['ttDirectDestProb'] = ttDirectDestProb;
  logDetails['output']['isDirectDestModified'] = isModified;

  var ttABDest = isAdReq ? ttADABDest : ttDirectABDest;

  logDetails['output']['ttABDest'] = ttABDest;

  var ttResolvedDest = isABReq ? ttABDest : ttTempABDest;

  // Only use session destination if cutover is not done
  if (
    isABReq &&
    !isEmptyStr(currentDestination) &&
    AB_DESTS.has(currentDestination)
  ) {
    ttResolvedDest = currentDestination;
  }

  // Ensuring things to go tectonic once cutover is done
  if (isABReq && isCutoverDone) {
    ttResolvedDest = AB_DEST_TECTONIC;
  }

  logDetails['output']['ttResolvedDest'] = ttResolvedDest;

  if (isABReq) {
    if (isAdReq) {
      setCookie(AB_AD_DEST_COOKIE_NAME, ttADABDest, 180);
      setCookie(AB_AD_DEST_COOKIE_VERSION, ''.concat(ttADABDestVersion), 180);
    } else {
      setCookie(AB_DEST_COOKIE_NAME, ttDirectABDest, 180);
      setCookie(AB_DEST_COOKIE_VERSION, ''.concat(ttDirectABDestVersion), 180);
    }
  }

  var additionalUrlParams = {};

  if (ttResolvedDest === AB_DEST_TECTONIC) {
    additionalUrlParams = {
      tthclid: btoa(
        JSON.stringify({
          referrer: document.referrer,
          session: shopifySession,
          user: shopifyUser
        })
      )
    };
    // if (!isEmptyStr(latestEncodedCart)) {
    //   additionalUrlParams["ttsc"] = latestEncodedCart;
    // }
  }

  var ttResolvedUrl = generateRedirectionUrl(
    ttResolvedDest,
    requestId,
    additionalUrlParams
  );

  logDetails['output']['ttResolvedUrl'] = ttResolvedUrl;
  logDetails['output']['sessionExpiryDays'] = SESSION_DEST_COOKIE_TTL_DAYS;

  // console.log("ttResolvedDest", ttResolvedDest, "ttResolvedUrl", ttResolvedUrl);
  execTime = Date.now() - startTime;
  // console.log("execTime", execTime);

  if (isEmptyStr(currentSessionType) && isEmptyStr(currentDestination)) {
    currentSessionType = !isABReq ? 'TEMP' : isAdReq ? 'AD' : 'DIRECT';
  }

  logDetails['output']['currentSessionType'] = currentSessionType;

  // console.log("Final log", logDetails);
  if (ttResolvedDest === AB_DEST_TECTONIC) {
    sendImmediately = true;
    setCurrentSessionDestination(
      ttResolvedDest,
      currentSessionType,
      2 * SESSION_DEST_COOKIE_TTL_DAYS
    );
    // setCookie(TT_HEIMDALL_REFERRER, document.referrer || "", REFERRER_TTL_DAYS);
    window.location.replace(ttResolvedUrl);
  } else if (ttResolvedDest === AB_DEST_SHOPIFY) {
    setCurrentSessionDestination(
      ttResolvedDest,
      currentSessionType,
      SESSION_DEST_COOKIE_TTL_DAYS
    );
  }
  // console.log("TT_HEIMDALL_SUCCESS")
} catch (execErr) {
  console.error('[HEIMDALL_EXEC_ERR] ', execErr);
  heimdallErr = execErr.stack || execErr.message;
  isErrored = true;
} finally {
  try {
    Object.keys(globalProps).forEach(function (propName) {
      logDetails['input'][propName] = globalProps[propName];
    });

    logDetails['input']['encodedUrl'] = window.btoa(currentUrl);

    var logBody = {
      heimdall: logDetails,
      client: {
        url: currentUrl,
        _time: Date.now(),
        execStatus: isErrored ? 'FAILED' : 'SUCCESS',
        execTime: execTime,
        error: heimdallErr
      }
    };

    // console.log("[HEIMDALL_EXEC_LOG]", logBody);

    if (sendImmediately) {
      sendLog(logBody);
    } else {
      transactions.add({ eventBody: logBody });
      sendAsync();
    }
  } catch (sendErr) {
    console.error('[HEIMDALL_SEND_ERR] ', sendErr);
  }
}
