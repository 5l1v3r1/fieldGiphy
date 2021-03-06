"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license

*/
(function (e, t) {
  var n,
      r,
      i = (0, _typeof2["default"])(t),
      o = e.location,
      a = e.document,
      s = a.documentElement,
      l = e.jQuery,
      u = e.$,
      c = {},
      p = [],
      f = '1.10.2',
      d = p.concat,
      h = p.push,
      g = p.slice,
      m = p.indexOf,
      y = c.toString,
      v = c.hasOwnProperty,
      b = f.trim,
      x = function x(e, t) {
    return new x.fn.init(e, t, r);
  },
      w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      T = /\S+/g,
      C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      E = /^[\],:{}\s]*$/,
      S = /(?:^|:|,)(?:\s*\[)+/g,
      A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
      j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
      D = /^-ms-/,
      L = /-([\da-z])/gi,
      H = function H(e, t) {
    return t.toUpperCase();
  },
      q = function q(e) {
    (a.addEventListener || e.type === 'load' || a.readyState === 'complete') && (_(), x.ready());
  },
      _ = function _() {
    a.addEventListener ? (a.removeEventListener('DOMContentLoaded', q, !1), e.removeEventListener('load', q, !1)) : (a.detachEvent('onreadystatechange', q), e.detachEvent('onload', q));
  };

  x.fn = x.prototype = {
    jquery: f,
    constructor: x,
    init: function init(e, n, r) {
      var i, o;
      if (!e) return this;

      if (typeof e === 'string') {
        if (i = e.charAt(0) === '<' && e.charAt(e.length - 1) === '>' && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);

        if (i[1]) {
          if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n)) for (i in n) {
            x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
          }
          return this;
        }

        if (o = a.getElementById(i[2]), o && o.parentNode) {
          if (o.id !== i[2]) return r.find(e);
          this.length = 1, this[0] = o;
        }

        return this.context = a, this.selector = e, this;
      }

      return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this));
    },
    selector: '',
    length: 0,
    toArray: function toArray() {
      return g.call(this);
    },
    get: function get(e) {
      return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = x.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t;
    },
    each: function each(e, t) {
      return x.each(this, e, t);
    },
    ready: function ready(e) {
      return x.ready.promise().done(e), this;
    },
    slice: function slice() {
      return this.pushStack(g.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
    },
    map: function map(e) {
      return this.pushStack(x.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    },
    end: function end() {
      return this.prevObject || this.constructor(null);
    },
    push: h,
    sort: [].sort,
    splice: [].splice
  }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function () {
    var e,
        n,
        r,
        i,
        o,
        a,
        s = arguments[0] || {},
        l = 1,
        u = arguments.length,
        c = !1;

    for (typeof s === 'boolean' && (c = s, s = arguments[1] || {}, l = 2), (0, _typeof2["default"])(s) === 'object' || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++) {
      if ((o = arguments[l]) != null) for (i in o) {
        e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
      }
    }

    return s;
  }, x.extend({
    expando: "jQuery".concat((f + Math.random()).replace(/\D/g, '')),
    noConflict: function noConflict(t) {
      return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x;
    },
    isReady: !1,
    readyWait: 1,
    holdReady: function holdReady(e) {
      e ? x.readyWait++ : x.ready(!0);
    },
    ready: function ready(e) {
      if (e === !0 ? ! --x.readyWait : !x.isReady) {
        if (!a.body) return setTimeout(x.ready);
        x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger('ready').off('ready'));
      }
    },
    isFunction: function isFunction(e) {
      return x.type(e) === 'function';
    },
    isArray: Array.isArray || function (e) {
      return x.type(e) === 'array';
    },
    isWindow: function isWindow(e) {
      return e != null && e == e.window;
    },
    isNumeric: function isNumeric(e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    },
    type: function type(e) {
      return e == null ? "".concat(e) : (0, _typeof2["default"])(e) === 'object' || typeof e === 'function' ? c[y.call(e)] || 'object' : (0, _typeof2["default"])(e);
    },
    isPlainObject: function isPlainObject(e) {
      var n;
      if (!e || x.type(e) !== 'object' || e.nodeType || x.isWindow(e)) return !1;

      try {
        if (e.constructor && !v.call(e, 'constructor') && !v.call(e.constructor.prototype, 'isPrototypeOf')) return !1;
      } catch (r) {
        return !1;
      }

      if (x.support.ownLast) for (n in e) {
        return v.call(e, n);
      }

      for (n in e) {
        ;
      }

      return n === t || v.call(e, n);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    error: function error(e) {
      throw Error(e);
    },
    parseHTML: function parseHTML(e, t, n) {
      if (!e || typeof e !== 'string') return null;
      typeof t === 'boolean' && (n = t, t = !1), t = t || a;
      var r = k.exec(e),
          i = !n && [];
      return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes));
    },
    parseJSON: function parseJSON(n) {
      return e.JSON && e.JSON.parse ? e.JSON.parse(n) : n === null ? n : typeof n === 'string' && (n = x.trim(n), n && E.test(n.replace(A, '@').replace(j, ']').replace(S, ''))) ? Function("return ".concat(n))() : (x.error("Invalid JSON: ".concat(n)), t);
    },
    parseXML: function parseXML(n) {
      var r, i;
      if (!n || typeof n !== 'string') return null;

      try {
        e.DOMParser ? (i = new DOMParser(), r = i.parseFromString(n, 'text/xml')) : (r = new ActiveXObject('Microsoft.XMLDOM'), r.async = 'false', r.loadXML(n));
      } catch (o) {
        r = t;
      }

      return r && r.documentElement && !r.getElementsByTagName('parsererror').length || x.error("Invalid XML: ".concat(n)), r;
    },
    noop: function noop() {},
    globalEval: function globalEval(t) {
      t && x.trim(t) && (e.execScript || function (t) {
        e.eval.call(e, t);
      })(t);
    },
    camelCase: function camelCase(e) {
      return e.replace(D, 'ms-').replace(L, H);
    },
    nodeName: function nodeName(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    },
    each: function each(e, t, n) {
      var r,
          i = 0,
          o = e.length,
          a = M(e);

      if (n) {
        if (a) {
          for (; o > i; i++) {
            if (r = t.apply(e[i], n), r === !1) break;
          }
        } else for (i in e) {
          if (r = t.apply(e[i], n), r === !1) break;
        }
      } else if (a) {
        for (; o > i; i++) {
          if (r = t.call(e[i], i, e[i]), r === !1) break;
        }
      } else for (i in e) {
        if (r = t.call(e[i], i, e[i]), r === !1) break;
      }

      return e;
    },
    trim: b && !b.call("\uFEFF\xA0") ? function (e) {
      return e == null ? '' : b.call(e);
    } : function (e) {
      return e == null ? '' : "".concat(e).replace(C, '');
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return e != null && (M(Object(e)) ? x.merge(n, typeof e === 'string' ? [e] : e) : h.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      var r;

      if (t) {
        if (m) return m.call(t, e, n);

        for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; r > n; n++) {
          if (n in t && t[n] === e) return n;
        }
      }

      return -1;
    },
    merge: function merge(e, n) {
      var r = n.length,
          i = e.length,
          o = 0;
      if (typeof r === 'number') for (; r > o; o++) {
        e[i++] = n[o];
      } else while (n[o] !== t) {
        e[i++] = n[o++];
      }
      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      var r,
          i = [],
          o = 0,
          a = e.length;

      for (n = !!n; a > o; o++) {
        r = !!t(e[o], o), n !== r && i.push(e[o]);
      }

      return i;
    },
    map: function map(e, t, n) {
      var r,
          i = 0,
          o = e.length,
          a = M(e),
          s = [];
      if (a) for (; o > i; i++) {
        r = t(e[i], i, n), r != null && (s[s.length] = r);
      } else for (i in e) {
        r = t(e[i], i, n), r != null && (s[s.length] = r);
      }
      return d.apply([], s);
    },
    guid: 1,
    proxy: function proxy(e, n) {
      var r, i, o;
      return typeof n === 'string' && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function i() {
        return e.apply(n || this, r.concat(g.call(arguments)));
      }, i.guid = e.guid = e.guid || x.guid++, i) : t;
    },
    access: function access(e, n, r, i, o, a, s) {
      var l = 0,
          u = e.length,
          c = r == null;

      if (x.type(r) === 'object') {
        o = !0;

        for (l in r) {
          x.access(e, n, l, r[l], !0, a, s);
        }
      } else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function n(e, t, _n2) {
        return c.call(x(e), _n2);
      })), n)) for (; u > l; l++) {
        n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
      }

      return o ? e : c ? n.call(e) : u ? n(e[0], r) : a;
    },
    now: function now() {
      return new Date().getTime();
    },
    swap: function swap(e, t, n, r) {
      var i,
          o,
          a = {};

      for (o in t) {
        a[o] = e.style[o], e.style[o] = t[o];
      }

      i = n.apply(e, r || []);

      for (o in t) {
        e.style[o] = a[o];
      }

      return i;
    }
  }), x.ready.promise = function (t) {
    if (!n) if (n = x.Deferred(), a.readyState === 'complete') setTimeout(x.ready);else if (a.addEventListener) a.addEventListener('DOMContentLoaded', q, !1), e.addEventListener('load', q, !1);else {
      a.attachEvent('onreadystatechange', q), e.attachEvent('onload', q);

      var _r = !1;

      try {
        _r = e.frameElement == null && a.documentElement;
      } catch (i) {}

      _r && _r.doScroll && function o() {
        if (!x.isReady) {
          try {
            _r.doScroll('left');
          } catch (e) {
            return setTimeout(o, 50);
          }

          _(), x.ready();
        }
      }();
    }
    return n.promise(t);
  }, x.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (e, t) {
    c["[object ".concat(t, "]")] = t.toLowerCase();
  });

  function M(e) {
    var t = e.length,
        n = x.type(e);
    return x.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : n === 'array' || n !== 'function' && (t === 0 || typeof t === 'number' && t > 0 && t - 1 in e);
  }

  r = x(a), function (e, t) {
    var n,
        r,
        i,
        o,
        a,
        s,
        l,
        u,
        c,
        p,
        f,
        d,
        h,
        g,
        m,
        y,
        v,
        b = "sizzle".concat(-new Date()),
        w = e.document,
        T = 0,
        C = 0,
        N = st(),
        k = st(),
        E = st(),
        S = !1,
        A = function A(e, t) {
      return e === t ? (S = !0, 0) : 0;
    },
        j = (0, _typeof2["default"])(t),
        D = 1 << 31,
        L = {}.hasOwnProperty,
        H = [],
        q = H.pop,
        _ = H.push,
        M = H.push,
        O = H.slice,
        F = H.indexOf || function (e) {
      var t = 0,
          n = this.length;

      for (; n > t; t++) {
        if (this[t] === e) return t;
      }

      return -1;
    },
        B = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
        P = '[\\x20\\t\\r\\n\\f]',
        R = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
        W = R.replace('w', 'w#'),
        $ = "\\[".concat(P, "*(").concat(R, ")").concat(P, "*(?:([*^$|!~]?=)").concat(P, "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(").concat(W, ")|)|)").concat(P, "*\\]"),
        I = ":(".concat(R, ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|").concat($.replace(3, 8), ")*)|.*)\\)|)"),
        z = RegExp("^".concat(P, "+|((?:^|[^\\\\])(?:\\\\.)*)").concat(P, "+$"), 'g'),
        X = RegExp("^".concat(P, "*,").concat(P, "*")),
        U = RegExp("^".concat(P, "*([>+~]|").concat(P, ")").concat(P, "*")),
        V = RegExp("".concat(P, "*[+~]")),
        Y = RegExp("=".concat(P, "*([^\\]'\"]*)").concat(P, "*\\]"), 'g'),
        J = RegExp(I),
        G = RegExp("^".concat(W, "$")),
        Q = {
      ID: RegExp("^#(".concat(R, ")")),
      CLASS: RegExp("^\\.(".concat(R, ")")),
      TAG: RegExp("^(".concat(R.replace('w', 'w*'), ")")),
      ATTR: RegExp("^".concat($)),
      PSEUDO: RegExp("^".concat(I)),
      CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(".concat(P, "*(even|odd|(([+-]|)(\\d*)n|)").concat(P, "*(?:([+-]|)").concat(P, "*(\\d+)|))").concat(P, "*\\)|)"), 'i'),
      bool: RegExp("^(?:".concat(B, ")$"), 'i'),
      needsContext: RegExp("^".concat(P, "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(").concat(P, "*((?:-\\d)?\\d*)").concat(P, "*\\)|)(?=[^-]|$)"), 'i')
    },
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        et = /^(?:input|select|textarea|button)$/i,
        tt = /^h\d$/i,
        nt = /'|\\/g,
        rt = RegExp("\\\\([\\da-f]{1,6}".concat(P, "?|(").concat(P, ")|.)"), 'ig'),
        it = function it(e, t, n) {
      var r = "0x".concat(t) - 65536;
      return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r);
    };

    try {
      M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType;
    } catch (ot) {
      M = {
        apply: H.length ? function (e, t) {
          _.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function at(e, t, n, i) {
      var o, a, s, l, u, c, d, m, y, x;
      if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || typeof e !== 'string') return n;
      if ((l = t.nodeType) !== 1 && l !== 9) return [];

      if (h && !i) {
        if (o = Z.exec(e)) if (s = o[1]) {
          if (l === 9) {
            if (a = t.getElementById(s), !a || !a.parentNode) return n;
            if (a.id === s) return n.push(a), n;
          } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) return n.push(a), n;
        } else {
          if (o[2]) return M.apply(n, t.getElementsByTagName(e)), n;
          if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(s)), n;
        }

        if (r.qsa && (!g || !g.test(e))) {
          if (m = d = b, y = t, x = l === 9 && e, l === 1 && t.nodeName.toLowerCase() !== 'object') {
            c = mt(e), (d = t.getAttribute('id')) ? m = d.replace(nt, '\\$&') : t.setAttribute('id', m), m = "[id='".concat(m, "'] "), u = c.length;

            while (u--) {
              c[u] = m + yt(c[u]);
            }

            y = V.test(e) && t.parentNode || t, x = c.join(',');
          }

          if (x) try {
            return M.apply(n, y.querySelectorAll(x)), n;
          } catch (T) {} finally {
            d || t.removeAttribute('id');
          }
        }
      }

      return kt(e.replace(z, '$1'), t, n, i);
    }

    function st() {
      var e = [];

      function t(n, r) {
        return e.push(n += ' ') > o.cacheLength && delete t[e.shift()], t[n] = r;
      }

      return t;
    }

    function lt(e) {
      return e[b] = !0, e;
    }

    function ut(e) {
      var t = f.createElement('div');

      try {
        return !!e(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function ct(e, t) {
      var n = e.split('|'),
          r = e.length;

      while (r--) {
        o.attrHandle[n[r]] = t;
      }
    }

    function pt(e, t) {
      var n = t && e,
          r = n && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || D) - (~e.sourceIndex || D);
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function ft(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return n === 'input' && t.type === e;
      };
    }

    function dt(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return (n === 'input' || n === 'button') && t.type === e;
      };
    }

    function ht(e) {
      return lt(function (t) {
        return t = +t;
      }, lt(function (n, r) {
        var i,
            o = e([], n.length, t),
            a = o.length;

        while (a--) {
          n[i = o[a]] && (n[i] = !(r[i] = n[i]));
        }
      }));
    }

    s = at.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return t ? t.nodeName !== 'HTML' : !1;
    }, r = at.support = {}, p = at.setDocument = function (e) {
      var n = e ? e.ownerDocument || e : w,
          i = n.defaultView;
      return n !== f && n.nodeType === 9 && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent('onbeforeunload', function () {
        p();
      }), r.attributes = ut(function (e) {
        return e.className = 'i';
      }, !e.getAttribute('className')), r.getElementsByTagName = ut(function (e) {
        return e.appendChild(n.createComment(''));
      }, !e.getElementsByTagName('*').length), r.getElementsByClassName = ut(function (e) {
        return e.innerHTML = "<div class='a'></div><div class='a i'></div>";
      }, e.firstChild.className = 'i', e.getElementsByClassName('i').length === 2), r.getById = ut(function (e) {
        return d.appendChild(e).id = b;
      }, !n.getElementsByName || !n.getElementsByName(b).length), r.getById ? (o.find.ID = function (e, t) {
        if ((0, _typeof2["default"])(t.getElementById) !== j && h) {
          var _n3 = t.getElementById(e);

          return _n3 && _n3.parentNode ? [_n3] : [];
        }
      }, o.filter.ID = function (e) {
        var t = e.replace(rt, it);
        return function (e) {
          return e.getAttribute('id') === t;
        };
      }) : (delete o.find.ID, o.filter.ID = function (e) {
        var t = e.replace(rt, it);
        return function (e) {
          var n = (0, _typeof2["default"])(e.getAttributeNode) !== j && e.getAttributeNode('id');
          return n && n.value === t;
        };
      }), o.find.TAG = r.getElementsByTagName ? function (e, n) {
        return (0, _typeof2["default"])(n.getElementsByTagName) !== j ? n.getElementsByTagName(e) : t;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if (e === '*') {
          while (n = o[i++]) {
            n.nodeType === 1 && r.push(n);
          }

          return r;
        }

        return o;
      }, o.find.CLASS = r.getElementsByClassName && function (e, n) {
        return (0, _typeof2["default"])(n.getElementsByClassName) !== j && h ? n.getElementsByClassName(e) : t;
      }, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function (e) {
        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll('[selected]').length || g.push("\\[".concat(P, "*(?:value|").concat(B, ")")), e.querySelectorAll(':checked').length || g.push(':checked');
      }), ut(function (e) {
        var t = n.createElement('input');
        t.setAttribute('type', 'hidden'), e.appendChild(t).setAttribute('t', ''), e.querySelectorAll("[t^='']").length && g.push("[*^$]=".concat(P, "*(?:''|\"\")")), e.querySelectorAll(':enabled').length || g.push(':enabled', ':disabled'), e.querySelectorAll('*,:x'), g.push(',.*:');
      })), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function (e) {
        r.disconnectedMatch = y.call(e, 'div'), y.call(e, "[s!='']:x"), m.push('!=', I);
      }), g = g.length && RegExp(g.join('|')), m = m.length && RegExp(m.join('|')), v = K.test(d.contains) || d.compareDocumentPosition ? function (e, t) {
        var n = e.nodeType === 9 ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || r.nodeType !== 1 || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, A = d.compareDocumentPosition ? function (e, t) {
        if (e === t) return S = !0, 0;
        var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
        return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
      } : function (e, t) {
        var r,
            i = 0,
            o = e.parentNode,
            a = t.parentNode,
            s = [e],
            l = [t];
        if (e === t) return S = !0, 0;
        if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
        if (o === a) return pt(e, t);
        r = e;

        while (r = r.parentNode) {
          s.unshift(r);
        }

        r = t;

        while (r = r.parentNode) {
          l.unshift(r);
        }

        while (s[i] === l[i]) {
          i++;
        }

        return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0;
      }, n) : f;
    }, at.matches = function (e, t) {
      return at(e, null, null, t);
    }, at.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) try {
        var _n4 = y.call(e, t);

        if (_n4 || r.disconnectedMatch || e.document && e.document.nodeType !== 11) return _n4;
      } catch (i) {}
      return at(t, f, null, [e]).length > 0;
    }, at.contains = function (e, t) {
      return (e.ownerDocument || e) !== f && p(e), v(e, t);
    }, at.attr = function (e, n) {
      (e.ownerDocument || e) !== f && p(e);
      var i = o.attrHandle[n.toLowerCase()],
          a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
      return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a;
    }, at.error = function (e) {
      throw Error("Syntax error, unrecognized expression: ".concat(e));
    }, at.uniqueSort = function (e) {
      var t,
          n = [],
          i = 0,
          o = 0;

      if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
        while (t = e[o++]) {
          t === e[o] && (i = n.push(o));
        }

        while (i--) {
          e.splice(n[i], 1);
        }
      }

      return e;
    }, a = at.getText = function (e) {
      var t,
          n = '',
          r = 0,
          i = e.nodeType;

      if (i) {
        if (i === 1 || i === 9 || i === 11) {
          if (typeof e.textContent === 'string') return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += a(e);
          }
        } else if (i === 3 || i === 4) return e.nodeValue;
      } else for (; t = e[r]; r++) {
        n += a(t);
      }

      return n;
    }, o = at.selectors = {
      cacheLength: 50,
      createPseudo: lt,
      match: Q,
      attrHandle: {},
      find: {},
      relative: {
        '>': {
          dir: 'parentNode',
          first: !0
        },
        ' ': {
          dir: 'parentNode'
        },
        '+': {
          dir: 'previousSibling',
          first: !0
        },
        '~': {
          dir: 'previousSibling'
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || '').replace(rt, it), e[2] === '~=' && (e[3] = " ".concat(e[3], " ")), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === 'nth' ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === 'even' || e[3] === 'odd')), e[5] = +(e[7] + e[8] || e[3] === 'odd')) : e[3] && at.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var n,
              r = !e[5] && e[2];
          return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(')', r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(rt, it).toLowerCase();
          return e === '*' ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = N["".concat(e, " ")];
          return t || (t = RegExp("(^|".concat(P, ")").concat(e, "(").concat(P, "|$)"))) && N(e, function (e) {
            return t.test(typeof e.className === 'string' && e.className || (0, _typeof2["default"])(e.getAttribute) !== j && e.getAttribute('class') || '');
          });
        },
        ATTR: function ATTR(e, t, n) {
          return function (r) {
            var i = at.attr(r, e);
            return i == null ? t === '!=' : t ? (i += '', t === '=' ? i === n : t === '!=' ? i !== n : t === '^=' ? n && i.indexOf(n) === 0 : t === '*=' ? n && i.indexOf(n) > -1 : t === '$=' ? n && i.slice(-n.length) === n : t === '~=' ? " ".concat(i, " ").indexOf(n) > -1 : t === '|=' ? i === n || i.slice(0, n.length + 1) === "".concat(n, "-") : !1) : !0;
          };
        },
        CHILD: function CHILD(e, t, n, r, i) {
          var o = e.slice(0, 3) !== 'nth',
              a = e.slice(-4) !== 'last',
              s = t === 'of-type';
          return r === 1 && i === 0 ? function (e) {
            return !!e.parentNode;
          } : function (t, n, l) {
            var u,
                c,
                p,
                f,
                d,
                h,
                g = o !== a ? 'nextSibling' : 'previousSibling',
                m = t.parentNode,
                y = s && t.nodeName.toLowerCase(),
                v = !l && !s;

            if (m) {
              if (o) {
                while (g) {
                  p = t;

                  while (p = p[g]) {
                    if (s ? p.nodeName.toLowerCase() === y : p.nodeType === 1) return !1;
                  }

                  h = g = e === 'only' && !h && 'nextSibling';
                }

                return !0;
              }

              if (h = [a ? m.firstChild : m.lastChild], a && v) {
                c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];

                while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
                  if (p.nodeType === 1 && ++f && p === t) {
                    c[e] = [T, d, f];
                    break;
                  }
                }
              } else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) f = u[1];else while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
                if ((s ? p.nodeName.toLowerCase() === y : p.nodeType === 1) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)) break;
              }

              return f -= i, f === r || f % r === 0 && f / r >= 0;
            }
          };
        },
        PSEUDO: function PSEUDO(e, t) {
          var n,
              r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: ".concat(e));
          return r[b] ? r(t) : r.length > 1 ? (n = [e, e, '', t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function (e, n) {
            var i,
                o = r(e, t),
                a = o.length;

            while (a--) {
              i = F.call(e, o[a]), e[i] = !(n[i] = o[a]);
            }
          }) : function (e) {
            return r(e, 0, n);
          }) : r;
        }
      },
      pseudos: {
        not: lt(function (e) {
          var t = [],
              n = [],
              r = l(e.replace(z, '$1'));
          return r[b] ? lt(function (e, t, n, i) {
            var o,
                a = r(e, null, i, []),
                s = e.length;

            while (s--) {
              (o = a[s]) && (e[s] = !(t[s] = o));
            }
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), !n.pop();
          };
        }),
        has: lt(function (e) {
          return function (t) {
            return at(e, t).length > 0;
          };
        }),
        contains: lt(function (e) {
          return function (t) {
            return (t.textContent || t.innerText || a(t)).indexOf(e) > -1;
          };
        }),
        lang: lt(function (e) {
          return G.test(e || '') || at.error("unsupported lang: ".concat(e));
        }, e = e.replace(rt, it).toLowerCase(), function (t) {
          var n;

          do {
            if (n = h ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang')) return n = n.toLowerCase(), n === e || n.indexOf("".concat(e, "-")) === 0;
          } while ((t = t.parentNode) && t.nodeType === 1);

          return !1;
        }),
        target: function target(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function root(e) {
          return e === d;
        },
        focus: function focus(e) {
          return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: function enabled(e) {
          return e.disabled === !1;
        },
        disabled: function disabled(e) {
          return e.disabled === !0;
        },
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return t === 'input' && !!e.checked || t === 'option' && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeName > '@' || e.nodeType === 3 || e.nodeType === 4) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !o.pseudos.empty(e);
        },
        header: function header(e) {
          return tt.test(e.nodeName);
        },
        input: function input(e) {
          return et.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return t === 'input' && e.type === 'button' || t === 'button';
        },
        text: function text(e) {
          var t;
          return e.nodeName.toLowerCase() === 'input' && e.type === 'text' && ((t = e.getAttribute('type')) == null || t.toLowerCase() === e.type);
        },
        first: ht(function () {
          return [0];
        }),
        last: ht(function (e, t) {
          return [t - 1];
        }),
        eq: ht(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ht(function (e, t) {
          var n = 0;

          for (; t > n; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: ht(function (e, t) {
          var n = 1;

          for (; t > n; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: ht(function (e, t, n) {
          var r = n < 0 ? n + t : n;

          for (; --r >= 0;) {
            e.push(r);
          }

          return e;
        }),
        gt: ht(function (e, t, n) {
          var r = n < 0 ? n + t : n;

          for (; t > ++r;) {
            e.push(r);
          }

          return e;
        })
      }
    }, o.pseudos.nth = o.pseudos.eq;

    for (n in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      o.pseudos[n] = ft(n);
    }

    for (n in {
      submit: !0,
      reset: !0
    }) {
      o.pseudos[n] = dt(n);
    }

    function gt() {}

    gt.prototype = o.filters = o.pseudos, o.setFilters = new gt();

    function mt(e, t) {
      var n,
          r,
          i,
          a,
          s,
          l,
          u,
          c = k["".concat(e, " ")];
      if (c) return t ? 0 : c.slice(0);
      s = e, l = [], u = o.preFilter;

      while (s) {
        (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace(z, ' ')
        }), s = s.slice(n.length));

        for (a in o.filter) {
          !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({
            value: n,
            type: a,
            matches: r
          }), s = s.slice(n.length));
        }

        if (!n) break;
      }

      return t ? s.length : s ? at.error(e) : k(e, l).slice(0);
    }

    function yt(e) {
      var t = 0,
          n = e.length,
          r = '';

      for (; n > t; t++) {
        r += e[t].value;
      }

      return r;
    }

    function vt(e, t, n) {
      var r = t.dir,
          o = n && r === 'parentNode',
          a = C++;
      return t.first ? function (t, n, i) {
        while (t = t[r]) {
          if (t.nodeType === 1 || o) return e(t, n, i);
        }
      } : function (t, n, s) {
        var l,
            u,
            c,
            p = "".concat(T, " ").concat(a);

        if (s) {
          while (t = t[r]) {
            if ((t.nodeType === 1 || o) && e(t, n, s)) return !0;
          }
        } else while (t = t[r]) {
          if (t.nodeType === 1 || o) if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
            if ((l = u[1]) === !0 || l === i) return l === !0;
          } else if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0) return !0;
        }
      };
    }

    function bt(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;

        while (i--) {
          if (!e[i](t, n, r)) return !1;
        }

        return !0;
      } : e[0];
    }

    function xt(e, t, n, r, i) {
      var o,
          a = [],
          s = 0,
          l = e.length,
          u = t != null;

      for (; l > s; s++) {
        (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
      }

      return a;
    }

    function wt(e, t, n, r, i, o) {
      return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function (o, a, s, l) {
        var u,
            c,
            p,
            f = [],
            d = [],
            h = a.length,
            g = o || Nt(t || '*', s.nodeType ? [s] : s, []),
            m = !e || !o && t ? g : xt(g, f, e, s, l),
            y = n ? i || (o ? e : h || r) ? [] : a : m;

        if (n && n(m, y, s, l), r) {
          u = xt(y, d), r(u, [], s, l), c = u.length;

          while (c--) {
            (p = u[c]) && (y[d[c]] = !(m[d[c]] = p));
          }
        }

        if (o) {
          if (i || e) {
            if (i) {
              u = [], c = y.length;

              while (c--) {
                (p = y[c]) && u.push(m[c] = p);
              }

              i(null, y = [], u, l);
            }

            c = y.length;

            while (c--) {
              (p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p));
            }
          }
        } else y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y);
      });
    }

    function Tt(e) {
      var t,
          n,
          r,
          i = e.length,
          a = o.relative[e[0].type],
          s = a || o.relative[' '],
          l = a ? 1 : 0,
          c = vt(function (e) {
        return e === t;
      }, s, !0),
          p = vt(function (e) {
        return F.call(t, e) > -1;
      }, s, !0),
          f = [function (e, n, r) {
        return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r));
      }];

      for (; i > l; l++) {
        if (n = o.relative[e[l].type]) f = [vt(bt(f), n)];else {
          if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
            for (r = ++l; i > r; r++) {
              if (o.relative[e[r].type]) break;
            }

            return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({
              value: e[l - 2].type === ' ' ? '*' : ''
            })).replace(z, '$1'), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e));
          }

          f.push(n);
        }
      }

      return bt(f);
    }

    function Ct(e, t) {
      var n = 0,
          r = t.length > 0,
          a = e.length > 0,
          s = function s(_s, l, c, p, d) {
        var h,
            g,
            m,
            y = [],
            v = 0,
            b = '0',
            x = _s && [],
            w = d != null,
            C = u,
            N = _s || a && o.find.TAG('*', d && l.parentNode || l),
            k = T += C == null ? 1 : Math.random() || 0.1;

        for (w && (u = l !== f && l, i = n); (h = N[b]) != null; b++) {
          if (a && h) {
            g = 0;

            while (m = e[g++]) {
              if (m(h, l, c)) {
                p.push(h);
                break;
              }
            }

            w && (T = k, i = ++n);
          }

          r && ((h = !m && h) && v--, _s && x.push(h));
        }

        if (v += b, r && b !== v) {
          g = 0;

          while (m = t[g++]) {
            m(x, y, l, c);
          }

          if (_s) {
            if (v > 0) while (b--) {
              x[b] || y[b] || (y[b] = q.call(p));
            }
            y = xt(y);
          }

          M.apply(p, y), w && !_s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p);
        }

        return w && (T = k, u = C), x;
      };

      return r ? lt(s) : s;
    }

    l = at.compile = function (e, t) {
      var n,
          r = [],
          i = [],
          o = E["".concat(e, " ")];

      if (!o) {
        t || (t = mt(e)), n = t.length;

        while (n--) {
          o = Tt(t[n]), o[b] ? r.push(o) : i.push(o);
        }

        o = E(e, Ct(i, r));
      }

      return o;
    };

    function Nt(e, t, n) {
      var r = 0,
          i = t.length;

      for (; i > r; r++) {
        at(e, t[r], n);
      }

      return n;
    }

    function kt(e, t, n, i) {
      var a,
          s,
          u,
          c,
          p,
          f = mt(e);

      if (!i && f.length === 1) {
        if (s = f[0] = f[0].slice(0), s.length > 2 && (u = s[0]).type === 'ID' && r.getById && t.nodeType === 9 && h && o.relative[s[1].type]) {
          if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) return n;
          e = e.slice(s.shift().value.length);
        }

        a = Q.needsContext.test(e) ? 0 : s.length;

        while (a--) {
          if (u = s[a], o.relative[c = u.type]) break;

          if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
            if (s.splice(a, 1), e = i.length && yt(s), !e) return M.apply(n, i), n;
            break;
          }
        }
      }

      return l(e, f)(i, t, !h, n, V.test(e)), n;
    }

    r.sortStable = b.split('').sort(A).join('') === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function (e) {
      return 1 & e.compareDocumentPosition(f.createElement('div'));
    }), ut(function (e) {
      return e.innerHTML = "<a href='#'></a>";
    }, e.firstChild.getAttribute('href') === '#') || ct('type|href|height|width', function (e, n, r) {
      return r ? t : e.getAttribute(n, n.toLowerCase() === 'type' ? 1 : 2);
    }), r.attributes && ut(function (e) {
      return e.innerHTML = '<input/>';
    }, e.firstChild.setAttribute('value', ''), e.firstChild.getAttribute('value') === '') || ct('value', function (e, n, r) {
      return r || e.nodeName.toLowerCase() !== 'input' ? t : e.defaultValue;
    }), ut(function (e) {
      return e.getAttribute('disabled') == null;
    }) || ct(B, function (e, n, r) {
      var i;
      return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null;
    }), x.find = at, x.expr = at.selectors, x.expr[':'] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains;
  }(e);
  var O = {};

  function F(e) {
    var t = O[e] = {};
    return x.each(e.match(T) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }

  x.Callbacks = function (e) {
    e = typeof e === 'string' ? O[e] || F(e) : x.extend({}, e);

    var n,
        r,
        i,
        o,
        a,
        s,
        l = [],
        u = !e.once && [],
        c = function c(t) {
      for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++) {
        if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
          r = !1;
          break;
        }
      }

      n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable());
    },
        p = {
      add: function add() {
        if (l) {
          var _t2 = l.length;
          (function i(t) {
            x.each(t, function (t, n) {
              var r = x.type(n);
              r === 'function' ? e.unique && p.has(n) || l.push(n) : n && n.length && r !== 'string' && i(n);
            });
          })(arguments), n ? o = l.length : r && (s = _t2, c(r));
        }

        return this;
      },
      remove: function remove() {
        return l && x.each(arguments, function (e, t) {
          var r;

          while ((r = x.inArray(t, l, r)) > -1) {
            l.splice(r, 1), n && (o >= r && o--, a >= r && a--);
          }
        }), this;
      },
      has: function has(e) {
        return e ? x.inArray(e, l) > -1 : !(!l || !l.length);
      },
      empty: function empty() {
        return l = [], o = 0, this;
      },
      disable: function disable() {
        return l = u = r = t, this;
      },
      disabled: function disabled() {
        return !l;
      },
      lock: function lock() {
        return u = t, r || p.disable(), this;
      },
      locked: function locked() {
        return !u;
      },
      fireWith: function fireWith(e, t) {
        return !l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this;
      },
      fire: function fire() {
        return p.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!i;
      }
    };

    return p;
  }, x.extend({
    Deferred: function Deferred(e) {
      var t = [['resolve', 'done', x.Callbacks('once memory'), 'resolved'], ['reject', 'fail', x.Callbacks('once memory'), 'rejected'], ['notify', 'progress', x.Callbacks('memory')]],
          n = 'pending',
          r = {
        state: function state() {
          return n;
        },
        always: function always() {
          return i.done(arguments).fail(arguments), this;
        },
        then: function then() {
          var e = arguments;
          return x.Deferred(function (n) {
            x.each(t, function (t, o) {
              var a = o[0],
                  s = x.isFunction(e[t]) && e[t];
              i[o[1]](function () {
                var e = s && s.apply(this, arguments);
                e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n["".concat(a, "With")](this === r ? n.promise() : this, s ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        },
        promise: function promise(e) {
          return e != null ? x.extend(e, r) : r;
        }
      },
          i = {};
      return r.pipe = r.then, x.each(t, function (e, o) {
        var a = o[2],
            s = o[3];
        r[o[1]] = a.add, s && a.add(function () {
          n = s;
        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
          return i["".concat(o[0], "With")](this === i ? r : this, arguments), this;
        }, i["".concat(o[0], "With")] = a.fireWith;
      }), r.promise(i), e && e.call(i, i), i;
    },
    when: function when(e) {
      var t = 0,
          n = g.call(arguments),
          r = n.length,
          i = r !== 1 || e && x.isFunction(e.promise) ? r : 0,
          o = i === 1 ? e : x.Deferred(),
          a = function a(e, t, n) {
        return function (r) {
          t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n);
        };
      },
          s,
          l,
          u;

      if (r > 1) for (s = Array(r), l = Array(r), u = Array(r); r > t; t++) {
        n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
      }
      return i || o.resolveWith(u, n), o.promise();
    }
  }), x.support = function (t) {
    var n,
        r,
        o,
        s,
        l,
        u,
        c,
        p,
        f,
        d = a.createElement('div');
    if (d.setAttribute('className', 't'), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName('*') || [], r = d.getElementsByTagName('a')[0], !r || !r.style || !n.length) return t;
    s = a.createElement('select'), u = s.appendChild(a.createElement('option')), o = d.getElementsByTagName('input')[0], r.style.cssText = 'top:1px;float:left;opacity:.5', t.getSetAttribute = d.className !== 't', t.leadingWhitespace = d.firstChild.nodeType === 3, t.tbody = !d.getElementsByTagName('tbody').length, t.htmlSerialize = !!d.getElementsByTagName('link').length, t.style = /top/.test(r.getAttribute('style')), t.hrefNormalized = r.getAttribute('href') === '/a', t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement('form').enctype, t.html5Clone = a.createElement('nav').cloneNode(!0).outerHTML !== '<:nav></:nav>', t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;

    try {
      delete d.test;
    } catch (h) {
      t.deleteExpando = !1;
    }

    o = a.createElement('input'), o.setAttribute('value', ''), t.input = o.getAttribute('value') === '', o.value = 't', o.setAttribute('type', 'radio'), t.radioValue = o.value === 't', o.setAttribute('checked', 't'), o.setAttribute('name', 't'), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent('onclick', function () {
      t.noCloneEvent = !1;
    }), d.cloneNode(!0).click());

    for (f in {
      submit: !0,
      change: !0,
      focusin: !0
    }) {
      d.setAttribute(c = "on".concat(f), 't'), t["".concat(f, "Bubbles")] = c in e || d.attributes[c].expando === !1;
    }

    d.style.backgroundClip = 'content-box', d.cloneNode(!0).style.backgroundClip = '', t.clearCloneStyle = d.style.backgroundClip === 'content-box';

    for (f in x(t)) {
      break;
    }

    return t.ownLast = f !== '0', x(function () {
      var n,
          r,
          o,
          s = 'padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;',
          l = a.getElementsByTagName('body')[0];
      l && (n = a.createElement('div'), n.style.cssText = 'border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px', l.appendChild(n).appendChild(d), d.innerHTML = '<table><tr><td></td><td>t</td></tr></table>', o = d.getElementsByTagName('td'), o[0].style.cssText = 'padding:0;margin:0;border:0;display:none', p = o[0].offsetHeight === 0, o[0].style.display = '', o[1].style.display = 'none', t.reliableHiddenOffsets = p && o[0].offsetHeight === 0, d.innerHTML = '', d.style.cssText = 'box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;', x.swap(l, l.style.zoom != null ? {
        zoom: 1
      } : {}, function () {
        t.boxSizing = d.offsetWidth === 4;
      }), e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(d, null) || {}).top !== '1%', t.boxSizingReliable = (e.getComputedStyle(d, null) || {
        width: '4px'
      }).width === '4px', r = d.appendChild(a.createElement('div')), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = '0', d.style.width = '1px', t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), (0, _typeof2["default"])(d.style.zoom) !== i && (d.innerHTML = '', d.style.cssText = "".concat(s, "width:1px;padding:1px;display:inline;zoom:1"), t.inlineBlockNeedsLayout = d.offsetWidth === 3, d.style.display = 'block', d.innerHTML = '<div></div>', d.firstChild.style.width = '5px', t.shrinkWrapBlocks = d.offsetWidth !== 3, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null);
    }), n = s = l = u = r = o = null, t;
  }({});
  var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
      P = /([A-Z])/g;

  function R(e, n, r, i) {
    if (x.acceptData(e)) {
      var _o,
          _a,
          _s2 = x.expando,
          _l = e.nodeType,
          _u = _l ? x.cache : e,
          _c = _l ? e[_s2] : e[_s2] && _s2;

      if (_c && _u[_c] && (i || _u[_c].data) || r !== t || typeof n !== 'string') return _c || (_c = _l ? e[_s2] = p.pop() || x.guid++ : _s2), _u[_c] || (_u[_c] = _l ? {} : {
        toJSON: x.noop
      }), ((0, _typeof2["default"])(n) === 'object' || typeof n === 'function') && (i ? _u[_c] = x.extend(_u[_c], n) : _u[_c].data = x.extend(_u[_c].data, n)), _a = _u[_c], i || (_a.data || (_a.data = {}), _a = _a.data), r !== t && (_a[x.camelCase(n)] = r), typeof n === 'string' ? (_o = _a[n], _o == null && (_o = _a[x.camelCase(n)])) : _o = _a, _o;
    }
  }

  function W(e, t, n) {
    if (x.acceptData(e)) {
      var _r2,
          _i,
          _o2 = e.nodeType,
          _a2 = _o2 ? x.cache : e,
          _s3 = _o2 ? e[x.expando] : x.expando;

      if (_a2[_s3]) {
        if (t && (_r2 = n ? _a2[_s3] : _a2[_s3].data)) {
          x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in _r2 ? t = [t] : (t = x.camelCase(t), t = t in _r2 ? [t] : t.split(' ')), _i = t.length;

          while (_i--) {
            delete _r2[t[_i]];
          }

          if (n ? !I(_r2) : !x.isEmptyObject(_r2)) return;
        }

        (n || (delete _a2[_s3].data, I(_a2[_s3]))) && (_o2 ? x.cleanData([e], !0) : x.support.deleteExpando || _a2 != _a2.window ? delete _a2[_s3] : _a2[_s3] = null);
      }
    }
  }

  x.extend({
    cache: {},
    noData: {
      applet: !0,
      embed: !0,
      object: 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'
    },
    hasData: function hasData(e) {
      return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e);
    },
    data: function data(e, t, n) {
      return R(e, t, n);
    },
    removeData: function removeData(e, t) {
      return W(e, t);
    },
    _data: function _data(e, t, n) {
      return R(e, t, n, !0);
    },
    _removeData: function _removeData(e, t) {
      return W(e, t, !0);
    },
    acceptData: function acceptData(e) {
      if (e.nodeType && e.nodeType !== 1 && e.nodeType !== 9) return !1;
      var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
      return !t || t !== !0 && e.getAttribute('classid') === t;
    }
  }), x.fn.extend({
    data: function data(e, n) {
      var r,
          i,
          o = null,
          a = 0,
          s = this[0];

      if (e === t) {
        if (this.length && (o = x.data(s), s.nodeType === 1 && !x._data(s, 'parsedAttrs'))) {
          for (r = s.attributes; r.length > a; a++) {
            i = r[a].name, i.indexOf('data-') === 0 && (i = x.camelCase(i.slice(5)), $(s, i, o[i]));
          }

          x._data(s, 'parsedAttrs', !0);
        }

        return o;
      }

      return (0, _typeof2["default"])(e) === 'object' ? this.each(function () {
        x.data(this, e);
      }) : arguments.length > 1 ? this.each(function () {
        x.data(this, e, n);
      }) : s ? $(s, e, x.data(s, e)) : null;
    },
    removeData: function removeData(e) {
      return this.each(function () {
        x.removeData(this, e);
      });
    }
  });

  function $(e, n, r) {
    if (r === t && e.nodeType === 1) {
      var _i2 = "data-".concat(n.replace(P, '-$1').toLowerCase());

      if (r = e.getAttribute(_i2), typeof r === 'string') {
        try {
          r = r === 'true' ? !0 : r === 'false' ? !1 : r === 'null' ? null : "".concat(+r) === r ? +r : B.test(r) ? x.parseJSON(r) : r;
        } catch (o) {}

        x.data(e, n, r);
      } else r = t;
    }

    return r;
  }

  function I(e) {
    var t;

    for (t in e) {
      if ((t !== 'data' || !x.isEmptyObject(e[t])) && t !== 'toJSON') return !1;
    }

    return !0;
  }

  x.extend({
    queue: function queue(e, n, r) {
      var i;
      return e ? (n = "".concat(n || 'fx', "queue"), i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t;
    },
    dequeue: function dequeue(e, t) {
      t = t || 'fx';

      var n = x.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = x._queueHooks(e, t),
          a = function a() {
        x.dequeue(e, t);
      };

      i === 'inprogress' && (i = n.shift(), r--), i && (t === 'fx' && n.unshift('inprogress'), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = "".concat(t, "queueHooks");
      return x._data(e, n) || x._data(e, n, {
        empty: x.Callbacks('once memory').add(function () {
          x._removeData(e, "".concat(t, "queue")), x._removeData(e, n);
        })
      });
    }
  }), x.fn.extend({
    queue: function queue(e, n) {
      var r = 2;
      return typeof e !== 'string' && (n = e, e = 'fx', r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function () {
        var t = x.queue(this, e, n);
        x._queueHooks(this, e), e === 'fx' && t[0] !== 'inprogress' && x.dequeue(this, e);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        x.dequeue(this, e);
      });
    },
    delay: function delay(e, t) {
      return e = x.fx ? x.fx.speeds[e] || e : e, t = t || 'fx', this.queue(t, function (t, n) {
        var r = setTimeout(t, e);

        n.stop = function () {
          clearTimeout(r);
        };
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || 'fx', []);
    },
    promise: function promise(e, n) {
      var r,
          i = 1,
          o = x.Deferred(),
          a = this,
          s = this.length,
          l = function l() {
        --i || o.resolveWith(a, [a]);
      };

      typeof e !== 'string' && (n = e, e = t), e = e || 'fx';

      while (s--) {
        r = x._data(a[s], "".concat(e, "queueHooks")), r && r.empty && (i++, r.empty.add(l));
      }

      return l(), o.promise(n);
    }
  });
  var z,
      X,
      U = /[\t\r\n\f]/g,
      V = /\r/g,
      Y = /^(?:input|select|textarea|button|object)$/i,
      J = /^(?:a|area)$/i,
      G = /^(?:checked|selected)$/i,
      Q = x.support.getSetAttribute,
      K = x.support.input;
  x.fn.extend({
    attr: function attr(e, t) {
      return x.access(this, x.attr, e, t, arguments.length > 1);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        x.removeAttr(this, e);
      });
    },
    prop: function prop(e, t) {
      return x.access(this, x.prop, e, t, arguments.length > 1);
    },
    removeProp: function removeProp(e) {
      return e = x.propFix[e] || e, this.each(function () {
        try {
          this[e] = t, delete this[e];
        } catch (n) {}
      });
    },
    addClass: function addClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a = 0,
          s = this.length,
          l = typeof e === 'string' && e;
      if (x.isFunction(e)) return this.each(function (t) {
        x(this).addClass(e.call(this, t, this.className));
      });
      if (l) for (t = (e || '').match(T) || []; s > a; a++) {
        if (n = this[a], r = n.nodeType === 1 && (n.className ? " ".concat(n.className, " ").replace(U, ' ') : ' ')) {
          o = 0;

          while (i = t[o++]) {
            r.indexOf(" ".concat(i, " ")) < 0 && (r += "".concat(i, " "));
          }

          n.className = x.trim(r);
        }
      }
      return this;
    },
    removeClass: function removeClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a = 0,
          s = this.length,
          l = arguments.length === 0 || typeof e === 'string' && e;
      if (x.isFunction(e)) return this.each(function (t) {
        x(this).removeClass(e.call(this, t, this.className));
      });
      if (l) for (t = (e || '').match(T) || []; s > a; a++) {
        if (n = this[a], r = n.nodeType === 1 && (n.className ? " ".concat(n.className, " ").replace(U, ' ') : '')) {
          o = 0;

          while (i = t[o++]) {
            while (r.indexOf(" ".concat(i, " ")) >= 0) {
              r = r.replace(" ".concat(i, " "), ' ');
            }
          }

          n.className = e ? x.trim(r) : '';
        }
      }
      return this;
    },
    toggleClass: function toggleClass(e, t) {
      var n = (0, _typeof2["default"])(e);
      return typeof t === 'boolean' && n === 'string' ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function (n) {
        x(this).toggleClass(e.call(this, n, this.className, t), t);
      }) : this.each(function () {
        if (n === 'string') {
          var _t3,
              _r3 = 0,
              _o3 = x(this),
              _a3 = e.match(T) || [];

          while (_t3 = _a3[_r3++]) {
            _o3.hasClass(_t3) ? _o3.removeClass(_t3) : _o3.addClass(_t3);
          }
        } else (n === i || n === 'boolean') && (this.className && x._data(this, '__className__', this.className), this.className = this.className || e === !1 ? '' : x._data(this, '__className__') || '');
      });
    },
    hasClass: function hasClass(e) {
      var t = " ".concat(e, " "),
          n = 0,
          r = this.length;

      for (; r > n; n++) {
        if (this[n].nodeType === 1 && " ".concat(this[n].className, " ").replace(U, ' ').indexOf(t) >= 0) return !0;
      }

      return !1;
    },
    val: function val(e) {
      var n,
          r,
          i,
          o = this[0];
      {
        if (arguments.length) return i = x.isFunction(e), this.each(function (n) {
          var o;
          this.nodeType === 1 && (o = i ? e.call(this, n, x(this).val()) : e, o == null ? o = '' : typeof o === 'number' ? o += '' : x.isArray(o) && (o = x.map(o, function (e) {
            return e == null ? '' : "".concat(e);
          })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && 'set' in r && r.set(this, o, 'value') !== t || (this.value = o));
        });
        if (o) return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && 'get' in r && (n = r.get(o, 'value')) !== t ? n : (n = o.value, typeof n === 'string' ? n.replace(V, '') : n == null ? '' : n);
      }
    }
  }), x.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = x.find.attr(e, 'value');
          return t != null ? t : e.text;
        }
      },
      select: {
        get: function get(e) {
          var t,
              n,
              r = e.options,
              i = e.selectedIndex,
              o = e.type === 'select-one' || i < 0,
              a = o ? null : [],
              s = o ? i + 1 : r.length,
              l = i < 0 ? s : o ? i : 0;

          for (; s > l; l++) {
            if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : n.getAttribute('disabled') !== null) || n.parentNode.disabled && x.nodeName(n.parentNode, 'optgroup'))) {
              if (t = x(n).val(), o) return t;
              a.push(t);
            }
          }

          return a;
        },
        set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = x.makeArray(t),
              a = i.length;

          while (a--) {
            r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    },
    attr: function attr(e, n, r) {
      var o,
          a,
          s = e.nodeType;
      if (e && s !== 3 && s !== 8 && s !== 2) return (0, _typeof2["default"])(e.getAttribute) === i ? x.prop(e, n, r) : (s === 1 && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && 'get' in o && (a = o.get(e, n)) !== null ? a : (a = x.find.attr(e, n), a == null ? t : a) : r !== null ? o && 'set' in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, "".concat(r)), r) : (x.removeAttr(e, n), t));
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r,
          i = 0,
          o = t && t.match(T);
      if (o && e.nodeType === 1) while (n = o[i++]) {
        r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-".concat(n))] = e[r] = !1 : x.attr(e, n, ''), e.removeAttribute(Q ? n : r);
      }
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!x.support.radioValue && t === 'radio' && x.nodeName(e, 'input')) {
            var _n5 = e.value;
            return e.setAttribute('type', t), _n5 && (e.value = _n5), t;
          }
        }
      }
    },
    propFix: {
      "for": 'htmlFor',
      "class": 'className'
    },
    prop: function prop(e, n, r) {
      var i,
          o,
          a,
          s = e.nodeType;
      if (e && s !== 3 && s !== 8 && s !== 2) return a = s !== 1 || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && 'set' in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && 'get' in o && (i = o.get(e, n)) !== null ? i : e[n];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = x.find.attr(e, 'tabindex');
          return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    }
  }), X = {
    set: function set(e, t, n) {
      return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-".concat(n))] = e[n] = !0, n;
    }
  }, x.each(x.expr.match.bool.source.match(/\w+/g), function (e, n) {
    var r = x.expr.attrHandle[n] || x.find.attr;
    x.expr.attrHandle[n] = K && Q || !G.test(n) ? function (e, n, i) {
      var o = x.expr.attrHandle[n],
          a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
      return x.expr.attrHandle[n] = o, a;
    } : function (e, n, r) {
      return r ? t : e[x.camelCase("default-".concat(n))] ? n.toLowerCase() : null;
    };
  }), K && Q || (x.attrHooks.value = {
    set: function set(e, n, r) {
      return x.nodeName(e, 'input') ? (e.defaultValue = n, t) : z && z.set(e, n, r);
    }
  }), Q || (z = {
    set: function set(e, n, r) {
      var i = e.getAttributeNode(r);
      return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += '', r === 'value' || n === e.getAttribute(r) ? n : t;
    }
  }, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function (e, n, r) {
    var i;
    return r ? t : (i = e.getAttributeNode(n)) && i.value !== '' ? i.value : null;
  }, x.valHooks.button = {
    get: function get(e, n) {
      var r = e.getAttributeNode(n);
      return r && r.specified ? r.value : t;
    },
    set: z.set
  }, x.attrHooks.contenteditable = {
    set: function set(e, t, n) {
      z.set(e, t === '' ? !1 : t, n);
    }
  }, x.each(['width', 'height'], function (e, n) {
    x.attrHooks[n] = {
      set: function set(e, r) {
        return r === '' ? (e.setAttribute(n, 'auto'), r) : t;
      }
    };
  })), x.support.hrefNormalized || x.each(['href', 'src'], function (e, t) {
    x.propHooks[t] = {
      get: function get(e) {
        return e.getAttribute(t, 4);
      }
    };
  }), x.support.style || (x.attrHooks.style = {
    get: function get(e) {
      return e.style.cssText || t;
    },
    set: function set(e, t) {
      return e.style.cssText = "".concat(t);
    }
  }), x.support.optSelected || (x.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
    }
  }), x.each(['tabIndex', 'readOnly', 'maxLength', 'cellSpacing', 'cellPadding', 'rowSpan', 'colSpan', 'useMap', 'frameBorder', 'contentEditable'], function () {
    x.propFix[this.toLowerCase()] = this;
  }), x.support.enctype || (x.propFix.enctype = 'encoding'), x.each(['radio', 'checkbox'], function () {
    x.valHooks[this] = {
      set: function set(e, n) {
        return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t;
      }
    }, x.support.checkOn || (x.valHooks[this].get = function (e) {
      return e.getAttribute('value') === null ? 'on' : e.value;
    });
  });
  var Z = /^(?:input|select|textarea)$/i,
      et = /^key/,
      tt = /^(?:mouse|contextmenu)|click/,
      nt = /^(?:focusinfocus|focusoutblur)$/,
      rt = /^([^.]*)(?:\.(.+)|)$/;

  function it() {
    return !0;
  }

  function ot() {
    return !1;
  }

  function at() {
    try {
      return a.activeElement;
    } catch (e) {}
  }

  x.event = {
    global: {},
    add: function add(e, n, r, o, a) {
      var s,
          l,
          u,
          c,
          p,
          f,
          d,
          h,
          g,
          m,
          y,
          v = x._data(e);

      if (v) {
        r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function (e) {
          return (0, _typeof2["default"])(x) === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments);
        }, f.elem = e), n = (n || '').match(T) || [''], u = n.length;

        while (u--) {
          s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || '').split('.').sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({
            type: g,
            origType: y,
            data: o,
            handler: r,
            guid: r.guid,
            selector: a,
            needsContext: a && x.expr.match.needsContext.test(a),
            namespace: m.join('.')
          }, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on".concat(g), f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0);
        }

        e = null;
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          l,
          u,
          c,
          p,
          f,
          d,
          h,
          g,
          m = x.hasData(e) && x._data(e);

      if (m && (c = m.events)) {
        t = (t || '').match(T) || [''], u = t.length;

        while (u--) {
          if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || '').split('.').sort(), d) {
            p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)".concat(h.join('\\.(?:.*\\.|)'), "(\\.|$)")), l = o = f.length;

            while (o--) {
              a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && (r !== '**' || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
            }

            l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d]);
          } else for (d in c) {
            x.event.remove(e, d + t[u], n, r, !0);
          }
        }

        x.isEmptyObject(c) && (delete m.handle, x._removeData(e, 'events'));
      }
    },
    trigger: function trigger(n, r, i, o) {
      var s,
          l,
          u,
          c,
          p,
          f,
          d,
          h = [i || a],
          g = v.call(n, 'type') ? n.type : n,
          m = v.call(n, 'namespace') ? n.namespace.split('.') : [];

      if (u = f = i = i || a, i.nodeType !== 3 && i.nodeType !== 8 && !nt.test(g + x.event.triggered) && (g.indexOf('.') >= 0 && (m = g.split('.'), g = m.shift(), m.sort()), l = g.indexOf(':') < 0 && "on".concat(g), n = n[x.expando] ? n : new x.Event(g, (0, _typeof2["default"])(n) === 'object' && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join('.'), n.namespace_re = n.namespace ? RegExp("(^|\\.)".concat(m.join('\\.(?:.*\\.|)'), "(\\.|$)")) : null, n.result = t, n.target || (n.target = i), r = r == null ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
        if (!o && !p.noBubble && !x.isWindow(i)) {
          for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) {
            h.push(u), f = u;
          }

          f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e);
        }

        d = 0;

        while ((u = h[d++]) && !n.isPropagationStopped()) {
          n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, 'events') || {})[n.type] && x._data(u, 'handle'), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
        }

        if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
          f = i[l], f && (i[l] = null), x.event.triggered = g;

          try {
            i[g]();
          } catch (y) {}

          x.event.triggered = t, f && (i[l] = f);
        }

        return n.result;
      }
    },
    dispatch: function dispatch(e) {
      e = x.event.fix(e);
      var n,
          r,
          i,
          o,
          a,
          s = [],
          l = g.call(arguments),
          u = (x._data(this, 'events') || {})[e.type] || [],
          c = x.event.special[e.type] || {};

      if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
        s = x.event.handlers.call(this, e, u), n = 0;

        while ((o = s[n++]) && !e.isPropagationStopped()) {
          e.currentTarget = o.elem, a = 0;

          while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) {
            (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
          }
        }

        return c.postDispatch && c.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function handlers(e, n) {
      var r,
          i,
          o,
          a,
          s = [],
          l = n.delegateCount,
          u = e.target;
      if (l && u.nodeType && (!e.button || e.type !== 'click')) for (; u != this; u = u.parentNode || this) {
        if (u.nodeType === 1 && (u.disabled !== !0 || e.type !== 'click')) {
          for (o = [], a = 0; l > a; a++) {
            i = n[a], r = "".concat(i.selector, " "), o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i);
          }

          o.length && s.push({
            elem: u,
            handlers: o
          });
        }
      }
      return n.length > l && s.push({
        elem: this,
        handlers: n.slice(l)
      }), s;
    },
    fix: function fix(e) {
      if (e[x.expando]) return e;
      var t,
          n,
          r,
          i = e.type,
          o = e,
          s = this.fixHooks[i];
      s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;

      while (t--) {
        n = r[t], e[n] = o[n];
      }

      return e.target || (e.target = o.srcElement || a), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e;
    },
    props: 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '),
    fixHooks: {},
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter: function filter(e, t) {
        return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e;
      }
    },
    mouseHooks: {
      props: 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
      filter: function filter(e, n) {
        var r,
            i,
            o,
            s = n.button,
            l = n.fromElement;
        return e.pageX == null && n.clientX != null && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e;
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function trigger() {
          if (this !== at() && this.focus) try {
            return this.focus(), !1;
          } catch (e) {}
        },
        delegateType: 'focusin'
      },
      blur: {
        trigger: function trigger() {
          return this === at() && this.blur ? (this.blur(), !1) : t;
        },
        delegateType: 'focusout'
      },
      click: {
        trigger: function trigger() {
          return x.nodeName(this, 'input') && this.type === 'checkbox' && this.click ? (this.click(), !1) : t;
        },
        _default: function _default(e) {
          return x.nodeName(e.target, 'a');
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          e.result !== t && (e.originalEvent.returnValue = e.result);
        }
      }
    },
    simulate: function simulate(e, t, n, r) {
      var i = x.extend(new x.Event(), n, {
        type: e,
        isSimulated: !0,
        originalEvent: {}
      });
      r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
    }
  }, x.removeEvent = a.removeEventListener ? function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1);
  } : function (e, t, n) {
    var r = "on".concat(t);
    e.detachEvent && ((0, _typeof2["default"])(e[r]) === i && (e[r] = null), e.detachEvent(r, n));
  }, x.Event = function (e, n) {
    return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n);
  }, x.Event.prototype = {
    isDefaultPrevented: ot,
    isPropagationStopped: ot,
    isImmediatePropagationStopped: ot,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0);
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      this.isImmediatePropagationStopped = it, this.stopPropagation();
    }
  }, x.each({
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  }, function (e, t) {
    x.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function handle(e) {
        var n,
            r = this,
            i = e.relatedTarget,
            o = e.handleObj;
        return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      }
    };
  }), x.support.submitBubbles || (x.event.special.submit = {
    setup: function setup() {
      return x.nodeName(this, 'form') ? !1 : (x.event.add(this, 'click._submit keypress._submit', function (e) {
        var n = e.target,
            r = x.nodeName(n, 'input') || x.nodeName(n, 'button') ? n.form : t;
        r && !x._data(r, 'submitBubbles') && (x.event.add(r, 'submit._submit', function (e) {
          e._submit_bubble = !0;
        }), x._data(r, 'submitBubbles', !0));
      }), t);
    },
    postDispatch: function postDispatch(e) {
      e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate('submit', this.parentNode, e, !0));
    },
    teardown: function teardown() {
      return x.nodeName(this, 'form') ? !1 : (x.event.remove(this, '._submit'), t);
    }
  }), x.support.changeBubbles || (x.event.special.change = {
    setup: function setup() {
      return Z.test(this.nodeName) ? ((this.type === 'checkbox' || this.type === 'radio') && (x.event.add(this, 'propertychange._change', function (e) {
        e.originalEvent.propertyName === 'checked' && (this._just_changed = !0);
      }), x.event.add(this, 'click._change', function (e) {
        this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate('change', this, e, !0);
      })), !1) : (x.event.add(this, 'beforeactivate._change', function (e) {
        var t = e.target;
        Z.test(t.nodeName) && !x._data(t, 'changeBubbles') && (x.event.add(t, 'change._change', function (e) {
          !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate('change', this.parentNode, e, !0);
        }), x._data(t, 'changeBubbles', !0));
      }), t);
    },
    handle: function handle(e) {
      var n = e.target;
      return this !== n || e.isSimulated || e.isTrigger || n.type !== 'radio' && n.type !== 'checkbox' ? e.handleObj.handler.apply(this, arguments) : t;
    },
    teardown: function teardown() {
      return x.event.remove(this, '._change'), !Z.test(this.nodeName);
    }
  }), x.support.focusinBubbles || x.each({
    focus: 'focusin',
    blur: 'focusout'
  }, function (e, t) {
    var n = 0,
        r = function r(e) {
      x.event.simulate(t, e.target, x.event.fix(e), !0);
    };

    x.event.special[t] = {
      setup: function setup() {
        n++ === 0 && a.addEventListener(e, r, !0);
      },
      teardown: function teardown() {
        --n === 0 && a.removeEventListener(e, r, !0);
      }
    };
  }), x.fn.extend({
    on: function on(e, n, r, i, o) {
      var a, s;

      if ((0, _typeof2["default"])(e) === 'object') {
        typeof n !== 'string' && (r = r || n, n = t);

        for (a in e) {
          this.on(a, n, r, e[a], o);
        }

        return this;
      }

      if (r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n === 'string' ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot;else if (!i) return this;
      return o === 1 && (s = i, i = function i(e) {
        return x().off(e), s.apply(this, arguments);
      }, i.guid = s.guid || (s.guid = x.guid++)), this.each(function () {
        x.event.add(this, e, i, r, n);
      });
    },
    one: function one(e, t, n, r) {
      return this.on(e, t, n, r, 1);
    },
    off: function off(e, n, r) {
      var i, o;
      if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? "".concat(i.origType, ".").concat(i.namespace) : i.origType, i.selector, i.handler), this;

      if ((0, _typeof2["default"])(e) === 'object') {
        for (o in e) {
          this.off(o, n, e[o]);
        }

        return this;
      }

      return (n === !1 || typeof n === 'function') && (r = n, n = t), r === !1 && (r = ot), this.each(function () {
        x.event.remove(this, e, r, n);
      });
    },
    trigger: function trigger(e, t) {
      return this.each(function () {
        x.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, n) {
      var r = this[0];
      return r ? x.event.trigger(e, n, r, !0) : t;
    }
  });
  var st = /^.[^:#\[\.,]*$/,
      lt = /^(?:parents|prev(?:Until|All))/,
      ut = x.expr.match.needsContext,
      ct = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  x.fn.extend({
    find: function find(e) {
      var t,
          n = [],
          r = this,
          i = r.length;
      if (typeof e !== 'string') return this.pushStack(x(e).filter(function () {
        for (t = 0; i > t; t++) {
          if (x.contains(r[t], this)) return !0;
        }
      }));

      for (t = 0; i > t; t++) {
        x.find(e, r[t], n);
      }

      return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? "".concat(this.selector, " ").concat(e) : e, n;
    },
    has: function has(e) {
      var t,
          n = x(e, this),
          r = n.length;
      return this.filter(function () {
        for (t = 0; r > t; t++) {
          if (x.contains(this, n[t])) return !0;
        }
      });
    },
    not: function not(e) {
      return this.pushStack(ft(this, e || [], !0));
    },
    filter: function filter(e) {
      return this.pushStack(ft(this, e || [], !1));
    },
    is: function is(e) {
      return !!ft(this, typeof e === 'string' && ut.test(e) ? x(e) : e || [], !1).length;
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = ut.test(e) || typeof e !== 'string' ? x(e, t || this.context) : 0;

      for (; i > r; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? a.index(n) > -1 : n.nodeType === 1 && x.find.matchesSelector(n, e))) {
            n = o.push(n);
            break;
          }
        }
      }

      return this.pushStack(o.length > 1 ? x.unique(o) : o);
    },
    index: function index(e) {
      return e ? typeof e === 'string' ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      var n = typeof e === 'string' ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
          r = x.merge(this.get(), n);
      return this.pushStack(x.unique(r));
    },
    addBack: function addBack(e) {
      return this.add(e == null ? this.prevObject : this.prevObject.filter(e));
    }
  });

  function pt(e, t) {
    do {
      e = e[t];
    } while (e && e.nodeType !== 1);

    return e;
  }

  x.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && t.nodeType !== 11 ? t : null;
    },
    parents: function parents(e) {
      return x.dir(e, 'parentNode');
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return x.dir(e, 'parentNode', n);
    },
    next: function next(e) {
      return pt(e, 'nextSibling');
    },
    prev: function prev(e) {
      return pt(e, 'previousSibling');
    },
    nextAll: function nextAll(e) {
      return x.dir(e, 'nextSibling');
    },
    prevAll: function prevAll(e) {
      return x.dir(e, 'previousSibling');
    },
    nextUntil: function nextUntil(e, t, n) {
      return x.dir(e, 'nextSibling', n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return x.dir(e, 'previousSibling', n);
    },
    siblings: function siblings(e) {
      return x.sibling((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return x.sibling(e.firstChild);
    },
    contents: function contents(e) {
      return x.nodeName(e, 'iframe') ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes);
    }
  }, function (e, t) {
    x.fn[e] = function (n, r) {
      var i = x.map(this, t, n);
      return e.slice(-5) !== 'Until' && (r = n), r && typeof r === 'string' && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i);
    };
  }), x.extend({
    filter: function filter(e, t, n) {
      var r = t[0];
      return n && (e = ":not(".concat(e, ")")), t.length === 1 && r.nodeType === 1 ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) {
        return e.nodeType === 1;
      }));
    },
    dir: function dir(e, n, r) {
      var i = [],
          o = e[n];

      while (o && o.nodeType !== 9 && (r === t || o.nodeType !== 1 || !x(o).is(r))) {
        o.nodeType === 1 && i.push(o), o = o[n];
      }

      return i;
    },
    sibling: function sibling(e, t) {
      var n = [];

      for (; e; e = e.nextSibling) {
        e.nodeType === 1 && e !== t && n.push(e);
      }

      return n;
    }
  });

  function ft(e, t, n) {
    if (x.isFunction(t)) return x.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    });
    if (t.nodeType) return x.grep(e, function (e) {
      return e === t !== n;
    });

    if (typeof t === 'string') {
      if (st.test(t)) return x.filter(t, e, n);
      t = x.filter(t, e);
    }

    return x.grep(e, function (e) {
      return x.inArray(e, t) >= 0 !== n;
    });
  }

  function dt(e) {
    var t = ht.split('|'),
        n = e.createDocumentFragment();
    if (n.createElement) while (t.length) {
      n.createElement(t.pop());
    }
    return n;
  }

  var ht = 'abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video',
      gt = / jQuery\d+="(?:null|\d+)"/g,
      mt = RegExp("<(?:".concat(ht, ")[\\s/>]"), 'i'),
      yt = /^\s+/,
      vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      bt = /<([\w:]+)/,
      xt = /<tbody/i,
      wt = /<|&#?\w+;/,
      Tt = /<(?:script|style|link)/i,
      Ct = /^(?:checkbox|radio)$/i,
      Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
      kt = /^$|\/(?:java|ecma)script/i,
      Et = /^true\/(.*)/,
      St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      At = {
    option: [1, "<select multiple='multiple'>", '</select>'],
    legend: [1, '<fieldset>', '</fieldset>'],
    area: [1, '<map>', '</map>'],
    param: [1, '<object>', '</object>'],
    thead: [1, '<table>', '</table>'],
    tr: [2, '<table><tbody>', '</tbody></table>'],
    col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
    td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
    _default: x.support.htmlSerialize ? [0, '', ''] : [1, 'X<div>', '</div>']
  },
      jt = dt(a),
      Dt = jt.appendChild(a.createElement('div'));
  At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({
    text: function text(e) {
      return x.access(this, function (e) {
        return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e));
      }, null, e, arguments.length);
    },
    append: function append() {
      return this.domManip(arguments, function (e) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var _t4 = Lt(this, e);

          _t4.appendChild(e);
        }
      });
    },
    prepend: function prepend() {
      return this.domManip(arguments, function (e) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var _t5 = Lt(this, e);

          _t5.insertBefore(e, _t5.firstChild);
        }
      });
    },
    before: function before() {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    remove: function remove(e, t) {
      var n,
          r = e ? x.filter(e, this) : this,
          i = 0;

      for (; (n = r[i]) != null; i++) {
        t || n.nodeType !== 1 || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, 'script')), n.parentNode.removeChild(n));
      }

      return this;
    },
    empty: function empty() {
      var e,
          t = 0;

      for (; (e = this[t]) != null; t++) {
        e.nodeType === 1 && x.cleanData(Ft(e, !1));

        while (e.firstChild) {
          e.removeChild(e.firstChild);
        }

        e.options && x.nodeName(e, 'select') && (e.options.length = 0);
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function () {
        return x.clone(this, e, t);
      });
    },
    html: function html(e) {
      return x.access(this, function (e) {
        var n = this[0] || {},
            r = 0,
            i = this.length;
        if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(gt, '') : t;

        if (!(typeof e !== 'string' || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ['', ''])[1].toLowerCase()])) {
          e = e.replace(vt, '<$1></$2>');

          try {
            for (; i > r; r++) {
              n = this[r] || {}, n.nodeType === 1 && (x.cleanData(Ft(n, !1)), n.innerHTML = e);
            }

            n = 0;
          } catch (o) {}
        }

        n && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var e = x.map(this, function (e) {
        return [e.nextSibling, e.parentNode];
      }),
          t = 0;
      return this.domManip(arguments, function (n) {
        var r = e[t++],
            i = e[t++];
        i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r));
      }, !0), t ? this : this.remove();
    },
    detach: function detach(e) {
      return this.remove(e, !0);
    },
    domManip: function domManip(e, t, n) {
      e = d.apply([], e);
      var r,
          i,
          o,
          a,
          s,
          l,
          u = 0,
          c = this.length,
          p = this,
          f = c - 1,
          h = e[0],
          g = x.isFunction(h);
      if (g || !(c <= 1 || typeof h !== 'string' || x.support.checkClone) && Nt.test(h)) return this.each(function (r) {
        var i = p.eq(r);
        g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n);
      });

      if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, l.childNodes.length === 1 && (l = r), r)) {
        for (a = x.map(Ft(l, 'script'), Ht), o = a.length; c > u; u++) {
          i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, 'script'))), t.call(this[u], i, u);
        }

        if (o) for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++) {
          i = a[u], kt.test(i.type || '') && !x._data(i, 'globalEval') && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || '').replace(St, '')));
        }
        l = r = null;
      }

      return this;
    }
  });

  function Lt(e, t) {
    return x.nodeName(e, 'table') && x.nodeName(t.nodeType === 1 ? t : t.firstChild, 'tr') ? e.getElementsByTagName('tbody')[0] || e.appendChild(e.ownerDocument.createElement('tbody')) : e;
  }

  function Ht(e) {
    return e.type = "".concat(x.find.attr(e, 'type') !== null, "/").concat(e.type), e;
  }

  function qt(e) {
    var t = Et.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute('type'), e;
  }

  function _t(e, t) {
    var n,
        r = 0;

    for (; (n = e[r]) != null; r++) {
      x._data(n, 'globalEval', !t || x._data(t[r], 'globalEval'));
    }
  }

  function Mt(e, t) {
    if (t.nodeType === 1 && x.hasData(e)) {
      var _n6,
          _r4,
          _i3,
          _o4 = x._data(e),
          _a4 = x._data(t, _o4),
          _s4 = _o4.events;

      if (_s4) {
        delete _a4.handle, _a4.events = {};

        for (_n6 in _s4) {
          for (_r4 = 0, _i3 = _s4[_n6].length; _i3 > _r4; _r4++) {
            x.event.add(t, _n6, _s4[_n6][_r4]);
          }
        }
      }

      _a4.data && (_a4.data = x.extend({}, _a4.data));
    }
  }

  function Ot(e, t) {
    var n, r, i;

    if (t.nodeType === 1) {
      if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
        i = x._data(t);

        for (r in i.events) {
          x.removeEvent(t, r, i.handle);
        }

        t.removeAttribute(x.expando);
      }

      n === 'script' && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : n === 'object' ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : n === 'input' && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : n === 'option' ? t.defaultSelected = t.selected = e.defaultSelected : (n === 'input' || n === 'textarea') && (t.defaultValue = e.defaultValue);
    }
  }

  x.each({
    appendTo: 'append',
    prependTo: 'prepend',
    insertBefore: 'before',
    insertAfter: 'after',
    replaceAll: 'replaceWith'
  }, function (e, t) {
    x.fn[e] = function (e) {
      var n,
          r = 0,
          i = [],
          o = x(e),
          a = o.length - 1;

      for (; a >= r; r++) {
        n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());
      }

      return this.pushStack(i);
    };
  });

  function Ft(e, n) {
    var r,
        o,
        a = 0,
        s = (0, _typeof2["default"])(e.getElementsByTagName) !== i ? e.getElementsByTagName(n || '*') : (0, _typeof2["default"])(e.querySelectorAll) !== i ? e.querySelectorAll(n || '*') : t;
    if (!s) for (s = [], r = e.childNodes || e; (o = r[a]) != null; a++) {
      !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
    }
    return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s;
  }

  function Bt(e) {
    Ct.test(e.type) && (e.defaultChecked = e.checked);
  }

  x.extend({
    clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          l = x.contains(e.ownerDocument, e);
      if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<".concat(e.nodeName, ">")) ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || e.nodeType !== 1 && e.nodeType !== 11 || x.isXMLDoc(e))) for (r = Ft(o), s = Ft(e), a = 0; (i = s[a]) != null; ++a) {
        r[a] && Ot(i, r[a]);
      }
      if (t) if (n) for (s = s || Ft(e), r = r || Ft(o), a = 0; (i = s[a]) != null; a++) {
        Mt(i, r[a]);
      } else Mt(e, o);
      return r = Ft(o, 'script'), r.length > 0 && _t(r, !l && Ft(e, 'script')), r = s = i = null, o;
    },
    buildFragment: function buildFragment(e, t, n, r) {
      var i,
          o,
          a,
          s,
          l,
          u,
          c,
          p = e.length,
          f = dt(t),
          d = [],
          h = 0;

      for (; p > h; h++) {
        if (o = e[h], o || o === 0) if (x.type(o) === 'object') x.merge(d, o.nodeType ? [o] : o);else if (wt.test(o)) {
          s = s || f.appendChild(t.createElement('div')), l = (bt.exec(o) || ['', ''])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, '<$1></$2>') + c[2], i = c[0];

          while (i--) {
            s = s.lastChild;
          }

          if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
            o = l !== 'table' || xt.test(o) ? c[1] !== '<table>' || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;

            while (i--) {
              x.nodeName(u = o.childNodes[i], 'tbody') && !u.childNodes.length && o.removeChild(u);
            }
          }

          x.merge(d, s.childNodes), s.textContent = '';

          while (s.firstChild) {
            s.removeChild(s.firstChild);
          }

          s = f.lastChild;
        } else d.push(t.createTextNode(o));
      }

      s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, 'input'), Bt), h = 0;

      while (o = d[h++]) {
        if ((!r || x.inArray(o, r) === -1) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), 'script'), a && _t(s), n)) {
          i = 0;

          while (o = s[i++]) {
            kt.test(o.type || '') && n.push(o);
          }
        }
      }

      return s = null, f;
    },
    cleanData: function cleanData(e, t) {
      var n,
          r,
          o,
          a,
          s = 0,
          l = x.expando,
          u = x.cache,
          c = x.support.deleteExpando,
          f = x.event.special;

      for (; (n = e[s]) != null; s++) {
        if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
          if (a.events) for (r in a.events) {
            f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
          }
          u[o] && (delete u[o], c ? delete n[l] : (0, _typeof2["default"])(n.removeAttribute) !== i ? n.removeAttribute(l) : n[l] = null, p.push(o));
        }
      }
    },
    _evalUrl: function _evalUrl(e) {
      return x.ajax({
        url: e,
        type: 'GET',
        dataType: 'script',
        async: !1,
        global: !1,
        "throws": !0
      });
    }
  }), x.fn.extend({
    wrapAll: function wrapAll(e) {
      if (x.isFunction(e)) return this.each(function (t) {
        x(this).wrapAll(e.call(this, t));
      });

      if (this[0]) {
        var _t6 = x(e, this[0].ownerDocument).eq(0).clone(!0);

        this[0].parentNode && _t6.insertBefore(this[0]), _t6.map(function () {
          var e = this;

          while (e.firstChild && e.firstChild.nodeType === 1) {
            e = e.firstChild;
          }

          return e;
        }).append(this);
      }

      return this;
    },
    wrapInner: function wrapInner(e) {
      return x.isFunction(e) ? this.each(function (t) {
        x(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = x(this),
            n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e);
      });
    },
    wrap: function wrap(e) {
      var t = x.isFunction(e);
      return this.each(function (n) {
        x(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function unwrap() {
      return this.parent().each(function () {
        x.nodeName(this, 'body') || x(this).replaceWith(this.childNodes);
      }).end();
    }
  });
  var Pt,
      Rt,
      Wt,
      $t = /alpha\([^)]*\)/i,
      It = /opacity\s*=\s*([^)]*)/,
      zt = /^(top|right|bottom|left)$/,
      Xt = /^(none|table(?!-c[ea]).+)/,
      Ut = /^margin/,
      Vt = RegExp("^(".concat(w, ")(.*)$"), 'i'),
      Yt = RegExp("^(".concat(w, ")(?!px)[a-z%]+$"), 'i'),
      Jt = RegExp("^([+-])=(".concat(w, ")"), 'i'),
      Gt = {
    BODY: 'block'
  },
      Qt = {
    position: 'absolute',
    visibility: 'hidden',
    display: 'block'
  },
      Kt = {
    letterSpacing: 0,
    fontWeight: 400
  },
      Zt = ['Top', 'Right', 'Bottom', 'Left'],
      en = ['Webkit', 'O', 'Moz', 'ms'];

  function tn(e, t) {
    if (t in e) return t;
    var n = t.charAt(0).toUpperCase() + t.slice(1),
        r = t,
        i = en.length;

    while (i--) {
      if (t = en[i] + n, t in e) return t;
    }

    return r;
  }

  function nn(e, t) {
    return e = t || e, x.css(e, 'display') === 'none' || !x.contains(e.ownerDocument, e);
  }

  function rn(e, t) {
    var n,
        r,
        i,
        o = [],
        a = 0,
        s = e.length;

    for (; s > a; a++) {
      r = e[a], r.style && (o[a] = x._data(r, 'olddisplay'), n = r.style.display, t ? (o[a] || n !== 'none' || (r.style.display = ''), r.style.display === '' && nn(r) && (o[a] = x._data(r, 'olddisplay', ln(r.nodeName)))) : o[a] || (i = nn(r), (n && n !== 'none' || !i) && x._data(r, 'olddisplay', i ? n : x.css(r, 'display'))));
    }

    for (a = 0; s > a; a++) {
      r = e[a], r.style && (t && r.style.display !== 'none' && r.style.display !== '' || (r.style.display = t ? o[a] || '' : 'none'));
    }

    return e;
  }

  x.fn.extend({
    css: function css(e, n) {
      return x.access(this, function (e, n, r) {
        var i,
            o,
            a = {},
            s = 0;

        if (x.isArray(n)) {
          for (o = Rt(e), i = n.length; i > s; s++) {
            a[n[s]] = x.css(e, n[s], !1, o);
          }

          return a;
        }

        return r !== t ? x.style(e, n, r) : x.css(e, n);
      }, e, n, arguments.length > 1);
    },
    show: function show() {
      return rn(this, !0);
    },
    hide: function hide() {
      return rn(this);
    },
    toggle: function toggle(e) {
      return typeof e === 'boolean' ? e ? this.show() : this.hide() : this.each(function () {
        nn(this) ? x(this).show() : x(this).hide();
      });
    }
  }), x.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var _n7 = Wt(e, 'opacity');

            return _n7 === '' ? '1' : _n7;
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": x.support.cssFloat ? 'cssFloat' : 'styleFloat'
    },
    style: function style(e, n, r, i) {
      if (e && e.nodeType !== 3 && e.nodeType !== 8 && e.style) {
        var _o5,
            _a5,
            _s5,
            _l2 = x.camelCase(n),
            _u2 = e.style;

        if (n = x.cssProps[_l2] || (x.cssProps[_l2] = tn(_u2, _l2)), _s5 = x.cssHooks[n] || x.cssHooks[_l2], r === t) return _s5 && 'get' in _s5 && (_o5 = _s5.get(e, !1, i)) !== t ? _o5 : _u2[n];
        if (_a5 = (0, _typeof2["default"])(r), _a5 === 'string' && (_o5 = Jt.exec(r)) && (r = (_o5[1] + 1) * _o5[2] + parseFloat(x.css(e, n)), _a5 = 'number'), !(r == null || _a5 === 'number' && isNaN(r) || (_a5 !== 'number' || x.cssNumber[_l2] || (r += 'px'), x.support.clearCloneStyle || r !== '' || n.indexOf('background') !== 0 || (_u2[n] = 'inherit'), _s5 && 'set' in _s5 && (r = _s5.set(e, r, i)) === t))) try {
          _u2[n] = r;
        } catch (c) {}
      }
    },
    css: function css(e, n, r, i) {
      var o,
          a,
          s,
          l = x.camelCase(n);
      return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && 'get' in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), a === 'normal' && n in Kt && (a = Kt[n]), r === '' || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a;
    }
  }), e.getComputedStyle ? (Rt = function Rt(t) {
    return e.getComputedStyle(t, null);
  }, Wt = function Wt(e, n, r) {
    var i,
        o,
        a,
        s = r || Rt(e),
        l = s ? s.getPropertyValue(n) || s[n] : t,
        u = e.style;
    return s && (l !== '' || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l;
  }) : a.documentElement.currentStyle && (Rt = function Rt(e) {
    return e.currentStyle;
  }, Wt = function Wt(e, n, r) {
    var i,
        o,
        a,
        s = r || Rt(e),
        l = s ? s[n] : t,
        u = e.style;
    return l == null && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = n === 'fontSize' ? '1em' : l, l = "".concat(u.pixelLeft, "px"), u.left = i, a && (o.left = a)), l === '' ? 'auto' : l;
  });

  function on(e, t, n) {
    var r = Vt.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || 'px') : t;
  }

  function an(e, t, n, r, i) {
    var o = n === (r ? 'border' : 'content') ? 4 : t === 'width' ? 1 : 0,
        a = 0;

    for (; o < 4; o += 2) {
      n === 'margin' && (a += x.css(e, n + Zt[o], !0, i)), r ? (n === 'content' && (a -= x.css(e, "padding".concat(Zt[o]), !0, i)), n !== 'margin' && (a -= x.css(e, "border".concat(Zt[o], "Width"), !0, i))) : (a += x.css(e, "padding".concat(Zt[o]), !0, i), n !== 'padding' && (a += x.css(e, "border".concat(Zt[o], "Width"), !0, i)));
    }

    return a;
  }

  function sn(e, t, n) {
    var r = !0,
        i = t === 'width' ? e.offsetWidth : e.offsetHeight,
        o = Rt(e),
        a = x.support.boxSizing && x.css(e, 'boxSizing', !1, o) === 'border-box';

    if (i <= 0 || i == null) {
      if (i = Wt(e, t, o), (i < 0 || i == null) && (i = e.style[t]), Yt.test(i)) return i;
      r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0;
    }

    return "".concat(i + an(e, t, n || (a ? 'border' : 'content'), r, o), "px");
  }

  function ln(e) {
    var t = a,
        n = Gt[e];
    return n || (n = un(e, t), n !== 'none' && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css('cssText', 'display:block !important')).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write('<!doctype html><html><body>'), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n;
  }

  function un(e, t) {
    var n = x(t.createElement(e)).appendTo(t.body),
        r = x.css(n[0], 'display');
    return n.remove(), r;
  }

  x.each(['height', 'width'], function (e, n) {
    x.cssHooks[n] = {
      get: function get(e, r, i) {
        return r ? e.offsetWidth === 0 && Xt.test(x.css(e, 'display')) ? x.swap(e, Qt, function () {
          return sn(e, n, i);
        }) : sn(e, n, i) : t;
      },
      set: function set(e, t, r) {
        var i = r && Rt(e);
        return on(e, t, r ? an(e, n, r, x.support.boxSizing && x.css(e, 'boxSizing', !1, i) === 'border-box', i) : 0);
      }
    };
  }), x.support.opacity || (x.cssHooks.opacity = {
    get: function get(e, t) {
      return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || '') ? "".concat(0.01 * parseFloat(RegExp.$1)) : t ? '1' : '';
    },
    set: function set(e, t) {
      var n = e.style,
          r = e.currentStyle,
          i = x.isNumeric(t) ? "alpha(opacity=".concat(100 * t, ")") : '',
          o = r && r.filter || n.filter || '';
      n.zoom = 1, (t >= 1 || t === '') && x.trim(o.replace($t, '')) === '' && n.removeAttribute && (n.removeAttribute('filter'), t === '' || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : "".concat(o, " ").concat(i));
    }
  }), x(function () {
    x.support.reliableMarginRight || (x.cssHooks.marginRight = {
      get: function get(e, n) {
        return n ? x.swap(e, {
          display: 'inline-block'
        }, Wt, [e, 'marginRight']) : t;
      }
    }), !x.support.pixelPosition && x.fn.position && x.each(['top', 'left'], function (e, n) {
      x.cssHooks[n] = {
        get: function get(e, r) {
          return r ? (r = Wt(e, n), Yt.test(r) ? "".concat(x(e).position()[n], "px") : r) : t;
        }
      };
    });
  }), x.expr && x.expr.filters && (x.expr.filters.hidden = function (e) {
    return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !x.support.reliableHiddenOffsets && (e.style && e.style.display || x.css(e, 'display')) === 'none';
  }, x.expr.filters.visible = function (e) {
    return !x.expr.filters.hidden(e);
  }), x.each({
    margin: '',
    padding: '',
    border: 'Width'
  }, function (e, t) {
    x.cssHooks[e + t] = {
      expand: function expand(n) {
        var r = 0,
            i = {},
            o = typeof n === 'string' ? n.split(' ') : [n];

        for (; r < 4; r++) {
          i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
        }

        return i;
      }
    }, Ut.test(e) || (x.cssHooks[e + t].set = on);
  });
  var cn = /%20/g,
      pn = /\[\]$/,
      fn = /\r?\n/g,
      dn = /^(?:submit|button|image|reset|file)$/i,
      hn = /^(?:input|select|textarea|keygen)/i;
  x.fn.extend({
    serialize: function serialize() {
      return x.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = x.prop(this, 'elements');
        return e ? x.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !x(this).is(':disabled') && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e));
      }).map(function (e, t) {
        var n = x(this).val();
        return n == null ? null : x.isArray(n) ? x.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(fn, '\r\n')
          };
        }) : {
          name: t.name,
          value: n.replace(fn, '\r\n')
        };
      }).get();
    }
  }), x.param = function (e, n) {
    var r,
        i = [],
        o = function o(e, t) {
      t = x.isFunction(t) ? t() : t == null ? '' : t, i[i.length] = "".concat(encodeURIComponent(e), "=").concat(encodeURIComponent(t));
    };

    if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function () {
      o(this.name, this.value);
    });else for (r in e) {
      gn(r, e[r], n, o);
    }
    return i.join('&').replace(cn, '+');
  };

  function gn(e, t, n, r) {
    var i;
    if (x.isArray(t)) x.each(t, function (t, i) {
      n || pn.test(e) ? r(e, i) : gn("".concat(e, "[").concat((0, _typeof2["default"])(i) === 'object' ? t : '', "]"), i, n, r);
    });else if (n || x.type(t) !== 'object') r(e, t);else for (i in t) {
      gn("".concat(e, "[").concat(i, "]"), t[i], n, r);
    }
  }

  x.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), function (e, t) {
    x.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), x.fn.extend({
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    },
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return arguments.length === 1 ? this.off(e, '**') : this.off(t, e || '**', n);
    }
  });
  var mn,
      yn,
      vn = x.now(),
      bn = /\?/,
      xn = /#.*$/,
      wn = /([?&])_=[^&]*/,
      Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Nn = /^(?:GET|HEAD)$/,
      kn = /^\/\//,
      En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
      Sn = x.fn.load,
      An = {},
      jn = {},
      Dn = '*/'.concat('*');

  try {
    yn = o.href;
  } catch (Ln) {
    yn = a.createElement('a'), yn.href = '', yn = yn.href;
  }

  mn = En.exec(yn.toLowerCase()) || [];

  function Hn(e) {
    return function (t, n) {
      typeof t !== 'string' && (n = t, t = '*');
      var r,
          i = 0,
          o = t.toLowerCase().match(T) || [];
      if (x.isFunction(n)) while (r = o[i++]) {
        r[0] === '+' ? (r = r.slice(1) || '*', (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
      }
    };
  }

  function qn(e, n, r, i) {
    var o = {},
        a = e === jn;

    function s(l) {
      var u;
      return o[l] = !0, x.each(e[l] || [], function (e, l) {
        var c = l(n, r, i);
        return typeof c !== 'string' || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1);
      }), u;
    }

    return s(n.dataTypes[0]) || !o['*'] && s('*');
  }

  function _n(e, n) {
    var r,
        i,
        o = x.ajaxSettings.flatOptions || {};

    for (i in n) {
      n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
    }

    return r && x.extend(!0, e, r), e;
  }

  x.fn.load = function (e, n, r) {
    if (typeof e !== 'string' && Sn) return Sn.apply(this, arguments);
    var i,
        o,
        a,
        s = this,
        l = e.indexOf(' ');
    return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && (0, _typeof2["default"])(n) === 'object' && (a = 'POST'), s.length > 0 && x.ajax({
      url: e,
      type: a,
      dataType: 'html',
      data: n
    }).done(function (e) {
      o = arguments, s.html(i ? x('<div>').append(x.parseHTML(e)).find(i) : e);
    }).complete(r && function (e, t) {
      s.each(r, o || [e.responseText, t, e]);
    }), this;
  }, x.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function (e, t) {
    x.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), x.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: yn,
      type: 'GET',
      isLocal: Cn.test(mn[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: {
        '*': Dn,
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript'
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: 'responseXML',
        text: 'responseText',
        json: 'responseJSON'
      },
      converters: {
        '* text': String,
        'text html': !0,
        'text json': x.parseJSON,
        'text xml': x.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e);
    },
    ajaxPrefilter: Hn(An),
    ajaxTransport: Hn(jn),
    ajax: function ajax(e, n) {
      (0, _typeof2["default"])(e) === 'object' && (n = e, e = t), n = n || {};
      var r,
          i,
          o,
          a,
          s,
          l,
          u,
          c,
          p = x.ajaxSetup({}, n),
          f = p.context || p,
          d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
          h = x.Deferred(),
          g = x.Callbacks('once memory'),
          m = p.statusCode || {},
          y = {},
          v = {},
          b = 0,
          w = 'canceled',
          C = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (b === 2) {
            if (!c) {
              c = {};

              while (t = Tn.exec(a)) {
                c[t[1].toLowerCase()] = t[2];
              }
            }

            t = c[e.toLowerCase()];
          }

          return t == null ? null : t;
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return b === 2 ? a : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          var n = e.toLowerCase();
          return b || (e = v[n] = v[n] || e, y[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return b || (p.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (b < 2) for (t in e) {
            m[t] = [m[t], e[t]];
          } else C.always(e[C.status]);
          return this;
        },
        abort: function abort(e) {
          var t = e || w;
          return u && u.abort(t), k(0, t), this;
        }
      };
      if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = "".concat(e || p.url || yn).replace(xn, '').replace(kn, "".concat(mn[1], "//")), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || '*').toLowerCase().match(T) || [''], p.crossDomain == null && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || (r[1] === 'http:' ? '80' : '443')) === (mn[3] || (mn[1] === 'http:' ? '80' : '443')))), p.data && p.processData && typeof p.data !== 'string' && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), b === 2) return C;
      l = p.global, l && x.active++ === 0 && x.event.trigger('ajaxStart'), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? '&' : '?') + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=".concat(vn++)) : "".concat(o + (bn.test(o) ? '&' : '?'), "_=").concat(vn++))), p.ifModified && (x.lastModified[o] && C.setRequestHeader('If-Modified-Since', x.lastModified[o]), x.etag[o] && C.setRequestHeader('If-None-Match', x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader('Content-Type', p.contentType), C.setRequestHeader('Accept', p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + (p.dataTypes[0] !== '*' ? ", ".concat(Dn, "; q=0.01") : '') : p.accepts['*']);

      for (i in p.headers) {
        C.setRequestHeader(i, p.headers[i]);
      }

      if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || b === 2)) return C.abort();
      w = 'abort';

      for (i in {
        success: 1,
        error: 1,
        complete: 1
      }) {
        C[i](p[i]);
      }

      if (u = qn(jn, p, n, C)) {
        C.readyState = 1, l && d.trigger('ajaxSend', [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function () {
          C.abort('timeout');
        }, p.timeout));

        try {
          b = 1, u.send(y, k);
        } catch (N) {
          if (!(b < 2)) throw N;
          k(-1, N);
        }
      } else k(-1, 'No Transport');

      function k(e, n, r, i) {
        var c,
            y,
            v,
            w,
            T,
            N = n;
        b !== 2 && (b = 2, s && clearTimeout(s), u = t, a = i || '', C.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || e === 304, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader('Last-Modified'), T && (x.lastModified[o] = T), T = C.getResponseHeader('etag'), T && (x.etag[o] = T)), e === 204 || p.type === 'HEAD' ? N = 'nocontent' : e === 304 ? N = 'notmodified' : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = 'error', e < 0 && (e = 0))), C.status = e, C.statusText = "".concat(n || N), c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? 'ajaxSuccess' : 'ajaxError', [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger('ajaxComplete', [C, p]), --x.active || x.event.trigger('ajaxStop')));
      }

      return C;
    },
    getJSON: function getJSON(e, t, n) {
      return x.get(e, t, n, 'json');
    },
    getScript: function getScript(e, n) {
      return x.get(e, t, n, 'script');
    }
  }), x.each(['get', 'post'], function (e, n) {
    x[n] = function (e, r, i, o) {
      return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({
        url: e,
        type: n,
        dataType: o,
        data: r,
        success: i
      });
    };
  });

  function Mn(e, n, r) {
    var i,
        o,
        a,
        s,
        l = e.contents,
        u = e.dataTypes;

    while (u[0] === '*') {
      u.shift(), o === t && (o = e.mimeType || n.getResponseHeader('Content-Type'));
    }

    if (o) for (s in l) {
      if (l[s] && l[s].test(o)) {
        u.unshift(s);
        break;
      }
    }
    if (u[0] in r) a = u[0];else {
      for (s in r) {
        if (!u[0] || e.converters["".concat(s, " ").concat(u[0])]) {
          a = s;
          break;
        }

        i || (i = s);
      }

      a = a || i;
    }
    return a ? (a !== u[0] && u.unshift(a), r[a]) : t;
  }

  function On(e, t, n, r) {
    var i,
        o,
        a,
        s,
        l,
        u = {},
        c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) {
      u[a.toLowerCase()] = e.converters[a];
    }
    o = c.shift();

    while (o) {
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if (o === '*') o = l;else if (l !== '*' && l !== o) {
        if (a = u["".concat(l, " ").concat(o)] || u["* ".concat(o)], !a) for (i in u) {
          if (s = i.split(' '), s[1] === o && (a = u["".concat(l, " ").concat(s[0])] || u["* ".concat(s[0])])) {
            a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
            break;
          }
        }
        if (a !== !0) if (a && e["throws"]) t = a(t);else try {
          t = a(t);
        } catch (p) {
          return {
            state: 'parsererror',
            error: a ? p : "No conversion from ".concat(l, " to ").concat(o)
          };
        }
      }
    }

    return {
      state: 'success',
      data: t
    };
  }

  x.ajaxSetup({
    accepts: {
      script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      'text script': function textScript(e) {
        return x.globalEval(e), e;
      }
    }
  }), x.ajaxPrefilter('script', function (e) {
    e.cache === t && (e.cache = !1), e.crossDomain && (e.type = 'GET', e.global = !1);
  }), x.ajaxTransport('script', function (e) {
    if (e.crossDomain) {
      var _n8,
          _r5 = a.head || x('head')[0] || a.documentElement;

      return {
        send: function send(t, i) {
          _n8 = a.createElement('script'), _n8.async = !0, e.scriptCharset && (_n8.charset = e.scriptCharset), _n8.src = e.url, _n8.onload = _n8.onreadystatechange = function (e, t) {
            (t || !_n8.readyState || /loaded|complete/.test(_n8.readyState)) && (_n8.onload = _n8.onreadystatechange = null, _n8.parentNode && _n8.parentNode.removeChild(_n8), _n8 = null, t || i(200, 'success'));
          }, _r5.insertBefore(_n8, _r5.firstChild);
        },
        abort: function abort() {
          _n8 && _n8.onload(t, !0);
        }
      };
    }
  });
  var Fn = [],
      Bn = /(=)\?(?=&|$)|\?\?/;
  x.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function jsonpCallback() {
      var e = Fn.pop() || "".concat(x.expando, "_").concat(vn++);
      return this[e] = !0, e;
    }
  }), x.ajaxPrefilter('json jsonp', function (n, r, i) {
    var o,
        a,
        s,
        l = n.jsonp !== !1 && (Bn.test(n.url) ? 'url' : typeof n.data === 'string' && !(n.contentType || '').indexOf('application/x-www-form-urlencoded') && Bn.test(n.data) && 'data');
    return l || n.dataTypes[0] === 'jsonp' ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1".concat(o)) : n.jsonp !== !1 && (n.url += "".concat((bn.test(n.url) ? '&' : '?') + n.jsonp, "=").concat(o)), n.converters['script json'] = function () {
      return s || x.error("".concat(o, " was not called")), s[0];
    }, n.dataTypes[0] = 'json', a = e[o], e[o] = function () {
      s = arguments;
    }, i.always(function () {
      e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t;
    }), 'script') : t;
  });

  var Pn,
      Rn,
      Wn = 0,
      $n = e.ActiveXObject && function () {
    var e;

    for (e in Pn) {
      Pn[e](t, !0);
    }
  };

  function In() {
    try {
      return new e.XMLHttpRequest();
    } catch (t) {}
  }

  function zn() {
    try {
      return new e.ActiveXObject('Microsoft.XMLHTTP');
    } catch (t) {}
  }

  x.ajaxSettings.xhr = e.ActiveXObject ? function () {
    return !this.isLocal && In() || zn();
  } : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && 'withCredentials' in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function (n) {
    if (!n.crossDomain || x.support.cors) {
      var _r7;

      return {
        send: function send(i, o) {
          var a,
              s,
              l = n.xhr();
          if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) {
            l[s] = n.xhrFields[s];
          }
          n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i['X-Requested-With'] || (i['X-Requested-With'] = 'XMLHttpRequest');

          try {
            for (s in i) {
              l.setRequestHeader(s, i[s]);
            }
          } catch (u) {}

          l.send(n.hasContent && n.data || null), _r7 = function _r6(e, i) {
            var s, u, c, p;

            try {
              if (_r7 && (i || l.readyState === 4)) if (_r7 = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i) l.readyState !== 4 && l.abort();else {
                p = {}, s = l.status, u = l.getAllResponseHeaders(), typeof l.responseText === 'string' && (p.text = l.responseText);

                try {
                  c = l.statusText;
                } catch (f) {
                  c = '';
                }

                s || !n.isLocal || n.crossDomain ? s === 1223 && (s = 204) : s = p.text ? 200 : 404;
              }
            } catch (d) {
              i || o(-1, d);
            }

            p && o(s, c, p, u);
          }, n.async ? l.readyState === 4 ? setTimeout(_r7) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = _r7), l.onreadystatechange = _r7) : _r7();
        },
        abort: function abort() {
          _r7 && _r7(t, !0);
        }
      };
    }
  });
  var Xn,
      Un,
      Vn = /^(?:toggle|show|hide)$/,
      Yn = RegExp("^(?:([+-])=|)(".concat(w, ")([a-z%]*)$"), 'i'),
      Jn = /queueHooks$/,
      Gn = [nr],
      Qn = {
    '*': [function (e, t) {
      var n = this.createTween(e, t),
          r = n.cur(),
          i = Yn.exec(t),
          o = i && i[3] || (x.cssNumber[e] ? '' : 'px'),
          a = (x.cssNumber[e] || o !== 'px' && +r) && Yn.exec(x.css(n.elem, e)),
          s = 1,
          l = 20;

      if (a && a[3] !== o) {
        o = o || a[3], i = i || [], a = +r || 1;

        do {
          s = s || '.5', a /= s, x.style(n.elem, e, a + o);
        } while (s !== (s = n.cur() / r) && s !== 1 && --l);
      }

      return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n;
    }]
  };

  function Kn() {
    return setTimeout(function () {
      Xn = t;
    }), Xn = x.now();
  }

  function Zn(e, t, n) {
    var r,
        i = (Qn[t] || []).concat(Qn['*']),
        o = 0,
        a = i.length;

    for (; a > o; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }

  function er(e, t, n) {
    var r,
        i,
        o = 0,
        a = Gn.length,
        s = x.Deferred().always(function () {
      delete l.elem;
    }),
        l = function l() {
      if (i) return !1;
      var t = Xn || Kn(),
          n = Math.max(0, u.startTime + u.duration - t),
          r = n / u.duration || 0,
          o = 1 - r,
          a = 0,
          l = u.tweens.length;

      for (; l > a; a++) {
        u.tweens[a].run(o);
      }

      return s.notifyWith(e, [u, o, n]), o < 1 && l ? n : (s.resolveWith(e, [u]), !1);
    },
        u = s.promise({
      elem: e,
      props: x.extend({}, t),
      opts: x.extend(!0, {
        specialEasing: {}
      }, n),
      originalProperties: t,
      originalOptions: n,
      startTime: Xn || Kn(),
      duration: n.duration,
      tweens: [],
      createTween: function createTween(t, n) {
        var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
        return u.tweens.push(r), r;
      },
      stop: function stop(t) {
        var n = 0,
            r = t ? u.tweens.length : 0;
        if (i) return this;

        for (i = !0; r > n; n++) {
          u.tweens[n].run(1);
        }

        return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this;
      }
    }),
        c = u.props;

    for (tr(c, u.opts.specialEasing); a > o; o++) {
      if (r = Gn[o].call(u, e, c, u.opts)) return r;
    }

    return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {
      elem: e,
      anim: u,
      queue: u.opts.queue
    })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
  }

  function tr(e, t) {
    var n, r, i, o, a;

    for (n in e) {
      if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && 'expand' in a) {
        o = a.expand(o), delete e[r];

        for (n in o) {
          n in e || (e[n] = o[n], t[n] = i);
        }
      } else t[r] = i;
    }
  }

  x.Animation = x.extend(er, {
    tweener: function tweener(e, t) {
      x.isFunction(e) ? (t = e, e = ['*']) : e = e.split(' ');
      var n,
          r = 0,
          i = e.length;

      for (; i > r; r++) {
        n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t);
      }
    },
    prefilter: function prefilter(e, t) {
      t ? Gn.unshift(e) : Gn.push(e);
    }
  });

  function nr(e, t, n) {
    var r,
        i,
        o,
        a,
        s,
        l,
        u = this,
        c = {},
        p = e.style,
        f = e.nodeType && nn(e),
        d = x._data(e, 'fxshow');

    n.queue || (s = x._queueHooks(e, 'fx'), s.unqueued == null && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
      s.unqueued || l();
    }), s.unqueued++, u.always(function () {
      u.always(function () {
        s.unqueued--, x.queue(e, 'fx').length || s.empty.fire();
      });
    })), e.nodeType === 1 && ('height' in t || 'width' in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], x.css(e, 'display') === 'inline' && x.css(e, 'float') === 'none' && (x.support.inlineBlockNeedsLayout && ln(e.nodeName) !== 'inline' ? p.zoom = 1 : p.display = 'inline-block')), n.overflow && (p.overflow = 'hidden', x.support.shrinkWrapBlocks || u.always(function () {
      p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
    }));

    for (r in t) {
      if (i = t[r], Vn.exec(i)) {
        if (delete t[r], o = o || i === 'toggle', i === (f ? 'hide' : 'show')) continue;
        c[r] = d && d[r] || x.style(e, r);
      }
    }

    if (!x.isEmptyObject(c)) {
      d ? 'hidden' in d && (f = d.hidden) : d = x._data(e, 'fxshow', {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function () {
        x(e).hide();
      }), u.done(function () {
        var t;

        x._removeData(e, 'fxshow');

        for (t in c) {
          x.style(e, t, c[t]);
        }
      });

      for (r in c) {
        a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = r === 'width' || r === 'height' ? 1 : 0));
      }
    }
  }

  function rr(e, t, n, r, i) {
    return new rr.prototype.init(e, t, n, r, i);
  }

  x.Tween = rr, rr.prototype = {
    constructor: rr,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || 'swing', this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? '' : 'px');
    },
    cur: function cur() {
      var e = rr.propHooks[this.prop];
      return e && e.get ? e.get(this) : rr.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = rr.propHooks[this.prop];
      return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this;
    }
  }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return e.elem[e.prop] == null || e.elem.style && e.elem.style[e.prop] != null ? (t = x.css(e.elem, e.prop, ''), t && t !== 'auto' ? t : 0) : e.elem[e.prop];
      },
      set: function set(e) {
        x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (e.elem.style[x.cssProps[e.prop]] != null || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
      }
    }
  }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, x.each(['toggle', 'show', 'hide'], function (e, t) {
    var n = x.fn[t];

    x.fn[t] = function (e, r, i) {
      return e == null || typeof e === 'boolean' ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i);
    };
  }), x.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(nn).css('opacity', 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(e, t, n, r) {
      var i = x.isEmptyObject(e),
          o = x.speed(t, n, r),
          a = function a() {
        var t = er(this, x.extend({}, e), o);
        (i || x._data(this, 'finish')) && t.stop(!0);
      };

      return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(e, n, r) {
      var i = function i(e) {
        var t = e.stop;
        delete e.stop, t(r);
      };

      return typeof e !== 'string' && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || 'fx', []), this.each(function () {
        var t = !0,
            n = e != null && "".concat(e, "queueHooks"),
            o = x.timers,
            a = x._data(this);

        if (n) a[n] && a[n].stop && i(a[n]);else for (n in a) {
          a[n] && a[n].stop && Jn.test(n) && i(a[n]);
        }

        for (n = o.length; n--;) {
          o[n].elem !== this || e != null && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
        }

        (t || !r) && x.dequeue(this, e);
      });
    },
    finish: function finish(e) {
      return e !== !1 && (e = e || 'fx'), this.each(function () {
        var t,
            n = x._data(this),
            r = n["".concat(e, "queue")],
            i = n["".concat(e, "queueHooks")],
            o = x.timers,
            a = r ? r.length : 0;

        for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        }

        for (t = 0; a > t; t++) {
          r[t] && r[t].finish && r[t].finish.call(this);
        }

        delete n.finish;
      });
    }
  });

  function ir(e, t) {
    var n,
        r = {
      height: e
    },
        i = 0;

    for (t = t ? 1 : 0; i < 4; i += 2 - t) {
      n = Zt[i], r["margin".concat(n)] = r["padding".concat(n)] = e;
    }

    return t && (r.opacity = r.width = e), r;
  }

  x.each({
    slideDown: ir('show'),
    slideUp: ir('hide'),
    slideToggle: ir('toggle'),
    fadeIn: {
      opacity: 'show'
    },
    fadeOut: {
      opacity: 'hide'
    },
    fadeToggle: {
      opacity: 'toggle'
    }
  }, function (e, t) {
    x.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), x.speed = function (e, t, n) {
    var r = e && (0, _typeof2["default"])(e) === 'object' ? x.extend({}, e) : {
      complete: n || !n && t || x.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !x.isFunction(t) && t
    };
    return r.duration = x.fx.off ? 0 : typeof r.duration === 'number' ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (r.queue == null || r.queue === !0) && (r.queue = 'fx'), r.old = r.complete, r.complete = function () {
      x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue);
    }, r;
  }, x.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return 0.5 - Math.cos(e * Math.PI) / 2;
    }
  }, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function () {
    var e,
        n = x.timers,
        r = 0;

    for (Xn = x.now(); n.length > r; r++) {
      e = n[r], e() || n[r] !== e || n.splice(r--, 1);
    }

    n.length || x.fx.stop(), Xn = t;
  }, x.fx.timer = function (e) {
    e() && x.timers.push(e) && x.fx.start();
  }, x.fx.interval = 13, x.fx.start = function () {
    Un || (Un = setInterval(x.fx.tick, x.fx.interval));
  }, x.fx.stop = function () {
    clearInterval(Un), Un = null;
  }, x.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function (e) {
    return x.grep(x.timers, function (t) {
      return e === t.elem;
    }).length;
  }), x.fn.offset = function (e) {
    if (arguments.length) return e === t ? this : this.each(function (t) {
      x.offset.setOffset(this, e, t);
    });
    var n,
        r,
        o = {
      top: 0,
      left: 0
    },
        a = this[0],
        s = a && a.ownerDocument;
    if (s) return n = s.documentElement, x.contains(n, a) ? ((0, _typeof2["default"])(a.getBoundingClientRect) !== i && (o = a.getBoundingClientRect()), r = or(s), {
      top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
      left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
    }) : o;
  }, x.offset = {
    setOffset: function setOffset(e, t, n) {
      var r = x.css(e, 'position');
      r === 'static' && (e.style.position = 'relative');
      var i = x(e),
          o = i.offset(),
          a = x.css(e, 'top'),
          s = x.css(e, 'left'),
          l = (r === 'absolute' || r === 'fixed') && x.inArray('auto', [a, s]) > -1,
          u = {},
          c = {},
          p,
          f;
      l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), t.top != null && (u.top = t.top - o.top + p), t.left != null && (u.left = t.left - o.left + f), 'using' in t ? t.using.call(e, u) : i.css(u);
    }
  }, x.fn.extend({
    position: function position() {
      if (this[0]) {
        var _e,
            _t7,
            _n9 = {
          top: 0,
          left: 0
        },
            _r8 = this[0];

        return x.css(_r8, 'position') === 'fixed' ? _t7 = _r8.getBoundingClientRect() : (_e = this.offsetParent(), _t7 = this.offset(), x.nodeName(_e[0], 'html') || (_n9 = _e.offset()), _n9.top += x.css(_e[0], 'borderTopWidth', !0), _n9.left += x.css(_e[0], 'borderLeftWidth', !0)), {
          top: _t7.top - _n9.top - x.css(_r8, 'marginTop', !0),
          left: _t7.left - _n9.left - x.css(_r8, 'marginLeft', !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent || s;

        while (e && !x.nodeName(e, 'html') && x.css(e, 'position') === 'static') {
          e = e.offsetParent;
        }

        return e || s;
      });
    }
  }), x.each({
    scrollLeft: 'pageXOffset',
    scrollTop: 'pageYOffset'
  }, function (e, n) {
    var r = /Y/.test(n);

    x.fn[e] = function (i) {
      return x.access(this, function (e, i, o) {
        var a = or(e);
        return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t);
      }, e, i, arguments.length, null);
    };
  });

  function or(e) {
    return x.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1;
  }

  x.each({
    Height: 'height',
    Width: 'width'
  }, function (e, n) {
    x.each({
      padding: "inner".concat(e),
      content: n,
      '': "outer".concat(e)
    }, function (r, i) {
      x.fn[i] = function (i, o) {
        var a = arguments.length && (r || typeof i !== 'boolean'),
            s = r || (i === !0 || o === !0 ? 'margin' : 'border');
        return x.access(this, function (n, r, i) {
          var o;
          return x.isWindow(n) ? n.document.documentElement["client".concat(e)] : n.nodeType === 9 ? (o = n.documentElement, Math.max(n.body["scroll".concat(e)], o["scroll".concat(e)], n.body["offset".concat(e)], o["offset".concat(e)], o["client".concat(e)])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s);
        }, n, a ? i : t, a, null);
      };
    });
  }), x.fn.size = function () {
    return this.length;
  }, x.fn.andSelf = x.fn.addBack, (typeof module === "undefined" ? "undefined" : (0, _typeof2["default"])(module)) === 'object' && module && (0, _typeof2["default"])(module.exports) === 'object' ? module.exports = x : (e.jQuery = e.$ = x, typeof define === 'function' && define.amd && define('jquery', [], function () {
    return x;
  }));
})(window);