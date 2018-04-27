/*! Cookies.js - 0.4.0; Copyright (c) 2014, Scott Hamper; http://www.opensource.org/licenses/MIT */
(function(e) {
  "use strict";
  var b = function(a, d, c) {
    return 1 === arguments.length ? b.get(a) : b.set(a, d, c);
  };
  b._document = document;
  b._navigator = navigator;
  b.defaults = { path: "/" };
  b.get = function(a) {
    b._cachedDocumentCookie !== b._document.cookie && b._renewCache();
    return b._cache[a];
  };
  b.set = function(a, d, c) {
    c = b._getExtendedOptions(c);
    c.expires = b._getExpiresDate(d === e ? -1 : c.expires);
    b._document.cookie = b._generateCookieString(a, d, c);
    return b;
  };
  b.expire = function(a, d) {
    return b.set(a, e, d);
  };
  b._getExtendedOptions = function(a) {
    return {
      path: (a && a.path) || b.defaults.path,
      domain: (a && a.domain) || b.defaults.domain,
      expires: (a && a.expires) || b.defaults.expires,
      secure: a && a.secure !== e ? a.secure : b.defaults.secure
    };
  };
  b._isValidDate = function(a) {
    return (
      "[object Date]" === Object.prototype.toString.call(a) &&
      !isNaN(a.getTime())
    );
  };
  b._getExpiresDate = function(a, d) {
    d = d || new Date();
    switch (typeof a) {
      case "number":
        a = new Date(d.getTime() + 1e3 * a);
        break;
      case "string":
        a = new Date(a);
    }
    if (a && !b._isValidDate(a))
      throw Error(
        "`expires` parameter cannot be converted to a valid Date instance"
      );
    return a;
  };
  b._generateCookieString = function(a, b, c) {
    a = a.replace(/[^#$&+\^`|]/g, encodeURIComponent);
    a = a.replace(/\(/g, "%28").replace(/\)/g, "%29");
    b = (b + "").replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent);
    c = c || {};
    a = a + "=" + b + (c.path ? ";path=" + c.path : "");
    a += c.domain ? ";domain=" + c.domain : "";
    a += c.expires ? ";expires=" + c.expires.toUTCString() : "";
    return (a += c.secure ? ";secure" : "");
  };
  b._getCookieObjectFromString = function(a) {
    var d = {};
    a = a ? a.split("; ") : [];
    for (var c = 0; c < a.length; c++) {
      var f = b._getKeyValuePairFromCookieString(a[c]);
      d[f.key] === e && (d[f.key] = f.value);
    }
    return d;
  };
  b._getKeyValuePairFromCookieString = function(a) {
    var b = a.indexOf("="),
      b = 0 > b ? a.length : b;
    try {
      return {
        key: decodeURIComponent(a.substr(0, b)),
        value: decodeURIComponent(a.substr(b + 1))
      };
    } catch (e) {
      return { key: a.substr(0, b), value: a.substr(b + 1) };
    }
  };
  b._renewCache = function() {
    b._cache = b._getCookieObjectFromString(b._document.cookie);
    b._cachedDocumentCookie = b._document.cookie;
  };
  b._areEnabled = function() {
    var a = "1" === b.set("cookies_lhc.js", 1).get("cookies_lhc.js");
    b.expire("cookies_lhc.js");
    return a;
  };
  b.enabled = b._areEnabled();
  window.lhc_Cookies = b;
})();
lhc_Cookies.defaults = { path: "/", secure: false };
var lh_inst = {
  JSON: {
    parse:
      (window.JSON && (window.JSON.parse || window.JSON.decode)) ||
      (String.prototype.evalJSON &&
        function(str) {
          return String(str).evalJSON();
        }) ||
      $.parseJSON ||
      $.evalJSON,
    stringify:
      Object.toJSON ||
      (window.JSON && (window.JSON.stringify || window.JSON.encode)) ||
      $.toJSON
  },
  isOnline: true,
  disabledGeo: false,
  checkOperatorMessage: true,
  offset_data: "",
  lang: "",
  langDefault: "/eng",
  is_dragging: false,
  online_tracked: false,
  urlopen: function() {
    return (
      "//www.webworldexperts.com/support/lhc_web/index.php" +
      this.lang +
      "/chat/startchat/(leaveamessage)/true/(theme)/3/(department)/0/1/2"
    );
  },
  hasSurvey: false,
  surveyShown: false,
  windowname: "startchatwindow",
  substatus: "",
  cookieData: {},
  cookieDataPers: {},
  domain: false,
  isSharing: false,
  extensionArgs: "",
  getCookieDomain: function(domain) {
    if (this.domain !== false) {
      return this.domain;
    } else {
      if (
        typeof LHCChatOptions != "undefined" &&
        typeof LHCChatOptions.opt != "undefined" &&
        typeof LHCChatOptions.opt.domain != "undefined"
      ) {
        this.domain = "." + LHCChatOptions.opt.domain;
      } else {
        this.domain =
          "." +
          document.location.hostname.replace(
            /^(?:[a-z0-9\-\.]+\.)??([a-z0-9\-]+)?(\.com|\.net|\.org|\.biz|\.ws|\.in|\.me|\.co\.uk|\.co|\.org\.uk|\.ltd\.uk|\.plc\.uk|\.me\.uk|\.edu|\.mil|\.br\.com|\.cn\.com|\.eu\.com|\.hu\.com|\.no\.com|\.qc\.com|\.sa\.com|\.se\.com|\.se\.net|\.us\.com|\.uy\.com|\.ac|\.co\.ac|\.gv\.ac|\.or\.ac|\.ac\.ac|\.af|\.am|\.as|\.at|\.ac\.at|\.co\.at|\.gv\.at|\.or\.at|\.asn\.au|\.com\.au|\.edu\.au|\.org\.au|\.net\.au|\.id\.au|\.be|\.ac\.be|\.adm\.br|\.adv\.br|\.am\.br|\.arq\.br|\.art\.br|\.bio\.br|\.cng\.br|\.cnt\.br|\.com\.br|\.ecn\.br|\.eng\.br|\.esp\.br|\.etc\.br|\.eti\.br|\.fm\.br|\.fot\.br|\.fst\.br|\.g12\.br|\.gov\.br|\.ind\.br|\.inf\.br|\.jor\.br|\.lel\.br|\.med\.br|\.mil\.br|\.net\.br|\.nom\.br|\.ntr\.br|\.odo\.br|\.org\.br|\.ppg\.br|\.pro\.br|\.psc\.br|\.psi\.br|\.rec\.br|\.slg\.br|\.tmp\.br|\.tur\.br|\.tv\.br|\.vet\.br|\.zlg\.br|\.br|\.ab\.ca|\.bc\.ca|\.mb\.ca|\.nb\.ca|\.nf\.ca|\.ns\.ca|\.nt\.ca|\.on\.ca|\.pe\.ca|\.qc\.ca|\.sk\.ca|\.yk\.ca|\.ca|\.cc|\.ac\.cn|\.com\.cn|\.edu\.cn|\.gov\.cn|\.org\.cn|\.bj\.cn|\.sh\.cn|\.tj\.cn|\.cq\.cn|\.he\.cn|\.nm\.cn|\.ln\.cn|\.jl\.cn|\.hl\.cn|\.js\.cn|\.zj\.cn|\.ah\.cn|\.gd\.cn|\.gx\.cn|\.hi\.cn|\.sc\.cn|\.gz\.cn|\.yn\.cn|\.xz\.cn|\.sn\.cn|\.gs\.cn|\.qh\.cn|\.nx\.cn|\.xj\.cn|\.tw\.cn|\.hk\.cn|\.mo\.cn|\.cn|\.cx|\.cz|\.de|\.dk|\.fo|\.com\.ec|\.tm\.fr|\.com\.fr|\.asso\.fr|\.presse\.fr|\.fr|\.gf|\.gs|\.co\.il|\.net\.il|\.ac\.il|\.k12\.il|\.gov\.il|\.muni\.il|\.ac\.in|\.co\.in|\.org\.in|\.ernet\.in|\.gov\.in|\.net\.in|\.res\.in|\.is|\.it|\.ac\.jp|\.co\.jp|\.go\.jp|\.or\.jp|\.ne\.jp|\.ac\.kr|\.co\.kr|\.go\.kr|\.ne\.kr|\.nm\.kr|\.or\.kr|\.li|\.lt|\.lu|\.asso\.mc|\.tm\.mc|\.com\.mm|\.org\.mm|\.net\.mm|\.edu\.mm|\.gov\.mm|\.ms|\.nl|\.no|\.nu|\.pl|\.ro|\.org\.ro|\.store\.ro|\.tm\.ro|\.firm\.ro|\.www\.ro|\.arts\.ro|\.rec\.ro|\.info\.ro|\.nom\.ro|\.nt\.ro|\.se|\.si|\.com\.sg|\.org\.sg|\.net\.sg|\.gov\.sg|\.sk|\.st|\.tf|\.ac\.th|\.co\.th|\.go\.th|\.mi\.th|\.net\.th|\.or\.th|\.tm|\.to|\.com\.tr|\.edu\.tr|\.gov\.tr|\.k12\.tr|\.net\.tr|\.org\.tr|\.com\.tw|\.org\.tw|\.net\.tw|\.ac\.uk|\.uk\.com|\.uk\.net|\.gb\.com|\.gb\.net|\.vg|\.sh|\.kz|\.ch|\.info|\.ua|\.gov|\.name|\.pro|\.ie|\.hk|\.com\.hk|\.org\.hk|\.net\.hk|\.edu\.hk|\.us|\.tk|\.cd|\.by|\.ad|\.lv|\.eu\.lv|\.bz|\.es|\.jp|\.cl|\.ag|\.mobi|\.eu|\.co\.nz|\.org\.nz|\.net\.nz|\.maori\.nz|\.iwi\.nz|\.io|\.la|\.md|\.sc|\.sg|\.vc|\.tw|\.travel|\.my|\.se|\.tv|\.pt|\.com\.pt|\.edu\.pt|\.asia|\.fi|\.com\.ve|\.net\.ve|\.fi|\.org\.ve|\.web\.ve|\.info\.ve|\.co\.ve|\.tel|\.im|\.gr|\.ru|\.net\.ru|\.org\.ru|\.hr|\.com\.hr)$/,
            "$1$2"
          );
      }
    }
    return this.domain;
  },
  addCss: function(css_content) {
    var head = document.getElementsByTagName("head")[0];
    var style = document.createElement("style");
    style.type = "text/css";
    if (style.styleSheet) {
      style.styleSheet.cssText = css_content;
    } else {
      rules = document.createTextNode(css_content);
      style.appendChild(rules);
    }
    head.appendChild(style);
  },
  appendHTML: function(htmlStr) {
    var frag = document.createDocumentFragment(),
      temp = document.createElement("div");
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
      frag.appendChild(temp.firstChild);
    }
    return frag;
  },
  removeById: function(EId) {
    return (EObj = document.getElementById(EId))
      ? EObj.parentNode.removeChild(EObj)
      : false;
  },
  hasClass: function(el, name) {
    return new RegExp("(\\s|^)" + name + "(\\s|$)").test(el.className);
  },
  addClass: function(el, name) {
    if (!this.hasClass(el, name)) {
      el.className += (el.className ? " " : "") + name;
    }
  },
  removeClass: function(el, name) {
    if (this.hasClass(el, name)) {
      el.className = el.className
        .replace(new RegExp("(\\s|^)" + name + "(\\s|$)"), " ")
        .replace(/^\s+|\s+$/g, "");
    }
  },
  storePos: function(dm) {
    var cookiePos = "";
    cookiePos += dm.style.right;
    cookiePos += "," + dm.style.bottom;
    this.addCookieAttribute("pos", cookiePos);
  },
  min: function(initial) {
    var dm = document.getElementById("lhc_container");
    if (!dm.attrIsMin || dm.attrIsMin == false) {
      dm.attrHeight = dm.style.height;
      dm.attrIsMin = true;
      this.addClass(dm, "lhc-min");
      if (dm.style.bottom != "" && dm.attrHeight != "") {
        dm.style.bottom =
          parseInt(dm.style.bottom) + parseInt(dm.attrHeight) - 35 + "px";
      } else {
        if (initial == undefined) {
          dm.style.bottom =
            parseInt(dm.style.bottom) +
            parseInt(
              document.getElementById("lhc_iframe_container").offsetHeight
            ) -
            10 +
            "px";
        }
      }
      this.addCookieAttribute("m", 1);
      this.storePos(dm);
      dm.attrBottomOrigin = dm.style.bottom;
      dm.style.bottom = "";
      dm.attrRightOrigin = dm.style.right;
      dm.style.right = "0px";
    } else {
      dm.attrIsMin = false;
      if (dm.attrBottomOrigin) {
        dm.style.bottom =
          parseInt(dm.attrBottomOrigin) -
          parseInt(document.getElementById("lhc_iframe").style.height) +
          9 +
          "px";
        dm.style.right = dm.attrRightOrigin;
      } else if (dm.style.bottom != "") {
        dm.style.bottom =
          parseInt(dm.style.bottom) -
          parseInt(document.getElementById("lhc_iframe").style.height) +
          9 +
          "px";
      }
      this.removeCookieAttr("m");
      this.removeClass(dm, "lhc-min");
      var inst = this;
      this.storePos(dm);
    }
  },
  hide: function() {
    if (
      !lh_inst.cookieData.hash ||
      lh_inst.hasSurvey == false ||
      lh_inst.surveyShown == true
    ) {
      var th = document.getElementsByTagName("head")[0];
      var s = document.createElement("script");
      s.setAttribute("type", "text/javascript");
      s.setAttribute(
        "src",
        "//www.webworldexperts.com/support/lhc_web/index.php" +
          this.lang +
          "/chat/chatwidgetclosed" +
          this.getAppendCookieArguments()
      );
      th.appendChild(s);
      this.toggleStatusWidget(false);
      this.removeById("lhc_container");
      this.removeCookieAttr("hash");
      this.removeCookieAttr("pos");
      this.removeCookieAttr("m");
      this.startNewMessageCheck();
      this.timeoutStatusWidgetOpen = 0;
      this.surveyShown = true;
    } else {
      this.showSurvey();
    }
  },
  showSurvey: function() {
    if (
      lh_inst.cookieData.hash &&
      lh_inst.hasSurvey == true &&
      lh_inst.surveyShown == false
    ) {
      var locationCurrent = encodeURIComponent(
        window.location.href.substring(window.location.protocol.length)
      );
      this.surveyShown = true;
      document.getElementById("lhc_iframe").src =
        "//www.webworldexperts.com/support/lhc_web/index.php" +
        this.lang +
        "/survey/fillwidget/(leaveamessage)/true/(department)/0/1/2/(theme)/3" +
        this.getAppendCookieArguments() +
        "?URLReferer=" +
        locationCurrent +
        this.parseOptions() +
        this.parseStorageArguments() +
        "&dt=" +
        encodeURIComponent(document.title);
    }
  },
  getAppendCookieArguments: function() {
    var hashAppend = this.cookieData.hash
      ? "/(hash)/" + this.cookieData.hash
      : "";
    var vidAppend = this.cookieDataPers.vid
      ? "/(vid)/" + this.cookieDataPers.vid
      : "";
    var hashResume = this.cookieData.hash_resume
      ? "/(hash_resume)/" + this.cookieData.hash_resume
      : "";
    var soundOption = this.cookieData.s ? "/(sound)/" + this.cookieData.s : "";
    return hashAppend + vidAppend + hashResume + soundOption;
  },
  openRemoteWindow: function() {
    this.removeById("lhc_container");
    var popupHeight =
      typeof LHCChatOptions != "undefined" &&
      typeof LHCChatOptions.opt != "undefined" &&
      typeof LHCChatOptions.opt.popup_height != "undefined"
        ? parseInt(LHCChatOptions.opt.popup_height)
        : 520;
    var popupWidth =
      typeof LHCChatOptions != "undefined" &&
      typeof LHCChatOptions.opt != "undefined" &&
      typeof LHCChatOptions.opt.popup_width != "undefined"
        ? parseInt(LHCChatOptions.opt.popup_width)
        : 500;
    var locationCurrent = encodeURIComponent(
      window.location.href.substring(window.location.protocol.length)
    );
    window.open(
      this.urlopen() +
        this.getAppendCookieArguments() +
        "/(er)/1" +
        "?URLReferer=" +
        locationCurrent +
        this.parseOptions() +
        this.parseStorageArguments(),
      this.windowname,
      "scrollbars=yes,menubar=1,resizable=1,width=" +
        popupWidth +
        ",height=" +
        popupHeight
    );
    this.removeCookieAttr("hash");
    this.toggleStatusWidget(false);
  },
  parseOptions: function() {
    argumentsQuery = new Array();
    var paramsReturn = "";
    if (typeof LHCChatOptions != "undefined") {
      if (typeof LHCChatOptions.attr != "undefined") {
        if (LHCChatOptions.attr.length > 0) {
          for (var index in LHCChatOptions.attr) {
            if (
              typeof LHCChatOptions.attr[index] != "undefined" &&
              typeof LHCChatOptions.attr[index].type != "undefined"
            ) {
              argumentsQuery.push(
                "name[]=" +
                  encodeURIComponent(LHCChatOptions.attr[index].name) +
                  "&value[]=" +
                  encodeURIComponent(LHCChatOptions.attr[index].value) +
                  "&type[]=" +
                  encodeURIComponent(LHCChatOptions.attr[index].type) +
                  "&size[]=" +
                  encodeURIComponent(LHCChatOptions.attr[index].size) +
                  "&req[]=" +
                  (typeof LHCChatOptions.attr[index].req != "undefined" &&
                  LHCChatOptions.attr[index].req == true
                    ? "t"
                    : "f") +
                  "&sh[]=" +
                  (typeof LHCChatOptions.attr[index].show != "undefined" &&
                  (LHCChatOptions.attr[index].show == "on" ||
                    LHCChatOptions.attr[index].show == "off")
                    ? LHCChatOptions.attr[index].show
                    : "b")
              );
            }
          }
        }
      }
      if (typeof LHCChatOptions.attr_prefill != "undefined") {
        if (LHCChatOptions.attr_prefill.length > 0) {
          for (var index in LHCChatOptions.attr_prefill) {
            if (
              typeof LHCChatOptions.attr_prefill[index] != "undefined" &&
              typeof LHCChatOptions.attr_prefill[index].name != "undefined"
            ) {
              argumentsQuery.push(
                "prefill[" +
                  LHCChatOptions.attr_prefill[index].name +
                  "]=" +
                  encodeURIComponent(LHCChatOptions.attr_prefill[index].value)
              );
              if (
                typeof LHCChatOptions.attr_prefill[index].hidden != "undefined"
              ) {
                argumentsQuery.push(
                  "hattr[]=" +
                    encodeURIComponent(LHCChatOptions.attr_prefill[index].name)
                );
              }
            }
          }
        }
      }
      if (typeof LHCChatOptions.attr_prefill_admin != "undefined") {
        if (LHCChatOptions.attr_prefill_admin.length > 0) {
          for (var index in LHCChatOptions.attr_prefill_admin) {
            if (
              typeof LHCChatOptions.attr_prefill_admin[index] != "undefined"
            ) {
              argumentsQuery.push(
                "value_items_admin[" +
                  LHCChatOptions.attr_prefill_admin[index].index +
                  "]=" +
                  encodeURIComponent(
                    LHCChatOptions.attr_prefill_admin[index].value
                  )
              );
            }
          }
        }
      }
      if (argumentsQuery.length > 0) {
        paramsReturn = "&" + argumentsQuery.join("&");
      }
    }
    if (this.extensionArgs != "") {
      paramsReturn = paramsReturn + this.extensionArgs;
    }
    return paramsReturn;
  },
  parseOptionsOnline: function() {
    argumentsQuery = new Array();
    if (typeof LHCChatOptions != "undefined") {
      if (typeof LHCChatOptions.attr_online != "undefined") {
        if (LHCChatOptions.attr_online.length > 0) {
          for (var index in LHCChatOptions.attr_online) {
            if (
              typeof LHCChatOptions.attr_online[index] != "undefined" &&
              typeof LHCChatOptions.attr_online[index].name != "undefined"
            ) {
              argumentsQuery.push(
                "onattr[" +
                  LHCChatOptions.attr_online[index].name +
                  "]=" +
                  encodeURIComponent(LHCChatOptions.attr_online[index].value)
              );
            }
          }
        }
      }
      if (argumentsQuery.length > 0) {
        return "&" + argumentsQuery.join("&");
      }
    }
    return "";
  },
  parseStorageArguments: function() {
    if (
      sessionStorage &&
      sessionStorage.getItem("lhc_ref") &&
      sessionStorage.getItem("lhc_ref") != ""
    ) {
      return "&r=" + encodeURIComponent(sessionStorage.getItem("lhc_ref"));
    }
    return "";
  },
  addEvent: (function() {
    if (document.addEventListener) {
      return function(el, type, fn) {
        if ((el && el.nodeName) || el === window) {
          el.addEventListener(type, fn, false);
        } else if (el && el.length) {
          for (var i = 0; i < el.length; i++) {
            lh_inst.addEvent(el[i], type, fn);
          }
        }
      };
    } else {
      return function(el, type, fn) {
        if ((el && el.nodeName) || el === window) {
          el.attachEvent("on" + type, function() {
            return fn.call(el, window.event);
          });
        } else if (el && el.length) {
          for (var i = 0; i < el.length; i++) {
            lh_inst.addEvent(el[i], type, fn);
          }
        }
      };
    }
  })(),
  showStartWindow: function(url_to_open, delayShow) {
    if (
      this.isOnline == false &&
      typeof LHCChatOptions != "undefined" &&
      typeof LHCChatOptions.opt != "undefined" &&
      typeof LHCChatOptions.opt.offline_redirect != "undefined"
    ) {
      window.open(LHCChatOptions.opt.offline_redirect, "_blank");
      return;
    }
    this.lhc_need_help_hide(); // Do not check for new messages
    this.stopCheckNewMessage();
    this.removeById("lhc_container");
    var locationCurrent = encodeURIComponent(
      window.location.href.substring(window.location.protocol.length)
    );
    if (url_to_open != undefined) {
      this.chatOpenedCallback("internal_invitation");
      this.initial_iframe_url =
        url_to_open +
        this.getAppendCookieArguments() +
        "?URLReferer=" +
        locationCurrent +
        this.parseOptions() +
        this.parseStorageArguments() +
        "&dt=" +
        encodeURIComponent(document.title);
    } else {
      this.chatOpenedCallback(
        this.isOnline == false ? "internal_offline" : "internal"
      );
      this.initial_iframe_url =
        "//www.webworldexperts.com/support/lhc_web/index.php" +
        this.lang +
        "/chat/chatwidget/(leaveamessage)/true/(department)/0/1/2/(theme)/3" +
        this.getAppendCookieArguments() +
        "?URLReferer=" +
        locationCurrent +
        this.parseOptions() +
        this.parseStorageArguments() +
        "&dt=" +
        encodeURIComponent(document.title);
    }
    if (window.innerWidth < 768) {
      window.open(this.initial_iframe_url, "_blank");
      return;
    }
    lh_inst.surveyShown = false;
    lh_inst.timeoutStatusWidgetOpen = 1;
    var widgetWidth =
      typeof LHCChatOptions != "undefined" &&
      typeof LHCChatOptions.opt != "undefined" &&
      typeof LHCChatOptions.opt.widget_width != "undefined"
        ? parseInt(LHCChatOptions.opt.widget_width)
        : 300;
    var widgetHeight =
      typeof LHCChatOptions != "undefined" &&
      typeof LHCChatOptions.opt != "undefined" &&
      typeof LHCChatOptions.opt.widget_height != "undefined"
        ? parseInt(LHCChatOptions.opt.widget_height)
        : 340;
    this.iframe_html =
      '<div id="lhc_iframe_container"><iframe id="lhc_iframe" allowTransparency="true" scrolling="no" class="lhc-loading" frameborder="0" ' +
      (this.initial_iframe_url != ""
        ? ' src="' + this.initial_iframe_url + '"'
        : "") +
      ' width="' +
      widgetWidth +
      '"' +
      ' height="' +
      widgetHeight +
      '"' +
      ' style="width: ' +
      widgetWidth +
      "px; height: " +
      widgetHeight +
      'px;"></iframe></div>';
    this.iframe_html =
      '<div id="lhc_container">' +
      '<div id="lhc_header"><span id="lhc_title"><a title="" href="http://seoexpertsindia.com/" target="_blank"><img src="//www.webworldexperts.com/support/lhc_web/var/storagetheme/2015y/10/30/3/e05f3b9726cc9d60bc1febfef6eaf979.png" alt="Live Helper Chat" /></a></span><a href="#" title="Close" id="lhc_close"><img src="//www.webworldexperts.com/support/lhc_web/design/defaulttheme/images/icons/cancel.png" title="Close" alt="Close" /></a>&nbsp;<a href="#" title="Open in a new window" id="lhc_remote_window"><img src="//www.webworldexperts.com/support/lhc_web/design/defaulttheme/images/icons/application_double.png" alt="Open in a new window" title="Open in a new window" /></a><a href="#" id="lhc_min" title="Minimize/Restore"></a></div>' +
      this.iframe_html +
      "</div>";
    raw_css =
      ".lhc-no-transition{ -webkit-transition: none !important; -moz-transition: none !important;-o-transition: none !important;-ms-transition: none !important;transition: none !important;}\n.lhc-min{height:35px !important;transition: all 0.4s!important;}\n#lhc_container.lhc-delayed{visibility:hidden}\n#lhc_container * {line-height:100%;direction:ltr;text-align:left;;font-family:arial;font-size:12px;line-height:100%;box-sizing: content-box;-moz-box-sizing:content-box;padding:0;margin:0;}\n#lhc_container img {border:0;}\n#lhc_title{float:left;}\n#lhc_header{position:relative;z-index:9990;height:15px;overflow:hidden;text-align:right;clear:both;background-color:#525252;padding:5px;}\n#lhc_remote_window,#lhc_min,#lhc_close{padding:2px;float:right;}.lhc-min #lhc_min{background-image:url(//www.webworldexperts.com/support/lhc_web/design/defaulttheme/images/icons/restore.png)}#lhc_min{width:14px;height:14px;background:url(//www.webworldexperts.com/support/lhc_web/design/defaulttheme/images/icons/min.png) no-repeat center center;}\n#lhc_close:hover,#lhc_min:hover,#lhc_remote_window:hover{opacity:0.4;}\n#lhc_container {background-color:#FFF;-moz-user-select:none; -khtml-user-drag:element;cursor: move;cursor: -moz-grab;cursor: -webkit-grab;overflow:hidden;transition-property:height;transition-duration: 0.4s;-webkit-transition: height 0.4s ease-in-out;transition: height 0.4s;\nz-index:9990;\n position: fixed;bottom:0;right:0;;-webkit-box-shadow: -1px -1px 5px rgba(50, 50, 50, 0.17);-moz-box-shadow: -1px -1px 5px rgba(50, 50, 50, 0.17);box-shadow: -1px -1px 5px rgba(50, 50, 50, 0.17);-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px; }\n#lhc_container iframe{position:relative;display:block;transition-property: height;transition-duration: 0.4s;-webkit-transition: height 0.4s ease-in-out;transition: height 0.4s;}\n#lhc_container #lhc_iframe_container{border:1px solid #cccccc;border-top: 0;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;overflow: hidden;}\n#lhc_container iframe.lhc-loading{\nbackground: #FFF url(//www.webworldexperts.com/support/lhc_web/design/defaulttheme/images/general/loading.gif) no-repeat center center; }\n@media only screen and (max-width : 640px) {#lhc_container{margin-bottom:5px;position:relative;right:0 !important;bottom:0 !important;top:0 !important}#lhc_container iframe{width:100% !important}}";
    if (!this.cssWasAdded) {
      this.cssWasAdded = true;
      this.addCss(raw_css);
    }
    var fragment = this.appendHTML(this.iframe_html);
    var parentElement = document.body;
    if (
      typeof LHCChatOptions != "undefined" &&
      typeof LHCChatOptions.opt != "undefined" &&
      typeof LHCChatOptions.opt.widget_parent != "undefined"
    ) {
      if (document.getElementById(LHCChatOptions.opt.widget_parent) != null) {
        parentElement = document.getElementById(
          LHCChatOptions.opt.widget_parent
        );
      }
    }
    parentElement.insertBefore(fragment, parentElement.childNodes[0]);
    var lhc_obj = this;
    this.addClass(document.getElementById("lhc_container"), "lhc-delayed");
    setTimeout(function() {
      lhc_obj.removeClass(
        document.getElementById("lhc_container"),
        "lhc-delayed"
      );
      lhc_obj.toggleStatusWidget(true);
    }, typeof delayShow !== "undefined" ? 1300 : 290);
    var closeHandler = document.getElementById("lhc_close");
    if (closeHandler !== null) {
      closeHandler.onclick = function() {
        lhc_obj.hide();
        lh_inst.chatClosedCallback("user");
        return false;
      };
    }
    document.getElementById("lhc_min").onclick = function() {
      lhc_obj.min();
      return false;
    };
    document.getElementById("lhc_remote_window").onclick = function() {
      lhc_obj.openRemoteWindow();
      return false;
    };
    var domContainer = document.getElementById("lhc_container");
    var domIframe = "lhc_iframe";
    var domContainerId = "lhc_container";
    domContainer.onmousedown = function(e) {
      domContainer.setAttribute("draggable", "true");
    };
    domContainer.onmouseup = function(e) {
      domContainer.setAttribute("draggable", "false");
    };
    if (this.cookieData.pos) {
      var posContainer = this.cookieData.pos.split(",");
      domContainer.style.right = posContainer[0];
      domContainer.style.bottom = posContainer[1];
    }
    this.addEvent(domContainer, "dragstart", function(event) {
      lhc_obj.removeById("lhc_overlapse");
      var style = window.getComputedStyle(event.target, null);
      lhc_obj.offset_data =
        parseInt(style.getPropertyValue("right"), 10) +
        event.clientX +
        "," +
        (parseInt(style.getPropertyValue("bottom"), 10) + event.clientY);
      try {
        event.dataTransfer.setData("text/plain", lhc_obj.offset_data);
      } catch (e) {}
      lhc_obj.is_dragging = true;
      domContainer.style.zIndex = 9995;
      theKid = document.createElement("div");
      theKid.innerHTML = "";
      theKid.setAttribute("id", "lhc_overlapse");
      theKid.style.cssText =
        "position:absolute;height:" +
        domContainer.style.height +
        ";width:100%;";
      domContainer.insertBefore(theKid, domContainer.firstChild);
    });
    this.addEvent(domContainer, "dragenter", function(e) {
      lhc_obj.is_dragging = true;
      return false;
    });
    if (!this.dragAttatched) {
      this.dragAttatched = true;
      this.addEvent(document.body, "drop", function(event) {
        if (lhc_obj.is_dragging == true) {
          domContainer = document.getElementById(domContainerId);
          domContainer.style.zIndex = 9990;
          lhc_obj.is_dragging = false;
          lhc_obj.removeById("lhc_overlapse");
          var offset = lhc_obj.offset_data.split(",");
          dm = domContainer;
          var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName("body")[0],
            x = w.innerWidth || e.clientWidth || g.clientWidth,
            y = w.innerHeight || e.clientHeight || g.clientHeight;
          var cookiePos = "";
          var rightpos = parseInt(offset[0], 10) - event.clientX;
          rightpos = rightpos < 0 ? 0 : rightpos;
          if (x < rightpos + parseInt(dm.offsetWidth) + 20) {
            rightpos = x - parseInt(dm.offsetWidth) - 10;
          }
          dm.style.right = rightpos + "px";
          cookiePos += dm.style.right;
          var botpos = -event.clientY + parseInt(offset[1], 10);
          botpos = botpos < 0 ? 0 : botpos;
          if (y < botpos + parseInt(dm.offsetHeight)) {
            botpos = y - parseInt(dm.offsetHeight);
          }
          dm.style.bottom = botpos + "px";
          cookiePos += "," + dm.style.bottom;
          lhc_obj.addCookieAttribute("pos", cookiePos);
          event.preventDefault();
          domContainer.draggable = false;
          return false;
        }
      });
      this.addEvent(document.body, "dragover", function(event) {
        if (lhc_obj.is_dragging == true) {
          domContainer = document.getElementById(domContainerId);
          domContainer.setAttribute("draggable", "false");
          var offset = lhc_obj.offset_data.split(",");
          var dm = domContainer;
          var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName("body")[0],
            x = w.innerWidth || e.clientWidth || g.clientWidth,
            y = w.innerHeight || e.clientHeight || g.clientHeight;
          var rightpos = parseInt(offset[0], 10) - event.clientX;
          rightpos = rightpos < 0 ? 0 : rightpos;
          if (x < rightpos + parseInt(dm.offsetWidth) + 20) {
            rightpos = x - parseInt(dm.offsetWidth) - 10;
          }
          dm.style.right = rightpos + "px";
          var botpos = -event.clientY + parseInt(offset[1], 10);
          botpos = botpos < 0 ? 0 : botpos;
          if (y < botpos + parseInt(dm.offsetHeight)) {
            botpos = y - parseInt(dm.offsetHeight);
          }
          dm.style.bottom = botpos + "px";
          event.preventDefault();
          return false;
        }
      });
    }
    if (this.cookieData.m) {
      this.min(true);
    }
    if (typeof delayShow === "undefined") {
      this.toggleStatusWidget(true);
    }
  },
  toggleStatusWidget: function(hide) {
    if (document.getElementById("lhc_status_container") != null) {
      if (hide == true) {
        this.addClass(
          document.getElementById("lhc_status_container"),
          "hide-status"
        );
      } else {
        this.removeClass(
          document.getElementById("lhc_status_container"),
          "hide-status"
        );
      }
    }
  },
  lh_openchatWindow: function() {
    this.showStartWindow();
    return false;
  },
  chatOpenedCallback: function(type) {
    if (
      typeof LHCChatOptions != "undefined" &&
      typeof LHCChatOptions.callback != "undefined" &&
      typeof LHCChatOptions.callback.start_chat_cb != "undefined"
    ) {
      LHCChatOptions.callback.start_chat_cb(type + this.substatus);
      this.substatus = "";
    }
  },
  chatClosedCallback: function(type) {
    if (
      typeof LHCChatOptions != "undefined" &&
      typeof LHCChatOptions.callback != "undefined" &&
      typeof LHCChatOptions.callback.close_chat_cb != "undefined"
    ) {
      LHCChatOptions.callback.close_chat_cb(type + this.substatus);
      this.substatus = "";
    }
  },
  genericCallback: function(name) {
    if (
      typeof LHCChatOptions != "undefined" &&
      typeof LHCChatOptions.callback != "undefined" &&
      typeof LHCChatOptions.callback[name] != "undefined"
    ) {
      LHCChatOptions.callback[name](this);
    }
  },
  showStatusWidget: function() {
    this.removeById("lhc_status_container");
    var statusTEXT =
      '<a id="' +
      (this.isOnline == true ? "online-icon" : "offline-icon") +
      '" class="status-icon" href="#" onclick="return lh_inst.lh_openchatWindow()" >' +
      (this.isOnline ? "We are Online - Chat Now" : "We are Offline!") +
      "</a>";
    if (!this.cssStatusWasAdded) {
      this.cssStatusWasAdded = true;
      var raw_css =
        "#lhc_status_container.hide-status{display:none!important;}#lhc_status_container * {direction:ltr;text-align:left;;font-family:arial;font-size:12px;box-sizing: content-box;zoom:1;margin:0;padding:0}\n#lhc_status_container .status-icon{text-decoration:none;font-size:12px;font-weight:bold;color:#ffffff;display:block;padding:10px 10px 10px 35px;background:url('//www.webworldexperts.com/support/lhc_web/var/storagetheme/2015y/10/30/3/826016d96cb0d4961c7164184c1d4999.png') no-repeat left center}\n#lhc_status_container:hover{}\n#lhc_status_container #offline-icon{background-image:url('//www.webworldexperts.com/support/lhc_web/var/storagetheme/2015y/10/30/3/aecbaa476eb6358e721ae69dc6852f14.png')}\n#lhc_status_container{box-sizing: content-box;-webkit-border-top-left-radius: 20px;-moz-border-radius-topleft: 20px;border-top-left-radius: 20px;-webkit-box-shadow: -1px -1px 5px rgba(50, 50, 50, 0.17);border:1px solid #8c8c8c;border-right:0;border-bottom:0;;-moz-box-shadow:-1px -1px 5px rgba(50, 50, 50, 0.17);box-shadow: -1px -1px 5px rgba(50, 50, 50, 0.17);padding:5px 0px 0px 5px;width:190px;font-family:arial;font-size:12px;transition: 1s;position:fixed;bottom:0;right:0;;background-color:#222222;z-index:9989;}@media only screen and (max-width : 640px) {#lhc_need_help_container{display:none;}#lhc_status_container{position:relative;top:0;right:0;bottom:0;left:0;width:auto;border-radius:2px;box-shadow:none;border:1px solid #8c8c8c;margin-bottom:5px;}}\n";
      this.addCss(
        raw_css +
          "#lhc_title, #lhc_need_help_container { display:none;}#lhc_status_container { padding: 2px 0 0 15px !important;}#lhc_status_container { width:200px !important;}#lhc_container { z-index:9999999 !important;}#lhc_header { background-color: #031829!important;}#lhc_status_container {border-width: 2px 0 0 2px !important; border-color:#383838!important;}"
      );
    }
    var subStatus = "";
    if (this.isOnline == true) {
      var lhc_hnh = lh_inst.getPersistentAttribute("lhc_hnh");
      if (
        lhc_hnh == null ||
        lhc_hnh == undefined ||
        parseInt(lhc_hnh) < 1520505933
      ) {
        var titleText =
          typeof LHCChatOptions.opt.nh_title_text != "undefined"
            ? LHCChatOptions.opt.nh_title_text
            : "Need help?";
        var subTitleText =
          typeof LHCChatOptions.opt.nh_sub_title_text != "undefined"
            ? LHCChatOptions.opt.nh_sub_title_text
            : "Our staff is always ready to help";
        var imageTooltip =
          typeof LHCChatOptions.opt.nh_image != "undefined"
            ? LHCChatOptions.opt.nh_image
            : "//www.webworldexperts.com/support/lhc_web/var/storagetheme/2015y/10/30/3/239b28bfd45ea8dfa1a3b63a8ca21ae7.jpg";
        subStatus =
          '<div id="lhc_need_help_container" style="margin-left:-80px;">' +
          '<span id="lhc_need_help_triangle" style="right:15px;"></span>' +
          '<a id="lhc_need_help_close" title="Close" onclick="return lh_inst.lhc_need_help_hide();" href="#">×</a>';
        if (imageTooltip !== false) {
          subStatus +=
            '<div onclick="return lh_inst.lhc_need_help_click();" id="lhc_need_help_image"><img width="60" height="60" src="' +
            imageTooltip +
            '"></div>';
        }
        subStatus +=
          '<div onclick="return lh_inst.lhc_need_help_click();" id="lhc_need_help_main_title">' +
          titleText +
          "</div>" +
          '<span onclick="return lh_inst.lhc_need_help_click();" id="lhc_need_help_sub_title">' +
          subTitleText +
          "</span>" +
          "</div>";
      }
      if (!this.cssNHWasAdded) {
        this.cssNHWasAdded = true;
        var raw_css_need_hl =
          "#lhc_need_help_container{width:235px;border-radius:20px;background:#1A6FB0;position:absolute;color:#ffffff;padding:10px;border:1px solid #075591;margin-top:-105px;}#lhc_need_help_container:hover{background-color:#07528c}#lhc_need_help_container:hover #lhc_need_help_triangle{border-top-color:#07528c}" +
          "#lhc_need_help_triangle{width: 0;height: 0;border-left: 20px solid transparent;border-right: 10px solid transparent;border-top: 15px solid #1A6FB0;position:absolute;bottom:-14px;}" +
          "#lhc_need_help_close{float:right;border-radius:10px;background:#043b63;padding:0px 6px;color:#FFF;right:10px;font-size:16px;font-weight:bold;text-decoration:none;margin-top:0px;line-height:20px}#lhc_need_help_close:hover{background-color:#3a8bc9;}" +
          "#lhc_need_help_image{padding-right:10px;float:left;cursor:pointer;}#lhc_need_help_image img{border-radius:30px;border:1px solid #d0d0d0}#lhc_need_help_main_title{font-size:16px;font-weight:bold;cursor:pointer;line-height:1.5}#lhc_need_help_sub_title{cursor:pointer;line-height:1.5}";
        this.addCss(raw_css_need_hl);
      }
    }
    var htmlStatus =
      '<div id="lhc_status_container">' + subStatus + statusTEXT + "</div>";
    var fragment = this.appendHTML(htmlStatus);
    document.body.insertBefore(fragment, document.body.childNodes[0]);
    if (
      typeof LHCChatOptions != "undefined" &&
      typeof LHCChatOptions.callback != "undefined" &&
      typeof LHCChatOptions.callback.show_widget_cb != "undefined"
    ) {
      LHCChatOptions.callback.show_widget_cb(this);
    }
  },
  timeoutInstance: null,
  stopCheckNewMessage: function() {
    clearTimeout(this.timeoutInstance);
  },
  startNewMessageCheck: function() {
    var vid = this.cookieDataPers.vid;
    var inst = this;
    var locationCurrent = encodeURIComponent(
      window.location.href.substring(window.location.protocol.length)
    );
    this.timeoutInstance = setTimeout(function() {
      lh_inst.removeById("lhc_operator_message");
      var th = document.getElementsByTagName("head")[0];
      var s = document.createElement("script");
      s.setAttribute("id", "lhc_operator_message");
      s.setAttribute("type", "text/javascript");
      s.setAttribute(
        "src",
        "//www.webworldexperts.com/support/lhc_web/index.php" +
          lh_inst.lang +
          "/chat/chatcheckoperatormessage/(theme)/3/(department)/0/1/2/(vid)/" +
          vid +
          "/(uactiv)/" +
          lh_inst.userActive +
          "/(wopen)/" +
          lh_inst.timeoutStatusWidgetOpen +
          "?l=" +
          locationCurrent +
          "&dt=" +
          encodeURIComponent(document.title)
      );
      th.appendChild(s);
      lh_inst.startNewMessageCheck();
    }, 10000);
  },
  getTzOffset: function() {
    Date.prototype.stdTimezoneOffset = function() {
      var jan = new Date(this.getFullYear(), 0, 1);
      var jul = new Date(this.getFullYear(), 6, 1);
      return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
    };
    Date.prototype.dst = function() {
      return this.getTimezoneOffset() < this.stdTimezoneOffset();
    };
    var today = new Date();
    var timeZoneOffset = 0;
    if (today.dst()) {
      timeZoneOffset = today.getTimezoneOffset();
    } else {
      timeZoneOffset = today.getTimezoneOffset() - 60;
    }
    return timeZoneOffset / 60 * -1;
  },
  startNewMessageCheckSingle: function() {
    var vid = this.cookieDataPers.vid;
    lh_inst.removeById("lhc_operator_message");
    var th = document.getElementsByTagName("head")[0];
    var s = document.createElement("script");
    var locationCurrent = encodeURIComponent(
      window.location.href.substring(window.location.protocol.length)
    );
    var tzOffset = this.getTzOffset();
    s.setAttribute("id", "lhc_operator_message");
    s.setAttribute("type", "text/javascript");
    s.setAttribute(
      "src",
      "//www.webworldexperts.com/support/lhc_web/index.php" +
        this.lang +
        "/chat/chatcheckoperatormessage/(theme)/3/(department)/0/1/2/(tz)/" +
        tzOffset +
        "/(count_page)/1/(vid)/" +
        vid +
        "/(uactiv)/" +
        lh_inst.userActive +
        "/(wopen)/" +
        lh_inst.timeoutStatusWidgetOpen +
        "?l=" +
        locationCurrent +
        this.parseStorageArguments() +
        this.parseOptionsOnline() +
        "&dt=" +
        encodeURIComponent(document.title)
    );
    th.appendChild(s);
  },
  logPageView: function() {
    var vid = this.cookieDataPers.vid;
    var th = document.getElementsByTagName("head")[0];
    var s = document.createElement("script");
    var locationCurrent = encodeURIComponent(
      window.location.href.substring(window.location.protocol.length)
    );
    var tzOffset = this.getTzOffset();
    s.setAttribute("id", "lhc_log_pageview");
    s.setAttribute("type", "text/javascript");
    s.setAttribute(
      "src",
      "//www.webworldexperts.com/support/lhc_web/index.php" +
        this.lang +
        "/chat/logpageview/(department)/0/1/2/(tz)/" +
        tzOffset +
        "/(vid)/" +
        vid +
        "/(uactiv)/" +
        lh_inst.userActive +
        "/(wopen)/" +
        lh_inst.timeoutStatusWidgetOpen +
        "?l=" +
        locationCurrent +
        this.parseStorageArguments() +
        this.parseOptionsOnline() +
        "&dt=" +
        encodeURIComponent(document.title)
    );
    th.appendChild(s);
  },
  removeCookieAttr: function(attr) {
    if (this.cookieData[attr]) {
      delete this.cookieData[attr];
      this.storeSesCookie();
    }
  },
  addCookieAttribute: function(attr, value) {
    if (!this.cookieData[attr] || this.cookieData[attr] != value) {
      this.cookieData[attr] = value;
      this.storeSesCookie();
    }
  },
  storePersistenCookie: function() {
    try {
      lhc_Cookies("lhc_per", this.JSON.stringify(this.cookieDataPers), {
        expires: 16070400
      });
    } catch (err) {}
  },
  storeSesCookie: function() {
    if (localStorage) {
      try {
        localStorage.setItem("lhc_ses", this.JSON.stringify(this.cookieData));
      } catch (err) {
        // Fallback to cookie
        lhc_Cookies("lhc_ses", this.JSON.stringify(this.cookieData), {});
      }
    } else {
      lhc_Cookies("lhc_ses", this.JSON.stringify(this.cookieData), {});
    }
  },
  initSessionStorage: function() {
    if (localStorage && localStorage.getItem("lhc_ses")) {
      this.cookieData = this.JSON.parse(localStorage.getItem("lhc_ses"));
    } else {
      var cookieData = lhc_Cookies("lhc_ses");
      if (typeof cookieData === "string" && cookieData) {
        this.cookieData = this.JSON.parse(cookieData);
      }
    }
  },
  storeReferrer: function(ref) {
    if (sessionStorage && !sessionStorage.getItem("lhc_ref")) {
      try {
        sessionStorage.setItem("lhc_ref", ref);
      } catch (err) {}
    }
  },
  makeScreenshot: function() {
    var inst = this;
    if (typeof html2canvas == "undefined") {
      var th = document.getElementsByTagName("head")[0];
      var s = document.createElement("script");
      s.setAttribute("type", "text/javascript");
      s.setAttribute(
        "src",
        "//www.webworldexperts.com/support/lhc_web/design/defaulttheme/js/html2canvas.min.js"
      );
      th.appendChild(s);
      s.onreadystatechange = s.onload = function() {
        inst.makeScreenshot();
      };
    } else {
      try {
        html2canvas(document.body, {
          onrendered: function(canvas) {
            var xhr = new XMLHttpRequest();
            xhr.open(
              "POST",
              "//www.webworldexperts.com/support/lhc_web/index.php" +
                lh_inst.lang +
                "/file/storescreenshot" +
                inst.getAppendCookieArguments(),
              true
            );
            xhr.setRequestHeader(
              "Content-type",
              "application/x-www-form-urlencoded"
            );
            xhr.send("data=" + encodeURIComponent(canvas.toDataURL()));
          }
        });
      } catch (err) {}
    }
  },
  finishScreenSharing: function() {
    this.removeById("lhc_status_mirror");
    this.removeCookieAttr("shr");
    this.removeCookieAttr("shrm");
    this.isSharing = false;
    var vid = this.cookieDataPers.vid;
    var th = document.getElementsByTagName("head")[0];
    var s = document.createElement("script");
    var locationCurrent = encodeURIComponent(
      window.location.href.substring(window.location.protocol.length)
    );
    var tzOffset = this.getTzOffset();
    s.setAttribute("id", "lhc_finish_shr");
    s.setAttribute("type", "text/javascript");
    s.setAttribute(
      "src",
      "//www.webworldexperts.com/support/lhc_web/index.php" +
        lh_inst.lang +
        "/cobrowse/finishsession/(sharemode)/" +
        lh_inst.sharemode +
        lh_inst.getAppendCookieArguments()
    );
    th.appendChild(s);
    this.cobrowser = null;
  },
  cobrowse: null,
  startCoBrowse: function(chatHash, sharemode) {
    var inst = this;
    if (
      this.isSharing == false &&
      (this.cookieData.shr ||
        0 == 1 ||
        confirm("Allow operator to see your page content?"))
    ) {
      this.sharehash = chatHash || this.cookieData.hash || this.cookieData.shr;
      this.sharemode = sharemode || this.cookieData.shrm || "chat";
      this.addCookieAttribute("shr", this.sharehash);
      this.addCookieAttribute("shrm", this.sharemode);
      if (typeof TreeMirror == "undefined") {
        var th = document.getElementsByTagName("head")[0];
        var s = document.createElement("script");
        s.setAttribute("type", "text/javascript");
        s.setAttribute(
          "src",
          "//www.webworldexperts.com/support/lhc_web/cache/compiledtemplates/3ed2b182994d2c21ab95a6d5f4533aaf.js"
        );
        th.appendChild(s);
        s.onreadystatechange = s.onload = function() {
          inst.startCoBrowse(inst.sharehash, this.sharemode);
        };
      } else {
        try {
          this.isSharing = true;
          this.addCookieAttribute("shr", this.sharehash);
          this.addCookieAttribute("shrm", this.sharemode);
          this.cobrowser = new LHCCoBrowser({
            chat_hash: this.sharehash,
            nodejssettings: {
              nodejssocket: "https://cdn.socket.io/socket.io-1.1.0.js",
              nodejshost: "https://wscb.livehelperchat.com",
              path: "",
              secure: true
            },
            nodejsenabled: 1,
            trans: { operator_watching: "Screen shared, click to finish" },
            url:
              "//www.webworldexperts.com/support/lhc_web/index.php" +
              lh_inst.lang +
              "/cobrowse/storenodemap/(sharemode)/" +
              inst.sharemode +
              inst.getAppendCookieArguments() +
              "/?url=" +
              encodeURIComponent(location.href.match(/^(.*\/)[^\/]*$/)[1])
          });
          this.cobrowser.startMirroring();
        } catch (err) {
          console.log(err);
        }
      }
    }
  },
  lhc_need_help_hide: function() {
    this.removeById("lhc_need_help_container");
    this.addCookieAttributePersistent("lhc_hnh", "1520592333");
    return false;
  },
  getPersistentAttribute: function(attr) {
    if (localStorage) {
      return localStorage.getItem(attr);
    } else {
      if (this.cookieDataPers[attr]) {
        return this.cookieDataPers[attr];
      }
      return null;
    }
  },
  addCookieAttributePersistent: function(attr, value) {
    if (localStorage) {
      try {
        localStorage.setItem(attr, value);
      } catch (err) {
        if (!this.cookieDataPers[attr] || this.cookieDataPers[attr] != value) {
          this.cookieDataPers[attr] = value;
          this.storePersistenCookie();
        }
      }
    } else {
      if (!this.cookieDataPers[attr] || this.cookieDataPers[attr] != value) {
        this.cookieDataPers[attr] = value;
        this.storePersistenCookie();
      }
    }
  },
  lhc_need_help_click: function() {
    this.lhc_need_help_hide();
    this.lh_openchatWindow();
  },
  initLanguage: function() {
    var langUser = this.getPersistentAttribute("lng");
    this.lang =
      langUser != null &&
      langUser != "" &&
      langUser != undefined &&
      this.langDefault != langUser
        ? langUser
        : this.lang;
  },
  resetTimeoutActivity: function() {
    var wasInactive = this.userActive == 0;
    this.userActive = 1;
    if (wasInactive == true) {
      this.syncUserStatus(1);
    }
    clearTimeout(this.timeoutActivity);
    var _that = this;
    this.timeoutActivity = setTimeout(function() {
      _that.userActive = 0;
      _that.syncUserStatus(1);
    }, 300 * 1000);
  },
  timeoutActivity: null,
  userActive: 1,
  timeoutStatuscheck: null,
  timeoutStatusWidgetOpen: 0,
  syncUserStatus: function(sender) {
    var hashAppend = this.cookieData.hash
      ? "/(hash)/" + this.cookieData.hash
      : "";
    var hashResume = this.cookieData.hash_resume
      ? "/(hash_resume)/" + this.cookieData.hash_resume
      : "";
    this.removeById("lhc_check_status");
    var th = document.getElementsByTagName("head")[0];
    var s = document.createElement("script");
    s.setAttribute("id", "lhc_check_status");
    s.setAttribute("type", "text/javascript");
    s.setAttribute(
      "src",
      "//www.webworldexperts.com/support/lhc_web/index.php" +
        this.lang +
        "/chat/chatcheckstatus/(department)/0/1/2/(status)/" +
        this.isOnline +
        (this.cookieDataPers.vid ? "/(vid)/" + this.cookieDataPers.vid : "") +
        hashAppend +
        hashResume +
        "/(uactiv)/" +
        this.userActive +
        "/(wopen)/" +
        this.timeoutStatusWidgetOpen +
        "/(uaction)/" +
        sender
    );
    th.appendChild(s);
  },
  checkStatusChat: function() {
    clearTimeout(this.timeoutStatuscheck);
    var _that = this;
    this.timeoutStatuscheck = setTimeout(function() {
      _that.syncUserStatus(0);
      _that.checkStatusChat();
    }, 290000);
  },
  refreshCustomFields: function() {
    var xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "//www.webworldexperts.com/support/lhc_web/index.php" +
        lh_inst.lang +
        "/chat/refreshcustomfields" +
        this.getAppendCookieArguments(),
      true
    );
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(this.parseOptions());
  },
  attatchActivityListeners: function() {
    var resetTimeout = function() {
      lh_inst.resetTimeoutActivity();
    };
    this.addEvent(window, "mousedown", resetTimeout);
    this.addEvent(window, "click", resetTimeout);
    this.addEvent(window, "scroll", resetTimeout);
    this.addEvent(window, "keypress", resetTimeout);
    this.addEvent(window, "load", resetTimeout);
    this.addEvent(document, "scroll", resetTimeout);
    this.addEvent(document, "touchstart", resetTimeout);
    this.addEvent(document, "touchend", resetTimeout);
    this.resetTimeoutActivity();
  },
  handleMessage: function(e) {
    var action = e.data.split(":")[0];
    if (action == "lhc_sizing_chat") {
      var height = e.data.split(":")[1];
      var elementObject = document.getElementById("lhc_iframe");
      var iframeContainer = document.getElementById("lhc_container");
      if (elementObject) {
        elementObject.height = height;
        elementObject.style.height = height + "px";
      }
      iframeContainer.className = iframeContainer.className;
    } else if (action == "lhc_ch") {
      var parts = e.data.split(":");
      if (parts[1] != "" && parts[2] != "") {
        lh_inst.addCookieAttribute(parts[1], parts[2]);
      }
    } else if (action == "lhc_open_restore") {
      lh_inst.lh_openchatWindow();
    } else if (action == "lhc_cfrefresh") {
      lh_inst.refreshCustomFields();
    } else if (action == "lhc_screenshot") {
      lh_inst.makeScreenshot();
    } else if (action == "lhc_disable_survey") {
      lh_inst.surveyShown = true;
    } else if (action == "lhc_chat_closed") {
      lh_inst.showSurvey();
    } else if (action == "lhc_cobrowse") {
      lh_inst.startCoBrowse(e.data.split(":")[1], "chat");
    } else if (action == "lhc_cobrowse_online") {
      lh_inst.startCoBrowse(e.data.split(":")[1], "onlineuser");
    } else if (action == "lhc_chat_redirect") {
      document.location = e.data
        .split(":")[1]
        .replace(new RegExp("__SPLIT__", "g"), ":");
    } else if (action == "lhc_cobrowse_cmd") {
      if (lh_inst.cobrowser !== null) {
        lh_inst.cobrowser.handleMessage(e.data.split(":"));
      }
    } else if (action == "lhc_lang") {
      var lang = e.data.split(":")[1];
      if (lang != undefined) {
        lh_inst.addCookieAttributePersistent("lng", lang);
        lh_inst.lang = lang;
      } else {
        lh_inst.addCookieAttributePersistent("lng", "");
        lh_inst.lang = "";
      }
    } else if (action == "lh_callback") {
      var functionName = e.data.split(":")[1];
      lh_inst.genericCallback(functionName);
    } else if (action == "lhc_close") {
      lh_inst.hide();
      lh_inst.chatClosedCallback("message");
    }
  }
};
if (window.attachEvent) {
  // IE
  window.attachEvent("onmessage", lh_inst.handleMessage);
}
if (document.attachEvent) {
  // IE
  document.attachEvent("onmessage", lh_inst.handleMessage);
}
if (window.addEventListener) {
  // FF
  window.addEventListener("message", lh_inst.handleMessage, false);
}
var cookieData = lhc_Cookies("lhc_per");
if (typeof cookieData === "string" && cookieData) {
  lh_inst.cookieDataPers = lh_inst.JSON.parse(cookieData);
  if (!lh_inst.cookieDataPers.vid) {
    lh_inst.cookieDataPers = { vid: "m4gzfo1s3h9v1618o3ms" };
    lh_inst.storePersistenCookie();
  }
} else {
  lh_inst.cookieDataPers = { vid: "m4gzfo1s3h9v1618o3ms" };
  lh_inst.storePersistenCookie();
}
lh_inst.initSessionStorage();
lh_inst.initLanguage();
lh_inst.showStatusWidget();
if (lh_inst.cookieData.hash) {
  lh_inst.stopCheckNewMessage();
  lh_inst.substatus = "_reopen";
  lh_inst.toggleStatusWidget(true);
  lh_inst.showStartWindow(undefined, true);
  lh_inst.logPageView();
  lh_inst.online_tracked = true;
}
if (!lh_inst.cookieData.hash) {
  lh_inst.startNewMessageCheck();
  lh_inst.online_tracked = true;
}
if (!lh_inst.cookieData.hash) {
  lh_inst.startNewMessageCheckSingle();
  lh_inst.online_tracked = true;
}
if (lh_inst.cookieData.shr) {
  lh_inst.startCoBrowse(lh_inst.cookieData.shr);
}
lh_inst.checkStatusChat();
lh_inst.attatchActivityListeners();
