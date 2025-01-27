/**
 * simplebar-react - v2.4.1
 * React component for SimpleBar
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat
 * Under MIT License
 */

!(function(t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = e(require('react'), require('prop-types')))
    : 'function' == typeof define && define.amd
    ? define(['react', 'prop-types'], e)
    : ((t = t || self).SimpleBar = e(t.React, t.PropTypes));
})(this, function(t, e) {
  'use strict';
  var r = 'default' in t ? t.default : t;
  function n(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e &&
        (n = n.filter(function(e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function i(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? n(Object(r), !0).forEach(function(e) {
            o(t, e, r[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : n(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
          });
    }
    return t;
  }
  function o(t, e, r) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          })
        : (t[e] = r),
      t
    );
  }
  function s() {
    return (s =
      Object.assign ||
      function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
        }
        return t;
      }).apply(this, arguments);
  }
  function a(t, e) {
    if (null == t) return {};
    var r,
      n,
      i = (function(t, e) {
        if (null == t) return {};
        var r,
          n,
          i = {},
          o = Object.keys(t);
        for (n = 0; n < o.length; n++)
          (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
        return i;
      })(t, e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(t);
      for (n = 0; n < o.length; n++)
        (r = o[n]),
          e.indexOf(r) >= 0 ||
            (Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]));
    }
    return i;
  }
  e = e && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
  var c =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {};
  function l(t, e) {
    return t((e = { exports: {} }), e.exports), e.exports;
  }
  var u,
    f,
    h = function(t) {
      return t && t.Math == Math && t;
    },
    p =
      h('object' == typeof globalThis && globalThis) ||
      h('object' == typeof window && window) ||
      h('object' == typeof self && self) ||
      h('object' == typeof c && c) ||
      (function() {
        return this;
      })() ||
      Function('return this')(),
    d = function(t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    },
    v = !d(function() {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function() {
            return 7;
          }
        })[1]
      );
    }),
    b = !d(function() {
      var t = function() {}.bind();
      return 'function' != typeof t || t.hasOwnProperty('prototype');
    }),
    g = Function.prototype.call,
    y = b
      ? g.bind(g)
      : function() {
          return g.apply(g, arguments);
        },
    m = {}.propertyIsEnumerable,
    x = Object.getOwnPropertyDescriptor,
    E = {
      f:
        x && !m.call({ 1: 2 }, 1)
          ? function(t) {
              var e = x(this, t);
              return !!e && e.enumerable;
            }
          : m
    },
    w = function(t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e
      };
    },
    O = Function.prototype,
    S = O.bind,
    k = O.call,
    A = b && S.bind(k, k),
    T = b
      ? function(t) {
          return t && A(t);
        }
      : function(t) {
          return (
            t &&
            function() {
              return k.apply(t, arguments);
            }
          );
        },
    j = T({}.toString),
    R = T(''.slice),
    z = function(t) {
      return R(j(t), 8, -1);
    },
    N = p.Object,
    _ = T(''.split),
    L = d(function() {
      return !N('z').propertyIsEnumerable(0);
    })
      ? function(t) {
          return 'String' == z(t) ? _(t, '') : N(t);
        }
      : N,
    C = p.TypeError,
    P = function(t) {
      if (null == t) throw C("Can't call method on " + t);
      return t;
    },
    I = function(t) {
      return L(P(t));
    },
    W = function(t) {
      return 'function' == typeof t;
    },
    M = function(t) {
      return 'object' == typeof t ? null !== t : W(t);
    },
    B = function(t) {
      return W(t) ? t : void 0;
    },
    D = function(t, e) {
      return arguments.length < 2 ? B(p[t]) : p[t] && p[t][e];
    },
    F = T({}.isPrototypeOf),
    V = D('navigator', 'userAgent') || '',
    $ = p.process,
    X = p.Deno,
    H = ($ && $.versions) || (X && X.version),
    q = H && H.v8;
  q && (f = (u = q.split('.'))[0] > 0 && u[0] < 4 ? 1 : +(u[0] + u[1])),
    !f &&
      V &&
      (!(u = V.match(/Edge\/(\d+)/)) || u[1] >= 74) &&
      (u = V.match(/Chrome\/(\d+)/)) &&
      (f = +u[1]);
  var Y = f,
    G =
      !!Object.getOwnPropertySymbols &&
      !d(function() {
        var t = Symbol();
        return (
          !String(t) ||
          !(Object(t) instanceof Symbol) ||
          (!Symbol.sham && Y && Y < 41)
        );
      }),
    U = G && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
    K = p.Object,
    J = U
      ? function(t) {
          return 'symbol' == typeof t;
        }
      : function(t) {
          var e = D('Symbol');
          return W(e) && F(e.prototype, K(t));
        },
    Q = p.String,
    Z = function(t) {
      try {
        return Q(t);
      } catch (t) {
        return 'Object';
      }
    },
    tt = p.TypeError,
    et = function(t) {
      if (W(t)) return t;
      throw tt(Z(t) + ' is not a function');
    },
    rt = function(t, e) {
      var r = t[e];
      return null == r ? void 0 : et(r);
    },
    nt = p.TypeError,
    it = Object.defineProperty,
    ot = function(t, e) {
      try {
        it(p, t, { value: e, configurable: !0, writable: !0 });
      } catch (r) {
        p[t] = e;
      }
      return e;
    },
    st = p['__core-js_shared__'] || ot('__core-js_shared__', {}),
    at = l(function(t) {
      (t.exports = function(t, e) {
        return st[t] || (st[t] = void 0 !== e ? e : {});
      })('versions', []).push({
        version: '3.22.6',
        mode: 'global',
        copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
        license: 'https://github.com/zloirock/core-js/blob/v3.22.6/LICENSE',
        source: 'https://github.com/zloirock/core-js'
      });
    }),
    ct = p.Object,
    lt = function(t) {
      return ct(P(t));
    },
    ut = T({}.hasOwnProperty),
    ft =
      Object.hasOwn ||
      function(t, e) {
        return ut(lt(t), e);
      },
    ht = 0,
    pt = Math.random(),
    dt = T((1).toString),
    vt = function(t) {
      return 'Symbol(' + (void 0 === t ? '' : t) + ')_' + dt(++ht + pt, 36);
    },
    bt = at('wks'),
    gt = p.Symbol,
    yt = gt && gt.for,
    mt = U ? gt : (gt && gt.withoutSetter) || vt,
    xt = function(t) {
      if (!ft(bt, t) || (!G && 'string' != typeof bt[t])) {
        var e = 'Symbol.' + t;
        G && ft(gt, t) ? (bt[t] = gt[t]) : (bt[t] = U && yt ? yt(e) : mt(e));
      }
      return bt[t];
    },
    Et = p.TypeError,
    wt = xt('toPrimitive'),
    Ot = function(t, e) {
      if (!M(t) || J(t)) return t;
      var r,
        n = rt(t, wt);
      if (n) {
        if ((void 0 === e && (e = 'default'), (r = y(n, t, e)), !M(r) || J(r)))
          return r;
        throw Et("Can't convert object to primitive value");
      }
      return (
        void 0 === e && (e = 'number'),
        (function(t, e) {
          var r, n;
          if ('string' === e && W((r = t.toString)) && !M((n = y(r, t))))
            return n;
          if (W((r = t.valueOf)) && !M((n = y(r, t)))) return n;
          if ('string' !== e && W((r = t.toString)) && !M((n = y(r, t))))
            return n;
          throw nt("Can't convert object to primitive value");
        })(t, e)
      );
    },
    St = function(t) {
      var e = Ot(t, 'string');
      return J(e) ? e : e + '';
    },
    kt = p.document,
    At = M(kt) && M(kt.createElement),
    Tt = function(t) {
      return At ? kt.createElement(t) : {};
    },
    jt =
      !v &&
      !d(function() {
        return (
          7 !=
          Object.defineProperty(Tt('div'), 'a', {
            get: function() {
              return 7;
            }
          }).a
        );
      }),
    Rt = Object.getOwnPropertyDescriptor,
    zt = {
      f: v
        ? Rt
        : function(t, e) {
            if (((t = I(t)), (e = St(e)), jt))
              try {
                return Rt(t, e);
              } catch (t) {}
            if (ft(t, e)) return w(!y(E.f, t, e), t[e]);
          }
    },
    Nt =
      v &&
      d(function() {
        return (
          42 !=
          Object.defineProperty(function() {}, 'prototype', {
            value: 42,
            writable: !1
          }).prototype
        );
      }),
    _t = p.String,
    Lt = p.TypeError,
    Ct = function(t) {
      if (M(t)) return t;
      throw Lt(_t(t) + ' is not an object');
    },
    Pt = p.TypeError,
    It = Object.defineProperty,
    Wt = Object.getOwnPropertyDescriptor,
    Mt = {
      f: v
        ? Nt
          ? function(t, e, r) {
              if (
                (Ct(t),
                (e = St(e)),
                Ct(r),
                'function' == typeof t &&
                  'prototype' === e &&
                  'value' in r &&
                  'writable' in r &&
                  !r.writable)
              ) {
                var n = Wt(t, e);
                n &&
                  n.writable &&
                  ((t[e] = r.value),
                  (r = {
                    configurable:
                      'configurable' in r ? r.configurable : n.configurable,
                    enumerable: 'enumerable' in r ? r.enumerable : n.enumerable,
                    writable: !1
                  }));
              }
              return It(t, e, r);
            }
          : It
        : function(t, e, r) {
            if ((Ct(t), (e = St(e)), Ct(r), jt))
              try {
                return It(t, e, r);
              } catch (t) {}
            if ('get' in r || 'set' in r) throw Pt('Accessors not supported');
            return 'value' in r && (t[e] = r.value), t;
          }
    },
    Bt = v
      ? function(t, e, r) {
          return Mt.f(t, e, w(1, r));
        }
      : function(t, e, r) {
          return (t[e] = r), t;
        },
    Dt = Function.prototype,
    Ft = v && Object.getOwnPropertyDescriptor,
    Vt = ft(Dt, 'name'),
    $t = {
      EXISTS: Vt,
      PROPER: Vt && 'something' === function() {}.name,
      CONFIGURABLE: Vt && (!v || (v && Ft(Dt, 'name').configurable))
    },
    Xt = T(Function.toString);
  W(st.inspectSource) ||
    (st.inspectSource = function(t) {
      return Xt(t);
    });
  var Ht,
    qt,
    Yt,
    Gt = st.inspectSource,
    Ut = p.WeakMap,
    Kt = W(Ut) && /native code/.test(Gt(Ut)),
    Jt = at('keys'),
    Qt = function(t) {
      return Jt[t] || (Jt[t] = vt(t));
    },
    Zt = {},
    te = p.TypeError,
    ee = p.WeakMap;
  if (Kt || st.state) {
    var re = st.state || (st.state = new ee()),
      ne = T(re.get),
      ie = T(re.has),
      oe = T(re.set);
    (Ht = function(t, e) {
      if (ie(re, t)) throw new te('Object already initialized');
      return (e.facade = t), oe(re, t, e), e;
    }),
      (qt = function(t) {
        return ne(re, t) || {};
      }),
      (Yt = function(t) {
        return ie(re, t);
      });
  } else {
    var se = Qt('state');
    (Zt[se] = !0),
      (Ht = function(t, e) {
        if (ft(t, se)) throw new te('Object already initialized');
        return (e.facade = t), Bt(t, se, e), e;
      }),
      (qt = function(t) {
        return ft(t, se) ? t[se] : {};
      }),
      (Yt = function(t) {
        return ft(t, se);
      });
  }
  var ae = {
      set: Ht,
      get: qt,
      has: Yt,
      enforce: function(t) {
        return Yt(t) ? qt(t) : Ht(t, {});
      },
      getterFor: function(t) {
        return function(e) {
          var r;
          if (!M(e) || (r = qt(e)).type !== t)
            throw te('Incompatible receiver, ' + t + ' required');
          return r;
        };
      }
    },
    ce = l(function(t) {
      var e = $t.CONFIGURABLE,
        r = ae.enforce,
        n = ae.get,
        i = Object.defineProperty,
        o =
          v &&
          !d(function() {
            return 8 !== i(function() {}, 'length', { value: 8 }).length;
          }),
        s = String(String).split('String'),
        a = (t.exports = function(t, n, a) {
          if (
            ('Symbol(' === String(n).slice(0, 7) &&
              (n = '[' + String(n).replace(/^Symbol\(([^)]*)\)/, '$1') + ']'),
            a && a.getter && (n = 'get ' + n),
            a && a.setter && (n = 'set ' + n),
            (!ft(t, 'name') || (e && t.name !== n)) &&
              i(t, 'name', { value: n, configurable: !0 }),
            o &&
              a &&
              ft(a, 'arity') &&
              t.length !== a.arity &&
              i(t, 'length', { value: a.arity }),
            a && ft(a, 'constructor') && a.constructor)
          ) {
            if (v)
              try {
                i(t, 'prototype', { writable: !1 });
              } catch (t) {}
          } else t.prototype = void 0;
          var c = r(t);
          return (
            ft(c, 'source') ||
              (c.source = s.join('string' == typeof n ? n : '')),
            t
          );
        });
      Function.prototype.toString = a(function() {
        return (W(this) && n(this).source) || Gt(this);
      }, 'toString');
    }),
    le = function(t, e, r, n) {
      n || (n = {});
      var i = n.enumerable,
        o = void 0 !== n.name ? n.name : e;
      return (
        W(r) && ce(r, o, n),
        n.global
          ? i
            ? (t[e] = r)
            : ot(e, r)
          : (n.unsafe ? t[e] && (i = !0) : delete t[e],
            i ? (t[e] = r) : Bt(t, e, r)),
        t
      );
    },
    ue = Math.ceil,
    fe = Math.floor,
    he =
      Math.trunc ||
      function(t) {
        var e = +t;
        return (e > 0 ? fe : ue)(e);
      },
    pe = function(t) {
      var e = +t;
      return e != e || 0 === e ? 0 : he(e);
    },
    de = Math.max,
    ve = Math.min,
    be = function(t, e) {
      var r = pe(t);
      return r < 0 ? de(r + e, 0) : ve(r, e);
    },
    ge = Math.min,
    ye = function(t) {
      return t > 0 ? ge(pe(t), 9007199254740991) : 0;
    },
    me = function(t) {
      return ye(t.length);
    },
    xe = function(t) {
      return function(e, r, n) {
        var i,
          o = I(e),
          s = me(o),
          a = be(n, s);
        if (t && r != r) {
          for (; s > a; ) if ((i = o[a++]) != i) return !0;
        } else
          for (; s > a; a++)
            if ((t || a in o) && o[a] === r) return t || a || 0;
        return !t && -1;
      };
    },
    Ee = { includes: xe(!0), indexOf: xe(!1) }.indexOf,
    we = T([].push),
    Oe = function(t, e) {
      var r,
        n = I(t),
        i = 0,
        o = [];
      for (r in n) !ft(Zt, r) && ft(n, r) && we(o, r);
      for (; e.length > i; ) ft(n, (r = e[i++])) && (~Ee(o, r) || we(o, r));
      return o;
    },
    Se = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf'
    ],
    ke = Se.concat('length', 'prototype'),
    Ae = {
      f:
        Object.getOwnPropertyNames ||
        function(t) {
          return Oe(t, ke);
        }
    },
    Te = { f: Object.getOwnPropertySymbols },
    je = T([].concat),
    Re =
      D('Reflect', 'ownKeys') ||
      function(t) {
        var e = Ae.f(Ct(t)),
          r = Te.f;
        return r ? je(e, r(t)) : e;
      },
    ze = function(t, e, r) {
      for (var n = Re(e), i = Mt.f, o = zt.f, s = 0; s < n.length; s++) {
        var a = n[s];
        ft(t, a) || (r && ft(r, a)) || i(t, a, o(e, a));
      }
    },
    Ne = /#|\.prototype\./,
    _e = function(t, e) {
      var r = Ce[Le(t)];
      return r == Ie || (r != Pe && (W(e) ? d(e) : !!e));
    },
    Le = (_e.normalize = function(t) {
      return String(t)
        .replace(Ne, '.')
        .toLowerCase();
    }),
    Ce = (_e.data = {}),
    Pe = (_e.NATIVE = 'N'),
    Ie = (_e.POLYFILL = 'P'),
    We = _e,
    Me = zt.f,
    Be = function(t, e) {
      var r,
        n,
        i,
        o,
        s,
        a = t.target,
        c = t.global,
        l = t.stat;
      if ((r = c ? p : l ? p[a] || ot(a, {}) : (p[a] || {}).prototype))
        for (n in e) {
          if (
            ((o = e[n]),
            (i = t.dontCallGetSet ? (s = Me(r, n)) && s.value : r[n]),
            !We(c ? n : a + (l ? '.' : '#') + n, t.forced) && void 0 !== i)
          ) {
            if (typeof o == typeof i) continue;
            ze(o, i);
          }
          (t.sham || (i && i.sham)) && Bt(o, 'sham', !0), le(r, n, o, t);
        }
    },
    De = {};
  De[xt('toStringTag')] = 'z';
  var Fe = '[object z]' === String(De),
    Ve = xt('toStringTag'),
    $e = p.Object,
    Xe =
      'Arguments' ==
      z(
        (function() {
          return arguments;
        })()
      ),
    He = Fe
      ? z
      : function(t) {
          var e, r, n;
          return void 0 === t
            ? 'Undefined'
            : null === t
            ? 'Null'
            : 'string' ==
              typeof (r = (function(t, e) {
                try {
                  return t[e];
                } catch (t) {}
              })((e = $e(t)), Ve))
            ? r
            : Xe
            ? z(e)
            : 'Object' == (n = z(e)) && W(e.callee)
            ? 'Arguments'
            : n;
        },
    qe = p.String,
    Ye = function(t) {
      if ('Symbol' === He(t))
        throw TypeError('Cannot convert a Symbol value to a string');
      return qe(t);
    },
    Ge = '\t\n\v\f\r                　\u2028\u2029\ufeff',
    Ue = T(''.replace),
    Ke = '[' + Ge + ']',
    Je = RegExp('^' + Ke + Ke + '*'),
    Qe = RegExp(Ke + Ke + '*$'),
    Ze = function(t) {
      return function(e) {
        var r = Ye(P(e));
        return 1 & t && (r = Ue(r, Je, '')), 2 & t && (r = Ue(r, Qe, '')), r;
      };
    },
    tr = { start: Ze(1), end: Ze(2), trim: Ze(3) }.trim,
    er = p.parseInt,
    rr = p.Symbol,
    nr = rr && rr.iterator,
    ir = /^[+-]?0x/i,
    or = T(ir.exec),
    sr =
      8 !== er(Ge + '08') ||
      22 !== er(Ge + '0x16') ||
      (nr &&
        !d(function() {
          er(Object(nr));
        }))
        ? function(t, e) {
            var r = tr(Ye(t));
            return er(r, e >>> 0 || (or(ir, r) ? 16 : 10));
          }
        : er;
  Be({ global: !0, forced: parseInt != sr }, { parseInt: sr });
  var ar =
      Object.keys ||
      function(t) {
        return Oe(t, Se);
      },
    cr = Object.assign,
    lr = Object.defineProperty,
    ur = T([].concat),
    fr =
      !cr ||
      d(function() {
        if (
          v &&
          1 !==
            cr(
              { b: 1 },
              cr(
                lr({}, 'a', {
                  enumerable: !0,
                  get: function() {
                    lr(this, 'b', { value: 3, enumerable: !1 });
                  }
                }),
                { b: 2 }
              )
            ).b
        )
          return !0;
        var t = {},
          e = {},
          r = Symbol();
        return (
          (t[r] = 7),
          'abcdefghijklmnopqrst'.split('').forEach(function(t) {
            e[t] = t;
          }),
          7 != cr({}, t)[r] || 'abcdefghijklmnopqrst' != ar(cr({}, e)).join('')
        );
      })
        ? function(t, e) {
            for (
              var r = lt(t), n = arguments.length, i = 1, o = Te.f, s = E.f;
              n > i;

            )
              for (
                var a,
                  c = L(arguments[i++]),
                  l = o ? ur(ar(c), o(c)) : ar(c),
                  u = l.length,
                  f = 0;
                u > f;

              )
                (a = l[f++]), (v && !y(s, c, a)) || (r[a] = c[a]);
            return r;
          }
        : cr;
  Be(
    { target: 'Object', stat: !0, arity: 2, forced: Object.assign !== fr },
    { assign: fr }
  );
  var hr = T(T.bind),
    pr = function(t, e) {
      return (
        et(t),
        void 0 === e
          ? t
          : b
          ? hr(t, e)
          : function() {
              return t.apply(e, arguments);
            }
      );
    },
    dr =
      Array.isArray ||
      function(t) {
        return 'Array' == z(t);
      },
    vr = function() {},
    br = [],
    gr = D('Reflect', 'construct'),
    yr = /^\s*(?:class|function)\b/,
    mr = T(yr.exec),
    xr = !yr.exec(vr),
    Er = function(t) {
      if (!W(t)) return !1;
      try {
        return gr(vr, br, t), !0;
      } catch (t) {
        return !1;
      }
    },
    wr = function(t) {
      if (!W(t)) return !1;
      switch (He(t)) {
        case 'AsyncFunction':
        case 'GeneratorFunction':
        case 'AsyncGeneratorFunction':
          return !1;
      }
      try {
        return xr || !!mr(yr, Gt(t));
      } catch (t) {
        return !0;
      }
    };
  wr.sham = !0;
  var Or,
    Sr =
      !gr ||
      d(function() {
        var t;
        return (
          Er(Er.call) ||
          !Er(Object) ||
          !Er(function() {
            t = !0;
          }) ||
          t
        );
      })
        ? wr
        : Er,
    kr = xt('species'),
    Ar = p.Array,
    Tr = function(t, e) {
      return new ((function(t) {
        var e;
        return (
          dr(t) &&
            ((e = t.constructor),
            ((Sr(e) && (e === Ar || dr(e.prototype))) ||
              (M(e) && null === (e = e[kr]))) &&
              (e = void 0)),
          void 0 === e ? Ar : e
        );
      })(t))(0 === e ? 0 : e);
    },
    jr = T([].push),
    Rr = function(t) {
      var e = 1 == t,
        r = 2 == t,
        n = 3 == t,
        i = 4 == t,
        o = 6 == t,
        s = 7 == t,
        a = 5 == t || o;
      return function(c, l, u, f) {
        for (
          var h,
            p,
            d = lt(c),
            v = L(d),
            b = pr(l, u),
            g = me(v),
            y = 0,
            m = f || Tr,
            x = e ? m(c, g) : r || s ? m(c, 0) : void 0;
          g > y;
          y++
        )
          if ((a || y in v) && ((p = b((h = v[y]), y, d)), t))
            if (e) x[y] = p;
            else if (p)
              switch (t) {
                case 3:
                  return !0;
                case 5:
                  return h;
                case 6:
                  return y;
                case 2:
                  jr(x, h);
              }
            else
              switch (t) {
                case 4:
                  return !1;
                case 7:
                  jr(x, h);
              }
        return o ? -1 : n || i ? i : x;
      };
    },
    zr = {
      forEach: Rr(0),
      map: Rr(1),
      filter: Rr(2),
      some: Rr(3),
      every: Rr(4),
      find: Rr(5),
      findIndex: Rr(6),
      filterReject: Rr(7)
    },
    Nr = xt('species'),
    _r = zr.filter,
    Lr =
      ((Or = 'filter'),
      Y >= 51 ||
        !d(function() {
          var t = [];
          return (
            ((t.constructor = {})[Nr] = function() {
              return { foo: 1 };
            }),
            1 !== t[Or](Boolean).foo
          );
        }));
  Be(
    { target: 'Array', proto: !0, forced: !Lr },
    {
      filter: function(t) {
        return _r(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    }
  );
  var Cr = Fe
    ? {}.toString
    : function() {
        return '[object ' + He(this) + ']';
      };
  Fe || le(Object.prototype, 'toString', Cr, { unsafe: !0 });
  var Pr,
    Ir = {
      f:
        v && !Nt
          ? Object.defineProperties
          : function(t, e) {
              Ct(t);
              for (var r, n = I(e), i = ar(e), o = i.length, s = 0; o > s; )
                Mt.f(t, (r = i[s++]), n[r]);
              return t;
            }
    },
    Wr = D('document', 'documentElement'),
    Mr = Qt('IE_PROTO'),
    Br = function() {},
    Dr = function(t) {
      return '<script>' + t + '</script>';
    },
    Fr = function(t) {
      t.write(Dr('')), t.close();
      var e = t.parentWindow.Object;
      return (t = null), e;
    },
    Vr = function() {
      try {
        Pr = new ActiveXObject('htmlfile');
      } catch (t) {}
      var t, e;
      Vr =
        'undefined' != typeof document
          ? document.domain && Pr
            ? Fr(Pr)
            : (((e = Tt('iframe')).style.display = 'none'),
              Wr.appendChild(e),
              (e.src = String('javascript:')),
              (t = e.contentWindow.document).open(),
              t.write(Dr('document.F=Object')),
              t.close(),
              t.F)
          : Fr(Pr);
      for (var r = Se.length; r--; ) delete Vr.prototype[Se[r]];
      return Vr();
    };
  Zt[Mr] = !0;
  var $r =
      Object.create ||
      function(t, e) {
        var r;
        return (
          null !== t
            ? ((Br.prototype = Ct(t)),
              (r = new Br()),
              (Br.prototype = null),
              (r[Mr] = t))
            : (r = Vr()),
          void 0 === e ? r : Ir.f(r, e)
        );
      },
    Xr = Mt.f,
    Hr = xt('unscopables'),
    qr = Array.prototype;
  null == qr[Hr] && Xr(qr, Hr, { configurable: !0, value: $r(null) });
  var Yr,
    Gr,
    Ur,
    Kr = function(t) {
      qr[Hr][t] = !0;
    },
    Jr = {},
    Qr = !d(function() {
      function t() {}
      return (
        (t.prototype.constructor = null),
        Object.getPrototypeOf(new t()) !== t.prototype
      );
    }),
    Zr = Qt('IE_PROTO'),
    tn = p.Object,
    en = tn.prototype,
    rn = Qr
      ? tn.getPrototypeOf
      : function(t) {
          var e = lt(t);
          if (ft(e, Zr)) return e[Zr];
          var r = e.constructor;
          return W(r) && e instanceof r
            ? r.prototype
            : e instanceof tn
            ? en
            : null;
        },
    nn = xt('iterator'),
    on = !1;
  [].keys &&
    ('next' in (Ur = [].keys())
      ? (Gr = rn(rn(Ur))) !== Object.prototype && (Yr = Gr)
      : (on = !0)),
    (null == Yr ||
      d(function() {
        var t = {};
        return Yr[nn].call(t) !== t;
      })) &&
      (Yr = {}),
    W(Yr[nn]) ||
      le(Yr, nn, function() {
        return this;
      });
  var sn = { IteratorPrototype: Yr, BUGGY_SAFARI_ITERATORS: on },
    an = Mt.f,
    cn = xt('toStringTag'),
    ln = function(t, e, r) {
      t && !r && (t = t.prototype),
        t && !ft(t, cn) && an(t, cn, { configurable: !0, value: e });
    },
    un = sn.IteratorPrototype,
    fn = function() {
      return this;
    },
    hn = p.String,
    pn = p.TypeError,
    dn =
      Object.setPrototypeOf ||
      ('__proto__' in {}
        ? (function() {
            var t,
              e = !1,
              r = {};
            try {
              (t = T(
                Object.getOwnPropertyDescriptor(Object.prototype, '__proto__')
                  .set
              ))(r, []),
                (e = r instanceof Array);
            } catch (t) {}
            return function(r, n) {
              return (
                Ct(r),
                (function(t) {
                  if ('object' == typeof t || W(t)) return t;
                  throw pn("Can't set " + hn(t) + ' as a prototype');
                })(n),
                e ? t(r, n) : (r.__proto__ = n),
                r
              );
            };
          })()
        : void 0),
    vn = $t.PROPER,
    bn = $t.CONFIGURABLE,
    gn = sn.IteratorPrototype,
    yn = sn.BUGGY_SAFARI_ITERATORS,
    mn = xt('iterator'),
    xn = function() {
      return this;
    },
    En = function(t, e, r, n, i, o, s) {
      !(function(t, e, r, n) {
        var i = e + ' Iterator';
        (t.prototype = $r(un, { next: w(+!n, r) })), ln(t, i, !1), (Jr[i] = fn);
      })(r, e, n);
      var a,
        c,
        l,
        u = function(t) {
          if (t === i && v) return v;
          if (!yn && t in p) return p[t];
          switch (t) {
            case 'keys':
            case 'values':
            case 'entries':
              return function() {
                return new r(this, t);
              };
          }
          return function() {
            return new r(this);
          };
        },
        f = e + ' Iterator',
        h = !1,
        p = t.prototype,
        d = p[mn] || p['@@iterator'] || (i && p[i]),
        v = (!yn && d) || u(i),
        b = ('Array' == e && p.entries) || d;
      if (
        (b &&
          (a = rn(b.call(new t()))) !== Object.prototype &&
          a.next &&
          (rn(a) !== gn && (dn ? dn(a, gn) : W(a[mn]) || le(a, mn, xn)),
          ln(a, f, !0)),
        vn &&
          'values' == i &&
          d &&
          'values' !== d.name &&
          (bn
            ? Bt(p, 'name', 'values')
            : ((h = !0),
              (v = function() {
                return y(d, this);
              }))),
        i)
      )
        if (
          ((c = {
            values: u('values'),
            keys: o ? v : u('keys'),
            entries: u('entries')
          }),
          s)
        )
          for (l in c) (yn || h || !(l in p)) && le(p, l, c[l]);
        else Be({ target: e, proto: !0, forced: yn || h }, c);
      return p[mn] !== v && le(p, mn, v, { name: i }), (Jr[e] = v), c;
    },
    wn = Mt.f,
    On = ae.set,
    Sn = ae.getterFor('Array Iterator'),
    kn = En(
      Array,
      'Array',
      function(t, e) {
        On(this, { type: 'Array Iterator', target: I(t), index: 0, kind: e });
      },
      function() {
        var t = Sn(this),
          e = t.target,
          r = t.kind,
          n = t.index++;
        return !e || n >= e.length
          ? ((t.target = void 0), { value: void 0, done: !0 })
          : 'keys' == r
          ? { value: n, done: !1 }
          : 'values' == r
          ? { value: e[n], done: !1 }
          : { value: [n, e[n]], done: !1 };
      },
      'values'
    ),
    An = (Jr.Arguments = Jr.Array);
  if ((Kr('keys'), Kr('values'), Kr('entries'), v && 'values' !== An.name))
    try {
      wn(An, 'name', { value: 'values' });
    } catch (t) {}
  var Tn = T(''.charAt),
    jn = T(''.charCodeAt),
    Rn = T(''.slice),
    zn = function(t) {
      return function(e, r) {
        var n,
          i,
          o = Ye(P(e)),
          s = pe(r),
          a = o.length;
        return s < 0 || s >= a
          ? t
            ? ''
            : void 0
          : (n = jn(o, s)) < 55296 ||
            n > 56319 ||
            s + 1 === a ||
            (i = jn(o, s + 1)) < 56320 ||
            i > 57343
          ? t
            ? Tn(o, s)
            : n
          : t
          ? Rn(o, s, s + 2)
          : i - 56320 + ((n - 55296) << 10) + 65536;
      };
    },
    Nn = { codeAt: zn(!1), charAt: zn(!0) },
    _n = Nn.charAt,
    Ln = ae.set,
    Cn = ae.getterFor('String Iterator');
  En(
    String,
    'String',
    function(t) {
      Ln(this, { type: 'String Iterator', string: Ye(t), index: 0 });
    },
    function() {
      var t,
        e = Cn(this),
        r = e.string,
        n = e.index;
      return n >= r.length
        ? { value: void 0, done: !0 }
        : ((t = _n(r, n)), (e.index += t.length), { value: t, done: !1 });
    }
  );
  var Pn = function(t, e, r) {
      for (var n in e) le(t, n, e[n], r);
      return t;
    },
    In = p.Array,
    Wn = Math.max,
    Mn = Ae.f,
    Bn =
      'object' == typeof window && window && Object.getOwnPropertyNames
        ? Object.getOwnPropertyNames(window)
        : [],
    Dn = function(t) {
      try {
        return Mn(t);
      } catch (t) {
        return (function(t, e, r) {
          for (
            var n,
              i,
              o,
              s,
              a = me(t),
              c = be(e, a),
              l = be(void 0 === r ? a : r, a),
              u = In(Wn(l - c, 0)),
              f = 0;
            c < l;
            c++, f++
          )
            (n = u),
              (i = f),
              (o = t[c]),
              (s = void 0),
              (s = St(i)) in n ? Mt.f(n, s, w(0, o)) : (n[s] = o);
          return (u.length = f), u;
        })(Bn);
      }
    },
    Fn = {
      f: function(t) {
        return Bn && 'Window' == z(t) ? Dn(t) : Mn(I(t));
      }
    },
    Vn = d(function() {
      if ('function' == typeof ArrayBuffer) {
        var t = new ArrayBuffer(8);
        Object.isExtensible(t) && Object.defineProperty(t, 'a', { value: 8 });
      }
    }),
    $n = Object.isExtensible,
    Xn =
      d(function() {
        $n(1);
      }) || Vn
        ? function(t) {
            return !!M(t) && (!Vn || 'ArrayBuffer' != z(t)) && (!$n || $n(t));
          }
        : $n,
    Hn = !d(function() {
      return Object.isExtensible(Object.preventExtensions({}));
    }),
    qn = l(function(t) {
      var e = Mt.f,
        r = !1,
        n = vt('meta'),
        i = 0,
        o = function(t) {
          e(t, n, { value: { objectID: 'O' + i++, weakData: {} } });
        },
        s = (t.exports = {
          enable: function() {
            (s.enable = function() {}), (r = !0);
            var t = Ae.f,
              e = T([].splice),
              i = {};
            (i[n] = 1),
              t(i).length &&
                ((Ae.f = function(r) {
                  for (var i = t(r), o = 0, s = i.length; o < s; o++)
                    if (i[o] === n) {
                      e(i, o, 1);
                      break;
                    }
                  return i;
                }),
                Be(
                  { target: 'Object', stat: !0, forced: !0 },
                  { getOwnPropertyNames: Fn.f }
                ));
          },
          fastKey: function(t, e) {
            if (!M(t))
              return 'symbol' == typeof t
                ? t
                : ('string' == typeof t ? 'S' : 'P') + t;
            if (!ft(t, n)) {
              if (!Xn(t)) return 'F';
              if (!e) return 'E';
              o(t);
            }
            return t[n].objectID;
          },
          getWeakData: function(t, e) {
            if (!ft(t, n)) {
              if (!Xn(t)) return !0;
              if (!e) return !1;
              o(t);
            }
            return t[n].weakData;
          },
          onFreeze: function(t) {
            return Hn && r && Xn(t) && !ft(t, n) && o(t), t;
          }
        });
      Zt[n] = !0;
    }),
    Yn = (qn.enable, qn.fastKey, qn.getWeakData, qn.onFreeze, xt('iterator')),
    Gn = Array.prototype,
    Un = xt('iterator'),
    Kn = function(t) {
      if (null != t) return rt(t, Un) || rt(t, '@@iterator') || Jr[He(t)];
    },
    Jn = p.TypeError,
    Qn = function(t, e, r) {
      var n, i;
      Ct(t);
      try {
        if (!(n = rt(t, 'return'))) {
          if ('throw' === e) throw r;
          return r;
        }
        n = y(n, t);
      } catch (t) {
        (i = !0), (n = t);
      }
      if ('throw' === e) throw r;
      if (i) throw n;
      return Ct(n), r;
    },
    Zn = p.TypeError,
    ti = function(t, e) {
      (this.stopped = t), (this.result = e);
    },
    ei = ti.prototype,
    ri = function(t, e, r) {
      var n,
        i,
        o,
        s,
        a,
        c,
        l,
        u,
        f = r && r.that,
        h = !(!r || !r.AS_ENTRIES),
        p = !(!r || !r.IS_ITERATOR),
        d = !(!r || !r.INTERRUPTED),
        v = pr(e, f),
        b = function(t) {
          return n && Qn(n, 'normal', t), new ti(!0, t);
        },
        g = function(t) {
          return h
            ? (Ct(t), d ? v(t[0], t[1], b) : v(t[0], t[1]))
            : d
            ? v(t, b)
            : v(t);
        };
      if (p) n = t;
      else {
        if (!(i = Kn(t))) throw Zn(Z(t) + ' is not iterable');
        if (void 0 !== (u = i) && (Jr.Array === u || Gn[Yn] === u)) {
          for (o = 0, s = me(t); s > o; o++)
            if ((a = g(t[o])) && F(ei, a)) return a;
          return new ti(!1);
        }
        n = (function(t, e) {
          var r = arguments.length < 2 ? Kn(t) : e;
          if (et(r)) return Ct(y(r, t));
          throw Jn(Z(t) + ' is not iterable');
        })(t, i);
      }
      for (c = n.next; !(l = y(c, n)).done; ) {
        try {
          a = g(l.value);
        } catch (t) {
          Qn(n, 'throw', t);
        }
        if ('object' == typeof a && a && F(ei, a)) return a;
      }
      return new ti(!1);
    },
    ni = p.TypeError,
    ii = function(t, e) {
      if (F(e, t)) return t;
      throw ni('Incorrect invocation');
    },
    oi = xt('iterator'),
    si = !1;
  try {
    var ai = 0,
      ci = {
        next: function() {
          return { done: !!ai++ };
        },
        return: function() {
          si = !0;
        }
      };
    (ci[oi] = function() {
      return this;
    }),
      Array.from(ci, function() {
        throw 2;
      });
  } catch (t) {}
  var li = qn.getWeakData,
    ui = ae.set,
    fi = ae.getterFor,
    hi = zr.find,
    pi = zr.findIndex,
    di = T([].splice),
    vi = 0,
    bi = function(t) {
      return t.frozen || (t.frozen = new gi());
    },
    gi = function() {
      this.entries = [];
    },
    yi = function(t, e) {
      return hi(t.entries, function(t) {
        return t[0] === e;
      });
    };
  gi.prototype = {
    get: function(t) {
      var e = yi(this, t);
      if (e) return e[1];
    },
    has: function(t) {
      return !!yi(this, t);
    },
    set: function(t, e) {
      var r = yi(this, t);
      r ? (r[1] = e) : this.entries.push([t, e]);
    },
    delete: function(t) {
      var e = pi(this.entries, function(e) {
        return e[0] === t;
      });
      return ~e && di(this.entries, e, 1), !!~e;
    }
  };
  var mi,
    xi = {
      getConstructor: function(t, e, r, n) {
        var i = t(function(t, i) {
            ii(t, o),
              ui(t, { type: e, id: vi++, frozen: void 0 }),
              null != i && ri(i, t[n], { that: t, AS_ENTRIES: r });
          }),
          o = i.prototype,
          s = fi(e),
          a = function(t, e, r) {
            var n = s(t),
              i = li(Ct(e), !0);
            return !0 === i ? bi(n).set(e, r) : (i[n.id] = r), t;
          };
        return (
          Pn(o, {
            delete: function(t) {
              var e = s(this);
              if (!M(t)) return !1;
              var r = li(t);
              return !0 === r
                ? bi(e).delete(t)
                : r && ft(r, e.id) && delete r[e.id];
            },
            has: function(t) {
              var e = s(this);
              if (!M(t)) return !1;
              var r = li(t);
              return !0 === r ? bi(e).has(t) : r && ft(r, e.id);
            }
          }),
          Pn(
            o,
            r
              ? {
                  get: function(t) {
                    var e = s(this);
                    if (M(t)) {
                      var r = li(t);
                      return !0 === r ? bi(e).get(t) : r ? r[e.id] : void 0;
                    }
                  },
                  set: function(t, e) {
                    return a(this, t, e);
                  }
                }
              : {
                  add: function(t) {
                    return a(this, t, !0);
                  }
                }
          ),
          i
        );
      }
    },
    Ei = ae.enforce,
    wi = !p.ActiveXObject && 'ActiveXObject' in p,
    Oi = function(t) {
      return function() {
        return t(this, arguments.length ? arguments[0] : void 0);
      };
    },
    Si = (function(t, e, r) {
      var n = -1 !== t.indexOf('Map'),
        i = -1 !== t.indexOf('Weak'),
        o = n ? 'set' : 'add',
        s = p[t],
        a = s && s.prototype,
        c = s,
        l = {},
        u = function(t) {
          var e = T(a[t]);
          le(
            a,
            t,
            'add' == t
              ? function(t) {
                  return e(this, 0 === t ? 0 : t), this;
                }
              : 'delete' == t
              ? function(t) {
                  return !(i && !M(t)) && e(this, 0 === t ? 0 : t);
                }
              : 'get' == t
              ? function(t) {
                  return i && !M(t) ? void 0 : e(this, 0 === t ? 0 : t);
                }
              : 'has' == t
              ? function(t) {
                  return !(i && !M(t)) && e(this, 0 === t ? 0 : t);
                }
              : function(t, r) {
                  return e(this, 0 === t ? 0 : t, r), this;
                }
          );
        };
      if (
        We(
          t,
          !W(s) ||
            !(
              i ||
              (a.forEach &&
                !d(function() {
                  new s().entries().next();
                }))
            )
        )
      )
        (c = r.getConstructor(e, t, n, o)), qn.enable();
      else if (We(t, !0)) {
        var f = new c(),
          h = f[o](i ? {} : -0, 1) != f,
          v = d(function() {
            f.has(1);
          }),
          b = (function(t, e) {
            if (!e && !si) return !1;
            var r = !1;
            try {
              var n = {};
              (n[oi] = function() {
                return {
                  next: function() {
                    return { done: (r = !0) };
                  }
                };
              }),
                t(n);
            } catch (t) {}
            return r;
          })(function(t) {
            new s(t);
          }),
          g =
            !i &&
            d(function() {
              for (var t = new s(), e = 5; e--; ) t[o](e, e);
              return !t.has(-0);
            });
        b ||
          (((c = e(function(t, e) {
            ii(t, a);
            var r = (function(t, e, r) {
              var n, i;
              return (
                dn &&
                  W((n = e.constructor)) &&
                  n !== r &&
                  M((i = n.prototype)) &&
                  i !== r.prototype &&
                  dn(t, i),
                t
              );
            })(new s(), t, c);
            return null != e && ri(e, r[o], { that: r, AS_ENTRIES: n }), r;
          })).prototype = a),
          (a.constructor = c)),
          (v || g) && (u('delete'), u('has'), n && u('get')),
          (g || h) && u(o),
          i && a.clear && delete a.clear;
      }
      return (
        (l[t] = c),
        Be({ global: !0, constructor: !0, forced: c != s }, l),
        ln(c, t),
        i || r.setStrong(c, t, n),
        c
      );
    })('WeakMap', Oi, xi);
  if (Kt && wi) {
    (mi = xi.getConstructor(Oi, 'WeakMap', !0)), qn.enable();
    var ki = Si.prototype,
      Ai = T(ki.delete),
      Ti = T(ki.has),
      ji = T(ki.get),
      Ri = T(ki.set);
    Pn(ki, {
      delete: function(t) {
        if (M(t) && !Xn(t)) {
          var e = Ei(this);
          return (
            e.frozen || (e.frozen = new mi()), Ai(this, t) || e.frozen.delete(t)
          );
        }
        return Ai(this, t);
      },
      has: function(t) {
        if (M(t) && !Xn(t)) {
          var e = Ei(this);
          return (
            e.frozen || (e.frozen = new mi()), Ti(this, t) || e.frozen.has(t)
          );
        }
        return Ti(this, t);
      },
      get: function(t) {
        if (M(t) && !Xn(t)) {
          var e = Ei(this);
          return (
            e.frozen || (e.frozen = new mi()),
            Ti(this, t) ? ji(this, t) : e.frozen.get(t)
          );
        }
        return ji(this, t);
      },
      set: function(t, e) {
        if (M(t) && !Xn(t)) {
          var r = Ei(this);
          r.frozen || (r.frozen = new mi()),
            Ti(this, t) ? Ri(this, t, e) : r.frozen.set(t, e);
        } else Ri(this, t, e);
        return this;
      }
    });
  }
  var zi = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    },
    Ni = Tt('span').classList,
    _i = Ni && Ni.constructor && Ni.constructor.prototype,
    Li = _i === Object.prototype ? void 0 : _i,
    Ci = xt('iterator'),
    Pi = xt('toStringTag'),
    Ii = kn.values,
    Wi = function(t, e) {
      if (t) {
        if (t[Ci] !== Ii)
          try {
            Bt(t, Ci, Ii);
          } catch (e) {
            t[Ci] = Ii;
          }
        if ((t[Pi] || Bt(t, Pi, e), zi[e]))
          for (var r in kn)
            if (t[r] !== kn[r])
              try {
                Bt(t, r, kn[r]);
              } catch (e) {
                t[r] = kn[r];
              }
      }
    };
  for (var Mi in zi) Wi(p[Mi] && p[Mi].prototype, Mi);
  Wi(Li, 'DOMTokenList');
  var Bi = /^\s+|\s+$/g,
    Di = /^[-+]0x[0-9a-f]+$/i,
    Fi = /^0b[01]+$/i,
    Vi = /^0o[0-7]+$/i,
    $i = parseInt,
    Xi = 'object' == typeof c && c && c.Object === Object && c,
    Hi = 'object' == typeof self && self && self.Object === Object && self,
    qi = Xi || Hi || Function('return this')(),
    Yi = Object.prototype.toString,
    Gi = Math.max,
    Ui = Math.min,
    Ki = function() {
      return qi.Date.now();
    };
  function Ji(t, e, r) {
    var n,
      i,
      o,
      s,
      a,
      c,
      l = 0,
      u = !1,
      f = !1,
      h = !0;
    if ('function' != typeof t) throw new TypeError('Expected a function');
    function p(e) {
      var r = n,
        o = i;
      return (n = i = void 0), (l = e), (s = t.apply(o, r));
    }
    function d(t) {
      return (l = t), (a = setTimeout(b, e)), u ? p(t) : s;
    }
    function v(t) {
      var r = t - c;
      return void 0 === c || r >= e || r < 0 || (f && t - l >= o);
    }
    function b() {
      var t = Ki();
      if (v(t)) return g(t);
      a = setTimeout(
        b,
        (function(t) {
          var r = e - (t - c);
          return f ? Ui(r, o - (t - l)) : r;
        })(t)
      );
    }
    function g(t) {
      return (a = void 0), h && n ? p(t) : ((n = i = void 0), s);
    }
    function y() {
      var t = Ki(),
        r = v(t);
      if (((n = arguments), (i = this), (c = t), r)) {
        if (void 0 === a) return d(c);
        if (f) return (a = setTimeout(b, e)), p(c);
      }
      return void 0 === a && (a = setTimeout(b, e)), s;
    }
    return (
      (e = Zi(e) || 0),
      Qi(r) &&
        ((u = !!r.leading),
        (o = (f = 'maxWait' in r) ? Gi(Zi(r.maxWait) || 0, e) : o),
        (h = 'trailing' in r ? !!r.trailing : h)),
      (y.cancel = function() {
        void 0 !== a && clearTimeout(a), (l = 0), (n = c = i = a = void 0);
      }),
      (y.flush = function() {
        return void 0 === a ? s : g(Ki());
      }),
      y
    );
  }
  function Qi(t) {
    var e = typeof t;
    return !!t && ('object' == e || 'function' == e);
  }
  function Zi(t) {
    if ('number' == typeof t) return t;
    if (
      (function(t) {
        return (
          'symbol' == typeof t ||
          ((function(t) {
            return !!t && 'object' == typeof t;
          })(t) &&
            '[object Symbol]' == Yi.call(t))
        );
      })(t)
    )
      return NaN;
    if (Qi(t)) {
      var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
      t = Qi(e) ? e + '' : e;
    }
    if ('string' != typeof t) return 0 === t ? t : +t;
    t = t.replace(Bi, '');
    var r = Fi.test(t);
    return r || Vi.test(t) ? $i(t.slice(2), r ? 2 : 8) : Di.test(t) ? NaN : +t;
  }
  var to = function(t, e, r) {
      var n = !0,
        i = !0;
      if ('function' != typeof t) throw new TypeError('Expected a function');
      return (
        Qi(r) &&
          ((n = 'leading' in r ? !!r.leading : n),
          (i = 'trailing' in r ? !!r.trailing : i)),
        Ji(t, e, { leading: n, maxWait: e, trailing: i })
      );
    },
    eo = /^\s+|\s+$/g,
    ro = /^[-+]0x[0-9a-f]+$/i,
    no = /^0b[01]+$/i,
    io = /^0o[0-7]+$/i,
    oo = parseInt,
    so = 'object' == typeof c && c && c.Object === Object && c,
    ao = 'object' == typeof self && self && self.Object === Object && self,
    co = so || ao || Function('return this')(),
    lo = Object.prototype.toString,
    uo = Math.max,
    fo = Math.min,
    ho = function() {
      return co.Date.now();
    };
  function po(t) {
    var e = typeof t;
    return !!t && ('object' == e || 'function' == e);
  }
  function vo(t) {
    if ('number' == typeof t) return t;
    if (
      (function(t) {
        return (
          'symbol' == typeof t ||
          ((function(t) {
            return !!t && 'object' == typeof t;
          })(t) &&
            '[object Symbol]' == lo.call(t))
        );
      })(t)
    )
      return NaN;
    if (po(t)) {
      var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
      t = po(e) ? e + '' : e;
    }
    if ('string' != typeof t) return 0 === t ? t : +t;
    t = t.replace(eo, '');
    var r = no.test(t);
    return r || io.test(t) ? oo(t.slice(2), r ? 2 : 8) : ro.test(t) ? NaN : +t;
  }
  var bo = function(t, e, r) {
      var n,
        i,
        o,
        s,
        a,
        c,
        l = 0,
        u = !1,
        f = !1,
        h = !0;
      if ('function' != typeof t) throw new TypeError('Expected a function');
      function p(e) {
        var r = n,
          o = i;
        return (n = i = void 0), (l = e), (s = t.apply(o, r));
      }
      function d(t) {
        return (l = t), (a = setTimeout(b, e)), u ? p(t) : s;
      }
      function v(t) {
        var r = t - c;
        return void 0 === c || r >= e || r < 0 || (f && t - l >= o);
      }
      function b() {
        var t = ho();
        if (v(t)) return g(t);
        a = setTimeout(
          b,
          (function(t) {
            var r = e - (t - c);
            return f ? fo(r, o - (t - l)) : r;
          })(t)
        );
      }
      function g(t) {
        return (a = void 0), h && n ? p(t) : ((n = i = void 0), s);
      }
      function y() {
        var t = ho(),
          r = v(t);
        if (((n = arguments), (i = this), (c = t), r)) {
          if (void 0 === a) return d(c);
          if (f) return (a = setTimeout(b, e)), p(c);
        }
        return void 0 === a && (a = setTimeout(b, e)), s;
      }
      return (
        (e = vo(e) || 0),
        po(r) &&
          ((u = !!r.leading),
          (o = (f = 'maxWait' in r) ? uo(vo(r.maxWait) || 0, e) : o),
          (h = 'trailing' in r ? !!r.trailing : h)),
        (y.cancel = function() {
          void 0 !== a && clearTimeout(a), (l = 0), (n = c = i = a = void 0);
        }),
        (y.flush = function() {
          return void 0 === a ? s : g(ho());
        }),
        y
      );
    },
    go = /^\[object .+?Constructor\]$/,
    yo = 'object' == typeof c && c && c.Object === Object && c,
    mo = 'object' == typeof self && self && self.Object === Object && self,
    xo = yo || mo || Function('return this')();
  var Eo = Array.prototype,
    wo = Function.prototype,
    Oo = Object.prototype,
    So = xo['__core-js_shared__'],
    ko = (function() {
      var t = /[^.]+$/.exec((So && So.keys && So.keys.IE_PROTO) || '');
      return t ? 'Symbol(src)_1.' + t : '';
    })(),
    Ao = wo.toString,
    To = Oo.hasOwnProperty,
    jo = Oo.toString,
    Ro = RegExp(
      '^' +
        Ao.call(To)
          .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?'
          ) +
        '$'
    ),
    zo = Eo.splice,
    No = Bo(xo, 'Map'),
    _o = Bo(Object, 'create');
  function Lo(t) {
    var e = -1,
      r = t ? t.length : 0;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function Co(t) {
    var e = -1,
      r = t ? t.length : 0;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function Po(t) {
    var e = -1,
      r = t ? t.length : 0;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function Io(t, e) {
    for (var r, n, i = t.length; i--; )
      if ((r = t[i][0]) === (n = e) || (r != r && n != n)) return i;
    return -1;
  }
  function Wo(t) {
    return (
      !(!Fo(t) || ((e = t), ko && ko in e)) &&
      ((function(t) {
        var e = Fo(t) ? jo.call(t) : '';
        return '[object Function]' == e || '[object GeneratorFunction]' == e;
      })(t) ||
      (function(t) {
        var e = !1;
        if (null != t && 'function' != typeof t.toString)
          try {
            e = !!(t + '');
          } catch (t) {}
        return e;
      })(t)
        ? Ro
        : go
      ).test(
        (function(t) {
          if (null != t) {
            try {
              return Ao.call(t);
            } catch (t) {}
            try {
              return t + '';
            } catch (t) {}
          }
          return '';
        })(t)
      )
    );
    var e;
  }
  function Mo(t, e) {
    var r,
      n,
      i = t.__data__;
    return ('string' == (n = typeof (r = e)) ||
    'number' == n ||
    'symbol' == n ||
    'boolean' == n
    ? '__proto__' !== r
    : null === r)
      ? i['string' == typeof e ? 'string' : 'hash']
      : i.map;
  }
  function Bo(t, e) {
    var r = (function(t, e) {
      return null == t ? void 0 : t[e];
    })(t, e);
    return Wo(r) ? r : void 0;
  }
  function Do(t, e) {
    if ('function' != typeof t || (e && 'function' != typeof e))
      throw new TypeError('Expected a function');
    var r = function() {
      var n = arguments,
        i = e ? e.apply(this, n) : n[0],
        o = r.cache;
      if (o.has(i)) return o.get(i);
      var s = t.apply(this, n);
      return (r.cache = o.set(i, s)), s;
    };
    return (r.cache = new (Do.Cache || Po)()), r;
  }
  function Fo(t) {
    var e = typeof t;
    return !!t && ('object' == e || 'function' == e);
  }
  (Lo.prototype.clear = function() {
    this.__data__ = _o ? _o(null) : {};
  }),
    (Lo.prototype.delete = function(t) {
      return this.has(t) && delete this.__data__[t];
    }),
    (Lo.prototype.get = function(t) {
      var e = this.__data__;
      if (_o) {
        var r = e[t];
        return '__lodash_hash_undefined__' === r ? void 0 : r;
      }
      return To.call(e, t) ? e[t] : void 0;
    }),
    (Lo.prototype.has = function(t) {
      var e = this.__data__;
      return _o ? void 0 !== e[t] : To.call(e, t);
    }),
    (Lo.prototype.set = function(t, e) {
      return (
        (this.__data__[t] =
          _o && void 0 === e ? '__lodash_hash_undefined__' : e),
        this
      );
    }),
    (Co.prototype.clear = function() {
      this.__data__ = [];
    }),
    (Co.prototype.delete = function(t) {
      var e = this.__data__,
        r = Io(e, t);
      return !(r < 0) && (r == e.length - 1 ? e.pop() : zo.call(e, r, 1), !0);
    }),
    (Co.prototype.get = function(t) {
      var e = this.__data__,
        r = Io(e, t);
      return r < 0 ? void 0 : e[r][1];
    }),
    (Co.prototype.has = function(t) {
      return Io(this.__data__, t) > -1;
    }),
    (Co.prototype.set = function(t, e) {
      var r = this.__data__,
        n = Io(r, t);
      return n < 0 ? r.push([t, e]) : (r[n][1] = e), this;
    }),
    (Po.prototype.clear = function() {
      this.__data__ = {
        hash: new Lo(),
        map: new (No || Co)(),
        string: new Lo()
      };
    }),
    (Po.prototype.delete = function(t) {
      return Mo(this, t).delete(t);
    }),
    (Po.prototype.get = function(t) {
      return Mo(this, t).get(t);
    }),
    (Po.prototype.has = function(t) {
      return Mo(this, t).has(t);
    }),
    (Po.prototype.set = function(t, e) {
      return Mo(this, t).set(t, e), this;
    }),
    (Do.Cache = Po);
  var Vo,
    $o = Do,
    Xo = [],
    Ho = 'ResizeObserver loop completed with undelivered notifications.';
  !(function(t) {
    (t.BORDER_BOX = 'border-box'),
      (t.CONTENT_BOX = 'content-box'),
      (t.DEVICE_PIXEL_CONTENT_BOX = 'device-pixel-content-box');
  })(Vo || (Vo = {}));
  var qo,
    Yo = function(t) {
      return Object.freeze(t);
    },
    Go = function(t, e) {
      (this.inlineSize = t), (this.blockSize = e), Yo(this);
    },
    Uo = (function() {
      function t(t, e, r, n) {
        return (
          (this.x = t),
          (this.y = e),
          (this.width = r),
          (this.height = n),
          (this.top = this.y),
          (this.left = this.x),
          (this.bottom = this.top + this.height),
          (this.right = this.left + this.width),
          Yo(this)
        );
      }
      return (
        (t.prototype.toJSON = function() {
          var t = this;
          return {
            x: t.x,
            y: t.y,
            top: t.top,
            right: t.right,
            bottom: t.bottom,
            left: t.left,
            width: t.width,
            height: t.height
          };
        }),
        (t.fromRect = function(e) {
          return new t(e.x, e.y, e.width, e.height);
        }),
        t
      );
    })(),
    Ko = function(t) {
      return t instanceof SVGElement && 'getBBox' in t;
    },
    Jo = function(t) {
      if (Ko(t)) {
        var e = t.getBBox(),
          r = e.width,
          n = e.height;
        return !r && !n;
      }
      var i = t,
        o = i.offsetWidth,
        s = i.offsetHeight;
      return !(o || s || t.getClientRects().length);
    },
    Qo = function(t) {
      var e, r;
      if (t instanceof Element) return !0;
      var n =
        null ===
          (r = null === (e = t) || void 0 === e ? void 0 : e.ownerDocument) ||
        void 0 === r
          ? void 0
          : r.defaultView;
      return !!(n && t instanceof n.Element);
    },
    Zo = 'undefined' != typeof window ? window : {},
    ts = new WeakMap(),
    es = /auto|scroll/,
    rs = /^tb|vertical/,
    ns = /msie|trident/i.test(Zo.navigator && Zo.navigator.userAgent),
    is = function(t) {
      return parseFloat(t || '0');
    },
    os = function(t, e, r) {
      return (
        void 0 === t && (t = 0),
        void 0 === e && (e = 0),
        void 0 === r && (r = !1),
        new Go((r ? e : t) || 0, (r ? t : e) || 0)
      );
    },
    ss = Yo({
      devicePixelContentBoxSize: os(),
      borderBoxSize: os(),
      contentBoxSize: os(),
      contentRect: new Uo(0, 0, 0, 0)
    }),
    as = function(t, e) {
      if ((void 0 === e && (e = !1), ts.has(t) && !e)) return ts.get(t);
      if (Jo(t)) return ts.set(t, ss), ss;
      var r = getComputedStyle(t),
        n = Ko(t) && t.ownerSVGElement && t.getBBox(),
        i = !ns && 'border-box' === r.boxSizing,
        o = rs.test(r.writingMode || ''),
        s = !n && es.test(r.overflowY || ''),
        a = !n && es.test(r.overflowX || ''),
        c = n ? 0 : is(r.paddingTop),
        l = n ? 0 : is(r.paddingRight),
        u = n ? 0 : is(r.paddingBottom),
        f = n ? 0 : is(r.paddingLeft),
        h = n ? 0 : is(r.borderTopWidth),
        p = n ? 0 : is(r.borderRightWidth),
        d = n ? 0 : is(r.borderBottomWidth),
        v = f + l,
        b = c + u,
        g = (n ? 0 : is(r.borderLeftWidth)) + p,
        y = h + d,
        m = a ? t.offsetHeight - y - t.clientHeight : 0,
        x = s ? t.offsetWidth - g - t.clientWidth : 0,
        E = i ? v + g : 0,
        w = i ? b + y : 0,
        O = n ? n.width : is(r.width) - E - x,
        S = n ? n.height : is(r.height) - w - m,
        k = O + v + x + g,
        A = S + b + m + y,
        T = Yo({
          devicePixelContentBoxSize: os(
            Math.round(O * devicePixelRatio),
            Math.round(S * devicePixelRatio),
            o
          ),
          borderBoxSize: os(k, A, o),
          contentBoxSize: os(O, S, o),
          contentRect: new Uo(f, c, O, S)
        });
      return ts.set(t, T), T;
    },
    cs = function(t, e, r) {
      var n = as(t, r),
        i = n.borderBoxSize,
        o = n.contentBoxSize,
        s = n.devicePixelContentBoxSize;
      switch (e) {
        case Vo.DEVICE_PIXEL_CONTENT_BOX:
          return s;
        case Vo.BORDER_BOX:
          return i;
        default:
          return o;
      }
    },
    ls = function(t) {
      var e = as(t);
      (this.target = t),
        (this.contentRect = e.contentRect),
        (this.borderBoxSize = Yo([e.borderBoxSize])),
        (this.contentBoxSize = Yo([e.contentBoxSize])),
        (this.devicePixelContentBoxSize = Yo([e.devicePixelContentBoxSize]));
    },
    us = function(t) {
      if (Jo(t)) return 1 / 0;
      for (var e = 0, r = t.parentNode; r; ) (e += 1), (r = r.parentNode);
      return e;
    },
    fs = function() {
      var t = 1 / 0,
        e = [];
      Xo.forEach(function(r) {
        if (0 !== r.activeTargets.length) {
          var n = [];
          r.activeTargets.forEach(function(e) {
            var r = new ls(e.target),
              i = us(e.target);
            n.push(r),
              (e.lastReportedSize = cs(e.target, e.observedBox)),
              i < t && (t = i);
          }),
            e.push(function() {
              r.callback.call(r.observer, n, r.observer);
            }),
            r.activeTargets.splice(0, r.activeTargets.length);
        }
      });
      for (var r = 0, n = e; r < n.length; r++) {
        (0, n[r])();
      }
      return t;
    },
    hs = function(t) {
      Xo.forEach(function(e) {
        e.activeTargets.splice(0, e.activeTargets.length),
          e.skippedTargets.splice(0, e.skippedTargets.length),
          e.observationTargets.forEach(function(r) {
            r.isActive() &&
              (us(r.target) > t
                ? e.activeTargets.push(r)
                : e.skippedTargets.push(r));
          });
      });
    },
    ps = function() {
      var t,
        e = 0;
      for (
        hs(e);
        Xo.some(function(t) {
          return t.activeTargets.length > 0;
        });

      )
        (e = fs()), hs(e);
      return (
        Xo.some(function(t) {
          return t.skippedTargets.length > 0;
        }) &&
          ('function' == typeof ErrorEvent
            ? (t = new ErrorEvent('error', { message: Ho }))
            : ((t = document.createEvent('Event')).initEvent('error', !1, !1),
              (t.message = Ho)),
          window.dispatchEvent(t)),
        e > 0
      );
    },
    ds = [],
    vs = function(t) {
      if (!qo) {
        var e = 0,
          r = document.createTextNode('');
        new MutationObserver(function() {
          return ds.splice(0).forEach(function(t) {
            return t();
          });
        }).observe(r, { characterData: !0 }),
          (qo = function() {
            r.textContent = '' + (e ? e-- : e++);
          });
      }
      ds.push(t), qo();
    },
    bs = 0,
    gs = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
    ys = [
      'resize',
      'load',
      'transitionend',
      'animationend',
      'animationstart',
      'animationiteration',
      'keyup',
      'keydown',
      'mouseup',
      'mousedown',
      'mouseover',
      'mouseout',
      'blur',
      'focus'
    ],
    ms = function(t) {
      return void 0 === t && (t = 0), Date.now() + t;
    },
    xs = !1,
    Es = new ((function() {
      function t() {
        var t = this;
        (this.stopped = !0),
          (this.listener = function() {
            return t.schedule();
          });
      }
      return (
        (t.prototype.run = function(t) {
          var e = this;
          if ((void 0 === t && (t = 250), !xs)) {
            xs = !0;
            var r,
              n = ms(t);
            (r = function() {
              var r = !1;
              try {
                r = ps();
              } finally {
                if (((xs = !1), (t = n - ms()), !bs)) return;
                r ? e.run(1e3) : t > 0 ? e.run(t) : e.start();
              }
            }),
              vs(function() {
                requestAnimationFrame(r);
              });
          }
        }),
        (t.prototype.schedule = function() {
          this.stop(), this.run();
        }),
        (t.prototype.observe = function() {
          var t = this,
            e = function() {
              return t.observer && t.observer.observe(document.body, gs);
            };
          document.body ? e() : Zo.addEventListener('DOMContentLoaded', e);
        }),
        (t.prototype.start = function() {
          var t = this;
          this.stopped &&
            ((this.stopped = !1),
            (this.observer = new MutationObserver(this.listener)),
            this.observe(),
            ys.forEach(function(e) {
              return Zo.addEventListener(e, t.listener, !0);
            }));
        }),
        (t.prototype.stop = function() {
          var t = this;
          this.stopped ||
            (this.observer && this.observer.disconnect(),
            ys.forEach(function(e) {
              return Zo.removeEventListener(e, t.listener, !0);
            }),
            (this.stopped = !0));
        }),
        t
      );
    })())(),
    ws = function(t) {
      !bs && t > 0 && Es.start(), !(bs += t) && Es.stop();
    },
    Os = (function() {
      function t(t, e) {
        (this.target = t),
          (this.observedBox = e || Vo.CONTENT_BOX),
          (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
      }
      return (
        (t.prototype.isActive = function() {
          var t,
            e = cs(this.target, this.observedBox, !0);
          return (
            (t = this.target),
            Ko(t) ||
              (function(t) {
                switch (t.tagName) {
                  case 'INPUT':
                    if ('image' !== t.type) break;
                  case 'VIDEO':
                  case 'AUDIO':
                  case 'EMBED':
                  case 'OBJECT':
                  case 'CANVAS':
                  case 'IFRAME':
                  case 'IMG':
                    return !0;
                }
                return !1;
              })(t) ||
              'inline' !== getComputedStyle(t).display ||
              (this.lastReportedSize = e),
            this.lastReportedSize.inlineSize !== e.inlineSize ||
              this.lastReportedSize.blockSize !== e.blockSize
          );
        }),
        t
      );
    })(),
    Ss = function(t, e) {
      (this.activeTargets = []),
        (this.skippedTargets = []),
        (this.observationTargets = []),
        (this.observer = t),
        (this.callback = e);
    },
    ks = new WeakMap(),
    As = function(t, e) {
      for (var r = 0; r < t.length; r += 1) if (t[r].target === e) return r;
      return -1;
    },
    Ts = (function() {
      function t() {}
      return (
        (t.connect = function(t, e) {
          var r = new Ss(t, e);
          ks.set(t, r);
        }),
        (t.observe = function(t, e, r) {
          var n = ks.get(t),
            i = 0 === n.observationTargets.length;
          As(n.observationTargets, e) < 0 &&
            (i && Xo.push(n),
            n.observationTargets.push(new Os(e, r && r.box)),
            ws(1),
            Es.schedule());
        }),
        (t.unobserve = function(t, e) {
          var r = ks.get(t),
            n = As(r.observationTargets, e),
            i = 1 === r.observationTargets.length;
          n >= 0 &&
            (i && Xo.splice(Xo.indexOf(r), 1),
            r.observationTargets.splice(n, 1),
            ws(-1));
        }),
        (t.disconnect = function(t) {
          var e = this,
            r = ks.get(t);
          r.observationTargets.slice().forEach(function(r) {
            return e.unobserve(t, r.target);
          }),
            r.activeTargets.splice(0, r.activeTargets.length);
        }),
        t
      );
    })(),
    js = (function() {
      function t(t) {
        if (0 === arguments.length)
          throw new TypeError(
            "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
          );
        if ('function' != typeof t)
          throw new TypeError(
            "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
          );
        Ts.connect(this, t);
      }
      return (
        (t.prototype.observe = function(t, e) {
          if (0 === arguments.length)
            throw new TypeError(
              "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
            );
          if (!Qo(t))
            throw new TypeError(
              "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
            );
          Ts.observe(this, t, e);
        }),
        (t.prototype.unobserve = function(t) {
          if (0 === arguments.length)
            throw new TypeError(
              "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
            );
          if (!Qo(t))
            throw new TypeError(
              "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
            );
          Ts.unobserve(this, t);
        }),
        (t.prototype.disconnect = function() {
          Ts.disconnect(this);
        }),
        (t.toString = function() {
          return 'function ResizeObserver () { [polyfill code] }';
        }),
        t
      );
    })(),
    Rs = !(
      'undefined' == typeof window ||
      !window.document ||
      !window.document.createElement
    ),
    zs = p.TypeError,
    Ns = function(t) {
      return function(e, r, n, i) {
        et(r);
        var o = lt(e),
          s = L(o),
          a = me(o),
          c = t ? a - 1 : 0,
          l = t ? -1 : 1;
        if (n < 2)
          for (;;) {
            if (c in s) {
              (i = s[c]), (c += l);
              break;
            }
            if (((c += l), t ? c < 0 : a <= c))
              throw zs('Reduce of empty array with no initial value');
          }
        for (; t ? c >= 0 : a > c; c += l) c in s && (i = r(i, s[c], c, o));
        return i;
      };
    },
    _s = { left: Ns(!1), right: Ns(!0) },
    Ls = 'process' == z(p.process),
    Cs = _s.left,
    Ps = (function(t, e) {
      var r = [][t];
      return (
        !!r &&
        d(function() {
          r.call(
            null,
            e ||
              function() {
                return 1;
              },
            1
          );
        })
      );
    })('reduce');
  Be(
    { target: 'Array', proto: !0, forced: !Ps || (!Ls && Y > 79 && Y < 83) },
    {
      reduce: function(t) {
        var e = arguments.length;
        return Cs(this, t, e, e > 1 ? arguments[1] : void 0);
      }
    }
  );
  var Is,
    Ws,
    Ms = function() {
      var t = Ct(this),
        e = '';
      return (
        t.hasIndices && (e += 'd'),
        t.global && (e += 'g'),
        t.ignoreCase && (e += 'i'),
        t.multiline && (e += 'm'),
        t.dotAll && (e += 's'),
        t.unicode && (e += 'u'),
        t.sticky && (e += 'y'),
        e
      );
    },
    Bs = p.RegExp,
    Ds = d(function() {
      var t = Bs('a', 'y');
      return (t.lastIndex = 2), null != t.exec('abcd');
    }),
    Fs =
      Ds ||
      d(function() {
        return !Bs('a', 'y').sticky;
      }),
    Vs = {
      BROKEN_CARET:
        Ds ||
        d(function() {
          var t = Bs('^r', 'gy');
          return (t.lastIndex = 2), null != t.exec('str');
        }),
      MISSED_STICKY: Fs,
      UNSUPPORTED_Y: Ds
    },
    $s = p.RegExp,
    Xs = d(function() {
      var t = $s('.', 's');
      return !(t.dotAll && t.exec('\n') && 's' === t.flags);
    }),
    Hs = p.RegExp,
    qs = d(function() {
      var t = Hs('(?<a>b)', 'g');
      return 'b' !== t.exec('b').groups.a || 'bc' !== 'b'.replace(t, '$<a>c');
    }),
    Ys = ae.get,
    Gs = at('native-string-replace', String.prototype.replace),
    Us = RegExp.prototype.exec,
    Ks = Us,
    Js = T(''.charAt),
    Qs = T(''.indexOf),
    Zs = T(''.replace),
    ta = T(''.slice),
    ea =
      ((Ws = /b*/g),
      y(Us, (Is = /a/), 'a'),
      y(Us, Ws, 'a'),
      0 !== Is.lastIndex || 0 !== Ws.lastIndex),
    ra = Vs.BROKEN_CARET,
    na = void 0 !== /()??/.exec('')[1];
  (ea || na || ra || Xs || qs) &&
    (Ks = function(t) {
      var e,
        r,
        n,
        i,
        o,
        s,
        a,
        c = this,
        l = Ys(c),
        u = Ye(t),
        f = l.raw;
      if (f)
        return (
          (f.lastIndex = c.lastIndex),
          (e = y(Ks, f, u)),
          (c.lastIndex = f.lastIndex),
          e
        );
      var h = l.groups,
        p = ra && c.sticky,
        d = y(Ms, c),
        v = c.source,
        b = 0,
        g = u;
      if (
        (p &&
          ((d = Zs(d, 'y', '')),
          -1 === Qs(d, 'g') && (d += 'g'),
          (g = ta(u, c.lastIndex)),
          c.lastIndex > 0 &&
            (!c.multiline ||
              (c.multiline && '\n' !== Js(u, c.lastIndex - 1))) &&
            ((v = '(?: ' + v + ')'), (g = ' ' + g), b++),
          (r = new RegExp('^(?:' + v + ')', d))),
        na && (r = new RegExp('^' + v + '$(?!\\s)', d)),
        ea && (n = c.lastIndex),
        (i = y(Us, p ? r : c, g)),
        p
          ? i
            ? ((i.input = ta(i.input, b)),
              (i[0] = ta(i[0], b)),
              (i.index = c.lastIndex),
              (c.lastIndex += i[0].length))
            : (c.lastIndex = 0)
          : ea && i && (c.lastIndex = c.global ? i.index + i[0].length : n),
        na &&
          i &&
          i.length > 1 &&
          y(Gs, i[0], r, function() {
            for (o = 1; o < arguments.length - 2; o++)
              void 0 === arguments[o] && (i[o] = void 0);
          }),
        i && h)
      )
        for (i.groups = s = $r(null), o = 0; o < h.length; o++)
          s[(a = h[o])[0]] = i[a[1]];
      return i;
    });
  var ia = Ks;
  Be({ target: 'RegExp', proto: !0, forced: /./.exec !== ia }, { exec: ia });
  var oa = xt('species'),
    sa = RegExp.prototype,
    aa = function(t, e, r, n) {
      var i = xt(t),
        o = !d(function() {
          var e = {};
          return (
            (e[i] = function() {
              return 7;
            }),
            7 != ''[t](e)
          );
        }),
        s =
          o &&
          !d(function() {
            var e = !1,
              r = /a/;
            return (
              'split' === t &&
                (((r = {}).constructor = {}),
                (r.constructor[oa] = function() {
                  return r;
                }),
                (r.flags = ''),
                (r[i] = /./[i])),
              (r.exec = function() {
                return (e = !0), null;
              }),
              r[i](''),
              !e
            );
          });
      if (!o || !s || r) {
        var a = T(/./[i]),
          c = e(i, ''[t], function(t, e, r, n, i) {
            var s = T(t),
              c = e.exec;
            return c === ia || c === sa.exec
              ? o && !i
                ? { done: !0, value: a(e, r, n) }
                : { done: !0, value: s(r, e, n) }
              : { done: !1 };
          });
        le(String.prototype, t, c[0]), le(sa, i, c[1]);
      }
      n && Bt(sa[i], 'sham', !0);
    },
    ca = Nn.charAt,
    la = function(t, e, r) {
      return e + (r ? ca(t, e).length : 1);
    },
    ua = p.TypeError,
    fa = function(t, e) {
      var r = t.exec;
      if (W(r)) {
        var n = y(r, t, e);
        return null !== n && Ct(n), n;
      }
      if ('RegExp' === z(t)) return y(ia, t, e);
      throw ua('RegExp#exec called on incompatible receiver');
    };
  aa('match', function(t, e, r) {
    return [
      function(e) {
        var r = P(this),
          n = null == e ? void 0 : rt(e, t);
        return n ? y(n, e, r) : new RegExp(e)[t](Ye(r));
      },
      function(t) {
        var n = Ct(this),
          i = Ye(t),
          o = r(e, n, i);
        if (o.done) return o.value;
        if (!n.global) return fa(n, i);
        var s = n.unicode;
        n.lastIndex = 0;
        for (var a, c = [], l = 0; null !== (a = fa(n, i)); ) {
          var u = Ye(a[0]);
          (c[l] = u),
            '' === u && (n.lastIndex = la(i, ye(n.lastIndex), s)),
            l++;
        }
        return 0 === l ? null : c;
      }
    ];
  });
  var ha = $t.EXISTS,
    pa = Mt.f,
    da = Function.prototype,
    va = T(da.toString),
    ba = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
    ga = T(ba.exec);
  v &&
    !ha &&
    pa(da, 'name', {
      configurable: !0,
      get: function() {
        try {
          return ga(ba, va(this))[1];
        } catch (t) {
          return '';
        }
      }
    });
  var ya = Function.prototype,
    ma = ya.apply,
    xa = ya.call,
    Ea =
      ('object' == typeof Reflect && Reflect.apply) ||
      (b
        ? xa.bind(ma)
        : function() {
            return xa.apply(ma, arguments);
          }),
    wa = Math.floor,
    Oa = T(''.charAt),
    Sa = T(''.replace),
    ka = T(''.slice),
    Aa = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
    Ta = /\$([$&'`]|\d{1,2})/g,
    ja = function(t, e, r, n, i, o) {
      var s = r + t.length,
        a = n.length,
        c = Ta;
      return (
        void 0 !== i && ((i = lt(i)), (c = Aa)),
        Sa(o, c, function(o, c) {
          var l;
          switch (Oa(c, 0)) {
            case '$':
              return '$';
            case '&':
              return t;
            case '`':
              return ka(e, 0, r);
            case "'":
              return ka(e, s);
            case '<':
              l = i[ka(c, 1, -1)];
              break;
            default:
              var u = +c;
              if (0 === u) return o;
              if (u > a) {
                var f = wa(u / 10);
                return 0 === f
                  ? o
                  : f <= a
                  ? void 0 === n[f - 1]
                    ? Oa(c, 1)
                    : n[f - 1] + Oa(c, 1)
                  : o;
              }
              l = n[u - 1];
          }
          return void 0 === l ? '' : l;
        })
      );
    },
    Ra = xt('replace'),
    za = Math.max,
    Na = Math.min,
    _a = T([].concat),
    La = T([].push),
    Ca = T(''.indexOf),
    Pa = T(''.slice),
    Ia = '$0' === 'a'.replace(/./, '$0'),
    Wa = !!/./[Ra] && '' === /./[Ra]('a', '$0');
  function Ma(t) {
    return t && t.ownerDocument && t.ownerDocument.defaultView
      ? t.ownerDocument.defaultView
      : window;
  }
  function Ba(t) {
    return t && t.ownerDocument ? t.ownerDocument : document;
  }
  aa(
    'replace',
    function(t, e, r) {
      var n = Wa ? '$' : '$0';
      return [
        function(t, r) {
          var n = P(this),
            i = null == t ? void 0 : rt(t, Ra);
          return i ? y(i, t, n, r) : y(e, Ye(n), t, r);
        },
        function(t, i) {
          var o = Ct(this),
            s = Ye(t);
          if ('string' == typeof i && -1 === Ca(i, n) && -1 === Ca(i, '$<')) {
            var a = r(e, o, s, i);
            if (a.done) return a.value;
          }
          var c = W(i);
          c || (i = Ye(i));
          var l = o.global;
          if (l) {
            var u = o.unicode;
            o.lastIndex = 0;
          }
          for (var f = []; ; ) {
            var h = fa(o, s);
            if (null === h) break;
            if ((La(f, h), !l)) break;
            '' === Ye(h[0]) && (o.lastIndex = la(s, ye(o.lastIndex), u));
          }
          for (var p, d = '', v = 0, b = 0; b < f.length; b++) {
            for (
              var g = Ye((h = f[b])[0]),
                y = za(Na(pe(h.index), s.length), 0),
                m = [],
                x = 1;
              x < h.length;
              x++
            )
              La(m, void 0 === (p = h[x]) ? p : String(p));
            var E = h.groups;
            if (c) {
              var w = _a([g], m, y, s);
              void 0 !== E && La(w, E);
              var O = Ye(Ea(i, void 0, w));
            } else O = ja(g, s, y, m, E, i);
            y >= v && ((d += Pa(s, v, y) + O), (v = y + g.length));
          }
          return d + Pa(s, v);
        }
      ];
    },
    !!d(function() {
      var t = /./;
      return (
        (t.exec = function() {
          var t = [];
          return (t.groups = { a: '7' }), t;
        }),
        '7' !== ''.replace(t, '$<a>')
      );
    }) ||
      !Ia ||
      Wa
  );
  var Da = null,
    Fa = null;
  function Va(t) {
    if (null === Da) {
      var e = Ba(t);
      if (void 0 === e) return (Da = 0);
      var r = e.body,
        n = e.createElement('div');
      n.classList.add('simplebar-hide-scrollbar'), r.appendChild(n);
      var i = n.getBoundingClientRect().right;
      r.removeChild(n), (Da = i);
    }
    return Da;
  }
  Rs &&
    window.addEventListener('resize', function() {
      Fa !== window.devicePixelRatio &&
        ((Fa = window.devicePixelRatio), (Da = null));
    });
  var $a = (function() {
    function t(e, r) {
      var n = this;
      (this.onScroll = function() {
        var t = Ma(n.el);
        n.scrollXTicking ||
          (t.requestAnimationFrame(n.scrollX), (n.scrollXTicking = !0)),
          n.scrollYTicking ||
            (t.requestAnimationFrame(n.scrollY), (n.scrollYTicking = !0));
      }),
        (this.scrollX = function() {
          n.axis.x.isOverflowing &&
            (n.showScrollbar('x'), n.positionScrollbar('x')),
            (n.scrollXTicking = !1);
        }),
        (this.scrollY = function() {
          n.axis.y.isOverflowing &&
            (n.showScrollbar('y'), n.positionScrollbar('y')),
            (n.scrollYTicking = !1);
        }),
        (this.onMouseEnter = function() {
          n.showScrollbar('x'), n.showScrollbar('y');
        }),
        (this.onMouseMove = function(t) {
          (n.mouseX = t.clientX),
            (n.mouseY = t.clientY),
            (n.axis.x.isOverflowing || n.axis.x.forceVisible) &&
              n.onMouseMoveForAxis('x'),
            (n.axis.y.isOverflowing || n.axis.y.forceVisible) &&
              n.onMouseMoveForAxis('y');
        }),
        (this.onMouseLeave = function() {
          n.onMouseMove.cancel(),
            (n.axis.x.isOverflowing || n.axis.x.forceVisible) &&
              n.onMouseLeaveForAxis('x'),
            (n.axis.y.isOverflowing || n.axis.y.forceVisible) &&
              n.onMouseLeaveForAxis('y'),
            (n.mouseX = -1),
            (n.mouseY = -1);
        }),
        (this.onWindowResize = function() {
          (n.scrollbarWidth = n.getScrollbarWidth()), n.hideNativeScrollbar();
        }),
        (this.hideScrollbars = function() {
          (n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect()),
            (n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect()),
            n.isWithinBounds(n.axis.y.track.rect) ||
              (n.axis.y.scrollbar.el.classList.remove(n.classNames.visible),
              (n.axis.y.isVisible = !1)),
            n.isWithinBounds(n.axis.x.track.rect) ||
              (n.axis.x.scrollbar.el.classList.remove(n.classNames.visible),
              (n.axis.x.isVisible = !1));
        }),
        (this.onPointerEvent = function(t) {
          var e, r;
          (n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect()),
            (n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect()),
            (n.axis.x.isOverflowing || n.axis.x.forceVisible) &&
              (e = n.isWithinBounds(n.axis.x.track.rect)),
            (n.axis.y.isOverflowing || n.axis.y.forceVisible) &&
              (r = n.isWithinBounds(n.axis.y.track.rect)),
            (e || r) &&
              (t.preventDefault(),
              t.stopPropagation(),
              'mousedown' === t.type &&
                (e &&
                  ((n.axis.x.scrollbar.rect = n.axis.x.scrollbar.el.getBoundingClientRect()),
                  n.isWithinBounds(n.axis.x.scrollbar.rect)
                    ? n.onDragStart(t, 'x')
                    : n.onTrackClick(t, 'x')),
                r &&
                  ((n.axis.y.scrollbar.rect = n.axis.y.scrollbar.el.getBoundingClientRect()),
                  n.isWithinBounds(n.axis.y.scrollbar.rect)
                    ? n.onDragStart(t, 'y')
                    : n.onTrackClick(t, 'y'))));
        }),
        (this.drag = function(e) {
          var r = n.axis[n.draggedAxis].track,
            i = r.rect[n.axis[n.draggedAxis].sizeAttr],
            o = n.axis[n.draggedAxis].scrollbar,
            s = n.contentWrapperEl[n.axis[n.draggedAxis].scrollSizeAttr],
            a = parseInt(n.elStyles[n.axis[n.draggedAxis].sizeAttr], 10);
          e.preventDefault(), e.stopPropagation();
          var c =
            ((('y' === n.draggedAxis ? e.pageY : e.pageX) -
              r.rect[n.axis[n.draggedAxis].offsetAttr] -
              n.axis[n.draggedAxis].dragOffset) /
              (i - o.size)) *
            (s - a);
          'x' === n.draggedAxis &&
            ((c =
              n.isRtl && t.getRtlHelpers().isRtlScrollbarInverted
                ? c - (i + o.size)
                : c),
            (c = n.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -c : c)),
            (n.contentWrapperEl[n.axis[n.draggedAxis].scrollOffsetAttr] = c);
        }),
        (this.onEndDrag = function(t) {
          var e = Ba(n.el),
            r = Ma(n.el);
          t.preventDefault(),
            t.stopPropagation(),
            n.el.classList.remove(n.classNames.dragging),
            e.removeEventListener('mousemove', n.drag, !0),
            e.removeEventListener('mouseup', n.onEndDrag, !0),
            (n.removePreventClickId = r.setTimeout(function() {
              e.removeEventListener('click', n.preventClick, !0),
                e.removeEventListener('dblclick', n.preventClick, !0),
                (n.removePreventClickId = null);
            }));
        }),
        (this.preventClick = function(t) {
          t.preventDefault(), t.stopPropagation();
        }),
        (this.el = e),
        (this.minScrollbarWidth = 20),
        (this.options = Object.assign({}, t.defaultOptions, r)),
        (this.classNames = Object.assign(
          {},
          t.defaultOptions.classNames,
          this.options.classNames
        )),
        (this.axis = {
          x: {
            scrollOffsetAttr: 'scrollLeft',
            sizeAttr: 'width',
            scrollSizeAttr: 'scrollWidth',
            offsetSizeAttr: 'offsetWidth',
            offsetAttr: 'left',
            overflowAttr: 'overflowX',
            dragOffset: 0,
            isOverflowing: !0,
            isVisible: !1,
            forceVisible: !1,
            track: {},
            scrollbar: {}
          },
          y: {
            scrollOffsetAttr: 'scrollTop',
            sizeAttr: 'height',
            scrollSizeAttr: 'scrollHeight',
            offsetSizeAttr: 'offsetHeight',
            offsetAttr: 'top',
            overflowAttr: 'overflowY',
            dragOffset: 0,
            isOverflowing: !0,
            isVisible: !1,
            forceVisible: !1,
            track: {},
            scrollbar: {}
          }
        }),
        (this.removePreventClickId = null),
        t.instances.has(this.el) ||
          ((this.recalculate = to(this.recalculate.bind(this), 64)),
          (this.onMouseMove = to(this.onMouseMove.bind(this), 64)),
          (this.hideScrollbars = bo(
            this.hideScrollbars.bind(this),
            this.options.timeout
          )),
          (this.onWindowResize = bo(this.onWindowResize.bind(this), 64, {
            leading: !0
          })),
          (t.getRtlHelpers = $o(t.getRtlHelpers)),
          this.init());
    }
    (t.getRtlHelpers = function() {
      var e = document.createElement('div');
      e.innerHTML =
        '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
      var r = e.firstElementChild;
      document.body.appendChild(r);
      var n = r.firstElementChild;
      r.scrollLeft = 0;
      var i = t.getOffset(r),
        o = t.getOffset(n);
      r.scrollLeft = 999;
      var s = t.getOffset(n);
      return {
        isRtlScrollingInverted: i.left !== o.left && o.left - s.left != 0,
        isRtlScrollbarInverted: i.left !== o.left
      };
    }),
      (t.getOffset = function(t) {
        var e = t.getBoundingClientRect(),
          r = Ba(t),
          n = Ma(t);
        return {
          top: e.top + (n.pageYOffset || r.documentElement.scrollTop),
          left: e.left + (n.pageXOffset || r.documentElement.scrollLeft)
        };
      });
    var e = t.prototype;
    return (
      (e.init = function() {
        t.instances.set(this.el, this),
          Rs &&
            (this.initDOM(),
            this.setAccessibilityAttributes(),
            (this.scrollbarWidth = this.getScrollbarWidth()),
            this.recalculate(),
            this.initListeners());
      }),
      (e.initDOM = function() {
        var t = this;
        if (
          Array.prototype.filter.call(this.el.children, function(e) {
            return e.classList.contains(t.classNames.wrapper);
          }).length
        )
          (this.wrapperEl = this.el.querySelector(
            '.' + this.classNames.wrapper
          )),
            (this.contentWrapperEl =
              this.options.scrollableNode ||
              this.el.querySelector('.' + this.classNames.contentWrapper)),
            (this.contentEl =
              this.options.contentNode ||
              this.el.querySelector('.' + this.classNames.contentEl)),
            (this.offsetEl = this.el.querySelector(
              '.' + this.classNames.offset
            )),
            (this.maskEl = this.el.querySelector('.' + this.classNames.mask)),
            (this.placeholderEl = this.findChild(
              this.wrapperEl,
              '.' + this.classNames.placeholder
            )),
            (this.heightAutoObserverWrapperEl = this.el.querySelector(
              '.' + this.classNames.heightAutoObserverWrapperEl
            )),
            (this.heightAutoObserverEl = this.el.querySelector(
              '.' + this.classNames.heightAutoObserverEl
            )),
            (this.axis.x.track.el = this.findChild(
              this.el,
              '.' + this.classNames.track + '.' + this.classNames.horizontal
            )),
            (this.axis.y.track.el = this.findChild(
              this.el,
              '.' + this.classNames.track + '.' + this.classNames.vertical
            ));
        else {
          for (
            this.wrapperEl = document.createElement('div'),
              this.contentWrapperEl = document.createElement('div'),
              this.offsetEl = document.createElement('div'),
              this.maskEl = document.createElement('div'),
              this.contentEl = document.createElement('div'),
              this.placeholderEl = document.createElement('div'),
              this.heightAutoObserverWrapperEl = document.createElement('div'),
              this.heightAutoObserverEl = document.createElement('div'),
              this.wrapperEl.classList.add(this.classNames.wrapper),
              this.contentWrapperEl.classList.add(
                this.classNames.contentWrapper
              ),
              this.offsetEl.classList.add(this.classNames.offset),
              this.maskEl.classList.add(this.classNames.mask),
              this.contentEl.classList.add(this.classNames.contentEl),
              this.placeholderEl.classList.add(this.classNames.placeholder),
              this.heightAutoObserverWrapperEl.classList.add(
                this.classNames.heightAutoObserverWrapperEl
              ),
              this.heightAutoObserverEl.classList.add(
                this.classNames.heightAutoObserverEl
              );
            this.el.firstChild;

          )
            this.contentEl.appendChild(this.el.firstChild);
          this.contentWrapperEl.appendChild(this.contentEl),
            this.offsetEl.appendChild(this.contentWrapperEl),
            this.maskEl.appendChild(this.offsetEl),
            this.heightAutoObserverWrapperEl.appendChild(
              this.heightAutoObserverEl
            ),
            this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
            this.wrapperEl.appendChild(this.maskEl),
            this.wrapperEl.appendChild(this.placeholderEl),
            this.el.appendChild(this.wrapperEl);
        }
        if (!this.axis.x.track.el || !this.axis.y.track.el) {
          var e = document.createElement('div'),
            r = document.createElement('div');
          e.classList.add(this.classNames.track),
            r.classList.add(this.classNames.scrollbar),
            e.appendChild(r),
            (this.axis.x.track.el = e.cloneNode(!0)),
            this.axis.x.track.el.classList.add(this.classNames.horizontal),
            (this.axis.y.track.el = e.cloneNode(!0)),
            this.axis.y.track.el.classList.add(this.classNames.vertical),
            this.el.appendChild(this.axis.x.track.el),
            this.el.appendChild(this.axis.y.track.el);
        }
        (this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector(
          '.' + this.classNames.scrollbar
        )),
          (this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector(
            '.' + this.classNames.scrollbar
          )),
          this.options.autoHide ||
            (this.axis.x.scrollbar.el.classList.add(this.classNames.visible),
            this.axis.y.scrollbar.el.classList.add(this.classNames.visible)),
          this.el.setAttribute('data-simplebar', 'init');
      }),
      (e.setAccessibilityAttributes = function() {
        var t = this.options.ariaLabel || 'scrollable content';
        this.contentWrapperEl.setAttribute('tabindex', '0'),
          this.contentWrapperEl.setAttribute('role', 'region'),
          this.contentWrapperEl.setAttribute('aria-label', t);
      }),
      (e.initListeners = function() {
        var t = this,
          e = Ma(this.el);
        this.options.autoHide &&
          this.el.addEventListener('mouseenter', this.onMouseEnter),
          ['mousedown', 'click', 'dblclick'].forEach(function(e) {
            t.el.addEventListener(e, t.onPointerEvent, !0);
          }),
          ['touchstart', 'touchend', 'touchmove'].forEach(function(e) {
            t.el.addEventListener(e, t.onPointerEvent, {
              capture: !0,
              passive: !0
            });
          }),
          this.el.addEventListener('mousemove', this.onMouseMove),
          this.el.addEventListener('mouseleave', this.onMouseLeave),
          this.contentWrapperEl.addEventListener('scroll', this.onScroll),
          e.addEventListener('resize', this.onWindowResize);
        var r = !1,
          n = e.ResizeObserver || js;
        (this.resizeObserver = new n(function() {
          r && t.recalculate();
        })),
          this.resizeObserver.observe(this.el),
          this.resizeObserver.observe(this.contentEl),
          e.requestAnimationFrame(function() {
            r = !0;
          }),
          (this.mutationObserver = new e.MutationObserver(this.recalculate)),
          this.mutationObserver.observe(this.contentEl, {
            childList: !0,
            subtree: !0,
            characterData: !0
          });
      }),
      (e.recalculate = function() {
        var t = Ma(this.el);
        (this.elStyles = t.getComputedStyle(this.el)),
          (this.isRtl = 'rtl' === this.elStyles.direction);
        var e = this.heightAutoObserverEl.offsetHeight <= 1,
          r = this.heightAutoObserverEl.offsetWidth <= 1,
          n = this.contentEl.offsetWidth,
          i = this.contentWrapperEl.offsetWidth,
          o = this.elStyles.overflowX,
          s = this.elStyles.overflowY;
        (this.contentEl.style.padding =
          this.elStyles.paddingTop +
          ' ' +
          this.elStyles.paddingRight +
          ' ' +
          this.elStyles.paddingBottom +
          ' ' +
          this.elStyles.paddingLeft),
          (this.wrapperEl.style.margin =
            '-' +
            this.elStyles.paddingTop +
            ' -' +
            this.elStyles.paddingRight +
            ' -' +
            this.elStyles.paddingBottom +
            ' -' +
            this.elStyles.paddingLeft);
        var a = this.contentEl.scrollHeight,
          c = this.contentEl.scrollWidth;
        (this.contentWrapperEl.style.height = e ? 'auto' : '100%'),
          (this.placeholderEl.style.width = r ? n + 'px' : 'auto'),
          (this.placeholderEl.style.height = a + 'px');
        var l = this.contentWrapperEl.offsetHeight;
        (this.axis.x.isOverflowing = c > n),
          (this.axis.y.isOverflowing = a > l),
          (this.axis.x.isOverflowing =
            'hidden' !== o && this.axis.x.isOverflowing),
          (this.axis.y.isOverflowing =
            'hidden' !== s && this.axis.y.isOverflowing),
          (this.axis.x.forceVisible =
            'x' === this.options.forceVisible ||
            !0 === this.options.forceVisible),
          (this.axis.y.forceVisible =
            'y' === this.options.forceVisible ||
            !0 === this.options.forceVisible),
          this.hideNativeScrollbar();
        var u = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
          f = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
        (this.axis.x.isOverflowing = this.axis.x.isOverflowing && c > i - f),
          (this.axis.y.isOverflowing = this.axis.y.isOverflowing && a > l - u),
          (this.axis.x.scrollbar.size = this.getScrollbarSize('x')),
          (this.axis.y.scrollbar.size = this.getScrollbarSize('y')),
          (this.axis.x.scrollbar.el.style.width =
            this.axis.x.scrollbar.size + 'px'),
          (this.axis.y.scrollbar.el.style.height =
            this.axis.y.scrollbar.size + 'px'),
          this.positionScrollbar('x'),
          this.positionScrollbar('y'),
          this.toggleTrackVisibility('x'),
          this.toggleTrackVisibility('y');
      }),
      (e.getScrollbarSize = function(t) {
        if ((void 0 === t && (t = 'y'), !this.axis[t].isOverflowing)) return 0;
        var e,
          r = this.contentEl[this.axis[t].scrollSizeAttr],
          n = this.axis[t].track.el[this.axis[t].offsetSizeAttr],
          i = n / r;
        return (
          (e = Math.max(~~(i * n), this.options.scrollbarMinSize)),
          this.options.scrollbarMaxSize &&
            (e = Math.min(e, this.options.scrollbarMaxSize)),
          e
        );
      }),
      (e.positionScrollbar = function(e) {
        if ((void 0 === e && (e = 'y'), this.axis[e].isOverflowing)) {
          var r = this.contentWrapperEl[this.axis[e].scrollSizeAttr],
            n = this.axis[e].track.el[this.axis[e].offsetSizeAttr],
            i = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
            o = this.axis[e].scrollbar,
            s = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
            a =
              (s =
                'x' === e &&
                this.isRtl &&
                t.getRtlHelpers().isRtlScrollingInverted
                  ? -s
                  : s) /
              (r - i),
            c = ~~((n - o.size) * a);
          (c =
            'x' === e && this.isRtl && t.getRtlHelpers().isRtlScrollbarInverted
              ? c + (n - o.size)
              : c),
            (o.el.style.transform =
              'x' === e
                ? 'translate3d(' + c + 'px, 0, 0)'
                : 'translate3d(0, ' + c + 'px, 0)');
        }
      }),
      (e.toggleTrackVisibility = function(t) {
        void 0 === t && (t = 'y');
        var e = this.axis[t].track.el,
          r = this.axis[t].scrollbar.el;
        this.axis[t].isOverflowing || this.axis[t].forceVisible
          ? ((e.style.visibility = 'visible'),
            (this.contentWrapperEl.style[this.axis[t].overflowAttr] = 'scroll'))
          : ((e.style.visibility = 'hidden'),
            (this.contentWrapperEl.style[this.axis[t].overflowAttr] =
              'hidden')),
          this.axis[t].isOverflowing
            ? (r.style.display = 'block')
            : (r.style.display = 'none');
      }),
      (e.hideNativeScrollbar = function() {
        (this.offsetEl.style[this.isRtl ? 'left' : 'right'] =
          this.axis.y.isOverflowing || this.axis.y.forceVisible
            ? '-' + this.scrollbarWidth + 'px'
            : 0),
          (this.offsetEl.style.bottom =
            this.axis.x.isOverflowing || this.axis.x.forceVisible
              ? '-' + this.scrollbarWidth + 'px'
              : 0);
      }),
      (e.onMouseMoveForAxis = function(t) {
        void 0 === t && (t = 'y'),
          (this.axis[t].track.rect = this.axis[
            t
          ].track.el.getBoundingClientRect()),
          (this.axis[t].scrollbar.rect = this.axis[
            t
          ].scrollbar.el.getBoundingClientRect()),
          this.isWithinBounds(this.axis[t].scrollbar.rect)
            ? this.axis[t].scrollbar.el.classList.add(this.classNames.hover)
            : this.axis[t].scrollbar.el.classList.remove(this.classNames.hover),
          this.isWithinBounds(this.axis[t].track.rect)
            ? (this.showScrollbar(t),
              this.axis[t].track.el.classList.add(this.classNames.hover))
            : this.axis[t].track.el.classList.remove(this.classNames.hover);
      }),
      (e.onMouseLeaveForAxis = function(t) {
        void 0 === t && (t = 'y'),
          this.axis[t].track.el.classList.remove(this.classNames.hover),
          this.axis[t].scrollbar.el.classList.remove(this.classNames.hover);
      }),
      (e.showScrollbar = function(t) {
        void 0 === t && (t = 'y');
        var e = this.axis[t].scrollbar.el;
        this.axis[t].isVisible ||
          (e.classList.add(this.classNames.visible),
          (this.axis[t].isVisible = !0)),
          this.options.autoHide && this.hideScrollbars();
      }),
      (e.onDragStart = function(t, e) {
        void 0 === e && (e = 'y');
        var r = Ba(this.el),
          n = Ma(this.el),
          i = this.axis[e].scrollbar,
          o = 'y' === e ? t.pageY : t.pageX;
        (this.axis[e].dragOffset = o - i.rect[this.axis[e].offsetAttr]),
          (this.draggedAxis = e),
          this.el.classList.add(this.classNames.dragging),
          r.addEventListener('mousemove', this.drag, !0),
          r.addEventListener('mouseup', this.onEndDrag, !0),
          null === this.removePreventClickId
            ? (r.addEventListener('click', this.preventClick, !0),
              r.addEventListener('dblclick', this.preventClick, !0))
            : (n.clearTimeout(this.removePreventClickId),
              (this.removePreventClickId = null));
      }),
      (e.onTrackClick = function(t, e) {
        var r = this;
        if ((void 0 === e && (e = 'y'), this.options.clickOnTrack)) {
          var n = Ma(this.el);
          this.axis[e].scrollbar.rect = this.axis[
            e
          ].scrollbar.el.getBoundingClientRect();
          var i = this.axis[e].scrollbar.rect[this.axis[e].offsetAttr],
            o = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
            s = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
            a = ('y' === e ? this.mouseY - i : this.mouseX - i) < 0 ? -1 : 1,
            c = -1 === a ? s - o : s + o;
          !(function t() {
            var i, o;
            -1 === a
              ? s > c &&
                ((s -= r.options.clickOnTrackSpeed),
                r.contentWrapperEl.scrollTo(
                  (((i = {})[r.axis[e].offsetAttr] = s), i)
                ),
                n.requestAnimationFrame(t))
              : s < c &&
                ((s += r.options.clickOnTrackSpeed),
                r.contentWrapperEl.scrollTo(
                  (((o = {})[r.axis[e].offsetAttr] = s), o)
                ),
                n.requestAnimationFrame(t));
          })();
        }
      }),
      (e.getContentElement = function() {
        return this.contentEl;
      }),
      (e.getScrollElement = function() {
        return this.contentWrapperEl;
      }),
      (e.getScrollbarWidth = function() {
        try {
          return 'none' ===
            getComputedStyle(this.contentWrapperEl, '::-webkit-scrollbar')
              .display ||
            'scrollbarWidth' in document.documentElement.style ||
            '-ms-overflow-style' in document.documentElement.style
            ? 0
            : Va(this.el);
        } catch (t) {
          return Va(this.el);
        }
      }),
      (e.removeListeners = function() {
        var t = this,
          e = Ma(this.el);
        this.options.autoHide &&
          this.el.removeEventListener('mouseenter', this.onMouseEnter),
          ['mousedown', 'click', 'dblclick'].forEach(function(e) {
            t.el.removeEventListener(e, t.onPointerEvent, !0);
          }),
          ['touchstart', 'touchend', 'touchmove'].forEach(function(e) {
            t.el.removeEventListener(e, t.onPointerEvent, {
              capture: !0,
              passive: !0
            });
          }),
          this.el.removeEventListener('mousemove', this.onMouseMove),
          this.el.removeEventListener('mouseleave', this.onMouseLeave),
          this.contentWrapperEl &&
            this.contentWrapperEl.removeEventListener('scroll', this.onScroll),
          e.removeEventListener('resize', this.onWindowResize),
          this.mutationObserver && this.mutationObserver.disconnect(),
          this.resizeObserver && this.resizeObserver.disconnect(),
          this.recalculate.cancel(),
          this.onMouseMove.cancel(),
          this.hideScrollbars.cancel(),
          this.onWindowResize.cancel();
      }),
      (e.unMount = function() {
        this.removeListeners(), t.instances.delete(this.el);
      }),
      (e.isWithinBounds = function(t) {
        return (
          this.mouseX >= t.left &&
          this.mouseX <= t.left + t.width &&
          this.mouseY >= t.top &&
          this.mouseY <= t.top + t.height
        );
      }),
      (e.findChild = function(t, e) {
        var r =
          t.matches ||
          t.webkitMatchesSelector ||
          t.mozMatchesSelector ||
          t.msMatchesSelector;
        return Array.prototype.filter.call(t.children, function(t) {
          return r.call(t, e);
        })[0];
      }),
      t
    );
  })();
  ($a.defaultOptions = {
    autoHide: !0,
    forceVisible: !1,
    clickOnTrack: !0,
    clickOnTrackSpeed: 40,
    classNames: {
      contentEl: 'simplebar-content',
      contentWrapper: 'simplebar-content-wrapper',
      offset: 'simplebar-offset',
      mask: 'simplebar-mask',
      wrapper: 'simplebar-wrapper',
      placeholder: 'simplebar-placeholder',
      scrollbar: 'simplebar-scrollbar',
      track: 'simplebar-track',
      heightAutoObserverWrapperEl: 'simplebar-height-auto-observer-wrapper',
      heightAutoObserverEl: 'simplebar-height-auto-observer',
      visible: 'simplebar-visible',
      horizontal: 'simplebar-horizontal',
      vertical: 'simplebar-vertical',
      hover: 'simplebar-hover',
      dragging: 'simplebar-dragging'
    },
    scrollbarMinSize: 25,
    scrollbarMaxSize: 0,
    timeout: 1e3
  }),
    ($a.instances = new WeakMap());
  var Xa = ['children', 'scrollableNodeProps', 'tag'],
    Ha = r.forwardRef(function(e, n) {
      var o,
        c = e.children,
        l = e.scrollableNodeProps,
        u = void 0 === l ? {} : l,
        f = e.tag,
        h = void 0 === f ? 'div' : f,
        p = a(e, Xa),
        d = h,
        v = t.useRef(),
        b = t.useRef(),
        g = t.useRef(),
        y = {},
        m = {},
        x = [];
      return (
        Object.keys(p).forEach(function(t) {
          Object.prototype.hasOwnProperty.call($a.defaultOptions, t)
            ? (y[t] = p[t])
            : t.match(/data-simplebar-(.+)/) && 'data-simplebar-direction' !== t
            ? x.push({ name: t, value: p[t] })
            : (m[t] = p[t]);
        }),
        x.length &&
          console.warn(
            'simplebar-react: this way of passing options is deprecated. Pass it like normal props instead:\n        \'data-simplebar-auto-hide="false"\' —> \'autoHide="false"\'\n      '
          ),
        t.useEffect(function() {
          var t;
          return (
            (v = u.ref || v),
            b.current &&
              ((o = new $a(
                b.current,
                i(
                  i(
                    i(
                      i(
                        {},
                        ((t = x),
                        Array.prototype.reduce.call(
                          t,
                          function(t, e) {
                            var r = e.name.match(/data-simplebar-(.+)/);
                            if (r) {
                              var n = r[1].replace(/\W+(.)/g, function(t, e) {
                                return e.toUpperCase();
                              });
                              switch (e.value) {
                                case 'true':
                                  t[n] = !0;
                                  break;
                                case 'false':
                                  t[n] = !1;
                                  break;
                                case void 0:
                                  t[n] = !0;
                                  break;
                                default:
                                  t[n] = e.value;
                              }
                            }
                            return t;
                          },
                          {}
                        ))
                      ),
                      y
                    ),
                    v && { scrollableNode: v.current }
                  ),
                  g.current && { contentNode: g.current }
                )
              )),
              n && (n.current = o)),
            function() {
              o.unMount(), (o = null);
            }
          );
        }, []),
        r.createElement(
          d,
          s({ ref: b, 'data-simplebar': !0 }, m),
          r.createElement(
            'div',
            { className: 'simplebar-wrapper' },
            r.createElement(
              'div',
              { className: 'simplebar-height-auto-observer-wrapper' },
              r.createElement('div', {
                className: 'simplebar-height-auto-observer'
              })
            ),
            r.createElement(
              'div',
              { className: 'simplebar-mask' },
              r.createElement(
                'div',
                { className: 'simplebar-offset' },
                'function' == typeof c
                  ? c({ scrollableNodeRef: v, contentNodeRef: g })
                  : r.createElement(
                      'div',
                      s({}, u, {
                        className: 'simplebar-content-wrapper'.concat(
                          u.className ? ' '.concat(u.className) : ''
                        )
                      }),
                      r.createElement(
                        'div',
                        { className: 'simplebar-content' },
                        c
                      )
                    )
              )
            ),
            r.createElement('div', { className: 'simplebar-placeholder' })
          ),
          r.createElement(
            'div',
            { className: 'simplebar-track simplebar-horizontal' },
            r.createElement('div', { className: 'simplebar-scrollbar' })
          ),
          r.createElement(
            'div',
            { className: 'simplebar-track simplebar-vertical' },
            r.createElement('div', { className: 'simplebar-scrollbar' })
          )
        )
      );
    });
  return (
    (Ha.displayName = 'SimpleBar'),
    (Ha.propTypes = {
      children: e.oneOfType([e.node, e.func]),
      scrollableNodeProps: e.object,
      tag: e.string
    }),
    Ha
  );
});
