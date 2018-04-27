var hljs = new function() {
  function k(v) {
    return v
      .replace(/&/gm, "&amp;")
      .replace(/</gm, "&lt;")
      .replace(/>/gm, "&gt;");
  }
  function t(v) {
    return v.nodeName.toLowerCase();
  }
  function i(w, x) {
    var v = w && w.exec(x);
    return v && v.index == 0;
  }
  function d(v) {
    return Array.prototype.map
      .call(v.childNodes, function(w) {
        if (w.nodeType == 3) {
          return b.useBR ? w.nodeValue.replace(/\n/g, "") : w.nodeValue;
        }
        if (t(w) == "br") {
          return "\n";
        }
        return d(w);
      })
      .join("");
  }
  function r(w) {
    var v = (
      w.className +
      " " +
      (w.parentNode ? w.parentNode.className : "")
    ).split(/\s+/);
    v = v.map(function(x) {
      return x.replace(/^language-/, "");
    });
    return v.filter(function(x) {
      return j(x) || x == "no-highlight";
    })[0];
  }
  function o(x, y) {
    var v = {};
    for (var w in x) {
      v[w] = x[w];
    }
    if (y) {
      for (var w in y) {
        v[w] = y[w];
      }
    }
    return v;
  }
  function u(x) {
    var v = [];
    (function w(y, z) {
      for (var A = y.firstChild; A; A = A.nextSibling) {
        if (A.nodeType == 3) {
          z += A.nodeValue.length;
        } else {
          if (t(A) == "br") {
            z += 1;
          } else {
            if (A.nodeType == 1) {
              v.push({ event: "start", offset: z, node: A });
              z = w(A, z);
              v.push({ event: "stop", offset: z, node: A });
            }
          }
        }
      }
      return z;
    })(x, 0);
    return v;
  }
  function q(w, y, C) {
    var x = 0;
    var F = "";
    var z = [];
    function B() {
      if (!w.length || !y.length) {
        return w.length ? w : y;
      }
      if (w[0].offset != y[0].offset) {
        return w[0].offset < y[0].offset ? w : y;
      }
      return y[0].event == "start" ? w : y;
    }
    function A(H) {
      function G(I) {
        return " " + I.nodeName + '="' + k(I.value) + '"';
      }
      F +=
        "<" + t(H) + Array.prototype.map.call(H.attributes, G).join("") + ">";
    }
    function E(G) {
      F += "</" + t(G) + ">";
    }
    function v(G) {
      (G.event == "start" ? A : E)(G.node);
    }
    while (w.length || y.length) {
      var D = B();
      F += k(C.substr(x, D[0].offset - x));
      x = D[0].offset;
      if (D == w) {
        z.reverse().forEach(E);
        do {
          v(D.splice(0, 1)[0]);
          D = B();
        } while (D == w && D.length && D[0].offset == x);
        z.reverse().forEach(A);
      } else {
        if (D[0].event == "start") {
          z.push(D[0].node);
        } else {
          z.pop();
        }
        v(D.splice(0, 1)[0]);
      }
    }
    return F + k(C.substr(x));
  }
  function m(y) {
    function v(z) {
      return (z && z.source) || z;
    }
    function w(A, z) {
      return RegExp(v(A), "m" + (y.cI ? "i" : "") + (z ? "g" : ""));
    }
    function x(D, C) {
      if (D.compiled) {
        return;
      }
      D.compiled = true;
      D.k = D.k || D.bK;
      if (D.k) {
        var z = {};
        function E(G, F) {
          if (y.cI) {
            F = F.toLowerCase();
          }
          F.split(" ").forEach(function(H) {
            var I = H.split("|");
            z[I[0]] = [G, I[1] ? Number(I[1]) : 1];
          });
        }
        if (typeof D.k == "string") {
          E("keyword", D.k);
        } else {
          Object.keys(D.k).forEach(function(F) {
            E(F, D.k[F]);
          });
        }
        D.k = z;
      }
      D.lR = w(D.l || /\b[A-Za-z0-9_]+\b/, true);
      if (C) {
        if (D.bK) {
          D.b = D.bK.split(" ").join("|");
        }
        if (!D.b) {
          D.b = /\B|\b/;
        }
        D.bR = w(D.b);
        if (!D.e && !D.eW) {
          D.e = /\B|\b/;
        }
        if (D.e) {
          D.eR = w(D.e);
        }
        D.tE = v(D.e) || "";
        if (D.eW && C.tE) {
          D.tE += (D.e ? "|" : "") + C.tE;
        }
      }
      if (D.i) {
        D.iR = w(D.i);
      }
      if (D.r === undefined) {
        D.r = 1;
      }
      if (!D.c) {
        D.c = [];
      }
      var B = [];
      D.c.forEach(function(F) {
        if (F.v) {
          F.v.forEach(function(G) {
            B.push(o(F, G));
          });
        } else {
          B.push(F == "self" ? D : F);
        }
      });
      D.c = B;
      D.c.forEach(function(F) {
        x(F, D);
      });
      if (D.starts) {
        x(D.starts, C);
      }
      var A = D.c
        .map(function(F) {
          return F.bK ? "\\.?\\b(" + F.b + ")\\b\\.?" : F.b;
        })
        .concat([D.tE])
        .concat([D.i])
        .map(v)
        .filter(Boolean);
      D.t = A.length
        ? w(A.join("|"), true)
        : {
            exec: function(F) {
              return null;
            }
          };
      D.continuation = {};
    }
    x(y);
  }
  function c(S, L, J, R) {
    function v(U, V) {
      for (var T = 0; T < V.c.length; T++) {
        if (i(V.c[T].bR, U)) {
          return V.c[T];
        }
      }
    }
    function z(U, T) {
      if (i(U.eR, T)) {
        return U;
      }
      if (U.eW) {
        return z(U.parent, T);
      }
    }
    function A(T, U) {
      return !J && i(U.iR, T);
    }
    function E(V, T) {
      var U = M.cI ? T[0].toLowerCase() : T[0];
      return V.k.hasOwnProperty(U) && V.k[U];
    }
    function w(Z, X, W, V) {
      var T = V ? "" : b.classPrefix,
        U = '<span class="' + T,
        Y = W ? "" : "</span>";
      U += Z + '">';
      return U + X + Y;
    }
    function N() {
      var U = k(C);
      if (!I.k) {
        return U;
      }
      var T = "";
      var X = 0;
      I.lR.lastIndex = 0;
      var V = I.lR.exec(U);
      while (V) {
        T += U.substr(X, V.index - X);
        var W = E(I, V);
        if (W) {
          H += W[1];
          T += w(W[0], V[0]);
        } else {
          T += V[0];
        }
        X = I.lR.lastIndex;
        V = I.lR.exec(U);
      }
      return T + U.substr(X);
    }
    function F() {
      if (I.sL && !f[I.sL]) {
        return k(C);
      }
      var T = I.sL ? c(I.sL, C, true, I.continuation.top) : g(C);
      if (I.r > 0) {
        H += T.r;
      }
      if (I.subLanguageMode == "continuous") {
        I.continuation.top = T.top;
      }
      return w(T.language, T.value, false, true);
    }
    function Q() {
      return I.sL !== undefined ? F() : N();
    }
    function P(V, U) {
      var T = V.cN ? w(V.cN, "", true) : "";
      if (V.rB) {
        D += T;
        C = "";
      } else {
        if (V.eB) {
          D += k(U) + T;
          C = "";
        } else {
          D += T;
          C = U;
        }
      }
      I = Object.create(V, { parent: { value: I } });
    }
    function G(T, X) {
      C += T;
      if (X === undefined) {
        D += Q();
        return 0;
      }
      var V = v(X, I);
      if (V) {
        D += Q();
        P(V, X);
        return V.rB ? 0 : X.length;
      }
      var W = z(I, X);
      if (W) {
        var U = I;
        if (!(U.rE || U.eE)) {
          C += X;
        }
        D += Q();
        do {
          if (I.cN) {
            D += "</span>";
          }
          H += I.r;
          I = I.parent;
        } while (I != W.parent);
        if (U.eE) {
          D += k(X);
        }
        C = "";
        if (W.starts) {
          P(W.starts, "");
        }
        return U.rE ? 0 : X.length;
      }
      if (A(X, I)) {
        throw new Error(
          'Illegal lexeme "' + X + '" for mode "' + (I.cN || "<unnamed>") + '"'
        );
      }
      C += X;
      return X.length || 1;
    }
    var M = j(S);
    if (!M) {
      throw new Error('Unknown language: "' + S + '"');
    }
    m(M);
    var I = R || M;
    var D = "";
    for (var K = I; K != M; K = K.parent) {
      if (K.cN) {
        D = w(K.cN, D, true);
      }
    }
    var C = "";
    var H = 0;
    try {
      var B,
        y,
        x = 0;
      while (true) {
        I.t.lastIndex = x;
        B = I.t.exec(L);
        if (!B) {
          break;
        }
        y = G(L.substr(x, B.index - x), B[0]);
        x = B.index + y;
      }
      G(L.substr(x));
      for (var K = I; K.parent; K = K.parent) {
        if (K.cN) {
          D += "</span>";
        }
      }
      return { r: H, value: D, language: S, top: I };
    } catch (O) {
      if (O.message.indexOf("Illegal") != -1) {
        return { r: 0, value: k(L) };
      } else {
        throw O;
      }
    }
  }
  function g(y, x) {
    x = x || b.languages || Object.keys(f);
    var v = { r: 0, value: k(y) };
    var w = v;
    x.forEach(function(z) {
      if (!j(z)) {
        return;
      }
      var A = c(z, y, false);
      A.language = z;
      if (A.r > w.r) {
        w = A;
      }
      if (A.r > v.r) {
        w = v;
        v = A;
      }
    });
    if (w.language) {
      v.second_best = w;
    }
    return v;
  }
  function h(v) {
    if (b.tabReplace) {
      v = v.replace(/^((<[^>]+>|\t)+)/gm, function(w, z, y, x) {
        return z.replace(/\t/g, b.tabReplace);
      });
    }
    if (b.useBR) {
      v = v.replace(/\n/g, "<br>");
    }
    return v;
  }
  function p(z) {
    var y = d(z);
    var A = r(z);
    if (A == "no-highlight") {
      return;
    }
    var v = A ? c(A, y, true) : g(y);
    var w = u(z);
    if (w.length) {
      var x = document.createElementNS("http://www.w3.org/1999/xhtml", "pre");
      x.innerHTML = v.value;
      v.value = q(w, u(x), y);
    }
    v.value = h(v.value);
    z.innerHTML = v.value;
    z.className += " hljs " + ((!A && v.language) || "");
    z.result = { language: v.language, re: v.r };
    if (v.second_best) {
      z.second_best = { language: v.second_best.language, re: v.second_best.r };
    }
  }
  var b = {
    classPrefix: "hljs-",
    tabReplace: null,
    useBR: false,
    languages: undefined
  };
  function s(v) {
    b = o(b, v);
  }
  function l() {
    if (l.called) {
      return;
    }
    l.called = true;
    var v = document.querySelectorAll("pre code");
    Array.prototype.forEach.call(v, p);
  }
  function a() {
    addEventListener("DOMContentLoaded", l, false);
    addEventListener("load", l, false);
  }
  var f = {};
  var n = {};
  function e(v, x) {
    var w = (f[v] = x(this));
    if (w.aliases) {
      w.aliases.forEach(function(y) {
        n[y] = v;
      });
    }
  }
  function j(v) {
    return f[v] || f[n[v]];
  }
  this.highlight = c;
  this.highlightAuto = g;
  this.fixMarkup = h;
  this.highlightBlock = p;
  this.configure = s;
  this.initHighlighting = l;
  this.initHighlightingOnLoad = a;
  this.registerLanguage = e;
  this.getLanguage = j;
  this.inherit = o;
  this.IR = "[a-zA-Z][a-zA-Z0-9_]*";
  this.UIR = "[a-zA-Z_][a-zA-Z0-9_]*";
  this.NR = "\\b\\d+(\\.\\d+)?";
  this.CNR =
    "(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
  this.BNR = "\\b(0b[01]+)";
  this.RSR =
    "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
  this.BE = { b: "\\\\[\\s\\S]", r: 0 };
  this.ASM = { cN: "string", b: "'", e: "'", i: "\\n", c: [this.BE] };
  this.QSM = { cN: "string", b: '"', e: '"', i: "\\n", c: [this.BE] };
  this.CLCM = { cN: "comment", b: "//", e: "$" };
  this.CBLCLM = { cN: "comment", b: "/\\*", e: "\\*/" };
  this.HCM = { cN: "comment", b: "#", e: "$" };
  this.NM = { cN: "number", b: this.NR, r: 0 };
  this.CNM = { cN: "number", b: this.CNR, r: 0 };
  this.BNM = { cN: "number", b: this.BNR, r: 0 };
  this.REGEXP_MODE = {
    cN: "regexp",
    b: /\//,
    e: /\/[gim]*/,
    i: /\n/,
    c: [this.BE, { b: /\[/, e: /\]/, r: 0, c: [this.BE] }]
  };
  this.TM = { cN: "title", b: this.IR, r: 0 };
  this.UTM = { cN: "title", b: this.UIR, r: 0 };
}();
hljs.registerLanguage("javascript", function(a) {
  return {
    aliases: ["js"],
    k: {
      keyword:
        "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",
      literal: "true false null undefined NaN Infinity",
      built_in:
        "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require"
    },
    c: [
      { cN: "pi", b: /^\s*('|")use strict('|")/, r: 10 },
      a.ASM,
      a.QSM,
      a.CLCM,
      a.CBLCLM,
      a.CNM,
      {
        b: "(" + a.RSR + "|\\b(case|return|throw)\\b)\\s*",
        k: "return throw case",
        c: [
          a.CLCM,
          a.CBLCLM,
          a.REGEXP_MODE,
          { b: /</, e: />;/, r: 0, sL: "xml" }
        ],
        r: 0
      },
      {
        cN: "function",
        bK: "function",
        e: /\{/,
        c: [
          a.inherit(a.TM, { b: /[A-Za-z$_][0-9A-Za-z$_]*/ }),
          { cN: "params", b: /\(/, e: /\)/, c: [a.CLCM, a.CBLCLM], i: /["'\(]/ }
        ],
        i: /\[|%/
      },
      { b: /\$[(.]/ },
      { b: "\\." + a.IR, r: 0 }
    ]
  };
});
hljs.registerLanguage("css", function(a) {
  var b = "[a-zA-Z-][a-zA-Z0-9_-]*";
  var c = {
    cN: "function",
    b: b + "\\(",
    e: "\\)",
    c: ["self", a.NM, a.ASM, a.QSM]
  };
  return {
    cI: true,
    i: "[=/|']",
    c: [
      a.CBLCLM,
      { cN: "id", b: "\\#[A-Za-z0-9_-]+" },
      { cN: "class", b: "\\.[A-Za-z0-9_-]+", r: 0 },
      { cN: "attr_selector", b: "\\[", e: "\\]", i: "$" },
      { cN: "pseudo", b: ":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+" },
      {
        cN: "at_rule",
        b: "@(font-face|page)",
        l: "[a-z-]+",
        k: "font-face page"
      },
      {
        cN: "at_rule",
        b: "@",
        e: "[{;]",
        c: [
          { cN: "keyword", b: /\S+/ },
          { b: /\s/, eW: true, eE: true, r: 0, c: [c, a.ASM, a.QSM, a.NM] }
        ]
      },
      { cN: "tag", b: b, r: 0 },
      {
        cN: "rules",
        b: "{",
        e: "}",
        i: "[^\\s]",
        r: 0,
        c: [
          a.CBLCLM,
          {
            cN: "rule",
            b: "[^\\s]",
            rB: true,
            e: ";",
            eW: true,
            c: [
              {
                cN: "attribute",
                b: "[A-Z\\_\\.\\-]+",
                e: ":",
                eE: true,
                i: "[^\\s]",
                starts: {
                  cN: "value",
                  eW: true,
                  eE: true,
                  c: [
                    c,
                    a.NM,
                    a.QSM,
                    a.ASM,
                    a.CBLCLM,
                    { cN: "hexcolor", b: "#[0-9A-Fa-f]+" },
                    { cN: "important", b: "!important" }
                  ]
                }
              }
            ]
          }
        ]
      }
    ]
  };
});
hljs.registerLanguage("xml", function(a) {
  var c = "[A-Za-z0-9\\._:-]+";
  var d = {
    b: /<\?(php)?(?!\w)/,
    e: /\?>/,
    sL: "php",
    subLanguageMode: "continuous"
  };
  var b = {
    eW: true,
    i: /</,
    r: 0,
    c: [
      d,
      { cN: "attribute", b: c, r: 0 },
      {
        b: "=",
        r: 0,
        c: [
          {
            cN: "value",
            v: [{ b: /"/, e: /"/ }, { b: /'/, e: /'/ }, { b: /[^\s\/>]+/ }]
          }
        ]
      }
    ]
  };
  return {
    aliases: ["html"],
    cI: true,
    c: [
      {
        cN: "doctype",
        b: "<!DOCTYPE",
        e: ">",
        r: 10,
        c: [{ b: "\\[", e: "\\]" }]
      },
      { cN: "comment", b: "<!--", e: "-->", r: 10 },
      { cN: "cdata", b: "<\\!\\[CDATA\\[", e: "\\]\\]>", r: 10 },
      {
        cN: "tag",
        b: "<style(?=\\s|>|$)",
        e: ">",
        k: { title: "style" },
        c: [b],
        starts: { e: "</style>", rE: true, sL: "css" }
      },
      {
        cN: "tag",
        b: "<script(?=\\s|>|$)",
        e: ">",
        k: { title: "script" },
        c: [b],
        starts: { e: "</script>", rE: true, sL: "javascript" }
      },
      { b: "<%", e: "%>", sL: "vbscript" },
      d,
      { cN: "pi", b: /<\?\w+/, e: /\?>/, r: 10 },
      {
        cN: "tag",
        b: "</?",
        e: "/?>",
        c: [{ cN: "title", b: "[^ /><]+", r: 0 }, b]
      }
    ]
  };
});
hljs.registerLanguage("json", function(a) {
  var e = { literal: "true false null" };
  var d = [a.QSM, a.CNM];
  var c = { cN: "value", e: ",", eW: true, eE: true, c: d, k: e };
  var b = {
    b: "{",
    e: "}",
    c: [
      {
        cN: "attribute",
        b: '\\s*"',
        e: '"\\s*:\\s*',
        eB: true,
        eE: true,
        c: [a.BE],
        i: "\\n",
        starts: c
      }
    ],
    i: "\\S"
  };
  var f = { b: "\\[", e: "\\]", c: [a.inherit(c, { cN: null })], i: "\\S" };
  d.splice(d.length, 0, b, f);
  return { c: d, k: e, i: "\\S" };
});