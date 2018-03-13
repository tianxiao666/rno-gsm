// OpenLayers 3. See https://openlayers.org/
// License: https://raw.githubusercontent.com/openlayers/ol3/master/LICENSE.md
// Version: v3.19.0
;(function (root, factory) {
    if (typeof exports === "object") {
        module.exports = factory();
    } else if (typeof define === "function" && define.amd) {
        define([], factory);
    } else {
        root.ol = factory();
    }
}(this, function () {
    var OPENLAYERS = {};
    var k, aa = this;

    function t(a, b) {
        var c = a.split("."), d = OPENLAYERS || aa;
        c[0] in d || !d.execScript || d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift());)c.length || void 0 === b ? d[e] ? d = d[e] : d = d[e] = {} : d[e] = b
    };
    var ba, ca;

    function v(a, b) {
        a.prototype = Object.create(b.prototype);
        a.prototype.constructor = a
    }

    function da() {
    }

    function ea(a) {
        return a.On || (a.On = ++fa)
    }

    var fa = 0;

    function ga(a) {
        this.message = "Assertion failed. See https://openlayers.org/en/v3.19.0/doc/errors/#" + a + " for details.";
        this.code = a;
        this.name = "AssertionError"
    }

    v(ga, Error);
    function ha(a, b) {
        if (!a)throw new ga(b);
    };
    function ia(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    var ja = function () {
        var a;
        "cosh" in Math ? a = Math.cosh : a = function (a) {
            a = Math.exp(a);
            return (a + 1 / a) / 2
        };
        return a
    }();

    function ka(a) {
        ha(0 < a, 29);
        return Math.pow(2, Math.ceil(Math.log(a) / Math.LN2))
    }

    function la(a, b, c, d, e, f) {
        var g = e - c, h = f - d;
        if (0 !== g || 0 !== h) {
            var l = ((a - c) * g + (b - d) * h) / (g * g + h * h);
            1 < l ? (c = e, d = f) : 0 < l && (c += g * l, d += h * l)
        }
        return ma(a, b, c, d)
    }

    function ma(a, b, c, d) {
        a = c - a;
        b = d - b;
        return a * a + b * b
    }

    function na(a) {
        return a * Math.PI / 180
    }

    function oa(a, b) {
        var c = a % b;
        return 0 > c * b ? c + b : c
    }

    function pa(a, b, c) {
        return a + c * (b - a)
    };
    function qa(a) {
        return function (b) {
            if (b)return [ia(b[0], a[0], a[2]), ia(b[1], a[1], a[3])]
        }
    }

    function ra(a) {
        return a
    };
    function sa(a, b, c) {
        this.center = a;
        this.resolution = b;
        this.rotation = c
    };
    var ua = "function" === typeof Object.assign ? Object.assign : function (a, b) {
        if (!a || !a)throw new TypeError("Cannot convert undefined or null to object");
        for (var c = Object(a), d = 1, e = arguments.length; d < e; ++d) {
            var f = arguments[d];
            if (void 0 !== f && null !== f)for (var g in f)f.hasOwnProperty(g) && (c[g] = f[g])
        }
        return c
    };

    function va(a) {
        for (var b in a)delete a[b]
    }

    function wa(a) {
        var b = [], c;
        for (c in a)b.push(a[c]);
        return b
    }

    function xa(a) {
        for (var b in a)return !1;
        return !b
    };
    function ya(a) {
        function b(b) {
            var d = a.listener, e = a.jg || a.target;
            a.lg && za(a);
            return d.call(e, b)
        }

        return a.kg = b
    }

    function Aa(a, b, c, d) {
        for (var e, f = 0, g = a.length; f < g; ++f)if (e = a[f], e.listener === b && e.jg === c)return d && (e.deleteIndex = f), e
    }

    function Ba(a, b) {
        var c = a.bb;
        return c ? c[b] : void 0
    }

    function Ca(a) {
        var b = a.bb;
        b || (b = a.bb = {});
        return b
    }

    function Da(a, b) {
        var c = Ba(a, b);
        if (c) {
            for (var d = 0, e = c.length; d < e; ++d)a.removeEventListener(b, c[d].kg), va(c[d]);
            c.length = 0;
            if (c = a.bb) delete c[b], 0 === Object.keys(c).length && delete a.bb
        }
    }

    function w(a, b, c, d, e) {
        var f = Ca(a), g = f[b];
        g || (g = f[b] = []);
        (f = Aa(g, c, d, !1)) ? e || (f.lg = !1) : (f = {
            jg: d,
            lg: !!e,
            listener: c,
            target: a,
            type: b
        }, a.addEventListener(b, ya(f)), g.push(f));
        return f
    }

    function Ea(a, b, c, d) {
        return w(a, b, c, d, !0)
    }

    function Fa(a, b, c, d) {
        (a = Ba(a, b)) && (c = Aa(a, c, d, !0)) && za(c)
    }

    function za(a) {
        if (a && a.target) {
            a.target.removeEventListener(a.type, a.kg);
            var b = Ba(a.target, a.type);
            if (b) {
                var c = "deleteIndex" in a ? a.deleteIndex : b.indexOf(a);
                -1 !== c && b.splice(c, 1);
                0 === b.length && Da(a.target, a.type)
            }
            va(a)
        }
    }

    function Ga(a) {
        var b = Ca(a), c;
        for (c in b)Da(a, c)
    };
    function Ia() {
    }

    Ia.prototype.Ib = !1;
    function Ja(a) {
        a.Ib || (a.Ib = !0, a.la())
    }

    Ia.prototype.la = da;
    function La(a) {
        this.type = a;
        this.target = null
    }

    La.prototype.preventDefault = La.prototype.stopPropagation = function () {
        this.io = !0
    };
    function Ma(a) {
        a.stopPropagation()
    };
    function Na() {
        this.Va = {};
        this.za = {};
        this.na = {}
    }

    v(Na, Ia);
    Na.prototype.addEventListener = function (a, b) {
        var c = this.na[a];
        c || (c = this.na[a] = []);
        -1 === c.indexOf(b) && c.push(b)
    };
    Na.prototype.b = function (a) {
        var b = "string" === typeof a ? new La(a) : a;
        a = b.type;
        b.target = this;
        var c = this.na[a], d;
        if (c) {
            a in this.za || (this.za[a] = 0, this.Va[a] = 0);
            ++this.za[a];
            for (var e = 0, f = c.length; e < f; ++e)if (!1 === c[e].call(this, b) || b.io) {
                d = !1;
                break
            }
            --this.za[a];
            if (0 === this.za[a]) {
                b = this.Va[a];
                for (delete this.Va[a]; b--;)this.removeEventListener(a, da);
                delete this.za[a]
            }
            return d
        }
    };
    Na.prototype.la = function () {
        Ga(this)
    };
    function Oa(a, b) {
        return b ? b in a.na : 0 < Object.keys(a.na).length
    }

    Na.prototype.removeEventListener = function (a, b) {
        var c = this.na[a];
        if (c) {
            var d = c.indexOf(b);
            a in this.Va ? (c[d] = da, ++this.Va[a]) : (c.splice(d, 1), 0 === c.length && delete this.na[a])
        }
    };
    function Pa() {
        Na.call(this);
        this.g = 0
    }

    v(Pa, Na);
    function Qa(a) {
        if (Array.isArray(a))for (var b = 0, c = a.length; b < c; ++b)za(a[b]); else za(a)
    }

    k = Pa.prototype;
    k.v = function () {
        ++this.g;
        this.b("change")
    };
    k.K = function () {
        return this.g
    };
    k.I = function (a, b, c) {
        if (Array.isArray(a)) {
            for (var d = a.length, e = Array(d), f = 0; f < d; ++f)e[f] = w(this, a[f], b, c);
            return e
        }
        return w(this, a, b, c)
    };
    k.L = function (a, b, c) {
        if (Array.isArray(a)) {
            for (var d = a.length, e = Array(d), f = 0; f < d; ++f)e[f] = Ea(this, a[f], b, c);
            return e
        }
        return Ea(this, a, b, c)
    };
    k.J = function (a, b, c) {
        if (Array.isArray(a))for (var d = 0, e = a.length; d < e; ++d)Fa(this, a[d], b, c); else Fa(this, a, b, c)
    };
    k.M = Qa;
    function Sa(a, b, c) {
        La.call(this, a);
        this.key = b;
        this.oldValue = c
    }

    v(Sa, La);
    function Ta(a) {
        Pa.call(this);
        ea(this);
        this.T = {};
        void 0 !== a && this.H(a)
    }

    v(Ta, Pa);
    var Ua = {};

    function Va(a) {
        return Ua.hasOwnProperty(a) ? Ua[a] : Ua[a] = "change:" + a
    }

    k = Ta.prototype;
    k.get = function (a) {
        var b;
        this.T.hasOwnProperty(a) && (b = this.T[a]);
        return b
    };
    k.O = function () {
        return Object.keys(this.T)
    };
    k.N = function () {
        return ua({}, this.T)
    };
    function Wa(a, b, c) {
        var d;
        d = Va(b);
        a.b(new Sa(d, b, c));
        a.b(new Sa("propertychange", b, c))
    }

    k.set = function (a, b, c) {
        c ? this.T[a] = b : (c = this.T[a], this.T[a] = b, c !== b && Wa(this, a, c))
    };
    k.H = function (a, b) {
        for (var c in a)this.set(c, a[c], b)
    };
    k.R = function (a, b) {
        if (a in this.T) {
            var c = this.T[a];
            delete this.T[a];
            b || Wa(this, a, c)
        }
    };
    function Xa(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function Ya(a, b) {
        return 0 <= a.indexOf(b)
    }

    function Za(a, b, c) {
        var d = a.length;
        if (a[0] <= b)return 0;
        if (!(b <= a[d - 1]))if (0 < c)for (c = 1; c < d; ++c) {
            if (a[c] < b)return c - 1
        } else if (0 > c)for (c = 1; c < d; ++c) {
            if (a[c] <= b)return c
        } else for (c = 1; c < d; ++c) {
            if (a[c] == b)return c;
            if (a[c] < b)return a[c - 1] - b < b - a[c] ? c - 1 : c
        }
        return d - 1
    }

    function $a(a) {
        return a.reduce(function (a, c) {
            return Array.isArray(c) ? a.concat($a(c)) : a.concat(c)
        }, [])
    }

    function ab(a, b) {
        var c, d = Array.isArray(b) ? b : [b], e = d.length;
        for (c = 0; c < e; c++)a[a.length] = d[c]
    }

    function bb(a, b) {
        var c = a.indexOf(b), d = -1 < c;
        d && a.splice(c, 1);
        return d
    }

    function cb(a, b) {
        for (var c = a.length >>> 0, d, e = 0; e < c; e++)if (d = a[e], b(d, e, a))return d;
        return null
    }

    function db(a, b) {
        var c = a.length;
        if (c !== b.length)return !1;
        for (var d = 0; d < c; d++)if (a[d] !== b[d])return !1;
        return !0
    }

    function eb(a) {
        var b = fb, c = a.length, d = Array(a.length), e;
        for (e = 0; e < c; e++)d[e] = {index: e, value: a[e]};
        d.sort(function (a, c) {
            return b(a.value, c.value) || a.index - c.index
        });
        for (e = 0; e < a.length; e++)a[e] = d[e].value
    }

    function gb(a, b) {
        var c;
        return a.every(function (d, e) {
            c = e;
            return !b(d, e, a)
        }) ? -1 : c
    }

    function hb(a, b) {
        var c = b || Xa;
        return a.every(function (b, e) {
            if (0 === e)return !0;
            var f = c(a[e - 1], b);
            return !(0 < f || 0 === f)
        })
    };
    function ib(a) {
        return function (b, c, d) {
            if (void 0 !== b)return b = Za(a, b, d), b = ia(b + c, 0, a.length - 1), c = Math.floor(b), b != c && c < a.length - 1 ? a[c] / Math.pow(a[c] / a[c + 1], b - c) : a[c]
        }
    }

    function kb(a, b, c) {
        return function (d, e, f) {
            if (void 0 !== d)return d = Math.max(Math.floor(Math.log(b / d) / Math.log(a) + (-f / 2 + .5)) + e, 0), void 0 !== c && (d = Math.min(d, c)), b / Math.pow(a, d)
        }
    };
    function lb(a) {
        if (void 0 !== a)return 0
    }

    function mb(a, b) {
        if (void 0 !== a)return a + b
    }

    function nb(a) {
        var b = 2 * Math.PI / a;
        return function (a, d) {
            if (void 0 !== a)return a = Math.floor((a + d) / b + .5) * b
        }
    }

    function ob() {
        var a = na(5);
        return function (b, c) {
            if (void 0 !== b)return Math.abs(b + c) <= a ? 0 : b + c
        }
    };
    function pb(a, b) {
        var c = void 0 !== b ? a.toFixed(b) : "" + a, d = c.indexOf("."), d = -1 === d ? c.length : d;
        return 2 < d ? c : Array(3 - d).join("0") + c
    }

    function qb(a) {
        a = ("" + a).split(".");
        for (var b = ["1", "3"], c = 0; c < Math.max(a.length, b.length); c++) {
            var d = parseInt(a[c] || "0", 10), e = parseInt(b[c] || "0", 10);
            if (d > e)return 1;
            if (e > d)return -1
        }
        return 0
    };
    function rb(a, b) {
        a[0] += b[0];
        a[1] += b[1];
        return a
    }

    function sb(a, b) {
        var c = a[0], d = a[1], e = b[0], f = b[1], g = e[0], e = e[1], h = f[0], f = f[1], l = h - g, m = f - e, c = 0 === l && 0 === m ? 0 : (l * (c - g) + m * (d - e)) / (l * l + m * m || 0);
        0 >= c || (1 <= c ? (g = h, e = f) : (g += c * l, e += c * m));
        return [g, e]
    }

    function tb(a, b, c) {
        a = oa(a + 180, 360) - 180;
        var d = Math.abs(3600 * a);
        return Math.floor(d / 3600) + "\u00b0 " + pb(Math.floor(d / 60 % 60)) + "\u2032 " + pb(d % 60, c || 0) + "\u2033 " + b.charAt(0 > a ? 1 : 0)
    }

    function ub(a, b, c) {
        return a ? b.replace("{x}", a[0].toFixed(c)).replace("{y}", a[1].toFixed(c)) : ""
    }

    function vb(a, b) {
        for (var c = !0, d = a.length - 1; 0 <= d; --d)if (a[d] != b[d]) {
            c = !1;
            break
        }
        return c
    }

    function wb(a, b) {
        var c = Math.cos(b), d = Math.sin(b), e = a[1] * c + a[0] * d;
        a[0] = a[0] * c - a[1] * d;
        a[1] = e;
        return a
    }

    function xb(a, b) {
        var c = a[0] - b[0], d = a[1] - b[1];
        return c * c + d * d
    }

    function yb(a, b) {
        return xb(a, sb(a, b))
    }

    function zb(a, b) {
        return ub(a, "{x}, {y}", b)
    };
    function Ab(a) {
        for (var b = Bb(), c = 0, d = a.length; c < d; ++c)Cb(b, a[c]);
        return b
    }

    function Db(a, b, c) {
        return c ? (c[0] = a[0] - b, c[1] = a[1] - b, c[2] = a[2] + b, c[3] = a[3] + b, c) : [a[0] - b, a[1] - b, a[2] + b, a[3] + b]
    }

    function Eb(a, b) {
        return b ? (b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b) : a.slice()
    }

    function Fb(a, b, c) {
        b = b < a[0] ? a[0] - b : a[2] < b ? b - a[2] : 0;
        a = c < a[1] ? a[1] - c : a[3] < c ? c - a[3] : 0;
        return b * b + a * a
    }

    function Gb(a, b) {
        return Hb(a, b[0], b[1])
    }

    function Ib(a, b) {
        return a[0] <= b[0] && b[2] <= a[2] && a[1] <= b[1] && b[3] <= a[3]
    }

    function Hb(a, b, c) {
        return a[0] <= b && b <= a[2] && a[1] <= c && c <= a[3]
    }

    function Jb(a, b) {
        var c = a[1], d = a[2], e = a[3], f = b[0], g = b[1], h = 0;
        f < a[0] ? h |= 16 : f > d && (h |= 4);
        g < c ? h |= 8 : g > e && (h |= 2);
        0 === h && (h = 1);
        return h
    }

    function Bb() {
        return [Infinity, Infinity, -Infinity, -Infinity]
    }

    function Kb(a, b, c, d, e) {
        return e ? (e[0] = a, e[1] = b, e[2] = c, e[3] = d, e) : [a, b, c, d]
    }

    function Lb(a, b) {
        var c = a[0], d = a[1];
        return Kb(c, d, c, d, b)
    }

    function Mb(a, b, c, d, e) {
        e = Kb(Infinity, Infinity, -Infinity, -Infinity, e);
        return Nb(e, a, b, c, d)
    }

    function Ob(a, b) {
        return a[0] == b[0] && a[2] == b[2] && a[1] == b[1] && a[3] == b[3]
    }

    function Pb(a, b) {
        b[0] < a[0] && (a[0] = b[0]);
        b[2] > a[2] && (a[2] = b[2]);
        b[1] < a[1] && (a[1] = b[1]);
        b[3] > a[3] && (a[3] = b[3]);
        return a
    }

    function Cb(a, b) {
        b[0] < a[0] && (a[0] = b[0]);
        b[0] > a[2] && (a[2] = b[0]);
        b[1] < a[1] && (a[1] = b[1]);
        b[1] > a[3] && (a[3] = b[1])
    }

    function Nb(a, b, c, d, e) {
        for (; c < d; c += e) {
            var f = a, g = b[c], h = b[c + 1];
            f[0] = Math.min(f[0], g);
            f[1] = Math.min(f[1], h);
            f[2] = Math.max(f[2], g);
            f[3] = Math.max(f[3], h)
        }
        return a
    }

    function Qb(a, b, c) {
        var d;
        return (d = b.call(c, Rb(a))) || (d = b.call(c, Sb(a))) || (d = b.call(c, Ub(a))) ? d : (d = b.call(c, Wb(a))) ? d : !1
    }

    function Xb(a) {
        var b = 0;
        Yb(a) || (b = Zb(a) * $b(a));
        return b
    }

    function Rb(a) {
        return [a[0], a[1]]
    }

    function Sb(a) {
        return [a[2], a[1]]
    }

    function ac(a) {
        return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2]
    }

    function bc(a, b, c, d, e) {
        var f = b * d[0] / 2;
        d = b * d[1] / 2;
        b = Math.cos(c);
        var g = Math.sin(c);
        c = f * b;
        f *= g;
        b *= d;
        var h = d * g, l = a[0], m = a[1];
        a = l - c + h;
        d = l - c - h;
        g = l + c - h;
        c = l + c + h;
        var h = m - f - b, l = m - f + b, n = m + f + b, f = m + f - b;
        return Kb(Math.min(a, d, g, c), Math.min(h, l, n, f), Math.max(a, d, g, c), Math.max(h, l, n, f), e)
    }

    function $b(a) {
        return a[3] - a[1]
    }

    function cc(a, b, c) {
        c = c ? c : Bb();
        dc(a, b) && (c[0] = a[0] > b[0] ? a[0] : b[0], c[1] = a[1] > b[1] ? a[1] : b[1], c[2] = a[2] < b[2] ? a[2] : b[2], c[3] = a[3] < b[3] ? a[3] : b[3]);
        return c
    }

    function Wb(a) {
        return [a[0], a[3]]
    }

    function Ub(a) {
        return [a[2], a[3]]
    }

    function Zb(a) {
        return a[2] - a[0]
    }

    function dc(a, b) {
        return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1]
    }

    function Yb(a) {
        return a[2] < a[0] || a[3] < a[1]
    }

    function ec(a, b) {
        var c = (a[2] - a[0]) / 2 * (b - 1), d = (a[3] - a[1]) / 2 * (b - 1);
        a[0] -= c;
        a[2] += c;
        a[1] -= d;
        a[3] += d
    }

    function fc(a, b, c) {
        a = [a[0], a[1], a[0], a[3], a[2], a[1], a[2], a[3]];
        b(a, a, 2);
        var d = [a[0], a[2], a[4], a[6]], e = [a[1], a[3], a[5], a[7]];
        b = Math.min.apply(null, d);
        a = Math.min.apply(null, e);
        d = Math.max.apply(null, d);
        e = Math.max.apply(null, e);
        return Kb(b, a, d, e, c)
    };
    function gc() {
        return !0
    }

    function hc() {
        return !1
    };
    /*

     Latitude/longitude spherical geodesy formulae taken from
     http://www.movable-type.co.uk/scripts/latlong.html
     Licensed under CC-BY-3.0.
     */
    function ic(a) {
        this.radius = a
    }

    ic.prototype.a = function (a) {
        for (var b = 0, c = a.length, d = a[c - 1][0], e = a[c - 1][1], f = 0; f < c; f++)var g = a[f][0], h = a[f][1], b = b + na(g - d) * (2 + Math.sin(na(e)) + Math.sin(na(h))), d = g, e = h;
        return b * this.radius * this.radius / 2
    };
    ic.prototype.b = function (a, b) {
        var c = na(a[1]), d = na(b[1]), e = (d - c) / 2, f = na(b[0] - a[0]) / 2, c = Math.sin(e) * Math.sin(e) + Math.sin(f) * Math.sin(f) * Math.cos(c) * Math.cos(d);
        return 2 * this.radius * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c))
    };
    ic.prototype.offset = function (a, b, c) {
        var d = na(a[1]);
        b /= this.radius;
        var e = Math.asin(Math.sin(d) * Math.cos(b) + Math.cos(d) * Math.sin(b) * Math.cos(c));
        return [180 * (na(a[0]) + Math.atan2(Math.sin(c) * Math.sin(b) * Math.cos(d), Math.cos(b) - Math.sin(d) * Math.sin(e))) / Math.PI, 180 * e / Math.PI]
    };
    var jc = new ic(6370997);
    var kc = {};
    kc.degrees = 2 * Math.PI * jc.radius / 360;
    kc.ft = .3048;
    kc.m = 1;
    kc["us-ft"] = 1200 / 3937;
    function lc(a) {
        this.eb = a.code;
        this.c = a.units;
        this.f = void 0 !== a.extent ? a.extent : null;
        this.i = void 0 !== a.worldExtent ? a.worldExtent : null;
        this.b = void 0 !== a.axisOrientation ? a.axisOrientation : "enu";
        this.g = void 0 !== a.global ? a.global : !1;
        this.a = !(!this.g || !this.f);
        this.l = void 0 !== a.getPointResolution ? a.getPointResolution : this.fk;
        this.j = null;
        this.o = a.metersPerUnit;
        var b = mc, c = a.code, d = nc || window.proj4;
        if ("function" == typeof d && void 0 === b[c]) {
            var e = d.defs(c);
            if (void 0 !== e) {
                void 0 !== e.axis && void 0 === a.axisOrientation &&
                (this.b = e.axis);
                void 0 === a.metersPerUnit && (this.o = e.to_meter);
                void 0 === a.units && (this.c = e.units);
                for (var f in b)b = d.defs(f), void 0 !== b && (a = oc(f), b === e ? pc([a, this]) : (b = d(f, c), qc(a, this, b.forward, b.inverse)))
            }
        }
    }

    k = lc.prototype;
    k.Gj = function () {
        return this.eb
    };
    k.D = function () {
        return this.f
    };
    k.yb = function () {
        return this.c
    };
    k.dc = function () {
        return this.o || kc[this.c]
    };
    k.sk = function () {
        return this.i
    };
    k.bl = function () {
        return this.g
    };
    k.Ro = function (a) {
        this.g = a;
        this.a = !(!a || !this.f)
    };
    k.Am = function (a) {
        this.f = a;
        this.a = !(!this.g || !a)
    };
    k.Yo = function (a) {
        this.i = a
    };
    k.Qo = function (a) {
        this.l = a
    };
    k.fk = function (a, b) {
        if ("degrees" == this.yb())return a;
        var c = rc(this, oc("EPSG:4326")), d = [b[0] - a / 2, b[1], b[0] + a / 2, b[1], b[0], b[1] - a / 2, b[0], b[1] + a / 2], d = c(d, d, 2), c = (jc.b(d.slice(0, 2), d.slice(2, 4)) + jc.b(d.slice(4, 6), d.slice(6, 8))) / 2, d = this.dc();
        void 0 !== d && (c /= d);
        return c
    };
    k.getPointResolution = function (a, b) {
        return this.l(a, b)
    };
    var mc = {}, uc = {}, nc = null;

    function pc(a) {
        vc(a);
        a.forEach(function (b) {
            a.forEach(function (a) {
                b !== a && wc(b, a, xc)
            })
        })
    }

    function yc() {
        var a = zc, b = Ac, c = Bc;
        Cc.forEach(function (d) {
            a.forEach(function (a) {
                wc(d, a, b);
                wc(a, d, c)
            })
        })
    }

    function Dc(a) {
        mc[a.eb] = a;
        wc(a, a, xc)
    }

    function vc(a) {
        var b = [];
        a.forEach(function (a) {
            b.push(Dc(a))
        })
    }

    function Ec(a) {
        return a ? "string" === typeof a ? oc(a) : a : oc("EPSG:3857")
    }

    function wc(a, b, c) {
        a = a.eb;
        b = b.eb;
        a in uc || (uc[a] = {});
        uc[a][b] = c
    }

    function qc(a, b, c, d) {
        a = oc(a);
        b = oc(b);
        wc(a, b, Fc(c));
        wc(b, a, Fc(d))
    }

    function Fc(a) {
        return function (b, c, d) {
            var e = b.length;
            d = void 0 !== d ? d : 2;
            c = void 0 !== c ? c : Array(e);
            var f, g;
            for (g = 0; g < e; g += d)for (f = a([b[g], b[g + 1]]), c[g] = f[0], c[g + 1] = f[1], f = d - 1; 2 <= f; --f)c[g + f] = b[g + f];
            return c
        }
    }

    function oc(a) {
        var b;
        if (a instanceof lc) b = a; else if ("string" === typeof a) {
            b = mc[a];
            var c = nc || window.proj4;
            void 0 === b && "function" == typeof c && void 0 !== c.defs(a) && (b = new lc({code: a}), Dc(b))
        }
        return b || null
    }

    function Hc(a, b) {
        if (a === b)return !0;
        var c = a.yb() === b.yb();
        return a.eb === b.eb ? c : rc(a, b) === xc && c
    }

    function Ic(a, b) {
        var c = oc(a), d = oc(b);
        return rc(c, d)
    }

    function rc(a, b) {
        var c = a.eb, d = b.eb, e;
        c in uc && d in uc[c] && (e = uc[c][d]);
        void 0 === e && (e = Jc);
        return e
    }

    function Jc(a, b) {
        if (void 0 !== b && a !== b) {
            for (var c = 0, d = a.length; c < d; ++c)b[c] = a[c];
            a = b
        }
        return a
    }

    function xc(a, b) {
        var c;
        if (void 0 !== b) {
            c = 0;
            for (var d = a.length; c < d; ++c)b[c] = a[c];
            c = b
        } else c = a.slice();
        return c
    }

    function Kc(a, b, c) {
        return Ic(b, c)(a, void 0, a.length)
    }

    function Lc(a, b, c) {
        b = Ic(b, c);
        return fc(a, b)
    };
    function Mc() {
        Ta.call(this);
        this.s = Bb();
        this.u = -1;
        this.i = {};
        this.o = this.j = 0
    }

    v(Mc, Ta);
    k = Mc.prototype;
    k.xb = function (a, b) {
        var c = b ? b : [NaN, NaN];
        this.vb(a[0], a[1], c, Infinity);
        return c
    };
    k.jb = function (a) {
        return this.Ac(a[0], a[1])
    };
    k.Ac = hc;
    k.D = function (a) {
        this.u != this.g && (this.s = this.Qd(this.s), this.u = this.g);
        var b = this.s;
        a ? (a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3]) : a = b;
        return a
    };
    k.Db = function (a) {
        return this.pd(a * a)
    };
    k.lb = function (a, b) {
        this.oc(Ic(a, b));
        return this
    };
    function Nc(a, b, c, d, e, f) {
        for (var g = f ? f : [], h = 0; b < c; b += d) {
            var l = a[b], m = a[b + 1];
            g[h++] = e[0] * l + e[2] * m + e[4];
            g[h++] = e[1] * l + e[3] * m + e[5]
        }
        f && g.length != h && (g.length = h);
        return g
    };
    function Oc() {
        Mc.call(this);
        this.ia = "XY";
        this.a = 2;
        this.A = null
    }

    v(Oc, Mc);
    function Rc(a) {
        var b;
        "XY" == a ? b = 2 : "XYZ" == a || "XYM" == a ? b = 3 : "XYZM" == a && (b = 4);
        return b
    }

    k = Oc.prototype;
    k.Ac = hc;
    k.Qd = function (a) {
        return Mb(this.A, 0, this.A.length, this.a, a)
    };
    k.Lb = function () {
        return this.A.slice(0, this.a)
    };
    k.ka = function () {
        return this.A
    };
    k.Mb = function () {
        return this.A.slice(this.A.length - this.a)
    };
    k.Nb = function () {
        return this.ia
    };
    k.pd = function (a) {
        this.o != this.g && (va(this.i), this.j = 0, this.o = this.g);
        if (0 > a || 0 !== this.j && a <= this.j)return this;
        var b = a.toString();
        if (this.i.hasOwnProperty(b))return this.i[b];
        var c = this.Mc(a);
        if (c.ka().length < this.A.length)return this.i[b] = c;
        this.j = a;
        return this
    };
    k.Mc = function () {
        return this
    };
    k.sa = function () {
        return this.a
    };
    function Sc(a, b, c) {
        a.a = Rc(b);
        a.ia = b;
        a.A = c
    }

    function Tc(a, b, c, d) {
        if (b) c = Rc(b); else {
            for (b = 0; b < d; ++b) {
                if (0 === c.length) {
                    a.ia = "XY";
                    a.a = 2;
                    return
                }
                c = c[0]
            }
            c = c.length;
            var e;
            2 == c ? e = "XY" : 3 == c ? e = "XYZ" : 4 == c && (e = "XYZM");
            b = e
        }
        a.ia = b;
        a.a = c
    }

    k.oc = function (a) {
        this.A && (a(this.A, this.A, this.a), this.v())
    };
    k.rotate = function (a, b) {
        var c = this.ka();
        if (c) {
            for (var d = c.length, e = this.sa(), f = c ? c : [], g = Math.cos(a), h = Math.sin(a), l = b[0], m = b[1], n = 0, p = 0; p < d; p += e) {
                var q = c[p] - l, r = c[p + 1] - m;
                f[n++] = l + q * g - r * h;
                f[n++] = m + q * h + r * g;
                for (q = p + 2; q < p + e; ++q)f[n++] = c[q]
            }
            c && f.length != n && (f.length = n);
            this.v()
        }
    };
    k.scale = function (a, b, c) {
        var d = b;
        void 0 === d && (d = a);
        var e = c;
        e || (e = ac(this.D()));
        if (c = this.ka()) {
            b = c.length;
            for (var f = this.sa(), g = c ? c : [], h = e[0], e = e[1], l = 0, m = 0; m < b; m += f) {
                var n = c[m] - h, p = c[m + 1] - e;
                g[l++] = h + a * n;
                g[l++] = e + d * p;
                for (n = m + 2; n < m + f; ++n)g[l++] = c[n]
            }
            c && g.length != l && (g.length = l);
            this.v()
        }
    };
    k.Pc = function (a, b) {
        var c = this.ka();
        if (c) {
            var d = c.length, e = this.sa(), f = c ? c : [], g = 0, h, l;
            for (h = 0; h < d; h += e)for (f[g++] = c[h] + a, f[g++] = c[h + 1] + b, l = h + 2; l < h + e; ++l)f[g++] = c[l];
            c && f.length != g && (f.length = g);
            this.v()
        }
    };
    function Uc(a, b, c, d) {
        for (var e = 0, f = a[c - d], g = a[c - d + 1]; b < c; b += d)var h = a[b], l = a[b + 1], e = e + (g * h - f * l), f = h, g = l;
        return e / 2
    }

    function Vc(a, b, c, d) {
        var e = 0, f, g;
        f = 0;
        for (g = c.length; f < g; ++f) {
            var h = c[f], e = e + Uc(a, b, h, d);
            b = h
        }
        return e
    };
    function Wc(a, b, c, d, e, f, g) {
        var h = a[b], l = a[b + 1], m = a[c] - h, n = a[c + 1] - l;
        if (0 !== m || 0 !== n)if (f = ((e - h) * m + (f - l) * n) / (m * m + n * n), 1 < f) b = c; else if (0 < f) {
            for (e = 0; e < d; ++e)g[e] = pa(a[b + e], a[c + e], f);
            g.length = d;
            return
        }
        for (e = 0; e < d; ++e)g[e] = a[b + e];
        g.length = d
    }

    function Xc(a, b, c, d, e) {
        var f = a[b], g = a[b + 1];
        for (b += d; b < c; b += d) {
            var h = a[b], l = a[b + 1], f = ma(f, g, h, l);
            f > e && (e = f);
            f = h;
            g = l
        }
        return e
    }

    function Zc(a, b, c, d, e) {
        var f, g;
        f = 0;
        for (g = c.length; f < g; ++f) {
            var h = c[f];
            e = Xc(a, b, h, d, e);
            b = h
        }
        return e
    }

    function $c(a, b, c, d, e, f, g, h, l, m, n) {
        if (b == c)return m;
        var p;
        if (0 === e) {
            p = ma(g, h, a[b], a[b + 1]);
            if (p < m) {
                for (n = 0; n < d; ++n)l[n] = a[b + n];
                l.length = d;
                return p
            }
            return m
        }
        for (var q = n ? n : [NaN, NaN], r = b + d; r < c;)if (Wc(a, r - d, r, d, g, h, q), p = ma(g, h, q[0], q[1]), p < m) {
            m = p;
            for (n = 0; n < d; ++n)l[n] = q[n];
            l.length = d;
            r += d
        } else r += d * Math.max((Math.sqrt(p) - Math.sqrt(m)) / e | 0, 1);
        if (f && (Wc(a, c - d, b, d, g, h, q), p = ma(g, h, q[0], q[1]), p < m)) {
            m = p;
            for (n = 0; n < d; ++n)l[n] = q[n];
            l.length = d
        }
        return m
    }

    function ad(a, b, c, d, e, f, g, h, l, m, n) {
        n = n ? n : [NaN, NaN];
        var p, q;
        p = 0;
        for (q = c.length; p < q; ++p) {
            var r = c[p];
            m = $c(a, b, r, d, e, f, g, h, l, m, n);
            b = r
        }
        return m
    };
    function bd(a, b) {
        var c = 0, d, e;
        d = 0;
        for (e = b.length; d < e; ++d)a[c++] = b[d];
        return c
    }

    function cd(a, b, c, d) {
        var e, f;
        e = 0;
        for (f = c.length; e < f; ++e) {
            var g = c[e], h;
            for (h = 0; h < d; ++h)a[b++] = g[h]
        }
        return b
    }

    function dd(a, b, c, d, e) {
        e = e ? e : [];
        var f = 0, g, h;
        g = 0;
        for (h = c.length; g < h; ++g)b = cd(a, b, c[g], d), e[f++] = b;
        e.length = f;
        return e
    };
    function ed(a, b, c, d, e) {
        e = void 0 !== e ? e : [];
        for (var f = 0; b < c; b += d)e[f++] = a.slice(b, b + d);
        e.length = f;
        return e
    }

    function fd(a, b, c, d, e) {
        e = void 0 !== e ? e : [];
        var f = 0, g, h;
        g = 0;
        for (h = c.length; g < h; ++g) {
            var l = c[g];
            e[f++] = ed(a, b, l, d, e[f]);
            b = l
        }
        e.length = f;
        return e
    };
    function gd(a, b, c, d, e, f, g) {
        var h = (c - b) / d;
        if (3 > h) {
            for (; b < c; b += d)f[g++] = a[b], f[g++] = a[b + 1];
            return g
        }
        var l = Array(h);
        l[0] = 1;
        l[h - 1] = 1;
        c = [b, c - d];
        for (var m = 0, n; 0 < c.length;) {
            var p = c.pop(), q = c.pop(), r = 0, u = a[q], x = a[q + 1], y = a[p], A = a[p + 1];
            for (n = q + d; n < p; n += d) {
                var z = la(a[n], a[n + 1], u, x, y, A);
                z > r && (m = n, r = z)
            }
            r > e && (l[(m - b) / d] = 1, q + d < m && c.push(q, m), m + d < p && c.push(m, p))
        }
        for (n = 0; n < h; ++n)l[n] && (f[g++] = a[b + n * d], f[g++] = a[b + n * d + 1]);
        return g
    }

    function hd(a, b, c, d, e, f, g, h) {
        var l, m;
        l = 0;
        for (m = c.length; l < m; ++l) {
            var n = c[l];
            a:{
                var p = a, q = n, r = d, u = e, x = f;
                if (b != q) {
                    var y = u * Math.round(p[b] / u), A = u * Math.round(p[b + 1] / u);
                    b += r;
                    x[g++] = y;
                    x[g++] = A;
                    var z, K;
                    do if (z = u * Math.round(p[b] / u), K = u * Math.round(p[b + 1] / u), b += r, b == q) {
                        x[g++] = z;
                        x[g++] = K;
                        break a
                    } while (z == y && K == A);
                    for (; b < q;) {
                        var L, R;
                        L = u * Math.round(p[b] / u);
                        R = u * Math.round(p[b + 1] / u);
                        b += r;
                        if (L != z || R != K) {
                            var Ka = z - y, jb = K - A, F = L - y, ta = R - A;
                            Ka * ta == jb * F && (0 > Ka && F < Ka || Ka == F || 0 < Ka && F > Ka) && (0 > jb && ta < jb || jb == ta || 0 < jb && ta > jb) ||
                            (x[g++] = z, x[g++] = K, y = z, A = K);
                            z = L;
                            K = R
                        }
                    }
                    x[g++] = z;
                    x[g++] = K
                }
            }
            h.push(g);
            b = n
        }
        return g
    };
    function id(a, b) {
        Oc.call(this);
        this.c = this.l = -1;
        this.ma(a, b)
    }

    v(id, Oc);
    k = id.prototype;
    k.clone = function () {
        var a = new id(null);
        jd(a, this.ia, this.A.slice());
        return a
    };
    k.vb = function (a, b, c, d) {
        if (d < Fb(this.D(), a, b))return d;
        this.c != this.g && (this.l = Math.sqrt(Xc(this.A, 0, this.A.length, this.a, 0)), this.c = this.g);
        return $c(this.A, 0, this.A.length, this.a, this.l, !0, a, b, c, d)
    };
    k.bm = function () {
        return Uc(this.A, 0, this.A.length, this.a)
    };
    k.Y = function () {
        return ed(this.A, 0, this.A.length, this.a)
    };
    k.Mc = function (a) {
        var b = [];
        b.length = gd(this.A, 0, this.A.length, this.a, a, b, 0);
        a = new id(null);
        jd(a, "XY", b);
        return a
    };
    k.X = function () {
        return "LinearRing"
    };
    k.ma = function (a, b) {
        a ? (Tc(this, b, a, 1), this.A || (this.A = []), this.A.length = cd(this.A, 0, a, this.a), this.v()) : jd(this, "XY", null)
    };
    function jd(a, b, c) {
        Sc(a, b, c);
        a.v()
    };
    function B(a, b) {
        Oc.call(this);
        this.ma(a, b)
    }

    v(B, Oc);
    k = B.prototype;
    k.clone = function () {
        var a = new B(null);
        a.aa(this.ia, this.A.slice());
        return a
    };
    k.vb = function (a, b, c, d) {
        var e = this.A;
        a = ma(a, b, e[0], e[1]);
        if (a < d) {
            d = this.a;
            for (b = 0; b < d; ++b)c[b] = e[b];
            c.length = d;
            return a
        }
        return d
    };
    k.Y = function () {
        return this.A ? this.A.slice() : []
    };
    k.Qd = function (a) {
        return Lb(this.A, a)
    };
    k.X = function () {
        return "Point"
    };
    k.Oa = function (a) {
        return Hb(a, this.A[0], this.A[1])
    };
    k.ma = function (a, b) {
        a ? (Tc(this, b, a, 0), this.A || (this.A = []), this.A.length = bd(this.A, a), this.v()) : this.aa("XY", null)
    };
    k.aa = function (a, b) {
        Sc(this, a, b);
        this.v()
    };
    function kd(a, b, c, d, e) {
        return !Qb(e, function (e) {
            return !ld(a, b, c, d, e[0], e[1])
        })
    }

    function ld(a, b, c, d, e, f) {
        for (var g = !1, h = a[c - d], l = a[c - d + 1]; b < c; b += d) {
            var m = a[b], n = a[b + 1];
            l > f != n > f && e < (m - h) * (f - l) / (n - l) + h && (g = !g);
            h = m;
            l = n
        }
        return g
    }

    function md(a, b, c, d, e, f) {
        if (0 === c.length || !ld(a, b, c[0], d, e, f))return !1;
        var g;
        b = 1;
        for (g = c.length; b < g; ++b)if (ld(a, c[b - 1], c[b], d, e, f))return !1;
        return !0
    };
    function nd(a, b, c, d, e, f, g) {
        var h, l, m, n, p, q = e[f + 1], r = [], u = c[0];
        m = a[u - d];
        p = a[u - d + 1];
        for (h = b; h < u; h += d) {
            n = a[h];
            l = a[h + 1];
            if (q <= p && l <= q || p <= q && q <= l) m = (q - p) / (l - p) * (n - m) + m, r.push(m);
            m = n;
            p = l
        }
        u = NaN;
        p = -Infinity;
        r.sort(Xa);
        m = r[0];
        h = 1;
        for (l = r.length; h < l; ++h) {
            n = r[h];
            var x = Math.abs(n - m);
            x > p && (m = (m + n) / 2, md(a, b, c, d, m, q) && (u = m, p = x));
            m = n
        }
        isNaN(u) && (u = e[f]);
        return g ? (g.push(u, q), g) : [u, q]
    };
    function od(a, b, c, d, e, f) {
        for (var g = [a[b], a[b + 1]], h = [], l; b + d < c; b += d) {
            h[0] = a[b + d];
            h[1] = a[b + d + 1];
            if (l = e.call(f, g, h))return l;
            g[0] = h[0];
            g[1] = h[1]
        }
        return !1
    };
    function pd(a, b, c, d, e) {
        var f = Nb(Bb(), a, b, c, d);
        return dc(e, f) ? Ib(e, f) || f[0] >= e[0] && f[2] <= e[2] || f[1] >= e[1] && f[3] <= e[3] ? !0 : od(a, b, c, d, function (a, b) {
            var c = !1, d = Jb(e, a), f = Jb(e, b);
            if (1 === d || 1 === f) c = !0; else {
                var p = e[0], q = e[1], r = e[2], u = e[3], x = b[0], y = b[1], A = (y - a[1]) / (x - a[0]);
                f & 2 && !(d & 2) && (c = x - (y - u) / A, c = c >= p && c <= r);
                c || !(f & 4) || d & 4 || (c = y - (x - r) * A, c = c >= q && c <= u);
                c || !(f & 8) || d & 8 || (c = x - (y - q) / A, c = c >= p && c <= r);
                c || !(f & 16) || d & 16 || (c = y - (x - p) * A, c = c >= q && c <= u)
            }
            return c
        }) : !1
    }

    function qd(a, b, c, d, e) {
        var f = c[0];
        if (!(pd(a, b, f, d, e) || ld(a, b, f, d, e[0], e[1]) || ld(a, b, f, d, e[0], e[3]) || ld(a, b, f, d, e[2], e[1]) || ld(a, b, f, d, e[2], e[3])))return !1;
        if (1 === c.length)return !0;
        b = 1;
        for (f = c.length; b < f; ++b)if (kd(a, c[b - 1], c[b], d, e))return !1;
        return !0
    };
    function rd(a, b, c, d) {
        for (var e = 0, f = a[c - d], g = a[c - d + 1]; b < c; b += d)var h = a[b], l = a[b + 1], e = e + (h - f) * (l + g), f = h, g = l;
        return 0 < e
    }

    function sd(a, b, c, d) {
        var e = 0;
        d = void 0 !== d ? d : !1;
        var f, g;
        f = 0;
        for (g = b.length; f < g; ++f) {
            var h = b[f], e = rd(a, e, h, c);
            if (0 === f) {
                if (d && e || !d && !e)return !1
            } else if (d && !e || !d && e)return !1;
            e = h
        }
        return !0
    }

    function td(a, b, c, d, e) {
        e = void 0 !== e ? e : !1;
        var f, g;
        f = 0;
        for (g = c.length; f < g; ++f) {
            var h = c[f], l = rd(a, b, h, d);
            if (0 === f ? e && l || !e && !l : e && !l || !e && l)for (var l = a, m = h, n = d; b < m - n;) {
                var p;
                for (p = 0; p < n; ++p) {
                    var q = l[b + p];
                    l[b + p] = l[m - n + p];
                    l[m - n + p] = q
                }
                b += n;
                m -= n
            }
            b = h
        }
        return b
    }

    function ud(a, b, c, d) {
        var e = 0, f, g;
        f = 0;
        for (g = b.length; f < g; ++f)e = td(a, e, b[f], c, d);
        return e
    };
    function C(a, b) {
        Oc.call(this);
        this.c = [];
        this.C = -1;
        this.B = null;
        this.P = this.G = this.S = -1;
        this.l = null;
        this.ma(a, b)
    }

    v(C, Oc);
    k = C.prototype;
    k.mj = function (a) {
        this.A ? ab(this.A, a.ka()) : this.A = a.ka().slice();
        this.c.push(this.A.length);
        this.v()
    };
    k.clone = function () {
        var a = new C(null);
        a.aa(this.ia, this.A.slice(), this.c.slice());
        return a
    };
    k.vb = function (a, b, c, d) {
        if (d < Fb(this.D(), a, b))return d;
        this.G != this.g && (this.S = Math.sqrt(Zc(this.A, 0, this.c, this.a, 0)), this.G = this.g);
        return ad(this.A, 0, this.c, this.a, this.S, !0, a, b, c, d)
    };
    k.Ac = function (a, b) {
        return md(this.Ob(), 0, this.c, this.a, a, b)
    };
    k.em = function () {
        return Vc(this.Ob(), 0, this.c, this.a)
    };
    k.Y = function (a) {
        var b;
        void 0 !== a ? (b = this.Ob().slice(), td(b, 0, this.c, this.a, a)) : b = this.A;
        return fd(b, 0, this.c, this.a)
    };
    k.Eb = function () {
        return this.c
    };
    function vd(a) {
        if (a.C != a.g) {
            var b = ac(a.D());
            a.B = nd(a.Ob(), 0, a.c, a.a, b, 0);
            a.C = a.g
        }
        return a.B
    }

    k.Qj = function () {
        return new B(vd(this))
    };
    k.Vj = function () {
        return this.c.length
    };
    k.Bg = function (a) {
        if (0 > a || this.c.length <= a)return null;
        var b = new id(null);
        jd(b, this.ia, this.A.slice(0 === a ? 0 : this.c[a - 1], this.c[a]));
        return b
    };
    k.Wd = function () {
        var a = this.ia, b = this.A, c = this.c, d = [], e = 0, f, g;
        f = 0;
        for (g = c.length; f < g; ++f) {
            var h = c[f], l = new id(null);
            jd(l, a, b.slice(e, h));
            d.push(l);
            e = h
        }
        return d
    };
    k.Ob = function () {
        if (this.P != this.g) {
            var a = this.A;
            sd(a, this.c, this.a) ? this.l = a : (this.l = a.slice(), this.l.length = td(this.l, 0, this.c, this.a));
            this.P = this.g
        }
        return this.l
    };
    k.Mc = function (a) {
        var b = [], c = [];
        b.length = hd(this.A, 0, this.c, this.a, Math.sqrt(a), b, 0, c);
        a = new C(null);
        a.aa("XY", b, c);
        return a
    };
    k.X = function () {
        return "Polygon"
    };
    k.Oa = function (a) {
        return qd(this.Ob(), 0, this.c, this.a, a)
    };
    k.ma = function (a, b) {
        if (a) {
            Tc(this, b, a, 2);
            this.A || (this.A = []);
            var c = dd(this.A, 0, a, this.a, this.c);
            this.A.length = 0 === c.length ? 0 : c[c.length - 1];
            this.v()
        } else this.aa("XY", null, this.c)
    };
    k.aa = function (a, b, c) {
        Sc(this, a, b);
        this.c = c;
        this.v()
    };
    function wd(a, b, c, d) {
        var e = d ? d : 32;
        d = [];
        var f;
        for (f = 0; f < e; ++f)ab(d, a.offset(b, c, 2 * Math.PI * f / e));
        d.push(d[0], d[1]);
        a = new C(null);
        a.aa("XY", d, [d.length]);
        return a
    }

    function xd(a) {
        var b = a[0], c = a[1], d = a[2];
        a = a[3];
        b = [b, c, b, a, d, a, d, c, b, c];
        c = new C(null);
        c.aa("XY", b, [b.length]);
        return c
    }

    function yd(a, b, c) {
        var d = b ? b : 32, e = a.sa();
        b = a.ia;
        for (var f = new C(null, b), d = e * (d + 1), e = Array(d), g = 0; g < d; g++)e[g] = 0;
        f.aa(b, e, [e.length]);
        zd(f, a.ud(), a.vf(), c);
        return f
    }

    function zd(a, b, c, d) {
        var e = a.ka(), f = a.ia, g = a.sa(), h = a.Eb(), l = e.length / g - 1;
        d = d ? d : 0;
        for (var m, n, p = 0; p <= l; ++p)n = p * g, m = d + 2 * oa(p, l) * Math.PI / l, e[n] = b[0] + c * Math.cos(m), e[n + 1] = b[1] + c * Math.sin(m);
        a.aa(f, e, h)
    };
    function Ad(a) {
        Ta.call(this);
        a = a || {};
        this.c = [0, 0];
        var b = {};
        b[Bd] = void 0 !== a.center ? a.center : null;
        this.l = Ec(a.projection);
        var c, d, e, f = void 0 !== a.minZoom ? a.minZoom : 0;
        c = void 0 !== a.maxZoom ? a.maxZoom : 28;
        var g = void 0 !== a.zoomFactor ? a.zoomFactor : 2;
        if (void 0 !== a.resolutions) c = a.resolutions, d = c[0], e = c[c.length - 1], c = ib(c); else {
            d = Ec(a.projection);
            e = d.D();
            var h = (e ? Math.max(Zb(e), $b(e)) : 360 * kc.degrees / d.dc()) / 256 / Math.pow(2, 0), l = h / Math.pow(2, 28);
            d = a.maxResolution;
            void 0 !== d ? f = 0 : d = h / Math.pow(g, f);
            e = a.minResolution;
            void 0 === e && (e = void 0 !== a.maxZoom ? void 0 !== a.maxResolution ? d / Math.pow(g, c) : h / Math.pow(g, c) : l);
            c = f + Math.floor(Math.log(d / e) / Math.log(g));
            e = d / Math.pow(g, c - f);
            c = kb(g, d, c - f)
        }
        this.a = d;
        this.i = e;
        this.s = g;
        this.f = a.resolutions;
        this.j = f;
        f = void 0 !== a.extent ? qa(a.extent) : ra;
        (void 0 !== a.enableRotation ? a.enableRotation : 1) ? (g = a.constrainRotation, g = void 0 === g || !0 === g ? ob() : !1 === g ? mb : "number" === typeof g ? nb(g) : mb) : g = lb;
        this.o = new sa(f, c, g);
        void 0 !== a.resolution ? b[Cd] = a.resolution : void 0 !== a.zoom && (b[Cd] = this.constrainResolution(this.a,
            a.zoom - this.j));
        b[Dd] = void 0 !== a.rotation ? a.rotation : 0;
        this.H(b)
    }

    v(Ad, Ta);
    k = Ad.prototype;
    k.Rd = function (a) {
        return this.o.center(a)
    };
    k.constrainResolution = function (a, b, c) {
        return this.o.resolution(a, b || 0, c || 0)
    };
    k.constrainRotation = function (a, b) {
        return this.o.rotation(a, b || 0)
    };
    k.ab = function () {
        return this.get(Bd)
    };
    function Fd(a, b) {
        return void 0 !== b ? (b[0] = a.c[0], b[1] = a.c[1], b) : a.c.slice()
    }

    k.Jc = function (a) {
        var b = this.ab();
        ha(b, 1);
        var c = this.Ma();
        ha(void 0 !== c, 2);
        var d = this.Qa();
        ha(void 0 !== d, 3);
        return bc(b, c, d, a)
    };
    k.Jl = function () {
        return this.a
    };
    k.Kl = function () {
        return this.i
    };
    k.Ll = function () {
        return this.l
    };
    k.Ma = function () {
        return this.get(Cd)
    };
    k.Ml = function () {
        return this.f
    };
    function Gd(a, b) {
        return Math.max(Zb(a) / b[0], $b(a) / b[1])
    }

    function Hd(a) {
        var b = a.a, c = Math.log(b / a.i) / Math.log(2);
        return function (a) {
            return b / Math.pow(2, a * c)
        }
    }

    k.Qa = function () {
        return this.get(Dd)
    };
    function Id(a) {
        var b = a.a, c = Math.log(b / a.i) / Math.log(2);
        return function (a) {
            return Math.log(b / a) / Math.log(2) / c
        }
    }

    k.U = function () {
        var a = this.ab(), b = this.l, c = this.Ma(), d = this.Qa();
        return {center: a.slice(), projection: void 0 !== b ? b : null, resolution: c, rotation: d}
    };
    k.tk = function () {
        var a, b = this.Ma();
        if (void 0 !== b && b >= this.i && b <= this.a) {
            a = this.j || 0;
            var c, d;
            if (this.f) {
                d = Za(this.f, b, 1);
                a += d;
                if (d == this.f.length - 1)return a;
                c = this.f[d];
                d = c / this.f[d + 1]
            } else c = this.a, d = this.s;
            a += Math.log(c / b) / Math.log(d)
        }
        return a
    };
    k.$e = function (a, b, c) {
        a instanceof Oc || (ha(Array.isArray(a), 24), ha(!Yb(a), 25), a = xd(a));
        var d = c || {};
        c = void 0 !== d.padding ? d.padding : [0, 0, 0, 0];
        var e = void 0 !== d.constrainResolution ? d.constrainResolution : !0, f = void 0 !== d.nearest ? d.nearest : !1, g;
        void 0 !== d.minResolution ? g = d.minResolution : void 0 !== d.maxZoom ? g = this.constrainResolution(this.a, d.maxZoom - this.j, 0) : g = 0;
        var h = a.ka(), l = this.Qa(), d = Math.cos(-l), l = Math.sin(-l), m = Infinity, n = Infinity, p = -Infinity, q = -Infinity;
        a = a.sa();
        for (var r = 0, u = h.length; r < u; r += a)var x =
            h[r] * d - h[r + 1] * l, y = h[r] * l + h[r + 1] * d, m = Math.min(m, x), n = Math.min(n, y), p = Math.max(p, x), q = Math.max(q, y);
        b = Gd([m, n, p, q], [b[0] - c[1] - c[3], b[1] - c[0] - c[2]]);
        b = isNaN(b) ? g : Math.max(b, g);
        e && (g = this.constrainResolution(b, 0, 0), !f && g < b && (g = this.constrainResolution(g, -1, 0)), b = g);
        this.Yb(b);
        l = -l;
        f = (m + p) / 2 + (c[1] - c[3]) / 2 * b;
        c = (n + q) / 2 + (c[0] - c[2]) / 2 * b;
        this.rb([f * d - c * l, c * d + f * l])
    };
    k.sj = function (a, b, c) {
        var d = this.Qa(), e = Math.cos(-d), d = Math.sin(-d), f = a[0] * e - a[1] * d;
        a = a[1] * e + a[0] * d;
        var g = this.Ma(), f = f + (b[0] / 2 - c[0]) * g;
        a += (c[1] - b[1] / 2) * g;
        d = -d;
        this.rb([f * e - a * d, a * e + f * d])
    };
    function Jd(a) {
        return !!a.ab() && void 0 !== a.Ma()
    }

    k.rotate = function (a, b) {
        if (void 0 !== b) {
            var c, d = this.ab();
            void 0 !== d && (c = [d[0] - b[0], d[1] - b[1]], wb(c, a - this.Qa()), rb(c, b));
            this.rb(c)
        }
        this.ie(a)
    };
    k.rb = function (a) {
        this.set(Bd, a)
    };
    function Kd(a, b) {
        a.c[1] += b
    }

    k.Yb = function (a) {
        this.set(Cd, a)
    };
    k.ie = function (a) {
        this.set(Dd, a)
    };
    k.Zo = function (a) {
        a = this.constrainResolution(this.a, a - this.j, 0);
        this.Yb(a)
    };
    var Bd = "center", Cd = "resolution", Dd = "rotation";

    function Ld(a) {
        return Math.pow(a, 3)
    }

    function Md(a) {
        return 1 - Ld(1 - a)
    }

    function Nd(a) {
        return 3 * a * a - 2 * a * a * a
    }

    function Od(a) {
        return a
    }

    function Pd(a) {
        return .5 > a ? Nd(2 * a) : 1 - Nd(2 * (a - .5))
    };
    function Qd(a) {
        var b = a.source, c = a.start ? a.start : Date.now(), d = b[0], e = b[1], f = void 0 !== a.duration ? a.duration : 1E3, g = a.easing ? a.easing : Nd;
        return function (a, b) {
            if (b.time < c)return b.animate = !0, b.viewHints[0] += 1, !0;
            if (b.time < c + f) {
                var m = 1 - g((b.time - c) / f), n = d - b.viewState.center[0], p = e - b.viewState.center[1];
                b.animate = !0;
                b.viewState.center[0] += m * n;
                b.viewState.center[1] += m * p;
                b.viewHints[0] += 1;
                return !0
            }
            return !1
        }
    }

    function Rd(a) {
        var b = a.rotation ? a.rotation : 0, c = a.start ? a.start : Date.now(), d = void 0 !== a.duration ? a.duration : 1E3, e = a.easing ? a.easing : Nd, f = a.anchor ? a.anchor : null;
        return function (a, h) {
            if (h.time < c)return h.animate = !0, h.viewHints[0] += 1, !0;
            if (h.time < c + d) {
                var l = 1 - e((h.time - c) / d), l = (b - h.viewState.rotation) * l;
                h.animate = !0;
                h.viewState.rotation += l;
                if (f) {
                    var m = h.viewState.center;
                    m[0] -= f[0];
                    m[1] -= f[1];
                    wb(m, l);
                    rb(m, f)
                }
                h.viewHints[0] += 1;
                return !0
            }
            return !1
        }
    }

    function Sd(a) {
        var b = a.resolution, c = a.start ? a.start : Date.now(), d = void 0 !== a.duration ? a.duration : 1E3, e = a.easing ? a.easing : Nd;
        return function (a, g) {
            if (g.time < c)return g.animate = !0, g.viewHints[0] += 1, !0;
            if (g.time < c + d) {
                var h = 1 - e((g.time - c) / d), l = b - g.viewState.resolution;
                g.animate = !0;
                g.viewState.resolution += h * l;
                g.viewHints[0] += 1;
                return !0
            }
            return !1
        }
    };
    function Td(a, b, c, d) {
        this.ba = a;
        this.da = b;
        this.ea = c;
        this.ha = d
    }

    function Ud(a, b, c) {
        return a.ba <= b && b <= a.da && a.ea <= c && c <= a.ha
    }

    function Vd(a, b) {
        return a.ba == b.ba && a.ea == b.ea && a.da == b.da && a.ha == b.ha
    }

    function Wd(a, b) {
        return a.ba <= b.da && a.da >= b.ba && a.ea <= b.ha && a.ha >= b.ea
    };
    function Xd(a, b, c) {
        void 0 === c && (c = [0, 0]);
        c[0] = a[0] + 2 * b;
        c[1] = a[1] + 2 * b;
        return c
    }

    function Yd(a, b, c) {
        void 0 === c && (c = [0, 0]);
        c[0] = a[0] * b + .5 | 0;
        c[1] = a[1] * b + .5 | 0;
        return c
    }

    function Zd(a, b) {
        if (Array.isArray(a))return a;
        void 0 === b ? b = [a, a] : b[0] = b[1] = a;
        return b
    };
    function $d(a, b, c, d) {
        return void 0 !== d ? (d[0] = a, d[1] = b, d[2] = c, d) : [a, b, c]
    }

    function ae(a) {
        var b = a[0], c = Array(b), d = 1 << b - 1, e, f;
        for (e = 0; e < b; ++e)f = 48, a[1] & d && (f += 1), a[2] & d && (f += 2), c[e] = String.fromCharCode(f), d >>= 1;
        return c.join("")
    };
    function be(a) {
        this.minZoom = void 0 !== a.minZoom ? a.minZoom : 0;
        this.b = a.resolutions;
        ha(hb(this.b, function (a, b) {
            return b - a
        }), 17);
        this.maxZoom = this.b.length - 1;
        this.g = void 0 !== a.origin ? a.origin : null;
        this.f = null;
        void 0 !== a.origins && (this.f = a.origins, ha(this.f.length == this.b.length, 20));
        var b = a.extent;
        void 0 === b || this.g || this.f || (this.g = Wb(b));
        ha(!this.g && this.f || this.g && !this.f, 18);
        this.c = null;
        void 0 !== a.tileSizes && (this.c = a.tileSizes, ha(this.c.length == this.b.length, 19));
        this.i = void 0 !== a.tileSize ? a.tileSize :
            this.c ? null : 256;
        ha(!this.i && this.c || this.i && !this.c, 22);
        this.s = void 0 !== b ? b : null;
        this.a = null;
        this.j = [0, 0];
        void 0 !== a.sizes ? this.a = a.sizes.map(function (a) {
            return new Td(Math.min(0, a[0]), Math.max(a[0] - 1, -1), Math.min(0, a[1]), Math.max(a[1] - 1, -1))
        }, this) : b && ce(this, b)
    }

    var de = [0, 0, 0];
    k = be.prototype;
    k.sg = function (a, b, c) {
        a = ee(this, a, b);
        for (var d = a.ba, e = a.da; d <= e; ++d)for (var f = a.ea, g = a.ha; f <= g; ++f)c([b, d, f])
    };
    function fe(a, b, c, d, e) {
        e = a.Ia(b, e);
        for (b = b[0] - 1; b >= a.minZoom;) {
            if (c.call(null, b, ee(a, e, b, d)))return !0;
            --b
        }
        return !1
    }

    k.D = function () {
        return this.s
    };
    k.Cg = function () {
        return this.maxZoom
    };
    k.Dg = function () {
        return this.minZoom
    };
    k.Tc = function (a) {
        return this.g ? this.g : this.f[a]
    };
    k.Ca = function (a) {
        return this.b[a]
    };
    k.Bh = function () {
        return this.b
    };
    function ge(a, b, c, d) {
        return b[0] < a.maxZoom ? (d = a.Ia(b, d), ee(a, d, b[0] + 1, c)) : null
    }

    function he(a, b, c, d) {
        ie(a, b[0], b[1], c, !1, de);
        var e = de[1], f = de[2];
        ie(a, b[2], b[3], c, !0, de);
        a = de[1];
        b = de[2];
        void 0 !== d ? (d.ba = e, d.da = a, d.ea = f, d.ha = b) : d = new Td(e, a, f, b);
        return d
    }

    function ee(a, b, c, d) {
        c = a.Ca(c);
        return he(a, b, c, d)
    }

    function je(a, b) {
        var c = a.Tc(b[0]), d = a.Ca(b[0]), e = Zd(a.Na(b[0]), a.j);
        return [c[0] + (b[1] + .5) * e[0] * d, c[1] + (b[2] + .5) * e[1] * d]
    }

    k.Ia = function (a, b) {
        var c = this.Tc(a[0]), d = this.Ca(a[0]), e = Zd(this.Na(a[0]), this.j), f = c[0] + a[1] * e[0] * d, c = c[1] + a[2] * e[1] * d;
        return Kb(f, c, f + e[0] * d, c + e[1] * d, b)
    };
    k.Zd = function (a, b, c) {
        return ie(this, a[0], a[1], b, !1, c)
    };
    function ie(a, b, c, d, e, f) {
        var g = a.wc(d), h = d / a.Ca(g), l = a.Tc(g);
        a = Zd(a.Na(g), a.j);
        b = h * Math.floor((b - l[0]) / d + (e ? .5 : 0)) / a[0];
        c = h * Math.floor((c - l[1]) / d + (e ? 0 : .5)) / a[1];
        e ? (b = Math.ceil(b) - 1, c = Math.ceil(c) - 1) : (b = Math.floor(b), c = Math.floor(c));
        return $d(g, b, c, f)
    }

    k.rd = function (a, b, c) {
        b = this.Ca(b);
        return ie(this, a[0], a[1], b, !1, c)
    };
    k.Na = function (a) {
        return this.i ? this.i : this.c[a]
    };
    k.wc = function (a, b) {
        return ia(Za(this.b, a, b || 0), this.minZoom, this.maxZoom)
    };
    function ce(a, b) {
        for (var c = a.b.length, d = Array(c), e = a.minZoom; e < c; ++e)d[e] = ee(a, b, e);
        a.a = d
    };
    function ke(a) {
        var b = a.j;
        if (!b) {
            var b = le(a), c = me(b, void 0, void 0), b = new be({
                extent: b,
                origin: Wb(b),
                resolutions: c,
                tileSize: void 0
            });
            a.j = b
        }
        return b
    }

    function ne(a) {
        var b = {};
        ua(b, void 0 !== a ? a : {});
        void 0 === b.extent && (b.extent = oc("EPSG:3857").D());
        b.resolutions = me(b.extent, b.maxZoom, b.tileSize);
        delete b.maxZoom;
        return new be(b)
    }

    function me(a, b, c) {
        b = void 0 !== b ? b : 42;
        var d = $b(a);
        a = Zb(a);
        c = Zd(void 0 !== c ? c : 256);
        c = Math.max(a / c[0], d / c[1]);
        b += 1;
        d = Array(b);
        for (a = 0; a < b; ++a)d[a] = c / Math.pow(2, a);
        return d
    }

    function le(a) {
        a = oc(a);
        var b = a.D();
        b || (a = 180 * kc.degrees / a.dc(), b = Kb(-a, -a, a, a));
        return b
    };
    function oe(a) {
        this.a = a.html;
        this.b = a.tileRanges ? a.tileRanges : null
    }

    oe.prototype.g = function () {
        return this.a
    };
    function pe(a) {
        Ta.call(this);
        this.a = a ? a : [];
        qe(this)
    }

    v(pe, Ta);
    k = pe.prototype;
    k.clear = function () {
        for (; 0 < this.yc();)this.pop()
    };
    k.qf = function (a) {
        var b, c;
        b = 0;
        for (c = a.length; b < c; ++b)this.push(a[b]);
        return this
    };
    k.forEach = function (a, b) {
        this.a.forEach(a, b)
    };
    k.sl = function () {
        return this.a
    };
    k.item = function (a) {
        return this.a[a]
    };
    k.yc = function () {
        return this.get(re)
    };
    k.ee = function (a, b) {
        this.a.splice(a, 0, b);
        qe(this);
        this.b(new se(te, b))
    };
    k.pop = function () {
        return this.Nf(this.yc() - 1)
    };
    k.push = function (a) {
        var b = this.a.length;
        this.ee(b, a);
        return b
    };
    k.remove = function (a) {
        var b = this.a, c, d;
        c = 0;
        for (d = b.length; c < d; ++c)if (b[c] === a)return this.Nf(c)
    };
    k.Nf = function (a) {
        var b = this.a[a];
        this.a.splice(a, 1);
        qe(this);
        this.b(new se(ue, b));
        return b
    };
    k.Oo = function (a, b) {
        var c = this.yc();
        if (a < c) c = this.a[a], this.a[a] = b, this.b(new se(ue, c)), this.b(new se(te, b)); else {
            for (; c < a; ++c)this.ee(c, void 0);
            this.ee(a, b)
        }
    };
    function qe(a) {
        a.set(re, a.a.length)
    }

    var re = "length", te = "add", ue = "remove";

    function se(a, b) {
        La.call(this, a);
        this.element = b
    }

    v(se, La);
    var ve = /^#(?:[0-9a-f]{3}){1,2}$/i, we = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i, xe = /^(?:rgba)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|1|0\.\d{0,10})\)$/i, ye = /^([a-z]*)$/i;

    function ze(a) {
        return Array.isArray(a) ? a : Ae(a)
    }

    function Be(a) {
        if ("string" !== typeof a) {
            var b = a[0];
            b != (b | 0) && (b = b + .5 | 0);
            var c = a[1];
            c != (c | 0) && (c = c + .5 | 0);
            var d = a[2];
            d != (d | 0) && (d = d + .5 | 0);
            a = "rgba(" + b + "," + c + "," + d + "," + (void 0 === a[3] ? 1 : a[3]) + ")"
        }
        return a
    }

    var Ae = function () {
        var a = {}, b = 0;
        return function (c) {
            var d;
            if (a.hasOwnProperty(c)) d = a[c]; else {
                if (1024 <= b) {
                    d = 0;
                    for (var e in a)0 === (d++ & 3) && (delete a[e], --b)
                }
                d = c;
                var f, g;
                ye.exec(d) && (e = document.createElement("div"), e.style.color = d, document.body.appendChild(e), d = getComputedStyle(e).color, document.body.removeChild(e));
                ve.exec(d) ? (f = d.length - 1, ha(3 == f || 6 == f, 54), g = 3 == f ? 1 : 2, f = parseInt(d.substr(1 + 0 * g, g), 16), e = parseInt(d.substr(1 + 1 * g, g), 16), d = parseInt(d.substr(1 + 2 * g, g), 16), 1 == g && (f = (f << 4) + f, e = (e << 4) + e, d = (d <<
                    4) + d), f = [f, e, d, 1]) : (g = xe.exec(d)) ? (f = Number(g[1]), e = Number(g[2]), d = Number(g[3]), g = Number(g[4]), f = Ce([f, e, d, g])) : (g = we.exec(d)) ? (f = Number(g[1]), e = Number(g[2]), d = Number(g[3]), f = Ce([f, e, d, 1])) : ha(!1, 14);
                d = f;
                a[c] = d;
                ++b
            }
            return d
        }
    }();

    function Ce(a) {
        var b = [];
        b[0] = ia(a[0] + .5 | 0, 0, 255);
        b[1] = ia(a[1] + .5 | 0, 0, 255);
        b[2] = ia(a[2] + .5 | 0, 0, 255);
        b[3] = ia(a[3], 0, 1);
        return b
    };
    function Ee(a) {
        return "string" === typeof a || a instanceof CanvasPattern || a instanceof CanvasGradient ? a : Be(a)
    };
    function Ge(a, b) {
        var c = document.createElement("CANVAS");
        a && (c.width = a);
        b && (c.height = b);
        return c.getContext("2d")
    }

    function He(a, b) {
        var c = b.parentNode;
        c && c.replaceChild(a, b)
    }

    function Ie(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    };
    function Je(a, b, c) {
        La.call(this, a);
        this.map = b;
        this.frameState = void 0 !== c ? c : null
    }

    v(Je, La);
    function Ke(a) {
        Ta.call(this);
        this.element = a.element ? a.element : null;
        this.a = this.P = null;
        this.s = [];
        this.render = a.render ? a.render : da;
        a.target && this.c(a.target)
    }

    v(Ke, Ta);
    Ke.prototype.la = function () {
        Ie(this.element);
        Ta.prototype.la.call(this)
    };
    Ke.prototype.i = function () {
        return this.a
    };
    Ke.prototype.setMap = function (a) {
        this.a && Ie(this.element);
        for (var b = 0, c = this.s.length; b < c; ++b)za(this.s[b]);
        this.s.length = 0;
        if (this.a = a) (this.P ? this.P : a.u).appendChild(this.element), this.render !== da && this.s.push(w(a, "postrender", this.render, this)), a.render()
    };
    Ke.prototype.c = function (a) {
        this.P = "string" === typeof a ? document.getElementById(a) : a
    };
    function Le(a) {
        a = a ? a : {};
        this.S = document.createElement("UL");
        this.u = document.createElement("LI");
        this.S.appendChild(this.u);
        this.u.style.display = "none";
        this.f = void 0 !== a.collapsed ? a.collapsed : !0;
        this.l = void 0 !== a.collapsible ? a.collapsible : !0;
        this.l || (this.f = !1);
        var b = void 0 !== a.className ? a.className : "ol-attribution", c = void 0 !== a.tipLabel ? a.tipLabel : "Attributions", d = void 0 !== a.collapseLabel ? a.collapseLabel : "\u00bb";
        "string" === typeof d ? (this.C = document.createElement("span"), this.C.textContent = d) : this.C =
            d;
        d = void 0 !== a.label ? a.label : "i";
        "string" === typeof d ? (this.B = document.createElement("span"), this.B.textContent = d) : this.B = d;
        var e = this.l && !this.f ? this.C : this.B, d = document.createElement("button");
        d.setAttribute("type", "button");
        d.title = c;
        d.appendChild(e);
        w(d, "click", this.Pl, this);
        c = document.createElement("div");
        c.className = b + " ol-unselectable ol-control" + (this.f && this.l ? " ol-collapsed" : "") + (this.l ? "" : " ol-uncollapsible");
        c.appendChild(this.S);
        c.appendChild(d);
        Ke.call(this, {
            element: c, render: a.render ?
                a.render : Me, target: a.target
        });
        this.G = !0;
        this.o = {};
        this.j = {};
        this.W = {}
    }

    v(Le, Ke);
    function Me(a) {
        if (a = a.frameState) {
            var b, c, d, e, f, g, h, l, m, n, p, q = a.layerStatesArray, r = ua({}, a.attributions), u = {}, x = a.viewState.projection;
            c = 0;
            for (b = q.length; c < b; c++)if (g = q[c].layer.ga())if (n = ea(g).toString(), m = g.j)for (d = 0, e = m.length; d < e; d++)if (h = m[d], l = ea(h).toString(), !(l in r)) {
                if (f = a.usedTiles[n]) {
                    var y = g.pb(x);
                    a:{
                        p = h;
                        var A = x;
                        if (p.b) {
                            var z, K, L, R = void 0;
                            for (R in f)if (R in p.b) {
                                L = f[R];
                                var Ka;
                                z = 0;
                                for (K = p.b[R].length; z < K; ++z) {
                                    Ka = p.b[R][z];
                                    if (Wd(Ka, L)) {
                                        p = !0;
                                        break a
                                    }
                                    var jb = ee(y, le(A), parseInt(R, 10)), F =
                                        jb.da - jb.ba + 1;
                                    if (L.ba < jb.ba || L.da > jb.da)if (Wd(Ka, new Td(oa(L.ba, F), oa(L.da, F), L.ea, L.ha)) || L.da - L.ba + 1 > F && Wd(Ka, jb)) {
                                        p = !0;
                                        break a
                                    }
                                }
                            }
                            p = !1
                        } else p = !0
                    }
                } else p = !1;
                p ? (l in u && delete u[l], r[l] = h) : u[l] = h
            }
            b = [r, u];
            c = b[0];
            b = b[1];
            for (var ta in this.o)ta in c ? (this.j[ta] || (this.o[ta].style.display = "", this.j[ta] = !0), delete c[ta]) : ta in b ? (this.j[ta] && (this.o[ta].style.display = "none", delete this.j[ta]), delete b[ta]) : (Ie(this.o[ta]), delete this.o[ta], delete this.j[ta]);
            for (ta in c)d = document.createElement("LI"),
                d.innerHTML = c[ta].a, this.S.appendChild(d), this.o[ta] = d, this.j[ta] = !0;
            for (ta in b)d = document.createElement("LI"), d.innerHTML = b[ta].a, d.style.display = "none", this.S.appendChild(d), this.o[ta] = d;
            ta = !xa(this.j) || !xa(a.logos);
            this.G != ta && (this.element.style.display = ta ? "" : "none", this.G = ta);
            ta && xa(this.j) ? this.element.classList.add("ol-logo-only") : this.element.classList.remove("ol-logo-only");
            var Ra;
            a = a.logos;
            ta = this.W;
            for (Ra in ta)Ra in a || (Ie(ta[Ra]), delete ta[Ra]);
            for (var Tb in a)b = a[Tb], b instanceof HTMLElement &&
            (this.u.appendChild(b), ta[Tb] = b), Tb in ta || (Ra = new Image, Ra.src = Tb, "" === b ? c = Ra : (c = document.createElement("a"), c.href = b, c.appendChild(Ra)), this.u.appendChild(c), ta[Tb] = c);
            this.u.style.display = xa(a) ? "none" : ""
        } else this.G && (this.element.style.display = "none", this.G = !1)
    }

    k = Le.prototype;
    k.Pl = function (a) {
        a.preventDefault();
        Ne(this)
    };
    function Ne(a) {
        a.element.classList.toggle("ol-collapsed");
        a.f ? He(a.C, a.B) : He(a.B, a.C);
        a.f = !a.f
    }

    k.Ol = function () {
        return this.l
    };
    k.Rl = function (a) {
        this.l !== a && (this.l = a, this.element.classList.toggle("ol-uncollapsible"), !a && this.f && Ne(this))
    };
    k.Ql = function (a) {
        this.l && this.f !== a && Ne(this)
    };
    k.Nl = function () {
        return this.f
    };
    function Oe(a) {
        a = a ? a : {};
        this.f = void 0 !== a.className ? a.className : "ol-full-screen";
        var b = void 0 !== a.label ? a.label : "\u2922";
        this.l = "string" === typeof b ? document.createTextNode(b) : b;
        b = void 0 !== a.labelActive ? a.labelActive : "\u00d7";
        this.o = "string" === typeof b ? document.createTextNode(b) : b;
        var c = a.tipLabel ? a.tipLabel : "Toggle full-screen", b = document.createElement("button");
        b.className = this.f + "-" + Pe();
        b.setAttribute("type", "button");
        b.title = c;
        b.appendChild(this.l);
        w(b, "click", this.B, this);
        c = document.createElement("div");
        c.className = this.f + " ol-unselectable ol-control " + (Qe() ? "" : "ol-unsupported");
        c.appendChild(b);
        Ke.call(this, {element: c, target: a.target});
        this.C = void 0 !== a.keys ? a.keys : !1;
        this.j = a.source
    }

    v(Oe, Ke);
    Oe.prototype.B = function (a) {
        a.preventDefault();
        Qe() && (a = this.a) && (Pe() ? document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen() : (a = this.j ? "string" === typeof this.j ? document.getElementById(this.j) : this.j : a.uc(), this.C ? a.mozRequestFullScreenWithKeys ? a.mozRequestFullScreenWithKeys() : a.webkitRequestFullscreen ? a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) :
            Re(a) : Re(a)))
    };
    Oe.prototype.u = function () {
        var a = this.element.firstElementChild, b = this.a;
        Pe() ? (a.className = this.f + "-true", He(this.o, this.l)) : (a.className = this.f + "-false", He(this.l, this.o));
        b && b.Yc()
    };
    Oe.prototype.setMap = function (a) {
        Ke.prototype.setMap.call(this, a);
        a && this.s.push(w(document, Se(), this.u, this))
    };
    function Qe() {
        var a = document.body;
        return !!(a.webkitRequestFullscreen || a.mozRequestFullScreen && document.mozFullScreenEnabled || a.msRequestFullscreen && document.msFullscreenEnabled || a.requestFullscreen && document.fullscreenEnabled)
    }

    function Pe() {
        return !!(document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement)
    }

    function Re(a) {
        a.requestFullscreen ? a.requestFullscreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullscreen && a.webkitRequestFullscreen()
    }

    var Se = function () {
        var a;
        return function () {
            if (!a) {
                var b = document.body;
                b.webkitRequestFullscreen ? a = "webkitfullscreenchange" : b.mozRequestFullScreen ? a = "mozfullscreenchange" : b.msRequestFullscreen ? a = "MSFullscreenChange" : b.requestFullscreen && (a = "fullscreenchange")
            }
            return a
        }
    }();

    function Te(a) {
        a = a ? a : {};
        var b = void 0 !== a.className ? a.className : "ol-rotate", c = void 0 !== a.label ? a.label : "\u21e7";
        this.f = null;
        "string" === typeof c ? (this.f = document.createElement("span"), this.f.className = "ol-compass", this.f.textContent = c) : (this.f = c, this.f.classList.add("ol-compass"));
        var d = a.tipLabel ? a.tipLabel : "Reset rotation", c = document.createElement("button");
        c.className = b + "-reset";
        c.setAttribute("type", "button");
        c.title = d;
        c.appendChild(this.f);
        w(c, "click", Te.prototype.C, this);
        d = document.createElement("div");
        d.className = b + " ol-unselectable ol-control";
        d.appendChild(c);
        b = a.render ? a.render : Ue;
        this.l = a.resetNorth ? a.resetNorth : void 0;
        Ke.call(this, {element: d, render: b, target: a.target});
        this.o = void 0 !== a.duration ? a.duration : 250;
        this.j = void 0 !== a.autoHide ? a.autoHide : !0;
        this.u = void 0;
        this.j && this.element.classList.add("ol-hidden")
    }

    v(Te, Ke);
    Te.prototype.C = function (a) {
        a.preventDefault();
        if (void 0 !== this.l) this.l(); else {
            a = this.a;
            var b = a.$();
            if (b) {
                var c = b.Qa();
                void 0 !== c && (0 < this.o && (c %= 2 * Math.PI, c < -Math.PI && (c += 2 * Math.PI), c > Math.PI && (c -= 2 * Math.PI), a.$a(Rd({
                    rotation: c,
                    duration: this.o,
                    easing: Md
                }))), b.ie(0))
            }
        }
    };
    function Ue(a) {
        if (a = a.frameState) {
            a = a.viewState.rotation;
            if (a != this.u) {
                var b = "rotate(" + a + "rad)";
                if (this.j) {
                    var c = this.element.classList.contains("ol-hidden");
                    c || 0 !== a ? c && 0 !== a && this.element.classList.remove("ol-hidden") : this.element.classList.add("ol-hidden")
                }
                this.f.style.msTransform = b;
                this.f.style.webkitTransform = b;
                this.f.style.transform = b
            }
            this.u = a
        }
    };
    function Ve(a) {
        a = a ? a : {};
        var b = void 0 !== a.className ? a.className : "ol-zoom", c = void 0 !== a.delta ? a.delta : 1, d = void 0 !== a.zoomInLabel ? a.zoomInLabel : "+", e = void 0 !== a.zoomOutLabel ? a.zoomOutLabel : "\u2212", f = void 0 !== a.zoomInTipLabel ? a.zoomInTipLabel : "Zoom in", g = void 0 !== a.zoomOutTipLabel ? a.zoomOutTipLabel : "Zoom out", h = document.createElement("button");
        h.className = b + "-in";
        h.setAttribute("type", "button");
        h.title = f;
        h.appendChild("string" === typeof d ? document.createTextNode(d) : d);
        w(h, "click", Ve.prototype.j.bind(this,
            c));
        d = document.createElement("button");
        d.className = b + "-out";
        d.setAttribute("type", "button");
        d.title = g;
        d.appendChild("string" === typeof e ? document.createTextNode(e) : e);
        w(d, "click", Ve.prototype.j.bind(this, -c));
        c = document.createElement("div");
        c.className = b + " ol-unselectable ol-control";
        c.appendChild(h);
        c.appendChild(d);
        Ke.call(this, {element: c, target: a.target});
        this.f = void 0 !== a.duration ? a.duration : 250
    }

    v(Ve, Ke);
    Ve.prototype.j = function (a, b) {
        b.preventDefault();
        var c = this.a, d = c.$();
        if (d) {
            var e = d.Ma();
            e && (0 < this.f && c.$a(Sd({
                resolution: e,
                duration: this.f,
                easing: Md
            })), c = d.constrainResolution(e, a), d.Yb(c))
        }
    };
    function We(a) {
        a = a ? a : {};
        var b = new pe;
        (void 0 !== a.zoom ? a.zoom : 1) && b.push(new Ve(a.zoomOptions));
        (void 0 !== a.rotate ? a.rotate : 1) && b.push(new Te(a.rotateOptions));
        (void 0 !== a.attribution ? a.attribution : 1) && b.push(new Le(a.attributionOptions));
        return b
    };
    function Xe(a) {
        a = a ? a : {};
        var b = document.createElement("DIV");
        b.className = void 0 !== a.className ? a.className : "ol-mouse-position";
        Ke.call(this, {element: b, render: a.render ? a.render : Ye, target: a.target});
        w(this, Va(Ze), this.Sl, this);
        a.coordinateFormat && this.Uh(a.coordinateFormat);
        a.projection && this.$g(oc(a.projection));
        this.u = void 0 !== a.undefinedHTML ? a.undefinedHTML : "";
        this.o = b.innerHTML;
        this.l = this.j = this.f = null
    }

    v(Xe, Ke);
    function Ye(a) {
        a = a.frameState;
        a ? this.f != a.viewState.projection && (this.f = a.viewState.projection, this.j = null) : this.f = null;
        $e(this, this.l)
    }

    k = Xe.prototype;
    k.Sl = function () {
        this.j = null
    };
    k.wg = function () {
        return this.get(af)
    };
    k.Zg = function () {
        return this.get(Ze)
    };
    k.Jk = function (a) {
        this.l = this.a.Vd(a);
        $e(this, this.l)
    };
    k.Kk = function () {
        $e(this, null);
        this.l = null
    };
    k.setMap = function (a) {
        Ke.prototype.setMap.call(this, a);
        a && (a = a.a, this.s.push(w(a, "mousemove", this.Jk, this), w(a, "mouseout", this.Kk, this)))
    };
    k.Uh = function (a) {
        this.set(af, a)
    };
    k.$g = function (a) {
        this.set(Ze, a)
    };
    function $e(a, b) {
        var c = a.u;
        if (b && a.f) {
            if (!a.j) {
                var d = a.Zg();
                a.j = d ? rc(a.f, d) : Jc
            }
            if (d = a.a.Ja(b)) a.j(d, d), c = (c = a.wg()) ? c(d) : d.toString()
        }
        a.o && c == a.o || (a.element.innerHTML = c, a.o = c)
    }

    var Ze = "projection", af = "coordinateFormat";
    var bf = ["experimental-webgl", "webgl", "webkit-3d", "moz-webgl"];

    function cf(a, b) {
        var c, d, e = bf.length;
        for (d = 0; d < e; ++d)try {
            if (c = a.getContext(bf[d], b))return c
        } catch (f) {
        }
        return null
    };
    var df, ef = "undefined" !== typeof navigator ? navigator.userAgent.toLowerCase() : "", ff = -1 !== ef.indexOf("firefox"), gf = -1 !== ef.indexOf("safari") && -1 == ef.indexOf("chrom"), hf = -1 !== ef.indexOf("webkit") && -1 == ef.indexOf("edge"), jf = -1 !== ef.indexOf("macintosh"), kf = window.devicePixelRatio || 1, lf = !1, mf = function () {
        if (!("HTMLCanvasElement" in window))return !1;
        try {
            var a = document.createElement("CANVAS").getContext("2d");
            return a ? (void 0 !== a.setLineDash && (lf = !0), !0) : !1
        } catch (b) {
            return !1
        }
    }(), nf = "DeviceOrientationEvent" in
        window, of = "geolocation" in navigator, pf = "ontouchstart" in window, qf = "PointerEvent" in window, rf = !!navigator.msPointerEnabled, sf = !1, tf, uf = [];
    if ("WebGLRenderingContext" in window)try {
        var vf = cf(document.createElement("CANVAS"), {failIfMajorPerformanceCaveat: !0});
        vf && (sf = !0, tf = vf.getParameter(vf.MAX_TEXTURE_SIZE), uf = vf.getSupportedExtensions())
    } catch (a) {
    }
    df = sf;
    ca = uf;
    ba = tf;
    function wf(a, b) {
        this.b = a;
        this.c = b
    };
    function xf(a) {
        wf.call(this, a, {
            mousedown: this.dl,
            mousemove: this.el,
            mouseup: this.hl,
            mouseover: this.gl,
            mouseout: this.fl
        });
        this.a = a.g;
        this.g = []
    }

    v(xf, wf);
    function yf(a, b) {
        for (var c = a.g, d = b.clientX, e = b.clientY, f = 0, g = c.length, h; f < g && (h = c[f]); f++) {
            var l = Math.abs(e - h[1]);
            if (25 >= Math.abs(d - h[0]) && 25 >= l)return !0
        }
        return !1
    }

    function zf(a) {
        var b = Af(a, a), c = b.preventDefault;
        b.preventDefault = function () {
            a.preventDefault();
            c()
        };
        b.pointerId = 1;
        b.isPrimary = !0;
        b.pointerType = "mouse";
        return b
    }

    k = xf.prototype;
    k.dl = function (a) {
        if (!yf(this, a)) {
            if ((1).toString() in this.a) {
                var b = zf(a);
                Bf(this.b, "pointercancel", b, a);
                delete this.a[(1).toString()]
            }
            b = zf(a);
            this.a[(1).toString()] = a;
            Bf(this.b, "pointerdown", b, a)
        }
    };
    k.el = function (a) {
        if (!yf(this, a)) {
            var b = zf(a);
            Bf(this.b, "pointermove", b, a)
        }
    };
    k.hl = function (a) {
        if (!yf(this, a)) {
            var b = this.a[(1).toString()];
            b && b.button === a.button && (b = zf(a), Bf(this.b, "pointerup", b, a), delete this.a[(1).toString()])
        }
    };
    k.gl = function (a) {
        if (!yf(this, a)) {
            var b = zf(a);
            Cf(this.b, b, a)
        }
    };
    k.fl = function (a) {
        if (!yf(this, a)) {
            var b = zf(a);
            Df(this.b, b, a)
        }
    };
    function Ef(a) {
        wf.call(this, a, {
            MSPointerDown: this.ml,
            MSPointerMove: this.nl,
            MSPointerUp: this.ql,
            MSPointerOut: this.ol,
            MSPointerOver: this.pl,
            MSPointerCancel: this.ll,
            MSGotPointerCapture: this.jl,
            MSLostPointerCapture: this.kl
        });
        this.a = a.g;
        this.g = ["", "unavailable", "touch", "pen", "mouse"]
    }

    v(Ef, wf);
    function Ff(a, b) {
        var c = b;
        "number" === typeof b.pointerType && (c = Af(b, b), c.pointerType = a.g[b.pointerType]);
        return c
    }

    k = Ef.prototype;
    k.ml = function (a) {
        this.a[a.pointerId.toString()] = a;
        var b = Ff(this, a);
        Bf(this.b, "pointerdown", b, a)
    };
    k.nl = function (a) {
        var b = Ff(this, a);
        Bf(this.b, "pointermove", b, a)
    };
    k.ql = function (a) {
        var b = Ff(this, a);
        Bf(this.b, "pointerup", b, a);
        delete this.a[a.pointerId.toString()]
    };
    k.ol = function (a) {
        var b = Ff(this, a);
        Df(this.b, b, a)
    };
    k.pl = function (a) {
        var b = Ff(this, a);
        Cf(this.b, b, a)
    };
    k.ll = function (a) {
        var b = Ff(this, a);
        Bf(this.b, "pointercancel", b, a);
        delete this.a[a.pointerId.toString()]
    };
    k.kl = function (a) {
        this.b.b(new Gf("lostpointercapture", a, a))
    };
    k.jl = function (a) {
        this.b.b(new Gf("gotpointercapture", a, a))
    };
    function Hf(a) {
        wf.call(this, a, {
            pointerdown: this.Zn,
            pointermove: this.$n,
            pointerup: this.co,
            pointerout: this.ao,
            pointerover: this.bo,
            pointercancel: this.Yn,
            gotpointercapture: this.uk,
            lostpointercapture: this.cl
        })
    }

    v(Hf, wf);
    k = Hf.prototype;
    k.Zn = function (a) {
        If(this.b, a)
    };
    k.$n = function (a) {
        If(this.b, a)
    };
    k.co = function (a) {
        If(this.b, a)
    };
    k.ao = function (a) {
        If(this.b, a)
    };
    k.bo = function (a) {
        If(this.b, a)
    };
    k.Yn = function (a) {
        If(this.b, a)
    };
    k.cl = function (a) {
        If(this.b, a)
    };
    k.uk = function (a) {
        If(this.b, a)
    };
    function Gf(a, b, c) {
        La.call(this, a);
        this.b = b;
        a = c ? c : {};
        this.buttons = Jf(a);
        this.pressure = Kf(a, this.buttons);
        this.bubbles = "bubbles" in a ? a.bubbles : !1;
        this.cancelable = "cancelable" in a ? a.cancelable : !1;
        this.view = "view" in a ? a.view : null;
        this.detail = "detail" in a ? a.detail : null;
        this.screenX = "screenX" in a ? a.screenX : 0;
        this.screenY = "screenY" in a ? a.screenY : 0;
        this.clientX = "clientX" in a ? a.clientX : 0;
        this.clientY = "clientY" in a ? a.clientY : 0;
        this.button = "button" in a ? a.button : 0;
        this.relatedTarget = "relatedTarget" in a ? a.relatedTarget :
            null;
        this.pointerId = "pointerId" in a ? a.pointerId : 0;
        this.width = "width" in a ? a.width : 0;
        this.height = "height" in a ? a.height : 0;
        this.pointerType = "pointerType" in a ? a.pointerType : "";
        this.isPrimary = "isPrimary" in a ? a.isPrimary : !1;
        b.preventDefault && (this.preventDefault = function () {
            b.preventDefault()
        })
    }

    v(Gf, La);
    function Jf(a) {
        if (a.buttons || Lf) a = a.buttons; else switch (a.which) {
            case 1:
                a = 1;
                break;
            case 2:
                a = 4;
                break;
            case 3:
                a = 2;
                break;
            default:
                a = 0
        }
        return a
    }

    function Kf(a, b) {
        var c = 0;
        a.pressure ? c = a.pressure : c = b ? .5 : 0;
        return c
    }

    var Lf = !1;
    try {
        Lf = 1 === (new MouseEvent("click", {buttons: 1})).buttons
    } catch (a) {
    }
    ;
    function Mf(a, b) {
        wf.call(this, a, {touchstart: this.ep, touchmove: this.cp, touchend: this.bp, touchcancel: this.ap});
        this.a = a.g;
        this.j = b;
        this.g = void 0;
        this.i = 0;
        this.f = void 0
    }

    v(Mf, wf);
    k = Mf.prototype;
    k.Sh = function () {
        this.i = 0;
        this.f = void 0
    };
    function Nf(a, b, c) {
        b = Af(b, c);
        b.pointerId = c.identifier + 2;
        b.bubbles = !0;
        b.cancelable = !0;
        b.detail = a.i;
        b.button = 0;
        b.buttons = 1;
        b.width = c.webkitRadiusX || c.radiusX || 0;
        b.height = c.webkitRadiusY || c.radiusY || 0;
        b.pressure = c.webkitForce || c.force || .5;
        b.isPrimary = a.g === c.identifier;
        b.pointerType = "touch";
        b.clientX = c.clientX;
        b.clientY = c.clientY;
        b.screenX = c.screenX;
        b.screenY = c.screenY;
        return b
    }

    function Of(a, b, c) {
        function d() {
            b.preventDefault()
        }

        var e = Array.prototype.slice.call(b.changedTouches), f = e.length, g, h;
        for (g = 0; g < f; ++g)h = Nf(a, b, e[g]), h.preventDefault = d, c.call(a, b, h)
    }

    k.ep = function (a) {
        var b = a.touches, c = Object.keys(this.a), d = c.length;
        if (d >= b.length) {
            var e = [], f, g, h;
            for (f = 0; f < d; ++f) {
                g = c[f];
                h = this.a[g];
                var l;
                if (!(l = 1 == g))a:{
                    l = b.length;
                    for (var m, n = 0; n < l; n++)if (m = b[n], m.identifier === g - 2) {
                        l = !0;
                        break a
                    }
                    l = !1
                }
                l || e.push(h.out)
            }
            for (f = 0; f < e.length; ++f)this.Re(a, e[f])
        }
        b = a.changedTouches[0];
        c = Object.keys(this.a).length;
        if (0 === c || 1 === c && (1).toString() in this.a) this.g = b.identifier, void 0 !== this.f && clearTimeout(this.f);
        Pf(this, a);
        this.i++;
        Of(this, a, this.Un)
    };
    k.Un = function (a, b) {
        this.a[b.pointerId] = {target: b.target, out: b, Ch: b.target};
        var c = this.b;
        b.bubbles = !0;
        Bf(c, "pointerover", b, a);
        c = this.b;
        b.bubbles = !1;
        Bf(c, "pointerenter", b, a);
        Bf(this.b, "pointerdown", b, a)
    };
    k.cp = function (a) {
        a.preventDefault();
        Of(this, a, this.il)
    };
    k.il = function (a, b) {
        var c = this.a[b.pointerId];
        if (c) {
            var d = c.out, e = c.Ch;
            Bf(this.b, "pointermove", b, a);
            d && e !== b.target && (d.relatedTarget = b.target, b.relatedTarget = e, d.target = e, b.target ? (Df(this.b, d, a), Cf(this.b, b, a)) : (b.target = e, b.relatedTarget = null, this.Re(a, b)));
            c.out = b;
            c.Ch = b.target
        }
    };
    k.bp = function (a) {
        Pf(this, a);
        Of(this, a, this.fp)
    };
    k.fp = function (a, b) {
        Bf(this.b, "pointerup", b, a);
        this.b.out(b, a);
        Qf(this.b, b, a);
        delete this.a[b.pointerId];
        b.isPrimary && (this.g = void 0, this.f = setTimeout(this.Sh.bind(this), 200))
    };
    k.ap = function (a) {
        Of(this, a, this.Re)
    };
    k.Re = function (a, b) {
        Bf(this.b, "pointercancel", b, a);
        this.b.out(b, a);
        Qf(this.b, b, a);
        delete this.a[b.pointerId];
        b.isPrimary && (this.g = void 0, this.f = setTimeout(this.Sh.bind(this), 200))
    };
    function Pf(a, b) {
        var c = a.j.g, d = b.changedTouches[0];
        if (a.g === d.identifier) {
            var e = [d.clientX, d.clientY];
            c.push(e);
            setTimeout(function () {
                bb(c, e)
            }, 2500)
        }
    };
    function Rf(a) {
        Na.call(this);
        this.i = a;
        this.g = {};
        this.c = {};
        this.a = [];
        qf ? Sf(this, new Hf(this)) : rf ? Sf(this, new Ef(this)) : (a = new xf(this), Sf(this, a), pf && Sf(this, new Mf(this, a)));
        a = this.a.length;
        for (var b, c = 0; c < a; c++)b = this.a[c], Tf(this, Object.keys(b.c))
    }

    v(Rf, Na);
    function Sf(a, b) {
        var c = Object.keys(b.c);
        c && (c.forEach(function (a) {
            var c = b.c[a];
            c && (this.c[a] = c.bind(b))
        }, a), a.a.push(b))
    }

    Rf.prototype.f = function (a) {
        var b = this.c[a.type];
        b && b(a)
    };
    function Tf(a, b) {
        b.forEach(function (a) {
            w(this.i, a, this.f, this)
        }, a)
    }

    function Uf(a, b) {
        b.forEach(function (a) {
            Fa(this.i, a, this.f, this)
        }, a)
    }

    function Af(a, b) {
        for (var c = {}, d, e = 0, f = Vf.length; e < f; e++)d = Vf[e][0], c[d] = a[d] || b[d] || Vf[e][1];
        return c
    }

    function Qf(a, b, c) {
        b.bubbles = !1;
        Bf(a, "pointerleave", b, c)
    }

    Rf.prototype.out = function (a, b) {
        a.bubbles = !0;
        Bf(this, "pointerout", a, b)
    };
    function Df(a, b, c) {
        a.out(b, c);
        var d = b.target, e = b.relatedTarget;
        d && e && d.contains(e) || Qf(a, b, c)
    }

    function Cf(a, b, c) {
        b.bubbles = !0;
        Bf(a, "pointerover", b, c);
        var d = b.target, e = b.relatedTarget;
        d && e && d.contains(e) || (b.bubbles = !1, Bf(a, "pointerenter", b, c))
    }

    function Bf(a, b, c, d) {
        a.b(new Gf(b, d, c))
    }

    function If(a, b) {
        a.b(new Gf(b.type, b, b))
    }

    Rf.prototype.la = function () {
        for (var a = this.a.length, b, c = 0; c < a; c++)b = this.a[c], Uf(this, Object.keys(b.c));
        Na.prototype.la.call(this)
    };
    var Vf = [["bubbles", !1], ["cancelable", !1], ["view", null], ["detail", null], ["screenX", 0], ["screenY", 0], ["clientX", 0], ["clientY", 0], ["ctrlKey", !1], ["altKey", !1], ["shiftKey", !1], ["metaKey", !1], ["button", 0], ["relatedTarget", null], ["buttons", 0], ["pointerId", 0], ["width", 0], ["height", 0], ["pressure", 0], ["tiltX", 0], ["tiltY", 0], ["pointerType", ""], ["hwTimestamp", 0], ["isPrimary", !1], ["type", ""], ["target", null], ["currentTarget", null], ["which", 0]];

    function Wf(a, b, c, d, e) {
        Je.call(this, a, b, e);
        this.originalEvent = c;
        this.pixel = b.Vd(c);
        this.coordinate = b.Ja(this.pixel);
        this.dragging = void 0 !== d ? d : !1
    }

    v(Wf, Je);
    Wf.prototype.preventDefault = function () {
        Je.prototype.preventDefault.call(this);
        this.originalEvent.preventDefault()
    };
    Wf.prototype.stopPropagation = function () {
        Je.prototype.stopPropagation.call(this);
        this.originalEvent.stopPropagation()
    };
    function Xf(a, b, c, d, e) {
        Wf.call(this, a, b, c.b, d, e);
        this.b = c
    }

    v(Xf, Wf);
    function Yf(a) {
        Na.call(this);
        this.f = a;
        this.j = 0;
        this.l = !1;
        this.c = [];
        this.g = null;
        a = this.f.a;
        this.u = 0;
        this.T = {};
        this.i = new Rf(a);
        this.a = null;
        this.o = w(this.i, "pointerdown", this.Mk, this);
        this.s = w(this.i, "pointermove", this.Co, this)
    }

    v(Yf, Na);
    function Zf(a, b) {
        var c = new Xf($f, a.f, b);
        a.b(c);
        0 !== a.j ? (clearTimeout(a.j), a.j = 0, c = new Xf(ag, a.f, b), a.b(c)) : a.j = setTimeout(function () {
            this.j = 0;
            var a = new Xf(bg, this.f, b);
            this.b(a)
        }.bind(a), 250)
    }

    function cg(a, b) {
        b.type == dg || b.type == eg ? delete a.T[b.pointerId] : b.type == fg && (a.T[b.pointerId] = !0);
        a.u = Object.keys(a.T).length
    }

    k = Yf.prototype;
    k.Kg = function (a) {
        cg(this, a);
        var b = new Xf(dg, this.f, a);
        this.b(b);
        !this.l && 0 === a.button && Zf(this, this.g);
        0 === this.u && (this.c.forEach(za), this.c.length = 0, this.l = !1, this.g = null, Ja(this.a), this.a = null)
    };
    k.Mk = function (a) {
        cg(this, a);
        var b = new Xf(fg, this.f, a);
        this.b(b);
        this.g = a;
        0 === this.c.length && (this.a = new Rf(document), this.c.push(w(this.a, gg, this.Fl, this), w(this.a, dg, this.Kg, this), w(this.i, eg, this.Kg, this)))
    };
    k.Fl = function (a) {
        if (a.clientX != this.g.clientX || a.clientY != this.g.clientY) {
            this.l = !0;
            var b = new Xf(hg, this.f, a, this.l);
            this.b(b)
        }
        a.preventDefault()
    };
    k.Co = function (a) {
        this.b(new Xf(a.type, this.f, a, !(!this.g || a.clientX == this.g.clientX && a.clientY == this.g.clientY)))
    };
    k.la = function () {
        this.s && (za(this.s), this.s = null);
        this.o && (za(this.o), this.o = null);
        this.c.forEach(za);
        this.c.length = 0;
        this.a && (Ja(this.a), this.a = null);
        this.i && (Ja(this.i), this.i = null);
        Na.prototype.la.call(this)
    };
    var bg = "singleclick", $f = "click", ag = "dblclick", hg = "pointerdrag", gg = "pointermove", fg = "pointerdown", dg = "pointerup", eg = "pointercancel", ig = {
        xp: bg,
        mp: $f,
        np: ag,
        qp: hg,
        tp: gg,
        pp: fg,
        wp: dg,
        vp: "pointerover",
        up: "pointerout",
        rp: "pointerenter",
        sp: "pointerleave",
        op: eg
    };

    function jg(a, b) {
        Na.call(this);
        this.xa = a;
        this.state = b;
        this.a = null;
        this.key = ""
    }

    v(jg, Na);
    function kg(a) {
        a.b("change")
    }

    jg.prototype.Xa = function () {
        return this.key + "/" + this.xa
    };
    function lg(a) {
        if (!a.a)return a;
        var b = a.a;
        do {
            if (b.U() == mg)return b;
            b = b.a
        } while (b);
        return a
    }

    jg.prototype.i = function () {
        return this.xa
    };
    jg.prototype.U = function () {
        return this.state
    };
    var mg = 2;

    function ng(a, b) {
        this.o = a;
        this.f = b;
        this.b = [];
        this.g = [];
        this.a = {}
    }

    ng.prototype.clear = function () {
        this.b.length = 0;
        this.g.length = 0;
        va(this.a)
    };
    function og(a) {
        var b = a.b, c = a.g, d = b[0];
        1 == b.length ? (b.length = 0, c.length = 0) : (b[0] = b.pop(), c[0] = c.pop(), pg(a, 0));
        b = a.f(d);
        delete a.a[b];
        return d
    }

    ng.prototype.c = function (a) {
        ha(!(this.f(a) in this.a), 31);
        var b = this.o(a);
        return Infinity != b ? (this.b.push(a), this.g.push(b), this.a[this.f(a)] = !0, qg(this, 0, this.b.length - 1), !0) : !1
    };
    function pg(a, b) {
        for (var c = a.b, d = a.g, e = c.length, f = c[b], g = d[b], h = b; b < e >> 1;) {
            var l = 2 * b + 1, m = 2 * b + 2, l = m < e && d[m] < d[l] ? m : l;
            c[b] = c[l];
            d[b] = d[l];
            b = l
        }
        c[b] = f;
        d[b] = g;
        qg(a, h, b)
    }

    function qg(a, b, c) {
        var d = a.b;
        a = a.g;
        for (var e = d[c], f = a[c]; c > b;) {
            var g = c - 1 >> 1;
            if (a[g] > f) d[c] = d[g], a[c] = a[g], c = g; else break
        }
        d[c] = e;
        a[c] = f
    }

    function rg(a) {
        var b = a.o, c = a.b, d = a.g, e = 0, f = c.length, g, h, l;
        for (h = 0; h < f; ++h)g = c[h], l = b(g), Infinity == l ? delete a.a[a.f(g)] : (d[e] = l, c[e++] = g);
        c.length = e;
        d.length = e;
        for (b = (a.b.length >> 1) - 1; 0 <= b; b--)pg(a, b)
    };
    function sg(a, b) {
        ng.call(this, function (b) {
            return a.apply(null, b)
        }, function (a) {
            return a[0].Xa()
        });
        this.s = b;
        this.j = 0;
        this.i = {}
    }

    v(sg, ng);
    sg.prototype.c = function (a) {
        var b = ng.prototype.c.call(this, a);
        b && w(a[0], "change", this.l, this);
        return b
    };
    sg.prototype.l = function (a) {
        a = a.target;
        var b = a.U();
        if (b === mg || 3 === b || 4 === b || 5 === b) Fa(a, "change", this.l, this), a = a.Xa(), a in this.i && (delete this.i[a], --this.j), this.s()
    };
    function tg(a, b, c) {
        for (var d = 0, e, f; a.j < b && d < c && 0 < a.b.length;)e = og(a)[0], f = e.Xa(), 0 !== e.U() || f in a.i || (a.i[f] = !0, ++a.j, ++d, e.load())
    };
    function ug(a, b, c) {
        this.f = a;
        this.g = b;
        this.i = c;
        this.b = [];
        this.a = this.c = 0
    }

    function vg(a, b) {
        var c = a.f, d = a.a, e = a.g - d, f = Math.log(a.g / a.a) / a.f;
        return Qd({
            source: b, duration: f, easing: function (a) {
                return d * (Math.exp(c * a * f) - 1) / e
            }
        })
    };
    function wg(a) {
        Ta.call(this);
        this.s = null;
        this.Ba(!0);
        this.handleEvent = a.handleEvent
    }

    v(wg, Ta);
    wg.prototype.f = function () {
        return this.get(xg)
    };
    wg.prototype.c = function () {
        return this.s
    };
    wg.prototype.Ba = function (a) {
        this.set(xg, a)
    };
    wg.prototype.setMap = function (a) {
        this.s = a
    };
    function yg(a, b, c, d, e) {
        if (void 0 !== c) {
            var f = b.Qa(), g = b.ab();
            void 0 !== f && g && e && 0 < e && (a.$a(Rd({
                rotation: f,
                duration: e,
                easing: Md
            })), d && a.$a(Qd({source: g, duration: e, easing: Md})));
            b.rotate(c, d)
        }
    }

    function zg(a, b, c, d, e) {
        var f = b.Ma();
        c = b.constrainResolution(f, c, 0);
        Ag(a, b, c, d, e)
    }

    function Ag(a, b, c, d, e) {
        if (c) {
            var f = b.Ma(), g = b.ab();
            void 0 !== f && g && c !== f && e && 0 < e && (a.$a(Sd({
                resolution: f,
                duration: e,
                easing: Md
            })), d && a.$a(Qd({source: g, duration: e, easing: Md})));
            if (d) {
                var h;
                a = b.ab();
                e = b.Ma();
                void 0 !== a && void 0 !== e && (h = [d[0] - c * (d[0] - a[0]) / e, d[1] - c * (d[1] - a[1]) / e]);
                b.rb(h)
            }
            b.Yb(c)
        }
    }

    var xg = "active";

    function Bg(a) {
        a = a ? a : {};
        this.a = a.delta ? a.delta : 1;
        wg.call(this, {handleEvent: Cg});
        this.i = void 0 !== a.duration ? a.duration : 250
    }

    v(Bg, wg);
    function Cg(a) {
        var b = !1, c = a.originalEvent;
        if (a.type == ag) {
            var b = a.map, d = a.coordinate, c = c.shiftKey ? -this.a : this.a, e = b.$();
            zg(b, e, c, d, this.i);
            a.preventDefault();
            b = !0
        }
        return !b
    };
    function Dg(a) {
        a = a.originalEvent;
        return a.altKey && !(a.metaKey || a.ctrlKey) && a.shiftKey
    }

    function Eg(a) {
        a = a.originalEvent;
        return 0 == a.button && !(hf && jf && a.ctrlKey)
    }

    function Fg(a) {
        return "pointermove" == a.type
    }

    function Gg(a) {
        return a.type == bg
    }

    function Hg(a) {
        a = a.originalEvent;
        return !a.altKey && !(a.metaKey || a.ctrlKey) && !a.shiftKey
    }

    function Ig(a) {
        a = a.originalEvent;
        return !a.altKey && !(a.metaKey || a.ctrlKey) && a.shiftKey
    }

    function Jg(a) {
        a = a.originalEvent.target.tagName;
        return "INPUT" !== a && "SELECT" !== a && "TEXTAREA" !== a
    }

    function Kg(a) {
        ha(a.b, 56);
        return "mouse" == a.b.pointerType
    }

    function Lg(a) {
        a = a.b;
        return a.isPrimary && 0 === a.button
    };
    function Mg(a) {
        a = a ? a : {};
        wg.call(this, {handleEvent: a.handleEvent ? a.handleEvent : Ng});
        this.Me = a.handleDownEvent ? a.handleDownEvent : hc;
        this.Je = a.handleDragEvent ? a.handleDragEvent : da;
        this.hj = a.handleMoveEvent ? a.handleMoveEvent : da;
        this.pj = a.handleUpEvent ? a.handleUpEvent : hc;
        this.C = !1;
        this.Z = {};
        this.l = []
    }

    v(Mg, wg);
    function Og(a) {
        for (var b = a.length, c = 0, d = 0, e = 0; e < b; e++)c += a[e].clientX, d += a[e].clientY;
        return [c / b, d / b]
    }

    function Ng(a) {
        if (!(a instanceof Xf))return !0;
        var b = !1, c = a.type;
        if (c === fg || c === hg || c === dg) c = a.b, a.type == dg ? delete this.Z[c.pointerId] : a.type == fg ? this.Z[c.pointerId] = c : c.pointerId in this.Z && (this.Z[c.pointerId] = c), this.l = wa(this.Z);
        this.C && (a.type == hg ? this.Je(a) : a.type == dg && (this.C = this.pj(a)));
        a.type == fg ? (this.C = a = this.Me(a), b = this.Fc(a)) : a.type == gg && this.hj(a);
        return !b
    }

    Mg.prototype.Fc = function (a) {
        return a
    };
    function Pg(a) {
        Mg.call(this, {handleDownEvent: Qg, handleDragEvent: Rg, handleUpEvent: Sg});
        a = a ? a : {};
        this.a = a.kinetic;
        this.i = this.j = null;
        this.u = a.condition ? a.condition : Hg;
        this.o = !1
    }

    v(Pg, Mg);
    function Rg(a) {
        var b = Og(this.l);
        this.a && this.a.b.push(b[0], b[1], Date.now());
        if (this.i) {
            var c = this.i[0] - b[0], d = b[1] - this.i[1];
            a = a.map.$();
            var e = a.U(), d = c = [c, d], f = e.resolution;
            d[0] *= f;
            d[1] *= f;
            wb(c, e.rotation);
            rb(c, e.center);
            c = a.Rd(c);
            a.rb(c)
        }
        this.i = b
    }

    function Sg(a) {
        var b = a.map;
        a = b.$();
        if (0 === this.l.length) {
            var c;
            if (c = !this.o && this.a)if (c = this.a, 6 > c.b.length) c = !1; else {
                var d = Date.now() - c.i, e = c.b.length - 3;
                if (c.b[e + 2] < d) c = !1; else {
                    for (var f = e - 3; 0 < f && c.b[f + 2] > d;)f -= 3;
                    var d = c.b[e + 2] - c.b[f + 2], g = c.b[e] - c.b[f], e = c.b[e + 1] - c.b[f + 1];
                    c.c = Math.atan2(e, g);
                    c.a = Math.sqrt(g * g + e * e) / d;
                    c = c.a > c.g
                }
            }
            c ? (c = this.a, c = (c.g - c.a) / c.f, e = this.a.c, f = a.ab(), this.j = vg(this.a, f), b.$a(this.j), f = b.Da(f), b = b.Ja([f[0] - c * Math.cos(e), f[1] - c * Math.sin(e)]), b = a.Rd(b), a.rb(b)) : b.render();
            Kd(a,
                -1);
            return !1
        }
        this.i = null;
        return !0
    }

    function Qg(a) {
        if (0 < this.l.length && this.u(a)) {
            var b = a.map, c = b.$();
            this.i = null;
            this.C || Kd(c, 1);
            this.j && bb(b.S, this.j) && (c.rb(a.frameState.viewState.center), this.j = null);
            this.a && (a = this.a, a.b.length = 0, a.c = 0, a.a = 0);
            this.o = 1 < this.l.length;
            return !0
        }
        return !1
    }

    Pg.prototype.Fc = hc;
    function Tg(a) {
        a = a ? a : {};
        Mg.call(this, {handleDownEvent: Ug, handleDragEvent: Vg, handleUpEvent: Wg});
        this.i = a.condition ? a.condition : Dg;
        this.a = void 0;
        this.j = void 0 !== a.duration ? a.duration : 250
    }

    v(Tg, Mg);
    function Vg(a) {
        if (Kg(a)) {
            var b = a.map, c = b.kb();
            a = a.pixel;
            c = Math.atan2(c[1] / 2 - a[1], a[0] - c[0] / 2);
            if (void 0 !== this.a) {
                a = c - this.a;
                var d = b.$(), e = d.Qa();
                yg(b, d, e - a)
            }
            this.a = c
        }
    }

    function Wg(a) {
        if (!Kg(a))return !0;
        a = a.map;
        var b = a.$();
        Kd(b, -1);
        var c = b.Qa(), d = this.j, c = b.constrainRotation(c, 0);
        yg(a, b, c, void 0, d);
        return !1
    }

    function Ug(a) {
        return Kg(a) && Eg(a) && this.i(a) ? (Kd(a.map.$(), 1), this.a = void 0, !0) : !1
    }

    Tg.prototype.Fc = hc;
    function Xg(a) {
        this.f = null;
        this.a = document.createElement("div");
        this.a.style.position = "absolute";
        this.a.className = "ol-box " + a;
        this.g = this.c = this.b = null
    }

    v(Xg, Ia);
    Xg.prototype.la = function () {
        this.setMap(null)
    };
    function Yg(a) {
        var b = a.c, c = a.g;
        a = a.a.style;
        a.left = Math.min(b[0], c[0]) + "px";
        a.top = Math.min(b[1], c[1]) + "px";
        a.width = Math.abs(c[0] - b[0]) + "px";
        a.height = Math.abs(c[1] - b[1]) + "px"
    }

    Xg.prototype.setMap = function (a) {
        if (this.b) {
            this.b.C.removeChild(this.a);
            var b = this.a.style;
            b.left = b.top = b.width = b.height = "inherit"
        }
        (this.b = a) && this.b.C.appendChild(this.a)
    };
    function Zg(a) {
        var b = a.c, c = a.g, b = [b, [b[0], c[1]], c, [c[0], b[1]]].map(a.b.Ja, a.b);
        b[4] = b[0].slice();
        a.f ? a.f.ma([b]) : a.f = new C([b])
    }

    Xg.prototype.V = function () {
        return this.f
    };
    function $g(a) {
        Mg.call(this, {handleDownEvent: ah, handleDragEvent: bh, handleUpEvent: ch});
        a = a ? a : {};
        this.a = new Xg(a.className || "ol-dragbox");
        this.i = null;
        this.B = a.condition ? a.condition : gc;
        this.u = a.boxEndCondition ? a.boxEndCondition : dh
    }

    v($g, Mg);
    function dh(a, b, c) {
        a = c[0] - b[0];
        b = c[1] - b[1];
        return 64 <= a * a + b * b
    }

    function bh(a) {
        if (Kg(a)) {
            var b = this.a, c = a.pixel;
            b.c = this.i;
            b.g = c;
            Zg(b);
            Yg(b);
            this.b(new eh(fh, a.coordinate, a))
        }
    }

    $g.prototype.V = function () {
        return this.a.V()
    };
    $g.prototype.o = da;
    function ch(a) {
        if (!Kg(a))return !0;
        this.a.setMap(null);
        this.u(a, this.i, a.pixel) && (this.o(a), this.b(new eh(gh, a.coordinate, a)));
        return !1
    }

    function ah(a) {
        if (Kg(a) && Eg(a) && this.B(a)) {
            this.i = a.pixel;
            this.a.setMap(a.map);
            var b = this.a, c = this.i;
            b.c = this.i;
            b.g = c;
            Zg(b);
            Yg(b);
            this.b(new eh(hh, a.coordinate, a));
            return !0
        }
        return !1
    }

    var hh = "boxstart", fh = "boxdrag", gh = "boxend";

    function eh(a, b, c) {
        La.call(this, a);
        this.coordinate = b;
        this.mapBrowserEvent = c
    }

    v(eh, La);
    function ih(a) {
        a = a ? a : {};
        var b = a.condition ? a.condition : Ig;
        this.j = void 0 !== a.duration ? a.duration : 200;
        this.G = void 0 !== a.out ? a.out : !1;
        $g.call(this, {condition: b, className: a.className || "ol-dragzoom"})
    }

    v(ih, $g);
    ih.prototype.o = function () {
        var a = this.s, b = a.$(), c = a.kb(), d = this.V().D();
        if (this.G) {
            var e = b.Jc(c), d = [a.Da(Rb(d)), a.Da(Ub(d))], f = Kb(Infinity, Infinity, -Infinity, -Infinity, void 0), g, h;
            g = 0;
            for (h = d.length; g < h; ++g)Cb(f, d[g]);
            ec(e, 1 / Gd(f, c));
            d = e
        }
        c = b.constrainResolution(Gd(d, c));
        e = b.Ma();
        f = b.ab();
        a.$a(Sd({resolution: e, duration: this.j, easing: Md}));
        a.$a(Qd({source: f, duration: this.j, easing: Md}));
        b.rb(ac(d));
        b.Yb(c)
    };
    function jh(a) {
        wg.call(this, {handleEvent: kh});
        a = a || {};
        this.a = function (a) {
            return Hg(a) && Jg(a)
        };
        this.i = void 0 !== a.condition ? a.condition : this.a;
        this.j = void 0 !== a.duration ? a.duration : 100;
        this.l = void 0 !== a.pixelDelta ? a.pixelDelta : 128
    }

    v(jh, wg);
    function kh(a) {
        var b = !1;
        if ("keydown" == a.type) {
            var c = a.originalEvent.keyCode;
            if (this.i(a) && (40 == c || 37 == c || 39 == c || 38 == c)) {
                var d = a.map, b = d.$(), e = b.Ma() * this.l, f = 0, g = 0;
                40 == c ? g = -e : 37 == c ? f = -e : 39 == c ? f = e : g = e;
                c = [f, g];
                wb(c, b.Qa());
                e = this.j;
                if (f = b.ab()) e && 0 < e && d.$a(Qd({
                    source: f,
                    duration: e,
                    easing: Od
                })), d = b.Rd([f[0] + c[0], f[1] + c[1]]), b.rb(d);
                a.preventDefault();
                b = !0
            }
        }
        return !b
    };
    function lh(a) {
        wg.call(this, {handleEvent: mh});
        a = a ? a : {};
        this.i = a.condition ? a.condition : Jg;
        this.a = a.delta ? a.delta : 1;
        this.j = void 0 !== a.duration ? a.duration : 100
    }

    v(lh, wg);
    function mh(a) {
        var b = !1;
        if ("keydown" == a.type || "keypress" == a.type) {
            var c = a.originalEvent.charCode;
            if (this.i(a) && (43 == c || 45 == c)) {
                var b = a.map, c = 43 == c ? this.a : -this.a, d = b.$();
                zg(b, d, c, void 0, this.j);
                a.preventDefault();
                b = !0
            }
        }
        return !b
    };
    function nh(a) {
        wg.call(this, {handleEvent: oh});
        a = a || {};
        this.i = 0;
        this.C = void 0 !== a.duration ? a.duration : 250;
        this.o = void 0 !== a.useAnchor ? a.useAnchor : !0;
        this.a = null;
        this.l = this.j = void 0
    }

    v(nh, wg);
    function oh(a) {
        var b = !1;
        if ("wheel" == a.type || "mousewheel" == a.type) {
            var b = a.map, c = a.originalEvent;
            this.o && (this.a = a.coordinate);
            var d;
            "wheel" == a.type ? (d = c.deltaY, ff && c.deltaMode === WheelEvent.DOM_DELTA_PIXEL && (d /= kf), c.deltaMode === WheelEvent.DOM_DELTA_LINE && (d *= 40)) : "mousewheel" == a.type && (d = -c.wheelDeltaY, gf && (d /= 3));
            this.i += d;
            void 0 === this.j && (this.j = Date.now());
            d = Math.max(80 - (Date.now() - this.j), 0);
            clearTimeout(this.l);
            this.l = setTimeout(this.u.bind(this, b), d);
            a.preventDefault();
            b = !0
        }
        return !b
    }

    nh.prototype.u = function (a) {
        var b = ia(this.i, -1, 1), c = a.$();
        zg(a, c, -b, this.a, this.C);
        this.i = 0;
        this.a = null;
        this.l = this.j = void 0
    };
    nh.prototype.B = function (a) {
        this.o = a;
        a || (this.a = null)
    };
    function ph(a) {
        Mg.call(this, {handleDownEvent: qh, handleDragEvent: rh, handleUpEvent: sh});
        a = a || {};
        this.i = null;
        this.j = void 0;
        this.a = !1;
        this.o = 0;
        this.B = void 0 !== a.threshold ? a.threshold : .3;
        this.u = void 0 !== a.duration ? a.duration : 250
    }

    v(ph, Mg);
    function rh(a) {
        var b = 0, c = this.l[0], d = this.l[1], c = Math.atan2(d.clientY - c.clientY, d.clientX - c.clientX);
        void 0 !== this.j && (b = c - this.j, this.o += b, !this.a && Math.abs(this.o) > this.B && (this.a = !0));
        this.j = c;
        a = a.map;
        c = a.a.getBoundingClientRect();
        d = Og(this.l);
        d[0] -= c.left;
        d[1] -= c.top;
        this.i = a.Ja(d);
        this.a && (c = a.$(), d = c.Qa(), a.render(), yg(a, c, d + b, this.i))
    }

    function sh(a) {
        if (2 > this.l.length) {
            a = a.map;
            var b = a.$();
            Kd(b, -1);
            if (this.a) {
                var c = b.Qa(), d = this.i, e = this.u, c = b.constrainRotation(c, 0);
                yg(a, b, c, d, e)
            }
            return !1
        }
        return !0
    }

    function qh(a) {
        return 2 <= this.l.length ? (a = a.map, this.i = null, this.j = void 0, this.a = !1, this.o = 0, this.C || Kd(a.$(), 1), a.render(), !0) : !1
    }

    ph.prototype.Fc = hc;
    function th(a) {
        Mg.call(this, {handleDownEvent: uh, handleDragEvent: vh, handleUpEvent: wh});
        a = a ? a : {};
        this.i = null;
        this.o = void 0 !== a.duration ? a.duration : 400;
        this.a = void 0;
        this.j = 1
    }

    v(th, Mg);
    function vh(a) {
        var b = 1, c = this.l[0], d = this.l[1], e = c.clientX - d.clientX, c = c.clientY - d.clientY, e = Math.sqrt(e * e + c * c);
        void 0 !== this.a && (b = this.a / e);
        this.a = e;
        1 != b && (this.j = b);
        a = a.map;
        var e = a.$(), c = e.Ma(), d = a.a.getBoundingClientRect(), f = Og(this.l);
        f[0] -= d.left;
        f[1] -= d.top;
        this.i = a.Ja(f);
        a.render();
        Ag(a, e, c * b, this.i)
    }

    function wh(a) {
        if (2 > this.l.length) {
            a = a.map;
            var b = a.$();
            Kd(b, -1);
            var c = b.Ma(), d = this.i, e = this.o, c = b.constrainResolution(c, 0, this.j - 1);
            Ag(a, b, c, d, e);
            return !1
        }
        return !0
    }

    function uh(a) {
        return 2 <= this.l.length ? (a = a.map, this.i = null, this.a = void 0, this.j = 1, this.C || Kd(a.$(), 1), a.render(), !0) : !1
    }

    th.prototype.Fc = hc;
    function xh(a) {
        a = a ? a : {};
        var b = new pe, c = new ug(-.005, .05, 100);
        (void 0 !== a.altShiftDragRotate ? a.altShiftDragRotate : 1) && b.push(new Tg);
        (void 0 !== a.doubleClickZoom ? a.doubleClickZoom : 1) && b.push(new Bg({
            delta: a.zoomDelta,
            duration: a.zoomDuration
        }));
        (void 0 !== a.dragPan ? a.dragPan : 1) && b.push(new Pg({kinetic: c}));
        (void 0 !== a.pinchRotate ? a.pinchRotate : 1) && b.push(new ph);
        (void 0 !== a.pinchZoom ? a.pinchZoom : 1) && b.push(new th({duration: a.zoomDuration}));
        if (void 0 !== a.keyboard ? a.keyboard : 1) b.push(new jh), b.push(new lh({
            delta: a.zoomDelta,
            duration: a.zoomDuration
        }));
        (void 0 !== a.mouseWheelZoom ? a.mouseWheelZoom : 1) && b.push(new nh({duration: a.zoomDuration}));
        (void 0 !== a.shiftDragZoom ? a.shiftDragZoom : 1) && b.push(new ih({duration: a.zoomDuration}));
        return b
    };
    function yh(a) {
        Ta.call(this);
        var b = ua({}, a);
        b.opacity = void 0 !== a.opacity ? a.opacity : 1;
        b.visible = void 0 !== a.visible ? a.visible : !0;
        b.zIndex = void 0 !== a.zIndex ? a.zIndex : 0;
        b.maxResolution = void 0 !== a.maxResolution ? a.maxResolution : Infinity;
        b.minResolution = void 0 !== a.minResolution ? a.minResolution : 0;
        this.H(b);
        this.a = {layer: this, td: !0}
    }

    v(yh, Ta);
    function zh(a) {
        a.a.opacity = ia(a.Rb(), 0, 1);
        a.a.mi = a.hf();
        a.a.visible = a.zb();
        a.a.extent = a.D();
        a.a.zIndex = a.Sb();
        a.a.maxResolution = a.Pb();
        a.a.minResolution = Math.max(a.Qb(), 0);
        return a.a
    }

    k = yh.prototype;
    k.D = function () {
        return this.get("extent")
    };
    k.Pb = function () {
        return this.get("maxResolution")
    };
    k.Qb = function () {
        return this.get("minResolution")
    };
    k.Rb = function () {
        return this.get("opacity")
    };
    k.zb = function () {
        return this.get("visible")
    };
    k.Sb = function () {
        return this.get("zIndex")
    };
    k.fc = function (a) {
        this.set("extent", a)
    };
    k.lc = function (a) {
        this.set("maxResolution", a)
    };
    k.mc = function (a) {
        this.set("minResolution", a)
    };
    k.gc = function (a) {
        this.set("opacity", a)
    };
    k.hc = function (a) {
        this.set("visible", a)
    };
    k.ic = function (a) {
        this.set("zIndex", a)
    };
    function Ah(a) {
        var b = a || {};
        a = ua({}, b);
        delete a.layers;
        b = b.layers;
        yh.call(this, a);
        this.c = [];
        this.f = {};
        w(this, Va(Bh), this.Fk, this);
        b ? Array.isArray(b) ? b = new pe(b.slice()) : ha(b instanceof pe, 43) : b = new pe;
        this.gh(b)
    }

    v(Ah, yh);
    k = Ah.prototype;
    k.be = function () {
        this.zb() && this.v()
    };
    k.Fk = function () {
        this.c.forEach(za);
        this.c.length = 0;
        var a = this.Qc();
        this.c.push(w(a, te, this.Ek, this), w(a, ue, this.Gk, this));
        for (var b in this.f)this.f[b].forEach(za);
        va(this.f);
        var a = a.a, c, d;
        b = 0;
        for (c = a.length; b < c; b++)d = a[b], this.f[ea(d).toString()] = [w(d, "propertychange", this.be, this), w(d, "change", this.be, this)];
        this.v()
    };
    k.Ek = function (a) {
        a = a.element;
        var b = ea(a).toString();
        this.f[b] = [w(a, "propertychange", this.be, this), w(a, "change", this.be, this)];
        this.v()
    };
    k.Gk = function (a) {
        a = ea(a.element).toString();
        this.f[a].forEach(za);
        delete this.f[a];
        this.v()
    };
    k.Qc = function () {
        return this.get(Bh)
    };
    k.gh = function (a) {
        this.set(Bh, a)
    };
    k.ff = function (a) {
        var b = void 0 !== a ? a : [], c = b.length;
        this.Qc().forEach(function (a) {
            a.ff(b)
        });
        a = zh(this);
        var d, e;
        for (d = b.length; c < d; c++)e = b[c], e.opacity *= a.opacity, e.visible = e.visible && a.visible, e.maxResolution = Math.min(e.maxResolution, a.maxResolution), e.minResolution = Math.max(e.minResolution, a.minResolution), void 0 !== a.extent && (e.extent = void 0 !== e.extent ? cc(e.extent, a.extent) : a.extent);
        return b
    };
    k.hf = function () {
        return "ready"
    };
    var Bh = "layers";

    function Ch(a) {
        lc.call(this, {code: a, units: "m", extent: Dh, global: !0, worldExtent: Eh})
    }

    v(Ch, lc);
    Ch.prototype.getPointResolution = function (a, b) {
        return a / ja(b[1] / 6378137)
    };
    var Fh = 6378137 * Math.PI, Dh = [-Fh, -Fh, Fh, Fh], Eh = [-180, -85, 180, 85], zc = "EPSG:3857 EPSG:102100 EPSG:102113 EPSG:900913 urn:ogc:def:crs:EPSG:6.18:3:3857 urn:ogc:def:crs:EPSG::3857 http://www.opengis.net/gml/srs/epsg.xml#3857".split(" ").map(function (a) {
        return new Ch(a)
    });

    function Ac(a, b, c) {
        var d = a.length;
        c = 1 < c ? c : 2;
        void 0 === b && (2 < c ? b = a.slice() : b = Array(d));
        for (var e = 0; e < d; e += c) {
            b[e] = Fh * a[e] / 180;
            var f = 6378137 * Math.log(Math.tan(Math.PI * (a[e + 1] + 90) / 360));
            f > Fh ? f = Fh : f < -Fh && (f = -Fh);
            b[e + 1] = f
        }
        return b
    }

    function Bc(a, b, c) {
        var d = a.length;
        c = 1 < c ? c : 2;
        void 0 === b && (2 < c ? b = a.slice() : b = Array(d));
        for (var e = 0; e < d; e += c)b[e] = 180 * a[e] / Fh, b[e + 1] = 360 * Math.atan(Math.exp(a[e + 1] / 6378137)) / Math.PI - 90;
        return b
    };
    var Gh = new ic(6378137);

    function Hh(a, b) {
        lc.call(this, {
            code: a,
            units: "degrees",
            extent: Ih,
            axisOrientation: b,
            global: !0,
            metersPerUnit: Jh,
            worldExtent: Ih
        })
    }

    v(Hh, lc);
    Hh.prototype.getPointResolution = function (a) {
        return a
    };
    var Ih = [-180, -90, 180, 90], Jh = Math.PI * Gh.radius / 180, Cc = [new Hh("CRS:84"), new Hh("EPSG:4326", "neu"), new Hh("urn:ogc:def:crs:EPSG::4326", "neu"), new Hh("urn:ogc:def:crs:EPSG:6.6:4326", "neu"), new Hh("urn:ogc:def:crs:OGC:1.3:CRS84"), new Hh("urn:ogc:def:crs:OGC:2:84"), new Hh("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"), new Hh("urn:x-ogc:def:crs:EPSG:4326", "neu")];

    function Kh() {
        pc(zc);
        pc(Cc);
        yc()
    };
    function Lh(a, b, c, d, e) {
        La.call(this, a);
        this.vectorContext = b;
        this.frameState = c;
        this.context = d;
        this.glContext = e
    }

    v(Lh, La);
    function Mh(a) {
        var b = ua({}, a);
        delete b.source;
        yh.call(this, b);
        this.C = this.s = this.o = null;
        a.map && this.setMap(a.map);
        w(this, Va("source"), this.Sk, this);
        this.Ec(a.source ? a.source : null)
    }

    v(Mh, yh);
    function Nh(a, b) {
        return a.visible && b >= a.minResolution && b < a.maxResolution
    }

    k = Mh.prototype;
    k.ff = function (a) {
        a = a ? a : [];
        a.push(zh(this));
        return a
    };
    k.ga = function () {
        return this.get("source") || null
    };
    k.hf = function () {
        var a = this.ga();
        return a ? a.U() : "undefined"
    };
    k.zm = function () {
        this.v()
    };
    k.Sk = function () {
        this.C && (za(this.C), this.C = null);
        var a = this.ga();
        a && (this.C = w(a, "change", this.zm, this));
        this.v()
    };
    k.setMap = function (a) {
        this.o && (za(this.o), this.o = null);
        a || this.v();
        this.s && (za(this.s), this.s = null);
        a && (this.o = w(a, "precompose", function (a) {
            var c = zh(this);
            c.td = !1;
            c.zIndex = Infinity;
            a.frameState.layerStatesArray.push(c);
            a.frameState.layerStates[ea(this)] = c
        }, this), this.s = w(this, "change", a.render, a), this.v())
    };
    k.Ec = function (a) {
        this.set("source", a)
    };
    function Oh() {
        this.b = {};
        this.a = 0
    }

    Oh.prototype.clear = function () {
        this.b = {};
        this.a = 0
    };
    Oh.prototype.get = function (a, b, c) {
        a = b + ":" + a + ":" + (c ? Be(c) : "null");
        return a in this.b ? this.b[a] : null
    };
    Oh.prototype.set = function (a, b, c, d) {
        this.b[b + ":" + a + ":" + (c ? Be(c) : "null")] = d;
        ++this.a
    };
    var Ph = new Oh;
    var Qh = Array(6);

    function Rh() {
        return [1, 0, 0, 1, 0, 0]
    }

    function Sh(a) {
        return Th(a, 1, 0, 0, 1, 0, 0)
    }

    function Uh(a, b) {
        var c = a[0], d = a[1], e = a[2], f = a[3], g = a[4], h = a[5], l = b[0], m = b[1], n = b[2], p = b[3], q = b[4], r = b[5];
        a[0] = c * l + e * m;
        a[1] = d * l + f * m;
        a[2] = c * n + e * p;
        a[3] = d * n + f * p;
        a[4] = c * q + e * r + g;
        a[5] = d * q + f * r + h;
        return a
    }

    function Th(a, b, c, d, e, f, g) {
        a[0] = b;
        a[1] = c;
        a[2] = d;
        a[3] = e;
        a[4] = f;
        a[5] = g;
        return a
    }

    function Vh(a, b) {
        a[0] = b[0];
        a[1] = b[1];
        a[2] = b[2];
        a[3] = b[3];
        a[4] = b[4];
        a[5] = b[5];
        return a
    }

    function Wh(a, b) {
        var c = b[0], d = b[1];
        b[0] = a[0] * c + a[2] * d + a[4];
        b[1] = a[1] * c + a[3] * d + a[5];
        return b
    }

    function Xh(a, b) {
        var c = Math.cos(b), d = Math.sin(b);
        Uh(a, Th(Qh, c, d, -d, c, 0, 0))
    }

    function Yh(a, b, c) {
        return Uh(a, Th(Qh, b, 0, 0, c, 0, 0))
    }

    function Zh(a, b, c) {
        Uh(a, Th(Qh, 1, 0, 0, 1, b, c))
    }

    function $h(a, b, c, d, e, f, g, h) {
        var l = Math.sin(f);
        f = Math.cos(f);
        a[0] = d * f;
        a[1] = e * l;
        a[2] = -d * l;
        a[3] = e * f;
        a[4] = g * d * f - h * d * l + b;
        a[5] = g * e * l + h * e * f + c;
        return a
    }

    function ai(a) {
        var b = a[0] * a[3] - a[1] * a[2];
        ha(0 !== b, 32);
        var c = a[0], d = a[1], e = a[2], f = a[3], g = a[4], h = a[5];
        a[0] = f / b;
        a[1] = -d / b;
        a[2] = -e / b;
        a[3] = c / b;
        a[4] = (e * h - f * g) / b;
        a[5] = -(c * h - d * g) / b;
        return a
    };
    function bi(a, b) {
        this.l = b;
        this.f = {};
        this.s = {}
    }

    v(bi, Ia);
    function ci(a) {
        var b = a.viewState, c = a.coordinateToPixelTransform, d = a.pixelToCoordinateTransform;
        $h(c, a.size[0] / 2, a.size[1] / 2, 1 / b.resolution, -1 / b.resolution, -b.rotation, -b.center[0], -b.center[1]);
        ai(Vh(d, c))
    }

    k = bi.prototype;
    k.la = function () {
        for (var a in this.f)Ja(this.f[a])
    };
    function di() {
        if (32 < Ph.a) {
            var a = 0, b, c;
            for (b in Ph.b)c = Ph.b[b], 0 !== (a++ & 3) || Oa(c) || (delete Ph.b[b], --Ph.a)
        }
    }

    k.ya = function (a, b, c, d, e, f) {
        function g(a, e) {
            var f = ea(a).toString(), g = b.layerStates[ea(e)].td;
            if (!(f in b.skippedFeatureUids) || g)return c.call(d, a, g ? e : null)
        }

        var h, l = b.viewState, m = l.resolution, n = l.projection, l = a;
        if (n.a) {
            var n = n.D(), p = Zb(n), q = a[0];
            if (q < n[0] || q > n[2]) l = [q + p * Math.ceil((n[0] - q) / p), a[1]]
        }
        n = b.layerStatesArray;
        for (p = n.length - 1; 0 <= p; --p) {
            var r = n[p], q = r.layer;
            if (Nh(r, m) && e.call(f, q) && (r = ei(this, q), q.ga() && (h = r.ya(q.ga().G ? l : a, b, g, d)), h))return h
        }
    };
    k.jh = function (a, b, c, d, e, f) {
        var g, h = b.viewState.resolution, l = b.layerStatesArray, m;
        for (m = l.length - 1; 0 <= m; --m) {
            g = l[m];
            var n = g.layer;
            if (Nh(g, h) && e.call(f, n) && (g = ei(this, n).Bc(a, b, c, d)))return g
        }
    };
    k.kh = function (a, b, c, d) {
        return void 0 !== this.ya(a, b, gc, this, c, d)
    };
    function ei(a, b) {
        var c = ea(b).toString();
        if (c in a.f)return a.f[c];
        var d = a.ng(b);
        a.f[c] = d;
        a.s[c] = w(d, "change", a.Dk, a);
        return d
    }

    k.Dk = function () {
        this.l.render()
    };
    k.Pf = da;
    k.Io = function (a, b) {
        for (var c in this.f)if (!(b && c in b.layerStates)) {
            var d = c, e = this.f[d];
            delete this.f[d];
            za(this.s[d]);
            delete this.s[d];
            Ja(e)
        }
    };
    function fi(a, b) {
        for (var c in a.f)if (!(c in b.layerStates)) {
            b.postRenderFunctions.push(a.Io.bind(a));
            break
        }
    }

    function fb(a, b) {
        return a.zIndex - b.zIndex
    };
    function gi(a) {
        Mh.call(this, a ? a : {})
    }

    v(gi, Mh);
    function D(a) {
        a = a ? a : {};
        var b = ua({}, a);
        delete b.preload;
        delete b.useInterimTilesOnError;
        Mh.call(this, b);
        this.l(void 0 !== a.preload ? a.preload : 0);
        this.B(void 0 !== a.useInterimTilesOnError ? a.useInterimTilesOnError : !0)
    }

    v(D, Mh);
    D.prototype.f = function () {
        return this.get(hi)
    };
    D.prototype.l = function (a) {
        this.set(hi, a)
    };
    D.prototype.c = function () {
        return this.get(ii)
    };
    D.prototype.B = function (a) {
        this.set(ii, a)
    };
    var hi = "preload", ii = "useInterimTilesOnError";

    function ji(a, b, c, d, e) {
        Na.call(this);
        this.j = e;
        this.extent = a;
        this.f = c;
        this.resolution = b;
        this.state = d
    }

    v(ji, Na);
    function ki(a) {
        a.b("change")
    }

    ji.prototype.D = function () {
        return this.extent
    };
    ji.prototype.U = function () {
        return this.state
    };
    function li(a, b, c, d, e, f, g) {
        ji.call(this, a, b, c, mi, d);
        this.o = e;
        this.g = new Image;
        null !== f && (this.g.crossOrigin = f);
        this.i = {};
        this.c = null;
        this.state = mi;
        this.l = g
    }

    v(li, ji);
    li.prototype.a = function (a) {
        if (void 0 !== a) {
            var b;
            a = ea(a);
            if (a in this.i)return this.i[a];
            xa(this.i) ? b = this.g : b = this.g.cloneNode(!1);
            return this.i[a] = b
        }
        return this.g
    };
    li.prototype.s = function () {
        this.state = ni;
        this.c.forEach(za);
        this.c = null;
        ki(this)
    };
    li.prototype.T = function () {
        void 0 === this.resolution && (this.resolution = $b(this.extent) / this.g.height);
        this.state = oi;
        this.c.forEach(za);
        this.c = null;
        ki(this)
    };
    li.prototype.load = function () {
        if (this.state == mi || this.state == ni) this.state = pi, ki(this), this.c = [Ea(this.g, "error", this.s, this), Ea(this.g, "load", this.T, this)], this.l(this, this.o)
    };
    var mi = 0, pi = 1, oi = 2, ni = 3;
    var qi = [0, 0, 0, 1], ri = [], si = [0, 0, 0, 1];

    function ti(a, b, c, d) {
        0 !== b && (a.translate(c, d), a.rotate(b), a.translate(-c, -d))
    };
    function ui(a) {
        this.l = a.opacity;
        this.T = a.rotateWithView;
        this.o = a.rotation;
        this.c = a.scale;
        this.u = a.snapToPixel
    }

    k = ui.prototype;
    k.qe = function () {
        return this.l
    };
    k.re = function () {
        return this.T
    };
    k.se = function () {
        return this.o
    };
    k.te = function () {
        return this.c
    };
    k.Yd = function () {
        return this.u
    };
    k.Rc = function (a) {
        this.l = a
    };
    k.ue = function (a) {
        this.o = a
    };
    k.Sc = function (a) {
        this.c = a
    };
    function vi(a) {
        a = a || {};
        this.s = a.atlasManager;
        this.j = this.f = this.i = null;
        this.g = void 0 !== a.fill ? a.fill : null;
        this.b = void 0 !== a.stroke ? a.stroke : null;
        this.a = a.radius;
        this.S = [0, 0];
        this.C = this.G = this.na = this.B = null;
        wi(this, this.s);
        ui.call(this, {
            opacity: 1,
            rotateWithView: !1,
            rotation: 0,
            scale: 1,
            snapToPixel: void 0 !== a.snapToPixel ? a.snapToPixel : !0
        })
    }

    v(vi, ui);
    k = vi.prototype;
    k.clone = function () {
        var a = new vi({
            fill: this.g ? this.g.clone() : void 0,
            stroke: this.b ? this.b.clone() : void 0,
            radius: this.a,
            snapToPixel: this.u,
            atlasManager: this.s
        });
        a.Rc(this.l);
        a.Sc(this.c);
        return a
    };
    k.cc = function () {
        return this.B
    };
    k.nn = function () {
        return this.g
    };
    k.pe = function () {
        return this.j
    };
    k.Tb = function () {
        return this.f
    };
    k.wd = function () {
        return oi
    };
    k.md = function () {
        return this.G
    };
    k.jc = function () {
        return this.S
    };
    k.pn = function () {
        return this.a
    };
    k.Gb = function () {
        return this.na
    };
    k.qn = function () {
        return this.b
    };
    k.rn = function (a) {
        this.a = a;
        wi(this, this.s)
    };
    k.pf = da;
    k.load = da;
    k.Uf = da;
    function wi(a, b) {
        var c, d = null, e, f = 0;
        a.b && (e = Ee(a.b.a), f = a.b.f, void 0 === f && (f = 1), d = a.b.g, lf || (d = null));
        var g = 2 * (a.a + f) + 1, d = {strokeStyle: e, Ed: f, size: g, lineDash: d};
        if (void 0 === b) e = Ge(g, g), a.f = e.canvas, c = g = a.f.width, a.wh(d, e, 0, 0), a.C = [d.size, d.size], a.g ? a.j = a.f : (e = Ge(d.size, d.size), a.j = e.canvas, a.vh(d, e, 0, 0)); else {
            g = Math.round(g);
            (e = !a.g) && (c = a.vh.bind(a, d));
            var f = a.b ? xi(a.b) : "-", h = a.g ? yi(a.g) : "-";
            a.i && f == a.i[1] && h == a.i[2] && a.a == a.i[3] || (a.i = ["c" + f + h + (void 0 !== a.a ? a.a.toString() : "-"), f, h, a.a]);
            d = b.add(a.i[0],
                g, g, a.wh.bind(a, d), c);
            a.f = d.image;
            a.S = [d.offsetX, d.offsetY];
            c = d.image.width;
            e ? (a.j = d.de, a.C = [d.de.width, d.de.height]) : (a.j = a.f, a.C = [c, c])
        }
        a.B = [g / 2, g / 2];
        a.na = [g, g];
        a.G = [c, c]
    }

    k.wh = function (a, b, c, d) {
        b.setTransform(1, 0, 0, 1, 0, 0);
        b.translate(c, d);
        b.beginPath();
        b.arc(a.size / 2, a.size / 2, this.a, 0, 2 * Math.PI, !0);
        this.g && (b.fillStyle = Ee(this.g.b), b.fill());
        this.b && (b.strokeStyle = a.strokeStyle, b.lineWidth = a.Ed, a.lineDash && b.setLineDash(a.lineDash), b.stroke());
        b.closePath()
    };
    k.vh = function (a, b, c, d) {
        b.setTransform(1, 0, 0, 1, 0, 0);
        b.translate(c, d);
        b.beginPath();
        b.arc(a.size / 2, a.size / 2, this.a, 0, 2 * Math.PI, !0);
        b.fillStyle = Be(qi);
        b.fill();
        this.b && (b.strokeStyle = a.strokeStyle, b.lineWidth = a.Ed, a.lineDash && b.setLineDash(a.lineDash), b.stroke());
        b.closePath()
    };
    function zi(a) {
        a = a || {};
        this.b = void 0 !== a.color ? a.color : null;
        this.a = void 0
    }

    zi.prototype.clone = function () {
        var a = this.b;
        return new zi({color: a && a.slice ? a.slice() : a || void 0})
    };
    zi.prototype.g = function () {
        return this.b
    };
    zi.prototype.f = function (a) {
        this.b = a;
        this.a = void 0
    };
    function yi(a) {
        void 0 === a.a && (a.a = a.b instanceof CanvasPattern || a.b instanceof CanvasGradient ? ea(a.b).toString() : "f" + (a.b ? Be(a.b) : "-"));
        return a.a
    };
    function Ai(a) {
        a = a || {};
        this.a = void 0 !== a.color ? a.color : null;
        this.c = a.lineCap;
        this.g = void 0 !== a.lineDash ? a.lineDash : null;
        this.i = a.lineJoin;
        this.j = a.miterLimit;
        this.f = a.width;
        this.b = void 0
    }

    k = Ai.prototype;
    k.clone = function () {
        var a = this.a;
        return new Ai({
            color: a && a.slice ? a.slice() : a || void 0,
            lineCap: this.c,
            lineDash: this.g ? this.g.slice() : void 0,
            lineJoin: this.i,
            miterLimit: this.j,
            width: this.f
        })
    };
    k.zn = function () {
        return this.a
    };
    k.Sj = function () {
        return this.c
    };
    k.An = function () {
        return this.g
    };
    k.Tj = function () {
        return this.i
    };
    k.Yj = function () {
        return this.j
    };
    k.Bn = function () {
        return this.f
    };
    k.Cn = function (a) {
        this.a = a;
        this.b = void 0
    };
    k.So = function (a) {
        this.c = a;
        this.b = void 0
    };
    k.setLineDash = function (a) {
        this.g = a;
        this.b = void 0
    };
    k.To = function (a) {
        this.i = a;
        this.b = void 0
    };
    k.Uo = function (a) {
        this.j = a;
        this.b = void 0
    };
    k.Xo = function (a) {
        this.f = a;
        this.b = void 0
    };
    function xi(a) {
        void 0 === a.b && (a.b = "s", a.b = a.a ? "string" === typeof a.a ? a.b + a.a : a.b + ea(a.a).toString() : a.b + "-", a.b += "," + (void 0 !== a.c ? a.c.toString() : "-") + "," + (a.g ? a.g.toString() : "-") + "," + (void 0 !== a.i ? a.i : "-") + "," + (void 0 !== a.j ? a.j.toString() : "-") + "," + (void 0 !== a.f ? a.f.toString() : "-"));
        return a.b
    };
    function Bi(a) {
        a = a || {};
        this.i = null;
        this.c = Ci;
        void 0 !== a.geometry && this.zh(a.geometry);
        this.f = void 0 !== a.fill ? a.fill : null;
        this.a = void 0 !== a.image ? a.image : null;
        this.g = void 0 !== a.stroke ? a.stroke : null;
        this.j = void 0 !== a.text ? a.text : null;
        this.b = a.zIndex
    }

    k = Bi.prototype;
    k.clone = function () {
        var a = this.V();
        a && a.clone && (a = a.clone());
        return new Bi({
            geometry: a,
            fill: this.f ? this.f.clone() : void 0,
            image: this.a ? this.a.clone() : void 0,
            stroke: this.g ? this.g.clone() : void 0,
            text: this.Ga() ? this.Ga().clone() : void 0,
            zIndex: this.b
        })
    };
    k.V = function () {
        return this.i
    };
    k.Nj = function () {
        return this.c
    };
    k.Dn = function () {
        return this.f
    };
    k.En = function () {
        return this.a
    };
    k.Fn = function () {
        return this.g
    };
    k.Ga = function () {
        return this.j
    };
    k.Gn = function () {
        return this.b
    };
    k.zh = function (a) {
        "function" === typeof a ? this.c = a : "string" === typeof a ? this.c = function (b) {
            return b.get(a)
        } : a ? a && (this.c = function () {
            return a
        }) : this.c = Ci;
        this.i = a
    };
    k.Hn = function (a) {
        this.b = a
    };
    function Di(a) {
        if ("function" !== typeof a) {
            var b;
            Array.isArray(a) ? b = a : (ha(a instanceof Bi, 41), b = [a]);
            a = function () {
                return b
            }
        }
        return a
    }

    var Ei = null;

    function Fi() {
        if (!Ei) {
            var a = new zi({color: "rgba(255,255,255,0.4)"}), b = new Ai({color: "#3399CC", width: 1.25});
            Ei = [new Bi({image: new vi({fill: a, stroke: b, radius: 5}), fill: a, stroke: b})]
        }
        return Ei
    }

    function Gi() {
        var a = {}, b = [255, 255, 255, 1], c = [0, 153, 255, 1];
        a.Polygon = [new Bi({fill: new zi({color: [255, 255, 255, .5]})})];
        a.MultiPolygon = a.Polygon;
        a.LineString = [new Bi({stroke: new Ai({color: b, width: 5})}), new Bi({stroke: new Ai({color: c, width: 3})})];
        a.MultiLineString = a.LineString;
        a.Circle = a.Polygon.concat(a.LineString);
        a.Point = [new Bi({
            image: new vi({radius: 6, fill: new zi({color: c}), stroke: new Ai({color: b, width: 1.5})}),
            zIndex: Infinity
        })];
        a.MultiPoint = a.Point;
        a.GeometryCollection = a.Polygon.concat(a.LineString,
            a.Point);
        return a
    }

    function Ci(a) {
        return a.V()
    };
    function E(a) {
        a = a ? a : {};
        var b = ua({}, a);
        delete b.style;
        delete b.renderBuffer;
        delete b.updateWhileAnimating;
        delete b.updateWhileInteracting;
        Mh.call(this, b);
        this.i = void 0 !== a.renderBuffer ? a.renderBuffer : 100;
        this.B = null;
        this.j = void 0;
        this.l(a.style);
        this.Z = void 0 !== a.updateWhileAnimating ? a.updateWhileAnimating : !1;
        this.fa = void 0 !== a.updateWhileInteracting ? a.updateWhileInteracting : !1
    }

    v(E, Mh);
    E.prototype.G = function () {
        return this.B
    };
    E.prototype.S = function () {
        return this.j
    };
    E.prototype.l = function (a) {
        this.B = void 0 !== a ? a : Fi;
        this.j = null === a ? void 0 : Di(this.B);
        this.v()
    };
    function G(a) {
        a = a ? a : {};
        var b = ua({}, a);
        delete b.preload;
        delete b.useInterimTilesOnError;
        E.call(this, b);
        this.P(a.preload ? a.preload : 0);
        this.W(a.useInterimTilesOnError ? a.useInterimTilesOnError : !0);
        ha(void 0 == a.renderMode || a.renderMode == Hi || a.renderMode == Ii || a.renderMode == Ji, 28);
        this.u = a.renderMode || Ii
    }

    v(G, E);
    G.prototype.f = function () {
        return this.get(Ki)
    };
    G.prototype.c = function () {
        return this.get(Li)
    };
    G.prototype.P = function (a) {
        this.set(hi, a)
    };
    G.prototype.W = function (a) {
        this.set(ii, a)
    };
    var Ki = "preload", Li = "useInterimTilesOnError", Hi = "image", Ii = "hybrid", Ji = "vector";

    function Mi() {
    };
    function Ni(a, b, c, d, e) {
        this.f = a;
        this.C = b;
        this.c = c;
        this.B = d;
        this.ac = e;
        this.i = this.b = this.a = this.Z = this.Va = this.W = null;
        this.fa = this.bb = this.T = this.na = this.S = this.G = 0;
        this.ra = !1;
        this.j = this.Ib = 0;
        this.oa = !1;
        this.za = 0;
        this.g = "";
        this.Aa = this.Ka = 0;
        this.La = !1;
        this.o = this.ub = 0;
        this.P = this.s = this.l = null;
        this.u = [];
        this.Jb = Rh()
    }

    v(Ni, Mi);
    function Oi(a, b, c) {
        if (a.i) {
            b = Nc(b, 0, c, 2, a.B, a.u);
            c = a.f;
            var d = a.Jb, e = c.globalAlpha;
            1 != a.T && (c.globalAlpha = e * a.T);
            var f = a.Ib;
            a.ra && (f += a.ac);
            var g, h;
            g = 0;
            for (h = b.length; g < h; g += 2) {
                var l = b[g] - a.G, m = b[g + 1] - a.S;
                a.oa && (l = Math.round(l), m = Math.round(m));
                if (0 !== f || 1 != a.j) {
                    var n = l + a.G, p = m + a.S;
                    $h(d, n, p, a.j, a.j, f, -n, -p);
                    c.setTransform.apply(c, d)
                }
                c.drawImage(a.i, a.bb, a.fa, a.za, a.na, l, m, a.za, a.na)
            }
            0 === f && 1 == a.j || c.setTransform(1, 0, 0, 1, 0, 0);
            1 != a.T && (c.globalAlpha = e)
        }
    }

    function Pi(a, b, c, d) {
        var e = 0;
        if (a.P && "" !== a.g) {
            a.l && Qi(a, a.l);
            a.s && Ri(a, a.s);
            var f = a.P, g = a.f, h = a.Z;
            h ? (h.font != f.font && (h.font = g.font = f.font), h.textAlign != f.textAlign && (h.textAlign = g.textAlign = f.textAlign), h.textBaseline != f.textBaseline && (h.textBaseline = g.textBaseline = f.textBaseline)) : (g.font = f.font, g.textAlign = f.textAlign, g.textBaseline = f.textBaseline, a.Z = {
                font: f.font,
                textAlign: f.textAlign,
                textBaseline: f.textBaseline
            });
            b = Nc(b, e, c, d, a.B, a.u);
            f = a.f;
            g = a.ub;
            for (a.La && (g += a.ac); e < c; e += d) {
                var h = b[e] + a.Ka,
                    l = b[e + 1] + a.Aa;
                if (0 !== g || 1 != a.o) {
                    var m = $h(a.Jb, h, l, a.o, a.o, g, -h, -l);
                    f.setTransform.apply(f, m)
                }
                a.s && f.strokeText(a.g, h, l);
                a.l && f.fillText(a.g, h, l)
            }
            0 === g && 1 == a.o || f.setTransform(1, 0, 0, 1, 0, 0)
        }
    }

    function Si(a, b, c, d, e, f) {
        var g = a.f;
        a = Nc(b, c, d, e, a.B, a.u);
        g.moveTo(a[0], a[1]);
        b = a.length;
        f && (b -= 2);
        for (c = 2; c < b; c += 2)g.lineTo(a[c], a[c + 1]);
        f && g.closePath();
        return d
    }

    function Ti(a, b, c, d, e) {
        var f, g;
        f = 0;
        for (g = d.length; f < g; ++f)c = Si(a, b, c, d[f], e, !0);
        return c
    }

    k = Ni.prototype;
    k.Sd = function (a) {
        if (dc(this.c, a.D())) {
            if (this.a || this.b) {
                this.a && Qi(this, this.a);
                this.b && Ri(this, this.b);
                var b;
                b = this.B;
                var c = this.u, d = a.ka();
                b = d ? Nc(d, 0, d.length, a.sa(), b, c) : null;
                c = b[2] - b[0];
                d = b[3] - b[1];
                c = Math.sqrt(c * c + d * d);
                d = this.f;
                d.beginPath();
                d.arc(b[0], b[1], c, 0, 2 * Math.PI);
                this.a && d.fill();
                this.b && d.stroke()
            }
            "" !== this.g && Pi(this, a.ud(), 2, 2)
        }
    };
    k.vd = function (a) {
        this.Vb(a.f, a.g);
        this.Xb(a.a);
        this.Zb(a.Ga())
    };
    k.pc = function (a) {
        switch (a.X()) {
            case "Point":
                this.rc(a);
                break;
            case "LineString":
                this.kd(a);
                break;
            case "Polygon":
                this.Ze(a);
                break;
            case "MultiPoint":
                this.qc(a);
                break;
            case "MultiLineString":
                this.Xe(a);
                break;
            case "MultiPolygon":
                this.Ye(a);
                break;
            case "GeometryCollection":
                this.We(a);
                break;
            case "Circle":
                this.Sd(a)
        }
    };
    k.Ve = function (a, b) {
        var c = (0, b.c)(a);
        c && dc(this.c, c.D()) && (this.vd(b), this.pc(c))
    };
    k.We = function (a) {
        a = a.f;
        var b, c;
        b = 0;
        for (c = a.length; b < c; ++b)this.pc(a[b])
    };
    k.rc = function (a) {
        var b = a.ka();
        a = a.sa();
        this.i && Oi(this, b, b.length);
        "" !== this.g && Pi(this, b, b.length, a)
    };
    k.qc = function (a) {
        var b = a.ka();
        a = a.sa();
        this.i && Oi(this, b, b.length);
        "" !== this.g && Pi(this, b, b.length, a)
    };
    k.kd = function (a) {
        if (dc(this.c, a.D())) {
            if (this.b) {
                Ri(this, this.b);
                var b = this.f, c = a.ka();
                b.beginPath();
                Si(this, c, 0, c.length, a.sa(), !1);
                b.stroke()
            }
            "" !== this.g && (a = Ui(a), Pi(this, a, 2, 2))
        }
    };
    k.Xe = function (a) {
        var b = a.D();
        if (dc(this.c, b)) {
            if (this.b) {
                Ri(this, this.b);
                var b = this.f, c = a.ka(), d = 0, e = a.Eb(), f = a.sa();
                b.beginPath();
                var g, h;
                g = 0;
                for (h = e.length; g < h; ++g)d = Si(this, c, d, e[g], f, !1);
                b.stroke()
            }
            "" !== this.g && (a = Vi(a), Pi(this, a, a.length, 2))
        }
    };
    k.Ze = function (a) {
        if (dc(this.c, a.D())) {
            if (this.b || this.a) {
                this.a && Qi(this, this.a);
                this.b && Ri(this, this.b);
                var b = this.f;
                b.beginPath();
                Ti(this, a.Ob(), 0, a.Eb(), a.sa());
                this.a && b.fill();
                this.b && b.stroke()
            }
            "" !== this.g && (a = vd(a), Pi(this, a, 2, 2))
        }
    };
    k.Ye = function (a) {
        if (dc(this.c, a.D())) {
            if (this.b || this.a) {
                this.a && Qi(this, this.a);
                this.b && Ri(this, this.b);
                var b = this.f, c = Wi(a), d = 0, e = a.c, f = a.sa(), g, h;
                b.beginPath();
                g = 0;
                for (h = e.length; g < h; ++g)d = Ti(this, c, d, e[g], f);
                this.a && b.fill();
                this.b && b.stroke()
            }
            "" !== this.g && (a = Xi(a), Pi(this, a, a.length, 2))
        }
    };
    function Qi(a, b) {
        var c = a.f, d = a.W;
        d ? d.fillStyle != b.fillStyle && (d.fillStyle = c.fillStyle = b.fillStyle) : (c.fillStyle = b.fillStyle, a.W = {fillStyle: b.fillStyle})
    }

    function Ri(a, b) {
        var c = a.f, d = a.Va;
        d ? (d.lineCap != b.lineCap && (d.lineCap = c.lineCap = b.lineCap), lf && !db(d.lineDash, b.lineDash) && c.setLineDash(d.lineDash = b.lineDash), d.lineJoin != b.lineJoin && (d.lineJoin = c.lineJoin = b.lineJoin), d.lineWidth != b.lineWidth && (d.lineWidth = c.lineWidth = b.lineWidth), d.miterLimit != b.miterLimit && (d.miterLimit = c.miterLimit = b.miterLimit), d.strokeStyle != b.strokeStyle && (d.strokeStyle = c.strokeStyle = b.strokeStyle)) : (c.lineCap = b.lineCap, lf && c.setLineDash(b.lineDash), c.lineJoin = b.lineJoin, c.lineWidth =
            b.lineWidth, c.miterLimit = b.miterLimit, c.strokeStyle = b.strokeStyle, a.Va = {
            lineCap: b.lineCap,
            lineDash: b.lineDash,
            lineJoin: b.lineJoin,
            lineWidth: b.lineWidth,
            miterLimit: b.miterLimit,
            strokeStyle: b.strokeStyle
        })
    }

    k.Vb = function (a, b) {
        if (a) {
            var c = a.b;
            this.a = {fillStyle: Ee(c ? c : qi)}
        } else this.a = null;
        if (b) {
            var c = b.a, d = b.c, e = b.g, f = b.i, g = b.f, h = b.j;
            this.b = {
                lineCap: void 0 !== d ? d : "round",
                lineDash: e ? e : ri,
                lineJoin: void 0 !== f ? f : "round",
                lineWidth: this.C * (void 0 !== g ? g : 1),
                miterLimit: void 0 !== h ? h : 10,
                strokeStyle: Ee(c ? c : si)
            }
        } else this.b = null
    };
    k.Xb = function (a) {
        if (a) {
            var b = a.cc(), c = a.Tb(1), d = a.jc(), e = a.Gb();
            this.G = b[0];
            this.S = b[1];
            this.na = e[1];
            this.i = c;
            this.T = a.l;
            this.bb = d[0];
            this.fa = d[1];
            this.ra = a.T;
            this.Ib = a.o;
            this.j = a.c;
            this.oa = a.u;
            this.za = e[0]
        } else this.i = null
    };
    k.Zb = function (a) {
        if (a) {
            var b = a.b;
            b ? (b = b.b, this.l = {fillStyle: Ee(b ? b : qi)}) : this.l = null;
            var c = a.f;
            if (c) {
                var b = c.a, d = c.c, e = c.g, f = c.i, g = c.f, c = c.j;
                this.s = {
                    lineCap: void 0 !== d ? d : "round",
                    lineDash: e ? e : ri,
                    lineJoin: void 0 !== f ? f : "round",
                    lineWidth: void 0 !== g ? g : 1,
                    miterLimit: void 0 !== c ? c : 10,
                    strokeStyle: Ee(b ? b : si)
                }
            } else this.s = null;
            var b = a.g, d = a.c, e = a.i, f = a.s, g = a.j, c = a.a, h = a.Ga(), l = a.l;
            a = a.o;
            this.P = {
                font: void 0 !== b ? b : "10px sans-serif",
                textAlign: void 0 !== l ? l : "center",
                textBaseline: void 0 !== a ? a : "middle"
            };
            this.g = void 0 !==
            h ? h : "";
            this.Ka = void 0 !== d ? this.C * d : 0;
            this.Aa = void 0 !== e ? this.C * e : 0;
            this.La = void 0 !== f ? f : !1;
            this.ub = void 0 !== g ? g : 0;
            this.o = this.C * (void 0 !== c ? c : 1)
        } else this.g = ""
    };
    function Yi(a) {
        Pa.call(this);
        this.a = a
    }

    v(Yi, Pa);
    k = Yi.prototype;
    k.ya = da;
    k.Bc = function (a, b, c, d) {
        a = Wh(b.pixelToCoordinateTransform, a.slice());
        if (this.ya(a, b, gc, this))return c.call(d, this.a, null)
    };
    k.le = hc;
    k.Ue = function (a, b, c) {
        return function (d, e) {
            return Zi(a, b, d, e, function (a) {
                c[d] || (c[d] = {});
                c[d][a.xa.toString()] = a
            })
        }
    };
    k.Cm = function (a) {
        a.target.U() === oi && $i(this)
    };
    function aj(a, b) {
        var c = b.U();
        c != oi && c != ni && w(b, "change", a.Cm, a);
        c == mi && (b.load(), c = b.U());
        return c == oi
    }

    function $i(a) {
        var b = a.a;
        b.zb() && "ready" == b.hf() && a.v()
    }

    function bj(a, b) {
        b.qh() && a.postRenderFunctions.push(function (a, b, e) {
            b = ea(a).toString();
            a.Kc(e.viewState.projection, e.usedTiles[b])
        }.bind(null, b))
    }

    function cj(a, b) {
        if (b) {
            var c, d, e;
            d = 0;
            for (e = b.length; d < e; ++d)c = b[d], a[ea(c).toString()] = c
        }
    }

    function dj(a, b) {
        var c = b.S;
        void 0 !== c && ("string" === typeof c ? a.logos[c] = "" : c && (ha("string" == typeof c.href, 44), ha("string" == typeof c.src, 45), a.logos[c.src] = c.href))
    }

    function ej(a, b, c, d) {
        b = ea(b).toString();
        c = c.toString();
        b in a ? c in a[b] ? (a = a[b][c], d.ba < a.ba && (a.ba = d.ba), d.da > a.da && (a.da = d.da), d.ea < a.ea && (a.ea = d.ea), d.ha > a.ha && (a.ha = d.ha)) : a[b][c] = d : (a[b] = {}, a[b][c] = d)
    }

    function fj(a, b, c, d, e, f, g, h, l, m) {
        var n = ea(b).toString();
        n in a.wantedTiles || (a.wantedTiles[n] = {});
        var p = a.wantedTiles[n];
        a = a.tileQueue;
        var q = c.minZoom, r, u, x, y, A, z;
        for (z = g; z >= q; --z)for (u = ee(c, f, z, u), x = c.Ca(z), y = u.ba; y <= u.da; ++y)for (A = u.ea; A <= u.ha; ++A)g - z <= h ? (r = b.vc(z, y, A, d, e), 0 == r.U() && (p[r.Xa()] = !0, r.Xa() in a.a || a.c([r, n, je(c, r.xa), x])), void 0 !== l && l.call(m, r)) : b.Vf(z, y, A, e)
    };
    function gj(a) {
        Yi.call(this, a);
        this.S = Rh()
    }

    v(gj, Yi);
    function hj(a, b, c) {
        var d = b.pixelRatio, e = b.size[0] * d, f = b.size[1] * d, g = b.viewState.rotation, h = Wb(c), l = Ub(c), m = Sb(c);
        c = Rb(c);
        Wh(b.coordinateToPixelTransform, h);
        Wh(b.coordinateToPixelTransform, l);
        Wh(b.coordinateToPixelTransform, m);
        Wh(b.coordinateToPixelTransform, c);
        a.save();
        ti(a, -g, e / 2, f / 2);
        a.beginPath();
        a.moveTo(h[0] * d, h[1] * d);
        a.lineTo(l[0] * d, l[1] * d);
        a.lineTo(m[0] * d, m[1] * d);
        a.lineTo(c[0] * d, c[1] * d);
        a.clip();
        ti(a, g, e / 2, f / 2)
    }

    gj.prototype.i = function (a, b, c) {
        ij(this, "precompose", c, a, void 0);
        var d = this.f ? this.f.a() : null;
        if (d) {
            var e = b.extent, f = void 0 !== e;
            f && hj(c, a, e);
            var e = this.s, g = c.globalAlpha;
            c.globalAlpha = b.opacity;
            c.drawImage(d, 0, 0, +d.width, +d.height, Math.round(e[4]), Math.round(e[5]), Math.round(d.width * e[0]), Math.round(d.height * e[3]));
            c.globalAlpha = g;
            f && c.restore()
        }
        jj(this, c, a)
    };
    function ij(a, b, c, d, e) {
        var f = a.a;
        if (Oa(f, b)) {
            var g = d.size[0] * d.pixelRatio, h = d.size[1] * d.pixelRatio, l = d.viewState.rotation;
            ti(c, -l, g / 2, h / 2);
            a = void 0 !== e ? e : kj(a, d, 0);
            f.b(new Lh(b, new Ni(c, d.pixelRatio, d.extent, a, d.viewState.rotation), d, c, null));
            ti(c, l, g / 2, h / 2)
        }
    }

    function jj(a, b, c, d) {
        ij(a, "postcompose", b, c, d)
    }

    function kj(a, b, c) {
        var d = b.viewState, e = b.pixelRatio, f = e / d.resolution;
        return $h(a.S, e * b.size[0] / 2, e * b.size[1] / 2, f, -f, -d.rotation, -d.center[0] + c, -d.center[1])
    };
    function lj() {
    };
    function mj(a, b, c, d) {
        this.ra = a;
        this.W = b;
        this.overlaps = d;
        this.f = 0;
        this.resolution = c;
        this.P = !1;
        this.na = this.S = null;
        this.a = [];
        this.coordinates = [];
        this.Z = Rh();
        this.b = [];
        this.Va = [];
        this.bb = Rh();
        this.fa = Rh()
    }

    v(mj, Mi);
    function nj(a, b, c, d, e, f, g) {
        var h = a.coordinates.length, l = a.af();
        g && (c += e);
        g = [b[c], b[c + 1]];
        var m = [NaN, NaN], n = !0, p, q, r;
        for (p = c + e; p < d; p += e)m[0] = b[p], m[1] = b[p + 1], r = Jb(l, m), r !== q ? (n && (a.coordinates[h++] = g[0], a.coordinates[h++] = g[1]), a.coordinates[h++] = m[0], a.coordinates[h++] = m[1], n = !1) : 1 === r ? (a.coordinates[h++] = m[0], a.coordinates[h++] = m[1], n = !1) : n = !0, g[0] = m[0], g[1] = m[1], q = r;
        if (f && n || p === c + e) a.coordinates[h++] = g[0], a.coordinates[h++] = g[1];
        return h
    }

    function oj(a, b) {
        a.S = [0, b, 0];
        a.a.push(a.S);
        a.na = [0, b, 0];
        a.b.push(a.na)
    }

    function pj(a, b, c, d) {
        a.P && (b.translate(c[4], c[5]), b.rotate(d));
        b.fill();
        a.P && (b.rotate(-d), b.translate(-c[4], -c[5]))
    }

    function qj(a, b, c, d, e, f, g, h, l) {
        var m;
        db(d, a.Z) ? m = a.Va : (m = Nc(a.coordinates, 0, a.coordinates.length, 2, d, a.Va), Vh(a.Z, d));
        for (var n = !xa(f), p = 0, q = g.length, r, u, x = a.bb, y = a.fa, A, z, K, L, R = 0, Ka = 0, jb = a.a != g || a.overlaps ? 0 : 200; p < q;) {
            var F = g[p], ta, Ra, Tb, Ha;
            switch (F[0]) {
                case 0:
                    r = F[1];
                    n && f[ea(r).toString()] || !r.V() ? p = F[2] : void 0 === l || dc(l, r.V().D()) ? ++p : p = F[2] + 1;
                    break;
                case 1:
                    R > jb && (pj(a, b, d, e), R = 0);
                    Ka > jb && (b.stroke(), Ka = 0);
                    R || Ka || b.beginPath();
                    ++p;
                    break;
                case 2:
                    r = F[1];
                    u = m[r];
                    F = m[r + 1];
                    K = m[r + 2] - u;
                    r = m[r + 3] - F;
                    r = Math.sqrt(K *
                        K + r * r);
                    b.moveTo(u + r, F);
                    b.arc(u, F, r, 0, 2 * Math.PI, !0);
                    ++p;
                    break;
                case 3:
                    b.closePath();
                    ++p;
                    break;
                case 4:
                    r = F[1];
                    u = F[2];
                    ta = F[3];
                    Ra = F[4] * c;
                    Tb = F[5] * c;
                    var Vb = F[6], Pc = F[7], Ed = F[8], sc = F[9];
                    Ha = F[10];
                    K = F[11];
                    L = F[12];
                    var Qc = F[13], Yc = F[14];
                    for (Ha && (K += e); r < u; r += 2) {
                        F = m[r] - Ra;
                        Ha = m[r + 1] - Tb;
                        Qc && (F = Math.round(F), Ha = Math.round(Ha));
                        if (1 != L || 0 !== K) {
                            var Gc = F + Ra, tc = Ha + Tb;
                            $h(x, Gc, tc, L, L, K, -Gc, -tc);
                            b.setTransform.apply(b, x)
                        }
                        Gc = b.globalAlpha;
                        1 != Pc && (b.globalAlpha = Gc * Pc);
                        var tc = Yc + Ed > ta.width ? ta.width - Ed : Yc, De = Vb + sc > ta.height ?
                        ta.height - sc : Vb;
                        b.drawImage(ta, Ed, sc, tc, De, F, Ha, tc * c, De * c);
                        1 != Pc && (b.globalAlpha = Gc);
                        1 == L && 0 === K || b.setTransform.apply(b, y)
                    }
                    ++p;
                    break;
                case 5:
                    r = F[1];
                    u = F[2];
                    Tb = F[3];
                    Vb = F[4] * c;
                    Pc = F[5] * c;
                    K = F[6];
                    L = F[7] * c;
                    ta = F[8];
                    Ra = F[9];
                    for ((Ha = F[10]) && (K += e); r < u; r += 2) {
                        F = m[r] + Vb;
                        Ha = m[r + 1] + Pc;
                        if (1 != L || 0 !== K) $h(x, F, Ha, L, L, K, -F, -Ha), b.setTransform.apply(b, x);
                        Ed = Tb.split("\n");
                        sc = Ed.length;
                        1 < sc ? (Qc = Math.round(1.5 * b.measureText("M").width), Ha -= (sc - 1) / 2 * Qc) : Qc = 0;
                        for (Yc = 0; Yc < sc; Yc++)Gc = Ed[Yc], Ra && b.strokeText(Gc, F, Ha), ta && b.fillText(Gc,
                            F, Ha), Ha += Qc;
                        1 == L && 0 === K || b.setTransform.apply(b, y)
                    }
                    ++p;
                    break;
                case 6:
                    if (void 0 !== h && (r = F[1], r = h(r)))return r;
                    ++p;
                    break;
                case 7:
                    jb ? R++ : pj(a, b, d, e);
                    ++p;
                    break;
                case 8:
                    r = F[1];
                    u = F[2];
                    F = m[r];
                    Ha = m[r + 1];
                    K = F + .5 | 0;
                    L = Ha + .5 | 0;
                    if (K !== A || L !== z) b.moveTo(F, Ha), A = K, z = L;
                    for (r += 2; r < u; r += 2)if (F = m[r], Ha = m[r + 1], K = F + .5 | 0, L = Ha + .5 | 0, r == u - 2 || K !== A || L !== z) b.lineTo(F, Ha), A = K, z = L;
                    ++p;
                    break;
                case 9:
                    a.P = F[2];
                    R && (pj(a, b, d, e), R = 0);
                    b.fillStyle = F[1];
                    ++p;
                    break;
                case 10:
                    A = void 0 !== F[7] ? F[7] : !0;
                    z = F[2];
                    Ka && (b.stroke(), Ka = 0);
                    b.strokeStyle =
                        F[1];
                    b.lineWidth = A ? z * c : z;
                    b.lineCap = F[3];
                    b.lineJoin = F[4];
                    b.miterLimit = F[5];
                    lf && b.setLineDash(F[6]);
                    z = A = NaN;
                    ++p;
                    break;
                case 11:
                    b.font = F[1];
                    b.textAlign = F[2];
                    b.textBaseline = F[3];
                    ++p;
                    break;
                case 12:
                    jb ? Ka++ : b.stroke();
                    ++p;
                    break;
                default:
                    ++p
            }
        }
        R && pj(a, b, d, e);
        Ka && b.stroke()
    }

    mj.prototype.Za = function (a, b, c, d, e) {
        qj(this, a, b, c, d, e, this.a, void 0, void 0)
    };
    function rj(a) {
        var b = a.b;
        b.reverse();
        var c, d = b.length, e, f, g = -1;
        for (c = 0; c < d; ++c)if (e = b[c], f = e[0], 6 == f) g = c; else if (0 == f) {
            e[2] = c;
            e = a.b;
            for (f = c; g < f;) {
                var h = e[g];
                e[g] = e[f];
                e[f] = h;
                ++g;
                --f
            }
            g = -1
        }
    }

    function sj(a, b) {
        a.S[2] = a.a.length;
        a.S = null;
        a.na[2] = a.b.length;
        a.na = null;
        var c = [6, b];
        a.a.push(c);
        a.b.push(c)
    }

    mj.prototype.ke = da;
    mj.prototype.af = function () {
        return this.W
    };
    function tj(a, b, c, d) {
        mj.call(this, a, b, c, d);
        this.j = this.za = null;
        this.G = this.B = this.C = this.u = this.T = this.s = this.o = this.l = this.i = this.c = this.g = void 0
    }

    v(tj, mj);
    tj.prototype.rc = function (a, b) {
        if (this.j) {
            oj(this, b);
            var c = a.ka(), d = this.coordinates.length, c = nj(this, c, 0, c.length, a.sa(), !1, !1);
            this.a.push([4, d, c, this.j, this.g, this.c, this.i, this.l, this.o, this.s, this.T, this.u, this.C, this.B, this.G]);
            this.b.push([4, d, c, this.za, this.g, this.c, this.i, this.l, this.o, this.s, this.T, this.u, this.C, this.B, this.G]);
            sj(this, b)
        }
    };
    tj.prototype.qc = function (a, b) {
        if (this.j) {
            oj(this, b);
            var c = a.ka(), d = this.coordinates.length, c = nj(this, c, 0, c.length, a.sa(), !1, !1);
            this.a.push([4, d, c, this.j, this.g, this.c, this.i, this.l, this.o, this.s, this.T, this.u, this.C, this.B, this.G]);
            this.b.push([4, d, c, this.za, this.g, this.c, this.i, this.l, this.o, this.s, this.T, this.u, this.C, this.B, this.G]);
            sj(this, b)
        }
    };
    tj.prototype.ke = function () {
        rj(this);
        this.c = this.g = void 0;
        this.j = this.za = null;
        this.G = this.B = this.u = this.T = this.s = this.o = this.l = this.C = this.i = void 0
    };
    tj.prototype.Xb = function (a) {
        var b = a.cc(), c = a.Gb(), d = a.pe(1), e = a.Tb(1), f = a.jc();
        this.g = b[0];
        this.c = b[1];
        this.za = d;
        this.j = e;
        this.i = c[1];
        this.l = a.l;
        this.o = f[0];
        this.s = f[1];
        this.T = a.T;
        this.u = a.o;
        this.C = a.c;
        this.B = a.u;
        this.G = c[0]
    };
    function uj(a, b, c, d) {
        mj.call(this, a, b, c, d);
        this.c = null;
        this.g = {
            hd: void 0,
            cd: void 0,
            dd: null,
            ed: void 0,
            fd: void 0,
            gd: void 0,
            nf: 0,
            strokeStyle: void 0,
            lineCap: void 0,
            lineDash: null,
            lineJoin: void 0,
            lineWidth: void 0,
            miterLimit: void 0
        }
    }

    v(uj, mj);
    function vj(a, b, c, d, e) {
        var f = a.coordinates.length;
        b = nj(a, b, c, d, e, !1, !1);
        f = [8, f, b];
        a.a.push(f);
        a.b.push(f);
        return d
    }

    k = uj.prototype;
    k.af = function () {
        this.c || (this.c = Eb(this.W), 0 < this.f && Db(this.c, this.resolution * (this.f + 1) / 2, this.c));
        return this.c
    };
    function wj(a) {
        var b = a.g, c = b.strokeStyle, d = b.lineCap, e = b.lineDash, f = b.lineJoin, g = b.lineWidth, h = b.miterLimit;
        b.hd == c && b.cd == d && db(b.dd, e) && b.ed == f && b.fd == g && b.gd == h || (b.nf != a.coordinates.length && (a.a.push([12]), b.nf = a.coordinates.length), a.a.push([10, c, g, d, f, h, e], [1]), b.hd = c, b.cd = d, b.dd = e, b.ed = f, b.fd = g, b.gd = h)
    }

    k.kd = function (a, b) {
        var c = this.g, d = c.lineWidth;
        void 0 !== c.strokeStyle && void 0 !== d && (wj(this), oj(this, b), this.b.push([10, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash], [1]), c = a.ka(), vj(this, c, 0, c.length, a.sa()), this.b.push([12]), sj(this, b))
    };
    k.Xe = function (a, b) {
        var c = this.g, d = c.lineWidth;
        if (void 0 !== c.strokeStyle && void 0 !== d) {
            wj(this);
            oj(this, b);
            this.b.push([10, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash], [1]);
            var c = a.Eb(), d = a.ka(), e = a.sa(), f = 0, g, h;
            g = 0;
            for (h = c.length; g < h; ++g)f = vj(this, d, f, c[g], e);
            this.b.push([12]);
            sj(this, b)
        }
    };
    k.ke = function () {
        this.g.nf != this.coordinates.length && this.a.push([12]);
        rj(this);
        this.g = null
    };
    k.Vb = function (a, b) {
        var c = b.a;
        this.g.strokeStyle = Ee(c ? c : si);
        c = b.c;
        this.g.lineCap = void 0 !== c ? c : "round";
        c = b.g;
        this.g.lineDash = c ? c : ri;
        c = b.i;
        this.g.lineJoin = void 0 !== c ? c : "round";
        c = b.f;
        this.g.lineWidth = void 0 !== c ? c : 1;
        c = b.j;
        this.g.miterLimit = void 0 !== c ? c : 10;
        this.g.lineWidth > this.f && (this.f = this.g.lineWidth, this.c = null)
    };
    function xj(a, b, c, d) {
        mj.call(this, a, b, c, d);
        this.c = null;
        this.g = {
            og: void 0,
            hd: void 0,
            cd: void 0,
            dd: null,
            ed: void 0,
            fd: void 0,
            gd: void 0,
            fillStyle: void 0,
            strokeStyle: void 0,
            lineCap: void 0,
            lineDash: null,
            lineJoin: void 0,
            lineWidth: void 0,
            miterLimit: void 0
        }
    }

    v(xj, mj);
    function yj(a, b, c, d, e) {
        var f = a.g, g = void 0 !== f.fillStyle, f = void 0 != f.strokeStyle, h = d.length, l = [1];
        a.a.push(l);
        a.b.push(l);
        for (l = 0; l < h; ++l) {
            var m = d[l], n = a.coordinates.length;
            c = nj(a, b, c, m, e, !0, !f);
            c = [8, n, c];
            a.a.push(c);
            a.b.push(c);
            f && (c = [3], a.a.push(c), a.b.push(c));
            c = m
        }
        b = [7];
        a.b.push(b);
        g && a.a.push(b);
        f && (g = [12], a.a.push(g), a.b.push(g));
        return c
    }

    k = xj.prototype;
    k.Sd = function (a, b) {
        var c = this.g, d = c.strokeStyle;
        if (void 0 !== c.fillStyle || void 0 !== d) {
            zj(this);
            oj(this, b);
            this.b.push([9, Be(qi)]);
            void 0 !== c.strokeStyle && this.b.push([10, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash]);
            var e = a.ka(), d = this.coordinates.length;
            nj(this, e, 0, e.length, a.sa(), !1, !1);
            e = [1];
            d = [2, d];
            this.a.push(e, d);
            this.b.push(e, d);
            d = [7];
            this.b.push(d);
            void 0 !== c.fillStyle && this.a.push(d);
            void 0 !== c.strokeStyle && (c = [12], this.a.push(c), this.b.push(c));
            sj(this, b)
        }
    };
    k.Ze = function (a, b) {
        var c = this.g;
        zj(this);
        oj(this, b);
        this.b.push([9, Be(qi)]);
        void 0 !== c.strokeStyle && this.b.push([10, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash]);
        var c = a.Eb(), d = a.Ob();
        yj(this, d, 0, c, a.sa());
        sj(this, b)
    };
    k.Ye = function (a, b) {
        var c = this.g, d = c.strokeStyle;
        if (void 0 !== c.fillStyle || void 0 !== d) {
            zj(this);
            oj(this, b);
            this.b.push([9, Be(qi)]);
            void 0 !== c.strokeStyle && this.b.push([10, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash]);
            var c = a.c, d = Wi(a), e = a.sa(), f = 0, g, h;
            g = 0;
            for (h = c.length; g < h; ++g)f = yj(this, d, f, c[g], e);
            sj(this, b)
        }
    };
    k.ke = function () {
        rj(this);
        this.g = null;
        var a = this.ra;
        if (0 !== a) {
            var b = this.coordinates, c, d;
            c = 0;
            for (d = b.length; c < d; ++c)b[c] = a * Math.round(b[c] / a)
        }
    };
    k.af = function () {
        this.c || (this.c = Eb(this.W), 0 < this.f && Db(this.c, this.resolution * (this.f + 1) / 2, this.c));
        return this.c
    };
    k.Vb = function (a, b) {
        var c = this.g;
        if (a) {
            var d = a.b;
            c.fillStyle = Ee(d ? d : qi)
        } else c.fillStyle = void 0;
        b ? (d = b.a, c.strokeStyle = Ee(d ? d : si), d = b.c, c.lineCap = void 0 !== d ? d : "round", d = b.g, c.lineDash = d ? d.slice() : ri, d = b.i, c.lineJoin = void 0 !== d ? d : "round", d = b.f, c.lineWidth = void 0 !== d ? d : 1, d = b.j, c.miterLimit = void 0 !== d ? d : 10, c.lineWidth > this.f && (this.f = c.lineWidth, this.c = null)) : (c.strokeStyle = void 0, c.lineCap = void 0, c.lineDash = null, c.lineJoin = void 0, c.lineWidth = void 0, c.miterLimit = void 0)
    };
    function zj(a) {
        var b = a.g, c = b.fillStyle, d = b.strokeStyle, e = b.lineCap, f = b.lineDash, g = b.lineJoin, h = b.lineWidth, l = b.miterLimit;
        void 0 !== c && b.og != c && (a.a.push([9, c, "string" != typeof c]), b.og = b.fillStyle);
        void 0 === d || b.hd == d && b.cd == e && b.dd == f && b.ed == g && b.fd == h && b.gd == l || (a.a.push([10, d, h, e, g, l, f]), b.hd = d, b.cd = e, b.dd = f, b.ed = g, b.fd = h, b.gd = l)
    };
    function Aj(a, b, c, d) {
        mj.call(this, a, b, c, d);
        this.G = this.B = this.C = null;
        this.j = "";
        this.o = this.l = 0;
        this.s = void 0;
        this.u = this.T = 0;
        this.i = this.c = this.g = null
    }

    v(Aj, mj);
    function Bj(a, b, c, d, e) {
        if ("" !== a.j && a.i && (a.g || a.c)) {
            if (a.g) {
                var f = a.g, g = a.C;
                if (!g || g.fillStyle != f.fillStyle) {
                    var h = [9, f.fillStyle];
                    a.a.push(h);
                    a.b.push(h);
                    g ? g.fillStyle = f.fillStyle : a.C = {fillStyle: f.fillStyle}
                }
            }
            a.c && (f = a.c, g = a.B, g && g.lineCap == f.lineCap && g.lineDash == f.lineDash && g.lineJoin == f.lineJoin && g.lineWidth == f.lineWidth && g.miterLimit == f.miterLimit && g.strokeStyle == f.strokeStyle || (h = [10, f.strokeStyle, f.lineWidth, f.lineCap, f.lineJoin, f.miterLimit, f.lineDash, !1], a.a.push(h), a.b.push(h), g ? (g.lineCap =
                f.lineCap, g.lineDash = f.lineDash, g.lineJoin = f.lineJoin, g.lineWidth = f.lineWidth, g.miterLimit = f.miterLimit, g.strokeStyle = f.strokeStyle) : a.B = {
                lineCap: f.lineCap,
                lineDash: f.lineDash,
                lineJoin: f.lineJoin,
                lineWidth: f.lineWidth,
                miterLimit: f.miterLimit,
                strokeStyle: f.strokeStyle
            }));
            f = a.i;
            g = a.G;
            g && g.font == f.font && g.textAlign == f.textAlign && g.textBaseline == f.textBaseline || (h = [11, f.font, f.textAlign, f.textBaseline], a.a.push(h), a.b.push(h), g ? (g.font = f.font, g.textAlign = f.textAlign, g.textBaseline = f.textBaseline) : a.G =
                {font: f.font, textAlign: f.textAlign, textBaseline: f.textBaseline});
            oj(a, e);
            f = a.coordinates.length;
            b = nj(a, b, 0, c, d, !1, !1);
            b = [5, f, b, a.j, a.l, a.o, a.T, a.u, !!a.g, !!a.c, a.s];
            a.a.push(b);
            a.b.push(b);
            sj(a, e)
        }
    }

    Aj.prototype.Zb = function (a) {
        if (a) {
            var b = a.b;
            b ? (b = b.b, b = Ee(b ? b : qi), this.g ? this.g.fillStyle = b : this.g = {fillStyle: b}) : this.g = null;
            var c = a.f;
            if (c) {
                var b = c.a, d = c.c, e = c.g, f = c.i, g = c.f, c = c.j, d = void 0 !== d ? d : "round", e = e ? e.slice() : ri, f = void 0 !== f ? f : "round", g = void 0 !== g ? g : 1, c = void 0 !== c ? c : 10, b = Ee(b ? b : si);
                if (this.c) {
                    var h = this.c;
                    h.lineCap = d;
                    h.lineDash = e;
                    h.lineJoin = f;
                    h.lineWidth = g;
                    h.miterLimit = c;
                    h.strokeStyle = b
                } else this.c = {lineCap: d, lineDash: e, lineJoin: f, lineWidth: g, miterLimit: c, strokeStyle: b}
            } else this.c = null;
            var l = a.g, b = a.c, d = a.i, e = a.s, g = a.j, c = a.a, f = a.Ga(), h = a.l, m = a.o;
            a = void 0 !== l ? l : "10px sans-serif";
            h = void 0 !== h ? h : "center";
            m = void 0 !== m ? m : "middle";
            this.i ? (l = this.i, l.font = a, l.textAlign = h, l.textBaseline = m) : this.i = {
                font: a,
                textAlign: h,
                textBaseline: m
            };
            this.j = void 0 !== f ? f : "";
            this.l = void 0 !== b ? b : 0;
            this.o = void 0 !== d ? d : 0;
            this.s = void 0 !== e ? e : !1;
            this.T = void 0 !== g ? g : 0;
            this.u = void 0 !== c ? c : 1
        } else this.j = ""
    };
    var Cj = ["Polygon", "LineString", "Image", "Text"];

    function Dj(a, b, c, d, e) {
        this.s = a;
        this.f = b;
        this.l = d;
        this.o = c;
        this.c = e;
        this.a = {};
        this.i = Ge(1, 1);
        this.j = Rh()
    }

    v(Dj, lj);
    function Ej(a) {
        for (var b in a.a) {
            var c = a.a[b], d;
            for (d in c)c[d].ke()
        }
    }

    Dj.prototype.ya = function (a, b, c, d, e) {
        var f = $h(this.j, .5, .5, 1 / b, -1 / b, -c, -a[0], -a[1]), g = this.i;
        g.clearRect(0, 0, 1, 1);
        var h;
        void 0 !== this.c && (h = Bb(), Cb(h, a), Db(h, b * this.c, h));
        return Fj(this, g, f, c, d, function (a) {
            if (0 < g.getImageData(0, 0, 1, 1).data[3]) {
                if (a = e(a))return a;
                g.clearRect(0, 0, 1, 1)
            }
        }, h)
    };
    Dj.prototype.b = function (a, b) {
        var c = void 0 !== a ? a.toString() : "0", d = this.a[c];
        void 0 === d && (d = {}, this.a[c] = d);
        c = d[b];
        void 0 === c && (c = new Gj[b](this.s, this.f, this.o, this.l), d[b] = c);
        return c
    };
    Dj.prototype.g = function () {
        return xa(this.a)
    };
    Dj.prototype.Za = function (a, b, c, d, e, f) {
        var g = Object.keys(this.a).map(Number);
        g.sort(Xa);
        var h = this.f, l = h[0], m = h[1], n = h[2], h = h[3], l = [l, m, l, h, n, h, n, m];
        Nc(l, 0, 8, 2, c, l);
        a.save();
        a.beginPath();
        a.moveTo(l[0], l[1]);
        a.lineTo(l[2], l[3]);
        a.lineTo(l[4], l[5]);
        a.lineTo(l[6], l[7]);
        a.clip();
        f = f ? f : Cj;
        for (var p, q, l = 0, m = g.length; l < m; ++l)for (p = this.a[g[l].toString()], n = 0, h = f.length; n < h; ++n)q = p[f[n]], void 0 !== q && q.Za(a, b, c, d, e);
        a.restore()
    };
    function Fj(a, b, c, d, e, f, g) {
        var h = Object.keys(a.a).map(Number);
        h.sort(function (a, b) {
            return b - a
        });
        var l, m, n, p, q;
        l = 0;
        for (m = h.length; l < m; ++l)for (p = a.a[h[l].toString()], n = Cj.length - 1; 0 <= n; --n)if (q = p[Cj[n]], void 0 !== q && (q = qj(q, b, 1, c, d, e, q.b, f, g)))return q
    }

    var Gj = {Image: tj, LineString: uj, Polygon: xj, Text: Aj};

    function Hj(a, b) {
        return ea(a) - ea(b)
    }

    function Ij(a, b) {
        var c = .5 * a / b;
        return c * c
    }

    function Jj(a, b, c, d, e, f) {
        var g = !1, h, l;
        if (h = c.a) l = h.wd(), l == oi || l == ni ? h.Uf(e, f) : (l == mi && h.load(), h.pf(e, f), g = !0);
        if (e = (0, c.c)(b)) d = e.pd(d), (0, Kj[d.X()])(a, d, c, b);
        return g
    }

    var Kj = {
        Point: function (a, b, c, d) {
            var e = c.a;
            if (e) {
                if (e.wd() != oi)return;
                var f = a.b(c.b, "Image");
                f.Xb(e);
                f.rc(b, d)
            }
            if (e = c.Ga()) a = a.b(c.b, "Text"), a.Zb(e), Bj(a, b.ka(), 2, 2, d)
        }, LineString: function (a, b, c, d) {
            var e = c.g;
            if (e) {
                var f = a.b(c.b, "LineString");
                f.Vb(null, e);
                f.kd(b, d)
            }
            if (e = c.Ga()) a = a.b(c.b, "Text"), a.Zb(e), Bj(a, Ui(b), 2, 2, d)
        }, Polygon: function (a, b, c, d) {
            var e = c.f, f = c.g;
            if (e || f) {
                var g = a.b(c.b, "Polygon");
                g.Vb(e, f);
                g.Ze(b, d)
            }
            if (e = c.Ga()) a = a.b(c.b, "Text"), a.Zb(e), Bj(a, vd(b), 2, 2, d)
        }, MultiPoint: function (a, b, c, d) {
            var e =
                c.a;
            if (e) {
                if (e.wd() != oi)return;
                var f = a.b(c.b, "Image");
                f.Xb(e);
                f.qc(b, d)
            }
            if (e = c.Ga()) a = a.b(c.b, "Text"), a.Zb(e), c = b.ka(), Bj(a, c, c.length, b.sa(), d)
        }, MultiLineString: function (a, b, c, d) {
            var e = c.g;
            if (e) {
                var f = a.b(c.b, "LineString");
                f.Vb(null, e);
                f.Xe(b, d)
            }
            if (e = c.Ga()) a = a.b(c.b, "Text"), a.Zb(e), b = Vi(b), Bj(a, b, b.length, 2, d)
        }, MultiPolygon: function (a, b, c, d) {
            var e = c.f, f = c.g;
            if (f || e) {
                var g = a.b(c.b, "Polygon");
                g.Vb(e, f);
                g.Ye(b, d)
            }
            if (e = c.Ga()) a = a.b(c.b, "Text"), a.Zb(e), b = Xi(b), Bj(a, b, b.length, 2, d)
        }, GeometryCollection: function (a,
                                         b, c, d) {
            b = b.f;
            var e, f;
            e = 0;
            for (f = b.length; e < f; ++e)(0, Kj[b[e].X()])(a, b[e], c, d)
        }, Circle: function (a, b, c, d) {
            var e = c.f, f = c.g;
            if (e || f) {
                var g = a.b(c.b, "Polygon");
                g.Vb(e, f);
                g.Sd(b, d)
            }
            if (e = c.Ga()) a = a.b(c.b, "Text"), a.Zb(e), Bj(a, b.ud(), 2, 2, d)
        }
    };

    function Lj(a, b, c, d, e, f) {
        this.c = void 0 !== f ? f : null;
        ji.call(this, a, b, c, void 0 !== f ? mi : oi, d);
        this.g = e
    }

    v(Lj, ji);
    Lj.prototype.i = function (a) {
        this.state = a ? ni : oi;
        ki(this)
    };
    Lj.prototype.load = function () {
        this.state == mi && (this.state = pi, ki(this), this.c(this.i.bind(this)))
    };
    Lj.prototype.a = function () {
        return this.g
    };
    var Mj, Nj = -1 < navigator.userAgent.indexOf("OPR"), Oj = -1 < navigator.userAgent.indexOf("Edge");
    Mj = !(!navigator.userAgent.match("CriOS") && "chrome" in window && "Google Inc." === navigator.vendor && 0 == Nj && 0 == Oj);
    function Pj(a, b, c, d) {
        var e = Kc(c, b, a);
        c = b.getPointResolution(d, c);
        b = b.dc();
        void 0 !== b && (c *= b);
        b = a.dc();
        void 0 !== b && (c /= b);
        a = a.getPointResolution(c, e) / c;
        isFinite(a) && 0 < a && (c /= a);
        return c
    }

    function Qj(a, b, c, d) {
        a = c - a;
        b = d - b;
        var e = Math.sqrt(a * a + b * b);
        return [Math.round(c + a / e), Math.round(d + b / e)]
    }

    function Rj(a, b, c, d, e, f, g, h, l, m, n) {
        var p = Ge(Math.round(c * a), Math.round(c * b));
        if (0 === l.length)return p.canvas;
        p.scale(c, c);
        var q = Bb();
        l.forEach(function (a) {
            Pb(q, a.extent)
        });
        var r = Ge(Math.round(c * Zb(q) / d), Math.round(c * $b(q) / d)), u = c / d;
        l.forEach(function (a) {
            r.drawImage(a.image, m, m, a.image.width - 2 * m, a.image.height - 2 * m, (a.extent[0] - q[0]) * u, -(a.extent[3] - q[3]) * u, Zb(a.extent) * u, $b(a.extent) * u)
        });
        var x = Wb(g);
        h.f.forEach(function (a) {
            var b = a.source, e = a.target, g = b[1][0], h = b[1][1], l = b[2][0], m = b[2][1];
            a = (e[0][0] -
                x[0]) / f;
            var n = -(e[0][1] - x[1]) / f, u = (e[1][0] - x[0]) / f, ta = -(e[1][1] - x[1]) / f, Ra = (e[2][0] - x[0]) / f, Tb = -(e[2][1] - x[1]) / f, e = b[0][0], b = b[0][1], g = g - e, h = h - b, l = l - e, m = m - b;
            a:{
                g = [[g, h, 0, 0, u - a], [l, m, 0, 0, Ra - a], [0, 0, g, h, ta - n], [0, 0, l, m, Tb - n]];
                h = g.length;
                for (l = 0; l < h; l++) {
                    for (var m = l, Ha = Math.abs(g[l][l]), Vb = l + 1; Vb < h; Vb++) {
                        var Pc = Math.abs(g[Vb][l]);
                        Pc > Ha && (Ha = Pc, m = Vb)
                    }
                    if (0 === Ha) {
                        g = null;
                        break a
                    }
                    Ha = g[m];
                    g[m] = g[l];
                    g[l] = Ha;
                    for (m = l + 1; m < h; m++)for (Ha = -g[m][l] / g[l][l], Vb = l; Vb < h + 1; Vb++)g[m][Vb] = l == Vb ? 0 : g[m][Vb] + Ha * g[l][Vb]
                }
                l = Array(h);
                for (m = h - 1; 0 <= m; m--)for (l[m] = g[m][h] / g[m][m], Ha = m - 1; 0 <= Ha; Ha--)g[Ha][h] -= g[Ha][m] * l[m];
                g = l
            }
            g && (p.save(), p.beginPath(), Mj ? (l = (a + u + Ra) / 3, m = (n + ta + Tb) / 3, h = Qj(l, m, a, n), u = Qj(l, m, u, ta), Ra = Qj(l, m, Ra, Tb), p.moveTo(u[0], u[1]), p.lineTo(h[0], h[1]), p.lineTo(Ra[0], Ra[1])) : (p.moveTo(u, ta), p.lineTo(a, n), p.lineTo(Ra, Tb)), p.clip(), p.transform(g[0], g[2], g[1], g[3], a, n), p.translate(q[0] - e, q[3] - b), p.scale(d / c, -d / c), p.drawImage(r.canvas, 0, 0), p.restore())
        });
        n && (p.save(), p.strokeStyle = "black", p.lineWidth = 1, h.f.forEach(function (a) {
            var b =
                a.target;
            a = (b[0][0] - x[0]) / f;
            var c = -(b[0][1] - x[1]) / f, d = (b[1][0] - x[0]) / f, e = -(b[1][1] - x[1]) / f, g = (b[2][0] - x[0]) / f, b = -(b[2][1] - x[1]) / f;
            p.beginPath();
            p.moveTo(d, e);
            p.lineTo(a, c);
            p.lineTo(g, b);
            p.closePath();
            p.stroke()
        }), p.restore());
        return p.canvas
    };
    function Sj(a, b, c, d, e) {
        this.g = a;
        this.c = b;
        var f = {}, g = Ic(this.c, this.g);
        this.a = function (a) {
            var b = a[0] + "/" + a[1];
            f[b] || (f[b] = g(a));
            return f[b]
        };
        this.i = d;
        this.s = e * e;
        this.f = [];
        this.l = !1;
        this.o = this.g.a && !!d && !!this.g.D() && Zb(d) == Zb(this.g.D());
        this.b = this.g.D() ? Zb(this.g.D()) : null;
        this.j = this.c.D() ? Zb(this.c.D()) : null;
        a = Wb(c);
        b = Ub(c);
        d = Sb(c);
        c = Rb(c);
        e = this.a(a);
        var h = this.a(b), l = this.a(d), m = this.a(c);
        Tj(this, a, b, d, c, e, h, l, m, 10);
        if (this.l) {
            var n = Infinity;
            this.f.forEach(function (a) {
                n = Math.min(n, a.source[0][0],
                    a.source[1][0], a.source[2][0])
            });
            this.f.forEach(function (a) {
                if (Math.max(a.source[0][0], a.source[1][0], a.source[2][0]) - n > this.b / 2) {
                    var b = [[a.source[0][0], a.source[0][1]], [a.source[1][0], a.source[1][1]], [a.source[2][0], a.source[2][1]]];
                    b[0][0] - n > this.b / 2 && (b[0][0] -= this.b);
                    b[1][0] - n > this.b / 2 && (b[1][0] -= this.b);
                    b[2][0] - n > this.b / 2 && (b[2][0] -= this.b);
                    Math.max(b[0][0], b[1][0], b[2][0]) - Math.min(b[0][0], b[1][0], b[2][0]) < this.b / 2 && (a.source = b)
                }
            }, this)
        }
        f = {}
    }

    function Tj(a, b, c, d, e, f, g, h, l, m) {
        var n = Ab([f, g, h, l]), p = a.b ? Zb(n) / a.b : null, q = a.b, r = a.g.a && .5 < p && 1 > p, u = !1;
        if (0 < m) {
            if (a.c.g && a.j)var x = Ab([b, c, d, e]), u = u | .25 < Zb(x) / a.j;
            !r && a.g.g && p && (u |= .25 < p)
        }
        if (u || !a.i || dc(n, a.i)) {
            if (!(u || isFinite(f[0]) && isFinite(f[1]) && isFinite(g[0]) && isFinite(g[1]) && isFinite(h[0]) && isFinite(h[1]) && isFinite(l[0]) && isFinite(l[1])))if (0 < m) u = !0; else return;
            if (0 < m && (u || (n = a.a([(b[0] + d[0]) / 2, (b[1] + d[1]) / 2]), q = r ? (oa(f[0], q) + oa(h[0], q)) / 2 - oa(n[0], q) : (f[0] + h[0]) / 2 - n[0], n = (f[1] + h[1]) / 2 - n[1],
                    u = q * q + n * n > a.s), u)) {
                Math.abs(b[0] - d[0]) <= Math.abs(b[1] - d[1]) ? (r = [(c[0] + d[0]) / 2, (c[1] + d[1]) / 2], q = a.a(r), n = [(e[0] + b[0]) / 2, (e[1] + b[1]) / 2], p = a.a(n), Tj(a, b, c, r, n, f, g, q, p, m - 1), Tj(a, n, r, d, e, p, q, h, l, m - 1)) : (r = [(b[0] + c[0]) / 2, (b[1] + c[1]) / 2], q = a.a(r), n = [(d[0] + e[0]) / 2, (d[1] + e[1]) / 2], p = a.a(n), Tj(a, b, r, n, e, f, q, p, l, m - 1), Tj(a, r, c, d, n, q, g, h, p, m - 1));
                return
            }
            if (r) {
                if (!a.o)return;
                a.l = !0
            }
            a.f.push({source: [f, h, l], target: [b, d, e]});
            a.f.push({source: [f, g, h], target: [b, c, d]})
        }
    }

    function Uj(a) {
        var b = Bb();
        a.f.forEach(function (a) {
            a = a.source;
            Cb(b, a[0]);
            Cb(b, a[1]);
            Cb(b, a[2])
        });
        return b
    };
    function Vj(a, b, c, d, e, f) {
        this.T = b;
        this.s = a.D();
        var g = b.D(), h = g ? cc(c, g) : c, g = Pj(a, b, ac(h), d);
        this.l = new Sj(a, b, h, this.s, .5 * g);
        this.c = d;
        this.g = c;
        a = Uj(this.l);
        this.o = (this.sb = f(a, g, e)) ? this.sb.f : 1;
        this.Dd = this.i = null;
        e = oi;
        f = [];
        this.sb && (e = mi, f = this.sb.j);
        ji.call(this, c, d, this.o, e, f)
    }

    v(Vj, ji);
    Vj.prototype.la = function () {
        this.state == pi && (za(this.Dd), this.Dd = null);
        ji.prototype.la.call(this)
    };
    Vj.prototype.a = function () {
        return this.i
    };
    Vj.prototype.Cd = function () {
        var a = this.sb.U();
        a == oi && (this.i = Rj(Zb(this.g) / this.c, $b(this.g) / this.c, this.o, this.sb.resolution, 0, this.c, this.g, this.l, [{
            extent: this.sb.D(),
            image: this.sb.a()
        }], 0));
        this.state = a;
        ki(this)
    };
    Vj.prototype.load = function () {
        if (this.state == mi) {
            this.state = pi;
            ki(this);
            var a = this.sb.U();
            a == oi || a == ni ? this.Cd() : (this.Dd = w(this.sb, "change", function () {
                var a = this.sb.U();
                if (a == oi || a == ni) za(this.Dd), this.Dd = null, this.Cd()
            }, this), this.sb.load())
        }
    };
    function Wj(a) {
        Ta.call(this);
        this.f = oc(a.projection);
        this.j = Xj(a.attributions);
        this.S = a.logo;
        this.Ka = void 0 !== a.state ? a.state : "ready";
        this.G = void 0 !== a.wrapX ? a.wrapX : !1
    }

    v(Wj, Ta);
    function Xj(a) {
        if ("string" === typeof a)return [new oe({html: a})];
        if (a instanceof oe)return [a];
        if (Array.isArray(a)) {
            for (var b = a.length, c = Array(b), d = 0; d < b; d++) {
                var e = a[d];
                c[d] = "string" === typeof e ? new oe({html: e}) : e
            }
            return c
        }
        return null
    }

    k = Wj.prototype;
    k.ya = da;
    k.va = function () {
        return this.j
    };
    k.ua = function () {
        return this.S
    };
    k.wa = function () {
        return this.f
    };
    k.U = function () {
        return this.Ka
    };
    k.ta = function () {
        this.v()
    };
    k.qa = function (a) {
        this.j = Xj(a);
        this.v()
    };
    function Yj(a, b) {
        a.Ka = b;
        a.v()
    };
    function Zj(a) {
        Wj.call(this, {
            attributions: a.attributions,
            extent: a.extent,
            logo: a.logo,
            projection: a.projection,
            state: a.state
        });
        this.C = void 0 !== a.resolutions ? a.resolutions : null;
        this.a = null;
        this.ra = 0
    }

    v(Zj, Wj);
    function ak(a, b) {
        a.C && (b = a.C[Za(a.C, b, 0)]);
        return b
    }

    Zj.prototype.W = function (a, b, c, d) {
        var e = this.f;
        if (e && d && !Hc(e, d)) {
            if (this.a) {
                if (this.ra == this.g && Hc(this.a.T, d) && this.a.resolution == b && this.a.f == c && Ob(this.a.D(), a))return this.a;
                Ja(this.a);
                this.a = null
            }
            this.a = new Vj(e, d, a, b, c, function (a, b, c) {
                return this.Lc(a, b, c, e)
            }.bind(this));
            this.ra = this.g;
            return this.a
        }
        e && (d = e);
        return this.Lc(a, b, c, d)
    };
    Zj.prototype.o = function (a) {
        a = a.target;
        switch (a.U()) {
            case pi:
                this.b(new bk(ck, a));
                break;
            case oi:
                this.b(new bk(dk, a));
                break;
            case ni:
                this.b(new bk(ek, a))
        }
    };
    function fk(a, b) {
        a.a().src = b
    }

    function bk(a, b) {
        La.call(this, a);
        this.image = b
    }

    v(bk, La);
    var ck = "imageloadstart", dk = "imageloadend", ek = "imageloaderror";

    function gk(a) {
        Zj.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: a.projection,
            resolutions: a.resolutions,
            state: a.state
        });
        this.fa = a.canvasFunction;
        this.P = null;
        this.Z = 0;
        this.oa = void 0 !== a.ratio ? a.ratio : 1.5
    }

    v(gk, Zj);
    gk.prototype.Lc = function (a, b, c, d) {
        b = ak(this, b);
        var e = this.P;
        if (e && this.Z == this.g && e.resolution == b && e.f == c && Ib(e.D(), a))return e;
        a = a.slice();
        ec(a, this.oa);
        (d = this.fa(a, b, c, [Zb(a) / b * c, $b(a) / b * c], d)) && (e = new Lj(a, b, c, this.j, d));
        this.P = e;
        this.Z = this.g;
        return e
    };
    function hk(a) {
        this.c = a.source;
        this.La = Rh();
        this.i = Ge();
        this.l = [0, 0];
        this.Aa = void 0 == a.renderBuffer ? 100 : a.renderBuffer;
        this.u = null;
        gk.call(this, {
            attributions: a.attributions,
            canvasFunction: this.rj.bind(this),
            logo: a.logo,
            projection: a.projection,
            ratio: a.ratio,
            resolutions: a.resolutions,
            state: this.c.U()
        });
        this.B = null;
        this.s = void 0;
        this.nh(a.style);
        w(this.c, "change", this.Tm, this)
    }

    v(hk, gk);
    k = hk.prototype;
    k.rj = function (a, b, c, d, e) {
        var f = new Dj(.5 * b / c, a, b, this.c.Aa, this.Aa);
        this.c.sd(a, b, e);
        var g = !1;
        this.c.Kb(a, function (a) {
            var d;
            if (!(d = g)) {
                var e;
                (d = a.zc()) ? e = d.call(a, b) : this.s && (e = this.s(a, b));
                if (e) {
                    var n, p = !1;
                    Array.isArray(e) || (e = [e]);
                    d = 0;
                    for (n = e.length; d < n; ++d)p = Jj(f, a, e[d], Ij(b, c), this.Sm, this) || p;
                    d = p
                } else d = !1
            }
            g = d
        }, this);
        Ej(f);
        if (g)return null;
        this.l[0] != d[0] || this.l[1] != d[1] ? (this.i.canvas.width = d[0], this.i.canvas.height = d[1], this.l[0] = d[0], this.l[1] = d[1]) : this.i.clearRect(0, 0, d[0], d[1]);
        a = ik(this,
            ac(a), b, c, d);
        f.Za(this.i, c, a, 0, {});
        this.u = f;
        return this.i.canvas
    };
    k.ya = function (a, b, c, d, e) {
        if (this.u) {
            var f = {};
            return this.u.ya(a, b, 0, d, function (a) {
                var b = ea(a).toString();
                if (!(b in f))return f[b] = !0, e(a)
            })
        }
    };
    k.Pm = function () {
        return this.c
    };
    k.Qm = function () {
        return this.B
    };
    k.Rm = function () {
        return this.s
    };
    function ik(a, b, c, d, e) {
        c = d / c;
        return $h(a.La, e[0] / 2, e[1] / 2, c, -c, 0, -b[0], -b[1])
    }

    k.Sm = function () {
        this.v()
    };
    k.Tm = function () {
        Yj(this, this.c.U())
    };
    k.nh = function (a) {
        this.B = void 0 !== a ? a : Fi;
        this.s = a ? Di(this.B) : void 0;
        this.v()
    };
    function jk(a) {
        gj.call(this, a);
        this.f = null;
        this.s = Rh();
        this.c = this.l = null
    }

    v(jk, gj);
    jk.prototype.ya = function (a, b, c, d) {
        var e = this.a;
        return e.ga().ya(a, b.viewState.resolution, b.viewState.rotation, b.skippedFeatureUids, function (a) {
            return c.call(d, a, e)
        })
    };
    jk.prototype.Bc = function (a, b, c, d) {
        if (this.f && this.f.a())if (this.a.ga() instanceof hk) {
            if (a = Wh(b.pixelToCoordinateTransform, a.slice()), this.ya(a, b, gc, this))return c.call(d, this.a, null)
        } else if (this.l || (this.l = ai(this.s.slice())), b = Wh(this.l, a.slice()), this.c || (this.c = Ge(1, 1)), this.c.clearRect(0, 0, 1, 1), this.c.drawImage(this.f ? this.f.a() : null, b[0], b[1], 1, 1, 0, 0, 1, 1), b = this.c.getImageData(0, 0, 1, 1).data, 0 < b[3])return c.call(d, this.a, b)
    };
    jk.prototype.j = function (a, b) {
        var c = a.pixelRatio, d = a.viewState, e = d.center, f = d.resolution, g = this.a.ga(), h = a.viewHints, l = a.extent;
        void 0 !== b.extent && (l = cc(l, b.extent));
        h[0] || h[1] || Yb(l) || (d = g.W(l, f, c, d.projection)) && aj(this, d) && (this.f = d);
        if (this.f) {
            var d = this.f, h = d.D(), l = d.resolution, m = d.f, f = c * l / (f * m), n = Sh(this.s);
            Zh(n, c * a.size[0] / 2, c * a.size[1] / 2);
            Yh(n, f, f);
            Zh(n, m * (h[0] - e[0]) / l, m * (e[1] - h[3]) / l);
            this.l = null;
            cj(a.attributions, d.j);
            dj(a, g)
        }
        return !!this.f
    };
    function kk(a) {
        gj.call(this, a);
        this.c = Ge();
        this.l = [];
        this.o = Bb();
        this.B = [0, 0, 0];
        this.P = Rh();
        this.G = 0
    }

    v(kk, gj);
    kk.prototype.i = function (a, b, c) {
        var d = kj(this, a, 0);
        ij(this, "precompose", c, a, d);
        lk(this, c, a, b);
        jj(this, c, a, d)
    };
    kk.prototype.j = function (a, b) {
        function c(a) {
            a = a.U();
            return a == mg || 4 == a || 3 == a && !r
        }

        var d = a.pixelRatio, e = a.viewState, f = e.projection, g = this.a, h = g.ga(), l = h.pb(f), e = l.wc(e.resolution, this.G), m = l.Ca(e), n = a.extent;
        void 0 !== b.extent && (n = cc(n, b.extent));
        if (Yb(n))return !1;
        var m = he(l, n, m), p = {};
        p[e] = {};
        var q = this.Ue(h, f, p), r = g.c(), u = this.o, x = new Td(0, 0, 0, 0), y, A, z, K;
        for (z = m.ba; z <= m.da; ++z)for (K = m.ea; K <= m.ha; ++K)y = h.vc(e, z, K, d, f), c(y) || (y = lg(y)), c(y) ? p[e][y.xa.toString()] = y : (A = fe(l, y.xa, q, x, u), A || (y = ge(l, y.xa, x,
            u)) && q(e + 1, y));
        q = Object.keys(p).map(Number);
        q.sort(Xa);
        u = this.l;
        u.length = 0;
        var L, x = 0;
        for (z = q.length; x < z; ++x)for (L in y = q[x], K = p[y], K)y = K[L], y.U() == mg && u.push(y);
        ej(a.usedTiles, h, e, m);
        fj(a, h, l, d, f, n, e, g.f());
        bj(a, h);
        dj(a, h);
        return !0
    };
    kk.prototype.Bc = function (a, b, c, d) {
        var e = this.c.canvas, f = b.size, g = b.pixelRatio;
        e.width = f[0] * g;
        e.height = f[1] * g;
        this.i(b, zh(this.a), this.c);
        a = this.c.getImageData(a[0], a[1], 1, 1).data;
        if (0 < a[3])return c.call(d, this.a, a)
    };
    function lk(a, b, c, d) {
        var e = a.l;
        if (0 != e.length) {
            var f = c.pixelRatio, g = c.viewState, h = g.center, l = g.projection, m = g.resolution, g = g.rotation, n = c.size, p = Math.round(f * n[0] / 2), q = Math.round(f * n[1] / 2), n = f / m, r = a.a, u = r.ga(), x = u.gb(f) * u.df(l), y = u.pb(l), r = Oa(r, "render"), A = b, z = 1, K, L, R;
            if (g || r) {
                A = a.c;
                K = A.canvas;
                var z = u.gb(f) / f, Ka = b.canvas.width * z;
                L = b.canvas.height * z;
                R = Math.round(Math.sqrt(Ka * Ka + L * L));
                K.width != R ? K.width = K.height = R : A.clearRect(0, 0, R, R);
                K = (R - Ka) / 2 / z;
                L = (R - L) / 2 / z;
                n *= z;
                p = Math.round(z * (p + K));
                q = Math.round(z *
                    (q + L))
            }
            Ka = A.globalAlpha;
            A.globalAlpha = d.opacity;
            var jb = Rb(y.Ia(y.rd(h, e[0].xa[0], a.B), a.o)), F = e[e.length - 1].xa[0], ta = y.Ca(F), F = Zd(y.Na(F)), Ra, Tb = u.gf(l) && 1 == d.opacity;
            Tb || (e.reverse(), Ra = []);
            var Ha = d.extent;
            if (d = void 0 !== Ha) {
                var Vb = Wb(Ha), Pc = Ub(Ha), Ed = Sb(Ha), Ha = Rb(Ha);
                Wh(c.coordinateToPixelTransform, Vb);
                Wh(c.coordinateToPixelTransform, Pc);
                Wh(c.coordinateToPixelTransform, Ed);
                Wh(c.coordinateToPixelTransform, Ha);
                var sc = K || 0, Qc = L || 0;
                A.save();
                var Yc = A.canvas.width / 2, Gc = A.canvas.height / 2;
                ti(A, -g, Yc, Gc);
                A.beginPath();
                A.moveTo(z * (Vb[0] * f + sc), z * (Vb[1] * f + Qc));
                A.lineTo(z * (Pc[0] * f + sc), z * (Pc[1] * f + Qc));
                A.lineTo(z * (Ed[0] * f + sc), z * (Ed[1] * f + Qc));
                A.lineTo(z * (Ha[0] * f + sc), z * (Ha[1] * f + Qc));
                A.clip();
                ti(A, g, Yc, Gc)
            }
            Vb = 0;
            for (Pc = e.length; Vb < Pc; ++Vb) {
                var Ed = e[Vb], Gc = Ed.xa, sc = Gc[0], Qc = Zd(y.Na(sc)), tc = y.rd(jb, sc, a.B), De = Rb(y.Ia(tc, a.o)), Yc = y.Ca(sc) / ta, Ha = Qc[0] / F[0] * Math.round(F[0] / m * ta * f * z) * Yc, Qc = Qc[1] / F[1] * Math.round(F[1] / m * ta * f * z) * Yc, Yc = (Gc[1] - tc[1]) * Ha + p + Math.round((De[0] - h[0]) * n), Gc = (tc[2] - Gc[2] - 1) * Qc + q + Math.round((h[1] -
                        De[1]) * n);
                if (!Tb) {
                    tc = [Yc, Gc, Yc + Ha, Gc + Qc];
                    A.save();
                    for (var De = 0, Ss = Ra.length; De < Ss; ++De) {
                        var Fe = Ra[De];
                        dc(tc, Fe) && (A.beginPath(), A.moveTo(tc[0], tc[1]), A.lineTo(tc[0], tc[3]), A.lineTo(tc[2], tc[3]), A.lineTo(tc[2], tc[1]), A.moveTo(Fe[0], Fe[1]), A.lineTo(Fe[2], Fe[1]), A.lineTo(Fe[2], Fe[3]), A.lineTo(Fe[0], Fe[3]), A.closePath(), A.clip())
                    }
                    Ra.push(tc)
                }
                sc = u.kf(sc, f, l);
                A.drawImage(Ed.qb(), x, x, sc[0], sc[1], Yc, Gc, Ha, Qc);
                Tb || A.restore()
            }
            d && A.restore();
            r && (e = K - p / z + p, f = L - q / z + q, h = $h(a.P, R / 2 - e, R / 2 - f, n, -n, -g, -h[0] + e / n, -h[1] -
                f / n), ij(a, "render", A, c, h));
            (g || r) && b.drawImage(A.canvas, -Math.round(K), -Math.round(L), R / z, R / z);
            A.globalAlpha = Ka
        }
    };
    function mk(a) {
        gj.call(this, a);
        this.c = !1;
        this.B = -1;
        this.C = NaN;
        this.T = Bb();
        this.l = this.u = null;
        this.o = Ge()
    }

    v(mk, gj);
    mk.prototype.i = function (a, b, c) {
        var d = a.extent, e = a.pixelRatio, f = b.td ? a.skippedFeatureUids : {}, g = a.viewState, h = g.projection, g = g.rotation, l = h.D(), m = this.a.ga(), n = kj(this, a, 0);
        ij(this, "precompose", c, a, n);
        var p = b.extent, q = void 0 !== p;
        q && hj(c, a, p);
        if ((p = this.l) && !p.g()) {
            var r = 0, u = 0, x;
            if (Oa(this.a, "render")) {
                x = c.canvas.width;
                var y = c.canvas.height;
                if (g) {
                    var A = Math.round(Math.sqrt(x * x + y * y)), r = (A - x) / 2, u = (A - y) / 2;
                    x = y = A
                }
                this.o.canvas.width = x;
                this.o.canvas.height = y;
                x = this.o
            } else x = c;
            y = x.globalAlpha;
            x.globalAlpha =
                b.opacity;
            x != c && x.translate(r, u);
            b = a.size[0] * e;
            A = a.size[1] * e;
            ti(x, -g, b / 2, A / 2);
            p.Za(x, e, n, g, f);
            if (m.G && h.a && !Ib(l, d)) {
                for (var h = d[0], m = Zb(l), z = 0; h < l[0];)--z, n = m * z, n = kj(this, a, n), p.Za(x, e, n, g, f), h += m;
                z = 0;
                for (h = d[2]; h > l[2];)++z, n = m * z, n = kj(this, a, n), p.Za(x, e, n, g, f), h -= m;
                n = kj(this, a, 0)
            }
            ti(x, g, b / 2, A / 2);
            x != c && (ij(this, "render", x, a, n), c.drawImage(x.canvas, -r, -u), x.translate(-r, -u));
            x.globalAlpha = y
        }
        q && c.restore();
        jj(this, c, a, n)
    };
    mk.prototype.ya = function (a, b, c, d) {
        if (this.l) {
            var e = this.a, f = {};
            return this.l.ya(a, b.viewState.resolution, b.viewState.rotation, {}, function (a) {
                var b = ea(a).toString();
                if (!(b in f))return f[b] = !0, c.call(d, a, e)
            })
        }
    };
    mk.prototype.G = function () {
        $i(this)
    };
    mk.prototype.j = function (a) {
        function b(a) {
            var b, d = a.zc();
            d ? b = d.call(a, m) : (d = c.j) && (b = d(a, m));
            if (b) {
                if (b) {
                    d = !1;
                    if (Array.isArray(b))for (var e = 0, f = b.length; e < f; ++e)d = Jj(q, a, b[e], Ij(m, n), this.G, this) || d; else d = Jj(q, a, b, Ij(m, n), this.G, this) || d;
                    a = d
                } else a = !1;
                this.c = this.c || a
            }
        }

        var c = this.a, d = c.ga();
        cj(a.attributions, d.j);
        dj(a, d);
        var e = a.viewHints[0], f = a.viewHints[1], g = c.Z, h = c.fa;
        if (!this.c && !g && e || !h && f)return !0;
        var l = a.extent, h = a.viewState, e = h.projection, m = h.resolution, n = a.pixelRatio, f = c.g, p = c.i, g = c.get("renderOrder");
        void 0 === g && (g = Hj);
        l = Db(l, p * m);
        p = h.projection.D();
        d.G && h.projection.a && !Ib(p, a.extent) && (a = Math.max(Zb(l) / 2, Zb(p)), l[0] = p[0] - a, l[2] = p[2] + a);
        if (!this.c && this.C == m && this.B == f && this.u == g && Ib(this.T, l))return !0;
        this.l = null;
        this.c = !1;
        var q = new Dj(.5 * m / n, l, m, d.Aa, c.i);
        d.sd(l, m, e);
        if (g) {
            var r = [];
            d.Kb(l, function (a) {
                r.push(a)
            }, this);
            r.sort(g);
            r.forEach(b, this)
        } else d.Kb(l, b, this);
        Ej(q);
        this.C = m;
        this.B = f;
        this.u = g;
        this.T = l;
        this.l = q;
        return !0
    };
    function nk(a) {
        kk.call(this, a);
        this.u = !1;
        this.T = Rh();
        this.G = a.u == Ji ? 1 : 0
    }

    v(nk, kk);
    var ok = {image: Cj, hybrid: ["Polygon", "LineString"]}, pk = {hybrid: ["Image", "Text"], vector: Cj};
    nk.prototype.i = function (a, b, c) {
        var d = kj(this, a, 0);
        ij(this, "precompose", c, a, d);
        var e = b.extent, f = void 0 !== e;
        f && hj(c, a, e);
        e = this.a.u;
        e !== Ji && lk(this, c, a, b);
        if (e !== Hi) {
            var g = this.a, e = pk[g.u], h = a.pixelRatio, l = b.td ? a.skippedFeatureUids : {}, m = a.viewState, n = m.center, p = m.rotation, q = a.size, m = h / m.resolution, r = g.ga(), u = r.gb(), x = kj(this, a, 0);
            Oa(g, "render") ? (this.c.canvas.width = c.canvas.width, this.c.canvas.height = c.canvas.height, g = this.c) : g = c;
            var y = g.globalAlpha;
            g.globalAlpha = b.opacity;
            b = this.l;
            var r = r.tileGrid,
                A, z, K, L, R, Ka, jb, F;
            z = 0;
            for (K = b.length; z < K; ++z)L = b[z], jb = L.f, R = r.Ia(L.xa, this.o), A = L.xa[0], Ka = "tile-pixels" == L.l.yb(), A = r.Ca(A), F = A / u, A = Math.round(h * q[0] / 2), L = Math.round(h * q[1] / 2), Ka ? (R = Wb(R), Sh(this.T), R = $h(this.T, A, L, m * F, m * F, p, (R[0] - n[0]) / F, (n[1] - R[1]) / F)) : R = x, ti(g, -p, A, L), jb.Bd.Za(g, h, R, p, l, e), ti(g, p, A, L);
            g != c && (ij(this, "render", g, a, x), c.drawImage(g.canvas, 0, 0));
            g.globalAlpha = y
        }
        f && c.restore();
        jj(this, c, a, d)
    };
    function qk(a, b, c) {
        function d(a) {
            var b, c = a.zc();
            c ? b = c.call(a, u) : (c = e.j) && (b = c(a, u));
            if (b) {
                Array.isArray(b) || (b = [b]);
                var c = z, d = A;
                if (b) {
                    var f = !1;
                    if (Array.isArray(b))for (var g = 0, h = b.length; g < h; ++g)f = Jj(d, a, b[g], c, this.C, this) || f; else f = Jj(d, a, b, c, this.C, this) || f;
                    a = f
                } else a = !1;
                this.u = this.u || a;
                l.jd = l.jd || a
            }
        }

        var e = a.a, f = c.pixelRatio;
        c = c.viewState.projection;
        var g = e.g, h = e.get("renderOrder") || null, l = b.f;
        if (l.jd || l.Rh != g || l.Qf != h) {
            l.Bd = null;
            l.jd = !1;
            var m = e.ga(), n = m.tileGrid, p = b.xa, q = b.l, r = "tile-pixels" ==
                q.yb(), u = n.Ca(p[0]), x;
            if (r)var y = r = m.gb(), n = Zd(n.Na(p[0])), n = [0, 0, n[0] * y, n[1] * y]; else r = u, n = n.Ia(p), Hc(c, q) || (x = !0, b.uf(c));
            l.jd = !1;
            var A = new Dj(0, n, r, m.i, e.i), z = Ij(r, f);
            b = b.c;
            h && h !== l.Qf && b.sort(h);
            m = 0;
            for (r = b.length; m < r; ++m)f = b[m], x && f.V().lb(q, c), d.call(a, f);
            Ej(A);
            l.Rh = g;
            l.Qf = h;
            l.Bd = A;
            l.resolution = NaN
        }
    }

    nk.prototype.ya = function (a, b, c, d) {
        var e = b.viewState.resolution;
        b = b.viewState.rotation;
        var f = this.a, g = {}, h = this.l, l = f.ga(), m = l.tileGrid, n, p, q, r, u, x;
        q = 0;
        for (r = h.length; q < r; ++q)x = h[q], p = x.xa, u = l.tileGrid.Ia(p, this.o), Gb(u, a) && ("tile-pixels" === x.l.yb() ? (u = Wb(u), e = l.gb(), p = m.Ca(p[0]) / e, p = [(a[0] - u[0]) / p, (u[1] - a[1]) / p]) : p = a, x = x.f.Bd, n = n || x.ya(p, e, b, {}, function (a) {
                var b = ea(a).toString();
                if (!(b in g))return g[b] = !0, c.call(d, a, f)
            }));
        return n
    };
    nk.prototype.C = function () {
        $i(this)
    };
    nk.prototype.j = function (a, b) {
        var c = kk.prototype.j.call(this, a, b);
        if (c)for (var d = Object.keys(a.Ce || {}), e = 0, f = this.l.length; e < f; ++e) {
            var g = this.l[e];
            qk(this, g, a);
            var h = g, g = a, l = this.a, m = ok[l.u];
            if (m) {
                var n = g.pixelRatio, p = h.f, q = l.g;
                if (!db(p.li, d) || p.Rf !== q) {
                    p.li = d;
                    p.Rf = q;
                    var q = h.g, r = l.ga(), u = r.tileGrid, x = h.xa[0], y = u.Ca(x), l = Zd(u.Na(x)), x = u.Ca(x), A = x / y, z = l[0] * n * A, K = l[1] * n * A;
                    q.canvas.width = z / A + .5;
                    q.canvas.height = K / A + .5;
                    q.scale(1 / A, 1 / A);
                    q.translate(z / 2, K / 2);
                    A = "tile-pixels" == h.l.yb();
                    y = n / y;
                    r = r.gb();
                    x /= r;
                    u = u.Ia(h.xa, this.o);
                    h = Sh(this.T);
                    A ? (Yh(h, y * x, y * x), Zh(h, -l[0] * r / 2, -l[1] * r / 2)) : (l = ac(u), Yh(h, y, -y), Zh(h, -l[0], -l[1]));
                    p.Bd.Za(q, n, h, 0, g.skippedFeatureUids || {}, m)
                }
            }
        }
        return c
    };
    function rk(a, b) {
        bi.call(this, 0, b);
        this.g = Ge();
        this.b = this.g.canvas;
        this.b.style.width = "100%";
        this.b.style.height = "100%";
        this.b.className = "ol-unselectable";
        a.insertBefore(this.b, a.childNodes[0] || null);
        this.a = !0;
        this.c = Rh()
    }

    v(rk, bi);
    rk.prototype.ng = function (a) {
        return a instanceof gi ? new jk(a) : a instanceof D ? new kk(a) : a instanceof G ? new nk(a) : a instanceof E ? new mk(a) : null
    };
    function sk(a, b, c) {
        var d = a.l, e = a.g;
        if (Oa(d, b)) {
            var f = c.extent, g = c.pixelRatio, h = c.viewState.rotation, l = c.viewState, m = c.pixelRatio / l.resolution;
            a = $h(a.c, a.b.width / 2, a.b.height / 2, m, -m, -l.rotation, -l.center[0], -l.center[1]);
            d.b(new Lh(b, new Ni(e, g, f, a, h), c, e, null))
        }
    }

    rk.prototype.X = function () {
        return "canvas"
    };
    rk.prototype.Pf = function (a) {
        if (a) {
            var b = this.g, c = a.pixelRatio, d = Math.round(a.size[0] * c), c = Math.round(a.size[1] * c);
            this.b.width != d || this.b.height != c ? (this.b.width = d, this.b.height = c) : b.clearRect(0, 0, d, c);
            var e = a.viewState.rotation;
            ci(a);
            sk(this, "precompose", a);
            var f = a.layerStatesArray;
            eb(f);
            ti(b, e, d / 2, c / 2);
            var g = a.viewState.resolution, h, l, m, n;
            h = 0;
            for (l = f.length; h < l; ++h)n = f[h], m = n.layer, m = ei(this, m), Nh(n, g) && "ready" == n.mi && m.j(a, n) && m.i(a, n, b);
            ti(b, -e, d / 2, c / 2);
            sk(this, "postcompose", a);
            this.a || (this.b.style.display =
                "", this.a = !0);
            fi(this, a);
            a.postRenderFunctions.push(di)
        } else this.a && (this.b.style.display = "none", this.a = !1)
    };
    function tk(a) {
        this.b = a
    };
    function uk(a) {
        this.b = a
    }

    v(uk, tk);
    uk.prototype.X = function () {
        return 35632
    };
    function vk(a) {
        this.b = a
    }

    v(vk, tk);
    vk.prototype.X = function () {
        return 35633
    };
    function wk() {
        this.b = "precision mediump float;varying vec2 a;varying float b;uniform float k;uniform sampler2D l;void main(void){vec4 texColor=texture2D(l,a);gl_FragColor.rgb=texColor.rgb;float alpha=texColor.a*b*k;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"
    }

    v(wk, uk);
    var xk = new wk;

    function yk() {
        this.b = "varying vec2 a;varying float b;attribute vec2 c;attribute vec2 d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;void main(void){mat4 offsetMatrix=i;if(g==1.0){offsetMatrix=i*j;}vec4 offsets=offsetMatrix*vec4(e,0.,0.);gl_Position=h*vec4(c,0.,1.)+offsets;a=d;b=f;}"
    }

    v(yk, vk);
    var zk = new yk;

    function Ak(a, b) {
        this.l = a.getUniformLocation(b, "j");
        this.o = a.getUniformLocation(b, "i");
        this.i = a.getUniformLocation(b, "k");
        this.j = a.getUniformLocation(b, "h");
        this.b = a.getAttribLocation(b, "e");
        this.a = a.getAttribLocation(b, "f");
        this.f = a.getAttribLocation(b, "c");
        this.g = a.getAttribLocation(b, "g");
        this.c = a.getAttribLocation(b, "d")
    };
    function Bk() {
        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    }

    function Ck(a, b) {
        a[0] = b[0];
        a[1] = b[1];
        a[4] = b[2];
        a[5] = b[3];
        a[12] = b[4];
        a[13] = b[5];
        return a
    };
    function Dk(a) {
        this.b = void 0 !== a ? a : [];
        this.a = Ek
    }

    var Ek = 35044;

    function Fk(a, b) {
        this.j = a;
        this.b = b;
        this.a = {};
        this.c = {};
        this.f = {};
        this.o = this.s = this.i = this.l = null;
        (this.g = Ya(ca, "OES_element_index_uint")) && b.getExtension("OES_element_index_uint");
        w(this.j, "webglcontextlost", this.Qn, this);
        w(this.j, "webglcontextrestored", this.Rn, this)
    }

    v(Fk, Ia);
    function Gk(a, b, c) {
        var d = a.b, e = c.b, f = String(ea(c));
        if (f in a.a) d.bindBuffer(b, a.a[f].buffer); else {
            var g = d.createBuffer();
            d.bindBuffer(b, g);
            var h;
            34962 == b ? h = new Float32Array(e) : 34963 == b && (h = a.g ? new Uint32Array(e) : new Uint16Array(e));
            d.bufferData(b, h, c.a);
            a.a[f] = {bc: c, buffer: g}
        }
    }

    function Hk(a, b) {
        var c = a.b, d = String(ea(b)), e = a.a[d];
        c.isContextLost() || c.deleteBuffer(e.buffer);
        delete a.a[d]
    }

    k = Fk.prototype;
    k.la = function () {
        Ga(this.j);
        var a = this.b;
        if (!a.isContextLost()) {
            for (var b in this.a)a.deleteBuffer(this.a[b].buffer);
            for (b in this.f)a.deleteProgram(this.f[b]);
            for (b in this.c)a.deleteShader(this.c[b]);
            a.deleteFramebuffer(this.i);
            a.deleteRenderbuffer(this.o);
            a.deleteTexture(this.s)
        }
    };
    k.Pn = function () {
        return this.b
    };
    function Ik(a) {
        if (!a.i) {
            var b = a.b, c = b.createFramebuffer();
            b.bindFramebuffer(b.FRAMEBUFFER, c);
            var d = Jk(b, 1, 1), e = b.createRenderbuffer();
            b.bindRenderbuffer(b.RENDERBUFFER, e);
            b.renderbufferStorage(b.RENDERBUFFER, b.DEPTH_COMPONENT16, 1, 1);
            b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, d, 0);
            b.framebufferRenderbuffer(b.FRAMEBUFFER, b.DEPTH_ATTACHMENT, b.RENDERBUFFER, e);
            b.bindTexture(b.TEXTURE_2D, null);
            b.bindRenderbuffer(b.RENDERBUFFER, null);
            b.bindFramebuffer(b.FRAMEBUFFER, null);
            a.i = c;
            a.s = d;
            a.o = e
        }
        return a.i
    }

    function Kk(a, b) {
        var c = String(ea(b));
        if (c in a.c)return a.c[c];
        var d = a.b, e = d.createShader(b.X());
        d.shaderSource(e, b.b);
        d.compileShader(e);
        return a.c[c] = e
    }

    function Lk(a, b, c) {
        var d = ea(b) + "/" + ea(c);
        if (d in a.f)return a.f[d];
        var e = a.b, f = e.createProgram();
        e.attachShader(f, Kk(a, b));
        e.attachShader(f, Kk(a, c));
        e.linkProgram(f);
        return a.f[d] = f
    }

    k.Qn = function () {
        va(this.a);
        va(this.c);
        va(this.f);
        this.o = this.s = this.i = this.l = null
    };
    k.Rn = function () {
    };
    k.ve = function (a) {
        if (a == this.l)return !1;
        this.b.useProgram(a);
        this.l = a;
        return !0
    };
    function Mk(a, b, c) {
        var d = a.createTexture();
        a.bindTexture(a.TEXTURE_2D, d);
        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR);
        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR);
        void 0 !== b && a.texParameteri(3553, 10242, b);
        void 0 !== c && a.texParameteri(3553, 10243, c);
        return d
    }

    function Jk(a, b, c) {
        var d = Mk(a, void 0, void 0);
        a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, b, c, 0, a.RGBA, a.UNSIGNED_BYTE, null);
        return d
    }

    function Nk(a, b) {
        var c = Mk(a, 33071, 33071);
        a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, b);
        return c
    };
    function Ok(a, b) {
        this.B = this.C = void 0;
        this.o = ac(b);
        this.u = [];
        this.i = [];
        this.S = void 0;
        this.c = [];
        this.f = [];
        this.za = this.na = void 0;
        this.a = [];
        this.G = this.l = null;
        this.P = void 0;
        this.Ka = Rh();
        this.Aa = Rh();
        this.Va = this.W = void 0;
        this.La = Rh();
        this.ra = Bk();
        this.fa = this.bb = this.Z = void 0;
        this.oa = [];
        this.j = [];
        this.b = [];
        this.T = null;
        this.g = [];
        this.s = [];
        this.Ib = void 0
    }

    v(Ok, Mi);
    function Pk(a, b) {
        var c = a.T, d = a.l, e = a.oa, f = a.j, g = b.b;
        return function () {
            if (!g.isContextLost()) {
                var a, l;
                a = 0;
                for (l = e.length; a < l; ++a)g.deleteTexture(e[a]);
                a = 0;
                for (l = f.length; a < l; ++a)g.deleteTexture(f[a])
            }
            Hk(b, c);
            Hk(b, d)
        }
    }

    function Qk(a, b, c, d) {
        var e = a.C, f = a.B, g = a.S, h = a.na, l = a.za, m = a.P, n = a.W, p = a.Va, q = a.Z ? 1 : 0, r = a.bb, u = a.fa, x = a.Ib, y = Math.cos(r), r = Math.sin(r), A = a.a.length, z = a.b.length, K, L, R, Ka, jb, F;
        for (K = 0; K < c; K += d)jb = b[K] - a.o[0], F = b[K + 1] - a.o[1], L = z / 8, R = -u * e, Ka = -u * (g - f), a.b[z++] = jb, a.b[z++] = F, a.b[z++] = R * y - Ka * r, a.b[z++] = R * r + Ka * y, a.b[z++] = n / l, a.b[z++] = (p + g) / h, a.b[z++] = m, a.b[z++] = q, R = u * (x - e), Ka = -u * (g - f), a.b[z++] = jb, a.b[z++] = F, a.b[z++] = R * y - Ka * r, a.b[z++] = R * r + Ka * y, a.b[z++] = (n + x) / l, a.b[z++] = (p + g) / h, a.b[z++] = m, a.b[z++] = q, R = u * (x -
            e), Ka = u * f, a.b[z++] = jb, a.b[z++] = F, a.b[z++] = R * y - Ka * r, a.b[z++] = R * r + Ka * y, a.b[z++] = (n + x) / l, a.b[z++] = p / h, a.b[z++] = m, a.b[z++] = q, R = -u * e, Ka = u * f, a.b[z++] = jb, a.b[z++] = F, a.b[z++] = R * y - Ka * r, a.b[z++] = R * r + Ka * y, a.b[z++] = n / l, a.b[z++] = p / h, a.b[z++] = m, a.b[z++] = q, a.a[A++] = L, a.a[A++] = L + 1, a.a[A++] = L + 2, a.a[A++] = L, a.a[A++] = L + 2, a.a[A++] = L + 3
    }

    Ok.prototype.qc = function (a, b) {
        this.g.push(this.a.length);
        this.s.push(b);
        var c = a.ka();
        Qk(this, c, c.length, a.sa())
    };
    Ok.prototype.rc = function (a, b) {
        this.g.push(this.a.length);
        this.s.push(b);
        var c = a.ka();
        Qk(this, c, c.length, a.sa())
    };
    function Rk(a, b) {
        var c = b.b;
        a.u.push(a.a.length);
        a.i.push(a.a.length);
        a.T = new Dk(a.b);
        Gk(b, 34962, a.T);
        a.l = new Dk(a.a);
        Gk(b, 34963, a.l);
        var d = {};
        Sk(a.oa, a.c, d, c);
        Sk(a.j, a.f, d, c);
        a.C = void 0;
        a.B = void 0;
        a.S = void 0;
        a.c = null;
        a.f = null;
        a.na = void 0;
        a.za = void 0;
        a.a = null;
        a.P = void 0;
        a.W = void 0;
        a.Va = void 0;
        a.Z = void 0;
        a.bb = void 0;
        a.fa = void 0;
        a.b = null;
        a.Ib = void 0
    }

    function Sk(a, b, c, d) {
        var e, f, g, h = b.length;
        for (g = 0; g < h; ++g)e = b[g], f = ea(e).toString(), f in c ? e = c[f] : (e = Nk(d, e), c[f] = e), a[g] = e
    }

    Ok.prototype.Za = function (a, b, c, d, e, f, g, h, l, m, n) {
        f = a.b;
        Gk(a, 34962, this.T);
        Gk(a, 34963, this.l);
        var p = Lk(a, xk, zk), q;
        this.G ? q = this.G : this.G = q = new Ak(f, p);
        a.ve(p);
        f.enableVertexAttribArray(q.f);
        f.vertexAttribPointer(q.f, 2, 5126, !1, 32, 0);
        f.enableVertexAttribArray(q.b);
        f.vertexAttribPointer(q.b, 2, 5126, !1, 32, 8);
        f.enableVertexAttribArray(q.c);
        f.vertexAttribPointer(q.c, 2, 5126, !1, 32, 16);
        f.enableVertexAttribArray(q.a);
        f.vertexAttribPointer(q.a, 1, 5126, !1, 32, 24);
        f.enableVertexAttribArray(q.g);
        f.vertexAttribPointer(q.g,
            1, 5126, !1, 32, 28);
        p = Sh(this.La);
        Yh(p, 2 / (c * e[0]), 2 / (c * e[1]));
        Xh(p, -d);
        Zh(p, -(b[0] - this.o[0]), -(b[1] - this.o[1]));
        b = Sh(this.Aa);
        Yh(b, 2 / e[0], 2 / e[1]);
        e = Sh(this.Ka);
        0 !== d && Xh(e, -d);
        f.uniformMatrix4fv(q.j, !1, Ck(this.ra, p));
        f.uniformMatrix4fv(q.o, !1, Ck(this.ra, b));
        f.uniformMatrix4fv(q.l, !1, Ck(this.ra, e));
        f.uniform1f(q.i, g);
        var r;
        if (void 0 === l) Tk(this, f, a, h, this.oa, this.u); else {
            if (m)a:{
                d = a.g ? 5125 : 5123;
                a = a.g ? 4 : 2;
                e = this.g.length - 1;
                for (g = this.j.length - 1; 0 <= g; --g)for (f.bindTexture(3553, this.j[g]), m = 0 < g ? this.i[g -
                1] : 0, b = this.i[g]; 0 <= e && this.g[e] >= m;) {
                    r = this.g[e];
                    c = this.s[e];
                    p = ea(c).toString();
                    if (void 0 === h[p] && c.V() && (void 0 === n || dc(n, c.V().D())) && (f.clear(f.COLOR_BUFFER_BIT | f.DEPTH_BUFFER_BIT), f.drawElements(4, b - r, d, r * a), b = l(c))) {
                        h = b;
                        break a
                    }
                    b = r;
                    e--
                }
                h = void 0
            } else f.clear(f.COLOR_BUFFER_BIT | f.DEPTH_BUFFER_BIT), Tk(this, f, a, h, this.j, this.i), h = (h = l(null)) ? h : void 0;
            r = h
        }
        f.disableVertexAttribArray(q.f);
        f.disableVertexAttribArray(q.b);
        f.disableVertexAttribArray(q.c);
        f.disableVertexAttribArray(q.a);
        f.disableVertexAttribArray(q.g);
        return r
    };
    function Tk(a, b, c, d, e, f) {
        var g = c.g ? 5125 : 5123;
        c = c.g ? 4 : 2;
        if (xa(d)) {
            var h;
            a = 0;
            d = e.length;
            for (h = 0; a < d; ++a) {
                b.bindTexture(3553, e[a]);
                var l = f[a];
                b.drawElements(4, l - h, g, h * c);
                h = l
            }
        } else {
            h = 0;
            var m, l = 0;
            for (m = e.length; l < m; ++l) {
                b.bindTexture(3553, e[l]);
                for (var n = 0 < l ? f[l - 1] : 0, p = f[l], q = n; h < a.g.length && a.g[h] <= p;) {
                    var r = ea(a.s[h]).toString();
                    void 0 !== d[r] ? (q !== n && b.drawElements(4, n - q, g, q * c), n = q = h === a.g.length - 1 ? p : a.g[h + 1]) : n = h === a.g.length - 1 ? p : a.g[h + 1];
                    h++
                }
                q !== n && b.drawElements(4, n - q, g, q * c)
            }
        }
    }

    Ok.prototype.Xb = function (a) {
        var b = a.cc(), c = a.Tb(1), d = a.md(), e = a.pe(1), f = a.l, g = a.jc(), h = a.T, l = a.o, m = a.Gb();
        a = a.c;
        var n;
        0 === this.c.length ? this.c.push(c) : (n = this.c[this.c.length - 1], ea(n) != ea(c) && (this.u.push(this.a.length), this.c.push(c)));
        0 === this.f.length ? this.f.push(e) : (n = this.f[this.f.length - 1], ea(n) != ea(e) && (this.i.push(this.a.length), this.f.push(e)));
        this.C = b[0];
        this.B = b[1];
        this.S = m[1];
        this.na = d[1];
        this.za = d[0];
        this.P = f;
        this.W = g[0];
        this.Va = g[1];
        this.bb = l;
        this.Z = h;
        this.fa = a;
        this.Ib = m[0]
    };
    function Uk(a, b, c) {
        this.c = b;
        this.i = a;
        this.f = c;
        this.a = {}
    }

    v(Uk, lj);
    function Vk(a, b) {
        var c = [], d;
        for (d in a.a)c.push(Pk(a.a[d], b));
        return function () {
            for (var a = c.length, b, d = 0; d < a; d++)b = c[d].apply(this, arguments);
            return b
        }
    }

    function Wk(a, b) {
        for (var c in a.a)Rk(a.a[c], b)
    }

    Uk.prototype.b = function (a, b) {
        var c = this.a[b];
        void 0 === c && (c = new Xk[b](this.i, this.c), this.a[b] = c);
        return c
    };
    Uk.prototype.g = function () {
        return xa(this.a)
    };
    Uk.prototype.Za = function (a, b, c, d, e, f, g, h) {
        var l, m, n;
        l = 0;
        for (m = Cj.length; l < m; ++l)n = this.a[Cj[l]], void 0 !== n && n.Za(a, b, c, d, e, f, g, h, void 0, !1)
    };
    function Yk(a, b, c, d, e, f, g, h, l, m, n) {
        var p = Zk, q, r;
        for (q = Cj.length - 1; 0 <= q; --q)if (r = a.a[Cj[q]], void 0 !== r && (r = r.Za(b, c, d, e, p, f, g, h, l, m, n)))return r
    }

    Uk.prototype.ya = function (a, b, c, d, e, f, g, h, l, m) {
        var n = b.b;
        n.bindFramebuffer(n.FRAMEBUFFER, Ik(b));
        var p;
        void 0 !== this.f && (p = Db(Lb(a), d * this.f));
        return Yk(this, b, a, d, e, g, h, l, function (a) {
            var b = new Uint8Array(4);
            n.readPixels(0, 0, 1, 1, n.RGBA, n.UNSIGNED_BYTE, b);
            if (0 < b[3] && (a = m(a)))return a
        }, !0, p)
    };
    function $k(a, b, c, d, e, f, g, h) {
        var l = c.b;
        l.bindFramebuffer(l.FRAMEBUFFER, Ik(c));
        return void 0 !== Yk(a, c, b, d, e, f, g, h, function () {
                var a = new Uint8Array(4);
                l.readPixels(0, 0, 1, 1, l.RGBA, l.UNSIGNED_BYTE, a);
                return 0 < a[3]
            }, !1)
    }

    var Xk = {Image: Ok}, Zk = [1, 1];

    function al(a, b, c, d, e, f, g) {
        this.b = a;
        this.f = b;
        this.g = f;
        this.c = g;
        this.l = e;
        this.j = d;
        this.i = c;
        this.a = null
    }

    v(al, Mi);
    k = al.prototype;
    k.vd = function (a) {
        this.Xb(a.a)
    };
    k.pc = function (a) {
        switch (a.X()) {
            case "Point":
                this.rc(a, null);
                break;
            case "MultiPoint":
                this.qc(a, null);
                break;
            case "GeometryCollection":
                this.We(a, null)
        }
    };
    k.Ve = function (a, b) {
        var c = (0, b.c)(a);
        c && dc(this.g, c.D()) && (this.vd(b), this.pc(c))
    };
    k.We = function (a) {
        a = a.f;
        var b, c;
        b = 0;
        for (c = a.length; b < c; ++b)this.pc(a[b])
    };
    k.rc = function (a, b) {
        var c = this.b, d = (new Uk(1, this.g)).b(0, "Image");
        d.Xb(this.a);
        d.rc(a, b);
        Rk(d, c);
        d.Za(this.b, this.f, this.i, this.j, this.l, this.c, 1, {}, void 0, !1);
        Pk(d, c)()
    };
    k.qc = function (a, b) {
        var c = this.b, d = (new Uk(1, this.g)).b(0, "Image");
        d.Xb(this.a);
        d.qc(a, b);
        Rk(d, c);
        d.Za(this.b, this.f, this.i, this.j, this.l, this.c, 1, {}, void 0, !1);
        Pk(d, c)()
    };
    k.Xb = function (a) {
        this.a = a
    };
    function bl() {
        this.b = "precision mediump float;varying vec2 a;uniform float f;uniform sampler2D g;void main(void){vec4 texColor=texture2D(g,a);gl_FragColor.rgb=texColor.rgb;gl_FragColor.a=texColor.a*f;}"
    }

    v(bl, uk);
    var cl = new bl;

    function dl() {
        this.b = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position=e*vec4(b,0.,1.);a=(d*vec4(c,0.,1.)).st;}"
    }

    v(dl, vk);
    var el = new dl;

    function fl(a, b) {
        this.g = a.getUniformLocation(b, "f");
        this.f = a.getUniformLocation(b, "e");
        this.i = a.getUniformLocation(b, "d");
        this.c = a.getUniformLocation(b, "g");
        this.b = a.getAttribLocation(b, "b");
        this.a = a.getAttribLocation(b, "c")
    };
    function gl(a, b) {
        Yi.call(this, b);
        this.f = a;
        this.W = new Dk([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1]);
        this.i = this.tb = null;
        this.j = void 0;
        this.s = Rh();
        this.u = Rh();
        this.B = Bk();
        this.T = null
    }

    v(gl, Yi);
    function hl(a, b, c) {
        var d = a.f.g;
        if (void 0 === a.j || a.j != c) {
            b.postRenderFunctions.push(function (a, b, c) {
                a.isContextLost() || (a.deleteFramebuffer(b), a.deleteTexture(c))
            }.bind(null, d, a.i, a.tb));
            b = Jk(d, c, c);
            var e = d.createFramebuffer();
            d.bindFramebuffer(36160, e);
            d.framebufferTexture2D(36160, 36064, 3553, b, 0);
            a.tb = b;
            a.i = e;
            a.j = c
        } else d.bindFramebuffer(36160, a.i)
    }

    gl.prototype.lh = function (a, b, c) {
        il(this, "precompose", c, a);
        Gk(c, 34962, this.W);
        var d = c.b, e = Lk(c, cl, el), f;
        this.T ? f = this.T : this.T = f = new fl(d, e);
        c.ve(e) && (d.enableVertexAttribArray(f.b), d.vertexAttribPointer(f.b, 2, 5126, !1, 16, 0), d.enableVertexAttribArray(f.a), d.vertexAttribPointer(f.a, 2, 5126, !1, 16, 8), d.uniform1i(f.c, 0));
        d.uniformMatrix4fv(f.i, !1, Ck(this.B, this.s));
        d.uniformMatrix4fv(f.f, !1, Ck(this.B, this.u));
        d.uniform1f(f.g, b.opacity);
        d.bindTexture(3553, this.tb);
        d.drawArrays(5, 0, 4);
        il(this, "postcompose",
            c, a)
    };
    function il(a, b, c, d) {
        a = a.a;
        if (Oa(a, b)) {
            var e = d.viewState;
            a.b(new Lh(b, new al(c, e.center, e.resolution, e.rotation, d.size, d.extent, d.pixelRatio), d, null, c))
        }
    }

    gl.prototype.xf = function () {
        this.i = this.tb = null;
        this.j = void 0
    };
    function jl(a, b) {
        gl.call(this, a, b);
        this.o = this.l = this.c = null
    }

    v(jl, gl);
    function kl(a, b) {
        var c = b.a();
        return Nk(a.f.g, c)
    }

    jl.prototype.ya = function (a, b, c, d) {
        var e = this.a;
        return e.ga().ya(a, b.viewState.resolution, b.viewState.rotation, b.skippedFeatureUids, function (a) {
            return c.call(d, a, e)
        })
    };
    jl.prototype.yf = function (a, b) {
        var c = this.f.g, d = a.pixelRatio, e = a.viewState, f = e.center, g = e.resolution, h = e.rotation, l = this.c, m = this.tb, n = this.a.ga(), p = a.viewHints, q = a.extent;
        void 0 !== b.extent && (q = cc(q, b.extent));
        p[0] || p[1] || Yb(q) || (e = n.W(q, g, d, e.projection)) && aj(this, e) && (l = e, m = kl(this, e), this.tb && a.postRenderFunctions.push(function (a, b) {
            a.isContextLost() || a.deleteTexture(b)
        }.bind(null, c, this.tb)));
        l && (c = this.f.c.j, ll(this, c.width, c.height, d, f, g, h, l.D()), this.o = null, d = this.s, Sh(d), Yh(d, 1, -1), Zh(d, 0,
            -1), this.c = l, this.tb = m, cj(a.attributions, l.j), dj(a, n));
        return !0
    };
    function ll(a, b, c, d, e, f, g, h) {
        b *= f;
        c *= f;
        a = a.u;
        Sh(a);
        Yh(a, 2 * d / b, 2 * d / c);
        Xh(a, -g);
        Zh(a, h[0] - e[0], h[1] - e[1]);
        Yh(a, (h[2] - h[0]) / 2, (h[3] - h[1]) / 2);
        Zh(a, 1, 1)
    }

    jl.prototype.le = function (a, b) {
        return void 0 !== this.ya(a, b, gc, this)
    };
    jl.prototype.Bc = function (a, b, c, d) {
        if (this.c && this.c.a())if (this.a.ga() instanceof hk) {
            var e = Wh(b.pixelToCoordinateTransform, a.slice());
            if (this.ya(e, b, gc, this))return c.call(d, this.a, null)
        } else {
            e = [this.c.a().width, this.c.a().height];
            if (!this.o) {
                var f = b.size;
                b = Rh();
                Zh(b, -1, -1);
                Yh(b, 2 / f[0], 2 / f[1]);
                Zh(b, 0, f[1]);
                Yh(b, 1, -1);
                var f = ai(this.u.slice()), g = Rh();
                Zh(g, 0, e[1]);
                Yh(g, 1, -1);
                Yh(g, e[0] / 2, e[1] / 2);
                Zh(g, 1, 1);
                Uh(g, f);
                Uh(g, b);
                this.o = g
            }
            a = Wh(this.o, a.slice());
            if (!(0 > a[0] || a[0] > e[0] || 0 > a[1] || a[1] > e[1]) && (this.l ||
                (this.l = Ge(1, 1)), this.l.clearRect(0, 0, 1, 1), this.l.drawImage(this.c.a(), a[0], a[1], 1, 1, 0, 0, 1, 1), e = this.l.getImageData(0, 0, 1, 1).data, 0 < e[3]))return c.call(d, this.a, e)
        }
    };
    function ml() {
        this.b = "precision mediump float;varying vec2 a;uniform sampler2D e;void main(void){gl_FragColor=texture2D(e,a);}"
    }

    v(ml, uk);
    var nl = new ml;

    function pl() {
        this.b = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform vec4 d;void main(void){gl_Position=vec4(b*d.xy+d.zw,0.,1.);a=c;}"
    }

    v(pl, vk);
    var ql = new pl;

    function rl(a, b) {
        this.g = a.getUniformLocation(b, "e");
        this.f = a.getUniformLocation(b, "d");
        this.b = a.getAttribLocation(b, "b");
        this.a = a.getAttribLocation(b, "c")
    };
    function sl(a, b) {
        gl.call(this, a, b);
        this.S = nl;
        this.Z = ql;
        this.c = null;
        this.G = new Dk([0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0]);
        this.C = this.l = null;
        this.o = -1;
        this.P = [0, 0]
    }

    v(sl, gl);
    k = sl.prototype;
    k.la = function () {
        Hk(this.f.c, this.G);
        gl.prototype.la.call(this)
    };
    k.Ue = function (a, b, c) {
        var d = this.f;
        return function (e, f) {
            return Zi(a, b, e, f, function (a) {
                var b = d.a.b.hasOwnProperty(a.Xa());
                b && (c[e] || (c[e] = {}), c[e][a.xa.toString()] = a);
                return b
            })
        }
    };
    k.xf = function () {
        gl.prototype.xf.call(this);
        this.c = null
    };
    k.yf = function (a, b, c) {
        var d = this.f, e = c.b, f = a.viewState, g = f.projection, h = this.a, l = h.ga(), m = l.pb(g), n = m.wc(f.resolution), p = m.Ca(n), q = l.kf(n, a.pixelRatio, g), r = q[0] / Zd(m.Na(n), this.P)[0], u = p / r, x = l.gb(r) * l.df(g), y = f.center, A = a.extent, z = he(m, A, p);
        if (this.l && Vd(this.l, z) && this.o == l.g) u = this.C; else {
            var K = [z.da - z.ba + 1, z.ha - z.ea + 1], L = ka(Math.max(K[0] * q[0], K[1] * q[1])), K = u * L, R = m.Tc(n), Ka = R[0] + z.ba * q[0] * u, u = R[1] + z.ea * q[1] * u, u = [Ka, u, Ka + K, u + K];
            hl(this, a, L);
            e.viewport(0, 0, L, L);
            e.clearColor(0, 0, 0, 0);
            e.clear(16384);
            e.disable(3042);
            L = Lk(c, this.S, this.Z);
            c.ve(L);
            this.c || (this.c = new rl(e, L));
            Gk(c, 34962, this.G);
            e.enableVertexAttribArray(this.c.b);
            e.vertexAttribPointer(this.c.b, 2, 5126, !1, 16, 0);
            e.enableVertexAttribArray(this.c.a);
            e.vertexAttribPointer(this.c.a, 2, 5126, !1, 16, 8);
            e.uniform1i(this.c.g, 0);
            c = {};
            c[n] = {};
            var jb = this.Ue(l, g, c), F = h.c(), L = !0, Ka = Bb(), ta = new Td(0, 0, 0, 0), Ra, Tb, Ha;
            for (Tb = z.ba; Tb <= z.da; ++Tb)for (Ha = z.ea; Ha <= z.ha; ++Ha) {
                R = l.vc(n, Tb, Ha, r, g);
                if (void 0 !== b.extent && (Ra = m.Ia(R.xa, Ka), !dc(Ra, b.extent)))continue;
                Ra = R.U();
                (Ra = Ra == mg || 4 == Ra || 3 == Ra && !F) || (R = lg(R));
                Ra = R.U();
                if (Ra == mg) {
                    if (d.a.b.hasOwnProperty(R.Xa())) {
                        c[n][R.xa.toString()] = R;
                        continue
                    }
                } else if (4 == Ra || 3 == Ra && !F)continue;
                L = !1;
                Ra = fe(m, R.xa, jb, ta, Ka);
                Ra || (R = ge(m, R.xa, ta, Ka)) && jb(n + 1, R)
            }
            b = Object.keys(c).map(Number);
            b.sort(Xa);
            for (var jb = new Float32Array(4), Vb, F = 0, ta = b.length; F < ta; ++F)for (Vb in Tb = c[b[F]], Tb)R = Tb[Vb], Ra = m.Ia(R.xa, Ka), jb[0] = 2 * (Ra[2] - Ra[0]) / K, jb[1] = 2 * (Ra[3] - Ra[1]) / K, jb[2] = 2 * (Ra[0] - u[0]) / K - 1, jb[3] = 2 * (Ra[1] - u[1]) / K - 1, e.uniform4fv(this.c.f,
                jb), tl(d, R, q, x * r), e.drawArrays(5, 0, 4);
            L ? (this.l = z, this.C = u, this.o = l.g) : (this.C = this.l = null, this.o = -1, a.animate = !0)
        }
        ej(a.usedTiles, l, n, z);
        var Pc = d.j;
        fj(a, l, m, r, g, A, n, h.f(), function (a) {
            a.U() != mg || d.a.b.hasOwnProperty(a.Xa()) || a.Xa() in Pc.a || Pc.c([a, je(m, a.xa), m.Ca(a.xa[0]), q, x * r])
        }, this);
        bj(a, l);
        dj(a, l);
        e = this.s;
        Sh(e);
        Zh(e, (Math.round(y[0] / p) * p - u[0]) / (u[2] - u[0]), (Math.round(y[1] / p) * p - u[1]) / (u[3] - u[1]));
        0 !== f.rotation && Xh(e, f.rotation);
        Yh(e, a.size[0] * f.resolution / (u[2] - u[0]), a.size[1] * f.resolution / (u[3] -
            u[1]));
        Zh(e, -.5, -.5);
        return !0
    };
    k.Bc = function (a, b, c, d) {
        if (this.i) {
            a = Wh(this.s, [a[0] / b.size[0], (b.size[1] - a[1]) / b.size[1]].slice());
            a = [a[0] * this.j, a[1] * this.j];
            b = this.f.c.b;
            b.bindFramebuffer(b.FRAMEBUFFER, this.i);
            var e = new Uint8Array(4);
            b.readPixels(a[0], a[1], 1, 1, b.RGBA, b.UNSIGNED_BYTE, e);
            if (0 < e[3])return c.call(d, this.a, e)
        }
    };
    function ul(a, b) {
        gl.call(this, a, b);
        this.o = !1;
        this.P = -1;
        this.S = NaN;
        this.C = Bb();
        this.l = this.c = this.G = null
    }

    v(ul, gl);
    k = ul.prototype;
    k.lh = function (a, b, c) {
        this.l = b;
        var d = a.viewState, e = this.c;
        e && !e.g() && e.Za(c, d.center, d.resolution, d.rotation, a.size, a.pixelRatio, b.opacity, b.td ? a.skippedFeatureUids : {})
    };
    k.la = function () {
        var a = this.c;
        a && (Vk(a, this.f.c)(), this.c = null);
        gl.prototype.la.call(this)
    };
    k.ya = function (a, b, c, d) {
        if (this.c && this.l) {
            var e = b.viewState, f = this.a, g = {};
            return this.c.ya(a, this.f.c, e.center, e.resolution, e.rotation, b.size, b.pixelRatio, this.l.opacity, {}, function (a) {
                var b = ea(a).toString();
                if (!(b in g))return g[b] = !0, c.call(d, a, f)
            })
        }
    };
    k.le = function (a, b) {
        if (this.c && this.l) {
            var c = b.viewState;
            return $k(this.c, a, this.f.c, c.resolution, c.rotation, b.pixelRatio, this.l.opacity, b.skippedFeatureUids)
        }
        return !1
    };
    k.Bc = function (a, b, c, d) {
        a = Wh(b.pixelToCoordinateTransform, a.slice());
        if (this.le(a, b))return c.call(d, this.a, null)
    };
    k.mh = function () {
        $i(this)
    };
    k.yf = function (a, b, c) {
        function d(a) {
            var b, c = a.zc();
            c ? b = c.call(a, m) : (c = e.j) && (b = c(a, m));
            if (b) {
                if (b) {
                    c = !1;
                    if (Array.isArray(b))for (var d = 0, f = b.length; d < f; ++d)c = Jj(q, a, b[d], Ij(m, n), this.mh, this) || c; else c = Jj(q, a, b, Ij(m, n), this.mh, this) || c;
                    a = c
                } else a = !1;
                this.o = this.o || a
            }
        }

        var e = this.a;
        b = e.ga();
        cj(a.attributions, b.j);
        dj(a, b);
        var f = a.viewHints[0], g = a.viewHints[1], h = e.Z, l = e.fa;
        if (!this.o && !h && f || !l && g)return !0;
        var g = a.extent, h = a.viewState, f = h.projection, m = h.resolution, n = a.pixelRatio, h = e.g, p = e.i, l = e.get("renderOrder");
        void 0 === l && (l = Hj);
        g = Db(g, p * m);
        if (!this.o && this.S == m && this.P == h && this.G == l && Ib(this.C, g))return !0;
        this.c && a.postRenderFunctions.push(Vk(this.c, c));
        this.o = !1;
        var q = new Uk(.5 * m / n, g, e.i);
        b.sd(g, m, f);
        if (l) {
            var r = [];
            b.Kb(g, function (a) {
                r.push(a)
            }, this);
            r.sort(l);
            r.forEach(d, this)
        } else b.Kb(g, d, this);
        Wk(q, c);
        this.S = m;
        this.P = h;
        this.G = l;
        this.C = g;
        this.c = q;
        return !0
    };
    function vl() {
        this.f = 0;
        this.b = {};
        this.g = this.a = null
    }

    k = vl.prototype;
    k.clear = function () {
        this.f = 0;
        this.b = {};
        this.g = this.a = null
    };
    k.forEach = function (a, b) {
        for (var c = this.a; c;)a.call(b, c.Gc, c.ec, this), c = c.Ab
    };
    k.get = function (a) {
        a = this.b[a];
        ha(void 0 !== a, 15);
        if (a === this.g)return a.Gc;
        a === this.a ? (this.a = this.a.Ab, this.a.Uc = null) : (a.Ab.Uc = a.Uc, a.Uc.Ab = a.Ab);
        a.Ab = null;
        a.Uc = this.g;
        this.g = this.g.Ab = a;
        return a.Gc
    };
    k.pop = function () {
        var a = this.a;
        delete this.b[a.ec];
        a.Ab && (a.Ab.Uc = null);
        this.a = a.Ab;
        this.a || (this.g = null);
        --this.f;
        return a.Gc
    };
    k.replace = function (a, b) {
        this.get(a);
        this.b[a].Gc = b
    };
    k.set = function (a, b) {
        ha(!(a in this.b), 16);
        var c = {ec: a, Ab: null, Uc: this.g, Gc: b};
        this.g ? this.g.Ab = c : this.a = c;
        this.g = c;
        this.b[a] = c;
        ++this.f
    };
    function wl(a, b) {
        bi.call(this, 0, b);
        this.b = document.createElement("CANVAS");
        this.b.style.width = "100%";
        this.b.style.height = "100%";
        this.b.className = "ol-unselectable";
        a.insertBefore(this.b, a.childNodes[0] || null);
        this.u = this.C = 0;
        this.B = Ge();
        this.o = !0;
        this.g = cf(this.b, {
            antialias: !0,
            depth: !1,
            failIfMajorPerformanceCaveat: !0,
            preserveDrawingBuffer: !1,
            stencil: !0
        });
        this.c = new Fk(this.b, this.g);
        w(this.b, "webglcontextlost", this.Dm, this);
        w(this.b, "webglcontextrestored", this.Em, this);
        this.a = new vl;
        this.T = null;
        this.j =
            new ng(function (a) {
                var b = a[1];
                a = a[2];
                var e = b[0] - this.T[0], b = b[1] - this.T[1];
                return 65536 * Math.log(a) + Math.sqrt(e * e + b * b) / a
            }.bind(this), function (a) {
                return a[0].Xa()
            });
        this.G = function () {
            if (0 !== this.j.b.length) {
                rg(this.j);
                var a = og(this.j);
                tl(this, a[0], a[3], a[4])
            }
            return !1
        }.bind(this);
        this.i = 0;
        xl(this)
    }

    v(wl, bi);
    function tl(a, b, c, d) {
        var e = a.g, f = b.Xa();
        if (a.a.b.hasOwnProperty(f)) a = a.a.get(f), e.bindTexture(3553, a.tb), 9729 != a.Og && (e.texParameteri(3553, 10240, 9729), a.Og = 9729), 9729 != a.Qg && (e.texParameteri(3553, 10241, 9729), a.Qg = 9729); else {
            var g = e.createTexture();
            e.bindTexture(3553, g);
            if (0 < d) {
                var h = a.B.canvas, l = a.B;
                a.C !== c[0] || a.u !== c[1] ? (h.width = c[0], h.height = c[1], a.C = c[0], a.u = c[1]) : l.clearRect(0, 0, c[0], c[1]);
                l.drawImage(b.qb(), d, d, c[0], c[1], 0, 0, c[0], c[1]);
                e.texImage2D(3553, 0, 6408, 6408, 5121, h)
            } else e.texImage2D(3553,
                0, 6408, 6408, 5121, b.qb());
            e.texParameteri(3553, 10240, 9729);
            e.texParameteri(3553, 10241, 9729);
            e.texParameteri(3553, 10242, 33071);
            e.texParameteri(3553, 10243, 33071);
            a.a.set(f, {tb: g, Og: 9729, Qg: 9729})
        }
    }

    k = wl.prototype;
    k.ng = function (a) {
        return a instanceof gi ? new jl(this, a) : a instanceof D ? new sl(this, a) : a instanceof E ? new ul(this, a) : null
    };
    function yl(a, b, c) {
        var d = a.l;
        if (Oa(d, b)) {
            a = a.c;
            var e = c.viewState;
            d.b(new Lh(b, new al(a, e.center, e.resolution, e.rotation, c.size, c.extent, c.pixelRatio), c, null, a))
        }
    }

    k.la = function () {
        var a = this.g;
        a.isContextLost() || this.a.forEach(function (b) {
            b && a.deleteTexture(b.tb)
        });
        Ja(this.c);
        bi.prototype.la.call(this)
    };
    k.uj = function (a, b) {
        for (var c = this.g, d; 1024 < this.a.f - this.i;) {
            if (d = this.a.a.Gc) c.deleteTexture(d.tb); else if (+this.a.a.ec == b.index)break; else--this.i;
            this.a.pop()
        }
    };
    k.X = function () {
        return "webgl"
    };
    k.Dm = function (a) {
        a.preventDefault();
        this.a.clear();
        this.i = 0;
        a = this.f;
        for (var b in a)a[b].xf()
    };
    k.Em = function () {
        xl(this);
        this.l.render()
    };
    function xl(a) {
        a = a.g;
        a.activeTexture(33984);
        a.blendFuncSeparate(770, 771, 1, 771);
        a.disable(2884);
        a.disable(2929);
        a.disable(3089);
        a.disable(2960)
    }

    k.Pf = function (a) {
        var b = this.c, c = this.g;
        if (c.isContextLost())return !1;
        if (!a)return this.o && (this.b.style.display = "none", this.o = !1), !1;
        this.T = a.focus;
        this.a.set((-a.index).toString(), null);
        ++this.i;
        yl(this, "precompose", a);
        var d = [], e = a.layerStatesArray;
        eb(e);
        var f = a.viewState.resolution, g, h, l, m;
        g = 0;
        for (h = e.length; g < h; ++g)m = e[g], Nh(m, f) && "ready" == m.mi && (l = ei(this, m.layer), l.yf(a, m, b) && d.push(m));
        e = a.size[0] * a.pixelRatio;
        f = a.size[1] * a.pixelRatio;
        if (this.b.width != e || this.b.height != f) this.b.width = e, this.b.height =
            f;
        c.bindFramebuffer(36160, null);
        c.clearColor(0, 0, 0, 0);
        c.clear(16384);
        c.enable(3042);
        c.viewport(0, 0, this.b.width, this.b.height);
        g = 0;
        for (h = d.length; g < h; ++g)m = d[g], l = ei(this, m.layer), l.lh(a, m, b);
        this.o || (this.b.style.display = "", this.o = !0);
        ci(a);
        1024 < this.a.f - this.i && a.postRenderFunctions.push(this.uj.bind(this));
        0 !== this.j.b.length && (a.postRenderFunctions.push(this.G), a.animate = !0);
        yl(this, "postcompose", a);
        fi(this, a);
        a.postRenderFunctions.push(di)
    };
    k.ya = function (a, b, c, d, e, f) {
        var g;
        if (this.g.isContextLost())return !1;
        var h = b.viewState, l = b.layerStatesArray, m;
        for (m = l.length - 1; 0 <= m; --m) {
            g = l[m];
            var n = g.layer;
            if (Nh(g, h.resolution) && e.call(f, n) && (g = ei(this, n).ya(a, b, c, d)))return g
        }
    };
    k.kh = function (a, b, c, d) {
        var e = !1;
        if (this.g.isContextLost())return !1;
        var f = b.viewState, g = b.layerStatesArray, h;
        for (h = g.length - 1; 0 <= h; --h) {
            var l = g[h], m = l.layer;
            if (Nh(l, f.resolution) && c.call(d, m) && (e = ei(this, m).le(a, b)))return !0
        }
        return e
    };
    k.jh = function (a, b, c, d, e) {
        if (this.g.isContextLost())return !1;
        var f = b.viewState, g, h = b.layerStatesArray, l;
        for (l = h.length - 1; 0 <= l; --l) {
            g = h[l];
            var m = g.layer;
            if (Nh(g, f.resolution) && e.call(d, m) && (g = ei(this, m).Bc(a, b, c, d)))return g
        }
    };
    var zl = ["canvas", "webgl"];

    function H(a) {
        Ta.call(this);
        var b = Al(a);
        this.Jb = void 0 !== a.loadTilesWhileAnimating ? a.loadTilesWhileAnimating : !1;
        this.ac = void 0 !== a.loadTilesWhileInteracting ? a.loadTilesWhileInteracting : !1;
        this.Me = void 0 !== a.pixelRatio ? a.pixelRatio : kf;
        this.Le = b.logos;
        this.Z = function () {
            this.i = void 0;
            this.Jo.call(this, Date.now())
        }.bind(this);
        this.La = Rh();
        this.Je = Rh();
        this.ub = 0;
        this.f = null;
        this.Aa = Bb();
        this.G = this.P = null;
        this.a = document.createElement("DIV");
        this.a.className = "ol-viewport" + (pf ? " ol-touch" : "");
        this.a.style.position =
            "relative";
        this.a.style.overflow = "hidden";
        this.a.style.width = "100%";
        this.a.style.height = "100%";
        this.a.style.msTouchAction = "none";
        this.a.style.touchAction = "none";
        this.C = document.createElement("DIV");
        this.C.className = "ol-overlaycontainer";
        this.a.appendChild(this.C);
        this.u = document.createElement("DIV");
        this.u.className = "ol-overlaycontainer-stopevent";
        a = ["click", "dblclick", "mousedown", "touchstart", "mspointerdown", fg, "mousewheel", "wheel"];
        for (var c = 0, d = a.length; c < d; ++c)w(this.u, a[c], Ma);
        this.a.appendChild(this.u);
        this.ra = new Yf(this);
        for (var e in ig)w(this.ra, ig[e], this.Jg, this);
        this.fa = b.keyboardEventTarget;
        this.s = null;
        w(this.a, "wheel", this.Nc, this);
        w(this.a, "mousewheel", this.Nc, this);
        this.l = b.controls;
        this.j = b.interactions;
        this.o = b.overlays;
        this.Af = {};
        this.B = new b.Lo(this.a, this);
        this.W = null;
        this.S = [];
        this.Ka = [];
        this.oa = new sg(this.pk.bind(this), this.Uk.bind(this));
        this.Ce = {};
        w(this, Va(Bl), this.Ck, this);
        w(this, Va(Cl), this.Vk, this);
        w(this, Va(Dl), this.Rk, this);
        w(this, Va(El), this.Tk, this);
        this.H(b.values);
        this.l.forEach(function (a) {
            a.setMap(this)
        }, this);
        w(this.l, te, function (a) {
            a.element.setMap(this)
        }, this);
        w(this.l, ue, function (a) {
            a.element.setMap(null)
        }, this);
        this.j.forEach(function (a) {
            a.setMap(this)
        }, this);
        w(this.j, te, function (a) {
            a.element.setMap(this)
        }, this);
        w(this.j, ue, function (a) {
            a.element.setMap(null)
        }, this);
        this.o.forEach(this.ig, this);
        w(this.o, te, function (a) {
            this.ig(a.element)
        }, this);
        w(this.o, ue, function (a) {
            var b = a.element.j;
            void 0 !== b && delete this.Af[b.toString()];
            a.element.setMap(null)
        }, this)
    }

    v(H, Ta);
    k = H.prototype;
    k.ij = function (a) {
        this.l.push(a)
    };
    k.jj = function (a) {
        this.j.push(a)
    };
    k.gg = function (a) {
        this.tc().Qc().push(a)
    };
    k.hg = function (a) {
        this.o.push(a)
    };
    k.ig = function (a) {
        var b = a.j;
        void 0 !== b && (this.Af[b.toString()] = a);
        a.setMap(this)
    };
    k.$a = function (a) {
        this.render();
        Array.prototype.push.apply(this.S, arguments)
    };
    k.la = function () {
        Ja(this.ra);
        Ja(this.B);
        Fa(this.a, "wheel", this.Nc, this);
        Fa(this.a, "mousewheel", this.Nc, this);
        void 0 !== this.c && (window.removeEventListener("resize", this.c, !1), this.c = void 0);
        this.i && (cancelAnimationFrame(this.i), this.i = void 0);
        this.Xg(null);
        Ta.prototype.la.call(this)
    };
    k.Td = function (a, b, c, d, e) {
        if (this.f)return a = this.Ja(a), this.B.ya(a, this.f, b, void 0 !== c ? c : null, void 0 !== d ? d : gc, void 0 !== e ? e : null)
    };
    k.Gl = function (a, b, c, d, e) {
        if (this.f)return this.B.jh(a, this.f, b, void 0 !== c ? c : null, void 0 !== d ? d : gc, void 0 !== e ? e : null)
    };
    k.Xk = function (a, b, c) {
        if (!this.f)return !1;
        a = this.Ja(a);
        return this.B.kh(a, this.f, void 0 !== b ? b : gc, void 0 !== c ? c : null)
    };
    k.Kj = function (a) {
        return this.Ja(this.Vd(a))
    };
    k.Vd = function (a) {
        var b = this.a.getBoundingClientRect();
        a = a.changedTouches ? a.changedTouches[0] : a;
        return [a.clientX - b.left, a.clientY - b.top]
    };
    k.jf = function () {
        return this.get(El)
    };
    k.uc = function () {
        var a = this.jf();
        return void 0 !== a ? "string" === typeof a ? document.getElementById(a) : a : null
    };
    k.Ja = function (a) {
        var b = this.f;
        return b ? Wh(b.pixelToCoordinateTransform, a.slice()) : null
    };
    k.Ij = function () {
        return this.l
    };
    k.bk = function () {
        return this.o
    };
    k.ak = function (a) {
        a = this.Af[a.toString()];
        return void 0 !== a ? a : null
    };
    k.Pj = function () {
        return this.j
    };
    k.tc = function () {
        return this.get(Bl)
    };
    k.Wg = function () {
        return this.tc().Qc()
    };
    k.Da = function (a) {
        var b = this.f;
        return b ? Wh(b.coordinateToPixelTransform, a.slice(0, 2)) : null
    };
    k.kb = function () {
        return this.get(Dl)
    };
    k.$ = function () {
        return this.get(Cl)
    };
    k.rk = function () {
        return this.a
    };
    k.pk = function (a, b, c, d) {
        var e = this.f;
        if (!(e && b in e.wantedTiles && e.wantedTiles[b][a.Xa()]))return Infinity;
        a = c[0] - e.focus[0];
        c = c[1] - e.focus[1];
        return 65536 * Math.log(d) + Math.sqrt(a * a + c * c) / d
    };
    k.Nc = function (a, b) {
        var c = new Wf(b || a.type, this, a);
        this.Jg(c)
    };
    k.Jg = function (a) {
        if (this.f) {
            this.W = a.coordinate;
            a.frameState = this.f;
            var b = this.j.a, c;
            if (!1 !== this.b(a))for (c = b.length - 1; 0 <= c; c--) {
                var d = b[c];
                if (d.f() && !d.handleEvent(a))break
            }
        }
    };
    k.Pk = function () {
        var a = this.f, b = this.oa;
        if (0 !== b.b.length) {
            var c = 16, d = c;
            if (a) {
                var e = a.viewHints;
                e[0] && (c = this.Jb ? 8 : 0, d = 2);
                e[1] && (c = this.ac ? 8 : 0, d = 2)
            }
            b.j < c && (rg(b), tg(b, c, d))
        }
        b = this.Ka;
        c = 0;
        for (d = b.length; c < d; ++c)b[c](this, a);
        b.length = 0
    };
    k.Rk = function () {
        this.render()
    };
    k.Tk = function () {
        var a;
        this.jf() && (a = this.uc());
        if (this.s) {
            for (var b = 0, c = this.s.length; b < c; ++b)za(this.s[b]);
            this.s = null
        }
        a ? (a.appendChild(this.a), a = this.fa ? this.fa : a, this.s = [w(a, "keydown", this.Nc, this), w(a, "keypress", this.Nc, this)], this.c || (this.c = this.Yc.bind(this), window.addEventListener("resize", this.c, !1))) : (Ie(this.a), void 0 !== this.c && (window.removeEventListener("resize", this.c, !1), this.c = void 0));
        this.Yc()
    };
    k.Uk = function () {
        this.render()
    };
    k.Wk = function () {
        this.render()
    };
    k.Vk = function () {
        this.P && (za(this.P), this.P = null);
        var a = this.$();
        a && (this.P = w(a, "propertychange", this.Wk, this));
        this.render()
    };
    k.Ck = function () {
        this.G && (this.G.forEach(za), this.G = null);
        var a = this.tc();
        a && (this.G = [w(a, "propertychange", this.render, this), w(a, "change", this.render, this)]);
        this.render()
    };
    k.Ko = function () {
        this.i && cancelAnimationFrame(this.i);
        this.Z()
    };
    k.render = function () {
        void 0 === this.i && (this.i = requestAnimationFrame(this.Z))
    };
    k.Do = function (a) {
        return this.l.remove(a)
    };
    k.Eo = function (a) {
        return this.j.remove(a)
    };
    k.Go = function (a) {
        return this.tc().Qc().remove(a)
    };
    k.Ho = function (a) {
        return this.o.remove(a)
    };
    k.Jo = function (a) {
        var b, c, d, e = this.kb(), f = this.$(), g = Bb(), h = null;
        if (void 0 !== e && 0 < e[0] && 0 < e[1] && f && Jd(f)) {
            var h = Fd(f, this.f ? this.f.viewHints : void 0), l = this.tc().ff(), m = {};
            b = 0;
            for (c = l.length; b < c; ++b)m[ea(l[b].layer)] = l[b];
            d = f.U();
            h = {
                animate: !1,
                attributions: {},
                coordinateToPixelTransform: this.La,
                extent: g,
                focus: this.W ? this.W : d.center,
                index: this.ub++,
                layerStates: m,
                layerStatesArray: l,
                logos: ua({}, this.Le),
                pixelRatio: this.Me,
                pixelToCoordinateTransform: this.Je,
                postRenderFunctions: [],
                size: e,
                skippedFeatureUids: this.Ce,
                tileQueue: this.oa,
                time: a,
                usedTiles: {},
                viewState: d,
                viewHints: h,
                wantedTiles: {}
            }
        }
        if (h) {
            a = this.S;
            b = e = 0;
            for (c = a.length; b < c; ++b)f = a[b], f(this, h) && (a[e++] = f);
            a.length = e;
            h.extent = bc(d.center, d.resolution, d.rotation, h.size, g)
        }
        this.f = h;
        this.B.Pf(h);
        h && (h.animate && this.render(), Array.prototype.push.apply(this.Ka, h.postRenderFunctions), 0 !== this.S.length || h.viewHints[0] || h.viewHints[1] || Ob(h.extent, this.Aa) || (this.b(new Je("moveend", this, h)), Eb(h.extent, this.Aa)));
        this.b(new Je("postrender", this, h));
        setTimeout(this.Pk.bind(this),
            0)
    };
    k.ai = function (a) {
        this.set(Bl, a)
    };
    k.Tf = function (a) {
        this.set(Dl, a)
    };
    k.Xg = function (a) {
        this.set(El, a)
    };
    k.Wo = function (a) {
        this.set(Cl, a)
    };
    k.ki = function (a) {
        a = ea(a).toString();
        this.Ce[a] = !0;
        this.render()
    };
    k.Yc = function () {
        var a = this.uc();
        if (a) {
            var b = getComputedStyle(a);
            this.Tf([a.offsetWidth - parseFloat(b.borderLeftWidth) - parseFloat(b.paddingLeft) - parseFloat(b.paddingRight) - parseFloat(b.borderRightWidth), a.offsetHeight - parseFloat(b.borderTopWidth) - parseFloat(b.paddingTop) - parseFloat(b.paddingBottom) - parseFloat(b.borderBottomWidth)])
        } else this.Tf(void 0)
    };
    k.oi = function (a) {
        a = ea(a).toString();
        delete this.Ce[a];
        this.render()
    };
    function Al(a) {
        var b = null;
        void 0 !== a.keyboardEventTarget && (b = "string" === typeof a.keyboardEventTarget ? document.getElementById(a.keyboardEventTarget) : a.keyboardEventTarget);
        var c = {}, d = {};
        if (void 0 === a.logo || "boolean" === typeof a.logo && a.logo) d["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHGAAABxgEXwfpGAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhNQTFRF////AP//AICAgP//AFVVQECA////K1VVSbbbYL/fJ05idsTYJFtbbcjbJllmZszWWMTOIFhoHlNiZszTa9DdUcHNHlNlV8XRIVdiasrUHlZjIVZjaMnVH1RlIFRkH1RkH1ZlasvYasvXVsPQH1VkacnVa8vWIVZjIFRjVMPQa8rXIVVkXsXRsNveIFVkIFZlIVVj3eDeh6GmbMvXH1ZkIFRka8rWbMvXIFVkIFVjIFVkbMvWH1VjbMvWIFVlbcvWIFVla8vVIFVkbMvWbMvVH1VkbMvWIFVlbcvWIFVkbcvVbMvWjNPbIFVkU8LPwMzNIFVkbczWIFVkbsvWbMvXIFVkRnB8bcvW2+TkW8XRIFVkIlZlJVloJlpoKlxrLl9tMmJwOWd0Omh1RXF8TneCT3iDUHiDU8LPVMLPVcLPVcPQVsPPVsPQV8PQWMTQWsTQW8TQXMXSXsXRX4SNX8bSYMfTYcfTYsfTY8jUZcfSZsnUaIqTacrVasrVa8jTa8rWbI2VbMvWbcvWdJObdcvUdszUd8vVeJaee87Yfc3WgJyjhqGnitDYjaarldPZnrK2oNbborW5o9bbo9fbpLa6q9ndrL3ArtndscDDutzfu8fJwN7gwt7gxc/QyuHhy+HizeHi0NfX0+Pj19zb1+Tj2uXk29/e3uLg3+Lh3+bl4uXj4ufl4+fl5Ofl5ufl5ujm5+jmySDnBAAAAFp0Uk5TAAECAgMEBAYHCA0NDg4UGRogIiMmKSssLzU7PkJJT1JTVFliY2hrdHZ3foSFhYeJjY2QkpugqbG1tre5w8zQ09XY3uXn6+zx8vT09vf4+Pj5+fr6/P39/f3+gz7SsAAAAVVJREFUOMtjYKA7EBDnwCPLrObS1BRiLoJLnte6CQy8FLHLCzs2QUG4FjZ5GbcmBDDjxJBXDWxCBrb8aM4zbkIDzpLYnAcE9VXlJSWlZRU13koIeW57mGx5XjoMZEUqwxWYQaQbSzLSkYGfKFSe0QMsX5WbjgY0YS4MBplemI4BdGBW+DQ11eZiymfqQuXZIjqwyadPNoSZ4L+0FVM6e+oGI6g8a9iKNT3o8kVzNkzRg5lgl7p4wyRUL9Yt2jAxVh6mQCogae6GmflI8p0r13VFWTHBQ0rWPW7ahgWVcPm+9cuLoyy4kCJDzCm6d8PSFoh0zvQNC5OjDJhQopPPJqph1doJBUD5tnkbZiUEqaCnB3bTqLTFG1bPn71kw4b+GFdpLElKIzRxxgYgWNYc5SCENVHKeUaltHdXx0dZ8uBI1hJ2UUDgq82CM2MwKeibqAvSO7MCABq0wXEPiqWEAAAAAElFTkSuQmCC"] = "https://openlayers.org/";
        else {
            var e = a.logo;
            "string" === typeof e ? d[e] = "" : e instanceof HTMLElement ? d[ea(e).toString()] = e : e && (ha("string" == typeof e.href, 44), ha("string" == typeof e.src, 45), d[e.src] = e.href)
        }
        e = a.layers instanceof Ah ? a.layers : new Ah({layers: a.layers});
        c[Bl] = e;
        c[El] = a.target;
        c[Cl] = void 0 !== a.view ? a.view : new Ad;
        var e = bi, f;
        void 0 !== a.renderer ? (Array.isArray(a.renderer) ? f = a.renderer : "string" === typeof a.renderer ? f = [a.renderer] : ha(!1, 46), 0 <= f.indexOf("dom") && (f = f.concat(zl))) : f = zl;
        var g, h;
        g = 0;
        for (h = f.length; g < h; ++g) {
            var l =
                f[g];
            if ("canvas" == l) {
                if (mf) {
                    e = rk;
                    break
                }
            } else if ("webgl" == l && df) {
                e = wl;
                break
            }
        }
        void 0 !== a.controls ? Array.isArray(a.controls) ? f = new pe(a.controls.slice()) : (ha(a.controls instanceof pe, 47), f = a.controls) : f = We();
        void 0 !== a.interactions ? Array.isArray(a.interactions) ? g = new pe(a.interactions.slice()) : (ha(a.interactions instanceof pe, 48), g = a.interactions) : g = xh();
        void 0 !== a.overlays ? Array.isArray(a.overlays) ? a = new pe(a.overlays.slice()) : (ha(a.overlays instanceof pe, 49), a = a.overlays) : a = new pe;
        return {
            controls: f,
            interactions: g, keyboardEventTarget: b, logos: d, overlays: a, Lo: e, values: c
        }
    }

    var Bl = "layergroup", Dl = "size", El = "target", Cl = "view";
    Kh();
    function Fl(a) {
        Ta.call(this);
        this.j = a.id;
        this.o = void 0 !== a.insertFirst ? a.insertFirst : !0;
        this.s = void 0 !== a.stopEvent ? a.stopEvent : !0;
        this.f = document.createElement("DIV");
        this.f.className = "ol-overlay-container";
        this.f.style.position = "absolute";
        this.autoPan = void 0 !== a.autoPan ? a.autoPan : !1;
        this.i = void 0 !== a.autoPanAnimation ? a.autoPanAnimation : {};
        this.l = void 0 !== a.autoPanMargin ? a.autoPanMargin : 20;
        this.a = {Pd: "", fe: "", Be: "", De: "", visible: !0};
        this.c = null;
        w(this, Va(Gl), this.xk, this);
        w(this, Va(Hl), this.Hk, this);
        w(this, Va(Il), this.Lk, this);
        w(this, Va(Jl), this.Nk, this);
        w(this, Va(Kl), this.Ok, this);
        void 0 !== a.element && this.Vh(a.element);
        this.ci(void 0 !== a.offset ? a.offset : [0, 0]);
        this.fi(void 0 !== a.positioning ? a.positioning : Ll);
        void 0 !== a.position && this.tf(a.position)
    }

    v(Fl, Ta);
    k = Fl.prototype;
    k.Ud = function () {
        return this.get(Gl)
    };
    k.Hl = function () {
        return this.j
    };
    k.he = function () {
        return this.get(Hl)
    };
    k.Eg = function () {
        return this.get(Il)
    };
    k.Yg = function () {
        return this.get(Jl)
    };
    k.Fg = function () {
        return this.get(Kl)
    };
    k.xk = function () {
        for (var a = this.f; a.lastChild;)a.removeChild(a.lastChild);
        (a = this.Ud()) && this.f.appendChild(a)
    };
    k.Hk = function () {
        this.c && (Ie(this.f), za(this.c), this.c = null);
        var a = this.he();
        a && (this.c = w(a, "postrender", this.render, this), Ml(this), a = this.s ? a.u : a.C, this.o ? a.insertBefore(this.f, a.childNodes[0] || null) : a.appendChild(this.f))
    };
    k.render = function () {
        Ml(this)
    };
    k.Lk = function () {
        Ml(this)
    };
    k.Nk = function () {
        Ml(this);
        if (void 0 !== this.get(Jl) && this.autoPan) {
            var a = this.he();
            if (void 0 !== a && a.uc()) {
                var b = Nl(a.uc(), a.kb()), c = this.Ud(), d = c.offsetWidth, e = c.currentStyle || getComputedStyle(c), d = d + (parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)), e = c.offsetHeight, f = c.currentStyle || getComputedStyle(c), e = e + (parseInt(f.marginTop, 10) + parseInt(f.marginBottom, 10)), g = Nl(c, [d, e]), c = this.l;
                Ib(b, g) || (d = g[0] - b[0], e = b[2] - g[2], f = g[1] - b[1], g = b[3] - g[3], b = [0, 0], 0 > d ? b[0] = d - c : 0 > e && (b[0] = Math.abs(e) + c), 0 > f ? b[1] =
                    f - c : 0 > g && (b[1] = Math.abs(g) + c), 0 === b[0] && 0 === b[1]) || (c = a.$().ab(), d = a.Da(c), b = [d[0] + b[0], d[1] + b[1]], this.i && (this.i.source = c, a.$a(Qd(this.i))), a.$().rb(a.Ja(b)))
            }
        }
    };
    k.Ok = function () {
        Ml(this)
    };
    k.Vh = function (a) {
        this.set(Gl, a)
    };
    k.setMap = function (a) {
        this.set(Hl, a)
    };
    k.ci = function (a) {
        this.set(Il, a)
    };
    k.tf = function (a) {
        this.set(Jl, a)
    };
    function Nl(a, b) {
        var c = a.getBoundingClientRect(), d = c.left + window.pageXOffset, c = c.top + window.pageYOffset;
        return [d, c, d + b[0], c + b[1]]
    }

    k.fi = function (a) {
        this.set(Kl, a)
    };
    function Ol(a, b) {
        a.a.visible !== b && (a.f.style.display = b ? "" : "none", a.a.visible = b)
    }

    function Ml(a) {
        var b = a.he(), c = a.Yg();
        if (void 0 !== b && b.f && void 0 !== c) {
            var c = b.Da(c), d = b.kb(), b = a.f.style, e = a.Eg(), f = a.Fg(), g = e[0], e = e[1];
            if (f == Pl || f == Ql || f == Rl) "" !== a.a.fe && (a.a.fe = b.left = ""), g = Math.round(d[0] - c[0] - g) + "px", a.a.Be != g && (a.a.Be = b.right = g); else {
                "" !== a.a.Be && (a.a.Be = b.right = "");
                if (f == Sl || f == Tl || f == Ul) g -= a.f.offsetWidth / 2;
                g = Math.round(c[0] + g) + "px";
                a.a.fe != g && (a.a.fe = b.left = g)
            }
            if (f == Vl || f == Sl || f == Pl) "" !== a.a.De && (a.a.De = b.top = ""), c = Math.round(d[1] - c[1] - e) + "px", a.a.Pd != c && (a.a.Pd = b.bottom =
                c); else {
                "" !== a.a.Pd && (a.a.Pd = b.bottom = "");
                if (f == Wl || f == Tl || f == Ql) e -= a.f.offsetHeight / 2;
                c = Math.round(c[1] + e) + "px";
                a.a.De != c && (a.a.De = b.top = c)
            }
            Ol(a, !0)
        } else Ol(a, !1)
    }

    var Vl = "bottom-left", Sl = "bottom-center", Pl = "bottom-right", Wl = "center-left", Tl = "center-center", Ql = "center-right", Ll = "top-left", Ul = "top-center", Rl = "top-right", Gl = "element", Hl = "map", Il = "offset", Jl = "position", Kl = "positioning";

    function Xl(a) {
        a = a ? a : {};
        this.j = void 0 !== a.collapsed ? a.collapsed : !0;
        this.l = void 0 !== a.collapsible ? a.collapsible : !0;
        this.l || (this.j = !1);
        var b = void 0 !== a.className ? a.className : "ol-overviewmap", c = void 0 !== a.tipLabel ? a.tipLabel : "Overview map", d = void 0 !== a.collapseLabel ? a.collapseLabel : "\u00ab";
        "string" === typeof d ? (this.o = document.createElement("span"), this.o.textContent = d) : this.o = d;
        d = void 0 !== a.label ? a.label : "\u00bb";
        "string" === typeof d ? (this.u = document.createElement("span"), this.u.textContent = d) : this.u =
            d;
        var e = this.l && !this.j ? this.o : this.u, d = document.createElement("button");
        d.setAttribute("type", "button");
        d.title = c;
        d.appendChild(e);
        w(d, "click", this.Vl, this);
        c = document.createElement("DIV");
        c.className = "ol-overviewmap-map";
        var f = this.f = new H({controls: new pe, interactions: new pe, target: c, view: a.view});
        a.layers && a.layers.forEach(function (a) {
            f.gg(a)
        }, this);
        e = document.createElement("DIV");
        e.className = "ol-overviewmap-box";
        e.style.boxSizing = "border-box";
        this.C = new Fl({position: [0, 0], positioning: Vl, element: e});
        this.f.hg(this.C);
        e = document.createElement("div");
        e.className = b + " ol-unselectable ol-control" + (this.j && this.l ? " ol-collapsed" : "") + (this.l ? "" : " ol-uncollapsible");
        e.appendChild(c);
        e.appendChild(d);
        Ke.call(this, {element: e, render: a.render ? a.render : Yl, target: a.target})
    }

    v(Xl, Ke);
    k = Xl.prototype;
    k.setMap = function (a) {
        var b = this.a;
        a !== b && (b && (b = b.$()) && Fa(b, Va(Dd), this.ce, this), Ke.prototype.setMap.call(this, a), a && (this.s.push(w(a, "propertychange", this.Ik, this)), 0 === this.f.Wg().yc() && this.f.ai(a.tc()), a = a.$())) && (w(a, Va(Dd), this.ce, this), Jd(a) && (this.f.Yc(), Zl(this)))
    };
    k.Ik = function (a) {
        a.key === Cl && ((a = a.oldValue) && Fa(a, Va(Dd), this.ce, this), a = this.a.$(), w(a, Va(Dd), this.ce, this))
    };
    k.ce = function () {
        this.f.$().ie(this.a.$().Qa())
    };
    function Yl() {
        var a = this.a, b = this.f;
        if (a.f && b.f) {
            var c = a.kb(), a = a.$().Jc(c), d = b.kb(), c = b.$().Jc(d), e = b.Da(Wb(a)), f = b.Da(Sb(a)), b = Math.abs(e[0] - f[0]), e = Math.abs(e[1] - f[1]), f = d[0], d = d[1];
            b < .1 * f || e < .1 * d || b > .75 * f || e > .75 * d ? Zl(this) : Ib(c, a) || (a = this.f, c = this.a.$(), a.$().rb(c.ab()))
        }
        $l(this)
    }

    function Zl(a) {
        var b = a.a;
        a = a.f;
        var c = b.kb(), b = b.$().Jc(c), c = a.kb();
        a = a.$();
        ec(b, 1 / (.1 * Math.pow(2, Math.log(7.5) / Math.LN2 / 2)));
        a.$e(b, c)
    }

    function $l(a) {
        var b = a.a, c = a.f;
        if (b.f && c.f) {
            var d = b.kb(), e = b.$(), f = c.$(), c = e.Qa(), b = a.C, g = a.C.Ud(), h = e.Jc(d), d = f.Ma(), e = Rb(h), f = Ub(h), l;
            if (a = a.a.$().ab()) l = [e[0] - a[0], e[1] - a[1]], wb(l, c), rb(l, a);
            b.tf(l);
            g && (g.style.width = Math.abs((e[0] - f[0]) / d) + "px", g.style.height = Math.abs((f[1] - e[1]) / d) + "px")
        }
    }

    k.Vl = function (a) {
        a.preventDefault();
        am(this)
    };
    function am(a) {
        a.element.classList.toggle("ol-collapsed");
        a.j ? He(a.o, a.u) : He(a.u, a.o);
        a.j = !a.j;
        var b = a.f;
        a.j || b.f || (b.Yc(), Zl(a), Ea(b, "postrender", function () {
            $l(this)
        }, a))
    }

    k.Ul = function () {
        return this.l
    };
    k.Xl = function (a) {
        this.l !== a && (this.l = a, this.element.classList.toggle("ol-uncollapsible"), !a && this.j && am(this))
    };
    k.Wl = function (a) {
        this.l && this.j !== a && am(this)
    };
    k.Tl = function () {
        return this.j
    };
    k.ck = function () {
        return this.f
    };
    function bm(a) {
        a = a ? a : {};
        var b = void 0 !== a.className ? a.className : "ol-scale-line";
        this.l = document.createElement("DIV");
        this.l.className = b + "-inner";
        this.f = document.createElement("DIV");
        this.f.className = b + " ol-unselectable";
        this.f.appendChild(this.l);
        this.u = null;
        this.o = void 0 !== a.minWidth ? a.minWidth : 64;
        this.j = !1;
        this.B = void 0;
        this.C = "";
        Ke.call(this, {element: this.f, render: a.render ? a.render : cm, target: a.target});
        w(this, Va(dm), this.S, this);
        this.G(a.units || em)
    }

    v(bm, Ke);
    var fm = [1, 2, 5];
    bm.prototype.yb = function () {
        return this.get(dm)
    };
    function cm(a) {
        (a = a.frameState) ? this.u = a.viewState : this.u = null;
        gm(this)
    }

    bm.prototype.S = function () {
        gm(this)
    };
    bm.prototype.G = function (a) {
        this.set(dm, a)
    };
    function gm(a) {
        var b = a.u;
        if (b) {
            var c = b.projection, d = c.dc(), b = c.getPointResolution(b.resolution, b.center) * d, d = a.o * b, c = "", e = a.yb();
            e == hm ? (c = kc.degrees, b /= c, d < c / 60 ? (c = "\u2033", b *= 3600) : d < c ? (c = "\u2032", b *= 60) : c = "\u00b0") : e == im ? .9144 > d ? (c = "in", b /= .0254) : 1609.344 > d ? (c = "ft", b /= .3048) : (c = "mi", b /= 1609.344) : e == jm ? (b /= 1852, c = "nm") : e == em ? 1 > d ? (c = "mm", b *= 1E3) : 1E3 > d ? c = "m" : (c = "km", b /= 1E3) : e == km ? .9144 > d ? (c = "in", b *= 39.37) : 1609.344 > d ? (c = "ft", b /= .30480061) : (c = "mi", b /= 1609.3472) : ha(!1, 33);
            for (var e = 3 * Math.floor(Math.log(a.o *
                        b) / Math.log(10)), f; ;) {
                f = fm[(e % 3 + 3) % 3] * Math.pow(10, Math.floor(e / 3));
                d = Math.round(f / b);
                if (isNaN(d)) {
                    a.f.style.display = "none";
                    a.j = !1;
                    return
                }
                if (d >= a.o)break;
                ++e
            }
            b = f + " " + c;
            a.C != b && (a.l.innerHTML = b, a.C = b);
            a.B != d && (a.l.style.width = d + "px", a.B = d);
            a.j || (a.f.style.display = "", a.j = !0)
        } else a.j && (a.f.style.display = "none", a.j = !1)
    }

    var dm = "units", hm = "degrees", im = "imperial", jm = "nautical", em = "metric", km = "us";

    function lm(a) {
        a = a ? a : {};
        this.f = void 0;
        this.j = mm;
        this.u = [];
        this.B = this.o = 0;
        this.W = null;
        this.fa = !1;
        this.Z = void 0 !== a.duration ? a.duration : 200;
        var b = void 0 !== a.className ? a.className : "ol-zoomslider", c = document.createElement("button");
        c.setAttribute("type", "button");
        c.className = b + "-thumb ol-unselectable";
        var d = document.createElement("div");
        d.className = b + " ol-unselectable ol-control";
        d.appendChild(c);
        this.l = new Rf(d);
        w(this.l, "pointerdown", this.wk, this);
        w(this.l, "pointermove", this.Hg, this);
        w(this.l, "pointerup",
            this.Ig, this);
        w(d, "click", this.vk, this);
        w(c, "click", Ma);
        Ke.call(this, {element: d, render: a.render ? a.render : nm})
    }

    v(lm, Ke);
    lm.prototype.la = function () {
        Ja(this.l);
        Ke.prototype.la.call(this)
    };
    var mm = 0;
    k = lm.prototype;
    k.setMap = function (a) {
        Ke.prototype.setMap.call(this, a);
        a && a.render()
    };
    function nm(a) {
        if (a.frameState) {
            if (!this.fa) {
                var b = this.element, c = b.offsetWidth, d = b.offsetHeight, e = b.firstElementChild, f = getComputedStyle(e), b = e.offsetWidth + parseFloat(f.marginRight) + parseFloat(f.marginLeft), e = e.offsetHeight + parseFloat(f.marginTop) + parseFloat(f.marginBottom);
                this.W = [b, e];
                c > d ? (this.j = 1, this.B = c - b) : (this.j = mm, this.o = d - e);
                this.fa = !0
            }
            a = a.frameState.viewState.resolution;
            a !== this.f && (this.f = a, om(this, a))
        }
    }

    k.vk = function (a) {
        var b = this.a, c = b.$(), d = c.Ma();
        b.$a(Sd({resolution: d, duration: this.Z, easing: Md}));
        a = pm(this, ia(1 === this.j ? (a.offsetX - this.W[0] / 2) / this.B : (a.offsetY - this.W[1] / 2) / this.o, 0, 1));
        c.Yb(c.constrainResolution(a))
    };
    k.wk = function (a) {
        if (!this.C && a.b.target === this.element.firstElementChild && (Kd(this.a.$(), 1), this.G = a.clientX, this.S = a.clientY, this.C = !0, 0 === this.u.length)) {
            a = this.Hg;
            var b = this.Ig;
            this.u.push(w(document, "mousemove", a, this), w(document, "touchmove", a, this), w(document, "pointermove", a, this), w(document, "mouseup", b, this), w(document, "touchend", b, this), w(document, "pointerup", b, this))
        }
    };
    k.Hg = function (a) {
        if (this.C) {
            var b = this.element.firstElementChild;
            this.f = pm(this, ia(1 === this.j ? (a.clientX - this.G + parseInt(b.style.left, 10)) / this.B : (a.clientY - this.S + parseInt(b.style.top, 10)) / this.o, 0, 1));
            this.a.$().Yb(this.f);
            om(this, this.f);
            this.G = a.clientX;
            this.S = a.clientY
        }
    };
    k.Ig = function () {
        if (this.C) {
            var a = this.a, b = a.$();
            Kd(b, -1);
            a.$a(Sd({resolution: this.f, duration: this.Z, easing: Md}));
            a = b.constrainResolution(this.f);
            b.Yb(a);
            this.C = !1;
            this.S = this.G = void 0;
            this.u.forEach(za);
            this.u.length = 0
        }
    };
    function om(a, b) {
        var c;
        c = 1 - Id(a.a.$())(b);
        var d = a.element.firstElementChild;
        1 == a.j ? d.style.left = a.B * c + "px" : d.style.top = a.o * c + "px"
    }

    function pm(a, b) {
        return Hd(a.a.$())(1 - b)
    };
    function qm(a) {
        a = a ? a : {};
        this.f = a.extent ? a.extent : null;
        var b = void 0 !== a.className ? a.className : "ol-zoom-extent", c = void 0 !== a.label ? a.label : "E", d = void 0 !== a.tipLabel ? a.tipLabel : "Fit to extent", e = document.createElement("button");
        e.setAttribute("type", "button");
        e.title = d;
        e.appendChild("string" === typeof c ? document.createTextNode(c) : c);
        w(e, "click", this.j, this);
        c = document.createElement("div");
        c.className = b + " ol-unselectable ol-control";
        c.appendChild(e);
        Ke.call(this, {element: c, target: a.target})
    }

    v(qm, Ke);
    qm.prototype.j = function (a) {
        a.preventDefault();
        var b = this.a;
        a = b.$();
        var c = this.f ? this.f : a.l.D(), b = b.kb();
        a.$e(c, b)
    };
    function rm(a) {
        Ta.call(this);
        a = a ? a : {};
        this.a = null;
        w(this, Va(sm), this.ul, this);
        this.rf(void 0 !== a.tracking ? a.tracking : !1)
    }

    v(rm, Ta);
    k = rm.prototype;
    k.la = function () {
        this.rf(!1);
        Ta.prototype.la.call(this)
    };
    k.Sn = function (a) {
        if (null !== a.alpha) {
            var b = na(a.alpha);
            this.set(tm, b);
            "boolean" === typeof a.absolute && a.absolute ? this.set(um, b) : "number" === typeof a.webkitCompassHeading && -1 != a.webkitCompassAccuracy && this.set(um, na(a.webkitCompassHeading))
        }
        null !== a.beta && this.set(vm, na(a.beta));
        null !== a.gamma && this.set(wm, na(a.gamma));
        this.v()
    };
    k.Cj = function () {
        return this.get(tm)
    };
    k.Fj = function () {
        return this.get(vm)
    };
    k.Mj = function () {
        return this.get(wm)
    };
    k.tl = function () {
        return this.get(um)
    };
    k.Sg = function () {
        return this.get(sm)
    };
    k.ul = function () {
        if (nf) {
            var a = this.Sg();
            a && !this.a ? this.a = w(window, "deviceorientation", this.Sn, this) : a || null === this.a || (za(this.a), this.a = null)
        }
    };
    k.rf = function (a) {
        this.set(sm, a)
    };
    var tm = "alpha", vm = "beta", wm = "gamma", um = "heading", sm = "tracking";

    function I(a) {
        Ta.call(this);
        this.a = void 0;
        this.f = "geometry";
        this.i = null;
        this.j = void 0;
        this.c = null;
        w(this, Va(this.f), this.ae, this);
        void 0 !== a && (a instanceof Mc || !a ? this.Pa(a) : this.H(a))
    }

    v(I, Ta);
    k = I.prototype;
    k.clone = function () {
        var a = new I(this.N());
        a.Dc(this.f);
        var b = this.V();
        b && a.Pa(b.clone());
        (b = this.i) && a.sf(b);
        return a
    };
    k.V = function () {
        return this.get(this.f)
    };
    k.vl = function () {
        return this.a
    };
    k.Oj = function () {
        return this.f
    };
    k.wl = function () {
        return this.i
    };
    k.zc = function () {
        return this.j
    };
    k.xl = function () {
        this.v()
    };
    k.ae = function () {
        this.c && (za(this.c), this.c = null);
        var a = this.V();
        a && (this.c = w(a, "change", this.xl, this));
        this.v()
    };
    k.Pa = function (a) {
        this.set(this.f, a)
    };
    k.sf = function (a) {
        this.j = (this.i = a) ? xm(a) : void 0;
        this.v()
    };
    k.Wb = function (a) {
        this.a = a;
        this.v()
    };
    k.Dc = function (a) {
        Fa(this, Va(this.f), this.ae, this);
        this.f = a;
        w(this, Va(this.f), this.ae, this);
        this.ae()
    };
    function xm(a) {
        if ("function" !== typeof a) {
            var b;
            Array.isArray(a) ? b = a : (ha(a instanceof Bi, 41), b = [a]);
            a = function () {
                return b
            }
        }
        return a
    };
    var ym = document.implementation.createDocument("", "", null);

    function zm(a, b) {
        return ym.createElementNS(a, b)
    }

    function Am(a, b) {
        return Bm(a, b, []).join("")
    }

    function Bm(a, b, c) {
        if (a.nodeType == Node.CDATA_SECTION_NODE || a.nodeType == Node.TEXT_NODE) b ? c.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : c.push(a.nodeValue); else for (a = a.firstChild; a; a = a.nextSibling)Bm(a, b, c);
        return c
    }

    function Cm(a) {
        return a instanceof Document
    }

    function Dm(a) {
        return a instanceof Node
    }

    function Em(a) {
        return (new DOMParser).parseFromString(a, "application/xml")
    }

    function Fm(a, b) {
        return function (c, d) {
            var e = a.call(b, c, d);
            void 0 !== e && ab(d[d.length - 1], e)
        }
    }

    function Gm(a, b) {
        return function (c, d) {
            var e = a.call(void 0 !== b ? b : this, c, d);
            void 0 !== e && d[d.length - 1].push(e)
        }
    }

    function Hm(a, b) {
        return function (c, d) {
            var e = a.call(void 0 !== b ? b : this, c, d);
            void 0 !== e && (d[d.length - 1] = e)
        }
    }

    function Im(a) {
        return function (b, c) {
            var d = a.call(this, b, c);
            if (void 0 !== d) {
                var e = c[c.length - 1], f = b.localName, g;
                f in e ? g = e[f] : g = e[f] = [];
                g.push(d)
            }
        }
    }

    function J(a, b) {
        return function (c, d) {
            var e = a.call(this, c, d);
            void 0 !== e && (d[d.length - 1][void 0 !== b ? b : c.localName] = e)
        }
    }

    function M(a, b) {
        return function (c, d, e) {
            a.call(void 0 !== b ? b : this, c, d, e);
            e[e.length - 1].node.appendChild(c)
        }
    }

    function Jm(a) {
        var b, c;
        return function (d, e, f) {
            if (!b) {
                b = {};
                var g = {};
                g[d.localName] = a;
                b[d.namespaceURI] = g;
                c = Km(d.localName)
            }
            Lm(b, c, e, f)
        }
    }

    function Km(a, b) {
        return function (c, d, e) {
            c = d[d.length - 1].node;
            d = a;
            void 0 === d && (d = e);
            e = b;
            void 0 === b && (e = c.namespaceURI);
            return zm(e, d)
        }
    }

    var Mm = Km();

    function Nm(a, b) {
        for (var c = b.length, d = Array(c), e = 0; e < c; ++e)d[e] = a[b[e]];
        return d
    }

    function N(a, b, c) {
        c = void 0 !== c ? c : {};
        var d, e;
        d = 0;
        for (e = a.length; d < e; ++d)c[a[d]] = b;
        return c
    }

    function Om(a, b, c, d) {
        for (b = b.firstElementChild; b; b = b.nextElementSibling) {
            var e = a[b.namespaceURI];
            void 0 !== e && (e = e[b.localName]) && e.call(d, b, c)
        }
    }

    function O(a, b, c, d, e) {
        d.push(a);
        Om(b, c, d, e);
        return d.pop()
    }

    function Lm(a, b, c, d, e, f) {
        for (var g = (void 0 !== e ? e : c).length, h, l, m = 0; m < g; ++m)h = c[m], void 0 !== h && (l = b.call(f, h, d, void 0 !== e ? e[m] : void 0), void 0 !== l && a[l.namespaceURI][l.localName].call(f, l, h, d))
    }

    function Pm(a, b, c, d, e, f, g) {
        e.push(a);
        Lm(b, c, d, e, f, g);
        e.pop()
    };
    function Qm(a, b, c, d) {
        return function (e, f, g) {
            var h = new XMLHttpRequest;
            h.open("GET", "function" === typeof a ? a(e, f, g) : a, !0);
            "arraybuffer" == b.X() && (h.responseType = "arraybuffer");
            h.onload = function () {
                if (!h.status || 200 <= h.status && 300 > h.status) {
                    var a = b.X(), e;
                    "json" == a || "text" == a ? e = h.responseText : "xml" == a ? (e = h.responseXML) || (e = Em(h.responseText)) : "arraybuffer" == a && (e = h.response);
                    e ? c.call(this, b.Ha(e, {featureProjection: g}), b.Sa(e)) : d.call(this)
                } else d.call(this)
            }.bind(this);
            h.send()
        }
    }

    function Rm(a, b) {
        return Qm(a, b, function (a, b) {
            this.uf(b);
            this.Wh(a)
        }, function () {
            this.state = 3;
            kg(this)
        })
    }

    function Sm(a, b) {
        return Qm(a, b, function (a) {
            this.Ic(a)
        }, da)
    };
    function Tm() {
        this.j = this.defaultDataProjection = null
    }

    function Um(a, b, c) {
        var d;
        c && (d = {
            dataProjection: c.dataProjection ? c.dataProjection : a.Sa(b),
            featureProjection: c.featureProjection
        });
        return Vm(a, d)
    }

    function Vm(a, b) {
        return ua({dataProjection: a.defaultDataProjection, featureProjection: a.j}, b)
    }

    function Wm(a, b, c) {
        var d = c ? oc(c.featureProjection) : null, e = c ? oc(c.dataProjection) : null, f;
        d && e && !Hc(d, e) ? a instanceof Mc ? f = (b ? a.clone() : a).lb(b ? d : e, b ? e : d) : f = Lc(b ? a.slice() : a, b ? d : e, b ? e : d) : f = a;
        if (b && c && c.decimals) {
            var g = Math.pow(10, c.decimals);
            a = function (a) {
                for (var b = 0, c = a.length; b < c; ++b)a[b] = Math.round(a[b] * g) / g;
                return a
            };
            Array.isArray(f) ? a(f) : f.oc(a)
        }
        return f
    };
    function Xm() {
        Tm.call(this)
    }

    v(Xm, Tm);
    function Ym(a) {
        return "string" === typeof a ? (a = JSON.parse(a)) ? a : null : null !== a ? a : null
    }

    k = Xm.prototype;
    k.X = function () {
        return "json"
    };
    k.Ub = function (a, b) {
        return this.Vc(Ym(a), Um(this, a, b))
    };
    k.Ha = function (a, b) {
        return this.Gf(Ym(a), Um(this, a, b))
    };
    k.Wc = function (a, b) {
        return this.Ih(Ym(a), Um(this, a, b))
    };
    k.Sa = function (a) {
        return this.Oh(Ym(a))
    };
    k.Gd = function (a, b) {
        return JSON.stringify(this.Zc(a, b))
    };
    k.$b = function (a, b) {
        return JSON.stringify(this.Ge(a, b))
    };
    k.$c = function (a, b) {
        return JSON.stringify(this.He(a, b))
    };
    function Zm(a, b, c, d, e, f) {
        var g = NaN, h = NaN, l = (c - b) / d;
        if (0 !== l)if (1 == l) g = a[b], h = a[b + 1]; else if (2 == l) g = (1 - e) * a[b] + e * a[b + d], h = (1 - e) * a[b + 1] + e * a[b + d + 1]; else {
            var h = a[b], l = a[b + 1], m = 0, g = [0], n;
            for (n = b + d; n < c; n += d) {
                var p = a[n], q = a[n + 1], m = m + Math.sqrt((p - h) * (p - h) + (q - l) * (q - l));
                g.push(m);
                h = p;
                l = q
            }
            c = e * m;
            l = 0;
            m = g.length;
            for (n = !1; l < m;)e = l + (m - l >> 1), h = +Xa(g[e], c), 0 > h ? l = e + 1 : (m = e, n = !h);
            e = n ? l : ~l;
            0 > e ? (c = (c - g[-e - 2]) / (g[-e - 1] - g[-e - 2]), b += (-e - 2) * d, g = pa(a[b], a[b + d], c), h = pa(a[b + 1], a[b + d + 1], c)) : (g = a[b + e * d], h = a[b + e * d + 1])
        }
        return f ? (f[0] =
            g, f[1] = h, f) : [g, h]
    }

    function $m(a, b, c, d, e, f) {
        if (c == b)return null;
        if (e < a[b + d - 1])return f ? (c = a.slice(b, b + d), c[d - 1] = e, c) : null;
        if (a[c - 1] < e)return f ? (c = a.slice(c - d, c), c[d - 1] = e, c) : null;
        if (e == a[b + d - 1])return a.slice(b, b + d);
        b /= d;
        for (c /= d; b < c;)f = b + c >> 1, e < a[(f + 1) * d - 1] ? c = f : b = f + 1;
        c = a[b * d - 1];
        if (e == c)return a.slice((b - 1) * d, (b - 1) * d + d);
        f = (e - c) / (a[(b + 1) * d - 1] - c);
        c = [];
        var g;
        for (g = 0; g < d - 1; ++g)c.push(pa(a[(b - 1) * d + g], a[b * d + g], f));
        c.push(e);
        return c
    }

    function an(a, b, c, d, e, f) {
        var g = 0;
        if (f)return $m(a, g, b[b.length - 1], c, d, e);
        if (d < a[c - 1])return e ? (a = a.slice(0, c), a[c - 1] = d, a) : null;
        if (a[a.length - 1] < d)return e ? (a = a.slice(a.length - c), a[c - 1] = d, a) : null;
        e = 0;
        for (f = b.length; e < f; ++e) {
            var h = b[e];
            if (g != h) {
                if (d < a[g + c - 1])break;
                if (d <= a[h - 1])return $m(a, g, h, c, d, !1);
                g = h
            }
        }
        return null
    };
    function P(a, b) {
        Oc.call(this);
        this.c = null;
        this.C = this.B = this.l = -1;
        this.ma(a, b)
    }

    v(P, Oc);
    k = P.prototype;
    k.kj = function (a) {
        this.A ? ab(this.A, a) : this.A = a.slice();
        this.v()
    };
    k.clone = function () {
        var a = new P(null);
        a.aa(this.ia, this.A.slice());
        return a
    };
    k.vb = function (a, b, c, d) {
        if (d < Fb(this.D(), a, b))return d;
        this.C != this.g && (this.B = Math.sqrt(Xc(this.A, 0, this.A.length, this.a, 0)), this.C = this.g);
        return $c(this.A, 0, this.A.length, this.a, this.B, !1, a, b, c, d)
    };
    k.zj = function (a, b) {
        return od(this.A, 0, this.A.length, this.a, a, b)
    };
    k.$l = function (a, b) {
        return "XYM" != this.ia && "XYZM" != this.ia ? null : $m(this.A, 0, this.A.length, this.a, a, void 0 !== b ? b : !1)
    };
    k.Y = function () {
        return ed(this.A, 0, this.A.length, this.a)
    };
    k.vg = function (a, b) {
        return Zm(this.A, 0, this.A.length, this.a, a, b)
    };
    k.am = function () {
        var a = this.A, b = this.a, c = a[0], d = a[1], e = 0, f;
        for (f = 0 + b; f < this.A.length; f += b)var g = a[f], h = a[f + 1], e = e + Math.sqrt((g - c) * (g - c) + (h - d) * (h - d)), c = g, d = h;
        return e
    };
    function Ui(a) {
        a.l != a.g && (a.c = a.vg(.5, a.c), a.l = a.g);
        return a.c
    }

    k.Mc = function (a) {
        var b = [];
        b.length = gd(this.A, 0, this.A.length, this.a, a, b, 0);
        a = new P(null);
        a.aa("XY", b);
        return a
    };
    k.X = function () {
        return "LineString"
    };
    k.Oa = function (a) {
        return pd(this.A, 0, this.A.length, this.a, a)
    };
    k.ma = function (a, b) {
        a ? (Tc(this, b, a, 1), this.A || (this.A = []), this.A.length = cd(this.A, 0, a, this.a), this.v()) : this.aa("XY", null)
    };
    k.aa = function (a, b) {
        Sc(this, a, b);
        this.v()
    };
    function Q(a, b) {
        Oc.call(this);
        this.c = [];
        this.l = this.C = -1;
        this.ma(a, b)
    }

    v(Q, Oc);
    k = Q.prototype;
    k.lj = function (a) {
        this.A ? ab(this.A, a.ka().slice()) : this.A = a.ka().slice();
        this.c.push(this.A.length);
        this.v()
    };
    k.clone = function () {
        var a = new Q(null);
        a.aa(this.ia, this.A.slice(), this.c.slice());
        return a
    };
    k.vb = function (a, b, c, d) {
        if (d < Fb(this.D(), a, b))return d;
        this.l != this.g && (this.C = Math.sqrt(Zc(this.A, 0, this.c, this.a, 0)), this.l = this.g);
        return ad(this.A, 0, this.c, this.a, this.C, !1, a, b, c, d)
    };
    k.cm = function (a, b, c) {
        return "XYM" != this.ia && "XYZM" != this.ia || 0 === this.A.length ? null : an(this.A, this.c, this.a, a, void 0 !== b ? b : !1, void 0 !== c ? c : !1)
    };
    k.Y = function () {
        return fd(this.A, 0, this.c, this.a)
    };
    k.Eb = function () {
        return this.c
    };
    k.Uj = function (a) {
        if (0 > a || this.c.length <= a)return null;
        var b = new P(null);
        b.aa(this.ia, this.A.slice(0 === a ? 0 : this.c[a - 1], this.c[a]));
        return b
    };
    k.od = function () {
        var a = this.A, b = this.c, c = this.ia, d = [], e = 0, f, g;
        f = 0;
        for (g = b.length; f < g; ++f) {
            var h = b[f], l = new P(null);
            l.aa(c, a.slice(e, h));
            d.push(l);
            e = h
        }
        return d
    };
    function Vi(a) {
        var b = [], c = a.A, d = 0, e = a.c;
        a = a.a;
        var f, g;
        f = 0;
        for (g = e.length; f < g; ++f) {
            var h = e[f], d = Zm(c, d, h, a, .5);
            ab(b, d);
            d = h
        }
        return b
    }

    k.Mc = function (a) {
        var b = [], c = [], d = this.A, e = this.c, f = this.a, g = 0, h = 0, l, m;
        l = 0;
        for (m = e.length; l < m; ++l) {
            var n = e[l], h = gd(d, g, n, f, a, b, h);
            c.push(h);
            g = n
        }
        b.length = h;
        a = new Q(null);
        a.aa("XY", b, c);
        return a
    };
    k.X = function () {
        return "MultiLineString"
    };
    k.Oa = function (a) {
        a:{
            var b = this.A, c = this.c, d = this.a, e = 0, f, g;
            f = 0;
            for (g = c.length; f < g; ++f) {
                if (pd(b, e, c[f], d, a)) {
                    a = !0;
                    break a
                }
                e = c[f]
            }
            a = !1
        }
        return a
    };
    k.ma = function (a, b) {
        if (a) {
            Tc(this, b, a, 2);
            this.A || (this.A = []);
            var c = dd(this.A, 0, a, this.a, this.c);
            this.A.length = 0 === c.length ? 0 : c[c.length - 1];
            this.v()
        } else this.aa("XY", null, this.c)
    };
    k.aa = function (a, b, c) {
        Sc(this, a, b);
        this.c = c;
        this.v()
    };
    function bn(a, b) {
        var c = a.ia, d = [], e = [], f, g;
        f = 0;
        for (g = b.length; f < g; ++f) {
            var h = b[f];
            0 === f && (c = h.ia);
            ab(d, h.ka());
            e.push(d.length)
        }
        a.aa(c, d, e)
    };
    function S(a, b) {
        Oc.call(this);
        this.ma(a, b)
    }

    v(S, Oc);
    k = S.prototype;
    k.nj = function (a) {
        this.A ? ab(this.A, a.ka()) : this.A = a.ka().slice();
        this.v()
    };
    k.clone = function () {
        var a = new S(null);
        a.aa(this.ia, this.A.slice());
        return a
    };
    k.vb = function (a, b, c, d) {
        if (d < Fb(this.D(), a, b))return d;
        var e = this.A, f = this.a, g, h, l;
        g = 0;
        for (h = e.length; g < h; g += f)if (l = ma(a, b, e[g], e[g + 1]), l < d) {
            d = l;
            for (l = 0; l < f; ++l)c[l] = e[g + l];
            c.length = f
        }
        return d
    };
    k.Y = function () {
        return ed(this.A, 0, this.A.length, this.a)
    };
    k.ek = function (a) {
        var b = this.A ? this.A.length / this.a : 0;
        if (0 > a || b <= a)return null;
        b = new B(null);
        b.aa(this.ia, this.A.slice(a * this.a, (a + 1) * this.a));
        return b
    };
    k.je = function () {
        var a = this.A, b = this.ia, c = this.a, d = [], e, f;
        e = 0;
        for (f = a.length; e < f; e += c) {
            var g = new B(null);
            g.aa(b, a.slice(e, e + c));
            d.push(g)
        }
        return d
    };
    k.X = function () {
        return "MultiPoint"
    };
    k.Oa = function (a) {
        var b = this.A, c = this.a, d, e, f, g;
        d = 0;
        for (e = b.length; d < e; d += c)if (f = b[d], g = b[d + 1], Hb(a, f, g))return !0;
        return !1
    };
    k.ma = function (a, b) {
        a ? (Tc(this, b, a, 1), this.A || (this.A = []), this.A.length = cd(this.A, 0, a, this.a), this.v()) : this.aa("XY", null)
    };
    k.aa = function (a, b) {
        Sc(this, a, b);
        this.v()
    };
    function T(a, b) {
        Oc.call(this);
        this.c = [];
        this.C = -1;
        this.B = null;
        this.P = this.G = this.S = -1;
        this.l = null;
        this.ma(a, b)
    }

    v(T, Oc);
    k = T.prototype;
    k.oj = function (a) {
        if (this.A) {
            var b = this.A.length;
            ab(this.A, a.ka());
            a = a.Eb().slice();
            var c, d;
            c = 0;
            for (d = a.length; c < d; ++c)a[c] += b
        } else this.A = a.ka().slice(), a = a.Eb().slice(), this.c.push();
        this.c.push(a);
        this.v()
    };
    k.clone = function () {
        for (var a = new T(null), b = this.c.length, c = Array(b), d = 0; d < b; ++d)c[d] = this.c[d].slice();
        cn(a, this.ia, this.A.slice(), c);
        return a
    };
    k.vb = function (a, b, c, d) {
        if (d < Fb(this.D(), a, b))return d;
        if (this.G != this.g) {
            var e = this.c, f = 0, g = 0, h, l;
            h = 0;
            for (l = e.length; h < l; ++h)var m = e[h], g = Zc(this.A, f, m, this.a, g), f = m[m.length - 1];
            this.S = Math.sqrt(g);
            this.G = this.g
        }
        e = Wi(this);
        f = this.c;
        g = this.a;
        h = this.S;
        l = 0;
        var m = [NaN, NaN], n, p;
        n = 0;
        for (p = f.length; n < p; ++n) {
            var q = f[n];
            d = ad(e, l, q, g, h, !0, a, b, c, d, m);
            l = q[q.length - 1]
        }
        return d
    };
    k.Ac = function (a, b) {
        var c;
        a:{
            c = Wi(this);
            var d = this.c, e = this.a, f = 0;
            if (0 !== d.length) {
                var g, h;
                g = 0;
                for (h = d.length; g < h; ++g) {
                    var l = d[g];
                    if (md(c, f, l, e, a, b)) {
                        c = !0;
                        break a
                    }
                    f = l[l.length - 1]
                }
            }
            c = !1
        }
        return c
    };
    k.dm = function () {
        var a = Wi(this), b = this.c, c = 0, d = 0, e, f;
        e = 0;
        for (f = b.length; e < f; ++e)var g = b[e], d = d + Vc(a, c, g, this.a), c = g[g.length - 1];
        return d
    };
    k.Y = function (a) {
        var b;
        void 0 !== a ? (b = Wi(this).slice(), ud(b, this.c, this.a, a)) : b = this.A;
        a = b;
        b = this.c;
        var c = this.a, d = 0, e = [], f = 0, g, h;
        g = 0;
        for (h = b.length; g < h; ++g) {
            var l = b[g];
            e[f++] = fd(a, d, l, c, e[f]);
            d = l[l.length - 1]
        }
        e.length = f;
        return e
    };
    function Xi(a) {
        if (a.C != a.g) {
            var b = a.A, c = a.c, d = a.a, e = 0, f = [], g, h;
            g = 0;
            for (h = c.length; g < h; ++g) {
                var l = c[g], e = Mb(b, e, l[0], d);
                f.push((e[0] + e[2]) / 2, (e[1] + e[3]) / 2);
                e = l[l.length - 1]
            }
            b = Wi(a);
            c = a.c;
            d = a.a;
            g = 0;
            h = [];
            l = 0;
            for (e = c.length; l < e; ++l) {
                var m = c[l];
                h = nd(b, g, m, d, f, 2 * l, h);
                g = m[m.length - 1]
            }
            a.B = h;
            a.C = a.g
        }
        return a.B
    }

    k.Rj = function () {
        var a = new S(null);
        a.aa("XY", Xi(this).slice());
        return a
    };
    function Wi(a) {
        if (a.P != a.g) {
            var b = a.A, c;
            a:{
                c = a.c;
                var d, e;
                d = 0;
                for (e = c.length; d < e; ++d)if (!sd(b, c[d], a.a, void 0)) {
                    c = !1;
                    break a
                }
                c = !0
            }
            c ? a.l = b : (a.l = b.slice(), a.l.length = ud(a.l, a.c, a.a));
            a.P = a.g
        }
        return a.l
    }

    k.Mc = function (a) {
        var b = [], c = [], d = this.A, e = this.c, f = this.a;
        a = Math.sqrt(a);
        var g = 0, h = 0, l, m;
        l = 0;
        for (m = e.length; l < m; ++l) {
            var n = e[l], p = [], h = hd(d, g, n, f, a, b, h, p);
            c.push(p);
            g = n[n.length - 1]
        }
        b.length = h;
        d = new T(null);
        cn(d, "XY", b, c);
        return d
    };
    k.gk = function (a) {
        if (0 > a || this.c.length <= a)return null;
        var b;
        0 === a ? b = 0 : (b = this.c[a - 1], b = b[b.length - 1]);
        a = this.c[a].slice();
        var c = a[a.length - 1];
        if (0 !== b) {
            var d, e;
            d = 0;
            for (e = a.length; d < e; ++d)a[d] -= b
        }
        d = new C(null);
        d.aa(this.ia, this.A.slice(b, c), a);
        return d
    };
    k.Xd = function () {
        var a = this.ia, b = this.A, c = this.c, d = [], e = 0, f, g, h, l;
        f = 0;
        for (g = c.length; f < g; ++f) {
            var m = c[f].slice(), n = m[m.length - 1];
            if (0 !== e)for (h = 0, l = m.length; h < l; ++h)m[h] -= e;
            h = new C(null);
            h.aa(a, b.slice(e, n), m);
            d.push(h);
            e = n
        }
        return d
    };
    k.X = function () {
        return "MultiPolygon"
    };
    k.Oa = function (a) {
        a:{
            var b = Wi(this), c = this.c, d = this.a, e = 0, f, g;
            f = 0;
            for (g = c.length; f < g; ++f) {
                var h = c[f];
                if (qd(b, e, h, d, a)) {
                    a = !0;
                    break a
                }
                e = h[h.length - 1]
            }
            a = !1
        }
        return a
    };
    k.ma = function (a, b) {
        if (a) {
            Tc(this, b, a, 3);
            this.A || (this.A = []);
            var c = this.A, d = this.a, e = this.c, f = 0, e = e ? e : [], g = 0, h, l;
            h = 0;
            for (l = a.length; h < l; ++h)f = dd(c, f, a[h], d, e[g]), e[g++] = f, f = f[f.length - 1];
            e.length = g;
            0 === e.length ? this.A.length = 0 : (c = e[e.length - 1], this.A.length = 0 === c.length ? 0 : c[c.length - 1]);
            this.v()
        } else cn(this, "XY", null, this.c)
    };
    function cn(a, b, c, d) {
        Sc(a, b, c);
        a.c = d;
        a.v()
    }

    function dn(a, b) {
        var c = a.ia, d = [], e = [], f, g, h;
        f = 0;
        for (g = b.length; f < g; ++f) {
            var l = b[f];
            0 === f && (c = l.ia);
            var m = d.length;
            h = l.Eb();
            var n, p;
            n = 0;
            for (p = h.length; n < p; ++n)h[n] += m;
            ab(d, l.ka());
            e.push(h)
        }
        cn(a, c, d, e)
    };
    function en(a) {
        a = a ? a : {};
        Tm.call(this);
        this.b = a.geometryName
    }

    v(en, Xm);
    function fn(a, b) {
        if (!a)return null;
        var c;
        if ("number" === typeof a.x && "number" === typeof a.y) c = "Point"; else if (a.points) c = "MultiPoint"; else if (a.paths) c = 1 === a.paths.length ? "LineString" : "MultiLineString"; else if (a.rings) {
            var d = a.rings, e = gn(a), f = [];
            c = [];
            var g, h;
            g = 0;
            for (h = d.length; g < h; ++g) {
                var l = $a(d[g]);
                rd(l, 0, l.length, e.length) ? f.push([d[g]]) : c.push(d[g])
            }
            for (; c.length;) {
                d = c.shift();
                e = !1;
                for (g = f.length - 1; 0 <= g; g--)if (Ib((new id(f[g][0])).D(), (new id(d)).D())) {
                    f[g].push(d);
                    e = !0;
                    break
                }
                e || f.push([d.reverse()])
            }
            a =
                ua({}, a);
            1 === f.length ? (c = "Polygon", a.rings = f[0]) : (c = "MultiPolygon", a.rings = f)
        }
        return Wm((0, hn[c])(a), !1, b)
    }

    function gn(a) {
        var b = "XY";
        !0 === a.hasZ && !0 === a.hasM ? b = "XYZM" : !0 === a.hasZ ? b = "XYZ" : !0 === a.hasM && (b = "XYM");
        return b
    }

    function jn(a) {
        a = a.ia;
        return {hasZ: "XYZ" === a || "XYZM" === a, hasM: "XYM" === a || "XYZM" === a}
    }

    var hn = {
        Point: function (a) {
            return void 0 !== a.m && void 0 !== a.z ? new B([a.x, a.y, a.z, a.m], "XYZM") : void 0 !== a.z ? new B([a.x, a.y, a.z], "XYZ") : void 0 !== a.m ? new B([a.x, a.y, a.m], "XYM") : new B([a.x, a.y])
        }, LineString: function (a) {
            return new P(a.paths[0], gn(a))
        }, Polygon: function (a) {
            return new C(a.rings, gn(a))
        }, MultiPoint: function (a) {
            return new S(a.points, gn(a))
        }, MultiLineString: function (a) {
            return new Q(a.paths, gn(a))
        }, MultiPolygon: function (a) {
            return new T(a.rings, gn(a))
        }
    }, kn = {
        Point: function (a) {
            var b = a.Y(), c;
            a = a.ia;
            "XYZ" === a ? c = {x: b[0], y: b[1], z: b[2]} : "XYM" === a ? c = {
                x: b[0],
                y: b[1],
                m: b[2]
            } : "XYZM" === a ? c = {x: b[0], y: b[1], z: b[2], m: b[3]} : "XY" === a ? c = {
                x: b[0],
                y: b[1]
            } : ha(!1, 34);
            return c
        }, LineString: function (a) {
            var b = jn(a);
            return {hasZ: b.hasZ, hasM: b.hasM, paths: [a.Y()]}
        }, Polygon: function (a) {
            var b = jn(a);
            return {hasZ: b.hasZ, hasM: b.hasM, rings: a.Y(!1)}
        }, MultiPoint: function (a) {
            var b = jn(a);
            return {hasZ: b.hasZ, hasM: b.hasM, points: a.Y()}
        }, MultiLineString: function (a) {
            var b = jn(a);
            return {hasZ: b.hasZ, hasM: b.hasM, paths: a.Y()}
        }, MultiPolygon: function (a) {
            var b =
                jn(a);
            a = a.Y(!1);
            for (var c = [], d = 0; d < a.length; d++)for (var e = a[d].length - 1; 0 <= e; e--)c.push(a[d][e]);
            return {hasZ: b.hasZ, hasM: b.hasM, rings: c}
        }
    };
    k = en.prototype;
    k.Vc = function (a, b) {
        var c = fn(a.geometry, b), d = new I;
        this.b && d.Dc(this.b);
        d.Pa(c);
        b && b.mf && a.attributes[b.mf] && d.Wb(a.attributes[b.mf]);
        a.attributes && d.H(a.attributes);
        return d
    };
    k.Gf = function (a, b) {
        var c = b ? b : {};
        if (a.features) {
            var d = [], e = a.features, f, g;
            c.mf = a.objectIdFieldName;
            f = 0;
            for (g = e.length; f < g; ++f)d.push(this.Vc(e[f], c));
            return d
        }
        return [this.Vc(a, c)]
    };
    k.Ih = function (a, b) {
        return fn(a, b)
    };
    k.Oh = function (a) {
        return a.spatialReference && a.spatialReference.wkid ? oc("EPSG:" + a.spatialReference.wkid) : null
    };
    function ln(a, b) {
        return (0, kn[a.X()])(Wm(a, !0, b), b)
    }

    k.He = function (a, b) {
        return ln(a, Vm(this, b))
    };
    k.Zc = function (a, b) {
        b = Vm(this, b);
        var c = {}, d = a.V();
        d && (c.geometry = ln(d, b));
        d = a.N();
        delete d[a.f];
        c.attributes = xa(d) ? {} : d;
        b && b.featureProjection && (c.spatialReference = {wkid: oc(b.featureProjection).eb.split(":").pop()});
        return c
    };
    k.Ge = function (a, b) {
        b = Vm(this, b);
        var c = [], d, e;
        d = 0;
        for (e = a.length; d < e; ++d)c.push(this.Zc(a[d], b));
        return {features: c}
    };
    function mn(a) {
        this.Hb = a
    };
    function nn(a) {
        this.Hb = a
    }

    v(nn, mn);
    function on(a, b, c) {
        this.Hb = a;
        this.b = b;
        this.a = c
    }

    v(on, nn);
    function pn(a, b) {
        on.call(this, "And", a, b)
    }

    v(pn, on);
    function qn(a, b, c) {
        this.Hb = "BBOX";
        this.geometryName = a;
        this.extent = b;
        this.srsName = c
    }

    v(qn, mn);
    function rn(a, b) {
        this.Hb = a;
        this.b = b
    }

    v(rn, mn);
    function sn(a, b, c, d) {
        rn.call(this, a, b);
        this.g = c;
        this.a = d
    }

    v(sn, rn);
    function tn(a, b, c) {
        sn.call(this, "PropertyIsEqualTo", a, b, c)
    }

    v(tn, sn);
    function un(a, b) {
        sn.call(this, "PropertyIsGreaterThan", a, b)
    }

    v(un, sn);
    function vn(a, b) {
        sn.call(this, "PropertyIsGreaterThanOrEqualTo", a, b)
    }

    v(vn, sn);
    function wn(a, b, c, d) {
        this.Hb = a;
        this.geometryName = b || "the_geom";
        this.geometry = c;
        this.srsName = d
    }

    v(wn, mn);
    function xn(a, b, c) {
        wn.call(this, "Intersects", a, b, c)
    }

    v(xn, wn);
    function yn(a, b, c) {
        rn.call(this, "PropertyIsBetween", a);
        this.a = b;
        this.g = c
    }

    v(yn, rn);
    function zn(a, b, c, d, e, f) {
        rn.call(this, "PropertyIsLike", a);
        this.f = b;
        this.i = void 0 !== c ? c : "*";
        this.c = void 0 !== d ? d : ".";
        this.g = void 0 !== e ? e : "!";
        this.a = f
    }

    v(zn, rn);
    function An(a) {
        rn.call(this, "PropertyIsNull", a)
    }

    v(An, rn);
    function Bn(a, b) {
        sn.call(this, "PropertyIsLessThan", a, b)
    }

    v(Bn, sn);
    function Cn(a, b) {
        sn.call(this, "PropertyIsLessThanOrEqualTo", a, b)
    }

    v(Cn, sn);
    function Dn(a) {
        this.Hb = "Not";
        this.condition = a
    }

    v(Dn, nn);
    function En(a, b, c) {
        sn.call(this, "PropertyIsNotEqualTo", a, b, c)
    }

    v(En, sn);
    function Fn(a, b) {
        on.call(this, "Or", a, b)
    }

    v(Fn, on);
    function Gn(a, b, c) {
        wn.call(this, "Within", a, b, c)
    }

    v(Gn, wn);
    function Hn(a, b) {
        return new pn(a, b)
    }

    function In(a, b, c) {
        return new qn(a, b, c)
    };
    function Jn(a) {
        Mc.call(this);
        this.f = a ? a : null;
        Kn(this)
    }

    v(Jn, Mc);
    function Ln(a) {
        var b = [], c, d;
        c = 0;
        for (d = a.length; c < d; ++c)b.push(a[c].clone());
        return b
    }

    function Mn(a) {
        var b, c;
        if (a.f)for (b = 0, c = a.f.length; b < c; ++b)Fa(a.f[b], "change", a.v, a)
    }

    function Kn(a) {
        var b, c;
        if (a.f)for (b = 0, c = a.f.length; b < c; ++b)w(a.f[b], "change", a.v, a)
    }

    k = Jn.prototype;
    k.clone = function () {
        var a = new Jn(null);
        a.Zh(this.f);
        return a
    };
    k.vb = function (a, b, c, d) {
        if (d < Fb(this.D(), a, b))return d;
        var e = this.f, f, g;
        f = 0;
        for (g = e.length; f < g; ++f)d = e[f].vb(a, b, c, d);
        return d
    };
    k.Ac = function (a, b) {
        var c = this.f, d, e;
        d = 0;
        for (e = c.length; d < e; ++d)if (c[d].Ac(a, b))return !0;
        return !1
    };
    k.Qd = function (a) {
        Kb(Infinity, Infinity, -Infinity, -Infinity, a);
        for (var b = this.f, c = 0, d = b.length; c < d; ++c)Pb(a, b[c].D());
        return a
    };
    k.cf = function () {
        return Ln(this.f)
    };
    k.pd = function (a) {
        this.o != this.g && (va(this.i), this.j = 0, this.o = this.g);
        if (0 > a || 0 !== this.j && a < this.j)return this;
        var b = a.toString();
        if (this.i.hasOwnProperty(b))return this.i[b];
        var c = [], d = this.f, e = !1, f, g;
        f = 0;
        for (g = d.length; f < g; ++f) {
            var h = d[f], l = h.pd(a);
            c.push(l);
            l !== h && (e = !0)
        }
        if (e)return a = new Jn(null), Mn(a), a.f = c, Kn(a), a.v(), this.i[b] = a;
        this.j = a;
        return this
    };
    k.X = function () {
        return "GeometryCollection"
    };
    k.Oa = function (a) {
        var b = this.f, c, d;
        c = 0;
        for (d = b.length; c < d; ++c)if (b[c].Oa(a))return !0;
        return !1
    };
    k.rotate = function (a, b) {
        for (var c = this.f, d = 0, e = c.length; d < e; ++d)c[d].rotate(a, b);
        this.v()
    };
    k.scale = function (a, b, c) {
        c || (c = ac(this.D()));
        for (var d = this.f, e = 0, f = d.length; e < f; ++e)d[e].scale(a, b, c);
        this.v()
    };
    k.Zh = function (a) {
        a = Ln(a);
        Mn(this);
        this.f = a;
        Kn(this);
        this.v()
    };
    k.oc = function (a) {
        var b = this.f, c, d;
        c = 0;
        for (d = b.length; c < d; ++c)b[c].oc(a);
        this.v()
    };
    k.Pc = function (a, b) {
        var c = this.f, d, e;
        d = 0;
        for (e = c.length; d < e; ++d)c[d].Pc(a, b);
        this.v()
    };
    k.la = function () {
        Mn(this);
        Mc.prototype.la.call(this)
    };
    function Nn(a) {
        a = a ? a : {};
        Tm.call(this);
        this.defaultDataProjection = oc(a.defaultDataProjection ? a.defaultDataProjection : "EPSG:4326");
        a.featureProjection && (this.j = oc(a.featureProjection));
        this.b = a.geometryName
    }

    v(Nn, Xm);
    function On(a, b) {
        return a ? Wm((0, Pn[a.type])(a), !1, b) : null
    }

    function Qn(a, b) {
        return (0, Rn[a.X()])(Wm(a, !0, b), b)
    }

    var Pn = {
        Point: function (a) {
            return new B(a.coordinates)
        }, LineString: function (a) {
            return new P(a.coordinates)
        }, Polygon: function (a) {
            return new C(a.coordinates)
        }, MultiPoint: function (a) {
            return new S(a.coordinates)
        }, MultiLineString: function (a) {
            return new Q(a.coordinates)
        }, MultiPolygon: function (a) {
            return new T(a.coordinates)
        }, GeometryCollection: function (a, b) {
            var c = a.geometries.map(function (a) {
                return On(a, b)
            });
            return new Jn(c)
        }
    }, Rn = {
        Point: function (a) {
            return {type: "Point", coordinates: a.Y()}
        }, LineString: function (a) {
            return {
                type: "LineString",
                coordinates: a.Y()
            }
        }, Polygon: function (a, b) {
            var c;
            b && (c = b.rightHanded);
            return {type: "Polygon", coordinates: a.Y(c)}
        }, MultiPoint: function (a) {
            return {type: "MultiPoint", coordinates: a.Y()}
        }, MultiLineString: function (a) {
            return {type: "MultiLineString", coordinates: a.Y()}
        }, MultiPolygon: function (a, b) {
            var c;
            b && (c = b.rightHanded);
            return {type: "MultiPolygon", coordinates: a.Y(c)}
        }, GeometryCollection: function (a, b) {
            return {
                type: "GeometryCollection", geometries: a.f.map(function (a) {
                    var d = ua({}, b);
                    delete d.featureProjection;
                    return Qn(a,
                        d)
                })
            }
        }, Circle: function () {
            return {type: "GeometryCollection", geometries: []}
        }
    };
    k = Nn.prototype;
    k.Vc = function (a, b) {
        var c;
        c = "Feature" === a.type ? a : {type: "Feature", geometry: a};
        var d = On(c.geometry, b), e = new I;
        this.b && e.Dc(this.b);
        e.Pa(d);
        void 0 !== c.id && e.Wb(c.id);
        c.properties && e.H(c.properties);
        return e
    };
    k.Gf = function (a, b) {
        var c;
        if ("FeatureCollection" === a.type) {
            c = [];
            var d = a.features, e, f;
            e = 0;
            for (f = d.length; e < f; ++e)c.push(this.Vc(d[e], b))
        } else c = [this.Vc(a, b)];
        return c
    };
    k.Ih = function (a, b) {
        return On(a, b)
    };
    k.Oh = function (a) {
        a = a.crs;
        var b;
        a ? "name" == a.type ? b = oc(a.properties.name) : "EPSG" == a.type ? b = oc("EPSG:" + a.properties.code) : ha(!1, 36) : b = this.defaultDataProjection;
        return b
    };
    k.Zc = function (a, b) {
        b = Vm(this, b);
        var c = {type: "Feature"}, d = a.a;
        void 0 !== d && (c.id = d);
        (d = a.V()) ? c.geometry = Qn(d, b) : c.geometry = null;
        d = a.N();
        delete d[a.f];
        xa(d) ? c.properties = null : c.properties = d;
        return c
    };
    k.Ge = function (a, b) {
        b = Vm(this, b);
        var c = [], d, e;
        d = 0;
        for (e = a.length; d < e; ++d)c.push(this.Zc(a[d], b));
        return {type: "FeatureCollection", features: c}
    };
    k.He = function (a, b) {
        return Qn(a, Vm(this, b))
    };
    function Sn() {
        this.f = new XMLSerializer;
        Tm.call(this)
    }

    v(Sn, Tm);
    k = Sn.prototype;
    k.X = function () {
        return "xml"
    };
    k.Ub = function (a, b) {
        if (Cm(a))return Tn(this, a, b);
        if (Dm(a))return this.Gh(a, b);
        if ("string" === typeof a) {
            var c = Em(a);
            return Tn(this, c, b)
        }
        return null
    };
    function Tn(a, b, c) {
        a = Un(a, b, c);
        return 0 < a.length ? a[0] : null
    }

    k.Ha = function (a, b) {
        if (Cm(a))return Un(this, a, b);
        if (Dm(a))return this.kc(a, b);
        if ("string" === typeof a) {
            var c = Em(a);
            return Un(this, c, b)
        }
        return []
    };
    function Un(a, b, c) {
        var d = [];
        for (b = b.firstChild; b; b = b.nextSibling)b.nodeType == Node.ELEMENT_NODE && ab(d, a.kc(b, c));
        return d
    }

    k.Wc = function (a, b) {
        if (Cm(a))return this.u(a, b);
        if (Dm(a)) {
            var c = this.xe(a, [Um(this, a, b ? b : {})]);
            return c ? c : null
        }
        return "string" === typeof a ? (c = Em(a), this.u(c, b)) : null
    };
    k.Sa = function (a) {
        return Cm(a) ? this.Lf(a) : Dm(a) ? this.Ae(a) : "string" === typeof a ? (a = Em(a), this.Lf(a)) : null
    };
    k.Lf = function () {
        return this.defaultDataProjection
    };
    k.Ae = function () {
        return this.defaultDataProjection
    };
    k.Gd = function (a, b) {
        var c = this.B(a, b);
        return this.f.serializeToString(c)
    };
    k.$b = function (a, b) {
        var c = this.a(a, b);
        return this.f.serializeToString(c)
    };
    k.$c = function (a, b) {
        var c = this.T(a, b);
        return this.f.serializeToString(c)
    };
    function Vn(a) {
        a = a ? a : {};
        this.featureType = a.featureType;
        this.featureNS = a.featureNS;
        this.srsName = a.srsName;
        this.schemaLocation = "";
        this.b = {};
        this.b["http://www.opengis.net/gml"] = {
            featureMember: Hm(Vn.prototype.yd),
            featureMembers: Hm(Vn.prototype.yd)
        };
        Sn.call(this)
    }

    v(Vn, Sn);
    var Wn = /^[\s\xa0]*$/;
    k = Vn.prototype;
    k.yd = function (a, b) {
        var c = a.localName, d = null;
        if ("FeatureCollection" == c) "http://www.opengis.net/wfs" === a.namespaceURI ? d = O([], this.b, a, b, this) : d = O(null, this.b, a, b, this); else if ("featureMembers" == c || "featureMember" == c) {
            var e = b[0], f = e.featureType, g = e.featureNS, h, l;
            if (!f && a.childNodes) {
                f = [];
                g = {};
                h = 0;
                for (l = a.childNodes.length; h < l; ++h) {
                    var m = a.childNodes[h];
                    if (1 === m.nodeType) {
                        var n = m.nodeName.split(":").pop();
                        if (-1 === f.indexOf(n)) {
                            var p = "", q = 0, m = m.namespaceURI, r;
                            for (r in g) {
                                if (g[r] === m) {
                                    p = r;
                                    break
                                }
                                ++q
                            }
                            p ||
                            (p = "p" + q, g[p] = m);
                            f.push(p + ":" + n)
                        }
                    }
                }
                "featureMember" != c && (e.featureType = f, e.featureNS = g)
            }
            "string" === typeof g && (h = g, g = {}, g.p0 = h);
            var e = {}, f = Array.isArray(f) ? f : [f], u;
            for (u in g) {
                n = {};
                h = 0;
                for (l = f.length; h < l; ++h)(-1 === f[h].indexOf(":") ? "p0" : f[h].split(":")[0]) === u && (n[f[h].split(":").pop()] = "featureMembers" == c ? Gm(this.Ff, this) : Hm(this.Ff, this));
                e[g[u]] = n
            }
            "featureMember" == c ? d = O(void 0, e, a, b) : d = O([], e, a, b)
        }
        null === d && (d = []);
        return d
    };
    k.xe = function (a, b) {
        var c = b[0];
        c.srsName = a.firstElementChild.getAttribute("srsName");
        var d = O(null, this.Yf, a, b, this);
        if (d)return Wm(d, !1, c)
    };
    k.Ff = function (a, b) {
        var c, d;
        (d = a.getAttribute("fid")) || (d = a.getAttributeNS("http://www.opengis.net/gml", "id") || "");
        var e = {}, f;
        for (c = a.firstElementChild; c; c = c.nextElementSibling) {
            var g = c.localName;
            if (0 === c.childNodes.length || 1 === c.childNodes.length && (3 === c.firstChild.nodeType || 4 === c.firstChild.nodeType)) {
                var h = Am(c, !1);
                Wn.test(h) && (h = void 0);
                e[g] = h
            } else"boundedBy" !== g && (f = g), e[g] = this.xe(c, b)
        }
        c = new I(e);
        f && c.Dc(f);
        d && c.Wb(d);
        return c
    };
    k.Nh = function (a, b) {
        var c = this.we(a, b);
        if (c) {
            var d = new B(null);
            d.aa("XYZ", c);
            return d
        }
    };
    k.Lh = function (a, b) {
        var c = O([], this.Ji, a, b, this);
        if (c)return new S(c)
    };
    k.Kh = function (a, b) {
        var c = O([], this.Ii, a, b, this);
        if (c) {
            var d = new Q(null);
            bn(d, c);
            return d
        }
    };
    k.Mh = function (a, b) {
        var c = O([], this.Ki, a, b, this);
        if (c) {
            var d = new T(null);
            dn(d, c);
            return d
        }
    };
    k.Dh = function (a, b) {
        Om(this.Ni, a, b, this)
    };
    k.Mg = function (a, b) {
        Om(this.Gi, a, b, this)
    };
    k.Eh = function (a, b) {
        Om(this.Oi, a, b, this)
    };
    k.ye = function (a, b) {
        var c = this.we(a, b);
        if (c) {
            var d = new P(null);
            d.aa("XYZ", c);
            return d
        }
    };
    k.oo = function (a, b) {
        var c = O(null, this.Id, a, b, this);
        if (c)return c
    };
    k.Jh = function (a, b) {
        var c = this.we(a, b);
        if (c) {
            var d = new id(null);
            jd(d, "XYZ", c);
            return d
        }
    };
    k.ze = function (a, b) {
        var c = O([null], this.Ke, a, b, this);
        if (c && c[0]) {
            var d = new C(null), e = c[0], f = [e.length], g, h;
            g = 1;
            for (h = c.length; g < h; ++g)ab(e, c[g]), f.push(e.length);
            d.aa("XYZ", e, f);
            return d
        }
    };
    k.we = function (a, b) {
        return O(null, this.Id, a, b, this)
    };
    k.Ji = {"http://www.opengis.net/gml": {pointMember: Gm(Vn.prototype.Dh), pointMembers: Gm(Vn.prototype.Dh)}};
    k.Ii = {
        "http://www.opengis.net/gml": {
            lineStringMember: Gm(Vn.prototype.Mg),
            lineStringMembers: Gm(Vn.prototype.Mg)
        }
    };
    k.Ki = {"http://www.opengis.net/gml": {polygonMember: Gm(Vn.prototype.Eh), polygonMembers: Gm(Vn.prototype.Eh)}};
    k.Ni = {"http://www.opengis.net/gml": {Point: Gm(Vn.prototype.we)}};
    k.Gi = {"http://www.opengis.net/gml": {LineString: Gm(Vn.prototype.ye)}};
    k.Oi = {"http://www.opengis.net/gml": {Polygon: Gm(Vn.prototype.ze)}};
    k.Jd = {"http://www.opengis.net/gml": {LinearRing: Hm(Vn.prototype.oo)}};
    k.kc = function (a, b) {
        var c = {featureType: this.featureType, featureNS: this.featureNS};
        b && ua(c, Um(this, a, b));
        return this.yd(a, [c]) || []
    };
    k.Ae = function (a) {
        return oc(this.srsName ? this.srsName : a.firstElementChild.getAttribute("srsName"))
    };
    function Xn(a) {
        a = Am(a, !1);
        return Yn(a)
    }

    function Yn(a) {
        if (a = /^\s*(true|1)|(false|0)\s*$/.exec(a))return void 0 !== a[1] || !1
    }

    function Zn(a) {
        a = Am(a, !1);
        a = Date.parse(a);
        return isNaN(a) ? void 0 : a / 1E3
    }

    function $n(a) {
        a = Am(a, !1);
        return ao(a)
    }

    function ao(a) {
        if (a = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(a))return parseFloat(a[1])
    }

    function bo(a) {
        a = Am(a, !1);
        return co(a)
    }

    function co(a) {
        if (a = /^\s*(\d+)\s*$/.exec(a))return parseInt(a[1], 10)
    }

    function U(a) {
        return Am(a, !1).trim()
    }

    function eo(a, b) {
        fo(a, b ? "1" : "0")
    }

    function go(a, b) {
        a.appendChild(ym.createTextNode(b.toPrecision()))
    }

    function ho(a, b) {
        a.appendChild(ym.createTextNode(b.toString()))
    }

    function fo(a, b) {
        a.appendChild(ym.createTextNode(b))
    };
    function io(a) {
        a = a ? a : {};
        Vn.call(this, a);
        this.s = void 0 !== a.surface ? a.surface : !1;
        this.i = void 0 !== a.curve ? a.curve : !1;
        this.l = void 0 !== a.multiCurve ? a.multiCurve : !0;
        this.o = void 0 !== a.multiSurface ? a.multiSurface : !0;
        this.schemaLocation = a.schemaLocation ? a.schemaLocation : "http://www.opengis.net/gml http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd"
    }

    v(io, Vn);
    k = io.prototype;
    k.so = function (a, b) {
        var c = O([], this.Hi, a, b, this);
        if (c) {
            var d = new Q(null);
            bn(d, c);
            return d
        }
    };
    k.to = function (a, b) {
        var c = O([], this.Li, a, b, this);
        if (c) {
            var d = new T(null);
            dn(d, c);
            return d
        }
    };
    k.pg = function (a, b) {
        Om(this.Di, a, b, this)
    };
    k.ni = function (a, b) {
        Om(this.Si, a, b, this)
    };
    k.wo = function (a, b) {
        return O([null], this.Mi, a, b, this)
    };
    k.yo = function (a, b) {
        return O([null], this.Ri, a, b, this)
    };
    k.xo = function (a, b) {
        return O([null], this.Ke, a, b, this)
    };
    k.ro = function (a, b) {
        return O([null], this.Id, a, b, this)
    };
    k.al = function (a, b) {
        var c = O(void 0, this.Jd, a, b, this);
        c && b[b.length - 1].push(c)
    };
    k.vj = function (a, b) {
        var c = O(void 0, this.Jd, a, b, this);
        c && (b[b.length - 1][0] = c)
    };
    k.Ph = function (a, b) {
        var c = O([null], this.Ti, a, b, this);
        if (c && c[0]) {
            var d = new C(null), e = c[0], f = [e.length], g, h;
            g = 1;
            for (h = c.length; g < h; ++g)ab(e, c[g]), f.push(e.length);
            d.aa("XYZ", e, f);
            return d
        }
    };
    k.Fh = function (a, b) {
        var c = O([null], this.Ei, a, b, this);
        if (c) {
            var d = new P(null);
            d.aa("XYZ", c);
            return d
        }
    };
    k.no = function (a, b) {
        var c = O([null], this.Fi, a, b, this);
        return Kb(c[1][0], c[1][1], c[2][0], c[2][1])
    };
    k.po = function (a, b) {
        for (var c = Am(a, !1), d = /^\s*([+\-]?\d*\.?\d+(?:[eE][+\-]?\d+)?)\s*/, e = [], f; f = d.exec(c);)e.push(parseFloat(f[1])), c = c.substr(f[0].length);
        if ("" === c) {
            c = b[0].srsName;
            d = "enu";
            c && (d = oc(c).b);
            if ("neu" === d)for (c = 0, d = e.length; c < d; c += 3)f = e[c], e[c] = e[c + 1], e[c + 1] = f;
            c = e.length;
            2 == c && e.push(0);
            return 0 === c ? void 0 : e
        }
    };
    k.Jf = function (a, b) {
        var c = Am(a, !1).replace(/^\s*|\s*$/g, ""), d = b[0].srsName, e = a.parentNode.getAttribute("srsDimension"), f = "enu";
        d && (f = oc(d).b);
        c = c.split(/\s+/);
        d = 2;
        a.getAttribute("srsDimension") ? d = co(a.getAttribute("srsDimension")) : a.getAttribute("dimension") ? d = co(a.getAttribute("dimension")) : e && (d = co(e));
        for (var g, h, l = [], m = 0, n = c.length; m < n; m += d)e = parseFloat(c[m]), g = parseFloat(c[m + 1]), h = 3 === d ? parseFloat(c[m + 2]) : 0, "en" === f.substr(0, 2) ? l.push(e, g, h) : l.push(g, e, h);
        return l
    };
    k.Id = {"http://www.opengis.net/gml": {pos: Hm(io.prototype.po), posList: Hm(io.prototype.Jf)}};
    k.Ke = {"http://www.opengis.net/gml": {interior: io.prototype.al, exterior: io.prototype.vj}};
    k.Yf = {
        "http://www.opengis.net/gml": {
            Point: Hm(Vn.prototype.Nh),
            MultiPoint: Hm(Vn.prototype.Lh),
            LineString: Hm(Vn.prototype.ye),
            MultiLineString: Hm(Vn.prototype.Kh),
            LinearRing: Hm(Vn.prototype.Jh),
            Polygon: Hm(Vn.prototype.ze),
            MultiPolygon: Hm(Vn.prototype.Mh),
            Surface: Hm(io.prototype.Ph),
            MultiSurface: Hm(io.prototype.to),
            Curve: Hm(io.prototype.Fh),
            MultiCurve: Hm(io.prototype.so),
            Envelope: Hm(io.prototype.no)
        }
    };
    k.Hi = {"http://www.opengis.net/gml": {curveMember: Gm(io.prototype.pg), curveMembers: Gm(io.prototype.pg)}};
    k.Li = {"http://www.opengis.net/gml": {surfaceMember: Gm(io.prototype.ni), surfaceMembers: Gm(io.prototype.ni)}};
    k.Di = {"http://www.opengis.net/gml": {LineString: Gm(Vn.prototype.ye), Curve: Gm(io.prototype.Fh)}};
    k.Si = {"http://www.opengis.net/gml": {Polygon: Gm(Vn.prototype.ze), Surface: Gm(io.prototype.Ph)}};
    k.Ti = {"http://www.opengis.net/gml": {patches: Hm(io.prototype.wo)}};
    k.Ei = {"http://www.opengis.net/gml": {segments: Hm(io.prototype.yo)}};
    k.Fi = {"http://www.opengis.net/gml": {lowerCorner: Gm(io.prototype.Jf), upperCorner: Gm(io.prototype.Jf)}};
    k.Mi = {"http://www.opengis.net/gml": {PolygonPatch: Hm(io.prototype.xo)}};
    k.Ri = {"http://www.opengis.net/gml": {LineStringSegment: Hm(io.prototype.ro)}};
    function jo(a, b, c) {
        c = c[c.length - 1].srsName;
        b = b.Y();
        for (var d = b.length, e = Array(d), f, g = 0; g < d; ++g) {
            f = b[g];
            var h = g, l = "enu";
            c && (l = oc(c).b);
            e[h] = "en" === l.substr(0, 2) ? f[0] + " " + f[1] : f[1] + " " + f[0]
        }
        fo(a, e.join(" "))
    }

    k.zi = function (a, b, c) {
        var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        d = zm(a.namespaceURI, "pos");
        a.appendChild(d);
        c = c[c.length - 1].srsName;
        a = "enu";
        c && (a = oc(c).b);
        b = b.Y();
        fo(d, "en" === a.substr(0, 2) ? b[0] + " " + b[1] : b[1] + " " + b[0])
    };
    var ko = {"http://www.opengis.net/gml": {lowerCorner: M(fo), upperCorner: M(fo)}};
    k = io.prototype;
    k.jp = function (a, b, c) {
        var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        Pm({node: a}, ko, Mm, [b[0] + " " + b[1], b[2] + " " + b[3]], c, ["lowerCorner", "upperCorner"], this)
    };
    k.wi = function (a, b, c) {
        var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        d = zm(a.namespaceURI, "posList");
        a.appendChild(d);
        jo(d, b, c)
    };
    k.Qi = function (a, b) {
        var c = b[b.length - 1], d = c.node, e = c.exteriorWritten;
        void 0 === e && (c.exteriorWritten = !0);
        return zm(d.namespaceURI, void 0 !== e ? "interior" : "exterior")
    };
    k.Ie = function (a, b, c) {
        var d = c[c.length - 1].srsName;
        "PolygonPatch" !== a.nodeName && d && a.setAttribute("srsName", d);
        "Polygon" === a.nodeName || "PolygonPatch" === a.nodeName ? (b = b.Wd(), Pm({
            node: a,
            srsName: d
        }, lo, this.Qi, b, c, void 0, this)) : "Surface" === a.nodeName && (d = zm(a.namespaceURI, "patches"), a.appendChild(d), a = zm(d.namespaceURI, "PolygonPatch"), d.appendChild(a), this.Ie(a, b, c))
    };
    k.Ee = function (a, b, c) {
        var d = c[c.length - 1].srsName;
        "LineStringSegment" !== a.nodeName && d && a.setAttribute("srsName", d);
        "LineString" === a.nodeName || "LineStringSegment" === a.nodeName ? (d = zm(a.namespaceURI, "posList"), a.appendChild(d), jo(d, b, c)) : "Curve" === a.nodeName && (d = zm(a.namespaceURI, "segments"), a.appendChild(d), a = zm(d.namespaceURI, "LineStringSegment"), d.appendChild(a), this.Ee(a, b, c))
    };
    k.yi = function (a, b, c) {
        var d = c[c.length - 1], e = d.srsName, d = d.surface;
        e && a.setAttribute("srsName", e);
        b = b.Xd();
        Pm({node: a, srsName: e, surface: d}, mo, this.c, b, c, void 0, this)
    };
    k.kp = function (a, b, c) {
        var d = c[c.length - 1].srsName;
        d && a.setAttribute("srsName", d);
        b = b.je();
        Pm({node: a, srsName: d}, no, Km("pointMember"), b, c, void 0, this)
    };
    k.xi = function (a, b, c) {
        var d = c[c.length - 1], e = d.srsName, d = d.curve;
        e && a.setAttribute("srsName", e);
        b = b.od();
        Pm({node: a, srsName: e, curve: d}, oo, this.c, b, c, void 0, this)
    };
    k.Ai = function (a, b, c) {
        var d = zm(a.namespaceURI, "LinearRing");
        a.appendChild(d);
        this.wi(d, b, c)
    };
    k.Bi = function (a, b, c) {
        var d = this.g(b, c);
        d && (a.appendChild(d), this.Ie(d, b, c))
    };
    k.lp = function (a, b, c) {
        var d = zm(a.namespaceURI, "Point");
        a.appendChild(d);
        this.zi(d, b, c)
    };
    k.vi = function (a, b, c) {
        var d = this.g(b, c);
        d && (a.appendChild(d), this.Ee(d, b, c))
    };
    k.ad = function (a, b, c) {
        var d = c[c.length - 1], e = ua({}, d);
        e.node = a;
        var f;
        Array.isArray(b) ? d.dataProjection ? f = Lc(b, d.featureProjection, d.dataProjection) : f = b : f = Wm(b, !0, d);
        Pm(e, po, this.g, [f], c, void 0, this)
    };
    k.ti = function (a, b, c) {
        var d = b.a;
        d && a.setAttribute("fid", d);
        var d = c[c.length - 1], e = d.featureNS, f = b.f;
        d.Cc || (d.Cc = {}, d.Cc[e] = {});
        var g = b.N();
        b = [];
        var h = [], l;
        for (l in g) {
            var m = g[l];
            null !== m && (b.push(l), h.push(m), l == f || m instanceof Mc ? l in d.Cc[e] || (d.Cc[e][l] = M(this.ad, this)) : l in d.Cc[e] || (d.Cc[e][l] = M(fo)))
        }
        l = ua({}, d);
        l.node = a;
        Pm(l, d.Cc, Km(void 0, e), h, c, b)
    };
    var mo = {
        "http://www.opengis.net/gml": {
            surfaceMember: M(io.prototype.Bi),
            polygonMember: M(io.prototype.Bi)
        }
    }, no = {"http://www.opengis.net/gml": {pointMember: M(io.prototype.lp)}}, oo = {
        "http://www.opengis.net/gml": {
            lineStringMember: M(io.prototype.vi),
            curveMember: M(io.prototype.vi)
        }
    }, lo = {"http://www.opengis.net/gml": {exterior: M(io.prototype.Ai), interior: M(io.prototype.Ai)}}, po = {
        "http://www.opengis.net/gml": {
            Curve: M(io.prototype.Ee),
            MultiCurve: M(io.prototype.xi),
            Point: M(io.prototype.zi),
            MultiPoint: M(io.prototype.kp),
            LineString: M(io.prototype.Ee),
            MultiLineString: M(io.prototype.xi),
            LinearRing: M(io.prototype.wi),
            Polygon: M(io.prototype.Ie),
            MultiPolygon: M(io.prototype.yi),
            Surface: M(io.prototype.Ie),
            MultiSurface: M(io.prototype.yi),
            Envelope: M(io.prototype.jp)
        }
    }, qo = {
        MultiLineString: "lineStringMember",
        MultiCurve: "curveMember",
        MultiPolygon: "polygonMember",
        MultiSurface: "surfaceMember"
    };
    io.prototype.c = function (a, b) {
        return zm("http://www.opengis.net/gml", qo[b[b.length - 1].node.nodeName])
    };
    io.prototype.g = function (a, b) {
        var c = b[b.length - 1], d = c.multiSurface, e = c.surface, f = c.curve, c = c.multiCurve, g;
        Array.isArray(a) ? g = "Envelope" : (g = a.X(), "MultiPolygon" === g && !0 === d ? g = "MultiSurface" : "Polygon" === g && !0 === e ? g = "Surface" : "LineString" === g && !0 === f ? g = "Curve" : "MultiLineString" === g && !0 === c && (g = "MultiCurve"));
        return zm("http://www.opengis.net/gml", g)
    };
    io.prototype.T = function (a, b) {
        b = Vm(this, b);
        var c = zm("http://www.opengis.net/gml", "geom"), d = {
            node: c,
            srsName: this.srsName,
            curve: this.i,
            surface: this.s,
            multiSurface: this.o,
            multiCurve: this.l
        };
        b && ua(d, b);
        this.ad(c, a, [d]);
        return c
    };
    io.prototype.a = function (a, b) {
        b = Vm(this, b);
        var c = zm("http://www.opengis.net/gml", "featureMembers");
        c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.schemaLocation);
        var d = {
            srsName: this.srsName,
            curve: this.i,
            surface: this.s,
            multiSurface: this.o,
            multiCurve: this.l,
            featureNS: this.featureNS,
            featureType: this.featureType
        };
        b && ua(d, b);
        var d = [d], e = d[d.length - 1], f = e.featureType, g = e.featureNS, h = {};
        h[g] = {};
        h[g][f] = M(this.ti, this);
        e = ua({}, e);
        e.node = c;
        Pm(e, h, Km(f, g), a, d);
        return c
    };
    function ro(a) {
        a = a ? a : {};
        Vn.call(this, a);
        this.b["http://www.opengis.net/gml"].featureMember = Gm(Vn.prototype.yd);
        this.schemaLocation = a.schemaLocation ? a.schemaLocation : "http://www.opengis.net/gml http://schemas.opengis.net/gml/2.1.2/feature.xsd"
    }

    v(ro, Vn);
    k = ro.prototype;
    k.Hh = function (a, b) {
        var c = Am(a, !1).replace(/^\s*|\s*$/g, ""), d = b[0].srsName, e = a.parentNode.getAttribute("srsDimension"), f = "enu";
        d && (d = oc(d)) && (f = d.b);
        c = c.split(/[\s,]+/);
        d = 2;
        a.getAttribute("srsDimension") ? d = co(a.getAttribute("srsDimension")) : a.getAttribute("dimension") ? d = co(a.getAttribute("dimension")) : e && (d = co(e));
        for (var g, h, l = [], m = 0, n = c.length; m < n; m += d)e = parseFloat(c[m]), g = parseFloat(c[m + 1]), h = 3 === d ? parseFloat(c[m + 2]) : 0, "en" === f.substr(0, 2) ? l.push(e, g, h) : l.push(g, e, h);
        return l
    };
    k.lo = function (a, b) {
        var c = O([null], this.Ci, a, b, this);
        return Kb(c[1][0], c[1][1], c[1][3], c[1][4])
    };
    k.Zk = function (a, b) {
        var c = O(void 0, this.Jd, a, b, this);
        c && b[b.length - 1].push(c)
    };
    k.Tn = function (a, b) {
        var c = O(void 0, this.Jd, a, b, this);
        c && (b[b.length - 1][0] = c)
    };
    k.Id = {"http://www.opengis.net/gml": {coordinates: Hm(ro.prototype.Hh)}};
    k.Ke = {"http://www.opengis.net/gml": {innerBoundaryIs: ro.prototype.Zk, outerBoundaryIs: ro.prototype.Tn}};
    k.Ci = {"http://www.opengis.net/gml": {coordinates: Gm(ro.prototype.Hh)}};
    k.Yf = {
        "http://www.opengis.net/gml": {
            Point: Hm(Vn.prototype.Nh),
            MultiPoint: Hm(Vn.prototype.Lh),
            LineString: Hm(Vn.prototype.ye),
            MultiLineString: Hm(Vn.prototype.Kh),
            LinearRing: Hm(Vn.prototype.Jh),
            Polygon: Hm(Vn.prototype.ze),
            MultiPolygon: Hm(Vn.prototype.Mh),
            Box: Hm(ro.prototype.lo)
        }
    };
    function so(a) {
        a = a ? a : {};
        Sn.call(this);
        this.defaultDataProjection = oc("EPSG:4326");
        this.b = a.readExtensions
    }

    v(so, Sn);
    var to = [null, "http://www.topografix.com/GPX/1/0", "http://www.topografix.com/GPX/1/1"];

    function uo(a, b, c) {
        a.push(parseFloat(b.getAttribute("lon")), parseFloat(b.getAttribute("lat")));
        "ele" in c ? (a.push(c.ele), delete c.ele) : a.push(0);
        "time" in c ? (a.push(c.time), delete c.time) : a.push(0);
        return a
    }

    function vo(a, b) {
        var c = b[b.length - 1], d = a.getAttribute("href");
        null !== d && (c.link = d);
        Om(wo, a, b)
    }

    function xo(a, b) {
        b[b.length - 1].extensionsNode_ = a
    }

    function yo(a, b) {
        var c = b[0], d = O({flatCoordinates: []}, zo, a, b);
        if (d) {
            var e = d.flatCoordinates;
            delete d.flatCoordinates;
            var f = new P(null);
            f.aa("XYZM", e);
            Wm(f, !1, c);
            c = new I(f);
            c.H(d);
            return c
        }
    }

    function Ao(a, b) {
        var c = b[0], d = O({flatCoordinates: [], ends: []}, Bo, a, b);
        if (d) {
            var e = d.flatCoordinates;
            delete d.flatCoordinates;
            var f = d.ends;
            delete d.ends;
            var g = new Q(null);
            g.aa("XYZM", e, f);
            Wm(g, !1, c);
            c = new I(g);
            c.H(d);
            return c
        }
    }

    function Co(a, b) {
        var c = b[0], d = O({}, Do, a, b);
        if (d) {
            var e = uo([], a, d), e = new B(e, "XYZM");
            Wm(e, !1, c);
            c = new I(e);
            c.H(d);
            return c
        }
    }

    var Eo = {rte: yo, trk: Ao, wpt: Co}, Fo = N(to, {
            rte: Gm(yo),
            trk: Gm(Ao),
            wpt: Gm(Co)
        }), wo = N(to, {text: J(U, "linkText"), type: J(U, "linkType")}), zo = N(to, {
            name: J(U),
            cmt: J(U),
            desc: J(U),
            src: J(U),
            link: vo,
            number: J(bo),
            extensions: xo,
            type: J(U),
            rtept: function (a, b) {
                var c = O({}, Go, a, b);
                c && uo(b[b.length - 1].flatCoordinates, a, c)
            }
        }), Go = N(to, {ele: J($n), time: J(Zn)}), Bo = N(to, {
            name: J(U),
            cmt: J(U),
            desc: J(U),
            src: J(U),
            link: vo,
            number: J(bo),
            type: J(U),
            extensions: xo,
            trkseg: function (a, b) {
                var c = b[b.length - 1];
                Om(Ho, a, b);
                c.ends.push(c.flatCoordinates.length)
            }
        }),
        Ho = N(to, {
            trkpt: function (a, b) {
                var c = O({}, Io, a, b);
                c && uo(b[b.length - 1].flatCoordinates, a, c)
            }
        }), Io = N(to, {ele: J($n), time: J(Zn)}), Do = N(to, {
            ele: J($n),
            time: J(Zn),
            magvar: J($n),
            geoidheight: J($n),
            name: J(U),
            cmt: J(U),
            desc: J(U),
            src: J(U),
            link: vo,
            sym: J(U),
            type: J(U),
            fix: J(U),
            sat: J(bo),
            hdop: J($n),
            vdop: J($n),
            pdop: J($n),
            ageofdgpsdata: J($n),
            dgpsid: J(bo),
            extensions: xo
        });

    function Jo(a, b) {
        b || (b = []);
        for (var c = 0, d = b.length; c < d; ++c) {
            var e = b[c];
            if (a.b) {
                var f = e.get("extensionsNode_") || null;
                a.b(e, f)
            }
            e.set("extensionsNode_", void 0)
        }
    }

    so.prototype.Gh = function (a, b) {
        if (!Ya(to, a.namespaceURI))return null;
        var c = Eo[a.localName];
        if (!c)return null;
        c = c(a, [Um(this, a, b)]);
        if (!c)return null;
        Jo(this, [c]);
        return c
    };
    so.prototype.kc = function (a, b) {
        if (!Ya(to, a.namespaceURI))return [];
        if ("gpx" == a.localName) {
            var c = O([], Fo, a, [Um(this, a, b)]);
            if (c)return Jo(this, c), c
        }
        return []
    };
    function Ko(a, b, c) {
        a.setAttribute("href", b);
        b = c[c.length - 1].properties;
        Pm({node: a}, Lo, Mm, [b.linkText, b.linkType], c, Mo)
    }

    function No(a, b, c) {
        var d = c[c.length - 1], e = d.node.namespaceURI, f = d.properties;
        a.setAttributeNS(null, "lat", b[1]);
        a.setAttributeNS(null, "lon", b[0]);
        switch (d.geometryLayout) {
            case "XYZM":
                0 !== b[3] && (f.time = b[3]);
            case "XYZ":
                0 !== b[2] && (f.ele = b[2]);
                break;
            case "XYM":
                0 !== b[2] && (f.time = b[2])
        }
        b = "rtept" == a.nodeName ? Oo[e] : Po[e];
        d = Nm(f, b);
        Pm({node: a, properties: f}, Qo, Mm, d, c, b)
    }

    var Mo = ["text", "type"], Lo = N(to, {
            text: M(fo),
            type: M(fo)
        }), Ro = N(to, "name cmt desc src link number type rtept".split(" ")), So = N(to, {
            name: M(fo),
            cmt: M(fo),
            desc: M(fo),
            src: M(fo),
            link: M(Ko),
            number: M(ho),
            type: M(fo),
            rtept: Jm(M(No))
        }), Oo = N(to, ["ele", "time"]), To = N(to, "name cmt desc src link number type trkseg".split(" ")), Wo = N(to, {
            name: M(fo),
            cmt: M(fo),
            desc: M(fo),
            src: M(fo),
            link: M(Ko),
            number: M(ho),
            type: M(fo),
            trkseg: Jm(M(function (a, b, c) {
                Pm({node: a, geometryLayout: b.ia, properties: {}}, Uo, Vo, b.Y(), c)
            }))
        }), Vo = Km("trkpt"),
        Uo = N(to, {trkpt: M(No)}), Po = N(to, "ele time magvar geoidheight name cmt desc src link sym type fix sat hdop vdop pdop ageofdgpsdata dgpsid".split(" ")), Qo = N(to, {
            ele: M(go),
            time: M(function (a, b) {
                var c = new Date(1E3 * b);
                a.appendChild(ym.createTextNode(c.getUTCFullYear() + "-" + pb(c.getUTCMonth() + 1) + "-" + pb(c.getUTCDate()) + "T" + pb(c.getUTCHours()) + ":" + pb(c.getUTCMinutes()) + ":" + pb(c.getUTCSeconds()) + "Z"))
            }),
            magvar: M(go),
            geoidheight: M(go),
            name: M(fo),
            cmt: M(fo),
            desc: M(fo),
            src: M(fo),
            link: M(Ko),
            sym: M(fo),
            type: M(fo),
            fix: M(fo),
            sat: M(ho),
            hdop: M(go),
            vdop: M(go),
            pdop: M(go),
            ageofdgpsdata: M(go),
            dgpsid: M(ho)
        }), Xo = {Point: "wpt", LineString: "rte", MultiLineString: "trk"};

    function Yo(a, b) {
        var c = a.V();
        if (c && (c = Xo[c.X()]))return zm(b[b.length - 1].node.namespaceURI, c)
    }

    var Zo = N(to, {
        rte: M(function (a, b, c) {
            var d = c[0], e = b.N();
            a = {node: a, properties: e};
            if (b = b.V()) b = Wm(b, !0, d), a.geometryLayout = b.ia, e.rtept = b.Y();
            d = Ro[c[c.length - 1].node.namespaceURI];
            e = Nm(e, d);
            Pm(a, So, Mm, e, c, d)
        }), trk: M(function (a, b, c) {
            var d = c[0], e = b.N();
            a = {node: a, properties: e};
            if (b = b.V()) b = Wm(b, !0, d), e.trkseg = b.od();
            d = To[c[c.length - 1].node.namespaceURI];
            e = Nm(e, d);
            Pm(a, Wo, Mm, e, c, d)
        }), wpt: M(function (a, b, c) {
            var d = c[0], e = c[c.length - 1];
            e.properties = b.N();
            if (b = b.V()) b = Wm(b, !0, d), e.geometryLayout = b.ia, No(a, b.Y(),
                c)
        })
    });
    so.prototype.a = function (a, b) {
        b = Vm(this, b);
        var c = zm("http://www.topografix.com/GPX/1/1", "gpx");
        c.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
        c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", "http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd");
        c.setAttribute("version", "1.1");
        c.setAttribute("creator", "OpenLayers 3");
        Pm({node: c}, Zo, Yo, a, [b]);
        return c
    };
    function $o() {
        Tm.call(this)
    }

    v($o, Tm);
    function ap(a) {
        return "string" === typeof a ? a : ""
    }

    k = $o.prototype;
    k.X = function () {
        return "text"
    };
    k.Ub = function (a, b) {
        return this.xd(ap(a), Vm(this, b))
    };
    k.Ha = function (a, b) {
        return this.Hf(ap(a), Vm(this, b))
    };
    k.Wc = function (a, b) {
        return this.zd(ap(a), Vm(this, b))
    };
    k.Sa = function () {
        return this.defaultDataProjection
    };
    k.Gd = function (a, b) {
        return this.Fe(a, Vm(this, b))
    };
    k.$b = function (a, b) {
        return this.ui(a, Vm(this, b))
    };
    k.$c = function (a, b) {
        return this.Hd(a, Vm(this, b))
    };
    function bp(a) {
        a = a ? a : {};
        Tm.call(this);
        this.defaultDataProjection = oc("EPSG:4326");
        this.b = a.altitudeMode ? a.altitudeMode : cp
    }

    v(bp, $o);
    var dp = /^B(\d{2})(\d{2})(\d{2})(\d{2})(\d{5})([NS])(\d{3})(\d{5})([EW])([AV])(\d{5})(\d{5})/, ep = /^H.([A-Z]{3}).*?:(.*)/, fp = /^HFDTE(\d{2})(\d{2})(\d{2})/, gp = /\r\n|\r|\n/;
    bp.prototype.xd = function (a, b) {
        var c = this.b, d = a.split(gp), e = {}, f = [], g = 2E3, h = 0, l = 1, m = -1, n, p;
        n = 0;
        for (p = d.length; n < p; ++n) {
            var q = d[n], r;
            if ("B" == q.charAt(0)) {
                if (r = dp.exec(q)) {
                    var q = parseInt(r[1], 10), u = parseInt(r[2], 10), x = parseInt(r[3], 10), y = parseInt(r[4], 10) + parseInt(r[5], 10) / 6E4;
                    "S" == r[6] && (y = -y);
                    var A = parseInt(r[7], 10) + parseInt(r[8], 10) / 6E4;
                    "W" == r[9] && (A = -A);
                    f.push(A, y);
                    c != cp && f.push(c == hp ? parseInt(r[11], 10) : c == ip ? parseInt(r[12], 10) : 0);
                    r = Date.UTC(g, h, l, q, u, x);
                    r < m && (r = Date.UTC(g, h, l + 1, q, u, x));
                    f.push(r /
                        1E3);
                    m = r
                }
            } else"H" == q.charAt(0) && ((r = fp.exec(q)) ? (l = parseInt(r[1], 10), h = parseInt(r[2], 10) - 1, g = 2E3 + parseInt(r[3], 10)) : (r = ep.exec(q)) && (e[r[1]] = r[2].trim()))
        }
        if (0 === f.length)return null;
        d = new P(null);
        d.aa(c == cp ? "XYM" : "XYZM", f);
        c = new I(Wm(d, !1, b));
        c.H(e);
        return c
    };
    bp.prototype.Hf = function (a, b) {
        var c = this.xd(a, b);
        return c ? [c] : []
    };
    var ip = "barometric", hp = "gps", cp = "none";

    function jp(a, b, c, d, e, f) {
        Na.call(this);
        this.l = null;
        this.a = a ? a : new Image;
        null !== d && (this.a.crossOrigin = d);
        this.c = f ? document.createElement("CANVAS") : null;
        this.j = f;
        this.i = null;
        this.f = e;
        this.g = c;
        this.o = b;
        this.s = !1;
        this.f == oi && kp(this)
    }

    v(jp, Na);
    function kp(a) {
        var b = Ge(1, 1);
        try {
            b.drawImage(a.a, 0, 0), b.getImageData(0, 0, 1, 1)
        } catch (c) {
            a.s = !0
        }
    }

    jp.prototype.T = function () {
        this.f = ni;
        this.i.forEach(za);
        this.i = null;
        this.b("change")
    };
    jp.prototype.u = function () {
        this.f = oi;
        this.g && (this.a.width = this.g[0], this.a.height = this.g[1]);
        this.g = [this.a.width, this.a.height];
        this.i.forEach(za);
        this.i = null;
        kp(this);
        if (!this.s && null !== this.j) {
            this.c.width = this.a.width;
            this.c.height = this.a.height;
            var a = this.c.getContext("2d");
            a.drawImage(this.a, 0, 0);
            for (var b = a.getImageData(0, 0, this.a.width, this.a.height), c = b.data, d = this.j[0] / 255, e = this.j[1] / 255, f = this.j[2] / 255, g = 0, h = c.length; g < h; g += 4)c[g] *= d, c[g + 1] *= e, c[g + 2] *= f;
            a.putImageData(b, 0, 0)
        }
        this.b("change")
    };
    jp.prototype.load = function () {
        if (this.f == mi) {
            this.f = pi;
            this.i = [Ea(this.a, "error", this.T, this), Ea(this.a, "load", this.u, this)];
            try {
                this.a.src = this.o
            } catch (a) {
                this.T()
            }
        }
    };
    function lp(a) {
        a = a || {};
        this.f = void 0 !== a.anchor ? a.anchor : [.5, .5];
        this.j = null;
        this.a = void 0 !== a.anchorOrigin ? a.anchorOrigin : mp;
        this.B = void 0 !== a.anchorXUnits ? a.anchorXUnits : np;
        this.G = void 0 !== a.anchorYUnits ? a.anchorYUnits : np;
        this.na = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        var b = void 0 !== a.img ? a.img : null, c = void 0 !== a.imgSize ? a.imgSize : null, d = a.src;
        ha(!(void 0 !== d && b), 4);
        ha(!b || b && c, 5);
        void 0 !== d && 0 !== d.length || !b || (d = b.src || ea(b).toString());
        ha(void 0 !== d && 0 < d.length, 6);
        var e = void 0 !== a.src ? mi : oi;
        this.i = void 0 !== a.color ? ze(a.color) : null;
        var f = this.na, g = this.i, h = Ph.get(d, f, g);
        h || (h = new jp(b, d, c, f, e, g), Ph.set(d, f, g, h));
        this.b = h;
        this.S = void 0 !== a.offset ? a.offset : [0, 0];
        this.g = void 0 !== a.offsetOrigin ? a.offsetOrigin : mp;
        this.s = null;
        this.C = void 0 !== a.size ? a.size : null;
        ui.call(this, {
            opacity: void 0 !== a.opacity ? a.opacity : 1,
            rotation: void 0 !== a.rotation ? a.rotation : 0,
            scale: void 0 !== a.scale ? a.scale : 1,
            snapToPixel: void 0 !== a.snapToPixel ? a.snapToPixel : !0,
            rotateWithView: void 0 !== a.rotateWithView ? a.rotateWithView :
                !1
        })
    }

    v(lp, ui);
    k = lp.prototype;
    k.clone = function () {
        var a = this.Tb(1), b;
        if (this.b.f === oi)if ("IMG" === a.tagName.toUpperCase()) b = a.cloneNode(!0); else {
            b = document.createElement("canvas");
            var c = b.getContext("2d");
            b.width = a.width;
            b.height = a.height;
            c.drawImage(a, 0, 0)
        }
        return new lp({
            anchor: this.f.slice(),
            anchorOrigin: this.a,
            anchorXUnits: this.B,
            anchorYUnits: this.G,
            crossOrigin: this.na,
            color: this.i && this.i.slice ? this.i.slice() : this.i || void 0,
            img: b ? b : void 0,
            imgSize: b ? this.b.g.slice() : void 0,
            src: b ? void 0 : this.b.o,
            offset: this.S.slice(),
            offsetOrigin: this.g,
            size: null !== this.C ? this.C.slice() : void 0,
            opacity: this.l,
            scale: this.c,
            snapToPixel: this.u,
            rotation: this.o,
            rotateWithView: this.T
        })
    };
    k.cc = function () {
        if (this.j)return this.j;
        var a = this.f, b = this.Gb();
        if (this.B == np || this.G == np) {
            if (!b)return null;
            a = this.f.slice();
            this.B == np && (a[0] *= b[0]);
            this.G == np && (a[1] *= b[1])
        }
        if (this.a != mp) {
            if (!b)return null;
            a === this.f && (a = this.f.slice());
            if (this.a == op || this.a == pp) a[0] = -a[0] + b[0];
            if (this.a == qp || this.a == pp) a[1] = -a[1] + b[1]
        }
        return this.j = a
    };
    k.Tb = function () {
        var a = this.b;
        return a.c ? a.c : a.a
    };
    k.md = function () {
        return this.b.g
    };
    k.wd = function () {
        return this.b.f
    };
    k.pe = function () {
        var a = this.b;
        if (!a.l)if (a.s) {
            var b = a.g[0], c = a.g[1], d = Ge(b, c);
            d.fillRect(0, 0, b, c);
            a.l = d.canvas
        } else a.l = a.a;
        return a.l
    };
    k.jc = function () {
        if (this.s)return this.s;
        var a = this.S;
        if (this.g != mp) {
            var b = this.Gb(), c = this.b.g;
            if (!b || !c)return null;
            a = a.slice();
            if (this.g == op || this.g == pp) a[0] = c[0] - b[0] - a[0];
            if (this.g == qp || this.g == pp) a[1] = c[1] - b[1] - a[1]
        }
        return this.s = a
    };
    k.sn = function () {
        return this.b.o
    };
    k.Gb = function () {
        return this.C ? this.C : this.b.g
    };
    k.pf = function (a, b) {
        return w(this.b, "change", a, b)
    };
    k.load = function () {
        this.b.load()
    };
    k.Uf = function (a, b) {
        Fa(this.b, "change", a, b)
    };
    var np = "fraction", qp = "bottom-left", pp = "bottom-right", mp = "top-left", op = "top-right";

    function rp(a) {
        a = a || {};
        this.g = a.font;
        this.j = a.rotation;
        this.s = a.rotateWithView;
        this.a = a.scale;
        this.T = a.text;
        this.l = a.textAlign;
        this.o = a.textBaseline;
        this.b = void 0 !== a.fill ? a.fill : new zi({color: "#333"});
        this.f = void 0 !== a.stroke ? a.stroke : null;
        this.c = void 0 !== a.offsetX ? a.offsetX : 0;
        this.i = void 0 !== a.offsetY ? a.offsetY : 0
    }

    k = rp.prototype;
    k.clone = function () {
        return new rp({
            font: this.g,
            rotation: this.j,
            rotateWithView: this.s,
            scale: this.a,
            text: this.Ga(),
            textAlign: this.l,
            textBaseline: this.o,
            fill: this.b ? this.b.clone() : void 0,
            stroke: this.f ? this.f.clone() : void 0,
            offsetX: this.c,
            offsetY: this.i
        })
    };
    k.Lj = function () {
        return this.g
    };
    k.Zj = function () {
        return this.c
    };
    k.$j = function () {
        return this.i
    };
    k.In = function () {
        return this.b
    };
    k.Jn = function () {
        return this.s
    };
    k.Kn = function () {
        return this.j
    };
    k.Ln = function () {
        return this.a
    };
    k.Mn = function () {
        return this.f
    };
    k.Ga = function () {
        return this.T
    };
    k.lk = function () {
        return this.l
    };
    k.mk = function () {
        return this.o
    };
    k.Yh = function (a) {
        this.g = a
    };
    k.di = function (a) {
        this.c = a
    };
    k.ei = function (a) {
        this.i = a
    };
    k.Xh = function (a) {
        this.b = a
    };
    k.Nn = function (a) {
        this.j = a
    };
    k.Ah = function (a) {
        this.a = a
    };
    k.gi = function (a) {
        this.f = a
    };
    k.hi = function (a) {
        this.T = a
    };
    k.ii = function (a) {
        this.l = a
    };
    k.Vo = function (a) {
        this.o = a
    };
    function sp(a) {
        a = a ? a : {};
        Sn.call(this);
        this.defaultDataProjection = oc("EPSG:4326");
        var b;
        a.defaultStyle ? b = a.defaultStyle : (b = tp) || (up = [255, 255, 255, 1], vp = new zi({color: up}), wp = [20, 2], xp = yp = "pixels", zp = [64, 64], Ap = "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png", Bp = .5, Cp = new lp({
            anchor: wp,
            anchorOrigin: qp,
            anchorXUnits: yp,
            anchorYUnits: xp,
            crossOrigin: "anonymous",
            rotation: 0,
            scale: Bp,
            size: zp,
            src: Ap
        }), Dp = "NO_IMAGE", Ep = new Ai({color: up, width: 1}), Fp = new Ai({
            color: [51, 51, 51, 1],
            width: 2
        }), Gp = new rp({
            font: "bold 16px Helvetica",
            fill: vp, stroke: Fp, scale: .8
        }), Hp = new Bi({fill: vp, image: Cp, text: Gp, stroke: Ep, zIndex: 0}), b = tp = [Hp]);
        this.g = b;
        this.c = void 0 !== a.extractStyles ? a.extractStyles : !0;
        this.l = void 0 !== a.writeStyles ? a.writeStyles : !0;
        this.b = {};
        this.i = void 0 !== a.showPointNames ? a.showPointNames : !0
    }

    var tp, up, vp, wp, yp, xp, zp, Ap, Bp, Cp, Dp, Ep, Fp, Gp, Hp;
    v(sp, Sn);
    var Ip = ["http://www.google.com/kml/ext/2.2"], Jp = [null, "http://earth.google.com/kml/2.0", "http://earth.google.com/kml/2.1", "http://earth.google.com/kml/2.2", "http://www.opengis.net/kml/2.2"], Kp = {
        fraction: np,
        pixels: "pixels"
    };

    function Lp(a, b) {
        var c, d = [0, 0], e = "start";
        if (a.a) {
            c = a.a.md();
            null === c && (c = zp);
            var f = a.a.c;
            isNaN(f) && (f = Bp);
            2 == c.length && (d[0] = f * c[0] / 2, d[1] = -f * c[1] / 2, e = "left")
        }
        null !== a.Ga() ? (f = a.Ga(), c = f.clone(), c.Yh(f.g || Gp.g), c.Ah(f.a || Gp.a), c.Xh(f.b || Gp.b), c.gi(f.f || Fp)) : c = Gp.clone();
        c.hi(b);
        c.di(d[0]);
        c.ei(d[1]);
        c.ii(e);
        return new Bi({text: c})
    }

    function Mp(a, b, c, d, e) {
        return function () {
            var f = e, g = "";
            f && this.V() && (f = "Point" === this.V().X());
            f && (g = this.get("name"), f = f && g);
            if (a)return f ? (f = Lp(a[0], g), a.concat(f)) : a;
            if (b) {
                var h = Np(b, c, d);
                return f ? (f = Lp(h[0], g), h.concat(f)) : h
            }
            return f ? (f = Lp(c[0], g), c.concat(f)) : c
        }
    }

    function Np(a, b, c) {
        return Array.isArray(a) ? a : "string" === typeof a ? (!(a in c) && "#" + a in c && (a = "#" + a), Np(c[a], b, c)) : b
    }

    function Op(a) {
        a = Am(a, !1);
        if (a = /^\s*#?\s*([0-9A-Fa-f]{8})\s*$/.exec(a))return a = a[1], [parseInt(a.substr(6, 2), 16), parseInt(a.substr(4, 2), 16), parseInt(a.substr(2, 2), 16), parseInt(a.substr(0, 2), 16) / 255]
    }

    function Pp(a) {
        a = Am(a, !1);
        for (var b = [], c = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)(?:\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?))?\s*/i, d; d = c.exec(a);)b.push(parseFloat(d[1]), parseFloat(d[2]), d[3] ? parseFloat(d[3]) : 0), a = a.substr(d[0].length);
        return "" !== a ? void 0 : b
    }

    function Qp(a) {
        var b = Am(a, !1).trim();
        return a.baseURI ? (new URL(b, a.baseURI)).href : b
    }

    function Rp(a) {
        return $n(a)
    }

    function Sp(a, b) {
        return O(null, Tp, a, b)
    }

    function Up(a, b) {
        var c = O({A: [], si: []}, Vp, a, b);
        if (c) {
            var d = c.A, c = c.si, e, f;
            e = 0;
            for (f = Math.min(d.length, c.length); e < f; ++e)d[4 * e + 3] = c[e];
            c = new P(null);
            c.aa("XYZM", d);
            return c
        }
    }

    function Wp(a, b) {
        var c = O({}, Xp, a, b), d = O(null, Yp, a, b);
        if (d) {
            var e = new P(null);
            e.aa("XYZ", d);
            e.H(c);
            return e
        }
    }

    function Zp(a, b) {
        var c = O({}, Xp, a, b), d = O(null, Yp, a, b);
        if (d) {
            var e = new C(null);
            e.aa("XYZ", d, [d.length]);
            e.H(c);
            return e
        }
    }

    function $p(a, b) {
        var c = O([], aq, a, b);
        if (!c)return null;
        if (0 === c.length)return new Jn(c);
        var d, e = !0, f = c[0].X(), g, h, l;
        h = 1;
        for (l = c.length; h < l; ++h)if (g = c[h], g.X() != f) {
            e = !1;
            break
        }
        if (e)if ("Point" == f) {
            d = c[0];
            e = d.ia;
            f = d.ka();
            h = 1;
            for (l = c.length; h < l; ++h)g = c[h], ab(f, g.ka());
            d = new S(null);
            d.aa(e, f);
            bq(d, c)
        } else"LineString" == f ? (d = new Q(null), bn(d, c), bq(d, c)) : "Polygon" == f ? (d = new T(null), dn(d, c), bq(d, c)) : "GeometryCollection" == f ? d = new Jn(c) : ha(!1, 37); else d = new Jn(c);
        return d
    }

    function cq(a, b) {
        var c = O({}, Xp, a, b), d = O(null, Yp, a, b);
        if (d) {
            var e = new B(null);
            e.aa("XYZ", d);
            e.H(c);
            return e
        }
    }

    function dq(a, b) {
        var c = O({}, Xp, a, b), d = O([null], eq, a, b);
        if (d && d[0]) {
            var e = new C(null), f = d[0], g = [f.length], h, l;
            h = 1;
            for (l = d.length; h < l; ++h)ab(f, d[h]), g.push(f.length);
            e.aa("XYZ", f, g);
            e.H(c);
            return e
        }
    }

    function fq(a, b) {
        var c = O({}, gq, a, b);
        if (!c)return null;
        var d = "fillStyle" in c ? c.fillStyle : vp, e = c.fill;
        void 0 === e || e || (d = null);
        e = "imageStyle" in c ? c.imageStyle : Cp;
        e == Dp && (e = void 0);
        var f = "textStyle" in c ? c.textStyle : Gp, g = "strokeStyle" in c ? c.strokeStyle : Ep, c = c.outline;
        void 0 === c || c || (g = null);
        return [new Bi({fill: d, image: e, stroke: g, text: f, zIndex: void 0})]
    }

    function bq(a, b) {
        var c = b.length, d = Array(b.length), e = Array(b.length), f, g, h, l;
        h = l = !1;
        for (g = 0; g < c; ++g)f = b[g], d[g] = f.get("extrude"), e[g] = f.get("altitudeMode"), h = h || void 0 !== d[g], l = l || e[g];
        h && a.set("extrude", d);
        l && a.set("altitudeMode", e)
    }

    function hq(a, b) {
        Om(iq, a, b)
    }

    var jq = N(Jp, {value: Hm(U)}), iq = N(Jp, {
        Data: function (a, b) {
            var c = a.getAttribute("name");
            if (null !== c) {
                var d = O(void 0, jq, a, b);
                d && (b[b.length - 1][c] = d)
            }
        }, SchemaData: function (a, b) {
            Om(kq, a, b)
        }
    }), Xp = N(Jp, {
        extrude: J(Xn),
        altitudeMode: J(U)
    }), Tp = N(Jp, {coordinates: Hm(Pp)}), eq = N(Jp, {
        innerBoundaryIs: function (a, b) {
            var c = O(void 0, lq, a, b);
            c && b[b.length - 1].push(c)
        }, outerBoundaryIs: function (a, b) {
            var c = O(void 0, mq, a, b);
            c && (b[b.length - 1][0] = c)
        }
    }), Vp = N(Jp, {
        when: function (a, b) {
            var c = b[b.length - 1].si, d = Am(a, !1), d = Date.parse(d);
            c.push(isNaN(d) ? 0 : d)
        }
    }, N(Ip, {
        coord: function (a, b) {
            var c = b[b.length - 1].A, d = Am(a, !1);
            (d = /^\s*([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s*$/i.exec(d)) ? c.push(parseFloat(d[1]), parseFloat(d[2]), parseFloat(d[3]), 0) : c.push(0, 0, 0, 0)
        }
    })), Yp = N(Jp, {coordinates: Hm(Pp)}), nq = N(Jp, {href: J(Qp)}, N(Ip, {
        x: J($n),
        y: J($n),
        w: J($n),
        h: J($n)
    })), oq = N(Jp, {
        Icon: J(function (a, b) {
            var c = O({}, nq, a, b);
            return c ? c : null
        }), heading: J($n), hotSpot: J(function (a) {
            var b =
                a.getAttribute("xunits"), c = a.getAttribute("yunits");
            return {x: parseFloat(a.getAttribute("x")), Wf: Kp[b], y: parseFloat(a.getAttribute("y")), Xf: Kp[c]}
        }), scale: J(Rp)
    }), lq = N(Jp, {LinearRing: Hm(Sp)}), pq = N(Jp, {color: J(Op), scale: J(Rp)}), qq = N(Jp, {
        color: J(Op),
        width: J($n)
    }), aq = N(Jp, {
        LineString: Gm(Wp),
        LinearRing: Gm(Zp),
        MultiGeometry: Gm($p),
        Point: Gm(cq),
        Polygon: Gm(dq)
    }), rq = N(Ip, {Track: Gm(Up)}), tq = N(Jp, {
        ExtendedData: hq, Link: function (a, b) {
            Om(sq, a, b)
        }, address: J(U), description: J(U), name: J(U), open: J(Xn), phoneNumber: J(U),
        visibility: J(Xn)
    }), sq = N(Jp, {href: J(Qp)}), mq = N(Jp, {LinearRing: Hm(Sp)}), uq = N(Jp, {
        Style: J(fq),
        key: J(U),
        styleUrl: J(Qp)
    }), wq = N(Jp, {
        ExtendedData: hq,
        MultiGeometry: J($p, "geometry"),
        LineString: J(Wp, "geometry"),
        LinearRing: J(Zp, "geometry"),
        Point: J(cq, "geometry"),
        Polygon: J(dq, "geometry"),
        Style: J(fq),
        StyleMap: function (a, b) {
            var c = O(void 0, vq, a, b);
            if (c) {
                var d = b[b.length - 1];
                Array.isArray(c) ? d.Style = c : "string" === typeof c ? d.styleUrl = c : ha(!1, 38)
            }
        },
        address: J(U),
        description: J(U),
        name: J(U),
        open: J(Xn),
        phoneNumber: J(U),
        styleUrl: J(Qp),
        visibility: J(Xn)
    }, N(Ip, {
        MultiTrack: J(function (a, b) {
            var c = O([], rq, a, b);
            if (c) {
                var d = new Q(null);
                bn(d, c);
                return d
            }
        }, "geometry"), Track: J(Up, "geometry")
    })), xq = N(Jp, {color: J(Op), fill: J(Xn), outline: J(Xn)}), kq = N(Jp, {
        SimpleData: function (a, b) {
            var c = a.getAttribute("name");
            if (null !== c) {
                var d = U(a);
                b[b.length - 1][c] = d
            }
        }
    }), gq = N(Jp, {
        IconStyle: function (a, b) {
            var c = O({}, oq, a, b);
            if (c) {
                var d = b[b.length - 1], e = "Icon" in c ? c.Icon : {}, f = !("Icon" in c) || 0 < Object.keys(e).length, g, h = e.href;
                h ? g = h : f && (g = Ap);
                var l, m,
                    n;
                (h = c.hotSpot) ? (l = [h.x, h.y], m = h.Wf, n = h.Xf) : g === Ap ? (l = wp, m = yp, n = xp) : /^http:\/\/maps\.(?:google|gstatic)\.com\//.test(g) && (l = [.5, 0], n = m = np);
                var p, h = e.x, q = e.y;
                void 0 !== h && void 0 !== q && (p = [h, q]);
                var r, h = e.w, e = e.h;
                void 0 !== h && void 0 !== e && (r = [h, e]);
                var u, e = c.heading;
                void 0 !== e && (u = na(e));
                c = c.scale;
                c = isNaN(c) || void 0 === c ? Bp : c * Bp;
                f ? (g == Ap && (r = zp, void 0 === c && (c = Bp)), f = new lp({
                    anchor: l,
                    anchorOrigin: qp,
                    anchorXUnits: m,
                    anchorYUnits: n,
                    crossOrigin: "anonymous",
                    offset: p,
                    offsetOrigin: qp,
                    rotation: u,
                    scale: c,
                    size: r,
                    src: g
                }),
                    d.imageStyle = f) : d.imageStyle = Dp
            }
        }, LabelStyle: function (a, b) {
            var c = O({}, pq, a, b);
            c && (b[b.length - 1].textStyle = new rp({
                fill: new zi({color: "color" in c ? c.color : up}),
                scale: c.scale
            }))
        }, LineStyle: function (a, b) {
            var c = O({}, qq, a, b);
            c && (b[b.length - 1].strokeStyle = new Ai({
                color: "color" in c ? c.color : up,
                width: "width" in c ? c.width : 1
            }))
        }, PolyStyle: function (a, b) {
            var c = O({}, xq, a, b);
            if (c) {
                var d = b[b.length - 1];
                d.fillStyle = new zi({color: "color" in c ? c.color : up});
                var e = c.fill;
                void 0 !== e && (d.fill = e);
                c = c.outline;
                void 0 !== c && (d.outline =
                    c)
            }
        }
    }), vq = N(Jp, {
        Pair: function (a, b) {
            var c = O({}, uq, a, b);
            if (c) {
                var d = c.key;
                d && "normal" == d && ((d = c.styleUrl) && (b[b.length - 1] = d), (c = c.Style) && (b[b.length - 1] = c))
            }
        }
    });
    k = sp.prototype;
    k.Ef = function (a, b) {
        var c = N(Jp, {
            Document: Fm(this.Ef, this),
            Folder: Fm(this.Ef, this),
            Placemark: Gm(this.Kf, this),
            Style: this.Ao.bind(this),
            StyleMap: this.zo.bind(this)
        });
        if (c = O([], c, a, b, this))return c
    };
    k.Kf = function (a, b) {
        var c = O({geometry: null}, wq, a, b);
        if (c) {
            var d = new I, e = a.getAttribute("id");
            null !== e && d.Wb(e);
            var e = b[0], f = c.geometry;
            f && Wm(f, !1, e);
            d.Pa(f);
            delete c.geometry;
            this.c && d.sf(Mp(c.Style, c.styleUrl, this.g, this.b, this.i));
            delete c.Style;
            d.H(c);
            return d
        }
    };
    k.Ao = function (a, b) {
        var c = a.getAttribute("id");
        if (null !== c) {
            var d = fq(a, b);
            d && (c = a.baseURI ? (new URL("#" + c, a.baseURI)).href : "#" + c, this.b[c] = d)
        }
    };
    k.zo = function (a, b) {
        var c = a.getAttribute("id");
        if (null !== c) {
            var d = O(void 0, vq, a, b);
            d && (c = a.baseURI ? (new URL("#" + c, a.baseURI)).href : "#" + c, this.b[c] = d)
        }
    };
    k.Gh = function (a, b) {
        if (!Ya(Jp, a.namespaceURI))return null;
        var c = this.Kf(a, [Um(this, a, b)]);
        return c ? c : null
    };
    k.kc = function (a, b) {
        if (!Ya(Jp, a.namespaceURI))return [];
        var c;
        c = a.localName;
        if ("Document" == c || "Folder" == c)return (c = this.Ef(a, [Um(this, a, b)])) ? c : [];
        if ("Placemark" == c)return (c = this.Kf(a, [Um(this, a, b)])) ? [c] : [];
        if ("kml" == c) {
            c = [];
            var d;
            for (d = a.firstElementChild; d; d = d.nextElementSibling) {
                var e = this.kc(d, b);
                e && ab(c, e)
            }
            return c
        }
        return []
    };
    k.uo = function (a) {
        if (Cm(a))return yq(this, a);
        if (Dm(a))return zq(this, a);
        if ("string" === typeof a)return a = Em(a), yq(this, a)
    };
    function yq(a, b) {
        var c;
        for (c = b.firstChild; c; c = c.nextSibling)if (c.nodeType == Node.ELEMENT_NODE) {
            var d = zq(a, c);
            if (d)return d
        }
    }

    function zq(a, b) {
        var c;
        for (c = b.firstElementChild; c; c = c.nextElementSibling)if (Ya(Jp, c.namespaceURI) && "name" == c.localName)return U(c);
        for (c = b.firstElementChild; c; c = c.nextElementSibling) {
            var d = c.localName;
            if (Ya(Jp, c.namespaceURI) && ("Document" == d || "Folder" == d || "Placemark" == d || "kml" == d) && (d = zq(a, c)))return d
        }
    }

    k.vo = function (a) {
        var b = [];
        Cm(a) ? ab(b, Aq(this, a)) : Dm(a) ? ab(b, Bq(this, a)) : "string" === typeof a && (a = Em(a), ab(b, Aq(this, a)));
        return b
    };
    function Aq(a, b) {
        var c, d = [];
        for (c = b.firstChild; c; c = c.nextSibling)c.nodeType == Node.ELEMENT_NODE && ab(d, Bq(a, c));
        return d
    }

    function Bq(a, b) {
        var c, d = [];
        for (c = b.firstElementChild; c; c = c.nextElementSibling)if (Ya(Jp, c.namespaceURI) && "NetworkLink" == c.localName) {
            var e = O({}, tq, c, []);
            d.push(e)
        }
        for (c = b.firstElementChild; c; c = c.nextElementSibling)e = c.localName, !Ya(Jp, c.namespaceURI) || "Document" != e && "Folder" != e && "kml" != e || ab(d, Bq(a, c));
        return d
    }

    function Cq(a, b) {
        var c = ze(b), c = [255 * (4 == c.length ? c[3] : 1), c[2], c[1], c[0]], d;
        for (d = 0; 4 > d; ++d) {
            var e = parseInt(c[d], 10).toString(16);
            c[d] = 1 == e.length ? "0" + e : e
        }
        fo(a, c.join(""))
    }

    function Dq(a, b, c) {
        a = {node: a};
        var d = b.X(), e, f;
        "GeometryCollection" == d ? (e = b.cf(), f = Eq) : "MultiPoint" == d ? (e = b.je(), f = Fq) : "MultiLineString" == d ? (e = b.od(), f = Gq) : "MultiPolygon" == d ? (e = b.Xd(), f = Hq) : ha(!1, 39);
        Pm(a, Iq, f, e, c)
    }

    function Jq(a, b, c) {
        Pm({node: a}, Kq, Lq, [b], c)
    }

    function Mq(a, b, c) {
        var d = {node: a};
        b.a && a.setAttribute("id", b.a);
        a = b.N();
        var e = b.zc();
        e && (e = e.call(b, 0)) && (e = Array.isArray(e) ? e[0] : e, this.l && (a.Style = e), (e = e.Ga()) && (a.name = e.Ga()));
        e = Nq[c[c.length - 1].node.namespaceURI];
        a = Nm(a, e);
        Pm(d, Oq, Mm, a, c, e);
        a = c[0];
        (b = b.V()) && (b = Wm(b, !0, a));
        Pm(d, Oq, Eq, [b], c)
    }

    function Pq(a, b, c) {
        var d = b.ka();
        a = {node: a};
        a.layout = b.ia;
        a.stride = b.sa();
        Pm(a, Qq, Rq, [d], c)
    }

    function Sq(a, b, c) {
        b = b.Wd();
        var d = b.shift();
        a = {node: a};
        Pm(a, Tq, Uq, b, c);
        Pm(a, Tq, Vq, [d], c)
    }

    function Wq(a, b) {
        go(a, Math.round(b * b * 1E6) / 1E6)
    }

    var Xq = N(Jp, ["Document", "Placemark"]), $q = N(Jp, {
        Document: M(function (a, b, c) {
            Pm({node: a}, Yq, Zq, b, c, void 0, this)
        }), Placemark: M(Mq)
    }), Yq = N(Jp, {Placemark: M(Mq)}), ar = {
        Point: "Point",
        LineString: "LineString",
        LinearRing: "LinearRing",
        Polygon: "Polygon",
        MultiPoint: "MultiGeometry",
        MultiLineString: "MultiGeometry",
        MultiPolygon: "MultiGeometry",
        GeometryCollection: "MultiGeometry"
    }, br = N(Jp, ["href"], N(Ip, ["x", "y", "w", "h"])), cr = N(Jp, {href: M(fo)}, N(Ip, {
        x: M(go),
        y: M(go),
        w: M(go),
        h: M(go)
    })), dr = N(Jp, ["scale", "heading", "Icon",
        "hotSpot"]), fr = N(Jp, {
        Icon: M(function (a, b, c) {
            a = {node: a};
            var d = br[c[c.length - 1].node.namespaceURI], e = Nm(b, d);
            Pm(a, cr, Mm, e, c, d);
            d = br[Ip[0]];
            e = Nm(b, d);
            Pm(a, cr, er, e, c, d)
        }), heading: M(go), hotSpot: M(function (a, b) {
            a.setAttribute("x", b.x);
            a.setAttribute("y", b.y);
            a.setAttribute("xunits", b.Wf);
            a.setAttribute("yunits", b.Xf)
        }), scale: M(Wq)
    }), gr = N(Jp, ["color", "scale"]), hr = N(Jp, {
        color: M(Cq),
        scale: M(Wq)
    }), ir = N(Jp, ["color", "width"]), jr = N(Jp, {
        color: M(Cq),
        width: M(go)
    }), Kq = N(Jp, {LinearRing: M(Pq)}), Iq = N(Jp, {
        LineString: M(Pq),
        Point: M(Pq), Polygon: M(Sq), GeometryCollection: M(Dq)
    }), Nq = N(Jp, "name open visibility address phoneNumber description styleUrl Style".split(" ")), Oq = N(Jp, {
        MultiGeometry: M(Dq),
        LineString: M(Pq),
        LinearRing: M(Pq),
        Point: M(Pq),
        Polygon: M(Sq),
        Style: M(function (a, b, c) {
            a = {node: a};
            var d = {}, e = b.f, f = b.g, g = b.a;
            b = b.Ga();
            g instanceof lp && (d.IconStyle = g);
            b && (d.LabelStyle = b);
            f && (d.LineStyle = f);
            e && (d.PolyStyle = e);
            b = kr[c[c.length - 1].node.namespaceURI];
            d = Nm(d, b);
            Pm(a, lr, Mm, d, c, b)
        }),
        address: M(fo),
        description: M(fo),
        name: M(fo),
        open: M(eo),
        phoneNumber: M(fo),
        styleUrl: M(fo),
        visibility: M(eo)
    }), Qq = N(Jp, {
        coordinates: M(function (a, b, c) {
            c = c[c.length - 1];
            var d = c.layout;
            c = c.stride;
            var e;
            "XY" == d || "XYM" == d ? e = 2 : "XYZ" == d || "XYZM" == d ? e = 3 : ha(!1, 34);
            var f, g = b.length, h = "";
            if (0 < g) {
                h += b[0];
                for (d = 1; d < e; ++d)h += "," + b[d];
                for (f = c; f < g; f += c)for (h += " " + b[f], d = 1; d < e; ++d)h += "," + b[f + d]
            }
            fo(a, h)
        })
    }), Tq = N(Jp, {
        outerBoundaryIs: M(Jq),
        innerBoundaryIs: M(Jq)
    }), mr = N(Jp, {color: M(Cq)}), kr = N(Jp, ["IconStyle", "LabelStyle", "LineStyle", "PolyStyle"]), lr = N(Jp, {
        IconStyle: M(function (a,
                               b, c) {
            a = {node: a};
            var d = {}, e = b.Gb(), f = b.md(), g = {href: b.b.o};
            if (e) {
                g.w = e[0];
                g.h = e[1];
                var h = b.cc(), l = b.jc();
                l && f && 0 !== l[0] && l[1] !== e[1] && (g.x = l[0], g.y = f[1] - (l[1] + e[1]));
                h && 0 !== h[0] && h[1] !== e[1] && (d.hotSpot = {x: h[0], Wf: "pixels", y: e[1] - h[1], Xf: "pixels"})
            }
            d.Icon = g;
            e = b.c;
            1 !== e && (d.scale = e);
            b = b.o;
            0 !== b && (d.heading = b);
            b = dr[c[c.length - 1].node.namespaceURI];
            d = Nm(d, b);
            Pm(a, fr, Mm, d, c, b)
        }), LabelStyle: M(function (a, b, c) {
            a = {node: a};
            var d = {}, e = b.b;
            e && (d.color = e.b);
            (b = b.a) && 1 !== b && (d.scale = b);
            b = gr[c[c.length - 1].node.namespaceURI];
            d = Nm(d, b);
            Pm(a, hr, Mm, d, c, b)
        }), LineStyle: M(function (a, b, c) {
            a = {node: a};
            var d = ir[c[c.length - 1].node.namespaceURI];
            b = Nm({color: b.a, width: b.f}, d);
            Pm(a, jr, Mm, b, c, d)
        }), PolyStyle: M(function (a, b, c) {
            Pm({node: a}, mr, nr, [b.b], c)
        })
    });

    function er(a, b, c) {
        return zm(Ip[0], "gx:" + c)
    }

    function Zq(a, b) {
        return zm(b[b.length - 1].node.namespaceURI, "Placemark")
    }

    function Eq(a, b) {
        if (a)return zm(b[b.length - 1].node.namespaceURI, ar[a.X()])
    }

    var nr = Km("color"), Rq = Km("coordinates"), Uq = Km("innerBoundaryIs"), Fq = Km("Point"), Gq = Km("LineString"), Lq = Km("LinearRing"), Hq = Km("Polygon"), Vq = Km("outerBoundaryIs");
    sp.prototype.a = function (a, b) {
        b = Vm(this, b);
        var c = zm(Jp[4], "kml");
        c.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:gx", Ip[0]);
        c.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
        c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", "http://www.opengis.net/kml/2.2 https://developers.google.com/kml/schema/kml22gx.xsd");
        var d = {node: c}, e = {};
        1 < a.length ? e.Document = a : 1 == a.length && (e.Placemark = a[0]);
        var f = Xq[c.namespaceURI],
            e = Nm(e, f);
        Pm(d, $q, Mm, e, [b], f, this);
        return c
    };
    var or, pr, qr, rr;
    (function () {
        var a = {}, b = {ja: a};
        (function (c) {
            if ("object" === typeof a && "undefined" !== typeof b) b.ja = c(); else {
                var d;
                "undefined" !== typeof window ? d = window : "undefined" !== typeof global ? d = global : "undefined" !== typeof self ? d = self : d = this;
                d.Bp = c()
            }
        })(function () {
            return function d(a, b, g) {
                function h(m, p) {
                    if (!b[m]) {
                        if (!a[m]) {
                            var q = "function" == typeof require && require;
                            if (!p && q)return q(m, !0);
                            if (l)return l(m, !0);
                            q = Error("Cannot find module '" + m + "'");
                            throw q.code = "MODULE_NOT_FOUND", q;
                        }
                        q = b[m] = {ja: {}};
                        a[m][0].call(q.ja, function (b) {
                            var d =
                                a[m][1][b];
                            return h(d ? d : b)
                        }, q, q.ja, d, a, b, g)
                    }
                    return b[m].ja
                }

                for (var l = "function" == typeof require && require, m = 0; m < g.length; m++)h(g[m]);
                return h
            }({
                1: [function (a, b, f) {
                    f.read = function (a, b, d, e, f) {
                        var p;
                        p = 8 * f - e - 1;
                        var q = (1 << p) - 1, r = q >> 1, u = -7;
                        f = d ? f - 1 : 0;
                        var x = d ? -1 : 1, y = a[b + f];
                        f += x;
                        d = y & (1 << -u) - 1;
                        y >>= -u;
                        for (u += p; 0 < u; d = 256 * d + a[b + f], f += x, u -= 8);
                        p = d & (1 << -u) - 1;
                        d >>= -u;
                        for (u += e; 0 < u; p = 256 * p + a[b + f], f += x, u -= 8);
                        if (0 === d) d = 1 - r; else {
                            if (d === q)return p ? NaN : Infinity * (y ? -1 : 1);
                            p += Math.pow(2, e);
                            d -= r
                        }
                        return (y ? -1 : 1) * p * Math.pow(2, d -
                                e)
                    };
                    f.write = function (a, b, d, e, f, p) {
                        var q, r = 8 * p - f - 1, u = (1 << r) - 1, x = u >> 1, y = 23 === f ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                        p = e ? 0 : p - 1;
                        var A = e ? 1 : -1, z = 0 > b || 0 === b && 0 > 1 / b ? 1 : 0;
                        b = Math.abs(b);
                        isNaN(b) || Infinity === b ? (b = isNaN(b) ? 1 : 0, e = u) : (e = Math.floor(Math.log(b) / Math.LN2), 1 > b * (q = Math.pow(2, -e)) && (e--, q *= 2), b = 1 <= e + x ? b + y / q : b + y * Math.pow(2, 1 - x), 2 <= b * q && (e++, q /= 2), e + x >= u ? (b = 0, e = u) : 1 <= e + x ? (b = (b * q - 1) * Math.pow(2, f), e += x) : (b = b * Math.pow(2, x - 1) * Math.pow(2, f), e = 0));
                        for (; 8 <= f; a[d + p] = b & 255, p += A, b /= 256, f -= 8);
                        e = e << f | b;
                        for (r += f; 0 < r; a[d +
                        p] = e & 255, p += A, e /= 256, r -= 8);
                        a[d + p - A] |= 128 * z
                    }
                }, {}], 2: [function (a, b) {
                    function f(a) {
                        this.bc = ArrayBuffer.isView(a) ? a : new Uint8Array(a || 0);
                        this.type = this.ca = 0;
                        this.length = this.bc.length
                    }

                    function g(a, b, d) {
                        var e = d.bc, f, g;
                        g = e[d.ca++];
                        f = (g & 112) >> 4;
                        if (128 > g)return h(a, f, b);
                        g = e[d.ca++];
                        f |= (g & 127) << 3;
                        if (128 > g)return h(a, f, b);
                        g = e[d.ca++];
                        f |= (g & 127) << 10;
                        if (128 > g)return h(a, f, b);
                        g = e[d.ca++];
                        f |= (g & 127) << 17;
                        if (128 > g)return h(a, f, b);
                        g = e[d.ca++];
                        f |= (g & 127) << 24;
                        if (128 > g)return h(a, f, b);
                        g = e[d.ca++];
                        if (128 > g)return h(a,
                            f | (g & 1) << 31, b);
                        throw Error("Expected varint not more than 10 bytes");
                    }

                    function h(a, b, d) {
                        return d ? 4294967296 * b + (a >>> 0) : 4294967296 * (b >>> 0) + (a >>> 0)
                    }

                    b.ja = f;
                    var l = a("ieee754");
                    f.f = 0;
                    f.g = 1;
                    f.b = 2;
                    f.a = 5;
                    f.prototype = {
                        If: function (a, b, d) {
                            for (d = d || this.length; this.ca < d;) {
                                var e = this.Fa(), f = e >> 3, g = this.ca;
                                this.type = e & 7;
                                a(f, b, this);
                                this.ca === g && this.$o(e)
                            }
                            return b
                        }, qo: function () {
                            var a = l.read(this.bc, this.ca, !0, 23, 4);
                            this.ca += 4;
                            return a
                        }, mo: function () {
                            var a = l.read(this.bc, this.ca, !0, 52, 8);
                            this.ca += 8;
                            return a
                        }, Fa: function (a) {
                            var b =
                                this.bc, d, e;
                            e = b[this.ca++];
                            d = e & 127;
                            if (128 > e)return d;
                            e = b[this.ca++];
                            d |= (e & 127) << 7;
                            if (128 > e)return d;
                            e = b[this.ca++];
                            d |= (e & 127) << 14;
                            if (128 > e)return d;
                            e = b[this.ca++];
                            d |= (e & 127) << 21;
                            if (128 > e)return d;
                            e = b[this.ca];
                            return g(d | (e & 15) << 28, a, this)
                        }, Bo: function () {
                            return this.Fa(!0)
                        }, Ad: function () {
                            var a = this.Fa();
                            return 1 === a % 2 ? (a + 1) / -2 : a / 2
                        }, ko: function () {
                            return !!this.Fa()
                        }, Mf: function () {
                            for (var a = this.Fa() + this.ca, b = this.bc, d = "", e = this.ca; e < a;) {
                                var f = b[e], g = null, h = 239 < f ? 4 : 223 < f ? 3 : 191 < f ? 2 : 1;
                                if (e + h > a)break;
                                var l,
                                    A, z;
                                if (1 === h) 128 > f && (g = f); else if (2 === h) l = b[e + 1], 128 === (l & 192) && (g = (f & 31) << 6 | l & 63, 127 >= g && (g = null)); else if (3 === h) {
                                    if (l = b[e + 1], A = b[e + 2], 128 === (l & 192) && 128 === (A & 192) && (g = (f & 15) << 12 | (l & 63) << 6 | A & 63, 2047 >= g || 55296 <= g && 57343 >= g)) g = null
                                } else 4 === h && (l = b[e + 1], A = b[e + 2], z = b[e + 3], 128 === (l & 192) && 128 === (A & 192) && 128 === (z & 192) && (g = (f & 15) << 18 | (l & 63) << 12 | (A & 63) << 6 | z & 63, 65535 >= g || 1114112 <= g)) && (g = null);
                                null === g ? (g = 65533, h = 1) : 65535 < g && (g -= 65536, d += String.fromCharCode(g >>> 10 & 1023 | 55296), g = 56320 | g & 1023);
                                d += String.fromCharCode(g);
                                e += h
                            }
                            this.ca = a;
                            return d
                        }, $o: function (a) {
                            a &= 7;
                            if (a === f.f)for (; 127 < this.bc[this.ca++];); else if (a === f.b) this.ca = this.Fa() + this.ca; else if (a === f.a) this.ca += 4; else if (a === f.g) this.ca += 8; else throw Error("Unimplemented type: " + a);
                        }
                    }
                }, {ieee754: 1}]
            }, {}, [2])(2)
        });
        or = b.ja
    })();
    (function () {
        var a = {}, b = {ja: a};
        (function (c) {
            if ("object" === typeof a && "undefined" !== typeof b) b.ja = c(); else {
                var d;
                "undefined" !== typeof window ? d = window : "undefined" !== typeof global ? d = global : "undefined" !== typeof self ? d = self : d = this;
                d.Ep = c()
            }
        })(function () {
            return function d(a, b, g) {
                function h(m, p) {
                    if (!b[m]) {
                        if (!a[m]) {
                            var q = "function" == typeof require && require;
                            if (!p && q)return q(m, !0);
                            if (l)return l(m, !0);
                            q = Error("Cannot find module '" + m + "'");
                            throw q.code = "MODULE_NOT_FOUND", q;
                        }
                        q = b[m] = {ja: {}};
                        a[m][0].call(q.ja, function (b) {
                            var d =
                                a[m][1][b];
                            return h(d ? d : b)
                        }, q, q.ja, d, a, b, g)
                    }
                    return b[m].ja
                }

                for (var l = "function" == typeof require && require, m = 0; m < g.length; m++)h(g[m]);
                return h
            }({
                1: [function (a, b) {
                    function f(a, b) {
                        this.x = a;
                        this.y = b
                    }

                    b.ja = f;
                    f.prototype = {
                        clone: function () {
                            return new f(this.x, this.y)
                        }, add: function (a) {
                            return this.clone().Vi(a)
                        }, rotate: function (a) {
                            return this.clone().ej(a)
                        }, round: function () {
                            return this.clone().fj()
                        }, angle: function () {
                            return Math.atan2(this.y, this.x)
                        }, Vi: function (a) {
                            this.x += a.x;
                            this.y += a.y;
                            return this
                        }, ej: function (a) {
                            var b =
                                Math.cos(a);
                            a = Math.sin(a);
                            var d = a * this.x + b * this.y;
                            this.x = b * this.x - a * this.y;
                            this.y = d;
                            return this
                        }, fj: function () {
                            this.x = Math.round(this.x);
                            this.y = Math.round(this.y);
                            return this
                        }
                    };
                    f.b = function (a) {
                        return a instanceof f ? a : Array.isArray(a) ? new f(a[0], a[1]) : a
                    }
                }, {}],
                2: [function (a, b) {
                    b.ja.Ui = a("./lib/vectortile.js");
                    b.ja.yp = a("./lib/vectortilefeature.js");
                    b.ja.zp = a("./lib/vectortilelayer.js")
                }, {"./lib/vectortile.js": 3, "./lib/vectortilefeature.js": 4, "./lib/vectortilelayer.js": 5}],
                3: [function (a, b) {
                    function f(a,
                               b, d) {
                        3 === a && (a = new g(d, d.Fa() + d.ca), a.length && (b[a.name] = a))
                    }

                    var g = a("./vectortilelayer");
                    b.ja = function (a, b) {
                        this.layers = a.If(f, {}, b)
                    }
                }, {"./vectortilelayer": 5}],
                4: [function (a, b) {
                    function f(a, b, d, e, f) {
                        this.properties = {};
                        this.extent = d;
                        this.type = 0;
                        this.nc = a;
                        this.Ne = -1;
                        this.Ld = e;
                        this.Nd = f;
                        a.If(g, this, b)
                    }

                    function g(a, b, d) {
                        if (1 == a) b.id = d.Fa(); else if (2 == a)for (a = d.Fa() + d.ca; d.ca < a;) {
                            var e = b.Ld[d.Fa()], f = b.Nd[d.Fa()];
                            b.properties[e] = f
                        } else 3 == a ? b.type = d.Fa() : 4 == a && (b.Ne = d.ca)
                    }

                    var h = a("point-geometry");
                    b.ja =
                        f;
                    f.b = ["Unknown", "Point", "LineString", "Polygon"];
                    f.prototype.Ng = function () {
                        var a = this.nc;
                        a.ca = this.Ne;
                        for (var b = a.Fa() + a.ca, d = 1, e = 0, f = 0, g = 0, u = [], x; a.ca < b;)if (e || (e = a.Fa(), d = e & 7, e >>= 3), e--, 1 === d || 2 === d) f += a.Ad(), g += a.Ad(), 1 === d && (x && u.push(x), x = []), x.push(new h(f, g)); else if (7 === d) x && x.push(x[0].clone()); else throw Error("unknown command " + d);
                        x && u.push(x);
                        return u
                    };
                    f.prototype.bbox = function () {
                        var a = this.nc;
                        a.ca = this.Ne;
                        for (var b = a.Fa() + a.ca, d = 1, e = 0, f = 0, g = 0, h = Infinity, x = -Infinity, y = Infinity, A = -Infinity; a.ca <
                        b;)if (e || (e = a.Fa(), d = e & 7, e >>= 3), e--, 1 === d || 2 === d) f += a.Ad(), g += a.Ad(), f < h && (h = f), f > x && (x = f), g < y && (y = g), g > A && (A = g); else if (7 !== d)throw Error("unknown command " + d);
                        return [h, y, x, A]
                    }
                }, {"point-geometry": 1}],
                5: [function (a, b) {
                    function f(a, b) {
                        this.version = 1;
                        this.name = null;
                        this.extent = 4096;
                        this.length = 0;
                        this.nc = a;
                        this.Ld = [];
                        this.Nd = [];
                        this.Kd = [];
                        a.If(g, this, b);
                        this.length = this.Kd.length
                    }

                    function g(a, b, d) {
                        15 === a ? b.version = d.Fa() : 1 === a ? b.name = d.Mf() : 5 === a ? b.extent = d.Fa() : 2 === a ? b.Kd.push(d.ca) : 3 === a ? b.Ld.push(d.Mf()) :
                        4 === a && b.Nd.push(h(d))
                    }

                    function h(a) {
                        for (var b = null, d = a.Fa() + a.ca; a.ca < d;)b = a.Fa() >> 3, b = 1 === b ? a.Mf() : 2 === b ? a.qo() : 3 === b ? a.mo() : 4 === b ? a.Bo() : 5 === b ? a.Fa() : 6 === b ? a.Ad() : 7 === b ? a.ko() : null;
                        return b
                    }

                    var l = a("./vectortilefeature.js");
                    b.ja = f;
                    f.prototype.feature = function (a) {
                        if (0 > a || a >= this.Kd.length)throw Error("feature index out of bounds");
                        this.nc.ca = this.Kd[a];
                        a = this.nc.Fa() + this.nc.ca;
                        return new l(this.nc, a, this.extent, this.Ld, this.Nd)
                    }
                }, {"./vectortilefeature.js": 4}]
            }, {}, [2])(2)
        });
        pr = b.ja
    })();
    function sr(a, b, c, d) {
        this.g = a;
        this.b = b;
        this.c = c;
        this.f = d
    }

    k = sr.prototype;
    k.get = function (a) {
        return this.f[a]
    };
    k.Eb = function () {
        return this.c
    };
    k.D = function () {
        this.a || (this.a = "Point" === this.g ? Lb(this.b) : Mb(this.b, 0, this.b.length, 2));
        return this.a
    };
    k.Ob = function () {
        return this.b
    };
    k.ka = sr.prototype.Ob;
    k.V = function () {
        return this
    };
    k.Bm = function () {
        return this.f
    };
    k.pd = sr.prototype.V;
    k.sa = function () {
        return 2
    };
    k.zc = da;
    k.X = function () {
        return this.g
    };
    function tr(a) {
        Tm.call(this);
        a = a ? a : {};
        this.defaultDataProjection = new lc({code: "", units: "tile-pixels"});
        this.b = a.featureClass ? a.featureClass : sr;
        this.g = a.geometryName ? a.geometryName : "geometry";
        this.a = a.layerName ? a.layerName : "layer";
        this.f = a.layers ? a.layers : null
    }

    v(tr, Tm);
    tr.prototype.X = function () {
        return "arraybuffer"
    };
    tr.prototype.Ha = function (a, b) {
        var c = this.f, d = new or(a), d = new pr.Ui(d), e = [], f = this.b, g, h, l;
        for (l in d.layers)if (!c || -1 != c.indexOf(l)) {
            g = d.layers[l];
            for (var m = 0, n = g.length; m < n; ++m) {
                if (f === sr) {
                    var p = g.feature(m);
                    h = l;
                    var q = p.Ng(), r = [], u = [];
                    ur(q, u, r);
                    var x = p.type, y = void 0;
                    1 === x ? y = 1 === q.length ? "Point" : "MultiPoint" : 2 === x ? y = 1 === q.length ? "LineString" : "MultiLineString" : 3 === x && (y = "Polygon");
                    p = p.properties;
                    p[this.a] = h;
                    h = new this.b(y, u, r, p)
                } else {
                    q = g.feature(m);
                    p = l;
                    y = b;
                    h = new this.b;
                    r = q.id;
                    u = q.properties;
                    u[this.a] =
                        p;
                    p = q.type;
                    if (0 === p) p = null; else {
                        var q = q.Ng(), x = [], A = [];
                        ur(q, A, x);
                        var z = void 0;
                        1 === p ? z = 1 === q.length ? new B(null) : new S(null) : 2 === p ? 1 === q.length ? z = new P(null) : z = new Q(null) : 3 === p && (z = new C(null));
                        z.aa("XY", A, x);
                        p = z
                    }
                    (y = Wm(p, !1, Vm(this, y))) && (u[this.g] = y);
                    h.Wb(r);
                    h.H(u);
                    h.Dc(this.g)
                }
                e.push(h)
            }
        }
        return e
    };
    tr.prototype.Sa = function () {
        return this.defaultDataProjection
    };
    tr.prototype.c = function (a) {
        this.f = a
    };
    function ur(a, b, c) {
        for (var d = 0, e = 0, f = a.length; e < f; ++e) {
            var g = a[e], h, l;
            h = 0;
            for (l = g.length; h < l; ++h) {
                var m = g[h];
                b.push(m.x, m.y)
            }
            d += 2 * h;
            c.push(d)
        }
    };
    function vr() {
        Sn.call(this);
        this.defaultDataProjection = oc("EPSG:4326")
    }

    v(vr, Sn);
    function wr(a, b) {
        b[b.length - 1].Fd[a.getAttribute("k")] = a.getAttribute("v")
    }

    var xr = [null], yr = N(xr, {
        nd: function (a, b) {
            b[b.length - 1].Oc.push(a.getAttribute("ref"))
        }, tag: wr
    }), Ar = N(xr, {
        node: function (a, b) {
            var c = b[0], d = b[b.length - 1], e = a.getAttribute("id"), f = [parseFloat(a.getAttribute("lon")), parseFloat(a.getAttribute("lat"))];
            d.Rg[e] = f;
            var g = O({Fd: {}}, zr, a, b);
            xa(g.Fd) || (f = new B(f), Wm(f, !1, c), c = new I(f), c.Wb(e), c.H(g.Fd), d.features.push(c))
        }, way: function (a, b) {
            for (var c = b[0], d = a.getAttribute("id"), e = O({
                Oc: [],
                Fd: {}
            }, yr, a, b), f = b[b.length - 1], g = [], h = 0, l = e.Oc.length; h < l; h++)ab(g, f.Rg[e.Oc[h]]);
            e.Oc[0] == e.Oc[e.Oc.length - 1] ? (h = new C(null), h.aa("XY", g, [g.length])) : (h = new P(null), h.aa("XY", g));
            Wm(h, !1, c);
            c = new I(h);
            c.Wb(d);
            c.H(e.Fd);
            f.features.push(c)
        }
    }), zr = N(xr, {tag: wr});
    vr.prototype.kc = function (a, b) {
        var c = Um(this, a, b);
        return "osm" == a.localName && (c = O({Rg: {}, features: []}, Ar, a, [c]), c.features) ? c.features : []
    };
    function Br(a) {
        return a.getAttributeNS("http://www.w3.org/1999/xlink", "href")
    };
    function Cr() {
    }

    Cr.prototype.read = function (a) {
        return Cm(a) ? this.a(a) : Dm(a) ? this.b(a) : "string" === typeof a ? (a = Em(a), this.a(a)) : null
    };
    function Dr() {
    }

    v(Dr, Cr);
    Dr.prototype.a = function (a) {
        for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType == Node.ELEMENT_NODE)return this.b(a);
        return null
    };
    Dr.prototype.b = function (a) {
        return (a = O({}, Er, a, [])) ? a : null
    };
    var Fr = [null, "http://www.opengis.net/ows/1.1"], Er = N(Fr, {
            ServiceIdentification: J(function (a, b) {
                return O({}, Gr, a, b)
            }), ServiceProvider: J(function (a, b) {
                return O({}, Hr, a, b)
            }), OperationsMetadata: J(function (a, b) {
                return O({}, Ir, a, b)
            })
        }), Jr = N(Fr, {
            DeliveryPoint: J(U),
            City: J(U),
            AdministrativeArea: J(U),
            PostalCode: J(U),
            Country: J(U),
            ElectronicMailAddress: J(U)
        }), Kr = N(Fr, {
            Value: Im(function (a) {
                return U(a)
            })
        }), Lr = N(Fr, {
            AllowedValues: J(function (a, b) {
                return O({}, Kr, a, b)
            })
        }), Nr = N(Fr, {
            Phone: J(function (a, b) {
                return O({},
                    Mr, a, b)
            }), Address: J(function (a, b) {
                return O({}, Jr, a, b)
            })
        }), Pr = N(Fr, {
            HTTP: J(function (a, b) {
                return O({}, Or, a, b)
            })
        }), Or = N(Fr, {
            Get: Im(function (a, b) {
                var c = Br(a);
                return c ? O({href: c}, Qr, a, b) : void 0
            }), Post: void 0
        }), Rr = N(Fr, {
            DCP: J(function (a, b) {
                return O({}, Pr, a, b)
            })
        }), Ir = N(Fr, {
            Operation: function (a, b) {
                var c = a.getAttribute("name"), d = O({}, Rr, a, b);
                d && (b[b.length - 1][c] = d)
            }
        }), Mr = N(Fr, {Voice: J(U), Facsimile: J(U)}), Qr = N(Fr, {
            Constraint: Im(function (a, b) {
                var c = a.getAttribute("name");
                return c ? O({name: c}, Lr, a, b) : void 0
            })
        }),
        Sr = N(Fr, {
            IndividualName: J(U), PositionName: J(U), ContactInfo: J(function (a, b) {
                return O({}, Nr, a, b)
            })
        }), Gr = N(Fr, {Title: J(U), ServiceTypeVersion: J(U), ServiceType: J(U)}), Hr = N(Fr, {
            ProviderName: J(U),
            ProviderSite: J(Br),
            ServiceContact: J(function (a, b) {
                return O({}, Sr, a, b)
            })
        });

    function Tr(a, b, c, d) {
        var e;
        void 0 !== d ? e = d : e = [];
        for (var f = d = 0; f < b;) {
            var g = a[f++];
            e[d++] = a[f++];
            e[d++] = g;
            for (g = 2; g < c; ++g)e[d++] = a[f++]
        }
        e.length = d
    };
    function Ur(a) {
        a = a ? a : {};
        Tm.call(this);
        this.defaultDataProjection = oc("EPSG:4326");
        this.b = a.factor ? a.factor : 1E5;
        this.a = a.geometryLayout ? a.geometryLayout : "XY"
    }

    v(Ur, $o);
    function Vr(a, b, c) {
        var d, e = Array(b);
        for (d = 0; d < b; ++d)e[d] = 0;
        var f, g;
        f = 0;
        for (g = a.length; f < g;)for (d = 0; d < b; ++d, ++f) {
            var h = a[f], l = h - e[d];
            e[d] = h;
            a[f] = l
        }
        return Wr(a, c ? c : 1E5)
    }

    function Xr(a, b, c) {
        var d, e = Array(b);
        for (d = 0; d < b; ++d)e[d] = 0;
        a = Yr(a, c ? c : 1E5);
        var f;
        c = 0;
        for (f = a.length; c < f;)for (d = 0; d < b; ++d, ++c)e[d] += a[c], a[c] = e[d];
        return a
    }

    function Wr(a, b) {
        var c = b ? b : 1E5, d, e;
        d = 0;
        for (e = a.length; d < e; ++d)a[d] = Math.round(a[d] * c);
        c = 0;
        for (d = a.length; c < d; ++c)e = a[c], a[c] = 0 > e ? ~(e << 1) : e << 1;
        c = "";
        d = 0;
        for (e = a.length; d < e; ++d) {
            for (var f = a[d], g, h = ""; 32 <= f;)g = (32 | f & 31) + 63, h += String.fromCharCode(g), f >>= 5;
            h += String.fromCharCode(f + 63);
            c += h
        }
        return c
    }

    function Yr(a, b) {
        var c = b ? b : 1E5, d = [], e = 0, f = 0, g, h;
        g = 0;
        for (h = a.length; g < h; ++g) {
            var l = a.charCodeAt(g) - 63, e = e | (l & 31) << f;
            32 > l ? (d.push(e), f = e = 0) : f += 5
        }
        e = 0;
        for (f = d.length; e < f; ++e)g = d[e], d[e] = g & 1 ? ~(g >> 1) : g >> 1;
        e = 0;
        for (f = d.length; e < f; ++e)d[e] /= c;
        return d
    }

    k = Ur.prototype;
    k.xd = function (a, b) {
        var c = this.zd(a, b);
        return new I(c)
    };
    k.Hf = function (a, b) {
        return [this.xd(a, b)]
    };
    k.zd = function (a, b) {
        var c = Rc(this.a), d = Xr(a, c, this.b);
        Tr(d, d.length, c, d);
        c = ed(d, 0, d.length, c);
        return Wm(new P(c, this.a), !1, Vm(this, b))
    };
    k.Fe = function (a, b) {
        var c = a.V();
        if (c)return this.Hd(c, b);
        ha(!1, 40);
        return ""
    };
    k.ui = function (a, b) {
        return this.Fe(a[0], b)
    };
    k.Hd = function (a, b) {
        a = Wm(a, !0, Vm(this, b));
        var c = a.ka(), d = a.sa();
        Tr(c, c.length, d, c);
        return Vr(c, d, this.b)
    };
    function Zr(a) {
        a = a ? a : {};
        Tm.call(this);
        this.defaultDataProjection = oc(a.defaultDataProjection ? a.defaultDataProjection : "EPSG:4326")
    }

    v(Zr, Xm);
    function $r(a, b) {
        var c = [], d, e, f, g;
        f = 0;
        for (g = a.length; f < g; ++f)d = a[f], 0 < f && c.pop(), 0 <= d ? e = b[d] : e = b[~d].slice().reverse(), c.push.apply(c, e);
        d = 0;
        for (e = c.length; d < e; ++d)c[d] = c[d].slice();
        return c
    }

    function as(a, b, c, d, e) {
        a = a.geometries;
        var f = [], g, h;
        g = 0;
        for (h = a.length; g < h; ++g)f[g] = bs(a[g], b, c, d, e);
        return f
    }

    function bs(a, b, c, d, e) {
        var f = a.type, g = cs[f];
        b = "Point" === f || "MultiPoint" === f ? g(a, c, d) : g(a, b);
        c = new I;
        c.Pa(Wm(b, !1, e));
        void 0 !== a.id && c.Wb(a.id);
        a.properties && c.H(a.properties);
        return c
    }

    Zr.prototype.Gf = function (a, b) {
        if ("Topology" == a.type) {
            var c, d = null, e = null;
            a.transform && (c = a.transform, d = c.scale, e = c.translate);
            var f = a.arcs;
            if (c) {
                c = d;
                var g = e, h, l;
                h = 0;
                for (l = f.length; h < l; ++h) {
                    var m = f[h], n = c, p = g, q = 0, r = 0, u, x, y;
                    x = 0;
                    for (y = m.length; x < y; ++x)u = m[x], q += u[0], r += u[1], u[0] = q, u[1] = r, ds(u, n, p)
                }
            }
            c = [];
            g = wa(a.objects);
            h = 0;
            for (l = g.length; h < l; ++h)"GeometryCollection" === g[h].type ? (m = g[h], c.push.apply(c, as(m, f, d, e, b))) : (m = g[h], c.push(bs(m, f, d, e, b)));
            return c
        }
        return []
    };
    function ds(a, b, c) {
        a[0] = a[0] * b[0] + c[0];
        a[1] = a[1] * b[1] + c[1]
    }

    Zr.prototype.Sa = function () {
        return this.defaultDataProjection
    };
    var cs = {
        Point: function (a, b, c) {
            a = a.coordinates;
            b && c && ds(a, b, c);
            return new B(a)
        }, LineString: function (a, b) {
            var c = $r(a.arcs, b);
            return new P(c)
        }, Polygon: function (a, b) {
            var c = [], d, e;
            d = 0;
            for (e = a.arcs.length; d < e; ++d)c[d] = $r(a.arcs[d], b);
            return new C(c)
        }, MultiPoint: function (a, b, c) {
            a = a.coordinates;
            var d, e;
            if (b && c)for (d = 0, e = a.length; d < e; ++d)ds(a[d], b, c);
            return new S(a)
        }, MultiLineString: function (a, b) {
            var c = [], d, e;
            d = 0;
            for (e = a.arcs.length; d < e; ++d)c[d] = $r(a.arcs[d], b);
            return new Q(c)
        }, MultiPolygon: function (a, b) {
            var c =
                [], d, e, f, g, h, l;
            h = 0;
            for (l = a.arcs.length; h < l; ++h) {
                d = a.arcs[h];
                e = [];
                f = 0;
                for (g = d.length; f < g; ++f)e[f] = $r(d[f], b);
                c[h] = e
            }
            return new T(c)
        }
    };

    function es(a) {
        a = a ? a : {};
        this.i = a.featureType;
        this.g = a.featureNS;
        this.b = a.gmlFormat ? a.gmlFormat : new io;
        this.c = a.schemaLocation ? a.schemaLocation : "http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd";
        Sn.call(this)
    }

    v(es, Sn);
    es.prototype.kc = function (a, b) {
        var c = {featureType: this.i, featureNS: this.g};
        ua(c, Um(this, a, b ? b : {}));
        c = [c];
        this.b.b["http://www.opengis.net/gml"].featureMember = Gm(Vn.prototype.yd);
        (c = O([], this.b.b, a, c, this.b)) || (c = []);
        return c
    };
    es.prototype.o = function (a) {
        if (Cm(a))return fs(a);
        if (Dm(a))return O({}, gs, a, []);
        if ("string" === typeof a)return a = Em(a), fs(a)
    };
    es.prototype.l = function (a) {
        if (Cm(a))return hs(this, a);
        if (Dm(a))return is(this, a);
        if ("string" === typeof a)return a = Em(a), hs(this, a)
    };
    function hs(a, b) {
        for (var c = b.firstChild; c; c = c.nextSibling)if (c.nodeType == Node.ELEMENT_NODE)return is(a, c)
    }

    var js = {"http://www.opengis.net/gml": {boundedBy: J(Vn.prototype.xe, "bounds")}};

    function is(a, b) {
        var c = {}, d = co(b.getAttribute("numberOfFeatures"));
        c.numberOfFeatures = d;
        return O(c, js, b, [], a.b)
    }

    var ks = {
        "http://www.opengis.net/wfs": {
            totalInserted: J(bo),
            totalUpdated: J(bo),
            totalDeleted: J(bo)
        }
    }, ls = {
        "http://www.opengis.net/ogc": {
            FeatureId: Gm(function (a) {
                return a.getAttribute("fid")
            })
        }
    }, ms = {
        "http://www.opengis.net/wfs": {
            Feature: function (a, b) {
                Om(ls, a, b)
            }
        }
    }, gs = {
        "http://www.opengis.net/wfs": {
            TransactionSummary: J(function (a, b) {
                return O({}, ks, a, b)
            }, "transactionSummary"), InsertResults: J(function (a, b) {
                return O([], ms, a, b)
            }, "insertIds")
        }
    };

    function fs(a) {
        for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType == Node.ELEMENT_NODE)return O({}, gs, a, [])
    }

    var ns = {"http://www.opengis.net/wfs": {PropertyName: M(fo)}};

    function os(a, b) {
        var c = zm("http://www.opengis.net/ogc", "Filter"), d = zm("http://www.opengis.net/ogc", "FeatureId");
        c.appendChild(d);
        d.setAttribute("fid", b);
        a.appendChild(c)
    }

    var ps = {
        "http://www.opengis.net/wfs": {
            Insert: M(function (a, b, c) {
                var d = c[c.length - 1], d = zm(d.featureNS, d.featureType);
                a.appendChild(d);
                io.prototype.ti(d, b, c)
            }), Update: M(function (a, b, c) {
                var d = c[c.length - 1];
                ha(void 0 !== b.a, 27);
                var e = d.featureType, f = d.featurePrefix, f = f ? f : "feature", g = d.featureNS;
                a.setAttribute("typeName", f + ":" + e);
                a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + f, g);
                e = b.a;
                if (void 0 !== e) {
                    for (var f = b.O(), g = [], h = 0, l = f.length; h < l; h++) {
                        var m = b.get(f[h]);
                        void 0 !== m && g.push({
                            name: f[h],
                            value: m
                        })
                    }
                    Pm({node: a, srsName: d.srsName}, ps, Km("Property"), g, c);
                    os(a, e)
                }
            }), Delete: M(function (a, b, c) {
                var d = c[c.length - 1];
                ha(void 0 !== b.a, 26);
                c = d.featureType;
                var e = d.featurePrefix, e = e ? e : "feature", d = d.featureNS;
                a.setAttribute("typeName", e + ":" + c);
                a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + e, d);
                b = b.a;
                void 0 !== b && os(a, b)
            }), Property: M(function (a, b, c) {
                var d = zm("http://www.opengis.net/wfs", "Name");
                a.appendChild(d);
                fo(d, b.name);
                void 0 !== b.value && null !== b.value && (d = zm("http://www.opengis.net/wfs",
                    "Value"), a.appendChild(d), b.value instanceof Mc ? io.prototype.ad(d, b.value, c) : fo(d, b.value))
            }), Native: M(function (a, b) {
                b.ip && a.setAttribute("vendorId", b.ip);
                void 0 !== b.No && a.setAttribute("safeToIgnore", b.No);
                void 0 !== b.value && fo(a, b.value)
            })
        }
    };

    function qs(a, b, c) {
        a = {node: a};
        var d = b.b;
        Pm(a, rs, Km(d.Hb), [d], c);
        b = b.a;
        Pm(a, rs, Km(b.Hb), [b], c)
    }

    function ss(a, b) {
        void 0 !== b.a && a.setAttribute("matchCase", b.a.toString());
        ts(a, b.b);
        us(a, "" + b.g)
    }

    function vs(a, b, c) {
        a = zm("http://www.opengis.net/ogc", a);
        fo(a, c);
        b.appendChild(a)
    }

    function ts(a, b) {
        vs("PropertyName", a, b)
    }

    function us(a, b) {
        vs("Literal", a, b)
    }

    var rs = {
        "http://www.opengis.net/wfs": {
            Query: M(function (a, b, c) {
                var d = c[c.length - 1], e = d.featurePrefix, f = d.featureNS, g = d.propertyNames, h = d.srsName;
                a.setAttribute("typeName", (e ? e + ":" : "") + b);
                h && a.setAttribute("srsName", h);
                f && a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + e, f);
                b = ua({}, d);
                b.node = a;
                Pm(b, ns, Km("PropertyName"), g, c);
                if (d = d.filter) g = zm("http://www.opengis.net/ogc", "Filter"), a.appendChild(g), Pm({node: g}, rs, Km(d.Hb), [d], c)
            })
        }, "http://www.opengis.net/ogc": {
            And: M(qs),
            Or: M(qs),
            Not: M(function (a,
                             b, c) {
                b = b.condition;
                Pm({node: a}, rs, Km(b.Hb), [b], c)
            }),
            BBOX: M(function (a, b, c) {
                c[c.length - 1].srsName = b.srsName;
                ts(a, b.geometryName);
                io.prototype.ad(a, b.extent, c)
            }),
            Intersects: M(function (a, b, c) {
                c[c.length - 1].srsName = b.srsName;
                ts(a, b.geometryName);
                io.prototype.ad(a, b.geometry, c)
            }),
            Within: M(function (a, b, c) {
                c[c.length - 1].srsName = b.srsName;
                ts(a, b.geometryName);
                io.prototype.ad(a, b.geometry, c)
            }),
            PropertyIsEqualTo: M(ss),
            PropertyIsNotEqualTo: M(ss),
            PropertyIsLessThan: M(ss),
            PropertyIsLessThanOrEqualTo: M(ss),
            PropertyIsGreaterThan: M(ss),
            PropertyIsGreaterThanOrEqualTo: M(ss),
            PropertyIsNull: M(function (a, b) {
                ts(a, b.b)
            }),
            PropertyIsBetween: M(function (a, b) {
                ts(a, b.b);
                var c = zm("http://www.opengis.net/ogc", "LowerBoundary");
                a.appendChild(c);
                us(c, "" + b.a);
                c = zm("http://www.opengis.net/ogc", "UpperBoundary");
                a.appendChild(c);
                us(c, "" + b.g)
            }),
            PropertyIsLike: M(function (a, b) {
                a.setAttribute("wildCard", b.i);
                a.setAttribute("singleChar", b.c);
                a.setAttribute("escapeChar", b.g);
                void 0 !== b.a && a.setAttribute("matchCase", b.a.toString());
                ts(a, b.b);
                us(a, "" + b.f)
            })
        }
    };
    es.prototype.s = function (a) {
        var b = zm("http://www.opengis.net/wfs", "GetFeature");
        b.setAttribute("service", "WFS");
        b.setAttribute("version", "1.1.0");
        var c;
        if (a && (a.handle && b.setAttribute("handle", a.handle), a.outputFormat && b.setAttribute("outputFormat", a.outputFormat), void 0 !== a.maxFeatures && b.setAttribute("maxFeatures", a.maxFeatures), a.resultType && b.setAttribute("resultType", a.resultType), void 0 !== a.startIndex && b.setAttribute("startIndex", a.startIndex), void 0 !== a.count && b.setAttribute("count", a.count),
                c = a.filter, a.bbox)) {
            ha(a.geometryName, 12);
            var d = In(a.geometryName, a.bbox, a.srsName);
            c ? c = Hn(c, d) : c = d
        }
        b.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.c);
        c = {
            node: b,
            srsName: a.srsName,
            featureNS: a.featureNS ? a.featureNS : this.g,
            featurePrefix: a.featurePrefix,
            geometryName: a.geometryName,
            filter: c,
            propertyNames: a.propertyNames ? a.propertyNames : []
        };
        ha(Array.isArray(a.featureTypes), 11);
        a = a.featureTypes;
        c = [c];
        d = ua({}, c[c.length - 1]);
        d.node = b;
        Pm(d, rs, Km("Query"), a, c);
        return b
    };
    es.prototype.C = function (a, b, c, d) {
        var e = [], f = zm("http://www.opengis.net/wfs", "Transaction");
        f.setAttribute("service", "WFS");
        f.setAttribute("version", "1.1.0");
        var g, h;
        d && (g = d.gmlOptions ? d.gmlOptions : {}, d.handle && f.setAttribute("handle", d.handle));
        f.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.c);
        a && (h = {
            node: f,
            featureNS: d.featureNS,
            featureType: d.featureType,
            featurePrefix: d.featurePrefix,
            srsName: d.srsName
        }, ua(h, g), Pm(h, ps, Km("Insert"), a, e));
        b && (h = {
            node: f, featureNS: d.featureNS,
            featureType: d.featureType, featurePrefix: d.featurePrefix, srsName: d.srsName
        }, ua(h, g), Pm(h, ps, Km("Update"), b, e));
        c && Pm({
            node: f,
            featureNS: d.featureNS,
            featureType: d.featureType,
            featurePrefix: d.featurePrefix,
            srsName: d.srsName
        }, ps, Km("Delete"), c, e);
        d.nativeElements && Pm({
            node: f,
            featureNS: d.featureNS,
            featureType: d.featureType,
            featurePrefix: d.featurePrefix,
            srsName: d.srsName
        }, ps, Km("Native"), d.nativeElements, e);
        return f
    };
    es.prototype.Lf = function (a) {
        for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType == Node.ELEMENT_NODE)return this.Ae(a);
        return null
    };
    es.prototype.Ae = function (a) {
        if (a.firstElementChild && a.firstElementChild.firstElementChild)for (a = a.firstElementChild.firstElementChild, a = a.firstElementChild; a; a = a.nextElementSibling)if (0 !== a.childNodes.length && (1 !== a.childNodes.length || 3 !== a.firstChild.nodeType)) {
            var b = [{}];
            this.b.xe(a, b);
            return oc(b.pop().srsName)
        }
        return null
    };
    function ws(a) {
        a = a ? a : {};
        Tm.call(this);
        this.b = void 0 !== a.splitCollection ? a.splitCollection : !1
    }

    v(ws, $o);
    function xs(a) {
        a = a.Y();
        return 0 === a.length ? "" : a[0] + " " + a[1]
    }

    function ys(a) {
        a = a.Y();
        for (var b = [], c = 0, d = a.length; c < d; ++c)b.push(a[c][0] + " " + a[c][1]);
        return b.join(",")
    }

    function zs(a) {
        var b = [];
        a = a.Wd();
        for (var c = 0, d = a.length; c < d; ++c)b.push("(" + ys(a[c]) + ")");
        return b.join(",")
    }

    function As(a) {
        var b = a.X();
        a = (0, Bs[b])(a);
        b = b.toUpperCase();
        return 0 === a.length ? b + " EMPTY" : b + "(" + a + ")"
    }

    var Bs = {
        Point: xs, LineString: ys, Polygon: zs, MultiPoint: function (a) {
            var b = [];
            a = a.je();
            for (var c = 0, d = a.length; c < d; ++c)b.push("(" + xs(a[c]) + ")");
            return b.join(",")
        }, MultiLineString: function (a) {
            var b = [];
            a = a.od();
            for (var c = 0, d = a.length; c < d; ++c)b.push("(" + ys(a[c]) + ")");
            return b.join(",")
        }, MultiPolygon: function (a) {
            var b = [];
            a = a.Xd();
            for (var c = 0, d = a.length; c < d; ++c)b.push("(" + zs(a[c]) + ")");
            return b.join(",")
        }, GeometryCollection: function (a) {
            var b = [];
            a = a.cf();
            for (var c = 0, d = a.length; c < d; ++c)b.push(As(a[c]));
            return b.join(",")
        }
    };
    k = ws.prototype;
    k.xd = function (a, b) {
        var c = this.zd(a, b);
        if (c) {
            var d = new I;
            d.Pa(c);
            return d
        }
        return null
    };
    k.Hf = function (a, b) {
        var c = [], d = this.zd(a, b);
        this.b && "GeometryCollection" == d.X() ? c = d.f : c = [d];
        for (var e = [], f = 0, g = c.length; f < g; ++f)d = new I, d.Pa(c[f]), e.push(d);
        return e
    };
    k.zd = function (a, b) {
        var c;
        c = new Cs(new Ds(a));
        c.b = Es(c.a);
        return (c = Fs(c)) ? Wm(c, !1, b) : null
    };
    k.Fe = function (a, b) {
        var c = a.V();
        return c ? this.Hd(c, b) : ""
    };
    k.ui = function (a, b) {
        if (1 == a.length)return this.Fe(a[0], b);
        for (var c = [], d = 0, e = a.length; d < e; ++d)c.push(a[d].V());
        c = new Jn(c);
        return this.Hd(c, b)
    };
    k.Hd = function (a, b) {
        return As(Wm(a, !0, b))
    };
    function Ds(a) {
        this.a = a;
        this.b = -1
    }

    function Es(a) {
        var b = a.a.charAt(++a.b), c = {position: a.b, value: b};
        if ("(" == b) c.type = 2; else if ("," == b) c.type = 5; else if (")" == b) c.type = 3; else if ("0" <= b && "9" >= b || "." == b || "-" == b) {
            c.type = 4;
            var d, b = a.b, e = !1, f = !1;
            do {
                if ("." == d) e = !0; else if ("e" == d || "E" == d) f = !0;
                d = a.a.charAt(++a.b)
            } while ("0" <= d && "9" >= d || "." == d && (void 0 === e || !e) || !f && ("e" == d || "E" == d) || f && ("-" == d || "+" == d));
            a = parseFloat(a.a.substring(b, a.b--));
            c.value = a
        } else if ("a" <= b && "z" >= b || "A" <= b && "Z" >= b) {
            c.type = 1;
            b = a.b;
            do d = a.a.charAt(++a.b); while ("a" <= d && "z" >=
            d || "A" <= d && "Z" >= d);
            a = a.a.substring(b, a.b--).toUpperCase();
            c.value = a
        } else {
            if (" " == b || "\t" == b || "\r" == b || "\n" == b)return Es(a);
            if ("" === b) c.type = 6; else throw Error("Unexpected character: " + b);
        }
        return c
    }

    function Cs(a) {
        this.a = a
    }

    function Gs(a, b) {
        var c = a.b.type == b;
        c && (a.b = Es(a.a));
        return c
    }

    function Fs(a) {
        var b = a.b;
        if (Gs(a, 1)) {
            var c = b.value;
            if ("GEOMETRYCOLLECTION" == c) {
                a:{
                    if (Gs(a, 2)) {
                        b = [];
                        do b.push(Fs(a)); while (Gs(a, 5));
                        if (Gs(a, 3)) {
                            a = b;
                            break a
                        }
                    } else if (Hs(a)) {
                        a = [];
                        break a
                    }
                    throw Error(Is(a));
                }
                return new Jn(a)
            }
            var d = Js[c], b = Ks[c];
            if (!d || !b)throw Error("Invalid geometry type: " + c);
            a = d.call(a);
            return new b(a)
        }
        throw Error(Is(a));
    }

    k = Cs.prototype;
    k.Cf = function () {
        if (Gs(this, 2)) {
            var a = Ls(this);
            if (Gs(this, 3))return a
        } else if (Hs(this))return null;
        throw Error(Is(this));
    };
    k.Bf = function () {
        if (Gs(this, 2)) {
            var a = Ms(this);
            if (Gs(this, 3))return a
        } else if (Hs(this))return [];
        throw Error(Is(this));
    };
    k.Df = function () {
        if (Gs(this, 2)) {
            var a = Ns(this);
            if (Gs(this, 3))return a
        } else if (Hs(this))return [];
        throw Error(Is(this));
    };
    k.Wn = function () {
        if (Gs(this, 2)) {
            var a;
            if (2 == this.b.type)for (a = [this.Cf()]; Gs(this, 5);)a.push(this.Cf()); else a = Ms(this);
            if (Gs(this, 3))return a
        } else if (Hs(this))return [];
        throw Error(Is(this));
    };
    k.Vn = function () {
        if (Gs(this, 2)) {
            var a = Ns(this);
            if (Gs(this, 3))return a
        } else if (Hs(this))return [];
        throw Error(Is(this));
    };
    k.Xn = function () {
        if (Gs(this, 2)) {
            for (var a = [this.Df()]; Gs(this, 5);)a.push(this.Df());
            if (Gs(this, 3))return a
        } else if (Hs(this))return [];
        throw Error(Is(this));
    };
    function Ls(a) {
        for (var b = [], c = 0; 2 > c; ++c) {
            var d = a.b;
            if (Gs(a, 4)) b.push(d.value); else break
        }
        if (2 == b.length)return b;
        throw Error(Is(a));
    }

    function Ms(a) {
        for (var b = [Ls(a)]; Gs(a, 5);)b.push(Ls(a));
        return b
    }

    function Ns(a) {
        for (var b = [a.Bf()]; Gs(a, 5);)b.push(a.Bf());
        return b
    }

    function Hs(a) {
        var b = 1 == a.b.type && "EMPTY" == a.b.value;
        b && (a.b = Es(a.a));
        return b
    }

    function Is(a) {
        return "Unexpected `" + a.b.value + "` at position " + a.b.position + " in `" + a.a.a + "`"
    }

    var Ks = {
        POINT: B,
        LINESTRING: P,
        POLYGON: C,
        MULTIPOINT: S,
        MULTILINESTRING: Q,
        MULTIPOLYGON: T
    }, Js = {
        POINT: Cs.prototype.Cf,
        LINESTRING: Cs.prototype.Bf,
        POLYGON: Cs.prototype.Df,
        MULTIPOINT: Cs.prototype.Wn,
        MULTILINESTRING: Cs.prototype.Vn,
        MULTIPOLYGON: Cs.prototype.Xn
    };

    function Os() {
        this.version = void 0
    }

    v(Os, Cr);
    Os.prototype.a = function (a) {
        for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType == Node.ELEMENT_NODE)return this.b(a);
        return null
    };
    Os.prototype.b = function (a) {
        this.version = a.getAttribute("version").trim();
        return (a = O({version: this.version}, Ps, a, [])) ? a : null
    };
    function Qs(a, b) {
        return O({}, Rs, a, b)
    }

    function Ts(a, b) {
        return O({}, Us, a, b)
    }

    function Vs(a, b) {
        var c = Qs(a, b);
        if (c) {
            var d = [co(a.getAttribute("width")), co(a.getAttribute("height"))];
            c.size = d;
            return c
        }
    }

    function Ws(a, b) {
        return O([], Xs, a, b)
    }

    var Ys = [null, "http://www.opengis.net/wms"], Ps = N(Ys, {
        Service: J(function (a, b) {
            return O({}, Zs, a, b)
        }), Capability: J(function (a, b) {
            return O({}, $s, a, b)
        })
    }), $s = N(Ys, {
        Request: J(function (a, b) {
            return O({}, at, a, b)
        }), Exception: J(function (a, b) {
            return O([], bt, a, b)
        }), Layer: J(function (a, b) {
            return O({}, ct, a, b)
        })
    }), Zs = N(Ys, {
        Name: J(U),
        Title: J(U),
        Abstract: J(U),
        KeywordList: J(Ws),
        OnlineResource: J(Br),
        ContactInformation: J(function (a, b) {
            return O({}, dt, a, b)
        }),
        Fees: J(U),
        AccessConstraints: J(U),
        LayerLimit: J(bo),
        MaxWidth: J(bo),
        MaxHeight: J(bo)
    }), dt = N(Ys, {
        ContactPersonPrimary: J(function (a, b) {
            return O({}, et, a, b)
        }), ContactPosition: J(U), ContactAddress: J(function (a, b) {
            return O({}, ft, a, b)
        }), ContactVoiceTelephone: J(U), ContactFacsimileTelephone: J(U), ContactElectronicMailAddress: J(U)
    }), et = N(Ys, {ContactPerson: J(U), ContactOrganization: J(U)}), ft = N(Ys, {
        AddressType: J(U),
        Address: J(U),
        City: J(U),
        StateOrProvince: J(U),
        PostCode: J(U),
        Country: J(U)
    }), bt = N(Ys, {Format: Gm(U)}), ct = N(Ys, {
        Name: J(U), Title: J(U), Abstract: J(U), KeywordList: J(Ws), CRS: Im(U),
        EX_GeographicBoundingBox: J(function (a, b) {
            var c = O({}, gt, a, b);
            if (c) {
                var d = c.westBoundLongitude, e = c.southBoundLatitude, f = c.eastBoundLongitude, c = c.northBoundLatitude;
                return void 0 === d || void 0 === e || void 0 === f || void 0 === c ? void 0 : [d, e, f, c]
            }
        }), BoundingBox: Im(function (a) {
            var b = [ao(a.getAttribute("minx")), ao(a.getAttribute("miny")), ao(a.getAttribute("maxx")), ao(a.getAttribute("maxy"))], c = [ao(a.getAttribute("resx")), ao(a.getAttribute("resy"))];
            return {crs: a.getAttribute("CRS"), extent: b, res: c}
        }), Dimension: Im(function (a) {
            return {
                name: a.getAttribute("name"),
                units: a.getAttribute("units"),
                unitSymbol: a.getAttribute("unitSymbol"),
                "default": a.getAttribute("default"),
                multipleValues: Yn(a.getAttribute("multipleValues")),
                nearestValue: Yn(a.getAttribute("nearestValue")),
                current: Yn(a.getAttribute("current")),
                values: U(a)
            }
        }), Attribution: J(function (a, b) {
            return O({}, ht, a, b)
        }), AuthorityURL: Im(function (a, b) {
            var c = Qs(a, b);
            if (c)return c.name = a.getAttribute("name"), c
        }), Identifier: Im(U), MetadataURL: Im(function (a, b) {
            var c = Qs(a, b);
            if (c)return c.type = a.getAttribute("type"),
                c
        }), DataURL: Im(Qs), FeatureListURL: Im(Qs), Style: Im(function (a, b) {
            return O({}, it, a, b)
        }), MinScaleDenominator: J($n), MaxScaleDenominator: J($n), Layer: Im(function (a, b) {
            var c = b[b.length - 1], d = O({}, ct, a, b);
            if (d) {
                var e = Yn(a.getAttribute("queryable"));
                void 0 === e && (e = c.queryable);
                d.queryable = void 0 !== e ? e : !1;
                e = co(a.getAttribute("cascaded"));
                void 0 === e && (e = c.cascaded);
                d.cascaded = e;
                e = Yn(a.getAttribute("opaque"));
                void 0 === e && (e = c.opaque);
                d.opaque = void 0 !== e ? e : !1;
                e = Yn(a.getAttribute("noSubsets"));
                void 0 === e && (e = c.noSubsets);
                d.noSubsets = void 0 !== e ? e : !1;
                (e = ao(a.getAttribute("fixedWidth"))) || (e = c.fixedWidth);
                d.fixedWidth = e;
                (e = ao(a.getAttribute("fixedHeight"))) || (e = c.fixedHeight);
                d.fixedHeight = e;
                ["Style", "CRS", "AuthorityURL"].forEach(function (a) {
                    a in c && (d[a] = (d[a] || []).concat(c[a]))
                });
                "EX_GeographicBoundingBox BoundingBox Dimension Attribution MinScaleDenominator MaxScaleDenominator".split(" ").forEach(function (a) {
                    a in d || (d[a] = c[a])
                });
                return d
            }
        })
    }), ht = N(Ys, {Title: J(U), OnlineResource: J(Br), LogoURL: J(Vs)}), gt = N(Ys, {
        westBoundLongitude: J($n),
        eastBoundLongitude: J($n), southBoundLatitude: J($n), northBoundLatitude: J($n)
    }), at = N(Ys, {GetCapabilities: J(Ts), GetMap: J(Ts), GetFeatureInfo: J(Ts)}), Us = N(Ys, {
        Format: Im(U),
        DCPType: Im(function (a, b) {
            return O({}, jt, a, b)
        })
    }), jt = N(Ys, {
        HTTP: J(function (a, b) {
            return O({}, kt, a, b)
        })
    }), kt = N(Ys, {Get: J(Qs), Post: J(Qs)}), it = N(Ys, {
        Name: J(U),
        Title: J(U),
        Abstract: J(U),
        LegendURL: Im(Vs),
        StyleSheetURL: J(Qs),
        StyleURL: J(Qs)
    }), Rs = N(Ys, {Format: J(U), OnlineResource: J(Br)}), Xs = N(Ys, {Keyword: Gm(U)});

    function lt(a) {
        a = a ? a : {};
        this.g = "http://mapserver.gis.umn.edu/mapserver";
        this.b = new ro;
        this.c = a.layers ? a.layers : null;
        Sn.call(this)
    }

    v(lt, Sn);
    lt.prototype.kc = function (a, b) {
        var c = {};
        b && ua(c, Um(this, a, b));
        var d = [c];
        a.setAttribute("namespaceURI", this.g);
        var e = a.localName, c = [];
        if (0 !== a.childNodes.length) {
            if ("msGMLOutput" == e)for (var f = 0, g = a.childNodes.length; f < g; f++) {
                var h = a.childNodes[f];
                if (h.nodeType === Node.ELEMENT_NODE) {
                    var l = d[0], m = h.localName.replace("_layer", "");
                    if (!this.c || Ya(this.c, m)) {
                        m += "_feature";
                        l.featureType = m;
                        l.featureNS = this.g;
                        var n = {};
                        n[m] = Gm(this.b.Ff, this.b);
                        l = N([l.featureNS, null], n);
                        h.setAttribute("namespaceURI", this.g);
                        (h =
                            O([], l, h, d, this.b)) && ab(c, h)
                    }
                }
            }
            "FeatureCollection" == e && (d = O([], this.b.b, a, [{}], this.b)) && (c = d)
        }
        return c
    };
    function mt() {
        this.g = new Dr
    }

    v(mt, Cr);
    mt.prototype.a = function (a) {
        for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType == Node.ELEMENT_NODE)return this.b(a);
        return null
    };
    mt.prototype.b = function (a) {
        var b = a.getAttribute("version").trim(), c = this.g.b(a);
        if (!c)return null;
        c.version = b;
        return (c = O(c, nt, a, [])) ? c : null
    };
    function ot(a) {
        var b = U(a).split(" ");
        if (b && 2 == b.length)return a = +b[0], b = +b[1], isNaN(a) || isNaN(b) ? void 0 : [a, b]
    }

    var pt = [null, "http://www.opengis.net/wmts/1.0"], qt = [null, "http://www.opengis.net/ows/1.1"], nt = N(pt, {
            Contents: J(function (a, b) {
                return O({}, rt, a, b)
            })
        }), rt = N(pt, {
            Layer: Im(function (a, b) {
                return O({}, st, a, b)
            }), TileMatrixSet: Im(function (a, b) {
                return O({}, tt, a, b)
            })
        }), st = N(pt, {
            Style: Im(function (a, b) {
                var c = O({}, ut, a, b);
                if (c) {
                    var d = "true" === a.getAttribute("isDefault");
                    c.isDefault = d;
                    return c
                }
            }), Format: Im(U), TileMatrixSetLink: Im(function (a, b) {
                return O({}, vt, a, b)
            }), Dimension: Im(function (a, b) {
                return O({}, wt, a, b)
            }),
            ResourceURL: Im(function (a) {
                var b = a.getAttribute("format"), c = a.getAttribute("template");
                a = a.getAttribute("resourceType");
                var d = {};
                b && (d.format = b);
                c && (d.template = c);
                a && (d.resourceType = a);
                return d
            })
        }, N(qt, {
            Title: J(U), Abstract: J(U), WGS84BoundingBox: J(function (a, b) {
                var c = O([], xt, a, b);
                return 2 != c.length ? void 0 : Ab(c)
            }), Identifier: J(U)
        })), ut = N(pt, {
            LegendURL: Im(function (a) {
                var b = {};
                b.format = a.getAttribute("format");
                b.href = Br(a);
                return b
            })
        }, N(qt, {Title: J(U), Identifier: J(U)})), vt = N(pt, {TileMatrixSet: J(U)}),
        wt = N(pt, {Default: J(U), Value: Im(U)}, N(qt, {Identifier: J(U)})), xt = N(qt, {
            LowerCorner: Gm(ot),
            UpperCorner: Gm(ot)
        }), tt = N(pt, {
            WellKnownScaleSet: J(U), TileMatrix: Im(function (a, b) {
                return O({}, yt, a, b)
            })
        }, N(qt, {SupportedCRS: J(U), Identifier: J(U)})), yt = N(pt, {
            TopLeftCorner: J(ot),
            ScaleDenominator: J($n),
            TileWidth: J(bo),
            TileHeight: J(bo),
            MatrixWidth: J(bo),
            MatrixHeight: J(bo)
        }, N(qt, {Identifier: J(U)}));

    function zt(a) {
        Ta.call(this);
        a = a || {};
        this.a = null;
        this.c = Jc;
        this.f = void 0;
        w(this, Va(At), this.Al, this);
        w(this, Va(Bt), this.Bl, this);
        void 0 !== a.projection && this.Vg(oc(a.projection));
        void 0 !== a.trackingOptions && this.ji(a.trackingOptions);
        this.ge(void 0 !== a.tracking ? a.tracking : !1)
    }

    v(zt, Ta);
    k = zt.prototype;
    k.la = function () {
        this.ge(!1);
        Ta.prototype.la.call(this)
    };
    k.Al = function () {
        var a = this.Tg();
        a && (this.c = rc(oc("EPSG:4326"), a), this.a && this.set(Ct, this.c(this.a)))
    };
    k.Bl = function () {
        if (of) {
            var a = this.Ug();
            a && void 0 === this.f ? this.f = navigator.geolocation.watchPosition(this.eo.bind(this), this.fo.bind(this), this.Gg()) : a || void 0 === this.f || (navigator.geolocation.clearWatch(this.f), this.f = void 0)
        }
    };
    k.eo = function (a) {
        a = a.coords;
        this.set(Dt, a.accuracy);
        this.set(Et, null === a.altitude ? void 0 : a.altitude);
        this.set(Ft, null === a.altitudeAccuracy ? void 0 : a.altitudeAccuracy);
        this.set(Gt, null === a.heading ? void 0 : na(a.heading));
        this.a ? (this.a[0] = a.longitude, this.a[1] = a.latitude) : this.a = [a.longitude, a.latitude];
        var b = this.c(this.a);
        this.set(Ct, b);
        this.set(Ht, null === a.speed ? void 0 : a.speed);
        a = wd(Gh, this.a, a.accuracy);
        a.oc(this.c);
        this.set(It, a);
        this.v()
    };
    k.fo = function (a) {
        a.type = "error";
        this.ge(!1);
        this.b(a)
    };
    k.Aj = function () {
        return this.get(Dt)
    };
    k.Bj = function () {
        return this.get(It) || null
    };
    k.Dj = function () {
        return this.get(Et)
    };
    k.Ej = function () {
        return this.get(Ft)
    };
    k.yl = function () {
        return this.get(Gt)
    };
    k.zl = function () {
        return this.get(Ct)
    };
    k.Tg = function () {
        return this.get(At)
    };
    k.jk = function () {
        return this.get(Ht)
    };
    k.Ug = function () {
        return this.get(Bt)
    };
    k.Gg = function () {
        return this.get(Jt)
    };
    k.Vg = function (a) {
        this.set(At, a)
    };
    k.ge = function (a) {
        this.set(Bt, a)
    };
    k.ji = function (a) {
        this.set(Jt, a)
    };
    var Dt = "accuracy", It = "accuracyGeometry", Et = "altitude", Ft = "altitudeAccuracy", Gt = "heading", Ct = "position", At = "projection", Ht = "speed", Bt = "tracking", Jt = "trackingOptions";

    function Kt(a, b, c) {
        Oc.call(this);
        this.Sf(a, b ? b : 0, c)
    }

    v(Kt, Oc);
    k = Kt.prototype;
    k.clone = function () {
        var a = new Kt(null);
        Sc(a, this.ia, this.A.slice());
        a.v();
        return a
    };
    k.vb = function (a, b, c, d) {
        var e = this.A;
        a -= e[0];
        var f = b - e[1];
        b = a * a + f * f;
        if (b < d) {
            if (0 === b)for (d = 0; d < this.a; ++d)c[d] = e[d]; else for (d = this.vf() / Math.sqrt(b), c[0] = e[0] + d * a, c[1] = e[1] + d * f, d = 2; d < this.a; ++d)c[d] = e[d];
            c.length = this.a;
            return b
        }
        return d
    };
    k.Ac = function (a, b) {
        var c = this.A, d = a - c[0], c = b - c[1];
        return d * d + c * c <= Lt(this)
    };
    k.ud = function () {
        return this.A.slice(0, this.a)
    };
    k.Qd = function (a) {
        var b = this.A, c = b[this.a] - b[0];
        return Kb(b[0] - c, b[1] - c, b[0] + c, b[1] + c, a)
    };
    k.vf = function () {
        return Math.sqrt(Lt(this))
    };
    function Lt(a) {
        var b = a.A[a.a] - a.A[0];
        a = a.A[a.a + 1] - a.A[1];
        return b * b + a * a
    }

    k.X = function () {
        return "Circle"
    };
    k.Oa = function (a) {
        var b = this.D();
        return dc(a, b) ? (b = this.ud(), a[0] <= b[0] && a[2] >= b[0] || a[1] <= b[1] && a[3] >= b[1] ? !0 : Qb(a, this.jb, this)) : !1
    };
    k.Yl = function (a) {
        var b = this.a, c = a.slice();
        c[b] = c[0] + (this.A[b] - this.A[0]);
        var d;
        for (d = 1; d < b; ++d)c[b + d] = a[d];
        Sc(this, this.ia, c);
        this.v()
    };
    k.Sf = function (a, b, c) {
        if (a) {
            Tc(this, c, a, 0);
            this.A || (this.A = []);
            c = this.A;
            a = bd(c, a);
            c[a++] = c[0] + b;
            var d;
            b = 1;
            for (d = this.a; b < d; ++b)c[a++] = c[b];
            c.length = a
        } else Sc(this, "XY", null);
        this.v()
    };
    k.Zl = function (a) {
        this.A[this.a] = this.A[0] + a;
        this.v()
    };
    function Mt(a, b, c) {
        for (var d = [], e = a(0), f = a(1), g = b(e), h = b(f), l = [f, e], m = [h, g], n = [1, 0], p = {}, q = 1E5, r, u, x, y, A; 0 < --q && 0 < n.length;)x = n.pop(), e = l.pop(), g = m.pop(), f = x.toString(), f in p || (d.push(g[0], g[1]), p[f] = !0), y = n.pop(), f = l.pop(), h = m.pop(), A = (x + y) / 2, r = a(A), u = b(r), la(u[0], u[1], g[0], g[1], h[0], h[1]) < c ? (d.push(h[0], h[1]), f = y.toString(), p[f] = !0) : (n.push(y, A, A, x), m.push(h, u, u, g), l.push(f, r, r, e));
        return d
    }

    function Nt(a, b, c, d, e) {
        var f = oc("EPSG:4326");
        return Mt(function (d) {
            return [a, b + (c - b) * d]
        }, Ic(f, d), e)
    }

    function Ot(a, b, c, d, e) {
        var f = oc("EPSG:4326");
        return Mt(function (d) {
            return [b + (c - b) * d, a]
        }, Ic(f, d), e)
    };
    function Pt(a) {
        a = a || {};
        this.c = this.l = null;
        this.g = this.i = Infinity;
        this.f = this.j = -Infinity;
        this.C = this.u = Infinity;
        this.G = this.B = -Infinity;
        this.za = void 0 !== a.targetSize ? a.targetSize : 100;
        this.S = void 0 !== a.maxLines ? a.maxLines : 100;
        this.b = [];
        this.a = [];
        this.na = void 0 !== a.strokeStyle ? a.strokeStyle : Qt;
        this.T = this.o = void 0;
        this.s = null;
        this.setMap(void 0 !== a.map ? a.map : null)
    }

    var Qt = new Ai({color: "rgba(0,0,0,0.2)"}), Rt = [90, 45, 30, 20, 10, 5, 2, 1, .5, .2, .1, .05, .01, .005, .002, .001];

    function St(a, b, c, d, e, f, g) {
        var h = g;
        b = Nt(b, c, d, a.c, e);
        h = void 0 !== a.b[h] ? a.b[h] : new P(null);
        h.aa("XY", b);
        dc(h.D(), f) && (a.b[g++] = h);
        return g
    }

    function Tt(a, b, c, d, e) {
        var f = e;
        b = Ot(b, a.f, a.g, a.c, c);
        f = void 0 !== a.a[f] ? a.a[f] : new P(null);
        f.aa("XY", b);
        dc(f.D(), d) && (a.a[e++] = f);
        return e
    }

    k = Pt.prototype;
    k.Cl = function () {
        return this.l
    };
    k.Xj = function () {
        return this.b
    };
    k.dk = function () {
        return this.a
    };
    k.Lg = function (a) {
        var b = a.vectorContext, c = a.frameState, d = c.extent;
        a = c.viewState;
        var e = a.center, f = a.projection, g = a.resolution;
        a = c.pixelRatio;
        a = g * g / (4 * a * a);
        if (!this.c || !Hc(this.c, f)) {
            var h = oc("EPSG:4326"), l = f.D(), m = f.i, n = Lc(m, h, f), p = m[2], q = m[1], r = m[0], u = n[3], x = n[2], y = n[1], n = n[0];
            this.i = m[3];
            this.g = p;
            this.j = q;
            this.f = r;
            this.u = u;
            this.C = x;
            this.B = y;
            this.G = n;
            this.o = Ic(h, f);
            this.T = Ic(f, h);
            this.s = this.T(ac(l));
            this.c = f
        }
        f.a && (f = f.D(), h = Zb(f), c = c.focus[0], c < f[0] || c > f[2]) && (c = h * Math.ceil((f[0] - c) / h), d = [d[0] + c,
            d[1], d[2] + c, d[3]]);
        c = this.s[0];
        f = this.s[1];
        h = -1;
        m = Math.pow(this.za * g, 2);
        p = [];
        q = [];
        g = 0;
        for (l = Rt.length; g < l; ++g) {
            r = Rt[g] / 2;
            p[0] = c - r;
            p[1] = f - r;
            q[0] = c + r;
            q[1] = f + r;
            this.o(p, p);
            this.o(q, q);
            r = Math.pow(q[0] - p[0], 2) + Math.pow(q[1] - p[1], 2);
            if (r <= m)break;
            h = Rt[g]
        }
        g = h;
        if (-1 == g) this.b.length = this.a.length = 0; else {
            c = this.T(e);
            e = c[0];
            c = c[1];
            f = this.S;
            h = [Math.max(d[0], this.G), Math.max(d[1], this.B), Math.min(d[2], this.C), Math.min(d[3], this.u)];
            h = Lc(h, this.c, "EPSG:4326");
            m = h[3];
            q = h[1];
            e = Math.floor(e / g) * g;
            p = ia(e, this.f, this.g);
            l = St(this, p, q, m, a, d, 0);
            for (h = 0; p != this.f && h++ < f;)p = Math.max(p - g, this.f), l = St(this, p, q, m, a, d, l);
            p = ia(e, this.f, this.g);
            for (h = 0; p != this.g && h++ < f;)p = Math.min(p + g, this.g), l = St(this, p, q, m, a, d, l);
            this.b.length = l;
            c = Math.floor(c / g) * g;
            e = ia(c, this.j, this.i);
            l = Tt(this, e, a, d, 0);
            for (h = 0; e != this.j && h++ < f;)e = Math.max(e - g, this.j), l = Tt(this, e, a, d, l);
            e = ia(c, this.j, this.i);
            for (h = 0; e != this.i && h++ < f;)e = Math.min(e + g, this.i), l = Tt(this, e, a, d, l);
            this.a.length = l
        }
        b.Vb(null, this.na);
        a = 0;
        for (e = this.b.length; a < e; ++a)g = this.b[a],
            b.kd(g, null);
        a = 0;
        for (e = this.a.length; a < e; ++a)g = this.a[a], b.kd(g, null)
    };
    k.setMap = function (a) {
        this.l && (this.l.J("postcompose", this.Lg, this), this.l.render());
        a && (a.I("postcompose", this.Lg, this), a.render());
        this.l = a
    };
    function Ut(a, b, c, d, e) {
        jg.call(this, a, b);
        this.o = c;
        this.g = new Image;
        null !== d && (this.g.crossOrigin = d);
        this.j = null;
        this.s = e
    }

    v(Ut, jg);
    k = Ut.prototype;
    k.la = function () {
        1 == this.state && Vt(this);
        this.a && Ja(this.a);
        this.state = 5;
        kg(this);
        jg.prototype.la.call(this)
    };
    k.qb = function () {
        return this.g
    };
    k.Xa = function () {
        return this.o
    };
    k.Dl = function () {
        this.state = 3;
        Vt(this);
        kg(this)
    };
    k.El = function () {
        this.state = this.g.naturalWidth && this.g.naturalHeight ? mg : 4;
        Vt(this);
        kg(this)
    };
    k.load = function () {
        if (0 == this.state || 3 == this.state) this.state = 1, kg(this), this.j = [Ea(this.g, "error", this.Dl, this), Ea(this.g, "load", this.El, this)], this.s(this, this.o)
    };
    function Vt(a) {
        a.j.forEach(za);
        a.j = null
    };
    function Wt(a) {
        a = a ? a : {};
        wg.call(this, {handleEvent: gc});
        this.i = a.formatConstructors ? a.formatConstructors : [];
        this.l = a.projection ? oc(a.projection) : null;
        this.a = null;
        this.target = a.target ? a.target : null
    }

    v(Wt, wg);
    function Xt(a) {
        a = a.dataTransfer.files;
        var b, c, d;
        b = 0;
        for (c = a.length; b < c; ++b) {
            d = a.item(b);
            var e = new FileReader;
            e.addEventListener("load", this.j.bind(this, d));
            e.readAsText(d)
        }
    }

    function Yt(a) {
        a.stopPropagation();
        a.preventDefault();
        a.dataTransfer.dropEffect = "copy"
    }

    Wt.prototype.j = function (a, b) {
        var c = b.target.result, d = this.s, e = this.l;
        e || (e = d.$().l);
        var d = this.i, f = [], g, h;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var l = new d[g];
            var m = {featureProjection: e};
            try {
                f = l.Ha(c, m)
            } catch (n) {
                f = null
            }
            if (f && 0 < f.length)break
        }
        this.b(new Zt($t, a, f, e))
    };
    Wt.prototype.setMap = function (a) {
        this.a && (this.a.forEach(za), this.a = null);
        wg.prototype.setMap.call(this, a);
        a && (a = this.target ? this.target : a.a, this.a = [w(a, "drop", Xt, this), w(a, "dragenter", Yt, this), w(a, "dragover", Yt, this), w(a, "drop", Yt, this)])
    };
    var $t = "addfeatures";

    function Zt(a, b, c, d) {
        La.call(this, a);
        this.features = c;
        this.file = b;
        this.projection = d
    }

    v(Zt, La);
    function au(a) {
        a = a ? a : {};
        Mg.call(this, {handleDownEvent: bu, handleDragEvent: cu, handleUpEvent: du});
        this.o = a.condition ? a.condition : Ig;
        this.a = this.i = void 0;
        this.j = 0;
        this.u = void 0 !== a.duration ? a.duration : 400
    }

    v(au, Mg);
    function cu(a) {
        if (Kg(a)) {
            var b = a.map, c = b.kb(), d = a.pixel;
            a = d[0] - c[0] / 2;
            d = c[1] / 2 - d[1];
            c = Math.atan2(d, a);
            a = Math.sqrt(a * a + d * d);
            d = b.$();
            if (void 0 !== this.i) {
                var e = c - this.i;
                yg(b, d, d.Qa() - e)
            }
            this.i = c;
            void 0 !== this.a && (c = this.a * (d.Ma() / a), Ag(b, d, c));
            void 0 !== this.a && (this.j = this.a / a);
            this.a = a
        }
    }

    function du(a) {
        if (!Kg(a))return !0;
        a = a.map;
        var b = a.$();
        Kd(b, -1);
        var c = this.j - 1, d = b.Qa(), d = b.constrainRotation(d, 0);
        yg(a, b, d, void 0, void 0);
        var d = b.Ma(), e = this.u, d = b.constrainResolution(d, 0, c);
        Ag(a, b, d, void 0, e);
        this.j = 0;
        return !1
    }

    function bu(a) {
        return Kg(a) && this.o(a) ? (Kd(a.map.$(), 1), this.a = this.i = void 0, !0) : !1
    };
    function eu() {
        return [[-Infinity, -Infinity, Infinity, Infinity]]
    };
    (function () {
        var a = {}, b = {ja: a};
        (function (c) {
            if ("object" === typeof a && "undefined" !== typeof b) b.ja = c(); else {
                var d;
                "undefined" !== typeof window ? d = window : "undefined" !== typeof global ? d = global : "undefined" !== typeof self ? d = self : d = this;
                d.Dp = c()
            }
        })(function () {
            return function d(a, b, g) {
                function h(m, p) {
                    if (!b[m]) {
                        if (!a[m]) {
                            var q = "function" == typeof require && require;
                            if (!p && q)return q(m, !0);
                            if (l)return l(m, !0);
                            q = Error("Cannot find module '" + m + "'");
                            throw q.code = "MODULE_NOT_FOUND", q;
                        }
                        q = b[m] = {ja: {}};
                        a[m][0].call(q.ja, function (b) {
                            var d =
                                a[m][1][b];
                            return h(d ? d : b)
                        }, q, q.ja, d, a, b, g)
                    }
                    return b[m].ja
                }

                for (var l = "function" == typeof require && require, m = 0; m < g.length; m++)h(g[m]);
                return h
            }({
                1: [function (a, b) {
                    function f(a, b, d, e, q) {
                        d = d || 0;
                        e = e || a.length - 1;
                        for (q = q || h; e > d;) {
                            if (600 < e - d) {
                                var r = e - d + 1, u = b - d + 1, x = Math.log(r), y = .5 * Math.exp(2 * x / 3), x = .5 * Math.sqrt(x * y * (r - y) / r) * (0 > u - r / 2 ? -1 : 1);
                                f(a, b, Math.max(d, Math.floor(b - u * y / r + x)), Math.min(e, Math.floor(b + (r - u) * y / r + x)), q)
                            }
                            r = a[b];
                            u = d;
                            y = e;
                            g(a, d, b);
                            for (0 < q(a[e], r) && g(a, d, e); u < y;) {
                                g(a, u, y);
                                u++;
                                for (y--; 0 > q(a[u], r);)u++;
                                for (; 0 < q(a[y], r);)y--
                            }
                            0 === q(a[d], r) ? g(a, d, y) : (y++, g(a, y, e));
                            y <= b && (d = y + 1);
                            b <= y && (e = y - 1)
                        }
                    }

                    function g(a, b, d) {
                        var e = a[b];
                        a[b] = a[d];
                        a[d] = e
                    }

                    function h(a, b) {
                        return a < b ? -1 : a > b ? 1 : 0
                    }

                    b.ja = f
                }, {}], 2: [function (a, b) {
                    function f(a, b) {
                        if (!(this instanceof f))return new f(a, b);
                        this.Qe = Math.max(4, a || 9);
                        this.dg = Math.max(2, Math.ceil(.4 * this.Qe));
                        b && this.bj(b);
                        this.clear()
                    }

                    function g(a, b) {
                        h(a, 0, a.children.length, b, a)
                    }

                    function h(a, b, d, e, f) {
                        f || (f = x(null));
                        f.ba = Infinity;
                        f.ea = Infinity;
                        f.da = -Infinity;
                        f.ha = -Infinity;
                        for (var g; b <
                        d; b++)g = a.children[b], l(f, a.Wa ? e(g) : g);
                        return f
                    }

                    function l(a, b) {
                        a.ba = Math.min(a.ba, b.ba);
                        a.ea = Math.min(a.ea, b.ea);
                        a.da = Math.max(a.da, b.da);
                        a.ha = Math.max(a.ha, b.ha)
                    }

                    function m(a, b) {
                        return a.ba - b.ba
                    }

                    function n(a, b) {
                        return a.ea - b.ea
                    }

                    function p(a) {
                        return (a.da - a.ba) * (a.ha - a.ea)
                    }

                    function q(a) {
                        return a.da - a.ba + (a.ha - a.ea)
                    }

                    function r(a, b) {
                        return a.ba <= b.ba && a.ea <= b.ea && b.da <= a.da && b.ha <= a.ha
                    }

                    function u(a, b) {
                        return b.ba <= a.da && b.ea <= a.ha && b.da >= a.ba && b.ha >= a.ea
                    }

                    function x(a) {
                        return {
                            children: a, height: 1, Wa: !0,
                            ba: Infinity, ea: Infinity, da: -Infinity, ha: -Infinity
                        }
                    }

                    function y(a, b, d, e, f) {
                        for (var g = [b, d], h; g.length;)d = g.pop(), b = g.pop(), d - b <= e || (h = b + Math.ceil((d - b) / e / 2) * e, A(a, h, b, d, f), g.push(b, h, h, d))
                    }

                    b.ja = f;
                    var A = a("quickselect");
                    f.prototype = {
                        all: function () {
                            return this.Zf(this.data, [])
                        }, search: function (a) {
                            var b = this.data, d = [], e = this.ob;
                            if (!u(a, b))return d;
                            for (var f = [], g, h, l, m; b;) {
                                g = 0;
                                for (h = b.children.length; g < h; g++)l = b.children[g], m = b.Wa ? e(l) : l, u(a, m) && (b.Wa ? d.push(l) : r(a, m) ? this.Zf(l, d) : f.push(l));
                                b = f.pop()
                            }
                            return d
                        },
                        load: function (a) {
                            if (!a || !a.length)return this;
                            if (a.length < this.dg) {
                                for (var b = 0, d = a.length; b < d; b++)this.Ea(a[b]);
                                return this
                            }
                            a = this.ag(a.slice(), 0, a.length - 1, 0);
                            this.data.children.length ? this.data.height === a.height ? this.fg(this.data, a) : (this.data.height < a.height && (b = this.data, this.data = a, a = b), this.cg(a, this.data.height - a.height - 1, !0)) : this.data = a;
                            return this
                        }, Ea: function (a) {
                            a && this.cg(a, this.data.height - 1);
                            return this
                        }, clear: function () {
                            this.data = x([]);
                            return this
                        }, remove: function (a, b) {
                            if (!a)return this;
                            for (var d = this.data, e = this.ob(a), f = [], g = [], h, l, m, n; d || f.length;) {
                                d || (d = f.pop(), l = f[f.length - 1], h = g.pop(), n = !0);
                                if (d.Wa) {
                                    a:{
                                        m = a;
                                        var p = d.children, q = b;
                                        if (q) {
                                            for (var u = 0; u < p.length; u++)if (q(m, p[u])) {
                                                m = u;
                                                break a
                                            }
                                            m = -1
                                        } else m = p.indexOf(m)
                                    }
                                    if (-1 !== m) {
                                        d.children.splice(m, 1);
                                        f.push(d);
                                        this.$i(f);
                                        break
                                    }
                                }
                                n || d.Wa || !r(d, e) ? l ? (h++, d = l.children[h], n = !1) : d = null : (f.push(d), g.push(h), h = 0, l = d, d = d.children[0])
                            }
                            return this
                        }, ob: function (a) {
                            return a
                        }, Se: m, Te: n, toJSON: function () {
                            return this.data
                        }, Zf: function (a, b) {
                            for (var d =
                                []; a;)a.Wa ? b.push.apply(b, a.children) : d.push.apply(d, a.children), a = d.pop();
                            return b
                        }, ag: function (a, b, d, e) {
                            var f = d - b + 1, h = this.Qe, l;
                            if (f <= h)return l = x(a.slice(b, d + 1)), g(l, this.ob), l;
                            e || (e = Math.ceil(Math.log(f) / Math.log(h)), h = Math.ceil(f / Math.pow(h, e - 1)));
                            l = x([]);
                            l.Wa = !1;
                            l.height = e;
                            var f = Math.ceil(f / h), h = f * Math.ceil(Math.sqrt(h)), m, n, p;
                            for (y(a, b, d, h, this.Se); b <= d; b += h)for (n = Math.min(b + h - 1, d), y(a, b, n, f, this.Te), m = b; m <= n; m += f)p = Math.min(m + f - 1, n), l.children.push(this.ag(a, m, p, e - 1));
                            g(l, this.ob);
                            return l
                        },
                        Zi: function (a, b, d, e) {
                            for (var f, g, h, l, m, n, q, r; ;) {
                                e.push(b);
                                if (b.Wa || e.length - 1 === d)break;
                                q = r = Infinity;
                                f = 0;
                                for (g = b.children.length; f < g; f++)h = b.children[f], m = p(h), n = (Math.max(h.da, a.da) - Math.min(h.ba, a.ba)) * (Math.max(h.ha, a.ha) - Math.min(h.ea, a.ea)) - m, n < r ? (r = n, q = m < q ? m : q, l = h) : n === r && m < q && (q = m, l = h);
                                b = l || b.children[0]
                            }
                            return b
                        }, cg: function (a, b, d) {
                            var e = this.ob;
                            d = d ? a : e(a);
                            var e = [], f = this.Zi(d, this.data, b, e);
                            f.children.push(a);
                            for (l(f, d); 0 <= b;)if (e[b].children.length > this.Qe) this.gj(e, b), b--; else break;
                            this.Wi(d,
                                e, b)
                        }, gj: function (a, b) {
                            var d = a[b], e = d.children.length, f = this.dg;
                            this.Xi(d, f, e);
                            e = this.Yi(d, f, e);
                            e = x(d.children.splice(e, d.children.length - e));
                            e.height = d.height;
                            e.Wa = d.Wa;
                            g(d, this.ob);
                            g(e, this.ob);
                            b ? a[b - 1].children.push(e) : this.fg(d, e)
                        }, fg: function (a, b) {
                            this.data = x([a, b]);
                            this.data.height = a.height + 1;
                            this.data.Wa = !1;
                            g(this.data, this.ob)
                        }, Yi: function (a, b, d) {
                            var e, f, g, l, m, n, q;
                            m = n = Infinity;
                            for (e = b; e <= d - b; e++)f = h(a, 0, e, this.ob), g = h(a, e, d, this.ob), l = Math.max(0, Math.min(f.da, g.da) - Math.max(f.ba, g.ba)) * Math.max(0,
                                    Math.min(f.ha, g.ha) - Math.max(f.ea, g.ea)), f = p(f) + p(g), l < m ? (m = l, q = e, n = f < n ? f : n) : l === m && f < n && (n = f, q = e);
                            return q
                        }, Xi: function (a, b, d) {
                            var e = a.Wa ? this.Se : m, f = a.Wa ? this.Te : n, g = this.$f(a, b, d, e);
                            b = this.$f(a, b, d, f);
                            g < b && a.children.sort(e)
                        }, $f: function (a, b, d, e) {
                            a.children.sort(e);
                            e = this.ob;
                            var f = h(a, 0, b, e), g = h(a, d - b, d, e), m = q(f) + q(g), n, p;
                            for (n = b; n < d - b; n++)p = a.children[n], l(f, a.Wa ? e(p) : p), m += q(f);
                            for (n = d - b - 1; n >= b; n--)p = a.children[n], l(g, a.Wa ? e(p) : p), m += q(g);
                            return m
                        }, Wi: function (a, b, d) {
                            for (; 0 <= d; d--)l(b[d], a)
                        },
                        $i: function (a) {
                            for (var b = a.length - 1, d; 0 <= b; b--)0 === a[b].children.length ? 0 < b ? (d = a[b - 1].children, d.splice(d.indexOf(a[b]), 1)) : this.clear() : g(a[b], this.ob)
                        }, bj: function (a) {
                            var b = ["return a", " - b", ";"];
                            this.Se = new Function("a", "b", b.join(a[0]));
                            this.Te = new Function("a", "b", b.join(a[1]));
                            this.ob = new Function("a", "return {minX: a" + a[0] + ", minY: a" + a[1] + ", maxX: a" + a[2] + ", maxY: a" + a[3] + "};")
                        }
                    }
                }, {quickselect: 1}]
            }, {}, [2])(2)
        });
        qr = b.ja
    })();
    function fu(a) {
        this.b = qr(a);
        this.a = {}
    }

    k = fu.prototype;
    k.Ea = function (a, b) {
        var c = {ba: a[0], ea: a[1], da: a[2], ha: a[3], value: b};
        this.b.Ea(c);
        this.a[ea(b)] = c
    };
    k.load = function (a, b) {
        for (var c = Array(b.length), d = 0, e = b.length; d < e; d++) {
            var f = a[d], g = b[d], f = {ba: f[0], ea: f[1], da: f[2], ha: f[3], value: g};
            c[d] = f;
            this.a[ea(g)] = f
        }
        this.b.load(c)
    };
    k.remove = function (a) {
        a = ea(a);
        var b = this.a[a];
        delete this.a[a];
        return null !== this.b.remove(b)
    };
    function gu(a, b, c) {
        var d = a.a[ea(c)];
        Ob([d.ba, d.ea, d.da, d.ha], b) || (a.remove(c), a.Ea(b, c))
    }

    function hu(a) {
        return a.b.all().map(function (a) {
            return a.value
        })
    }

    function iu(a, b) {
        return a.b.search({ba: b[0], ea: b[1], da: b[2], ha: b[3]}).map(function (a) {
            return a.value
        })
    }

    k.forEach = function (a, b) {
        return ju(hu(this), a, b)
    };
    function ku(a, b, c, d) {
        return ju(iu(a, b), c, d)
    }

    function ju(a, b, c) {
        for (var d, e = 0, f = a.length; e < f && !(d = b.call(c, a[e])); e++);
        return d
    }

    k.clear = function () {
        this.b.clear();
        this.a = {}
    };
    k.D = function () {
        var a = this.b.data;
        return [a.ba, a.ea, a.da, a.ha]
    };
    function V(a) {
        a = a || {};
        Wj.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: void 0,
            state: "ready",
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        });
        this.W = da;
        this.P = a.format;
        this.Aa = void 0 == a.overlaps ? !0 : a.overlaps;
        this.Z = a.url;
        void 0 !== a.loader ? this.W = a.loader : void 0 !== this.Z && (ha(this.P, 7), this.W = Sm(this.Z, this.P));
        this.ac = void 0 !== a.strategy ? a.strategy : eu;
        var b = void 0 !== a.useSpatialIndex ? a.useSpatialIndex : !0;
        this.a = b ? new fu : null;
        this.ra = new fu;
        this.i = {};
        this.l = {};
        this.o = {};
        this.s = {};
        this.c = null;
        var c,
            d;
        a.features instanceof pe ? (c = a.features, d = c.a) : Array.isArray(a.features) && (d = a.features);
        b || void 0 !== c || (c = new pe(d));
        void 0 !== d && lu(this, d);
        void 0 !== c && mu(this, c)
    }

    v(V, Wj);
    k = V.prototype;
    k.cb = function (a) {
        var b = ea(a).toString();
        if (nu(this, b, a)) {
            ou(this, b, a);
            var c = a.V();
            c ? (b = c.D(), this.a && this.a.Ea(b, a)) : this.i[b] = a;
            this.b(new pu(qu, a))
        }
        this.v()
    };
    function ou(a, b, c) {
        a.s[b] = [w(c, "change", a.uh, a), w(c, "propertychange", a.uh, a)]
    }

    function nu(a, b, c) {
        var d = !0, e = c.a;
        void 0 !== e ? e.toString() in a.l ? d = !1 : a.l[e.toString()] = c : (ha(!(b in a.o), 30), a.o[b] = c);
        return d
    }

    k.Ic = function (a) {
        lu(this, a);
        this.v()
    };
    function lu(a, b) {
        var c, d, e, f, g = [], h = [], l = [];
        d = 0;
        for (e = b.length; d < e; d++)f = b[d], c = ea(f).toString(), nu(a, c, f) && h.push(f);
        d = 0;
        for (e = h.length; d < e; d++) {
            f = h[d];
            c = ea(f).toString();
            ou(a, c, f);
            var m = f.V();
            m ? (c = m.D(), g.push(c), l.push(f)) : a.i[c] = f
        }
        a.a && a.a.load(g, l);
        d = 0;
        for (e = h.length; d < e; d++)a.b(new pu(qu, h[d]))
    }

    function mu(a, b) {
        var c = !1;
        w(a, qu, function (a) {
            c || (c = !0, b.push(a.feature), c = !1)
        });
        w(a, ru, function (a) {
            c || (c = !0, b.remove(a.feature), c = !1)
        });
        w(b, te, function (a) {
            c || (c = !0, this.cb(a.element), c = !1)
        }, a);
        w(b, ue, function (a) {
            c || (c = !0, this.mb(a.element), c = !1)
        }, a);
        a.c = b
    }

    k.clear = function (a) {
        if (a) {
            for (var b in this.s)this.s[b].forEach(za);
            this.c || (this.s = {}, this.l = {}, this.o = {})
        } else if (this.a) {
            this.a.forEach(this.Of, this);
            for (var c in this.i)this.Of(this.i[c])
        }
        this.c && this.c.clear();
        this.a && this.a.clear();
        this.ra.clear();
        this.i = {};
        this.b(new pu(su));
        this.v()
    };
    k.qg = function (a, b) {
        if (this.a)return this.a.forEach(a, b);
        if (this.c)return this.c.forEach(a, b)
    };
    function tu(a, b, c) {
        a.Kb([b[0], b[1], b[0], b[1]], function (a) {
            if (a.V().jb(b))return c.call(void 0, a)
        })
    }

    k.Kb = function (a, b, c) {
        if (this.a)return ku(this.a, a, b, c);
        if (this.c)return this.c.forEach(b, c)
    };
    k.rg = function (a, b, c) {
        return this.Kb(a, function (d) {
            if (d.V().Oa(a) && (d = b.call(c, d)))return d
        })
    };
    k.zg = function () {
        return this.c
    };
    k.oe = function () {
        var a;
        this.c ? a = this.c.a : this.a && (a = hu(this.a), xa(this.i) || ab(a, wa(this.i)));
        return a
    };
    k.yg = function (a) {
        var b = [];
        tu(this, a, function (a) {
            b.push(a)
        });
        return b
    };
    k.bf = function (a) {
        return iu(this.a, a)
    };
    k.ug = function (a, b) {
        var c = a[0], d = a[1], e = null, f = [NaN, NaN], g = Infinity, h = [-Infinity, -Infinity, Infinity, Infinity], l = b ? b : gc;
        ku(this.a, h, function (a) {
            if (l(a)) {
                var b = a.V(), p = g;
                g = b.vb(c, d, f, g);
                g < p && (e = a, a = Math.sqrt(g), h[0] = c - a, h[1] = d - a, h[2] = c + a, h[3] = d + a)
            }
        });
        return e
    };
    k.D = function () {
        return this.a.D()
    };
    k.xg = function (a) {
        a = this.l[a.toString()];
        return void 0 !== a ? a : null
    };
    k.sh = function () {
        return this.P
    };
    k.th = function () {
        return this.Z
    };
    k.uh = function (a) {
        a = a.target;
        var b = ea(a).toString(), c = a.V();
        c ? (c = c.D(), b in this.i ? (delete this.i[b], this.a && this.a.Ea(c, a)) : this.a && gu(this.a, c, a)) : b in this.i || (this.a && this.a.remove(a), this.i[b] = a);
        c = a.a;
        void 0 !== c ? (c = c.toString(), b in this.o ? (delete this.o[b], this.l[c] = a) : this.l[c] !== a && (uu(this, a), this.l[c] = a)) : b in this.o || (uu(this, a), this.o[b] = a);
        this.v();
        this.b(new pu(vu, a))
    };
    k.sd = function (a, b, c) {
        var d = this.ra;
        a = this.ac(a, b);
        var e, f;
        e = 0;
        for (f = a.length; e < f; ++e) {
            var g = a[e];
            ku(d, g, function (a) {
                return Ib(a.extent, g)
            }) || (this.W.call(this, g, b, c), d.Ea(g, {extent: g.slice()}))
        }
    };
    k.mb = function (a) {
        var b = ea(a).toString();
        b in this.i ? delete this.i[b] : this.a && this.a.remove(a);
        this.Of(a);
        this.v()
    };
    k.Of = function (a) {
        var b = ea(a).toString();
        this.s[b].forEach(za);
        delete this.s[b];
        var c = a.a;
        void 0 !== c ? delete this.l[c.toString()] : delete this.o[b];
        this.b(new pu(ru, a))
    };
    function uu(a, b) {
        for (var c in a.l)if (a.l[c] === b) {
            delete a.l[c];
            break
        }
    }

    function pu(a, b) {
        La.call(this, a);
        this.feature = b
    }

    v(pu, La);
    var qu = "addfeature", vu = "changefeature", su = "clear", ru = "removefeature";

    function wu(a) {
        Mg.call(this, {handleDownEvent: xu, handleEvent: yu, handleUpEvent: zu});
        this.fa = null;
        this.u = !1;
        this.ub = a.source ? a.source : null;
        this.Aa = a.features ? a.features : null;
        this.tj = a.snapTolerance ? a.snapTolerance : 12;
        this.W = a.type;
        this.i = Au(this.W);
        this.Ka = a.minPoints ? a.minPoints : this.i === Bu ? 3 : 2;
        this.oa = a.maxPoints ? a.maxPoints : Infinity;
        this.ac = a.finishCondition ? a.finishCondition : gc;
        var b = a.geometryFunction;
        if (!b)if ("Circle" === this.W) b = function (a, b) {
            var c = b ? b : new Kt([NaN, NaN]);
            c.Sf(a[0], Math.sqrt(xb(a[0],
                a[1])));
            return c
        }; else {
            var c, b = this.i;
            b === Cu ? c = B : b === Du ? c = P : b === Bu && (c = C);
            b = function (a, b) {
                var f = b;
                f ? f.ma(a) : f = new c(a);
                return f
            }
        }
        this.G = b;
        this.P = this.B = this.a = this.S = this.j = this.o = null;
        this.Jb = a.clickTolerance ? a.clickTolerance * a.clickTolerance : 36;
        this.ra = new E({
            source: new V({useSpatialIndex: !1, wrapX: a.wrapX ? a.wrapX : !1}),
            style: a.style ? a.style : Eu()
        });
        this.La = a.geometryName;
        this.qj = a.condition ? a.condition : Hg;
        this.Le = a.freehand ? gc : a.freehandCondition ? a.freehandCondition : Ig;
        w(this, Va(xg), this.ri, this)
    }

    v(wu, Mg);
    function Eu() {
        var a = Gi();
        return function (b) {
            return a[b.V().X()]
        }
    }

    k = wu.prototype;
    k.setMap = function (a) {
        Mg.prototype.setMap.call(this, a);
        this.ri()
    };
    function yu(a) {
        this.u = this.i !== Cu && this.Le(a);
        var b = !this.u;
        this.u && a.type === hg && null !== this.j ? (Fu(this, a), b = !1) : a.type === gg ? b = Gu(this, a) : a.type === ag && (b = !1);
        return Ng.call(this, a) && b
    }

    function xu(a) {
        return this.u ? (this.fa = a.pixel, this.o || Hu(this, a), !0) : this.qj(a) ? (this.fa = a.pixel, !0) : !1
    }

    function zu(a) {
        var b = this.fa, c = a.pixel, d = b[0] - c[0], b = b[1] - c[1], d = d * d + b * b, b = !0;
        if (this.u ? d > this.Jb : d <= this.Jb) Gu(this, a), this.o ? this.u || this.i === Iu ? this.ld() : Ju(this, a) ? this.ac(a) && this.ld() : Fu(this, a) : (Hu(this, a), this.i === Cu && this.ld()), b = !1;
        return b
    }

    function Gu(a, b) {
        if (a.o) {
            var c = b.coordinate, d = a.j.V(), e;
            a.i === Cu ? e = a.a : a.i === Bu ? (e = a.a[0], e = e[e.length - 1], Ju(a, b) && (c = a.o.slice())) : (e = a.a, e = e[e.length - 1]);
            e[0] = c[0];
            e[1] = c[1];
            a.G(a.a, d);
            a.S && a.S.V().ma(c);
            d instanceof C && a.i !== Bu ? (a.B || (a.B = new I(new P(null))), d = d.Bg(0), c = a.B.V(), c.aa(d.ia, d.ka())) : a.P && (c = a.B.V(), c.ma(a.P));
            Ku(a)
        } else c = b.coordinate.slice(), a.S ? a.S.V().ma(c) : (a.S = new I(new B(c)), Ku(a));
        return !0
    }

    function Ju(a, b) {
        var c = !1;
        if (a.j) {
            var d = !1, e = [a.o];
            a.i === Du ? d = a.a.length > a.Ka : a.i === Bu && (d = a.a[0].length > a.Ka, e = [a.a[0][0], a.a[0][a.a[0].length - 2]]);
            if (d)for (var d = b.map, f = 0, g = e.length; f < g; f++) {
                var h = e[f], l = d.Da(h), m = b.pixel, c = m[0] - l[0], l = m[1] - l[1];
                if (c = Math.sqrt(c * c + l * l) <= (a.u ? 1 : a.tj)) {
                    a.o = h;
                    break
                }
            }
        }
        return c
    }

    function Hu(a, b) {
        var c = b.coordinate;
        a.o = c;
        a.i === Cu ? a.a = c.slice() : a.i === Bu ? (a.a = [[c.slice(), c.slice()]], a.P = a.a[0]) : (a.a = [c.slice(), c.slice()], a.i === Iu && (a.P = a.a));
        a.P && (a.B = new I(new P(a.P)));
        c = a.G(a.a);
        a.j = new I;
        a.La && a.j.Dc(a.La);
        a.j.Pa(c);
        Ku(a);
        a.b(new Lu(Mu, a.j))
    }

    function Fu(a, b) {
        var c = b.coordinate, d = a.j.V(), e, f;
        a.i === Du ? (a.o = c.slice(), f = a.a, f.length >= a.oa && (a.u ? f.pop() : e = !0), f.push(c.slice()), a.G(f, d)) : a.i === Bu && (f = a.a[0], f.length >= a.oa && (a.u ? f.pop() : e = !0), f.push(c.slice()), e && (a.o = f[0]), a.G(a.a, d));
        Ku(a);
        e && a.ld()
    }

    k.Fo = function () {
        var a = this.j.V(), b, c;
        this.i === Du ? (b = this.a, b.splice(-2, 1), this.G(b, a)) : this.i === Bu && (b = this.a[0], b.splice(-2, 1), c = this.B.V(), c.ma(b), this.G(this.a, a));
        0 === b.length && (this.o = null);
        Ku(this)
    };
    k.ld = function () {
        var a = Nu(this), b = this.a, c = a.V();
        this.i === Du ? (b.pop(), this.G(b, c)) : this.i === Bu && (b[0].pop(), b[0].push(b[0][0]), this.G(b, c));
        "MultiPoint" === this.W ? a.Pa(new S([b])) : "MultiLineString" === this.W ? a.Pa(new Q([b])) : "MultiPolygon" === this.W && a.Pa(new T([b]));
        this.b(new Lu(Ou, a));
        this.Aa && this.Aa.push(a);
        this.ub && this.ub.cb(a)
    };
    function Nu(a) {
        a.o = null;
        var b = a.j;
        b && (a.j = null, a.S = null, a.B = null, a.ra.ga().clear(!0));
        return b
    }

    k.fm = function (a) {
        var b = a.V();
        this.j = a;
        this.a = b.Y();
        a = this.a[this.a.length - 1];
        this.o = a.slice();
        this.a.push(a.slice());
        Ku(this);
        this.b(new Lu(Mu, this.j))
    };
    k.Fc = hc;
    function Ku(a) {
        var b = [];
        a.j && b.push(a.j);
        a.B && b.push(a.B);
        a.S && b.push(a.S);
        a = a.ra.ga();
        a.clear(!0);
        a.Ic(b)
    }

    k.ri = function () {
        var a = this.s, b = this.f();
        a && b || Nu(this);
        this.ra.setMap(b ? a : null)
    };
    function Au(a) {
        var b;
        "Point" === a || "MultiPoint" === a ? b = Cu : "LineString" === a || "MultiLineString" === a ? b = Du : "Polygon" === a || "MultiPolygon" === a ? b = Bu : "Circle" === a && (b = Iu);
        return b
    }

    var Cu = "Point", Du = "LineString", Bu = "Polygon", Iu = "Circle";

    function Lu(a, b) {
        La.call(this, a);
        this.feature = b
    }

    v(Lu, La);
    var Mu = "drawstart", Ou = "drawend";

    function Pu(a) {
        this.a = this.j = null;
        this.B = !1;
        this.G = this.o = null;
        a || (a = {});
        a.extent && this.i(a.extent);
        Mg.call(this, {handleDownEvent: Qu, handleDragEvent: Ru, handleEvent: Su, handleUpEvent: Tu});
        this.u = new E({
            source: new V({useSpatialIndex: !1, wrapX: !!a.wrapX}),
            style: a.boxStyle ? a.boxStyle : Uu(),
            updateWhileAnimating: !0,
            updateWhileInteracting: !0
        });
        this.S = new E({
            source: new V({useSpatialIndex: !1, wrapX: !!a.wrapX}),
            style: a.pointerStyle ? a.pointerStyle : Vu(),
            updateWhileAnimating: !0,
            updateWhileInteracting: !0
        })
    }

    v(Pu, Mg);
    function Su(a) {
        if (!(a instanceof Xf))return !0;
        if (a.type == gg && !this.C) {
            var b = a.pixel, c = a.map, d = Wu(this, b, c);
            d || (d = c.Ja(b));
            Xu(this, d)
        }
        Ng.call(this, a);
        return !1
    }

    function Qu(a) {
        function b(a) {
            var b = null, c = null;
            a[0] == e[0] ? b = e[2] : a[0] == e[2] && (b = e[0]);
            a[1] == e[1] ? c = e[3] : a[1] == e[3] && (c = e[1]);
            return null !== b && null !== c ? [b, c] : null
        }

        var c = a.pixel, d = a.map, e = this.D();
        (a = Wu(this, c, d)) && e ? (c = a[0] == e[0] || a[0] == e[2] ? a[0] : null, d = a[1] == e[1] || a[1] == e[3] ? a[1] : null, null !== c && null !== d ? this.a = Yu(b(a)) : null !== c ? this.a = Zu(b([c, e[1]]), b([c, e[3]])) : null !== d && (this.a = Zu(b([e[0], d]), b([e[2], d])))) : (a = d.Ja(c), this.i([a[0], a[1], a[0], a[1]]), this.a = Yu(a));
        return !0
    }

    function Ru(a) {
        this.a && (a = a.coordinate, this.i(this.a(a)), Xu(this, a));
        return !0
    }

    function Tu() {
        this.a = null;
        var a = this.D();
        a && 0 !== Xb(a) || this.i(null);
        return !1
    }

    function Uu() {
        var a = Gi();
        return function () {
            return a.Polygon
        }
    }

    function Vu() {
        var a = Gi();
        return function () {
            return a.Point
        }
    }

    function Yu(a) {
        return function (b) {
            return Ab([a, b])
        }
    }

    function Zu(a, b) {
        return a[0] == b[0] ? function (c) {
            return Ab([a, [c[0], b[1]]])
        } : a[1] == b[1] ? function (c) {
            return Ab([a, [b[0], c[1]]])
        } : null
    }

    function Wu(a, b, c) {
        function d(a, b) {
            return yb(e, a) - yb(e, b)
        }

        var e = c.Ja(b), f = a.D();
        if (f) {
            f = [[[f[0], f[1]], [f[0], f[3]]], [[f[0], f[3]], [f[2], f[3]]], [[f[2], f[3]], [f[2], f[1]]], [[f[2], f[1]], [f[0], f[1]]]];
            f.sort(d);
            var f = f[0], g = sb(e, f), h = c.Da(g);
            if (10 >= Math.sqrt(xb(b, h)))return b = c.Da(f[0]), c = c.Da(f[1]), b = xb(h, b), c = xb(h, c), a.B = 10 >= Math.sqrt(Math.min(b, c)), a.B && (g = b > c ? f[1] : f[0]), g
        }
        return null
    }

    function Xu(a, b) {
        var c = a.G;
        c ? c.V().ma(b) : (c = new I(new B(b)), a.G = c, a.S.ga().cb(c))
    }

    Pu.prototype.setMap = function (a) {
        this.u.setMap(a);
        this.S.setMap(a);
        Mg.prototype.setMap.call(this, a)
    };
    Pu.prototype.D = function () {
        return this.j
    };
    Pu.prototype.i = function (a) {
        this.j = a ? a : null;
        var b = this.o;
        b ? a ? b.Pa(xd(a)) : b.Pa(void 0) : (this.o = b = a ? new I(xd(a)) : new I({}), this.u.ga().cb(b));
        this.b(new $u(this.j))
    };
    function $u(a) {
        La.call(this, av);
        this.b = a
    }

    v($u, La);
    var av = "extentchanged";

    function bv(a) {
        Mg.call(this, {handleDownEvent: cv, handleDragEvent: dv, handleEvent: ev, handleUpEvent: fv});
        this.ub = a.condition ? a.condition : Lg;
        this.Aa = function (a) {
            return Hg(a) && Gg(a)
        };
        this.La = a.deleteCondition ? a.deleteCondition : this.Aa;
        this.Ka = this.a = null;
        this.ra = [0, 0];
        this.B = this.P = !1;
        this.i = new fu;
        this.S = void 0 !== a.pixelTolerance ? a.pixelTolerance : 10;
        this.o = this.oa = !1;
        this.j = [];
        this.G = new E({
            source: new V({useSpatialIndex: !1, wrapX: !!a.wrapX}),
            style: a.style ? a.style : gv(),
            updateWhileAnimating: !0,
            updateWhileInteracting: !0
        });
        this.fa = {
            Point: this.mm,
            LineString: this.bh,
            LinearRing: this.bh,
            Polygon: this.nm,
            MultiPoint: this.km,
            MultiLineString: this.jm,
            MultiPolygon: this.lm,
            GeometryCollection: this.im
        };
        this.u = a.features;
        this.u.forEach(this.wf, this);
        w(this.u, te, this.gm, this);
        w(this.u, ue, this.hm, this);
        this.W = null
    }

    v(bv, Mg);
    k = bv.prototype;
    k.wf = function (a) {
        var b = a.V();
        b && b.X() in this.fa && this.fa[b.X()].call(this, a, b);
        (b = this.s) && hv(this, this.ra, b);
        w(a, "change", this.ah, this)
    };
    function iv(a, b) {
        a.B || (a.B = !0, a.b(new jv(kv, a.u, b)))
    }

    function lv(a, b) {
        mv(a, b);
        a.a && 0 === a.u.yc() && (a.G.ga().mb(a.a), a.a = null);
        Fa(b, "change", a.ah, a)
    }

    function mv(a, b) {
        var c = a.i, d = [];
        c.forEach(function (a) {
            b === a.feature && d.push(a)
        });
        for (var e = d.length - 1; 0 <= e; --e)c.remove(d[e])
    }

    k.Ba = function (a) {
        this.a && !a && (this.G.ga().mb(this.a), this.a = null);
        Mg.prototype.Ba.call(this, a)
    };
    k.setMap = function (a) {
        this.G.setMap(a);
        Mg.prototype.setMap.call(this, a)
    };
    k.gm = function (a) {
        this.wf(a.element)
    };
    k.ah = function (a) {
        this.o || (a = a.target, lv(this, a), this.wf(a))
    };
    k.hm = function (a) {
        lv(this, a.element)
    };
    k.mm = function (a, b) {
        var c = b.Y(), c = {feature: a, geometry: b, pa: [c, c]};
        this.i.Ea(b.D(), c)
    };
    k.km = function (a, b) {
        var c = b.Y(), d, e, f;
        e = 0;
        for (f = c.length; e < f; ++e)d = c[e], d = {
            feature: a,
            geometry: b,
            depth: [e],
            index: e,
            pa: [d, d]
        }, this.i.Ea(b.D(), d)
    };
    k.bh = function (a, b) {
        var c = b.Y(), d, e, f, g;
        d = 0;
        for (e = c.length - 1; d < e; ++d)f = c.slice(d, d + 2), g = {
            feature: a,
            geometry: b,
            index: d,
            pa: f
        }, this.i.Ea(Ab(f), g)
    };
    k.jm = function (a, b) {
        var c = b.Y(), d, e, f, g, h, l, m;
        g = 0;
        for (h = c.length; g < h; ++g)for (d = c[g], e = 0, f = d.length - 1; e < f; ++e)l = d.slice(e, e + 2), m = {
            feature: a,
            geometry: b,
            depth: [g],
            index: e,
            pa: l
        }, this.i.Ea(Ab(l), m)
    };
    k.nm = function (a, b) {
        var c = b.Y(), d, e, f, g, h, l, m;
        g = 0;
        for (h = c.length; g < h; ++g)for (d = c[g], e = 0, f = d.length - 1; e < f; ++e)l = d.slice(e, e + 2), m = {
            feature: a,
            geometry: b,
            depth: [g],
            index: e,
            pa: l
        }, this.i.Ea(Ab(l), m)
    };
    k.lm = function (a, b) {
        var c = b.Y(), d, e, f, g, h, l, m, n, p, q;
        l = 0;
        for (m = c.length; l < m; ++l)for (n = c[l], g = 0, h = n.length; g < h; ++g)for (d = n[g], e = 0, f = d.length - 1; e < f; ++e)p = d.slice(e, e + 2), q = {
            feature: a,
            geometry: b,
            depth: [g, l],
            index: e,
            pa: p
        }, this.i.Ea(Ab(p), q)
    };
    k.im = function (a, b) {
        var c, d = b.f;
        for (c = 0; c < d.length; ++c)this.fa[d[c].X()].call(this, a, d[c])
    };
    function nv(a, b) {
        var c = a.a;
        c ? c.V().ma(b) : (c = new I(new B(b)), a.a = c, a.G.ga().cb(c))
    }

    function ov(a, b) {
        return a.index - b.index
    }

    function cv(a) {
        if (!this.ub(a))return !1;
        hv(this, a.pixel, a.map);
        this.j.length = 0;
        this.B = !1;
        var b = this.a;
        if (b) {
            var c = [], b = b.V().Y(), d = Ab([b]), d = iu(this.i, d), e = {};
            d.sort(ov);
            for (var f = 0, g = d.length; f < g; ++f) {
                var h = d[f], l = h.pa, m = ea(h.feature), n = h.depth;
                n && (m += "-" + n.join("-"));
                e[m] || (e[m] = Array(2));
                if (vb(l[0], b) && !e[m][0]) this.j.push([h, 0]), e[m][0] = h; else if (vb(l[1], b) && !e[m][1]) {
                    if ("LineString" !== h.geometry.X() && "MultiLineString" !== h.geometry.X() || !e[m][0] || 0 !== e[m][0].index) this.j.push([h, 1]), e[m][1] = h
                } else ea(l) in
                this.Ka && !e[m][0] && !e[m][1] && c.push([h, b])
            }
            c.length && iv(this, a);
            for (a = c.length - 1; 0 <= a; --a)this.$k.apply(this, c[a])
        }
        return !!this.a
    }

    function dv(a) {
        this.P = !1;
        iv(this, a);
        a = a.coordinate;
        for (var b = 0, c = this.j.length; b < c; ++b) {
            for (var d = this.j[b], e = d[0], f = e.depth, g = e.geometry, h = g.Y(), l = e.pa, d = d[1]; a.length < g.sa();)a.push(0);
            switch (g.X()) {
                case "Point":
                    h = a;
                    l[0] = l[1] = a;
                    break;
                case "MultiPoint":
                    h[e.index] = a;
                    l[0] = l[1] = a;
                    break;
                case "LineString":
                    h[e.index + d] = a;
                    l[d] = a;
                    break;
                case "MultiLineString":
                    h[f[0]][e.index + d] = a;
                    l[d] = a;
                    break;
                case "Polygon":
                    h[f[0]][e.index + d] = a;
                    l[d] = a;
                    break;
                case "MultiPolygon":
                    h[f[1]][f[0]][e.index + d] = a, l[d] = a
            }
            e = g;
            this.o = !0;
            e.ma(h);
            this.o = !1
        }
        nv(this, a)
    }

    function fv(a) {
        for (var b, c = this.j.length - 1; 0 <= c; --c)b = this.j[c][0], gu(this.i, Ab(b.pa), b);
        this.B && (this.b(new jv(pv, this.u, a)), this.B = !1);
        return !1
    }

    function ev(a) {
        if (!(a instanceof Xf))return !0;
        this.W = a;
        var b;
        Fd(a.map.$())[1] || a.type != gg || this.C || (this.ra = a.pixel, hv(this, a.pixel, a.map));
        this.a && this.La(a) && (b = a.type == bg && this.P ? !0 : this.Qh());
        a.type == bg && (this.P = !1);
        return Ng.call(this, a) && !b
    }

    function hv(a, b, c) {
        function d(a, b) {
            return yb(e, a.pa) - yb(e, b.pa)
        }

        var e = c.Ja(b), f = c.Ja([b[0] - a.S, b[1] + a.S]), g = c.Ja([b[0] + a.S, b[1] - a.S]), f = Ab([f, g]), f = iu(a.i, f);
        if (0 < f.length) {
            f.sort(d);
            var g = f[0].pa, h = sb(e, g), l = c.Da(h);
            if (Math.sqrt(xb(b, l)) <= a.S) {
                b = c.Da(g[0]);
                c = c.Da(g[1]);
                b = xb(l, b);
                c = xb(l, c);
                a.oa = Math.sqrt(Math.min(b, c)) <= a.S;
                a.oa && (h = b > c ? g[1] : g[0]);
                nv(a, h);
                c = {};
                c[ea(g)] = !0;
                b = 1;
                for (l = f.length; b < l; ++b)if (h = f[b].pa, vb(g[0], h[0]) && vb(g[1], h[1]) || vb(g[0], h[1]) && vb(g[1], h[0])) c[ea(h)] = !0; else break;
                a.Ka =
                    c;
                return
            }
        }
        a.a && (a.G.ga().mb(a.a), a.a = null)
    }

    k.$k = function (a, b) {
        for (var c = a.pa, d = a.feature, e = a.geometry, f = a.depth, g = a.index, h; b.length < e.sa();)b.push(0);
        switch (e.X()) {
            case "MultiLineString":
                h = e.Y();
                h[f[0]].splice(g + 1, 0, b);
                break;
            case "Polygon":
                h = e.Y();
                h[f[0]].splice(g + 1, 0, b);
                break;
            case "MultiPolygon":
                h = e.Y();
                h[f[1]][f[0]].splice(g + 1, 0, b);
                break;
            case "LineString":
                h = e.Y();
                h.splice(g + 1, 0, b);
                break;
            default:
                return
        }
        this.o = !0;
        e.ma(h);
        this.o = !1;
        h = this.i;
        h.remove(a);
        qv(this, e, g, f, 1);
        var l = {pa: [c[0], b], feature: d, geometry: e, depth: f, index: g};
        h.Ea(Ab(l.pa),
            l);
        this.j.push([l, 1]);
        c = {pa: [b, c[1]], feature: d, geometry: e, depth: f, index: g + 1};
        h.Ea(Ab(c.pa), c);
        this.j.push([c, 0]);
        this.P = !0
    };
    k.Qh = function () {
        var a = !1;
        if (this.W && this.W.type != hg) {
            var b = this.W;
            iv(this, b);
            var c = this.j, a = {}, d = !1, e, f, g, h, l, m, n, p;
            for (h = c.length - 1; 0 <= h; --h)g = c[h], n = g[0], p = ea(n.feature), n.depth && (p += "-" + n.depth.join("-")), p in a || (a[p] = {}), 0 === g[1] ? (a[p].right = n, a[p].index = n.index) : 1 == g[1] && (a[p].left = n, a[p].index = n.index + 1);
            for (p in a) {
                m = a[p].right;
                h = a[p].left;
                g = a[p].index;
                l = g - 1;
                n = void 0 !== h ? h : m;
                0 > l && (l = 0);
                c = n.geometry;
                e = f = c.Y();
                d = !1;
                switch (c.X()) {
                    case "MultiLineString":
                        2 < f[n.depth[0]].length && (f[n.depth[0]].splice(g,
                            1), d = !0);
                        break;
                    case "LineString":
                        2 < f.length && (f.splice(g, 1), d = !0);
                        break;
                    case "MultiPolygon":
                        e = e[n.depth[1]];
                    case "Polygon":
                        e = e[n.depth[0]], 4 < e.length && (g == e.length - 1 && (g = 0), e.splice(g, 1), d = !0, 0 === g && (e.pop(), e.push(e[0]), l = e.length - 1))
                }
                d && (e = c, this.o = !0, e.ma(f), this.o = !1, f = [], void 0 !== h && (this.i.remove(h), f.push(h.pa[0])), void 0 !== m && (this.i.remove(m), f.push(m.pa[1])), void 0 !== h && void 0 !== m && (h = {
                    depth: n.depth,
                    feature: n.feature,
                    geometry: n.geometry,
                    index: l,
                    pa: f
                }, this.i.Ea(Ab(h.pa), h)), qv(this, c, g, n.depth,
                    -1), this.a && (this.G.ga().mb(this.a), this.a = null))
            }
            a = d;
            this.b(new jv(pv, this.u, b));
            this.B = !1
        }
        return a
    };
    function qv(a, b, c, d, e) {
        ku(a.i, b.D(), function (a) {
            a.geometry === b && (void 0 === d || void 0 === a.depth || db(a.depth, d)) && a.index > c && (a.index += e)
        })
    }

    function gv() {
        var a = Gi();
        return function () {
            return a.Point
        }
    }

    function jv(a, b, c) {
        La.call(this, a);
        this.features = b;
        this.mapBrowserEvent = c
    }

    v(jv, La);
    var kv = "modifystart", pv = "modifyend";

    function rv(a) {
        wg.call(this, {handleEvent: sv});
        a = a ? a : {};
        this.C = a.condition ? a.condition : Gg;
        this.u = a.addCondition ? a.addCondition : hc;
        this.B = a.removeCondition ? a.removeCondition : hc;
        this.G = a.toggleCondition ? a.toggleCondition : Ig;
        this.l = a.multi ? a.multi : !1;
        this.j = a.filter ? a.filter : gc;
        this.i = new E({
            source: new V({useSpatialIndex: !1, features: a.features, wrapX: a.wrapX}),
            style: a.style ? a.style : tv(),
            updateWhileAnimating: !0,
            updateWhileInteracting: !0
        });
        if (a.layers)if ("function" === typeof a.layers) a = a.layers; else {
            var b =
                a.layers;
            a = function (a) {
                return Ya(b, a)
            }
        } else a = gc;
        this.o = a;
        this.a = {};
        a = this.i.ga().c;
        w(a, te, this.om, this);
        w(a, ue, this.rm, this)
    }

    v(rv, wg);
    k = rv.prototype;
    k.pm = function () {
        return this.i.ga().c
    };
    k.qm = function (a) {
        a = ea(a);
        return this.a[a]
    };
    function sv(a) {
        if (!this.C(a))return !0;
        var b = this.u(a), c = this.B(a), d = this.G(a), e = !b && !c && !d, f = a.map, g = this.i.ga().c, h = [], l = [];
        if (e) {
            va(this.a);
            f.Td(a.pixel, function (a, b) {
                if (this.j(a, b)) {
                    l.push(a);
                    var c = ea(a);
                    this.a[c] = b;
                    return !this.l
                }
            }, this, this.o);
            for (e = g.yc() - 1; 0 <= e; --e) {
                var f = g.item(e), m = l.indexOf(f);
                -1 < m ? l.splice(m, 1) : (g.remove(f), h.push(f))
            }
            0 !== l.length && g.qf(l)
        } else {
            f.Td(a.pixel, function (a, e) {
                if (this.j(a, e)) {
                    if (!b && !d || Ya(g.a, a)) (c || d) && Ya(g.a, a) && (h.push(a), f = ea(a), delete this.a[f]); else {
                        l.push(a);
                        var f = ea(a);
                        this.a[f] = e
                    }
                    return !this.l
                }
            }, this, this.o);
            for (e = h.length - 1; 0 <= e; --e)g.remove(h[e]);
            g.qf(l)
        }
        (0 < l.length || 0 < h.length) && this.b(new uv(vv, l, h, a));
        return Fg(a)
    }

    k.setMap = function (a) {
        var b = this.s, c = this.i.ga().c;
        b && c.forEach(b.oi, b);
        wg.prototype.setMap.call(this, a);
        this.i.setMap(a);
        a && c.forEach(a.ki, a)
    };
    function tv() {
        var a = Gi();
        ab(a.Polygon, a.LineString);
        ab(a.GeometryCollection, a.LineString);
        return function (b) {
            return b.V() ? a[b.V().X()] : null
        }
    }

    k.om = function (a) {
        var b = this.s;
        b && b.ki(a.element)
    };
    k.rm = function (a) {
        var b = this.s;
        b && b.oi(a.element)
    };
    function uv(a, b, c, d) {
        La.call(this, a);
        this.selected = b;
        this.deselected = c;
        this.mapBrowserEvent = d
    }

    v(uv, La);
    var vv = "select";

    function wv(a) {
        Mg.call(this, {handleEvent: xv, handleDownEvent: gc, handleUpEvent: yv});
        a = a ? a : {};
        this.o = a.source ? a.source : null;
        this.ra = void 0 !== a.vertex ? a.vertex : !0;
        this.P = void 0 !== a.edge ? a.edge : !0;
        this.j = a.features ? a.features : null;
        this.oa = [];
        this.B = {};
        this.G = {};
        this.W = {};
        this.u = {};
        this.S = null;
        this.i = void 0 !== a.pixelTolerance ? a.pixelTolerance : 10;
        this.Ka = zv.bind(this);
        this.a = new fu;
        this.fa = {
            Point: this.xm,
            LineString: this.fh,
            LinearRing: this.fh,
            Polygon: this.ym,
            MultiPoint: this.vm,
            MultiLineString: this.um,
            MultiPolygon: this.wm,
            GeometryCollection: this.tm
        }
    }

    v(wv, Mg);
    k = wv.prototype;
    k.cb = function (a, b) {
        var c = void 0 !== b ? b : !0, d = ea(a), e = a.V();
        if (e) {
            var f = this.fa[e.X()];
            f && (this.W[d] = e.D(Bb()), f.call(this, a, e), c && (this.G[d] = w(e, "change", this.yk.bind(this, a), this)))
        }
        c && (this.B[d] = w(a, Va(a.f), this.sm, this))
    };
    k.xj = function (a) {
        this.cb(a)
    };
    k.yj = function (a) {
        this.mb(a)
    };
    k.dh = function (a) {
        var b;
        a instanceof pu ? b = a.feature : a instanceof se && (b = a.element);
        this.cb(b)
    };
    k.eh = function (a) {
        var b;
        a instanceof pu ? b = a.feature : a instanceof se && (b = a.element);
        this.mb(b)
    };
    k.sm = function (a) {
        a = a.target;
        this.mb(a, !0);
        this.cb(a, !0)
    };
    k.yk = function (a) {
        if (this.C) {
            var b = ea(a);
            b in this.u || (this.u[b] = a)
        } else this.pi(a)
    };
    k.mb = function (a, b) {
        var c = void 0 !== b ? b : !0, d = ea(a), e = this.W[d];
        if (e) {
            var f = this.a, g = [];
            ku(f, e, function (b) {
                a === b.feature && g.push(b)
            });
            for (e = g.length - 1; 0 <= e; --e)f.remove(g[e]);
            c && (Qa(this.G[d]), delete this.G[d])
        }
        c && (Qa(this.B[d]), delete this.B[d])
    };
    k.setMap = function (a) {
        var b = this.s, c = this.oa, d;
        this.j ? d = this.j : this.o && (d = this.o.oe());
        b && (c.forEach(Qa), c.length = 0, d.forEach(this.yj, this));
        Mg.prototype.setMap.call(this, a);
        a && (this.j ? c.push(w(this.j, te, this.dh, this), w(this.j, ue, this.eh, this)) : this.o && c.push(w(this.o, qu, this.dh, this), w(this.o, ru, this.eh, this)), d.forEach(this.xj, this))
    };
    k.Fc = hc;
    k.pi = function (a) {
        this.mb(a, !1);
        this.cb(a, !1)
    };
    k.tm = function (a, b) {
        var c, d = b.f;
        for (c = 0; c < d.length; ++c)this.fa[d[c].X()].call(this, a, d[c])
    };
    k.fh = function (a, b) {
        var c = b.Y(), d, e, f, g;
        d = 0;
        for (e = c.length - 1; d < e; ++d)f = c.slice(d, d + 2), g = {feature: a, pa: f}, this.a.Ea(Ab(f), g)
    };
    k.um = function (a, b) {
        var c = b.Y(), d, e, f, g, h, l, m;
        g = 0;
        for (h = c.length; g < h; ++g)for (d = c[g], e = 0, f = d.length - 1; e < f; ++e)l = d.slice(e, e + 2), m = {
            feature: a,
            pa: l
        }, this.a.Ea(Ab(l), m)
    };
    k.vm = function (a, b) {
        var c = b.Y(), d, e, f;
        e = 0;
        for (f = c.length; e < f; ++e)d = c[e], d = {feature: a, pa: [d, d]}, this.a.Ea(b.D(), d)
    };
    k.wm = function (a, b) {
        var c = b.Y(), d, e, f, g, h, l, m, n, p, q;
        l = 0;
        for (m = c.length; l < m; ++l)for (n = c[l], g = 0, h = n.length; g < h; ++g)for (d = n[g], e = 0, f = d.length - 1; e < f; ++e)p = d.slice(e, e + 2), q = {
            feature: a,
            pa: p
        }, this.a.Ea(Ab(p), q)
    };
    k.xm = function (a, b) {
        var c = b.Y(), c = {feature: a, pa: [c, c]};
        this.a.Ea(b.D(), c)
    };
    k.ym = function (a, b) {
        var c = b.Y(), d, e, f, g, h, l, m;
        g = 0;
        for (h = c.length; g < h; ++g)for (d = c[g], e = 0, f = d.length - 1; e < f; ++e)l = d.slice(e, e + 2), m = {
            feature: a,
            pa: l
        }, this.a.Ea(Ab(l), m)
    };
    function xv(a) {
        var b, c, d = a.pixel, e = a.coordinate;
        b = a.map;
        var f = b.Ja([d[0] - this.i, d[1] + this.i]);
        c = b.Ja([d[0] + this.i, d[1] - this.i]);
        var f = Ab([f, c]), g = iu(this.a, f), h, f = !1, l = null;
        c = null;
        if (0 < g.length) {
            this.S = e;
            g.sort(this.Ka);
            g = g[0].pa;
            if (this.ra && !this.P) {
                if (e = b.Da(g[0]), h = b.Da(g[1]), e = xb(d, e), d = xb(d, h), h = Math.sqrt(Math.min(e, d)), h = h <= this.i) f = !0, l = e > d ? g[1] : g[0], c = b.Da(l)
            } else this.P && (l = sb(e, g), c = b.Da(l), Math.sqrt(xb(d, c)) <= this.i && (f = !0, this.ra && (e = b.Da(g[0]), h = b.Da(g[1]), e = xb(c, e), d = xb(c, h), h = Math.sqrt(Math.min(e,
                d)), h = h <= this.i))) && (l = e > d ? g[1] : g[0], c = b.Da(l));
            f && (c = [Math.round(c[0]), Math.round(c[1])])
        }
        b = l;
        f && (a.coordinate = b.slice(0, 2), a.pixel = c);
        return Ng.call(this, a)
    }

    function yv() {
        var a = wa(this.u);
        a.length && (a.forEach(this.pi, this), this.u = {});
        return !1
    }

    function zv(a, b) {
        return yb(this.S, a.pa) - yb(this.S, b.pa)
    };
    function Av(a) {
        Mg.call(this, {handleDownEvent: Bv, handleDragEvent: Cv, handleMoveEvent: Dv, handleUpEvent: Ev});
        this.o = void 0;
        this.a = null;
        this.i = void 0 !== a.features ? a.features : null;
        if (a.layers)if ("function" === typeof a.layers) a = a.layers; else {
            var b = a.layers;
            a = function (a) {
                return Ya(b, a)
            }
        } else a = gc;
        this.u = a;
        this.j = null
    }

    v(Av, Mg);
    function Bv(a) {
        this.j = Fv(this, a.pixel, a.map);
        return !this.a && this.j ? (this.a = a.coordinate, Dv.call(this, a), this.b(new Gv(Hv, this.i, a.coordinate)), !0) : !1
    }

    function Ev(a) {
        return this.a ? (this.a = null, Dv.call(this, a), this.b(new Gv(Iv, this.i, a.coordinate)), !0) : !1
    }

    function Cv(a) {
        if (this.a) {
            a = a.coordinate;
            var b = a[0] - this.a[0], c = a[1] - this.a[1];
            if (this.i) this.i.forEach(function (a) {
                var d = a.V();
                d.Pc(b, c);
                a.Pa(d)
            }); else if (this.j) {
                var d = this.j.V();
                d.Pc(b, c);
                this.j.Pa(d)
            }
            this.a = a;
            this.b(new Gv(Jv, this.i, a))
        }
    }

    function Dv(a) {
        var b = a.map.uc();
        Fv(this, a.pixel, a.map) ? (this.o = b.style.cursor, b.style.cursor = this.a ? "-webkit-grabbing" : "-webkit-grab", b.style.cursor = this.a ? "grabbing" : "grab") : (b.style.cursor = void 0 !== this.o ? this.o : "", this.o = void 0)
    }

    function Fv(a, b, c) {
        var d = null;
        b = c.Td(b, function (a) {
            return a
        }, a, a.u);
        a.i && Ya(a.i.a, b) && (d = b);
        return d
    }

    function Gv(a, b, c) {
        La.call(this, a);
        this.features = b;
        this.coordinate = c
    }

    v(Gv, La);
    var Hv = "translatestart", Jv = "translating", Iv = "translateend";

    function W(a) {
        a = a ? a : {};
        var b = ua({}, a);
        delete b.gradient;
        delete b.radius;
        delete b.blur;
        delete b.shadow;
        delete b.weight;
        E.call(this, b);
        this.f = null;
        this.W = void 0 !== a.shadow ? a.shadow : 250;
        this.P = void 0;
        this.c = null;
        w(this, Va(Kv), this.zk, this);
        this.$h(a.gradient ? a.gradient : Lv);
        this.Th(void 0 !== a.blur ? a.blur : 15);
        this.ih(void 0 !== a.radius ? a.radius : 8);
        w(this, Va(Mv), this.lf, this);
        w(this, Va(Nv), this.lf, this);
        this.lf();
        var c = a.weight ? a.weight : "weight", d;
        "string" === typeof c ? d = function (a) {
            return a.get(c)
        } : d = c;
        this.l(function (a) {
            a =
                d(a);
            a = void 0 !== a ? ia(a, 0, 1) : 1;
            var b = 255 * a | 0, c = this.c[b];
            c || (c = [new Bi({image: new lp({opacity: a, src: this.P})})], this.c[b] = c);
            return c
        }.bind(this));
        this.set("renderOrder", null);
        w(this, "render", this.Qk, this)
    }

    v(W, E);
    var Lv = ["#00f", "#0ff", "#0f0", "#ff0", "#f00"];
    k = W.prototype;
    k.tg = function () {
        return this.get(Mv)
    };
    k.Ag = function () {
        return this.get(Kv)
    };
    k.hh = function () {
        return this.get(Nv)
    };
    k.zk = function () {
        for (var a = this.Ag(), b = Ge(1, 256), c = b.createLinearGradient(0, 0, 1, 256), d = 1 / (a.length - 1), e = 0, f = a.length; e < f; ++e)c.addColorStop(e * d, a[e]);
        b.fillStyle = c;
        b.fillRect(0, 0, 1, 256);
        this.f = b.getImageData(0, 0, 1, 256).data
    };
    k.lf = function () {
        var a = this.hh(), b = this.tg(), c = a + b + 1, d = 2 * c, d = Ge(d, d);
        d.shadowOffsetX = d.shadowOffsetY = this.W;
        d.shadowBlur = b;
        d.shadowColor = "#000";
        d.beginPath();
        b = c - this.W;
        d.arc(b, b, a, 0, 2 * Math.PI, !0);
        d.fill();
        this.P = d.canvas.toDataURL();
        this.c = Array(256);
        this.v()
    };
    k.Qk = function (a) {
        a = a.context;
        var b = a.canvas, b = a.getImageData(0, 0, b.width, b.height), c = b.data, d, e, f;
        d = 0;
        for (e = c.length; d < e; d += 4)if (f = 4 * c[d + 3]) c[d] = this.f[f], c[d + 1] = this.f[f + 1], c[d + 2] = this.f[f + 2];
        a.putImageData(b, 0, 0)
    };
    k.Th = function (a) {
        this.set(Mv, a)
    };
    k.$h = function (a) {
        this.set(Kv, a)
    };
    k.ih = function (a) {
        this.set(Nv, a)
    };
    var Mv = "blur", Kv = "gradient", Nv = "radius";

    function Ov(a, b, c, d) {
        function e() {
            delete window[g];
            f.parentNode.removeChild(f)
        }

        var f = document.createElement("script"), g = "olc_" + ea(b);
        f.async = !0;
        f.src = a + (-1 == a.indexOf("?") ? "?" : "&") + (d || "callback") + "=" + g;
        var h = setTimeout(function () {
            e();
            c && c()
        }, 1E4);
        window[g] = function (a) {
            clearTimeout(h);
            e();
            b(a)
        };
        document.getElementsByTagName("head")[0].appendChild(f)
    };
    function Pv(a, b, c, d, e, f, g, h, l, m, n) {
        jg.call(this, e, 0);
        this.G = void 0 !== n ? n : !1;
        this.B = g;
        this.C = h;
        this.u = null;
        this.c = b;
        this.o = d;
        this.s = f ? f : e;
        this.g = [];
        this.Xc = null;
        this.j = 0;
        f = d.Ia(this.s);
        h = this.o.D();
        e = this.c.D();
        f = h ? cc(f, h) : f;
        if (0 === Xb(f)) this.state = 4; else if ((h = a.D()) && (e ? e = cc(e, h) : e = h), d = d.Ca(this.s[0]), d = Pj(a, c, ac(f), d), !isFinite(d) || 0 >= d) this.state = 4; else if (this.T = new Sj(a, c, f, e, d * (void 0 !== m ? m : .5)), 0 === this.T.f.length) this.state = 4; else if (this.j = b.wc(d), c = Uj(this.T), e && (a.a ? (c[1] = ia(c[1], e[1],
                e[3]), c[3] = ia(c[3], e[1], e[3])) : c = cc(c, e)), Xb(c)) {
            a = ee(b, c, this.j);
            for (b = a.ba; b <= a.da; b++)for (c = a.ea; c <= a.ha; c++)(m = l(this.j, b, c, g)) && this.g.push(m);
            0 === this.g.length && (this.state = 4)
        } else this.state = 4
    }

    v(Pv, jg);
    Pv.prototype.la = function () {
        1 == this.state && (this.Xc.forEach(za), this.Xc = null);
        jg.prototype.la.call(this)
    };
    Pv.prototype.qb = function () {
        return this.u
    };
    Pv.prototype.Cd = function () {
        var a = [];
        this.g.forEach(function (b) {
            b && b.U() == mg && a.push({extent: this.c.Ia(b.xa), image: b.qb()})
        }, this);
        this.g.length = 0;
        if (0 === a.length) this.state = 3; else {
            var b = this.s[0], c = this.o.Na(b), d = "number" === typeof c ? c : c[0], c = "number" === typeof c ? c : c[1], b = this.o.Ca(b), e = this.c.Ca(this.j), f = this.o.Ia(this.s);
            this.u = Rj(d, c, this.B, e, this.c.D(), b, f, this.T, a, this.C, this.G);
            this.state = mg
        }
        kg(this)
    };
    Pv.prototype.load = function () {
        if (0 == this.state) {
            this.state = 1;
            kg(this);
            var a = 0;
            this.Xc = [];
            this.g.forEach(function (b) {
                var c = b.U();
                if (0 == c || 1 == c) {
                    a++;
                    var d;
                    d = w(b, "change", function () {
                        var c = b.U();
                        if (c == mg || 3 == c || 4 == c) za(d), a--, 0 === a && (this.Xc.forEach(za), this.Xc = null, this.Cd())
                    }, this);
                    this.Xc.push(d)
                }
            }, this);
            this.g.forEach(function (a) {
                0 == a.U() && a.load()
            });
            0 === a && setTimeout(this.Cd.bind(this), 0)
        }
    };
    function Qv(a, b) {
        var c = /\{z\}/g, d = /\{x\}/g, e = /\{y\}/g, f = /\{-y\}/g;
        return function (g) {
            if (g)return a.replace(c, g[0].toString()).replace(d, g[1].toString()).replace(e, function () {
                return (-g[2] - 1).toString()
            }).replace(f, function () {
                var a = b.a ? b.a[g[0]] : null;
                ha(a, 55);
                return (a.ha - a.ea + 1 + g[2]).toString()
            })
        }
    }

    function Rv(a, b) {
        for (var c = a.length, d = Array(c), e = 0; e < c; ++e)d[e] = Qv(a[e], b);
        return Sv(d)
    }

    function Sv(a) {
        return 1 === a.length ? a[0] : function (b, c, d) {
            if (b)return a[oa((b[1] << b[0]) + b[2], a.length)](b, c, d)
        }
    }

    function Tv() {
    }

    function Uv(a) {
        var b = [], c = /\{([a-z])-([a-z])\}/.exec(a);
        if (c) {
            var d = c[2].charCodeAt(0), e;
            for (e = c[1].charCodeAt(0); e <= d; ++e)b.push(a.replace(c[0], String.fromCharCode(e)));
            return b
        }
        if (c = c = /\{(\d+)-(\d+)\}/.exec(a)) {
            d = parseInt(c[2], 10);
            for (e = parseInt(c[1], 10); e <= d; e++)b.push(a.replace(c[0], e.toString()));
            return b
        }
        b.push(a);
        return b
    };
    function Vv(a) {
        vl.call(this);
        this.c = void 0 !== a ? a : 2048
    }

    v(Vv, vl);
    function Wv(a) {
        return a.f > a.c
    }

    Vv.prototype.Kc = function (a) {
        for (var b, c; Wv(this);) {
            b = this.a.Gc;
            c = b.xa[0].toString();
            var d;
            if (d = c in a) b = b.xa, d = Ud(a[c], b[1], b[2]);
            if (d)break; else Ja(this.pop())
        }
    };
    function Xv(a) {
        Wj.call(this, {
            attributions: a.attributions,
            extent: a.extent,
            logo: a.logo,
            projection: a.projection,
            state: a.state,
            wrapX: a.wrapX
        });
        this.fa = void 0 !== a.opaque ? a.opaque : !1;
        this.oa = void 0 !== a.tilePixelRatio ? a.tilePixelRatio : 1;
        this.tileGrid = void 0 !== a.tileGrid ? a.tileGrid : null;
        this.a = new Vv(a.cacheSize);
        this.l = [0, 0];
        this.ec = ""
    }

    v(Xv, Wj);
    k = Xv.prototype;
    k.qh = function () {
        return Wv(this.a)
    };
    k.Kc = function (a, b) {
        var c = this.qd(a);
        c && c.Kc(b)
    };
    function Zi(a, b, c, d, e) {
        b = a.qd(b);
        if (!b)return !1;
        for (var f = !0, g, h, l = d.ba; l <= d.da; ++l)for (var m = d.ea; m <= d.ha; ++m)g = a.Fb(c, l, m), h = !1, b.b.hasOwnProperty(g) && (g = b.get(g), (h = g.U() === mg) && (h = !1 !== e(g))), h || (f = !1);
        return f
    }

    k.df = function () {
        return 0
    };
    function Yv(a, b) {
        a.ec !== b && (a.ec = b, a.v())
    }

    k.Fb = function (a, b, c) {
        return a + "/" + b + "/" + c
    };
    k.gf = function () {
        return this.fa
    };
    k.Ra = function () {
        return this.tileGrid
    };
    k.pb = function (a) {
        return this.tileGrid ? this.tileGrid : ke(a)
    };
    k.qd = function (a) {
        var b = this.f;
        return b && !Hc(b, a) ? null : this.a
    };
    k.gb = function () {
        return this.oa
    };
    k.kf = function (a, b, c) {
        c = this.pb(c);
        b = this.gb(b);
        a = Zd(c.Na(a), this.l);
        return 1 == b ? a : Yd(a, b, this.l)
    };
    function Zv(a, b, c) {
        var d = void 0 !== c ? c : a.f;
        c = a.pb(d);
        if (a.G && d.g) {
            var e = b;
            b = e[0];
            a = je(c, e);
            d = le(d);
            Gb(d, a) ? b = e : (e = Zb(d), a[0] += e * Math.ceil((d[0] - a[0]) / e), b = c.rd(a, b))
        }
        e = b[0];
        d = b[1];
        a = b[2];
        if (c.minZoom > e || e > c.maxZoom) c = !1; else {
            var f = c.D();
            c = (c = f ? ee(c, f, e) : c.a ? c.a[e] : null) ? Ud(c, d, a) : !0
        }
        return c ? b : null
    }

    k.ta = function () {
        this.a.clear();
        this.v()
    };
    k.Vf = da;
    function $v(a, b) {
        La.call(this, a);
        this.tile = b
    }

    v($v, La);
    function aw(a) {
        Xv.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            extent: a.extent,
            logo: a.logo,
            opaque: a.opaque,
            projection: a.projection,
            state: a.state,
            tileGrid: a.tileGrid,
            tilePixelRatio: a.tilePixelRatio,
            wrapX: a.wrapX
        });
        this.tileLoadFunction = a.tileLoadFunction;
        this.tileUrlFunction = this.sc ? this.sc.bind(this) : Tv;
        this.urls = null;
        a.urls ? this.Ua(a.urls) : a.url && this.Ya(a.url);
        a.tileUrlFunction && this.Ta(a.tileUrlFunction)
    }

    v(aw, Xv);
    k = aw.prototype;
    k.fb = function () {
        return this.tileLoadFunction
    };
    k.hb = function () {
        return this.tileUrlFunction
    };
    k.ib = function () {
        return this.urls
    };
    k.rh = function (a) {
        a = a.target;
        switch (a.U()) {
            case 1:
                this.b(new $v("tileloadstart", a));
                break;
            case mg:
                this.b(new $v("tileloadend", a));
                break;
            case 3:
                this.b(new $v("tileloaderror", a))
        }
    };
    k.nb = function (a) {
        this.a.clear();
        this.tileLoadFunction = a;
        this.v()
    };
    k.Ta = function (a, b) {
        this.tileUrlFunction = a;
        "undefined" !== typeof b ? Yv(this, b) : this.v()
    };
    k.Ya = function (a) {
        var b = this.urls = Uv(a);
        this.Ta(this.sc ? this.sc.bind(this) : Rv(b, this.tileGrid), a)
    };
    k.Ua = function (a) {
        this.urls = a;
        var b = a.join("\n");
        this.Ta(this.sc ? this.sc.bind(this) : Rv(a, this.tileGrid), b)
    };
    k.Vf = function (a, b, c) {
        a = this.Fb(a, b, c);
        this.a.b.hasOwnProperty(a) && this.a.get(a)
    };
    function X(a) {
        aw.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            extent: a.extent,
            logo: a.logo,
            opaque: a.opaque,
            projection: a.projection,
            state: a.state,
            tileGrid: a.tileGrid,
            tileLoadFunction: a.tileLoadFunction ? a.tileLoadFunction : bw,
            tilePixelRatio: a.tilePixelRatio,
            tileUrlFunction: a.tileUrlFunction,
            url: a.url,
            urls: a.urls,
            wrapX: a.wrapX
        });
        this.crossOrigin = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.tileClass = void 0 !== a.tileClass ? a.tileClass : Ut;
        this.i = {};
        this.s = {};
        this.ra = a.reprojectionErrorThreshold;
        this.B = !1
    }

    v(X, aw);
    k = X.prototype;
    k.qh = function () {
        if (Wv(this.a))return !0;
        for (var a in this.i)if (Wv(this.i[a]))return !0;
        return !1
    };
    k.Kc = function (a, b) {
        var c = this.qd(a);
        this.a.Kc(this.a == c ? b : {});
        for (var d in this.i) {
            var e = this.i[d];
            e.Kc(e == c ? b : {})
        }
    };
    k.df = function (a) {
        return this.f && a && !Hc(this.f, a) ? 0 : this.ef()
    };
    k.ef = function () {
        return 0
    };
    k.gf = function (a) {
        return this.f && a && !Hc(this.f, a) ? !1 : aw.prototype.gf.call(this, a)
    };
    k.pb = function (a) {
        var b = this.f;
        return !this.tileGrid || b && !Hc(b, a) ? (b = ea(a).toString(), b in this.s || (this.s[b] = ke(a)), this.s[b]) : this.tileGrid
    };
    k.qd = function (a) {
        var b = this.f;
        if (!b || Hc(b, a))return this.a;
        a = ea(a).toString();
        a in this.i || (this.i[a] = new Vv);
        return this.i[a]
    };
    function cw(a, b, c, d, e, f, g) {
        b = [b, c, d];
        e = (c = Zv(a, b, f)) ? a.tileUrlFunction(c, e, f) : void 0;
        e = new a.tileClass(b, void 0 !== e ? 0 : 4, void 0 !== e ? e : "", a.crossOrigin, a.tileLoadFunction);
        e.key = g;
        w(e, "change", a.rh, a);
        return e
    }

    k.vc = function (a, b, c, d, e) {
        if (this.f && e && !Hc(this.f, e)) {
            var f = this.qd(e);
            c = [a, b, c];
            var g;
            a = this.Fb.apply(this, c);
            f.b.hasOwnProperty(a) && (g = f.get(a));
            b = this.ec;
            if (g && g.key == b)return g;
            var h = this.f, l = this.pb(h), m = this.pb(e), n = Zv(this, c, e);
            d = new Pv(h, l, e, m, c, n, this.gb(d), this.ef(), function (a, b, c, d) {
                return dw(this, a, b, c, d, h)
            }.bind(this), this.ra, this.B);
            d.key = b;
            g ? (d.a = g, f.replace(a, d)) : f.set(a, d);
            return d
        }
        return dw(this, a, b, c, d, e)
    };
    function dw(a, b, c, d, e, f) {
        var g, h = a.Fb(b, c, d), l = a.ec;
        if (a.a.b.hasOwnProperty(h)) {
            if (g = a.a.get(h), g.key != l) {
                var m = g;
                g = cw(a, b, c, d, e, f, l);
                0 == m.U() ? g.a = m.a : g.a = m;
                if (g.a) {
                    b = g.a;
                    c = g;
                    do {
                        if (b.U() == mg) {
                            b.a = null;
                            break
                        } else 1 == b.U() ? c = b : 0 == b.U() ? c.a = b.a : c = b;
                        b = c.a
                    } while (b)
                }
                a.a.replace(h, g)
            }
        } else g = cw(a, b, c, d, e, f, l), a.a.set(h, g);
        return g
    }

    k.Bb = function (a) {
        if (this.B != a) {
            this.B = a;
            for (var b in this.i)this.i[b].clear();
            this.v()
        }
    };
    k.Cb = function (a, b) {
        var c = oc(a);
        c && (c = ea(c).toString(), c in this.s || (this.s[c] = b))
    };
    function bw(a, b) {
        a.qb().src = b
    };
    function ew(a) {
        X.call(this, {
            cacheSize: a.cacheSize,
            crossOrigin: "anonymous",
            opaque: !0,
            projection: oc("EPSG:3857"),
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            state: "loading",
            tileLoadFunction: a.tileLoadFunction,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        });
        this.C = void 0 !== a.culture ? a.culture : "en-us";
        this.u = void 0 !== a.maxZoom ? a.maxZoom : -1;
        this.c = a.key;
        this.o = a.imagerySet;
        Ov("https://dev.virtualearth.net/REST/v1/Imagery/Metadata/" + this.o + "?uriScheme=https&include=ImageryProviders&key=" + this.c, this.Z.bind(this),
            void 0, "jsonp")
    }

    v(ew, X);
    var fw = new oe({html: '<a class="ol-attribution-bing-tos" href="http://www.microsoft.com/maps/product/terms.html">Terms of Use</a>'});
    ew.prototype.P = function () {
        return this.c
    };
    ew.prototype.W = function () {
        return this.o
    };
    ew.prototype.Z = function (a) {
        if (200 != a.statusCode || "OK" != a.statusDescription || "ValidCredentials" != a.authenticationResultCode || 1 != a.resourceSets.length || 1 != a.resourceSets[0].resources.length) Yj(this, "error"); else {
            var b = a.brandLogoUri;
            -1 == b.indexOf("https") && (b = b.replace("http", "https"));
            var c = a.resourceSets[0].resources[0], d = -1 == this.u ? c.zoomMax : this.u;
            a = le(this.f);
            var e = ne({
                extent: a,
                minZoom: c.zoomMin,
                maxZoom: d,
                tileSize: c.imageWidth == c.imageHeight ? c.imageWidth : [c.imageWidth, c.imageHeight]
            });
            this.tileGrid =
                e;
            var f = this.C;
            this.tileUrlFunction = Sv(c.imageUrlSubdomains.map(function (a) {
                var b = [0, 0, 0], d = c.imageUrl.replace("{subdomain}", a).replace("{culture}", f);
                return function (a) {
                    if (a)return $d(a[0], a[1], -a[2] - 1, b), d.replace("{quadkey}", ae(b))
                }
            }));
            if (c.imageryProviders) {
                var g = rc(oc("EPSG:4326"), this.f);
                a = c.imageryProviders.map(function (a) {
                    var b = a.attribution, c = {};
                    a.coverageAreas.forEach(function (a) {
                        var b = a.zoomMin, f = Math.min(a.zoomMax, d);
                        a = a.bbox;
                        a = fc([a[1], a[0], a[3], a[2]], g);
                        var h, l;
                        for (h = b; h <= f; ++h)l = h.toString(),
                            b = ee(e, a, h), l in c ? c[l].push(b) : c[l] = [b]
                    });
                    return new oe({html: b, tileRanges: c})
                });
                a.push(fw);
                this.qa(a)
            }
            this.S = b;
            Yj(this, "ready")
        }
    };
    function gw(a) {
        a = a || {};
        var b = void 0 !== a.projection ? a.projection : "EPSG:3857", c = void 0 !== a.tileGrid ? a.tileGrid : ne({
            extent: le(b),
            maxZoom: a.maxZoom,
            minZoom: a.minZoom,
            tileSize: a.tileSize
        });
        X.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            opaque: a.opaque,
            projection: b,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileGrid: c,
            tileLoadFunction: a.tileLoadFunction,
            tilePixelRatio: a.tilePixelRatio,
            tileUrlFunction: a.tileUrlFunction,
            url: a.url,
            urls: a.urls,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        })
    }

    v(gw, X);
    function hw(a) {
        this.u = a.account;
        this.C = a.map || "";
        this.c = a.config || {};
        this.o = {};
        gw.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            maxZoom: void 0 !== a.maxZoom ? a.maxZoom : 18,
            minZoom: a.minZoom,
            projection: a.projection,
            state: "loading",
            wrapX: a.wrapX
        });
        iw(this)
    }

    v(hw, gw);
    k = hw.prototype;
    k.Hj = function () {
        return this.c
    };
    k.gp = function (a) {
        ua(this.c, a);
        iw(this)
    };
    k.Po = function (a) {
        this.c = a || {};
        iw(this)
    };
    function iw(a) {
        var b = JSON.stringify(a.c);
        if (a.o[b]) jw(a, a.o[b]); else {
            var c = "https://" + a.u + ".cartodb.com/api/v1/map";
            a.C && (c += "/named/" + a.C);
            var d = new XMLHttpRequest;
            d.addEventListener("load", a.Bk.bind(a, b));
            d.addEventListener("error", a.Ak.bind(a));
            d.open("POST", c);
            d.setRequestHeader("Content-type", "application/json");
            d.send(JSON.stringify(a.c))
        }
    }

    k.Bk = function (a, b) {
        var c = b.target;
        if (!c.status || 200 <= c.status && 300 > c.status) {
            var d;
            try {
                d = JSON.parse(c.responseText)
            } catch (e) {
                Yj(this, "error");
                return
            }
            jw(this, d);
            this.o[a] = d;
            Yj(this, "ready")
        } else Yj(this, "error")
    };
    k.Ak = function () {
        Yj(this, "error")
    };
    function jw(a, b) {
        a.Ya("https://" + b.cdn_url.https + "/" + a.u + "/api/v1/map/" + b.layergroupid + "/{z}/{x}/{y}.png")
    };
    function Y(a) {
        V.call(this, {
            attributions: a.attributions,
            extent: a.extent,
            logo: a.logo,
            projection: a.projection,
            wrapX: a.wrapX
        });
        this.B = void 0;
        this.fa = void 0 !== a.distance ? a.distance : 20;
        this.C = [];
        this.oa = a.geometryFunction || function (a) {
                a = a.V();
                ha(a instanceof B, 10);
                return a
            };
        this.u = a.source;
        this.u.I("change", Y.prototype.La, this)
    }

    v(Y, V);
    Y.prototype.ub = function () {
        return this.u
    };
    Y.prototype.sd = function (a, b, c) {
        this.u.sd(a, b, c);
        b !== this.B && (this.clear(), this.B = b, kw(this), this.Ic(this.C))
    };
    Y.prototype.Jb = function (a) {
        this.fa = a;
        this.La()
    };
    Y.prototype.La = function () {
        this.clear();
        kw(this);
        this.Ic(this.C);
        this.v()
    };
    function kw(a) {
        if (void 0 !== a.B) {
            a.C.length = 0;
            for (var b = Bb(), c = a.fa * a.B, d = a.u.oe(), e = {}, f = 0, g = d.length; f < g; f++) {
                var h = d[f];
                ea(h).toString() in e || !(h = a.oa(h)) || (h = h.Y(), Lb(h, b), Db(b, c, b), h = a.u.bf(b), h = h.filter(function (a) {
                    a = ea(a).toString();
                    return a in e ? !1 : e[a] = !0
                }), a.C.push(lw(a, h)))
            }
        }
    }

    function lw(a, b) {
        for (var c = [0, 0], d = b.length - 1; 0 <= d; --d) {
            var e = a.oa(b[d]);
            e ? rb(c, e.Y()) : b.splice(d, 1)
        }
        d = 1 / b.length;
        c[0] *= d;
        c[1] *= d;
        c = new I(new B(c));
        c.set("features", b);
        return c
    };
    function mw(a, b) {
        var c = [];
        Object.keys(b).forEach(function (a) {
            null !== b[a] && void 0 !== b[a] && c.push(a + "=" + encodeURIComponent(b[a]))
        });
        var d = c.join("&");
        a = a.replace(/[?&]$/, "");
        a = -1 === a.indexOf("?") ? a + "?" : a + "&";
        return a + d
    };
    function nw(a) {
        a = a || {};
        Zj.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: a.projection,
            resolutions: a.resolutions
        });
        this.Z = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.i = a.url;
        this.l = void 0 !== a.imageLoadFunction ? a.imageLoadFunction : fk;
        this.u = a.params || {};
        this.c = null;
        this.s = [0, 0];
        this.P = 0;
        this.B = void 0 !== a.ratio ? a.ratio : 1.5
    }

    v(nw, Zj);
    k = nw.prototype;
    k.Gm = function () {
        return this.u
    };
    k.Lc = function (a, b, c, d) {
        if (void 0 === this.i)return null;
        b = ak(this, b);
        var e = this.c;
        if (e && this.P == this.g && e.resolution == b && e.f == c && Ib(e.D(), a))return e;
        e = {F: "image", FORMAT: "PNG32", TRANSPARENT: !0};
        ua(e, this.u);
        a = a.slice();
        var f = (a[0] + a[2]) / 2, g = (a[1] + a[3]) / 2;
        if (1 != this.B) {
            var h = this.B * Zb(a) / 2, l = this.B * $b(a) / 2;
            a[0] = f - h;
            a[1] = g - l;
            a[2] = f + h;
            a[3] = g + l
        }
        var h = b / c, l = Math.ceil(Zb(a) / h), m = Math.ceil($b(a) / h);
        a[0] = f - h * l / 2;
        a[2] = f + h * l / 2;
        a[1] = g - h * m / 2;
        a[3] = g + h * m / 2;
        this.s[0] = l;
        this.s[1] = m;
        f = a;
        g = this.s;
        d = d.eb.split(":").pop();
        e.SIZE = g[0] + "," + g[1];
        e.BBOX = f.join(",");
        e.BBOXSR = d;
        e.IMAGESR = d;
        e.DPI = 90 * c;
        d = this.i;
        f = d.replace(/MapServer\/?$/, "MapServer/export").replace(/ImageServer\/?$/, "ImageServer/exportImage");
        f == d && ha(!1, 50);
        e = mw(f, e);
        this.c = new li(a, b, c, this.j, e, this.Z, this.l);
        this.P = this.g;
        w(this.c, "change", this.o, this);
        return this.c
    };
    k.Fm = function () {
        return this.l
    };
    k.Hm = function () {
        return this.i
    };
    k.Im = function (a) {
        this.c = null;
        this.l = a;
        this.v()
    };
    k.Jm = function (a) {
        a != this.i && (this.i = a, this.c = null, this.v())
    };
    k.Km = function (a) {
        ua(this.u, a);
        this.c = null;
        this.v()
    };
    function ow(a) {
        Zj.call(this, {projection: a.projection, resolutions: a.resolutions});
        this.Z = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.s = void 0 !== a.displayDpi ? a.displayDpi : 96;
        this.l = a.params || {};
        this.P = a.url;
        this.c = void 0 !== a.imageLoadFunction ? a.imageLoadFunction : fk;
        this.fa = void 0 !== a.hidpi ? a.hidpi : !0;
        this.oa = void 0 !== a.metersPerUnit ? a.metersPerUnit : 1;
        this.u = void 0 !== a.ratio ? a.ratio : 1;
        this.Aa = void 0 !== a.useOverlay ? a.useOverlay : !1;
        this.i = null;
        this.B = 0
    }

    v(ow, Zj);
    k = ow.prototype;
    k.Mm = function () {
        return this.l
    };
    k.Lc = function (a, b, c) {
        b = ak(this, b);
        c = this.fa ? c : 1;
        var d = this.i;
        if (d && this.B == this.g && d.resolution == b && d.f == c && Ib(d.D(), a))return d;
        1 != this.u && (a = a.slice(), ec(a, this.u));
        var e = [Zb(a) / b * c, $b(a) / b * c];
        if (void 0 !== this.P) {
            var d = this.P, f = ac(a), g = this.oa, h = Zb(a), l = $b(a), m = e[0], n = e[1], p = .0254 / this.s, e = {
                OPERATION: this.Aa ? "GETDYNAMICMAPOVERLAYIMAGE" : "GETMAPIMAGE",
                VERSION: "2.0.0",
                LOCALE: "en",
                CLIENTAGENT: "ol.source.ImageMapGuide source",
                CLIP: "1",
                SETDISPLAYDPI: this.s,
                SETDISPLAYWIDTH: Math.round(e[0]),
                SETDISPLAYHEIGHT: Math.round(e[1]),
                SETVIEWSCALE: n * h > m * l ? h * g / (m * p) : l * g / (n * p),
                SETVIEWCENTERX: f[0],
                SETVIEWCENTERY: f[1]
            };
            ua(e, this.l);
            d = mw(d, e);
            d = new li(a, b, c, this.j, d, this.Z, this.c);
            w(d, "change", this.o, this)
        } else d = null;
        this.i = d;
        this.B = this.g;
        return d
    };
    k.Lm = function () {
        return this.c
    };
    k.Om = function (a) {
        ua(this.l, a);
        this.v()
    };
    k.Nm = function (a) {
        this.i = null;
        this.c = a;
        this.v()
    };
    function pw(a) {
        var b = a.imageExtent, c = void 0 !== a.crossOrigin ? a.crossOrigin : null, d = void 0 !== a.imageLoadFunction ? a.imageLoadFunction : fk;
        Zj.call(this, {attributions: a.attributions, logo: a.logo, projection: oc(a.projection)});
        this.c = new li(b, void 0, 1, this.j, a.url, c, d);
        this.i = a.imageSize ? a.imageSize : null;
        w(this.c, "change", this.o, this)
    }

    v(pw, Zj);
    pw.prototype.Lc = function (a) {
        return dc(a, this.c.D()) ? this.c : null
    };
    pw.prototype.o = function (a) {
        if (this.c.U() == oi) {
            var b = this.c.D(), c = this.c.a(), d, e;
            this.i ? (d = this.i[0], e = this.i[1]) : (d = c.width, e = c.height);
            b = Math.ceil(Zb(b) / ($b(b) / e));
            if (b != d) {
                var b = Ge(b, e), f = b.canvas;
                b.drawImage(c, 0, 0, d, e, 0, 0, f.width, f.height);
                this.c.g = f
            }
        }
        Zj.prototype.o.call(this, a)
    };
    function qw(a) {
        a = a || {};
        Zj.call(this, {
            attributions: a.attributions,
            logo: a.logo,
            projection: a.projection,
            resolutions: a.resolutions
        });
        this.oa = void 0 !== a.crossOrigin ? a.crossOrigin : null;
        this.l = a.url;
        this.B = void 0 !== a.imageLoadFunction ? a.imageLoadFunction : fk;
        this.i = a.params || {};
        this.u = !0;
        rw(this);
        this.fa = a.serverType;
        this.Aa = void 0 !== a.hidpi ? a.hidpi : !0;
        this.c = null;
        this.P = [0, 0];
        this.Z = 0;
        this.s = void 0 !== a.ratio ? a.ratio : 1.5
    }

    v(qw, Zj);
    var sw = [101, 101];
    k = qw.prototype;
    k.Um = function (a, b, c, d) {
        if (void 0 !== this.l) {
            var e = bc(a, b, 0, sw), f = {
                SERVICE: "WMS",
                VERSION: "1.3.0",
                REQUEST: "GetFeatureInfo",
                FORMAT: "image/png",
                TRANSPARENT: !0,
                QUERY_LAYERS: this.i.LAYERS
            };
            ua(f, this.i, d);
            d = Math.floor((e[3] - a[1]) / b);
            f[this.u ? "I" : "X"] = Math.floor((a[0] - e[0]) / b);
            f[this.u ? "J" : "Y"] = d;
            return tw(this, e, sw, 1, oc(c), f)
        }
    };
    k.Wm = function () {
        return this.i
    };
    k.Lc = function (a, b, c, d) {
        if (void 0 === this.l)return null;
        b = ak(this, b);
        1 == c || this.Aa && void 0 !== this.fa || (c = 1);
        a = a.slice();
        var e = (a[0] + a[2]) / 2, f = (a[1] + a[3]) / 2, g = b / c, h = Zb(a) / g, g = $b(a) / g, l = this.c;
        if (l && this.Z == this.g && l.resolution == b && l.f == c && Ib(l.D(), a))return l;
        if (1 != this.s) {
            var l = this.s * Zb(a) / 2, m = this.s * $b(a) / 2;
            a[0] = e - l;
            a[1] = f - m;
            a[2] = e + l;
            a[3] = f + m
        }
        e = {SERVICE: "WMS", VERSION: "1.3.0", REQUEST: "GetMap", FORMAT: "image/png", TRANSPARENT: !0};
        ua(e, this.i);
        this.P[0] = Math.ceil(h * this.s);
        this.P[1] = Math.ceil(g * this.s);
        d = tw(this, a, this.P, c, d, e);
        this.c = new li(a, b, c, this.j, d, this.oa, this.B);
        this.Z = this.g;
        w(this.c, "change", this.o, this);
        return this.c
    };
    k.Vm = function () {
        return this.B
    };
    function tw(a, b, c, d, e, f) {
        ha(void 0 !== a.l, 9);
        f[a.u ? "CRS" : "SRS"] = e.eb;
        "STYLES" in a.i || (f.STYLES = "");
        if (1 != d)switch (a.fa) {
            case "geoserver":
                d = 90 * d + .5 | 0;
                f.FORMAT_OPTIONS = "FORMAT_OPTIONS" in f ? f.FORMAT_OPTIONS + (";dpi:" + d) : "dpi:" + d;
                break;
            case "mapserver":
                f.MAP_RESOLUTION = 90 * d;
                break;
            case "carmentaserver":
            case "qgis":
                f.DPI = 90 * d;
                break;
            default:
                ha(!1, 8)
        }
        f.WIDTH = c[0];
        f.HEIGHT = c[1];
        c = e.b;
        var g;
        a.u && "ne" == c.substr(0, 2) ? g = [b[1], b[0], b[3], b[2]] : g = b;
        f.BBOX = g.join(",");
        return mw(a.l, f)
    }

    k.Xm = function () {
        return this.l
    };
    k.Ym = function (a) {
        this.c = null;
        this.B = a;
        this.v()
    };
    k.Zm = function (a) {
        a != this.l && (this.l = a, this.c = null, this.v())
    };
    k.$m = function (a) {
        ua(this.i, a);
        rw(this);
        this.c = null;
        this.v()
    };
    function rw(a) {
        a.u = 0 <= qb(a.i.VERSION || "1.3.0")
    };
    function uw(a) {
        a = a || {};
        var b;
        void 0 !== a.attributions ? b = a.attributions : b = [vw];
        gw.call(this, {
            attributions: b,
            cacheSize: a.cacheSize,
            crossOrigin: void 0 !== a.crossOrigin ? a.crossOrigin : "anonymous",
            opaque: void 0 !== a.opaque ? a.opaque : !0,
            maxZoom: void 0 !== a.maxZoom ? a.maxZoom : 19,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileLoadFunction: a.tileLoadFunction,
            url: void 0 !== a.url ? a.url : "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            wrapX: a.wrapX
        })
    }

    v(uw, gw);
    var vw = new oe({html: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.'});
    (function () {
        var a = {}, b = {ja: a};
        (function (c) {
            if ("object" === typeof a && "undefined" !== typeof b) b.ja = c(); else {
                var d;
                "undefined" !== typeof window ? d = window : "undefined" !== typeof global ? d = global : "undefined" !== typeof self ? d = self : d = this;
                d.Cp = c()
            }
        })(function () {
            return function d(a, b, g) {
                function h(m, p) {
                    if (!b[m]) {
                        if (!a[m]) {
                            var q = "function" == typeof require && require;
                            if (!p && q)return q(m, !0);
                            if (l)return l(m, !0);
                            q = Error("Cannot find module '" + m + "'");
                            throw q.code = "MODULE_NOT_FOUND", q;
                        }
                        q = b[m] = {ja: {}};
                        a[m][0].call(q.ja, function (b) {
                            var d =
                                a[m][1][b];
                            return h(d ? d : b)
                        }, q, q.ja, d, a, b, g)
                    }
                    return b[m].ja
                }

                for (var l = "function" == typeof require && require, m = 0; m < g.length; m++)h(g[m]);
                return h
            }({
                1: [function (a, b, f) {
                    a = a("./processor");
                    f.Pi = a
                }, {"./processor": 2}], 2: [function (a, b) {
                    function f(a) {
                        var b = !0;
                        try {
                            new ImageData(10, 10)
                        } catch (d) {
                            b = !1
                        }
                        return function (d) {
                            var e = d.buffers, f = d.meta, g = d.width, h = d.height, l = e.length, m = e[0].byteLength;
                            if (d.imageOps) {
                                m = Array(l);
                                for (d = 0; d < l; ++d) {
                                    var K = m, L = d, R;
                                    R = new Uint8ClampedArray(e[d]);
                                    var Ka = g, jb = h;
                                    R = b ? new ImageData(R,
                                        Ka, jb) : {data: R, width: Ka, height: jb};
                                    K[L] = R
                                }
                                g = a(m, f).data
                            } else {
                                g = new Uint8ClampedArray(m);
                                h = Array(l);
                                K = Array(l);
                                for (d = 0; d < l; ++d)h[d] = new Uint8ClampedArray(e[d]), K[d] = [0, 0, 0, 0];
                                for (e = 0; e < m; e += 4) {
                                    for (d = 0; d < l; ++d)L = h[d], K[d][0] = L[e], K[d][1] = L[e + 1], K[d][2] = L[e + 2], K[d][3] = L[e + 3];
                                    d = a(K, f);
                                    g[e] = d[0];
                                    g[e + 1] = d[1];
                                    g[e + 2] = d[2];
                                    g[e + 3] = d[3]
                                }
                            }
                            return g.buffer
                        }
                    }

                    function g(a, b) {
                        var d = Object.keys(a.lib || {}).map(function (b) {
                            return "var " + b + " = " + a.lib[b].toString() + ";"
                        }).concat(["var __minion__ = (" + f.toString() + ")(",
                            a.operation.toString(), ");", 'self.addEventListener("message", function(event) {', "  var buffer = __minion__(event.data);", "  self.postMessage({buffer: buffer, meta: event.data.meta}, [buffer]);", "});"]), d = URL.createObjectURL(new Blob(d, {type: "text/javascript"})), d = new Worker(d);
                        d.addEventListener("message", b);
                        return d
                    }

                    function h(a, b) {
                        var d = f(a.operation);
                        return {
                            postMessage: function (a) {
                                setTimeout(function () {
                                    b({data: {buffer: d(a), meta: a.meta}})
                                }, 0)
                            }
                        }
                    }

                    function l(a) {
                        this.Oe = !!a.Yk;
                        var b;
                        0 === a.threads ?
                            b = 0 : this.Oe ? b = 1 : b = a.threads || 1;
                        var d = [];
                        if (b)for (var e = 0; e < b; ++e)d[e] = g(a, this.eg.bind(this, e)); else d[0] = h(a, this.eg.bind(this, 0));
                        this.Od = d;
                        this.bd = [];
                        this.cj = a.jo || Infinity;
                        this.Md = 0;
                        this.Hc = {};
                        this.Pe = null
                    }

                    var m = a("./util").rl;
                    l.prototype.ho = function (a, b, d) {
                        this.aj({xc: a, Pg: b, mg: d});
                        this.bg()
                    };
                    l.prototype.aj = function (a) {
                        for (this.bd.push(a); this.bd.length > this.cj;)this.bd.shift().mg(null, null)
                    };
                    l.prototype.bg = function () {
                        if (0 === this.Md && 0 < this.bd.length) {
                            var a = this.Pe = this.bd.shift(), b = a.xc[0].width,
                                d = a.xc[0].height, e = a.xc.map(function (a) {
                                    return a.data.buffer
                                }), f = this.Od.length;
                            this.Md = f;
                            if (1 === f) this.Od[0].postMessage({
                                buffers: e,
                                meta: a.Pg,
                                imageOps: this.Oe,
                                width: b,
                                height: d
                            }, e); else for (var g = 4 * Math.ceil(a.xc[0].data.length / 4 / f), h = 0; h < f; ++h) {
                                for (var l = h * g, m = [], K = 0, L = e.length; K < L; ++K)m.push(e[h].slice(l, l + g));
                                this.Od[h].postMessage({
                                    buffers: m,
                                    meta: a.Pg,
                                    imageOps: this.Oe,
                                    width: b,
                                    height: d
                                }, m)
                            }
                        }
                    };
                    l.prototype.eg = function (a, b) {
                        this.Ap || (this.Hc[a] = b.data, --this.Md, 0 === this.Md && this.dj())
                    };
                    l.prototype.dj =
                        function () {
                            var a = this.Pe, b = this.Od.length, d, e;
                            if (1 === b) d = new Uint8ClampedArray(this.Hc[0].buffer), e = this.Hc[0].meta; else {
                                var f = a.xc[0].data.length;
                                d = new Uint8ClampedArray(f);
                                e = Array(f);
                                for (var f = 4 * Math.ceil(f / 4 / b), g = 0; g < b; ++g) {
                                    var h = g * f;
                                    d.set(new Uint8ClampedArray(this.Hc[g].buffer), h);
                                    e[g] = this.Hc[g].meta
                                }
                            }
                            this.Pe = null;
                            this.Hc = {};
                            a.mg(null, m(d, a.xc[0].width, a.xc[0].height), e);
                            this.bg()
                        };
                    b.ja = l
                }, {"./util": 3}], 3: [function (a, b, f) {
                    var g = !0;
                    try {
                        new ImageData(10, 10)
                    } catch (l) {
                        g = !1
                    }
                    var h = document.createElement("canvas").getContext("2d");
                    f.rl = function (a, b, d) {
                        if (g)return new ImageData(a, b, d);
                        b = h.createImageData(b, d);
                        b.data.set(a);
                        return b
                    }
                }, {}]
            }, {}, [1])(1)
        });
        rr = b.ja
    })();
    function ww(a) {
        this.B = null;
        this.Aa = void 0 !== a.operationType ? a.operationType : "pixel";
        this.La = void 0 !== a.threads ? a.threads : 1;
        this.c = xw(a.sources);
        for (var b = 0, c = this.c.length; b < c; ++b)w(this.c[b], "change", this.v, this);
        this.i = Ge();
        this.fa = new sg(function () {
            return 1
        }, this.v.bind(this));
        for (var b = yw(this.c), c = {}, d = 0, e = b.length; d < e; ++d)c[ea(b[d].layer)] = b[d];
        this.l = this.s = null;
        this.Z = {
            animate: !1,
            attributions: {},
            coordinateToPixelTransform: Rh(),
            extent: null,
            focus: null,
            index: 0,
            layerStates: c,
            layerStatesArray: b,
            logos: {},
            pixelRatio: 1,
            pixelToCoordinateTransform: Rh(),
            postRenderFunctions: [],
            size: [0, 0],
            skippedFeatureUids: {},
            tileQueue: this.fa,
            time: Date.now(),
            usedTiles: {},
            viewState: {rotation: 0},
            viewHints: [],
            wantedTiles: {}
        };
        Zj.call(this, {});
        void 0 !== a.operation && this.u(a.operation, a.lib)
    }

    v(ww, Zj);
    ww.prototype.u = function (a, b) {
        this.B = new rr.Pi({operation: a, Yk: "image" === this.Aa, jo: 1, lib: b, threads: this.La});
        this.v()
    };
    function zw(a, b, c) {
        var d = a.s;
        return !d || a.g !== d.Mo || c !== d.resolution || !Ob(b, d.extent)
    }

    ww.prototype.W = function (a, b, c, d) {
        c = !0;
        for (var e, f = 0, g = this.c.length; f < g; ++f)if (e = this.c[f].a.ga(), "ready" !== e.U()) {
            c = !1;
            break
        }
        if (!c)return null;
        a = a.slice();
        if (!zw(this, a, b))return this.l;
        c = this.i.canvas;
        e = Math.round(Zb(a) / b);
        f = Math.round($b(a) / b);
        if (e !== c.width || f !== c.height) c.width = e, c.height = f;
        e = ua({}, this.Z);
        e.viewState = ua({}, e.viewState);
        var f = ac(a), g = Math.round(Zb(a) / b), h = Math.round($b(a) / b);
        e.extent = a;
        e.focus = ac(a);
        e.size[0] = g;
        e.size[1] = h;
        g = e.viewState;
        g.center = f;
        g.projection = d;
        g.resolution =
            b;
        this.l = d = new Lj(a, b, 1, this.j, c, this.P.bind(this, e));
        this.s = {extent: a, resolution: b, Mo: this.g};
        return d
    };
    ww.prototype.P = function (a, b) {
        for (var c = this.c.length, d = Array(c), e = 0; e < c; ++e) {
            var f;
            f = this.c[e];
            var g = a, h = a.layerStatesArray[e];
            if (f.j(g, h)) {
                var l = g.size[0], m = g.size[1];
                if (Aw) {
                    var n = Aw.canvas;
                    n.width !== l || n.height !== m ? Aw = Ge(l, m) : Aw.clearRect(0, 0, l, m)
                } else Aw = Ge(l, m);
                f.i(g, h, Aw);
                f = Aw.getImageData(0, 0, l, m)
            } else f = null;
            if (f) d[e] = f; else return
        }
        c = {};
        this.b(new Bw(Cw, a, c));
        this.B.ho(d, c, this.oa.bind(this, a, b));
        tg(a.tileQueue, 16, 16)
    };
    ww.prototype.oa = function (a, b, c, d, e) {
        c ? b(c) : d && (this.b(new Bw(Dw, a, e)), zw(this, a.extent, a.viewState.resolution / a.pixelRatio) || this.i.putImageData(d, 0, 0), b(null))
    };
    var Aw = null;

    function yw(a) {
        return a.map(function (a) {
            return zh(a.a)
        })
    }

    function xw(a) {
        for (var b = a.length, c = Array(b), d = 0; d < b; ++d) {
            var e = d, f = a[d], g = null;
            f instanceof Xv ? (f = new D({source: f}), g = new kk(f)) : f instanceof Zj && (f = new gi({source: f}), g = new jk(f));
            c[e] = g
        }
        return c
    }

    function Bw(a, b, c) {
        La.call(this, a);
        this.extent = b.extent;
        this.resolution = b.viewState.resolution / b.pixelRatio;
        this.data = c
    }

    v(Bw, La);
    var Cw = "beforeoperations", Dw = "afteroperations";

    function Ew(a) {
        var b = a.layer.indexOf("-"), b = Fw[-1 == b ? a.layer : a.layer.slice(0, b)], c = Gw[a.layer];
        gw.call(this, {
            attributions: Hw,
            cacheSize: a.cacheSize,
            crossOrigin: "anonymous",
            maxZoom: void 0 != a.maxZoom ? a.maxZoom : b.maxZoom,
            minZoom: void 0 != a.minZoom ? a.minZoom : b.minZoom,
            opaque: c.opaque,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileLoadFunction: a.tileLoadFunction,
            url: void 0 !== a.url ? a.url : "https://stamen-tiles-{a-d}.a.ssl.fastly.net/" + a.layer + "/{z}/{x}/{y}." + c.wb
        })
    }

    v(Ew, gw);
    var Hw = [new oe({html: 'Map tiles by <a href="http://stamen.com/">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.'}), vw], Gw = {
        terrain: {wb: "jpg", opaque: !0},
        "terrain-background": {wb: "jpg", opaque: !0},
        "terrain-labels": {wb: "png", opaque: !1},
        "terrain-lines": {wb: "png", opaque: !1},
        "toner-background": {wb: "png", opaque: !0},
        toner: {wb: "png", opaque: !0},
        "toner-hybrid": {wb: "png", opaque: !1},
        "toner-labels": {wb: "png", opaque: !1},
        "toner-lines": {wb: "png", opaque: !1},
        "toner-lite": {
            wb: "png",
            opaque: !0
        },
        watercolor: {wb: "jpg", opaque: !0}
    }, Fw = {
        terrain: {minZoom: 4, maxZoom: 18},
        toner: {minZoom: 0, maxZoom: 20},
        watercolor: {minZoom: 1, maxZoom: 16}
    };

    function Iw(a) {
        a = a || {};
        X.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            projection: a.projection,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileGrid: a.tileGrid,
            tileLoadFunction: a.tileLoadFunction,
            url: a.url,
            urls: a.urls,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        });
        this.c = a.params || {};
        this.o = Bb()
    }

    v(Iw, X);
    Iw.prototype.u = function () {
        return this.c
    };
    Iw.prototype.gb = function (a) {
        return a
    };
    Iw.prototype.sc = function (a, b, c) {
        var d = this.tileGrid;
        d || (d = this.pb(c));
        if (!(d.b.length <= a[0])) {
            var e = d.Ia(a, this.o), f = Zd(d.Na(a[0]), this.l);
            1 != b && (f = Yd(f, b, this.l));
            d = {F: "image", FORMAT: "PNG32", TRANSPARENT: !0};
            ua(d, this.c);
            var g = this.urls;
            g ? (c = c.eb.split(":").pop(), d.SIZE = f[0] + "," + f[1], d.BBOX = e.join(","), d.BBOXSR = c, d.IMAGESR = c, d.DPI = Math.round(d.DPI ? d.DPI * b : 90 * b), a = 1 == g.length ? g[0] : g[oa((a[1] << a[0]) + a[2], g.length)], b = a.replace(/MapServer\/?$/, "MapServer/export").replace(/ImageServer\/?$/, "ImageServer/exportImage"),
            b == a && ha(!1, 50), d = mw(b, d)) : d = void 0;
            return d
        }
    };
    Iw.prototype.C = function (a) {
        ua(this.c, a);
        this.v()
    };
    function Jw(a) {
        Xv.call(this, {
            opaque: !1,
            projection: a.projection,
            tileGrid: a.tileGrid,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        })
    }

    v(Jw, Xv);
    Jw.prototype.vc = function (a, b, c) {
        var d = this.Fb(a, b, c);
        if (this.a.b.hasOwnProperty(d))return this.a.get(d);
        var e = Zd(this.tileGrid.Na(a));
        a = [a, b, c];
        b = (b = Zv(this, a)) ? Zv(this, b).toString() : "";
        e = new Kw(a, e, b);
        this.a.set(d, e);
        return e
    };
    function Kw(a, b, c) {
        jg.call(this, a, mg);
        this.j = b;
        this.c = c;
        this.g = null
    }

    v(Kw, jg);
    Kw.prototype.qb = function () {
        if (this.g)return this.g;
        var a = this.j, b = Ge(a[0], a[1]);
        b.strokeStyle = "black";
        b.strokeRect(.5, .5, a[0] + .5, a[1] + .5);
        b.fillStyle = "black";
        b.textAlign = "center";
        b.textBaseline = "middle";
        b.font = "24px sans-serif";
        b.fillText(this.c, a[0] / 2, a[1] / 2);
        return this.g = b.canvas
    };
    function Lw(a) {
        this.c = null;
        X.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            projection: oc("EPSG:3857"),
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            state: "loading",
            tileLoadFunction: a.tileLoadFunction,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        });
        if (a.jsonp) Ov(a.url, this.oh.bind(this), this.me.bind(this)); else {
            var b = new XMLHttpRequest;
            b.addEventListener("load", this.bn.bind(this));
            b.addEventListener("error", this.an.bind(this));
            b.open("GET", a.url);
            b.send()
        }
    }

    v(Lw, X);
    k = Lw.prototype;
    k.bn = function (a) {
        a = a.target;
        if (!a.status || 200 <= a.status && 300 > a.status) {
            var b;
            try {
                b = JSON.parse(a.responseText)
            } catch (c) {
                this.me();
                return
            }
            this.oh(b)
        } else this.me()
    };
    k.an = function () {
        this.me()
    };
    k.nk = function () {
        return this.c
    };
    k.oh = function (a) {
        var b = oc("EPSG:4326"), c = this.f, d;
        if (void 0 !== a.bounds) {
            var e = rc(b, c);
            d = fc(a.bounds, e)
        }
        var f = a.minzoom || 0, e = a.maxzoom || 22;
        this.tileGrid = c = ne({extent: le(c), maxZoom: e, minZoom: f});
        this.tileUrlFunction = Rv(a.tiles, c);
        if (void 0 !== a.attribution && !this.j) {
            b = void 0 !== d ? d : b.D();
            d = {};
            for (var g; f <= e; ++f)g = f.toString(), d[g] = [ee(c, b, f)];
            this.qa([new oe({html: a.attribution, tileRanges: d})])
        }
        this.c = a;
        Yj(this, "ready")
    };
    k.me = function () {
        Yj(this, "error")
    };
    function Mw(a) {
        Xv.call(this, {projection: oc("EPSG:3857"), state: "loading"});
        this.s = void 0 !== a.preemptive ? a.preemptive : !0;
        this.o = Tv;
        this.i = void 0;
        this.c = a.jsonp || !1;
        if (a.url)if (this.c) Ov(a.url, this.zf.bind(this), this.ne.bind(this)); else {
            var b = new XMLHttpRequest;
            b.addEventListener("load", this.fn.bind(this));
            b.addEventListener("error", this.en.bind(this));
            b.open("GET", a.url);
            b.send()
        } else a.tileJSON ? this.zf(a.tileJSON) : ha(!1, 51)
    }

    v(Mw, Xv);
    k = Mw.prototype;
    k.fn = function (a) {
        a = a.target;
        if (!a.status || 200 <= a.status && 300 > a.status) {
            var b;
            try {
                b = JSON.parse(a.responseText)
            } catch (c) {
                this.ne();
                return
            }
            this.zf(b)
        } else this.ne()
    };
    k.en = function () {
        this.ne()
    };
    k.kk = function () {
        return this.i
    };
    k.wj = function (a, b, c, d, e) {
        this.tileGrid ? (b = this.tileGrid.Zd(a, b), Nw(this.vc(b[0], b[1], b[2], 1, this.f), a, c, d, e)) : !0 === e ? setTimeout(function () {
            c.call(d, null)
        }, 0) : c.call(d, null)
    };
    k.ne = function () {
        Yj(this, "error")
    };
    k.zf = function (a) {
        var b = oc("EPSG:4326"), c = this.f, d;
        if (void 0 !== a.bounds) {
            var e = rc(b, c);
            d = fc(a.bounds, e)
        }
        var f = a.minzoom || 0, e = a.maxzoom || 22;
        this.tileGrid = c = ne({extent: le(c), maxZoom: e, minZoom: f});
        this.i = a.template;
        var g = a.grids;
        if (g) {
            this.o = Rv(g, c);
            if (void 0 !== a.attribution) {
                b = void 0 !== d ? d : b.D();
                for (d = {}; f <= e; ++f)g = f.toString(), d[g] = [ee(c, b, f)];
                this.qa([new oe({html: a.attribution, tileRanges: d})])
            }
            Yj(this, "ready")
        } else Yj(this, "error")
    };
    k.vc = function (a, b, c, d, e) {
        var f = this.Fb(a, b, c);
        if (this.a.b.hasOwnProperty(f))return this.a.get(f);
        a = [a, b, c];
        b = Zv(this, a, e);
        d = this.o(b, d, e);
        d = new Ow(a, void 0 !== d ? 0 : 4, void 0 !== d ? d : "", this.tileGrid.Ia(a), this.s, this.c);
        this.a.set(f, d);
        return d
    };
    k.Vf = function (a, b, c) {
        a = this.Fb(a, b, c);
        this.a.b.hasOwnProperty(a) && this.a.get(a)
    };
    function Ow(a, b, c, d, e, f) {
        jg.call(this, a, b);
        this.s = c;
        this.g = d;
        this.u = e;
        this.c = this.o = this.j = null;
        this.T = f
    }

    v(Ow, jg);
    k = Ow.prototype;
    k.qb = function () {
        return null
    };
    k.getData = function (a) {
        if (!this.j || !this.o)return null;
        var b = this.j[Math.floor((1 - (a[1] - this.g[1]) / (this.g[3] - this.g[1])) * this.j.length)];
        if ("string" !== typeof b)return null;
        b = b.charCodeAt(Math.floor((a[0] - this.g[0]) / (this.g[2] - this.g[0]) * b.length));
        93 <= b && b--;
        35 <= b && b--;
        b -= 32;
        a = null;
        b in this.o && (b = this.o[b], this.c && b in this.c ? a = this.c[b] : a = b);
        return a
    };
    function Nw(a, b, c, d, e) {
        0 == a.state && !0 === e ? (Ea(a, "change", function () {
            c.call(d, this.getData(b))
        }, a), Pw(a)) : !0 === e ? setTimeout(function () {
            c.call(d, this.getData(b))
        }.bind(a), 0) : c.call(d, a.getData(b))
    }

    k.Xa = function () {
        return this.s
    };
    k.$d = function () {
        this.state = 3;
        kg(this)
    };
    k.ph = function (a) {
        this.j = a.grid;
        this.o = a.keys;
        this.c = a.data;
        this.state = 4;
        kg(this)
    };
    function Pw(a) {
        if (0 == a.state)if (a.state = 1, a.T) Ov(a.s, a.ph.bind(a), a.$d.bind(a)); else {
            var b = new XMLHttpRequest;
            b.addEventListener("load", a.dn.bind(a));
            b.addEventListener("error", a.cn.bind(a));
            b.open("GET", a.s);
            b.send()
        }
    }

    k.dn = function (a) {
        a = a.target;
        if (!a.status || 200 <= a.status && 300 > a.status) {
            var b;
            try {
                b = JSON.parse(a.responseText)
            } catch (c) {
                this.$d();
                return
            }
            this.ph(b)
        } else this.$d()
    };
    k.cn = function () {
        this.$d()
    };
    k.load = function () {
        this.u && Pw(this)
    };
    function Qw(a) {
        a = a || {};
        var b = a.params || {};
        X.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            opaque: !("TRANSPARENT" in b ? b.TRANSPARENT : 1),
            projection: a.projection,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileGrid: a.tileGrid,
            tileLoadFunction: a.tileLoadFunction,
            url: a.url,
            urls: a.urls,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !0
        });
        this.u = void 0 !== a.gutter ? a.gutter : 0;
        this.c = b;
        this.o = !0;
        this.C = a.serverType;
        this.W = void 0 !== a.hidpi ? a.hidpi : !0;
        this.P = "";
        Rw(this);
        this.Z = Bb();
        Sw(this);
        Yv(this, Tw(this))
    }

    v(Qw, X);
    k = Qw.prototype;
    k.gn = function (a, b, c, d) {
        c = oc(c);
        var e = this.tileGrid;
        e || (e = this.pb(c));
        b = e.Zd(a, b);
        if (!(e.b.length <= b[0])) {
            var f = e.Ca(b[0]), g = e.Ia(b, this.Z), e = Zd(e.Na(b[0]), this.l), h = this.u;
            0 !== h && (e = Xd(e, h, this.l), g = Db(g, f * h, g));
            h = {
                SERVICE: "WMS",
                VERSION: "1.3.0",
                REQUEST: "GetFeatureInfo",
                FORMAT: "image/png",
                TRANSPARENT: !0,
                QUERY_LAYERS: this.c.LAYERS
            };
            ua(h, this.c, d);
            d = Math.floor((g[3] - a[1]) / f);
            h[this.o ? "I" : "X"] = Math.floor((a[0] - g[0]) / f);
            h[this.o ? "J" : "Y"] = d;
            return Uw(this, b, e, g, 1, c, h)
        }
    };
    k.ef = function () {
        return this.u
    };
    k.Fb = function (a, b, c) {
        return this.P + X.prototype.Fb.call(this, a, b, c)
    };
    k.hn = function () {
        return this.c
    };
    function Uw(a, b, c, d, e, f, g) {
        var h = a.urls;
        if (h) {
            g.WIDTH = c[0];
            g.HEIGHT = c[1];
            g[a.o ? "CRS" : "SRS"] = f.eb;
            "STYLES" in a.c || (g.STYLES = "");
            if (1 != e)switch (a.C) {
                case "geoserver":
                    c = 90 * e + .5 | 0;
                    g.FORMAT_OPTIONS = "FORMAT_OPTIONS" in g ? g.FORMAT_OPTIONS + (";dpi:" + c) : "dpi:" + c;
                    break;
                case "mapserver":
                    g.MAP_RESOLUTION = 90 * e;
                    break;
                case "carmentaserver":
                case "qgis":
                    g.DPI = 90 * e;
                    break;
                default:
                    ha(!1, 52)
            }
            f = f.b;
            a.o && "ne" == f.substr(0, 2) && (a = d[0], d[0] = d[1], d[1] = a, a = d[2], d[2] = d[3], d[3] = a);
            g.BBOX = d.join(",");
            return mw(1 == h.length ? h[0] : h[oa((b[1] <<
                b[0]) + b[2], h.length)], g)
        }
    }

    k.gb = function (a) {
        return this.W && void 0 !== this.C ? a : 1
    };
    function Rw(a) {
        var b = 0, c = [];
        if (a.urls) {
            var d, e;
            d = 0;
            for (e = a.urls.length; d < e; ++d)c[b++] = a.urls[d]
        }
        a.P = c.join("#")
    }

    function Tw(a) {
        var b = 0, c = [], d;
        for (d in a.c)c[b++] = d + "-" + a.c[d];
        return c.join("/")
    }

    k.sc = function (a, b, c) {
        var d = this.tileGrid;
        d || (d = this.pb(c));
        if (!(d.b.length <= a[0])) {
            1 == b || this.W && void 0 !== this.C || (b = 1);
            var e = d.Ca(a[0]), f = d.Ia(a, this.Z), d = Zd(d.Na(a[0]), this.l), g = this.u;
            0 !== g && (d = Xd(d, g, this.l), f = Db(f, e * g, f));
            1 != b && (d = Yd(d, b, this.l));
            e = {SERVICE: "WMS", VERSION: "1.3.0", REQUEST: "GetMap", FORMAT: "image/png", TRANSPARENT: !0};
            ua(e, this.c);
            return Uw(this, a, d, f, b, c, e)
        }
    };
    k.Ua = function (a) {
        X.prototype.Ua.call(this, a);
        Rw(this)
    };
    k.jn = function (a) {
        ua(this.c, a);
        Rw(this);
        Sw(this);
        Yv(this, Tw(this))
    };
    function Sw(a) {
        a.o = 0 <= qb(a.c.VERSION || "1.3.0")
    };
    function Vw(a, b, c, d, e) {
        jg.call(this, a, b);
        this.g = Ge();
        this.j = d;
        this.c = null;
        this.f = {jd: !1, Qf: null, Rh: -1, Rf: -1, Bd: null, li: []};
        this.T = e;
        this.o = c
    }

    v(Vw, jg);
    k = Vw.prototype;
    k.qb = function () {
        return -1 == this.f.Rf ? null : this.g.canvas
    };
    k.Il = function () {
        return this.j
    };
    k.Xa = function () {
        return this.o
    };
    k.load = function () {
        0 == this.state && (this.state = 1, kg(this), this.T(this, this.o), this.s(null, NaN, null))
    };
    k.Wh = function (a) {
        this.c = a;
        this.state = mg;
        kg(this)
    };
    k.uf = function (a) {
        this.l = a
    };
    k.bi = function (a) {
        this.s = a
    };
    function Ww(a) {
        aw.call(this, {
            attributions: a.attributions,
            cacheSize: void 0 !== a.cacheSize ? a.cacheSize : 128,
            extent: a.extent,
            logo: a.logo,
            opaque: !1,
            projection: a.projection,
            state: a.state,
            tileGrid: a.tileGrid,
            tileLoadFunction: a.tileLoadFunction ? a.tileLoadFunction : Xw,
            tileUrlFunction: a.tileUrlFunction,
            tilePixelRatio: a.tilePixelRatio,
            url: a.url,
            urls: a.urls,
            wrapX: void 0 === a.wrapX ? !0 : a.wrapX
        });
        this.c = a.format ? a.format : null;
        this.i = void 0 == a.overlaps ? !0 : a.overlaps;
        this.tileClass = a.tileClass ? a.tileClass : Vw
    }

    v(Ww, aw);
    Ww.prototype.vc = function (a, b, c, d, e) {
        var f = this.Fb(a, b, c);
        if (this.a.b.hasOwnProperty(f))return this.a.get(f);
        a = [a, b, c];
        d = (b = Zv(this, a, e)) ? this.tileUrlFunction(b, d, e) : void 0;
        d = new this.tileClass(a, void 0 !== d ? 0 : 4, void 0 !== d ? d : "", this.c, this.tileLoadFunction);
        w(d, "change", this.rh, this);
        this.a.set(f, d);
        return d
    };
    Ww.prototype.gb = function (a) {
        return void 0 == a ? aw.prototype.gb.call(this, a) : a
    };
    Ww.prototype.kf = function (a, b) {
        var c = Zd(this.tileGrid.Na(a));
        return [Math.round(c[0] * b), Math.round(c[1] * b)]
    };
    function Xw(a, b) {
        a.bi(Rm(b, a.j))
    };
    function Yw(a) {
        this.l = a.matrixIds;
        be.call(this, {
            extent: a.extent,
            origin: a.origin,
            origins: a.origins,
            resolutions: a.resolutions,
            tileSize: a.tileSize,
            tileSizes: a.tileSizes,
            sizes: a.sizes
        })
    }

    v(Yw, be);
    Yw.prototype.o = function () {
        return this.l
    };
    function Zw(a, b) {
        var c = [], d = [], e = [], f = [], g = [], h;
        h = oc(a.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3"));
        var l = h.dc(), m = "ne" == h.b.substr(0, 2);
        a.TileMatrix.sort(function (a, b) {
            return b.ScaleDenominator - a.ScaleDenominator
        });
        a.TileMatrix.forEach(function (a) {
            d.push(a.Identifier);
            var b = 2.8E-4 * a.ScaleDenominator / l, h = a.TileWidth, r = a.TileHeight;
            m ? e.push([a.TopLeftCorner[1], a.TopLeftCorner[0]]) : e.push(a.TopLeftCorner);
            c.push(b);
            f.push(h == r ? h : [h, r]);
            g.push([a.MatrixWidth, -a.MatrixHeight])
        });
        return new Yw({extent: b, origins: e, resolutions: c, matrixIds: d, tileSizes: f, sizes: g})
    };
    function Z(a) {
        function b(a) {
            a = d == $w ? mw(a, f) : a.replace(/\{(\w+?)\}/g, function (a, b) {
                return b.toLowerCase() in f ? f[b.toLowerCase()] : a
            });
            return function (b) {
                if (b) {
                    var c = {TileMatrix: e.l[b[0]], TileCol: b[1], TileRow: -b[2] - 1};
                    ua(c, g);
                    b = a;
                    return b = d == $w ? mw(b, c) : b.replace(/\{(\w+?)\}/g, function (a, b) {
                        return c[b]
                    })
                }
            }
        }

        this.Z = void 0 !== a.version ? a.version : "1.0.0";
        this.u = void 0 !== a.format ? a.format : "image/jpeg";
        this.c = void 0 !== a.dimensions ? a.dimensions : {};
        this.C = a.layer;
        this.o = a.matrixSet;
        this.P = a.style;
        var c = a.urls;
        void 0 === c && void 0 !== a.url && (c = Uv(a.url));
        var d = this.W = void 0 !== a.requestEncoding ? a.requestEncoding : $w, e = a.tileGrid, f = {
            layer: this.C,
            style: this.P,
            tilematrixset: this.o
        };
        d == $w && ua(f, {Service: "WMTS", Request: "GetTile", Version: this.Z, Format: this.u});
        var g = this.c, h = c && 0 < c.length ? Sv(c.map(b)) : Tv;
        X.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            projection: a.projection,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileClass: a.tileClass,
            tileGrid: e,
            tileLoadFunction: a.tileLoadFunction,
            tilePixelRatio: a.tilePixelRatio,
            tileUrlFunction: h,
            urls: c,
            wrapX: void 0 !== a.wrapX ? a.wrapX : !1
        });
        Yv(this, ax(this))
    }

    v(Z, X);
    k = Z.prototype;
    k.Jj = function () {
        return this.c
    };
    k.kn = function () {
        return this.u
    };
    k.ln = function () {
        return this.C
    };
    k.Wj = function () {
        return this.o
    };
    k.ik = function () {
        return this.W
    };
    k.mn = function () {
        return this.P
    };
    k.qk = function () {
        return this.Z
    };
    function ax(a) {
        var b = 0, c = [], d;
        for (d in a.c)c[b++] = d + "-" + a.c[d];
        return c.join("/")
    }

    k.hp = function (a) {
        ua(this.c, a);
        Yv(this, ax(this))
    };
    var $w = "KVP";

    function bx(a) {
        a = a || {};
        var b = a.size, c = b[0], d = b[1], e = [], f = 256;
        switch (void 0 !== a.tierSizeCalculation ? a.tierSizeCalculation : cx) {
            case cx:
                for (; c > f || d > f;)e.push([Math.ceil(c / f), Math.ceil(d / f)]), f += f;
                break;
            case dx:
                for (; c > f || d > f;)e.push([Math.ceil(c / f), Math.ceil(d / f)]), c >>= 1, d >>= 1;
                break;
            default:
                ha(!1, 53)
        }
        e.push([1, 1]);
        e.reverse();
        for (var f = [1], g = [0], d = 1, c = e.length; d < c; d++)f.push(1 << d), g.push(e[d - 1][0] * e[d - 1][1] + g[d - 1]);
        f.reverse();
        var b = [0, -b[1], b[0], 0], b = new be({extent: b, origin: Wb(b), resolutions: f}), h = a.url;
        X.call(this, {
            attributions: a.attributions,
            cacheSize: a.cacheSize,
            crossOrigin: a.crossOrigin,
            logo: a.logo,
            reprojectionErrorThreshold: a.reprojectionErrorThreshold,
            tileClass: ex,
            tileGrid: b,
            tileUrlFunction: function (a) {
                if (a) {
                    var b = a[0], c = a[1];
                    a = -a[2] - 1;
                    return h + "TileGroup" + ((c + a * e[b][0] + g[b]) / 256 | 0) + "/" + b + "-" + c + "-" + a + ".jpg"
                }
            }
        })
    }

    v(bx, X);
    function ex(a, b, c, d, e) {
        Ut.call(this, a, b, c, d, e);
        this.c = null
    }

    v(ex, Ut);
    ex.prototype.qb = function () {
        if (this.c)return this.c;
        var a = Ut.prototype.qb.call(this);
        if (this.state == mg) {
            if (256 == a.width && 256 == a.height)return this.c = a;
            var b = Ge(256, 256);
            b.drawImage(a, 0, 0);
            return this.c = b.canvas
        }
        return a
    };
    var cx = "default", dx = "truncated";

    function fx(a, b) {
        this.b = b;
        this.a = [{x: 0, y: 0, width: a, height: a}];
        this.f = {};
        this.g = Ge(a, a);
        this.c = this.g.canvas
    }

    fx.prototype.get = function (a) {
        return this.f[a] || null
    };
    fx.prototype.add = function (a, b, c, d, e) {
        var f, g, h;
        g = 0;
        for (h = this.a.length; g < h; ++g)if (f = this.a[g], f.width >= b + this.b && f.height >= c + this.b)return h = {
            offsetX: f.x + this.b,
            offsetY: f.y + this.b,
            image: this.c
        }, this.f[a] = h, d.call(e, this.g, f.x + this.b, f.y + this.b), a = g, b += this.b, d = c + this.b, f.width - b > f.height - d ? (c = {
            x: f.x + b,
            y: f.y,
            width: f.width - b,
            height: f.height
        }, b = {x: f.x, y: f.y + d, width: b, height: f.height - d}, gx(this, a, c, b)) : (c = {
            x: f.x + b,
            y: f.y,
            width: f.width - b,
            height: d
        }, b = {x: f.x, y: f.y + d, width: f.width, height: f.height - d}, gx(this,
            a, c, b)), h;
        return null
    };
    function gx(a, b, c, d) {
        b = [b, 1];
        0 < c.width && 0 < c.height && b.push(c);
        0 < d.width && 0 < d.height && b.push(d);
        a.a.splice.apply(a.a, b)
    };
    function hx(a) {
        a = a || {};
        this.a = void 0 !== a.initialSize ? a.initialSize : 256;
        this.g = void 0 !== a.maxSize ? a.maxSize : void 0 !== ba ? ba : 2048;
        this.b = void 0 !== a.space ? a.space : 1;
        this.c = [new fx(this.a, this.b)];
        this.f = this.a;
        this.i = [new fx(this.f, this.b)]
    }

    hx.prototype.add = function (a, b, c, d, e, f) {
        if (b + this.b > this.g || c + this.b > this.g)return null;
        d = ix(this, !1, a, b, c, d, f);
        if (!d)return null;
        a = ix(this, !0, a, b, c, void 0 !== e ? e : da, f);
        return {offsetX: d.offsetX, offsetY: d.offsetY, image: d.image, de: a.image}
    };
    function ix(a, b, c, d, e, f, g) {
        var h = b ? a.i : a.c, l, m, n;
        m = 0;
        for (n = h.length; m < n; ++m) {
            l = h[m];
            if (l = l.add(c, d, e, f, g))return l;
            l || m !== n - 1 || (b ? (l = Math.min(2 * a.f, a.g), a.f = l) : (l = Math.min(2 * a.a, a.g), a.a = l), l = new fx(l, a.b), h.push(l), ++n)
        }
        return null
    };
    function jx(a) {
        this.B = this.C = this.i = null;
        this.j = void 0 !== a.fill ? a.fill : null;
        this.za = [0, 0];
        this.b = a.points;
        this.g = void 0 !== a.radius ? a.radius : a.radius1;
        this.f = void 0 !== a.radius2 ? a.radius2 : this.g;
        this.s = void 0 !== a.angle ? a.angle : 0;
        this.a = void 0 !== a.stroke ? a.stroke : null;
        this.na = this.P = this.G = null;
        var b = this.S = a.atlasManager, c = "", d = "", e = 0, f = null, g, h = 0;
        this.a && (g = Ee(this.a.a), h = this.a.f, void 0 === h && (h = 1), f = this.a.g, lf || (f = null), d = this.a.i, void 0 === d && (d = "round"), c = this.a.c, void 0 === c && (c = "round"), e = this.a.j,
        void 0 === e && (e = 10));
        var l = 2 * (this.g + h) + 1, c = {
            strokeStyle: g,
            Ed: h,
            size: l,
            lineCap: c,
            lineDash: f,
            lineJoin: d,
            miterLimit: e
        };
        if (void 0 === b) {
            var m = Ge(l, l);
            this.C = m.canvas;
            b = l = this.C.width;
            this.yh(c, m, 0, 0);
            this.j ? this.B = this.C : (m = Ge(c.size, c.size), this.B = m.canvas, this.xh(c, m, 0, 0))
        } else l = Math.round(l), (d = !this.j) && (m = this.xh.bind(this, c)), e = this.a ? xi(this.a) : "-", f = this.j ? yi(this.j) : "-", this.i && e == this.i[1] && f == this.i[2] && this.g == this.i[3] && this.f == this.i[4] && this.s == this.i[5] && this.b == this.i[6] || (this.i = ["r" +
        e + f + (void 0 !== this.g ? this.g.toString() : "-") + (void 0 !== this.f ? this.f.toString() : "-") + (void 0 !== this.s ? this.s.toString() : "-") + (void 0 !== this.b ? this.b.toString() : "-"), e, f, this.g, this.f, this.s, this.b]), m = b.add(this.i[0], l, l, this.yh.bind(this, c), m), this.C = m.image, this.za = [m.offsetX, m.offsetY], b = m.image.width, this.B = d ? m.de : this.C;
        this.G = [l / 2, l / 2];
        this.P = [l, l];
        this.na = [b, b];
        ui.call(this, {
            opacity: 1,
            rotateWithView: void 0 !== a.rotateWithView ? a.rotateWithView : !1,
            rotation: void 0 !== a.rotation ? a.rotation : 0,
            scale: 1,
            snapToPixel: void 0 !== a.snapToPixel ? a.snapToPixel : !0
        })
    }

    v(jx, ui);
    k = jx.prototype;
    k.clone = function () {
        var a = new jx({
            fill: this.j ? this.j.clone() : void 0,
            points: this.f !== this.g ? this.b / 2 : this.b,
            radius: this.g,
            radius2: this.f,
            angle: this.s,
            snapToPixel: this.u,
            stroke: this.a ? this.a.clone() : void 0,
            rotation: this.o,
            rotateWithView: this.T,
            atlasManager: this.S
        });
        a.Rc(this.l);
        a.Sc(this.c);
        return a
    };
    k.cc = function () {
        return this.G
    };
    k.tn = function () {
        return this.s
    };
    k.vn = function () {
        return this.j
    };
    k.pe = function () {
        return this.B
    };
    k.Tb = function () {
        return this.C
    };
    k.md = function () {
        return this.na
    };
    k.wd = function () {
        return oi
    };
    k.jc = function () {
        return this.za
    };
    k.wn = function () {
        return this.b
    };
    k.xn = function () {
        return this.g
    };
    k.hk = function () {
        return this.f
    };
    k.Gb = function () {
        return this.P
    };
    k.yn = function () {
        return this.a
    };
    k.pf = da;
    k.load = da;
    k.Uf = da;
    k.yh = function (a, b, c, d) {
        var e;
        b.setTransform(1, 0, 0, 1, 0, 0);
        b.translate(c, d);
        b.beginPath();
        this.f !== this.g && (this.b *= 2);
        for (c = 0; c <= this.b; c++)d = 2 * c * Math.PI / this.b - Math.PI / 2 + this.s, e = 0 === c % 2 ? this.g : this.f, b.lineTo(a.size / 2 + e * Math.cos(d), a.size / 2 + e * Math.sin(d));
        this.j && (b.fillStyle = Ee(this.j.b), b.fill());
        this.a && (b.strokeStyle = a.strokeStyle, b.lineWidth = a.Ed, a.lineDash && b.setLineDash(a.lineDash), b.lineCap = a.lineCap, b.lineJoin = a.lineJoin, b.miterLimit = a.miterLimit, b.stroke());
        b.closePath()
    };
    k.xh = function (a, b, c, d) {
        b.setTransform(1, 0, 0, 1, 0, 0);
        b.translate(c, d);
        b.beginPath();
        this.f !== this.g && (this.b *= 2);
        var e;
        for (c = 0; c <= this.b; c++)e = 2 * c * Math.PI / this.b - Math.PI / 2 + this.s, d = 0 === c % 2 ? this.g : this.f, b.lineTo(a.size / 2 + d * Math.cos(e), a.size / 2 + d * Math.sin(e));
        b.fillStyle = qi;
        b.fill();
        this.a && (b.strokeStyle = a.strokeStyle, b.lineWidth = a.Ed, a.lineDash && b.setLineDash(a.lineDash), b.stroke());
        b.closePath()
    };
    t("ol.animation.bounce", function (a) {
        var b = a.resolution, c = a.start ? a.start : Date.now(), d = void 0 !== a.duration ? a.duration : 1E3, e = a.easing ? a.easing : Pd;
        return function (a, g) {
            if (g.time < c)return g.animate = !0, g.viewHints[0] += 1, !0;
            if (g.time < c + d) {
                var h = e((g.time - c) / d), l = b - g.viewState.resolution;
                g.animate = !0;
                g.viewState.resolution += h * l;
                g.viewHints[0] += 1;
                return !0
            }
            return !1
        }
    });
    t("ol.animation.pan", Qd);
    t("ol.animation.rotate", Rd);
    t("ol.animation.zoom", Sd);
    ga.prototype.code = ga.prototype.code;
    t("ol.Attribution", oe);
    oe.prototype.getHTML = oe.prototype.g;
    t("ol.Collection", pe);
    pe.prototype.clear = pe.prototype.clear;
    pe.prototype.extend = pe.prototype.qf;
    pe.prototype.forEach = pe.prototype.forEach;
    pe.prototype.getArray = pe.prototype.sl;
    pe.prototype.item = pe.prototype.item;
    pe.prototype.getLength = pe.prototype.yc;
    pe.prototype.insertAt = pe.prototype.ee;
    pe.prototype.pop = pe.prototype.pop;
    pe.prototype.push = pe.prototype.push;
    pe.prototype.remove = pe.prototype.remove;
    pe.prototype.removeAt = pe.prototype.Nf;
    pe.prototype.setAt = pe.prototype.Oo;
    se.prototype.element = se.prototype.element;
    t("ol.color.asArray", ze);
    t("ol.color.asString", Be);
    t("ol.colorlike.asColorLike", Ee);
    t("ol.coordinate.add", rb);
    t("ol.coordinate.createStringXY", function (a) {
        return function (b) {
            return zb(b, a)
        }
    });
    t("ol.coordinate.format", ub);
    t("ol.coordinate.rotate", wb);
    t("ol.coordinate.toStringHDMS", function (a, b) {
        return a ? tb(a[1], "NS", b) + " " + tb(a[0], "EW", b) : ""
    });
    t("ol.coordinate.toStringXY", zb);
    t("ol.DeviceOrientation", rm);
    rm.prototype.getAlpha = rm.prototype.Cj;
    rm.prototype.getBeta = rm.prototype.Fj;
    rm.prototype.getGamma = rm.prototype.Mj;
    rm.prototype.getHeading = rm.prototype.tl;
    rm.prototype.getTracking = rm.prototype.Sg;
    rm.prototype.setTracking = rm.prototype.rf;
    t("ol.easing.easeIn", Ld);
    t("ol.easing.easeOut", Md);
    t("ol.easing.inAndOut", Nd);
    t("ol.easing.linear", Od);
    t("ol.easing.upAndDown", Pd);
    t("ol.extent.boundingExtent", Ab);
    t("ol.extent.buffer", Db);
    t("ol.extent.containsCoordinate", Gb);
    t("ol.extent.containsExtent", Ib);
    t("ol.extent.containsXY", Hb);
    t("ol.extent.createEmpty", Bb);
    t("ol.extent.equals", Ob);
    t("ol.extent.extend", Pb);
    t("ol.extent.getBottomLeft", Rb);
    t("ol.extent.getBottomRight", Sb);
    t("ol.extent.getCenter", ac);
    t("ol.extent.getHeight", $b);
    t("ol.extent.getIntersection", cc);
    t("ol.extent.getSize", function (a) {
        return [a[2] - a[0], a[3] - a[1]]
    });
    t("ol.extent.getTopLeft", Wb);
    t("ol.extent.getTopRight", Ub);
    t("ol.extent.getWidth", Zb);
    t("ol.extent.intersects", dc);
    t("ol.extent.isEmpty", Yb);
    t("ol.extent.applyTransform", fc);
    t("ol.Feature", I);
    I.prototype.clone = I.prototype.clone;
    I.prototype.getGeometry = I.prototype.V;
    I.prototype.getId = I.prototype.vl;
    I.prototype.getGeometryName = I.prototype.Oj;
    I.prototype.getStyle = I.prototype.wl;
    I.prototype.getStyleFunction = I.prototype.zc;
    I.prototype.setGeometry = I.prototype.Pa;
    I.prototype.setStyle = I.prototype.sf;
    I.prototype.setId = I.prototype.Wb;
    I.prototype.setGeometryName = I.prototype.Dc;
    t("ol.featureloader.tile", Rm);
    t("ol.featureloader.xhr", Sm);
    t("ol.Geolocation", zt);
    zt.prototype.getAccuracy = zt.prototype.Aj;
    zt.prototype.getAccuracyGeometry = zt.prototype.Bj;
    zt.prototype.getAltitude = zt.prototype.Dj;
    zt.prototype.getAltitudeAccuracy = zt.prototype.Ej;
    zt.prototype.getHeading = zt.prototype.yl;
    zt.prototype.getPosition = zt.prototype.zl;
    zt.prototype.getProjection = zt.prototype.Tg;
    zt.prototype.getSpeed = zt.prototype.jk;
    zt.prototype.getTracking = zt.prototype.Ug;
    zt.prototype.getTrackingOptions = zt.prototype.Gg;
    zt.prototype.setProjection = zt.prototype.Vg;
    zt.prototype.setTracking = zt.prototype.ge;
    zt.prototype.setTrackingOptions = zt.prototype.ji;
    t("ol.Graticule", Pt);
    Pt.prototype.getMap = Pt.prototype.Cl;
    Pt.prototype.getMeridians = Pt.prototype.Xj;
    Pt.prototype.getParallels = Pt.prototype.dk;
    Pt.prototype.setMap = Pt.prototype.setMap;
    t("ol.has.DEVICE_PIXEL_RATIO", kf);
    t("ol.has.CANVAS", mf);
    t("ol.has.DEVICE_ORIENTATION", nf);
    t("ol.has.GEOLOCATION", of);
    t("ol.has.TOUCH", pf);
    t("ol.has.WEBGL", df);
    li.prototype.getImage = li.prototype.a;
    li.prototype.load = li.prototype.load;
    Ut.prototype.getImage = Ut.prototype.qb;
    Ut.prototype.load = Ut.prototype.load;
    t("ol.inherits", v);
    t("ol.Kinetic", ug);
    t("ol.loadingstrategy.all", eu);
    t("ol.loadingstrategy.bbox", function (a) {
        return [a]
    });
    t("ol.loadingstrategy.tile", function (a) {
        return function (b, c) {
            var d = a.wc(c), e = ee(a, b, d), f = [], d = [d, 0, 0];
            for (d[1] = e.ba; d[1] <= e.da; ++d[1])for (d[2] = e.ea; d[2] <= e.ha; ++d[2])f.push(a.Ia(d));
            return f
        }
    });
    t("ol.Map", H);
    H.prototype.addControl = H.prototype.ij;
    H.prototype.addInteraction = H.prototype.jj;
    H.prototype.addLayer = H.prototype.gg;
    H.prototype.addOverlay = H.prototype.hg;
    H.prototype.beforeRender = H.prototype.$a;
    H.prototype.forEachFeatureAtPixel = H.prototype.Td;
    H.prototype.forEachLayerAtPixel = H.prototype.Gl;
    H.prototype.hasFeatureAtPixel = H.prototype.Xk;
    H.prototype.getEventCoordinate = H.prototype.Kj;
    H.prototype.getEventPixel = H.prototype.Vd;
    H.prototype.getTarget = H.prototype.jf;
    H.prototype.getTargetElement = H.prototype.uc;
    H.prototype.getCoordinateFromPixel = H.prototype.Ja;
    H.prototype.getControls = H.prototype.Ij;
    H.prototype.getOverlays = H.prototype.bk;
    H.prototype.getOverlayById = H.prototype.ak;
    H.prototype.getInteractions = H.prototype.Pj;
    H.prototype.getLayerGroup = H.prototype.tc;
    H.prototype.getLayers = H.prototype.Wg;
    H.prototype.getPixelFromCoordinate = H.prototype.Da;
    H.prototype.getSize = H.prototype.kb;
    H.prototype.getView = H.prototype.$;
    H.prototype.getViewport = H.prototype.rk;
    H.prototype.renderSync = H.prototype.Ko;
    H.prototype.render = H.prototype.render;
    H.prototype.removeControl = H.prototype.Do;
    H.prototype.removeInteraction = H.prototype.Eo;
    H.prototype.removeLayer = H.prototype.Go;
    H.prototype.removeOverlay = H.prototype.Ho;
    H.prototype.setLayerGroup = H.prototype.ai;
    H.prototype.setSize = H.prototype.Tf;
    H.prototype.setTarget = H.prototype.Xg;
    H.prototype.setView = H.prototype.Wo;
    H.prototype.updateSize = H.prototype.Yc;
    Wf.prototype.originalEvent = Wf.prototype.originalEvent;
    Wf.prototype.pixel = Wf.prototype.pixel;
    Wf.prototype.coordinate = Wf.prototype.coordinate;
    Wf.prototype.dragging = Wf.prototype.dragging;
    Je.prototype.map = Je.prototype.map;
    Je.prototype.frameState = Je.prototype.frameState;
    Sa.prototype.key = Sa.prototype.key;
    Sa.prototype.oldValue = Sa.prototype.oldValue;
    t("ol.Object", Ta);
    Ta.prototype.get = Ta.prototype.get;
    Ta.prototype.getKeys = Ta.prototype.O;
    Ta.prototype.getProperties = Ta.prototype.N;
    Ta.prototype.set = Ta.prototype.set;
    Ta.prototype.setProperties = Ta.prototype.H;
    Ta.prototype.unset = Ta.prototype.R;
    t("ol.Observable", Pa);
    t("ol.Observable.unByKey", Qa);
    Pa.prototype.changed = Pa.prototype.v;
    Pa.prototype.dispatchEvent = Pa.prototype.b;
    Pa.prototype.getRevision = Pa.prototype.K;
    Pa.prototype.on = Pa.prototype.I;
    Pa.prototype.once = Pa.prototype.L;
    Pa.prototype.un = Pa.prototype.J;
    Pa.prototype.unByKey = Pa.prototype.M;
    t("ol.Overlay", Fl);
    Fl.prototype.getElement = Fl.prototype.Ud;
    Fl.prototype.getId = Fl.prototype.Hl;
    Fl.prototype.getMap = Fl.prototype.he;
    Fl.prototype.getOffset = Fl.prototype.Eg;
    Fl.prototype.getPosition = Fl.prototype.Yg;
    Fl.prototype.getPositioning = Fl.prototype.Fg;
    Fl.prototype.setElement = Fl.prototype.Vh;
    Fl.prototype.setMap = Fl.prototype.setMap;
    Fl.prototype.setOffset = Fl.prototype.ci;
    Fl.prototype.setPosition = Fl.prototype.tf;
    Fl.prototype.setPositioning = Fl.prototype.fi;
    t("ol.render.toContext", function (a, b) {
        var c = a.canvas, d = b ? b : {}, e = d.pixelRatio || kf;
        if (d = d.size) c.width = d[0] * e, c.height = d[1] * e, c.style.width = d[0] + "px", c.style.height = d[1] + "px";
        c = [0, 0, c.width, c.height];
        d = Yh(Rh(), e, e);
        return new Ni(a, e, c, d, 0)
    });
    t("ol.size.toSize", Zd);
    jg.prototype.getTileCoord = jg.prototype.i;
    jg.prototype.load = jg.prototype.load;
    Vw.prototype.getFormat = Vw.prototype.Il;
    Vw.prototype.setFeatures = Vw.prototype.Wh;
    Vw.prototype.setProjection = Vw.prototype.uf;
    Vw.prototype.setLoader = Vw.prototype.bi;
    t("ol.View", Ad);
    Ad.prototype.constrainCenter = Ad.prototype.Rd;
    Ad.prototype.constrainResolution = Ad.prototype.constrainResolution;
    Ad.prototype.constrainRotation = Ad.prototype.constrainRotation;
    Ad.prototype.getCenter = Ad.prototype.ab;
    Ad.prototype.calculateExtent = Ad.prototype.Jc;
    Ad.prototype.getMaxResolution = Ad.prototype.Jl;
    Ad.prototype.getMinResolution = Ad.prototype.Kl;
    Ad.prototype.getProjection = Ad.prototype.Ll;
    Ad.prototype.getResolution = Ad.prototype.Ma;
    Ad.prototype.getResolutions = Ad.prototype.Ml;
    Ad.prototype.getRotation = Ad.prototype.Qa;
    Ad.prototype.getZoom = Ad.prototype.tk;
    Ad.prototype.fit = Ad.prototype.$e;
    Ad.prototype.centerOn = Ad.prototype.sj;
    Ad.prototype.rotate = Ad.prototype.rotate;
    Ad.prototype.setCenter = Ad.prototype.rb;
    Ad.prototype.setResolution = Ad.prototype.Yb;
    Ad.prototype.setRotation = Ad.prototype.ie;
    Ad.prototype.setZoom = Ad.prototype.Zo;
    t("ol.xml.getAllTextContent", Am);
    t("ol.xml.parse", Em);
    Fk.prototype.getGL = Fk.prototype.Pn;
    Fk.prototype.useProgram = Fk.prototype.ve;
    t("ol.tilegrid.createXYZ", ne);
    t("ol.tilegrid.TileGrid", be);
    be.prototype.forEachTileCoord = be.prototype.sg;
    be.prototype.getMaxZoom = be.prototype.Cg;
    be.prototype.getMinZoom = be.prototype.Dg;
    be.prototype.getOrigin = be.prototype.Tc;
    be.prototype.getResolution = be.prototype.Ca;
    be.prototype.getResolutions = be.prototype.Bh;
    be.prototype.getTileCoordExtent = be.prototype.Ia;
    be.prototype.getTileCoordForCoordAndResolution = be.prototype.Zd;
    be.prototype.getTileCoordForCoordAndZ = be.prototype.rd;
    be.prototype.getTileSize = be.prototype.Na;
    be.prototype.getZForResolution = be.prototype.wc;
    t("ol.tilegrid.WMTS", Yw);
    Yw.prototype.getMatrixIds = Yw.prototype.o;
    t("ol.tilegrid.WMTS.createFromCapabilitiesMatrixSet", Zw);
    t("ol.style.AtlasManager", hx);
    t("ol.style.Circle", vi);
    vi.prototype.clone = vi.prototype.clone;
    vi.prototype.getFill = vi.prototype.nn;
    vi.prototype.getImage = vi.prototype.Tb;
    vi.prototype.getRadius = vi.prototype.pn;
    vi.prototype.getStroke = vi.prototype.qn;
    vi.prototype.setRadius = vi.prototype.rn;
    t("ol.style.Fill", zi);
    zi.prototype.clone = zi.prototype.clone;
    zi.prototype.getColor = zi.prototype.g;
    zi.prototype.setColor = zi.prototype.f;
    t("ol.style.Icon", lp);
    lp.prototype.clone = lp.prototype.clone;
    lp.prototype.getAnchor = lp.prototype.cc;
    lp.prototype.getImage = lp.prototype.Tb;
    lp.prototype.getOrigin = lp.prototype.jc;
    lp.prototype.getSrc = lp.prototype.sn;
    lp.prototype.getSize = lp.prototype.Gb;
    lp.prototype.load = lp.prototype.load;
    t("ol.style.Image", ui);
    ui.prototype.getOpacity = ui.prototype.qe;
    ui.prototype.getRotateWithView = ui.prototype.re;
    ui.prototype.getRotation = ui.prototype.se;
    ui.prototype.getScale = ui.prototype.te;
    ui.prototype.getSnapToPixel = ui.prototype.Yd;
    ui.prototype.setOpacity = ui.prototype.Rc;
    ui.prototype.setRotation = ui.prototype.ue;
    ui.prototype.setScale = ui.prototype.Sc;
    t("ol.style.RegularShape", jx);
    jx.prototype.clone = jx.prototype.clone;
    jx.prototype.getAnchor = jx.prototype.cc;
    jx.prototype.getAngle = jx.prototype.tn;
    jx.prototype.getFill = jx.prototype.vn;
    jx.prototype.getImage = jx.prototype.Tb;
    jx.prototype.getOrigin = jx.prototype.jc;
    jx.prototype.getPoints = jx.prototype.wn;
    jx.prototype.getRadius = jx.prototype.xn;
    jx.prototype.getRadius2 = jx.prototype.hk;
    jx.prototype.getSize = jx.prototype.Gb;
    jx.prototype.getStroke = jx.prototype.yn;
    t("ol.style.Stroke", Ai);
    Ai.prototype.clone = Ai.prototype.clone;
    Ai.prototype.getColor = Ai.prototype.zn;
    Ai.prototype.getLineCap = Ai.prototype.Sj;
    Ai.prototype.getLineDash = Ai.prototype.An;
    Ai.prototype.getLineJoin = Ai.prototype.Tj;
    Ai.prototype.getMiterLimit = Ai.prototype.Yj;
    Ai.prototype.getWidth = Ai.prototype.Bn;
    Ai.prototype.setColor = Ai.prototype.Cn;
    Ai.prototype.setLineCap = Ai.prototype.So;
    Ai.prototype.setLineDash = Ai.prototype.setLineDash;
    Ai.prototype.setLineJoin = Ai.prototype.To;
    Ai.prototype.setMiterLimit = Ai.prototype.Uo;
    Ai.prototype.setWidth = Ai.prototype.Xo;
    t("ol.style.Style", Bi);
    Bi.prototype.clone = Bi.prototype.clone;
    Bi.prototype.getGeometry = Bi.prototype.V;
    Bi.prototype.getGeometryFunction = Bi.prototype.Nj;
    Bi.prototype.getFill = Bi.prototype.Dn;
    Bi.prototype.getImage = Bi.prototype.En;
    Bi.prototype.getStroke = Bi.prototype.Fn;
    Bi.prototype.getText = Bi.prototype.Ga;
    Bi.prototype.getZIndex = Bi.prototype.Gn;
    Bi.prototype.setGeometry = Bi.prototype.zh;
    Bi.prototype.setZIndex = Bi.prototype.Hn;
    t("ol.style.Text", rp);
    rp.prototype.clone = rp.prototype.clone;
    rp.prototype.getFont = rp.prototype.Lj;
    rp.prototype.getOffsetX = rp.prototype.Zj;
    rp.prototype.getOffsetY = rp.prototype.$j;
    rp.prototype.getFill = rp.prototype.In;
    rp.prototype.getRotateWithView = rp.prototype.Jn;
    rp.prototype.getRotation = rp.prototype.Kn;
    rp.prototype.getScale = rp.prototype.Ln;
    rp.prototype.getStroke = rp.prototype.Mn;
    rp.prototype.getText = rp.prototype.Ga;
    rp.prototype.getTextAlign = rp.prototype.lk;
    rp.prototype.getTextBaseline = rp.prototype.mk;
    rp.prototype.setFont = rp.prototype.Yh;
    rp.prototype.setOffsetX = rp.prototype.di;
    rp.prototype.setOffsetY = rp.prototype.ei;
    rp.prototype.setFill = rp.prototype.Xh;
    rp.prototype.setRotation = rp.prototype.Nn;
    rp.prototype.setScale = rp.prototype.Ah;
    rp.prototype.setStroke = rp.prototype.gi;
    rp.prototype.setText = rp.prototype.hi;
    rp.prototype.setTextAlign = rp.prototype.ii;
    rp.prototype.setTextBaseline = rp.prototype.Vo;
    t("ol.Sphere", ic);
    ic.prototype.geodesicArea = ic.prototype.a;
    ic.prototype.haversineDistance = ic.prototype.b;
    t("ol.source.BingMaps", ew);
    t("ol.source.BingMaps.TOS_ATTRIBUTION", fw);
    ew.prototype.getApiKey = ew.prototype.P;
    ew.prototype.getImagerySet = ew.prototype.W;
    t("ol.source.CartoDB", hw);
    hw.prototype.getConfig = hw.prototype.Hj;
    hw.prototype.updateConfig = hw.prototype.gp;
    hw.prototype.setConfig = hw.prototype.Po;
    t("ol.source.Cluster", Y);
    Y.prototype.getSource = Y.prototype.ub;
    Y.prototype.setDistance = Y.prototype.Jb;
    t("ol.source.Image", Zj);
    bk.prototype.image = bk.prototype.image;
    t("ol.source.ImageArcGISRest", nw);
    nw.prototype.getParams = nw.prototype.Gm;
    nw.prototype.getImageLoadFunction = nw.prototype.Fm;
    nw.prototype.getUrl = nw.prototype.Hm;
    nw.prototype.setImageLoadFunction = nw.prototype.Im;
    nw.prototype.setUrl = nw.prototype.Jm;
    nw.prototype.updateParams = nw.prototype.Km;
    t("ol.source.ImageCanvas", gk);
    t("ol.source.ImageMapGuide", ow);
    ow.prototype.getParams = ow.prototype.Mm;
    ow.prototype.getImageLoadFunction = ow.prototype.Lm;
    ow.prototype.updateParams = ow.prototype.Om;
    ow.prototype.setImageLoadFunction = ow.prototype.Nm;
    t("ol.source.ImageStatic", pw);
    t("ol.source.ImageVector", hk);
    hk.prototype.getSource = hk.prototype.Pm;
    hk.prototype.getStyle = hk.prototype.Qm;
    hk.prototype.getStyleFunction = hk.prototype.Rm;
    hk.prototype.setStyle = hk.prototype.nh;
    t("ol.source.ImageWMS", qw);
    qw.prototype.getGetFeatureInfoUrl = qw.prototype.Um;
    qw.prototype.getParams = qw.prototype.Wm;
    qw.prototype.getImageLoadFunction = qw.prototype.Vm;
    qw.prototype.getUrl = qw.prototype.Xm;
    qw.prototype.setImageLoadFunction = qw.prototype.Ym;
    qw.prototype.setUrl = qw.prototype.Zm;
    qw.prototype.updateParams = qw.prototype.$m;
    t("ol.source.OSM", uw);
    t("ol.source.OSM.ATTRIBUTION", vw);
    t("ol.source.Raster", ww);
    ww.prototype.setOperation = ww.prototype.u;
    Bw.prototype.extent = Bw.prototype.extent;
    Bw.prototype.resolution = Bw.prototype.resolution;
    Bw.prototype.data = Bw.prototype.data;
    t("ol.source.Source", Wj);
    Wj.prototype.getAttributions = Wj.prototype.va;
    Wj.prototype.getLogo = Wj.prototype.ua;
    Wj.prototype.getProjection = Wj.prototype.wa;
    Wj.prototype.getState = Wj.prototype.U;
    Wj.prototype.refresh = Wj.prototype.ta;
    Wj.prototype.setAttributions = Wj.prototype.qa;
    t("ol.source.Stamen", Ew);
    t("ol.source.Tile", Xv);
    Xv.prototype.getTileGrid = Xv.prototype.Ra;
    $v.prototype.tile = $v.prototype.tile;
    t("ol.source.TileArcGISRest", Iw);
    Iw.prototype.getParams = Iw.prototype.u;
    Iw.prototype.updateParams = Iw.prototype.C;
    t("ol.source.TileDebug", Jw);
    t("ol.source.TileImage", X);
    X.prototype.setRenderReprojectionEdges = X.prototype.Bb;
    X.prototype.setTileGridForProjection = X.prototype.Cb;
    t("ol.source.TileJSON", Lw);
    Lw.prototype.getTileJSON = Lw.prototype.nk;
    t("ol.source.TileUTFGrid", Mw);
    Mw.prototype.getTemplate = Mw.prototype.kk;
    Mw.prototype.forDataAtCoordinateAndResolution = Mw.prototype.wj;
    t("ol.source.TileWMS", Qw);
    Qw.prototype.getGetFeatureInfoUrl = Qw.prototype.gn;
    Qw.prototype.getParams = Qw.prototype.hn;
    Qw.prototype.updateParams = Qw.prototype.jn;
    aw.prototype.getTileLoadFunction = aw.prototype.fb;
    aw.prototype.getTileUrlFunction = aw.prototype.hb;
    aw.prototype.getUrls = aw.prototype.ib;
    aw.prototype.setTileLoadFunction = aw.prototype.nb;
    aw.prototype.setTileUrlFunction = aw.prototype.Ta;
    aw.prototype.setUrl = aw.prototype.Ya;
    aw.prototype.setUrls = aw.prototype.Ua;
    t("ol.source.Vector", V);
    V.prototype.addFeature = V.prototype.cb;
    V.prototype.addFeatures = V.prototype.Ic;
    V.prototype.clear = V.prototype.clear;
    V.prototype.forEachFeature = V.prototype.qg;
    V.prototype.forEachFeatureInExtent = V.prototype.Kb;
    V.prototype.forEachFeatureIntersectingExtent = V.prototype.rg;
    V.prototype.getFeaturesCollection = V.prototype.zg;
    V.prototype.getFeatures = V.prototype.oe;
    V.prototype.getFeaturesAtCoordinate = V.prototype.yg;
    V.prototype.getFeaturesInExtent = V.prototype.bf;
    V.prototype.getClosestFeatureToCoordinate = V.prototype.ug;
    V.prototype.getExtent = V.prototype.D;
    V.prototype.getFeatureById = V.prototype.xg;
    V.prototype.getFormat = V.prototype.sh;
    V.prototype.getUrl = V.prototype.th;
    V.prototype.removeFeature = V.prototype.mb;
    pu.prototype.feature = pu.prototype.feature;
    t("ol.source.VectorTile", Ww);
    t("ol.source.WMTS", Z);
    Z.prototype.getDimensions = Z.prototype.Jj;
    Z.prototype.getFormat = Z.prototype.kn;
    Z.prototype.getLayer = Z.prototype.ln;
    Z.prototype.getMatrixSet = Z.prototype.Wj;
    Z.prototype.getRequestEncoding = Z.prototype.ik;
    Z.prototype.getStyle = Z.prototype.mn;
    Z.prototype.getVersion = Z.prototype.qk;
    Z.prototype.updateDimensions = Z.prototype.hp;
    t("ol.source.WMTS.optionsFromCapabilities", function (a, b) {
        var c = cb(a.Contents.Layer, function (a) {
            return a.Identifier == b.layer
        }), d = a.Contents.TileMatrixSet, e, f;
        e = 1 < c.TileMatrixSetLink.length ? "projection" in b ? gb(c.TileMatrixSetLink, function (a) {
            return cb(d, function (b) {
                    return b.Identifier == a.TileMatrixSet
                }).SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3") == b.projection
        }) : gb(c.TileMatrixSetLink, function (a) {
            return a.TileMatrixSet == b.matrixSet
        }) : 0;
        0 > e && (e = 0);
        f = c.TileMatrixSetLink[e].TileMatrixSet;
        var g = c.Format[0];
        "format" in b && (g = b.format);
        e = gb(c.Style, function (a) {
            return "style" in b ? a.Title == b.style : a.isDefault
        });
        0 > e && (e = 0);
        e = c.Style[e].Identifier;
        var h = {};
        "Dimension" in c && c.Dimension.forEach(function (a) {
            var b = a.Identifier, c = a.Default;
            void 0 === c && (c = a.Value[0]);
            h[b] = c
        });
        var l = cb(a.Contents.TileMatrixSet, function (a) {
            return a.Identifier == f
        }), m;
        m = "projection" in b ? oc(b.projection) : oc(l.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3"));
        var n = c.WGS84BoundingBox, p, q;
        void 0 !== n &&
        (q = oc("EPSG:4326").D(), q = n[0] == q[0] && n[2] == q[2], p = Lc(n, "EPSG:4326", m), (n = m.D()) && (Ib(n, p) || (p = void 0)));
        var l = Zw(l, p), r = [];
        p = b.requestEncoding;
        p = void 0 !== p ? p : "";
        if ("OperationsMetadata" in a && "GetTile" in a.OperationsMetadata)for (var n = a.OperationsMetadata.GetTile.DCP.HTTP.Get, u = 0, x = n.length; u < x; ++u) {
            var y = cb(n[u].Constraint, function (a) {
                return "GetEncoding" == a.name
            }).AllowedValues.Value;
            "" === p && (p = y[0]);
            if (p === $w) Ya(y, $w) && r.push(n[u].href); else break
        }
        0 === r.length && (p = "REST", c.ResourceURL.forEach(function (a) {
            "tile" ===
            a.resourceType && (g = a.format, r.push(a.template))
        }));
        return {
            urls: r,
            layer: b.layer,
            matrixSet: f,
            format: g,
            projection: m,
            requestEncoding: p,
            tileGrid: l,
            style: e,
            dimensions: h,
            wrapX: q
        }
    });
    t("ol.source.XYZ", gw);
    t("ol.source.Zoomify", bx);
    Lh.prototype.vectorContext = Lh.prototype.vectorContext;
    Lh.prototype.frameState = Lh.prototype.frameState;
    Lh.prototype.context = Lh.prototype.context;
    Lh.prototype.glContext = Lh.prototype.glContext;
    sr.prototype.get = sr.prototype.get;
    sr.prototype.getExtent = sr.prototype.D;
    sr.prototype.getGeometry = sr.prototype.V;
    sr.prototype.getProperties = sr.prototype.Bm;
    sr.prototype.getType = sr.prototype.X;
    t("ol.render.VectorContext", Mi);
    al.prototype.setStyle = al.prototype.vd;
    al.prototype.drawGeometry = al.prototype.pc;
    al.prototype.drawFeature = al.prototype.Ve;
    Ni.prototype.drawCircle = Ni.prototype.Sd;
    Ni.prototype.setStyle = Ni.prototype.vd;
    Ni.prototype.drawGeometry = Ni.prototype.pc;
    Ni.prototype.drawFeature = Ni.prototype.Ve;
    t("ol.proj.common.add", Kh);
    t("ol.proj.METERS_PER_UNIT", kc);
    t("ol.proj.Projection", lc);
    lc.prototype.getCode = lc.prototype.Gj;
    lc.prototype.getExtent = lc.prototype.D;
    lc.prototype.getUnits = lc.prototype.yb;
    lc.prototype.getMetersPerUnit = lc.prototype.dc;
    lc.prototype.getWorldExtent = lc.prototype.sk;
    lc.prototype.isGlobal = lc.prototype.bl;
    lc.prototype.setGlobal = lc.prototype.Ro;
    lc.prototype.setExtent = lc.prototype.Am;
    lc.prototype.setWorldExtent = lc.prototype.Yo;
    lc.prototype.setGetPointResolution = lc.prototype.Qo;
    lc.prototype.getPointResolution = lc.prototype.getPointResolution;
    t("ol.proj.setProj4", function (a) {
        nc = a
    });
    t("ol.proj.addEquivalentProjections", pc);
    t("ol.proj.addProjection", Dc);
    t("ol.proj.addCoordinateTransforms", qc);
    t("ol.proj.fromLonLat", function (a, b) {
        return Kc(a, "EPSG:4326", void 0 !== b ? b : "EPSG:3857")
    });
    t("ol.proj.toLonLat", function (a, b) {
        return Kc(a, void 0 !== b ? b : "EPSG:3857", "EPSG:4326")
    });
    t("ol.proj.get", oc);
    t("ol.proj.equivalent", Hc);
    t("ol.proj.getTransform", Ic);
    t("ol.proj.transform", Kc);
    t("ol.proj.transformExtent", Lc);
    t("ol.layer.Base", yh);
    yh.prototype.getExtent = yh.prototype.D;
    yh.prototype.getMaxResolution = yh.prototype.Pb;
    yh.prototype.getMinResolution = yh.prototype.Qb;
    yh.prototype.getOpacity = yh.prototype.Rb;
    yh.prototype.getVisible = yh.prototype.zb;
    yh.prototype.getZIndex = yh.prototype.Sb;
    yh.prototype.setExtent = yh.prototype.fc;
    yh.prototype.setMaxResolution = yh.prototype.lc;
    yh.prototype.setMinResolution = yh.prototype.mc;
    yh.prototype.setOpacity = yh.prototype.gc;
    yh.prototype.setVisible = yh.prototype.hc;
    yh.prototype.setZIndex = yh.prototype.ic;
    t("ol.layer.Group", Ah);
    Ah.prototype.getLayers = Ah.prototype.Qc;
    Ah.prototype.setLayers = Ah.prototype.gh;
    t("ol.layer.Heatmap", W);
    W.prototype.getBlur = W.prototype.tg;
    W.prototype.getGradient = W.prototype.Ag;
    W.prototype.getRadius = W.prototype.hh;
    W.prototype.setBlur = W.prototype.Th;
    W.prototype.setGradient = W.prototype.$h;
    W.prototype.setRadius = W.prototype.ih;
    t("ol.layer.Image", gi);
    gi.prototype.getSource = gi.prototype.ga;
    t("ol.layer.Layer", Mh);
    Mh.prototype.getSource = Mh.prototype.ga;
    Mh.prototype.setMap = Mh.prototype.setMap;
    Mh.prototype.setSource = Mh.prototype.Ec;
    t("ol.layer.Tile", D);
    D.prototype.getPreload = D.prototype.f;
    D.prototype.getSource = D.prototype.ga;
    D.prototype.setPreload = D.prototype.l;
    D.prototype.getUseInterimTilesOnError = D.prototype.c;
    D.prototype.setUseInterimTilesOnError = D.prototype.B;
    t("ol.layer.Vector", E);
    E.prototype.getSource = E.prototype.ga;
    E.prototype.getStyle = E.prototype.G;
    E.prototype.getStyleFunction = E.prototype.S;
    E.prototype.setStyle = E.prototype.l;
    t("ol.layer.VectorTile", G);
    G.prototype.getPreload = G.prototype.f;
    G.prototype.getUseInterimTilesOnError = G.prototype.c;
    G.prototype.setPreload = G.prototype.P;
    G.prototype.setUseInterimTilesOnError = G.prototype.W;
    t("ol.interaction.DoubleClickZoom", Bg);
    t("ol.interaction.DoubleClickZoom.handleEvent", Cg);
    t("ol.interaction.DragAndDrop", Wt);
    t("ol.interaction.DragAndDrop.handleEvent", gc);
    Zt.prototype.features = Zt.prototype.features;
    Zt.prototype.file = Zt.prototype.file;
    Zt.prototype.projection = Zt.prototype.projection;
    t("ol.interaction.DragBox", $g);
    $g.prototype.getGeometry = $g.prototype.V;
    eh.prototype.coordinate = eh.prototype.coordinate;
    eh.prototype.mapBrowserEvent = eh.prototype.mapBrowserEvent;
    t("ol.interaction.DragPan", Pg);
    t("ol.interaction.DragRotate", Tg);
    t("ol.interaction.DragRotateAndZoom", au);
    t("ol.interaction.DragZoom", ih);
    t("ol.interaction.Draw", wu);
    t("ol.interaction.Draw.handleEvent", yu);
    wu.prototype.removeLastPoint = wu.prototype.Fo;
    wu.prototype.finishDrawing = wu.prototype.ld;
    wu.prototype.extend = wu.prototype.fm;
    t("ol.interaction.Draw.createRegularPolygon", function (a, b) {
        return function (c, d) {
            var e = c[0], f = c[1], g = Math.sqrt(xb(e, f)), h = d ? d : yd(new Kt(e), a);
            zd(h, e, g, b ? b : Math.atan((f[1] - e[1]) / (f[0] - e[0])));
            return h
        }
    });
    t("ol.interaction.Draw.createBox", function () {
        return function (a, b) {
            var c = Ab(a), d = b || new C(null);
            d.ma([[Rb(c), Sb(c), Ub(c), Wb(c), Rb(c)]]);
            return d
        }
    });
    Lu.prototype.feature = Lu.prototype.feature;
    t("ol.interaction.Extent", Pu);
    Pu.prototype.getExtent = Pu.prototype.D;
    Pu.prototype.setExtent = Pu.prototype.i;
    $u.prototype.extent_ = $u.prototype.b;
    t("ol.interaction.defaults", xh);
    t("ol.interaction.Interaction", wg);
    wg.prototype.getActive = wg.prototype.f;
    wg.prototype.getMap = wg.prototype.c;
    wg.prototype.setActive = wg.prototype.Ba;
    t("ol.interaction.KeyboardPan", jh);
    t("ol.interaction.KeyboardPan.handleEvent", kh);
    t("ol.interaction.KeyboardZoom", lh);
    t("ol.interaction.KeyboardZoom.handleEvent", mh);
    t("ol.interaction.Modify", bv);
    t("ol.interaction.Modify.handleEvent", ev);
    bv.prototype.removePoint = bv.prototype.Qh;
    jv.prototype.features = jv.prototype.features;
    jv.prototype.mapBrowserEvent = jv.prototype.mapBrowserEvent;
    t("ol.interaction.MouseWheelZoom", nh);
    t("ol.interaction.MouseWheelZoom.handleEvent", oh);
    nh.prototype.setMouseAnchor = nh.prototype.B;
    t("ol.interaction.PinchRotate", ph);
    t("ol.interaction.PinchZoom", th);
    t("ol.interaction.Pointer", Mg);
    t("ol.interaction.Pointer.handleEvent", Ng);
    t("ol.interaction.Select", rv);
    rv.prototype.getFeatures = rv.prototype.pm;
    rv.prototype.getLayer = rv.prototype.qm;
    t("ol.interaction.Select.handleEvent", sv);
    rv.prototype.setMap = rv.prototype.setMap;
    uv.prototype.selected = uv.prototype.selected;
    uv.prototype.deselected = uv.prototype.deselected;
    uv.prototype.mapBrowserEvent = uv.prototype.mapBrowserEvent;
    t("ol.interaction.Snap", wv);
    wv.prototype.addFeature = wv.prototype.cb;
    wv.prototype.removeFeature = wv.prototype.mb;
    t("ol.interaction.Translate", Av);
    Gv.prototype.features = Gv.prototype.features;
    Gv.prototype.coordinate = Gv.prototype.coordinate;
    t("ol.geom.Circle", Kt);
    Kt.prototype.clone = Kt.prototype.clone;
    Kt.prototype.getCenter = Kt.prototype.ud;
    Kt.prototype.getRadius = Kt.prototype.vf;
    Kt.prototype.getType = Kt.prototype.X;
    Kt.prototype.intersectsExtent = Kt.prototype.Oa;
    Kt.prototype.setCenter = Kt.prototype.Yl;
    Kt.prototype.setCenterAndRadius = Kt.prototype.Sf;
    Kt.prototype.setRadius = Kt.prototype.Zl;
    Kt.prototype.transform = Kt.prototype.lb;
    t("ol.geom.Geometry", Mc);
    Mc.prototype.getClosestPoint = Mc.prototype.xb;
    Mc.prototype.intersectsCoordinate = Mc.prototype.jb;
    Mc.prototype.getExtent = Mc.prototype.D;
    Mc.prototype.rotate = Mc.prototype.rotate;
    Mc.prototype.scale = Mc.prototype.scale;
    Mc.prototype.simplify = Mc.prototype.Db;
    Mc.prototype.transform = Mc.prototype.lb;
    t("ol.geom.GeometryCollection", Jn);
    Jn.prototype.clone = Jn.prototype.clone;
    Jn.prototype.getGeometries = Jn.prototype.cf;
    Jn.prototype.getType = Jn.prototype.X;
    Jn.prototype.intersectsExtent = Jn.prototype.Oa;
    Jn.prototype.setGeometries = Jn.prototype.Zh;
    Jn.prototype.applyTransform = Jn.prototype.oc;
    Jn.prototype.translate = Jn.prototype.Pc;
    t("ol.geom.LinearRing", id);
    id.prototype.clone = id.prototype.clone;
    id.prototype.getArea = id.prototype.bm;
    id.prototype.getCoordinates = id.prototype.Y;
    id.prototype.getType = id.prototype.X;
    id.prototype.setCoordinates = id.prototype.ma;
    t("ol.geom.LineString", P);
    P.prototype.appendCoordinate = P.prototype.kj;
    P.prototype.clone = P.prototype.clone;
    P.prototype.forEachSegment = P.prototype.zj;
    P.prototype.getCoordinateAtM = P.prototype.$l;
    P.prototype.getCoordinates = P.prototype.Y;
    P.prototype.getCoordinateAt = P.prototype.vg;
    P.prototype.getLength = P.prototype.am;
    P.prototype.getType = P.prototype.X;
    P.prototype.intersectsExtent = P.prototype.Oa;
    P.prototype.setCoordinates = P.prototype.ma;
    t("ol.geom.MultiLineString", Q);
    Q.prototype.appendLineString = Q.prototype.lj;
    Q.prototype.clone = Q.prototype.clone;
    Q.prototype.getCoordinateAtM = Q.prototype.cm;
    Q.prototype.getCoordinates = Q.prototype.Y;
    Q.prototype.getLineString = Q.prototype.Uj;
    Q.prototype.getLineStrings = Q.prototype.od;
    Q.prototype.getType = Q.prototype.X;
    Q.prototype.intersectsExtent = Q.prototype.Oa;
    Q.prototype.setCoordinates = Q.prototype.ma;
    t("ol.geom.MultiPoint", S);
    S.prototype.appendPoint = S.prototype.nj;
    S.prototype.clone = S.prototype.clone;
    S.prototype.getCoordinates = S.prototype.Y;
    S.prototype.getPoint = S.prototype.ek;
    S.prototype.getPoints = S.prototype.je;
    S.prototype.getType = S.prototype.X;
    S.prototype.intersectsExtent = S.prototype.Oa;
    S.prototype.setCoordinates = S.prototype.ma;
    t("ol.geom.MultiPolygon", T);
    T.prototype.appendPolygon = T.prototype.oj;
    T.prototype.clone = T.prototype.clone;
    T.prototype.getArea = T.prototype.dm;
    T.prototype.getCoordinates = T.prototype.Y;
    T.prototype.getInteriorPoints = T.prototype.Rj;
    T.prototype.getPolygon = T.prototype.gk;
    T.prototype.getPolygons = T.prototype.Xd;
    T.prototype.getType = T.prototype.X;
    T.prototype.intersectsExtent = T.prototype.Oa;
    T.prototype.setCoordinates = T.prototype.ma;
    t("ol.geom.Point", B);
    B.prototype.clone = B.prototype.clone;
    B.prototype.getCoordinates = B.prototype.Y;
    B.prototype.getType = B.prototype.X;
    B.prototype.intersectsExtent = B.prototype.Oa;
    B.prototype.setCoordinates = B.prototype.ma;
    t("ol.geom.Polygon", C);
    C.prototype.appendLinearRing = C.prototype.mj;
    C.prototype.clone = C.prototype.clone;
    C.prototype.getArea = C.prototype.em;
    C.prototype.getCoordinates = C.prototype.Y;
    C.prototype.getInteriorPoint = C.prototype.Qj;
    C.prototype.getLinearRingCount = C.prototype.Vj;
    C.prototype.getLinearRing = C.prototype.Bg;
    C.prototype.getLinearRings = C.prototype.Wd;
    C.prototype.getType = C.prototype.X;
    C.prototype.intersectsExtent = C.prototype.Oa;
    C.prototype.setCoordinates = C.prototype.ma;
    t("ol.geom.Polygon.circular", wd);
    t("ol.geom.Polygon.fromExtent", xd);
    t("ol.geom.Polygon.fromCircle", yd);
    t("ol.geom.SimpleGeometry", Oc);
    Oc.prototype.getFirstCoordinate = Oc.prototype.Lb;
    Oc.prototype.getLastCoordinate = Oc.prototype.Mb;
    Oc.prototype.getLayout = Oc.prototype.Nb;
    Oc.prototype.applyTransform = Oc.prototype.oc;
    Oc.prototype.translate = Oc.prototype.Pc;
    t("ol.format.EsriJSON", en);
    en.prototype.readFeature = en.prototype.Ub;
    en.prototype.readFeatures = en.prototype.Ha;
    en.prototype.readGeometry = en.prototype.Wc;
    en.prototype.readProjection = en.prototype.Sa;
    en.prototype.writeGeometry = en.prototype.$c;
    en.prototype.writeGeometryObject = en.prototype.He;
    en.prototype.writeFeature = en.prototype.Gd;
    en.prototype.writeFeatureObject = en.prototype.Zc;
    en.prototype.writeFeatures = en.prototype.$b;
    en.prototype.writeFeaturesObject = en.prototype.Ge;
    t("ol.format.Feature", Tm);
    t("ol.format.GeoJSON", Nn);
    Nn.prototype.readFeature = Nn.prototype.Ub;
    Nn.prototype.readFeatures = Nn.prototype.Ha;
    Nn.prototype.readGeometry = Nn.prototype.Wc;
    Nn.prototype.readProjection = Nn.prototype.Sa;
    Nn.prototype.writeFeature = Nn.prototype.Gd;
    Nn.prototype.writeFeatureObject = Nn.prototype.Zc;
    Nn.prototype.writeFeatures = Nn.prototype.$b;
    Nn.prototype.writeFeaturesObject = Nn.prototype.Ge;
    Nn.prototype.writeGeometry = Nn.prototype.$c;
    Nn.prototype.writeGeometryObject = Nn.prototype.He;
    t("ol.format.GML", io);
    io.prototype.writeFeatures = io.prototype.$b;
    io.prototype.writeFeaturesNode = io.prototype.a;
    t("ol.format.GML2", ro);
    t("ol.format.GML3", io);
    io.prototype.writeGeometryNode = io.prototype.T;
    io.prototype.writeFeatures = io.prototype.$b;
    io.prototype.writeFeaturesNode = io.prototype.a;
    Vn.prototype.readFeatures = Vn.prototype.Ha;
    t("ol.format.GPX", so);
    so.prototype.readFeature = so.prototype.Ub;
    so.prototype.readFeatures = so.prototype.Ha;
    so.prototype.readProjection = so.prototype.Sa;
    so.prototype.writeFeatures = so.prototype.$b;
    so.prototype.writeFeaturesNode = so.prototype.a;
    t("ol.format.IGC", bp);
    bp.prototype.readFeature = bp.prototype.Ub;
    bp.prototype.readFeatures = bp.prototype.Ha;
    bp.prototype.readProjection = bp.prototype.Sa;
    t("ol.format.KML", sp);
    sp.prototype.readFeature = sp.prototype.Ub;
    sp.prototype.readFeatures = sp.prototype.Ha;
    sp.prototype.readName = sp.prototype.uo;
    sp.prototype.readNetworkLinks = sp.prototype.vo;
    sp.prototype.readProjection = sp.prototype.Sa;
    sp.prototype.writeFeatures = sp.prototype.$b;
    sp.prototype.writeFeaturesNode = sp.prototype.a;
    t("ol.format.MVT", tr);
    tr.prototype.readFeatures = tr.prototype.Ha;
    tr.prototype.readProjection = tr.prototype.Sa;
    tr.prototype.setLayers = tr.prototype.c;
    t("ol.format.OSMXML", vr);
    vr.prototype.readFeatures = vr.prototype.Ha;
    vr.prototype.readProjection = vr.prototype.Sa;
    t("ol.format.Polyline", Ur);
    t("ol.format.Polyline.encodeDeltas", Vr);
    t("ol.format.Polyline.decodeDeltas", Xr);
    t("ol.format.Polyline.encodeFloats", Wr);
    t("ol.format.Polyline.decodeFloats", Yr);
    Ur.prototype.readFeature = Ur.prototype.Ub;
    Ur.prototype.readFeatures = Ur.prototype.Ha;
    Ur.prototype.readGeometry = Ur.prototype.Wc;
    Ur.prototype.readProjection = Ur.prototype.Sa;
    Ur.prototype.writeGeometry = Ur.prototype.$c;
    t("ol.format.TopoJSON", Zr);
    Zr.prototype.readFeatures = Zr.prototype.Ha;
    Zr.prototype.readProjection = Zr.prototype.Sa;
    t("ol.format.WFS", es);
    es.prototype.readFeatures = es.prototype.Ha;
    es.prototype.readTransactionResponse = es.prototype.o;
    es.prototype.readFeatureCollectionMetadata = es.prototype.l;
    es.prototype.writeGetFeature = es.prototype.s;
    es.prototype.writeTransaction = es.prototype.C;
    es.prototype.readProjection = es.prototype.Sa;
    t("ol.format.WKT", ws);
    ws.prototype.readFeature = ws.prototype.Ub;
    ws.prototype.readFeatures = ws.prototype.Ha;
    ws.prototype.readGeometry = ws.prototype.Wc;
    ws.prototype.writeFeature = ws.prototype.Gd;
    ws.prototype.writeFeatures = ws.prototype.$b;
    ws.prototype.writeGeometry = ws.prototype.$c;
    t("ol.format.WMSCapabilities", Os);
    Os.prototype.read = Os.prototype.read;
    t("ol.format.WMSGetFeatureInfo", lt);
    lt.prototype.readFeatures = lt.prototype.Ha;
    t("ol.format.WMTSCapabilities", mt);
    mt.prototype.read = mt.prototype.read;
    t("ol.format.filter.And", pn);
    t("ol.format.filter.Bbox", qn);
    t("ol.format.filter.Comparison", rn);
    t("ol.format.filter.ComparisonBinary", sn);
    t("ol.format.filter.EqualTo", tn);
    t("ol.format.filter.Filter", mn);
    t("ol.format.filter.GreaterThan", un);
    t("ol.format.filter.GreaterThanOrEqualTo", vn);
    t("ol.format.filter.and", Hn);
    t("ol.format.filter.or", function (a, b) {
        return new Fn(a, b)
    });
    t("ol.format.filter.not", function (a) {
        return new Dn(a)
    });
    t("ol.format.filter.bbox", In);
    t("ol.format.filter.intersects", function (a, b, c) {
        return new xn(a, b, c)
    });
    t("ol.format.filter.within", function (a, b, c) {
        return new Gn(a, b, c)
    });
    t("ol.format.filter.equalTo", function (a, b, c) {
        return new tn(a, b, c)
    });
    t("ol.format.filter.notEqualTo", function (a, b, c) {
        return new En(a, b, c)
    });
    t("ol.format.filter.lessThan", function (a, b) {
        return new Bn(a, b)
    });
    t("ol.format.filter.lessThanOrEqualTo", function (a, b) {
        return new Cn(a, b)
    });
    t("ol.format.filter.greaterThan", function (a, b) {
        return new un(a, b)
    });
    t("ol.format.filter.greaterThanOrEqualTo", function (a, b) {
        return new vn(a, b)
    });
    t("ol.format.filter.isNull", function (a) {
        return new An(a)
    });
    t("ol.format.filter.between", function (a, b, c) {
        return new yn(a, b, c)
    });
    t("ol.format.filter.like", function (a, b, c, d, e, f) {
        return new zn(a, b, c, d, e, f)
    });
    t("ol.format.filter.Intersects", xn);
    t("ol.format.filter.IsBetween", yn);
    t("ol.format.filter.IsLike", zn);
    t("ol.format.filter.IsNull", An);
    t("ol.format.filter.LessThan", Bn);
    t("ol.format.filter.LessThanOrEqualTo", Cn);
    t("ol.format.filter.Not", Dn);
    t("ol.format.filter.NotEqualTo", En);
    t("ol.format.filter.Or", Fn);
    t("ol.format.filter.Spatial", wn);
    t("ol.format.filter.Within", Gn);
    t("ol.events.condition.altKeyOnly", function (a) {
        a = a.originalEvent;
        return a.altKey && !(a.metaKey || a.ctrlKey) && !a.shiftKey
    });
    t("ol.events.condition.altShiftKeysOnly", Dg);
    t("ol.events.condition.always", gc);
    t("ol.events.condition.click", function (a) {
        return a.type == $f
    });
    t("ol.events.condition.never", hc);
    t("ol.events.condition.pointerMove", Fg);
    t("ol.events.condition.singleClick", Gg);
    t("ol.events.condition.doubleClick", function (a) {
        return a.type == ag
    });
    t("ol.events.condition.noModifierKeys", Hg);
    t("ol.events.condition.platformModifierKeyOnly", function (a) {
        a = a.originalEvent;
        return !a.altKey && (jf ? a.metaKey : a.ctrlKey) && !a.shiftKey
    });
    t("ol.events.condition.shiftKeyOnly", Ig);
    t("ol.events.condition.targetNotEditable", Jg);
    t("ol.events.condition.mouseOnly", Kg);
    t("ol.events.condition.primaryAction", Lg);
    La.prototype.type = La.prototype.type;
    La.prototype.target = La.prototype.target;
    La.prototype.preventDefault = La.prototype.preventDefault;
    La.prototype.stopPropagation = La.prototype.stopPropagation;
    t("ol.control.Attribution", Le);
    t("ol.control.Attribution.render", Me);
    Le.prototype.getCollapsible = Le.prototype.Ol;
    Le.prototype.setCollapsible = Le.prototype.Rl;
    Le.prototype.setCollapsed = Le.prototype.Ql;
    Le.prototype.getCollapsed = Le.prototype.Nl;
    t("ol.control.Control", Ke);
    Ke.prototype.getMap = Ke.prototype.i;
    Ke.prototype.setMap = Ke.prototype.setMap;
    Ke.prototype.setTarget = Ke.prototype.c;
    t("ol.control.FullScreen", Oe);
    t("ol.control.defaults", We);
    t("ol.control.MousePosition", Xe);
    t("ol.control.MousePosition.render", Ye);
    Xe.prototype.getCoordinateFormat = Xe.prototype.wg;
    Xe.prototype.getProjection = Xe.prototype.Zg;
    Xe.prototype.setCoordinateFormat = Xe.prototype.Uh;
    Xe.prototype.setProjection = Xe.prototype.$g;
    t("ol.control.OverviewMap", Xl);
    t("ol.control.OverviewMap.render", Yl);
    Xl.prototype.getCollapsible = Xl.prototype.Ul;
    Xl.prototype.setCollapsible = Xl.prototype.Xl;
    Xl.prototype.setCollapsed = Xl.prototype.Wl;
    Xl.prototype.getCollapsed = Xl.prototype.Tl;
    Xl.prototype.getOverviewMap = Xl.prototype.ck;
    t("ol.control.Rotate", Te);
    t("ol.control.Rotate.render", Ue);
    t("ol.control.ScaleLine", bm);
    bm.prototype.getUnits = bm.prototype.yb;
    t("ol.control.ScaleLine.render", cm);
    bm.prototype.setUnits = bm.prototype.G;
    t("ol.control.Zoom", Ve);
    t("ol.control.ZoomSlider", lm);
    t("ol.control.ZoomSlider.render", nm);
    t("ol.control.ZoomToExtent", qm);
    Ta.prototype.changed = Ta.prototype.v;
    Ta.prototype.dispatchEvent = Ta.prototype.b;
    Ta.prototype.getRevision = Ta.prototype.K;
    Ta.prototype.on = Ta.prototype.I;
    Ta.prototype.once = Ta.prototype.L;
    Ta.prototype.un = Ta.prototype.J;
    Ta.prototype.unByKey = Ta.prototype.M;
    pe.prototype.get = pe.prototype.get;
    pe.prototype.getKeys = pe.prototype.O;
    pe.prototype.getProperties = pe.prototype.N;
    pe.prototype.set = pe.prototype.set;
    pe.prototype.setProperties = pe.prototype.H;
    pe.prototype.unset = pe.prototype.R;
    pe.prototype.changed = pe.prototype.v;
    pe.prototype.dispatchEvent = pe.prototype.b;
    pe.prototype.getRevision = pe.prototype.K;
    pe.prototype.on = pe.prototype.I;
    pe.prototype.once = pe.prototype.L;
    pe.prototype.un = pe.prototype.J;
    pe.prototype.unByKey = pe.prototype.M;
    se.prototype.type = se.prototype.type;
    se.prototype.target = se.prototype.target;
    se.prototype.preventDefault = se.prototype.preventDefault;
    se.prototype.stopPropagation = se.prototype.stopPropagation;
    rm.prototype.get = rm.prototype.get;
    rm.prototype.getKeys = rm.prototype.O;
    rm.prototype.getProperties = rm.prototype.N;
    rm.prototype.set = rm.prototype.set;
    rm.prototype.setProperties = rm.prototype.H;
    rm.prototype.unset = rm.prototype.R;
    rm.prototype.changed = rm.prototype.v;
    rm.prototype.dispatchEvent = rm.prototype.b;
    rm.prototype.getRevision = rm.prototype.K;
    rm.prototype.on = rm.prototype.I;
    rm.prototype.once = rm.prototype.L;
    rm.prototype.un = rm.prototype.J;
    rm.prototype.unByKey = rm.prototype.M;
    I.prototype.get = I.prototype.get;
    I.prototype.getKeys = I.prototype.O;
    I.prototype.getProperties = I.prototype.N;
    I.prototype.set = I.prototype.set;
    I.prototype.setProperties = I.prototype.H;
    I.prototype.unset = I.prototype.R;
    I.prototype.changed = I.prototype.v;
    I.prototype.dispatchEvent = I.prototype.b;
    I.prototype.getRevision = I.prototype.K;
    I.prototype.on = I.prototype.I;
    I.prototype.once = I.prototype.L;
    I.prototype.un = I.prototype.J;
    I.prototype.unByKey = I.prototype.M;
    zt.prototype.get = zt.prototype.get;
    zt.prototype.getKeys = zt.prototype.O;
    zt.prototype.getProperties = zt.prototype.N;
    zt.prototype.set = zt.prototype.set;
    zt.prototype.setProperties = zt.prototype.H;
    zt.prototype.unset = zt.prototype.R;
    zt.prototype.changed = zt.prototype.v;
    zt.prototype.dispatchEvent = zt.prototype.b;
    zt.prototype.getRevision = zt.prototype.K;
    zt.prototype.on = zt.prototype.I;
    zt.prototype.once = zt.prototype.L;
    zt.prototype.un = zt.prototype.J;
    zt.prototype.unByKey = zt.prototype.M;
    Ut.prototype.getTileCoord = Ut.prototype.i;
    H.prototype.get = H.prototype.get;
    H.prototype.getKeys = H.prototype.O;
    H.prototype.getProperties = H.prototype.N;
    H.prototype.set = H.prototype.set;
    H.prototype.setProperties = H.prototype.H;
    H.prototype.unset = H.prototype.R;
    H.prototype.changed = H.prototype.v;
    H.prototype.dispatchEvent = H.prototype.b;
    H.prototype.getRevision = H.prototype.K;
    H.prototype.on = H.prototype.I;
    H.prototype.once = H.prototype.L;
    H.prototype.un = H.prototype.J;
    H.prototype.unByKey = H.prototype.M;
    Je.prototype.type = Je.prototype.type;
    Je.prototype.target = Je.prototype.target;
    Je.prototype.preventDefault = Je.prototype.preventDefault;
    Je.prototype.stopPropagation = Je.prototype.stopPropagation;
    Wf.prototype.map = Wf.prototype.map;
    Wf.prototype.frameState = Wf.prototype.frameState;
    Wf.prototype.type = Wf.prototype.type;
    Wf.prototype.target = Wf.prototype.target;
    Wf.prototype.preventDefault = Wf.prototype.preventDefault;
    Wf.prototype.stopPropagation = Wf.prototype.stopPropagation;
    Xf.prototype.originalEvent = Xf.prototype.originalEvent;
    Xf.prototype.pixel = Xf.prototype.pixel;
    Xf.prototype.coordinate = Xf.prototype.coordinate;
    Xf.prototype.dragging = Xf.prototype.dragging;
    Xf.prototype.preventDefault = Xf.prototype.preventDefault;
    Xf.prototype.stopPropagation = Xf.prototype.stopPropagation;
    Xf.prototype.map = Xf.prototype.map;
    Xf.prototype.frameState = Xf.prototype.frameState;
    Xf.prototype.type = Xf.prototype.type;
    Xf.prototype.target = Xf.prototype.target;
    Sa.prototype.type = Sa.prototype.type;
    Sa.prototype.target = Sa.prototype.target;
    Sa.prototype.preventDefault = Sa.prototype.preventDefault;
    Sa.prototype.stopPropagation = Sa.prototype.stopPropagation;
    Fl.prototype.get = Fl.prototype.get;
    Fl.prototype.getKeys = Fl.prototype.O;
    Fl.prototype.getProperties = Fl.prototype.N;
    Fl.prototype.set = Fl.prototype.set;
    Fl.prototype.setProperties = Fl.prototype.H;
    Fl.prototype.unset = Fl.prototype.R;
    Fl.prototype.changed = Fl.prototype.v;
    Fl.prototype.dispatchEvent = Fl.prototype.b;
    Fl.prototype.getRevision = Fl.prototype.K;
    Fl.prototype.on = Fl.prototype.I;
    Fl.prototype.once = Fl.prototype.L;
    Fl.prototype.un = Fl.prototype.J;
    Fl.prototype.unByKey = Fl.prototype.M;
    Vw.prototype.getTileCoord = Vw.prototype.i;
    Ad.prototype.get = Ad.prototype.get;
    Ad.prototype.getKeys = Ad.prototype.O;
    Ad.prototype.getProperties = Ad.prototype.N;
    Ad.prototype.set = Ad.prototype.set;
    Ad.prototype.setProperties = Ad.prototype.H;
    Ad.prototype.unset = Ad.prototype.R;
    Ad.prototype.changed = Ad.prototype.v;
    Ad.prototype.dispatchEvent = Ad.prototype.b;
    Ad.prototype.getRevision = Ad.prototype.K;
    Ad.prototype.on = Ad.prototype.I;
    Ad.prototype.once = Ad.prototype.L;
    Ad.prototype.un = Ad.prototype.J;
    Ad.prototype.unByKey = Ad.prototype.M;
    Yw.prototype.forEachTileCoord = Yw.prototype.sg;
    Yw.prototype.getMaxZoom = Yw.prototype.Cg;
    Yw.prototype.getMinZoom = Yw.prototype.Dg;
    Yw.prototype.getOrigin = Yw.prototype.Tc;
    Yw.prototype.getResolution = Yw.prototype.Ca;
    Yw.prototype.getResolutions = Yw.prototype.Bh;
    Yw.prototype.getTileCoordExtent = Yw.prototype.Ia;
    Yw.prototype.getTileCoordForCoordAndResolution = Yw.prototype.Zd;
    Yw.prototype.getTileCoordForCoordAndZ = Yw.prototype.rd;
    Yw.prototype.getTileSize = Yw.prototype.Na;
    Yw.prototype.getZForResolution = Yw.prototype.wc;
    vi.prototype.getOpacity = vi.prototype.qe;
    vi.prototype.getRotateWithView = vi.prototype.re;
    vi.prototype.getRotation = vi.prototype.se;
    vi.prototype.getScale = vi.prototype.te;
    vi.prototype.getSnapToPixel = vi.prototype.Yd;
    vi.prototype.setOpacity = vi.prototype.Rc;
    vi.prototype.setRotation = vi.prototype.ue;
    vi.prototype.setScale = vi.prototype.Sc;
    lp.prototype.getOpacity = lp.prototype.qe;
    lp.prototype.getRotateWithView = lp.prototype.re;
    lp.prototype.getRotation = lp.prototype.se;
    lp.prototype.getScale = lp.prototype.te;
    lp.prototype.getSnapToPixel = lp.prototype.Yd;
    lp.prototype.setOpacity = lp.prototype.Rc;
    lp.prototype.setRotation = lp.prototype.ue;
    lp.prototype.setScale = lp.prototype.Sc;
    jx.prototype.getOpacity = jx.prototype.qe;
    jx.prototype.getRotateWithView = jx.prototype.re;
    jx.prototype.getRotation = jx.prototype.se;
    jx.prototype.getScale = jx.prototype.te;
    jx.prototype.getSnapToPixel = jx.prototype.Yd;
    jx.prototype.setOpacity = jx.prototype.Rc;
    jx.prototype.setRotation = jx.prototype.ue;
    jx.prototype.setScale = jx.prototype.Sc;
    Wj.prototype.get = Wj.prototype.get;
    Wj.prototype.getKeys = Wj.prototype.O;
    Wj.prototype.getProperties = Wj.prototype.N;
    Wj.prototype.set = Wj.prototype.set;
    Wj.prototype.setProperties = Wj.prototype.H;
    Wj.prototype.unset = Wj.prototype.R;
    Wj.prototype.changed = Wj.prototype.v;
    Wj.prototype.dispatchEvent = Wj.prototype.b;
    Wj.prototype.getRevision = Wj.prototype.K;
    Wj.prototype.on = Wj.prototype.I;
    Wj.prototype.once = Wj.prototype.L;
    Wj.prototype.un = Wj.prototype.J;
    Wj.prototype.unByKey = Wj.prototype.M;
    Xv.prototype.getAttributions = Xv.prototype.va;
    Xv.prototype.getLogo = Xv.prototype.ua;
    Xv.prototype.getProjection = Xv.prototype.wa;
    Xv.prototype.getState = Xv.prototype.U;
    Xv.prototype.refresh = Xv.prototype.ta;
    Xv.prototype.setAttributions = Xv.prototype.qa;
    Xv.prototype.get = Xv.prototype.get;
    Xv.prototype.getKeys = Xv.prototype.O;
    Xv.prototype.getProperties = Xv.prototype.N;
    Xv.prototype.set = Xv.prototype.set;
    Xv.prototype.setProperties = Xv.prototype.H;
    Xv.prototype.unset = Xv.prototype.R;
    Xv.prototype.changed = Xv.prototype.v;
    Xv.prototype.dispatchEvent = Xv.prototype.b;
    Xv.prototype.getRevision = Xv.prototype.K;
    Xv.prototype.on = Xv.prototype.I;
    Xv.prototype.once = Xv.prototype.L;
    Xv.prototype.un = Xv.prototype.J;
    Xv.prototype.unByKey = Xv.prototype.M;
    aw.prototype.getTileGrid = aw.prototype.Ra;
    aw.prototype.refresh = aw.prototype.ta;
    aw.prototype.getAttributions = aw.prototype.va;
    aw.prototype.getLogo = aw.prototype.ua;
    aw.prototype.getProjection = aw.prototype.wa;
    aw.prototype.getState = aw.prototype.U;
    aw.prototype.setAttributions = aw.prototype.qa;
    aw.prototype.get = aw.prototype.get;
    aw.prototype.getKeys = aw.prototype.O;
    aw.prototype.getProperties = aw.prototype.N;
    aw.prototype.set = aw.prototype.set;
    aw.prototype.setProperties = aw.prototype.H;
    aw.prototype.unset = aw.prototype.R;
    aw.prototype.changed = aw.prototype.v;
    aw.prototype.dispatchEvent = aw.prototype.b;
    aw.prototype.getRevision = aw.prototype.K;
    aw.prototype.on = aw.prototype.I;
    aw.prototype.once = aw.prototype.L;
    aw.prototype.un = aw.prototype.J;
    aw.prototype.unByKey = aw.prototype.M;
    X.prototype.getTileLoadFunction = X.prototype.fb;
    X.prototype.getTileUrlFunction = X.prototype.hb;
    X.prototype.getUrls = X.prototype.ib;
    X.prototype.setTileLoadFunction = X.prototype.nb;
    X.prototype.setTileUrlFunction = X.prototype.Ta;
    X.prototype.setUrl = X.prototype.Ya;
    X.prototype.setUrls = X.prototype.Ua;
    X.prototype.getTileGrid = X.prototype.Ra;
    X.prototype.refresh = X.prototype.ta;
    X.prototype.getAttributions = X.prototype.va;
    X.prototype.getLogo = X.prototype.ua;
    X.prototype.getProjection = X.prototype.wa;
    X.prototype.getState = X.prototype.U;
    X.prototype.setAttributions = X.prototype.qa;
    X.prototype.get = X.prototype.get;
    X.prototype.getKeys = X.prototype.O;
    X.prototype.getProperties = X.prototype.N;
    X.prototype.set = X.prototype.set;
    X.prototype.setProperties = X.prototype.H;
    X.prototype.unset = X.prototype.R;
    X.prototype.changed = X.prototype.v;
    X.prototype.dispatchEvent = X.prototype.b;
    X.prototype.getRevision = X.prototype.K;
    X.prototype.on = X.prototype.I;
    X.prototype.once = X.prototype.L;
    X.prototype.un = X.prototype.J;
    X.prototype.unByKey = X.prototype.M;
    ew.prototype.setRenderReprojectionEdges = ew.prototype.Bb;
    ew.prototype.setTileGridForProjection = ew.prototype.Cb;
    ew.prototype.getTileLoadFunction = ew.prototype.fb;
    ew.prototype.getTileUrlFunction = ew.prototype.hb;
    ew.prototype.getUrls = ew.prototype.ib;
    ew.prototype.setTileLoadFunction = ew.prototype.nb;
    ew.prototype.setTileUrlFunction = ew.prototype.Ta;
    ew.prototype.setUrl = ew.prototype.Ya;
    ew.prototype.setUrls = ew.prototype.Ua;
    ew.prototype.getTileGrid = ew.prototype.Ra;
    ew.prototype.refresh = ew.prototype.ta;
    ew.prototype.getAttributions = ew.prototype.va;
    ew.prototype.getLogo = ew.prototype.ua;
    ew.prototype.getProjection = ew.prototype.wa;
    ew.prototype.getState = ew.prototype.U;
    ew.prototype.setAttributions = ew.prototype.qa;
    ew.prototype.get = ew.prototype.get;
    ew.prototype.getKeys = ew.prototype.O;
    ew.prototype.getProperties = ew.prototype.N;
    ew.prototype.set = ew.prototype.set;
    ew.prototype.setProperties = ew.prototype.H;
    ew.prototype.unset = ew.prototype.R;
    ew.prototype.changed = ew.prototype.v;
    ew.prototype.dispatchEvent = ew.prototype.b;
    ew.prototype.getRevision = ew.prototype.K;
    ew.prototype.on = ew.prototype.I;
    ew.prototype.once = ew.prototype.L;
    ew.prototype.un = ew.prototype.J;
    ew.prototype.unByKey = ew.prototype.M;
    gw.prototype.setRenderReprojectionEdges = gw.prototype.Bb;
    gw.prototype.setTileGridForProjection = gw.prototype.Cb;
    gw.prototype.getTileLoadFunction = gw.prototype.fb;
    gw.prototype.getTileUrlFunction = gw.prototype.hb;
    gw.prototype.getUrls = gw.prototype.ib;
    gw.prototype.setTileLoadFunction = gw.prototype.nb;
    gw.prototype.setTileUrlFunction = gw.prototype.Ta;
    gw.prototype.setUrl = gw.prototype.Ya;
    gw.prototype.setUrls = gw.prototype.Ua;
    gw.prototype.getTileGrid = gw.prototype.Ra;
    gw.prototype.refresh = gw.prototype.ta;
    gw.prototype.getAttributions = gw.prototype.va;
    gw.prototype.getLogo = gw.prototype.ua;
    gw.prototype.getProjection = gw.prototype.wa;
    gw.prototype.getState = gw.prototype.U;
    gw.prototype.setAttributions = gw.prototype.qa;
    gw.prototype.get = gw.prototype.get;
    gw.prototype.getKeys = gw.prototype.O;
    gw.prototype.getProperties = gw.prototype.N;
    gw.prototype.set = gw.prototype.set;
    gw.prototype.setProperties = gw.prototype.H;
    gw.prototype.unset = gw.prototype.R;
    gw.prototype.changed = gw.prototype.v;
    gw.prototype.dispatchEvent = gw.prototype.b;
    gw.prototype.getRevision = gw.prototype.K;
    gw.prototype.on = gw.prototype.I;
    gw.prototype.once = gw.prototype.L;
    gw.prototype.un = gw.prototype.J;
    gw.prototype.unByKey = gw.prototype.M;
    hw.prototype.setRenderReprojectionEdges = hw.prototype.Bb;
    hw.prototype.setTileGridForProjection = hw.prototype.Cb;
    hw.prototype.getTileLoadFunction = hw.prototype.fb;
    hw.prototype.getTileUrlFunction = hw.prototype.hb;
    hw.prototype.getUrls = hw.prototype.ib;
    hw.prototype.setTileLoadFunction = hw.prototype.nb;
    hw.prototype.setTileUrlFunction = hw.prototype.Ta;
    hw.prototype.setUrl = hw.prototype.Ya;
    hw.prototype.setUrls = hw.prototype.Ua;
    hw.prototype.getTileGrid = hw.prototype.Ra;
    hw.prototype.refresh = hw.prototype.ta;
    hw.prototype.getAttributions = hw.prototype.va;
    hw.prototype.getLogo = hw.prototype.ua;
    hw.prototype.getProjection = hw.prototype.wa;
    hw.prototype.getState = hw.prototype.U;
    hw.prototype.setAttributions = hw.prototype.qa;
    hw.prototype.get = hw.prototype.get;
    hw.prototype.getKeys = hw.prototype.O;
    hw.prototype.getProperties = hw.prototype.N;
    hw.prototype.set = hw.prototype.set;
    hw.prototype.setProperties = hw.prototype.H;
    hw.prototype.unset = hw.prototype.R;
    hw.prototype.changed = hw.prototype.v;
    hw.prototype.dispatchEvent = hw.prototype.b;
    hw.prototype.getRevision = hw.prototype.K;
    hw.prototype.on = hw.prototype.I;
    hw.prototype.once = hw.prototype.L;
    hw.prototype.un = hw.prototype.J;
    hw.prototype.unByKey = hw.prototype.M;
    V.prototype.getAttributions = V.prototype.va;
    V.prototype.getLogo = V.prototype.ua;
    V.prototype.getProjection = V.prototype.wa;
    V.prototype.getState = V.prototype.U;
    V.prototype.refresh = V.prototype.ta;
    V.prototype.setAttributions = V.prototype.qa;
    V.prototype.get = V.prototype.get;
    V.prototype.getKeys = V.prototype.O;
    V.prototype.getProperties = V.prototype.N;
    V.prototype.set = V.prototype.set;
    V.prototype.setProperties = V.prototype.H;
    V.prototype.unset = V.prototype.R;
    V.prototype.changed = V.prototype.v;
    V.prototype.dispatchEvent = V.prototype.b;
    V.prototype.getRevision = V.prototype.K;
    V.prototype.on = V.prototype.I;
    V.prototype.once = V.prototype.L;
    V.prototype.un = V.prototype.J;
    V.prototype.unByKey = V.prototype.M;
    Y.prototype.addFeature = Y.prototype.cb;
    Y.prototype.addFeatures = Y.prototype.Ic;
    Y.prototype.clear = Y.prototype.clear;
    Y.prototype.forEachFeature = Y.prototype.qg;
    Y.prototype.forEachFeatureInExtent = Y.prototype.Kb;
    Y.prototype.forEachFeatureIntersectingExtent = Y.prototype.rg;
    Y.prototype.getFeaturesCollection = Y.prototype.zg;
    Y.prototype.getFeatures = Y.prototype.oe;
    Y.prototype.getFeaturesAtCoordinate = Y.prototype.yg;
    Y.prototype.getFeaturesInExtent = Y.prototype.bf;
    Y.prototype.getClosestFeatureToCoordinate = Y.prototype.ug;
    Y.prototype.getExtent = Y.prototype.D;
    Y.prototype.getFeatureById = Y.prototype.xg;
    Y.prototype.getFormat = Y.prototype.sh;
    Y.prototype.getUrl = Y.prototype.th;
    Y.prototype.removeFeature = Y.prototype.mb;
    Y.prototype.getAttributions = Y.prototype.va;
    Y.prototype.getLogo = Y.prototype.ua;
    Y.prototype.getProjection = Y.prototype.wa;
    Y.prototype.getState = Y.prototype.U;
    Y.prototype.refresh = Y.prototype.ta;
    Y.prototype.setAttributions = Y.prototype.qa;
    Y.prototype.get = Y.prototype.get;
    Y.prototype.getKeys = Y.prototype.O;
    Y.prototype.getProperties = Y.prototype.N;
    Y.prototype.set = Y.prototype.set;
    Y.prototype.setProperties = Y.prototype.H;
    Y.prototype.unset = Y.prototype.R;
    Y.prototype.changed = Y.prototype.v;
    Y.prototype.dispatchEvent = Y.prototype.b;
    Y.prototype.getRevision = Y.prototype.K;
    Y.prototype.on = Y.prototype.I;
    Y.prototype.once = Y.prototype.L;
    Y.prototype.un = Y.prototype.J;
    Y.prototype.unByKey = Y.prototype.M;
    Zj.prototype.getAttributions = Zj.prototype.va;
    Zj.prototype.getLogo = Zj.prototype.ua;
    Zj.prototype.getProjection = Zj.prototype.wa;
    Zj.prototype.getState = Zj.prototype.U;
    Zj.prototype.refresh = Zj.prototype.ta;
    Zj.prototype.setAttributions = Zj.prototype.qa;
    Zj.prototype.get = Zj.prototype.get;
    Zj.prototype.getKeys = Zj.prototype.O;
    Zj.prototype.getProperties = Zj.prototype.N;
    Zj.prototype.set = Zj.prototype.set;
    Zj.prototype.setProperties = Zj.prototype.H;
    Zj.prototype.unset = Zj.prototype.R;
    Zj.prototype.changed = Zj.prototype.v;
    Zj.prototype.dispatchEvent = Zj.prototype.b;
    Zj.prototype.getRevision = Zj.prototype.K;
    Zj.prototype.on = Zj.prototype.I;
    Zj.prototype.once = Zj.prototype.L;
    Zj.prototype.un = Zj.prototype.J;
    Zj.prototype.unByKey = Zj.prototype.M;
    bk.prototype.type = bk.prototype.type;
    bk.prototype.target = bk.prototype.target;
    bk.prototype.preventDefault = bk.prototype.preventDefault;
    bk.prototype.stopPropagation = bk.prototype.stopPropagation;
    nw.prototype.getAttributions = nw.prototype.va;
    nw.prototype.getLogo = nw.prototype.ua;
    nw.prototype.getProjection = nw.prototype.wa;
    nw.prototype.getState = nw.prototype.U;
    nw.prototype.refresh = nw.prototype.ta;
    nw.prototype.setAttributions = nw.prototype.qa;
    nw.prototype.get = nw.prototype.get;
    nw.prototype.getKeys = nw.prototype.O;
    nw.prototype.getProperties = nw.prototype.N;
    nw.prototype.set = nw.prototype.set;
    nw.prototype.setProperties = nw.prototype.H;
    nw.prototype.unset = nw.prototype.R;
    nw.prototype.changed = nw.prototype.v;
    nw.prototype.dispatchEvent = nw.prototype.b;
    nw.prototype.getRevision = nw.prototype.K;
    nw.prototype.on = nw.prototype.I;
    nw.prototype.once = nw.prototype.L;
    nw.prototype.un = nw.prototype.J;
    nw.prototype.unByKey = nw.prototype.M;
    gk.prototype.getAttributions = gk.prototype.va;
    gk.prototype.getLogo = gk.prototype.ua;
    gk.prototype.getProjection = gk.prototype.wa;
    gk.prototype.getState = gk.prototype.U;
    gk.prototype.refresh = gk.prototype.ta;
    gk.prototype.setAttributions = gk.prototype.qa;
    gk.prototype.get = gk.prototype.get;
    gk.prototype.getKeys = gk.prototype.O;
    gk.prototype.getProperties = gk.prototype.N;
    gk.prototype.set = gk.prototype.set;
    gk.prototype.setProperties = gk.prototype.H;
    gk.prototype.unset = gk.prototype.R;
    gk.prototype.changed = gk.prototype.v;
    gk.prototype.dispatchEvent = gk.prototype.b;
    gk.prototype.getRevision = gk.prototype.K;
    gk.prototype.on = gk.prototype.I;
    gk.prototype.once = gk.prototype.L;
    gk.prototype.un = gk.prototype.J;
    gk.prototype.unByKey = gk.prototype.M;
    ow.prototype.getAttributions = ow.prototype.va;
    ow.prototype.getLogo = ow.prototype.ua;
    ow.prototype.getProjection = ow.prototype.wa;
    ow.prototype.getState = ow.prototype.U;
    ow.prototype.refresh = ow.prototype.ta;
    ow.prototype.setAttributions = ow.prototype.qa;
    ow.prototype.get = ow.prototype.get;
    ow.prototype.getKeys = ow.prototype.O;
    ow.prototype.getProperties = ow.prototype.N;
    ow.prototype.set = ow.prototype.set;
    ow.prototype.setProperties = ow.prototype.H;
    ow.prototype.unset = ow.prototype.R;
    ow.prototype.changed = ow.prototype.v;
    ow.prototype.dispatchEvent = ow.prototype.b;
    ow.prototype.getRevision = ow.prototype.K;
    ow.prototype.on = ow.prototype.I;
    ow.prototype.once = ow.prototype.L;
    ow.prototype.un = ow.prototype.J;
    ow.prototype.unByKey = ow.prototype.M;
    pw.prototype.getAttributions = pw.prototype.va;
    pw.prototype.getLogo = pw.prototype.ua;
    pw.prototype.getProjection = pw.prototype.wa;
    pw.prototype.getState = pw.prototype.U;
    pw.prototype.refresh = pw.prototype.ta;
    pw.prototype.setAttributions = pw.prototype.qa;
    pw.prototype.get = pw.prototype.get;
    pw.prototype.getKeys = pw.prototype.O;
    pw.prototype.getProperties = pw.prototype.N;
    pw.prototype.set = pw.prototype.set;
    pw.prototype.setProperties = pw.prototype.H;
    pw.prototype.unset = pw.prototype.R;
    pw.prototype.changed = pw.prototype.v;
    pw.prototype.dispatchEvent = pw.prototype.b;
    pw.prototype.getRevision = pw.prototype.K;
    pw.prototype.on = pw.prototype.I;
    pw.prototype.once = pw.prototype.L;
    pw.prototype.un = pw.prototype.J;
    pw.prototype.unByKey = pw.prototype.M;
    hk.prototype.getAttributions = hk.prototype.va;
    hk.prototype.getLogo = hk.prototype.ua;
    hk.prototype.getProjection = hk.prototype.wa;
    hk.prototype.getState = hk.prototype.U;
    hk.prototype.refresh = hk.prototype.ta;
    hk.prototype.setAttributions = hk.prototype.qa;
    hk.prototype.get = hk.prototype.get;
    hk.prototype.getKeys = hk.prototype.O;
    hk.prototype.getProperties = hk.prototype.N;
    hk.prototype.set = hk.prototype.set;
    hk.prototype.setProperties = hk.prototype.H;
    hk.prototype.unset = hk.prototype.R;
    hk.prototype.changed = hk.prototype.v;
    hk.prototype.dispatchEvent = hk.prototype.b;
    hk.prototype.getRevision = hk.prototype.K;
    hk.prototype.on = hk.prototype.I;
    hk.prototype.once = hk.prototype.L;
    hk.prototype.un = hk.prototype.J;
    hk.prototype.unByKey = hk.prototype.M;
    qw.prototype.getAttributions = qw.prototype.va;
    qw.prototype.getLogo = qw.prototype.ua;
    qw.prototype.getProjection = qw.prototype.wa;
    qw.prototype.getState = qw.prototype.U;
    qw.prototype.refresh = qw.prototype.ta;
    qw.prototype.setAttributions = qw.prototype.qa;
    qw.prototype.get = qw.prototype.get;
    qw.prototype.getKeys = qw.prototype.O;
    qw.prototype.getProperties = qw.prototype.N;
    qw.prototype.set = qw.prototype.set;
    qw.prototype.setProperties = qw.prototype.H;
    qw.prototype.unset = qw.prototype.R;
    qw.prototype.changed = qw.prototype.v;
    qw.prototype.dispatchEvent = qw.prototype.b;
    qw.prototype.getRevision = qw.prototype.K;
    qw.prototype.on = qw.prototype.I;
    qw.prototype.once = qw.prototype.L;
    qw.prototype.un = qw.prototype.J;
    qw.prototype.unByKey = qw.prototype.M;
    uw.prototype.setRenderReprojectionEdges = uw.prototype.Bb;
    uw.prototype.setTileGridForProjection = uw.prototype.Cb;
    uw.prototype.getTileLoadFunction = uw.prototype.fb;
    uw.prototype.getTileUrlFunction = uw.prototype.hb;
    uw.prototype.getUrls = uw.prototype.ib;
    uw.prototype.setTileLoadFunction = uw.prototype.nb;
    uw.prototype.setTileUrlFunction = uw.prototype.Ta;
    uw.prototype.setUrl = uw.prototype.Ya;
    uw.prototype.setUrls = uw.prototype.Ua;
    uw.prototype.getTileGrid = uw.prototype.Ra;
    uw.prototype.refresh = uw.prototype.ta;
    uw.prototype.getAttributions = uw.prototype.va;
    uw.prototype.getLogo = uw.prototype.ua;
    uw.prototype.getProjection = uw.prototype.wa;
    uw.prototype.getState = uw.prototype.U;
    uw.prototype.setAttributions = uw.prototype.qa;
    uw.prototype.get = uw.prototype.get;
    uw.prototype.getKeys = uw.prototype.O;
    uw.prototype.getProperties = uw.prototype.N;
    uw.prototype.set = uw.prototype.set;
    uw.prototype.setProperties = uw.prototype.H;
    uw.prototype.unset = uw.prototype.R;
    uw.prototype.changed = uw.prototype.v;
    uw.prototype.dispatchEvent = uw.prototype.b;
    uw.prototype.getRevision = uw.prototype.K;
    uw.prototype.on = uw.prototype.I;
    uw.prototype.once = uw.prototype.L;
    uw.prototype.un = uw.prototype.J;
    uw.prototype.unByKey = uw.prototype.M;
    ww.prototype.getAttributions = ww.prototype.va;
    ww.prototype.getLogo = ww.prototype.ua;
    ww.prototype.getProjection = ww.prototype.wa;
    ww.prototype.getState = ww.prototype.U;
    ww.prototype.refresh = ww.prototype.ta;
    ww.prototype.setAttributions = ww.prototype.qa;
    ww.prototype.get = ww.prototype.get;
    ww.prototype.getKeys = ww.prototype.O;
    ww.prototype.getProperties = ww.prototype.N;
    ww.prototype.set = ww.prototype.set;
    ww.prototype.setProperties = ww.prototype.H;
    ww.prototype.unset = ww.prototype.R;
    ww.prototype.changed = ww.prototype.v;
    ww.prototype.dispatchEvent = ww.prototype.b;
    ww.prototype.getRevision = ww.prototype.K;
    ww.prototype.on = ww.prototype.I;
    ww.prototype.once = ww.prototype.L;
    ww.prototype.un = ww.prototype.J;
    ww.prototype.unByKey = ww.prototype.M;
    Bw.prototype.type = Bw.prototype.type;
    Bw.prototype.target = Bw.prototype.target;
    Bw.prototype.preventDefault = Bw.prototype.preventDefault;
    Bw.prototype.stopPropagation = Bw.prototype.stopPropagation;
    Ew.prototype.setRenderReprojectionEdges = Ew.prototype.Bb;
    Ew.prototype.setTileGridForProjection = Ew.prototype.Cb;
    Ew.prototype.getTileLoadFunction = Ew.prototype.fb;
    Ew.prototype.getTileUrlFunction = Ew.prototype.hb;
    Ew.prototype.getUrls = Ew.prototype.ib;
    Ew.prototype.setTileLoadFunction = Ew.prototype.nb;
    Ew.prototype.setTileUrlFunction = Ew.prototype.Ta;
    Ew.prototype.setUrl = Ew.prototype.Ya;
    Ew.prototype.setUrls = Ew.prototype.Ua;
    Ew.prototype.getTileGrid = Ew.prototype.Ra;
    Ew.prototype.refresh = Ew.prototype.ta;
    Ew.prototype.getAttributions = Ew.prototype.va;
    Ew.prototype.getLogo = Ew.prototype.ua;
    Ew.prototype.getProjection = Ew.prototype.wa;
    Ew.prototype.getState = Ew.prototype.U;
    Ew.prototype.setAttributions = Ew.prototype.qa;
    Ew.prototype.get = Ew.prototype.get;
    Ew.prototype.getKeys = Ew.prototype.O;
    Ew.prototype.getProperties = Ew.prototype.N;
    Ew.prototype.set = Ew.prototype.set;
    Ew.prototype.setProperties = Ew.prototype.H;
    Ew.prototype.unset = Ew.prototype.R;
    Ew.prototype.changed = Ew.prototype.v;
    Ew.prototype.dispatchEvent = Ew.prototype.b;
    Ew.prototype.getRevision = Ew.prototype.K;
    Ew.prototype.on = Ew.prototype.I;
    Ew.prototype.once = Ew.prototype.L;
    Ew.prototype.un = Ew.prototype.J;
    Ew.prototype.unByKey = Ew.prototype.M;
    $v.prototype.type = $v.prototype.type;
    $v.prototype.target = $v.prototype.target;
    $v.prototype.preventDefault = $v.prototype.preventDefault;
    $v.prototype.stopPropagation = $v.prototype.stopPropagation;
    Iw.prototype.setRenderReprojectionEdges = Iw.prototype.Bb;
    Iw.prototype.setTileGridForProjection = Iw.prototype.Cb;
    Iw.prototype.getTileLoadFunction = Iw.prototype.fb;
    Iw.prototype.getTileUrlFunction = Iw.prototype.hb;
    Iw.prototype.getUrls = Iw.prototype.ib;
    Iw.prototype.setTileLoadFunction = Iw.prototype.nb;
    Iw.prototype.setTileUrlFunction = Iw.prototype.Ta;
    Iw.prototype.setUrl = Iw.prototype.Ya;
    Iw.prototype.setUrls = Iw.prototype.Ua;
    Iw.prototype.getTileGrid = Iw.prototype.Ra;
    Iw.prototype.refresh = Iw.prototype.ta;
    Iw.prototype.getAttributions = Iw.prototype.va;
    Iw.prototype.getLogo = Iw.prototype.ua;
    Iw.prototype.getProjection = Iw.prototype.wa;
    Iw.prototype.getState = Iw.prototype.U;
    Iw.prototype.setAttributions = Iw.prototype.qa;
    Iw.prototype.get = Iw.prototype.get;
    Iw.prototype.getKeys = Iw.prototype.O;
    Iw.prototype.getProperties = Iw.prototype.N;
    Iw.prototype.set = Iw.prototype.set;
    Iw.prototype.setProperties = Iw.prototype.H;
    Iw.prototype.unset = Iw.prototype.R;
    Iw.prototype.changed = Iw.prototype.v;
    Iw.prototype.dispatchEvent = Iw.prototype.b;
    Iw.prototype.getRevision = Iw.prototype.K;
    Iw.prototype.on = Iw.prototype.I;
    Iw.prototype.once = Iw.prototype.L;
    Iw.prototype.un = Iw.prototype.J;
    Iw.prototype.unByKey = Iw.prototype.M;
    Jw.prototype.getTileGrid = Jw.prototype.Ra;
    Jw.prototype.refresh = Jw.prototype.ta;
    Jw.prototype.getAttributions = Jw.prototype.va;
    Jw.prototype.getLogo = Jw.prototype.ua;
    Jw.prototype.getProjection = Jw.prototype.wa;
    Jw.prototype.getState = Jw.prototype.U;
    Jw.prototype.setAttributions = Jw.prototype.qa;
    Jw.prototype.get = Jw.prototype.get;
    Jw.prototype.getKeys = Jw.prototype.O;
    Jw.prototype.getProperties = Jw.prototype.N;
    Jw.prototype.set = Jw.prototype.set;
    Jw.prototype.setProperties = Jw.prototype.H;
    Jw.prototype.unset = Jw.prototype.R;
    Jw.prototype.changed = Jw.prototype.v;
    Jw.prototype.dispatchEvent = Jw.prototype.b;
    Jw.prototype.getRevision = Jw.prototype.K;
    Jw.prototype.on = Jw.prototype.I;
    Jw.prototype.once = Jw.prototype.L;
    Jw.prototype.un = Jw.prototype.J;
    Jw.prototype.unByKey = Jw.prototype.M;
    Lw.prototype.setRenderReprojectionEdges = Lw.prototype.Bb;
    Lw.prototype.setTileGridForProjection = Lw.prototype.Cb;
    Lw.prototype.getTileLoadFunction = Lw.prototype.fb;
    Lw.prototype.getTileUrlFunction = Lw.prototype.hb;
    Lw.prototype.getUrls = Lw.prototype.ib;
    Lw.prototype.setTileLoadFunction = Lw.prototype.nb;
    Lw.prototype.setTileUrlFunction = Lw.prototype.Ta;
    Lw.prototype.setUrl = Lw.prototype.Ya;
    Lw.prototype.setUrls = Lw.prototype.Ua;
    Lw.prototype.getTileGrid = Lw.prototype.Ra;
    Lw.prototype.refresh = Lw.prototype.ta;
    Lw.prototype.getAttributions = Lw.prototype.va;
    Lw.prototype.getLogo = Lw.prototype.ua;
    Lw.prototype.getProjection = Lw.prototype.wa;
    Lw.prototype.getState = Lw.prototype.U;
    Lw.prototype.setAttributions = Lw.prototype.qa;
    Lw.prototype.get = Lw.prototype.get;
    Lw.prototype.getKeys = Lw.prototype.O;
    Lw.prototype.getProperties = Lw.prototype.N;
    Lw.prototype.set = Lw.prototype.set;
    Lw.prototype.setProperties = Lw.prototype.H;
    Lw.prototype.unset = Lw.prototype.R;
    Lw.prototype.changed = Lw.prototype.v;
    Lw.prototype.dispatchEvent = Lw.prototype.b;
    Lw.prototype.getRevision = Lw.prototype.K;
    Lw.prototype.on = Lw.prototype.I;
    Lw.prototype.once = Lw.prototype.L;
    Lw.prototype.un = Lw.prototype.J;
    Lw.prototype.unByKey = Lw.prototype.M;
    Mw.prototype.getTileGrid = Mw.prototype.Ra;
    Mw.prototype.refresh = Mw.prototype.ta;
    Mw.prototype.getAttributions = Mw.prototype.va;
    Mw.prototype.getLogo = Mw.prototype.ua;
    Mw.prototype.getProjection = Mw.prototype.wa;
    Mw.prototype.getState = Mw.prototype.U;
    Mw.prototype.setAttributions = Mw.prototype.qa;
    Mw.prototype.get = Mw.prototype.get;
    Mw.prototype.getKeys = Mw.prototype.O;
    Mw.prototype.getProperties = Mw.prototype.N;
    Mw.prototype.set = Mw.prototype.set;
    Mw.prototype.setProperties = Mw.prototype.H;
    Mw.prototype.unset = Mw.prototype.R;
    Mw.prototype.changed = Mw.prototype.v;
    Mw.prototype.dispatchEvent = Mw.prototype.b;
    Mw.prototype.getRevision = Mw.prototype.K;
    Mw.prototype.on = Mw.prototype.I;
    Mw.prototype.once = Mw.prototype.L;
    Mw.prototype.un = Mw.prototype.J;
    Mw.prototype.unByKey = Mw.prototype.M;
    Qw.prototype.setRenderReprojectionEdges = Qw.prototype.Bb;
    Qw.prototype.setTileGridForProjection = Qw.prototype.Cb;
    Qw.prototype.getTileLoadFunction = Qw.prototype.fb;
    Qw.prototype.getTileUrlFunction = Qw.prototype.hb;
    Qw.prototype.getUrls = Qw.prototype.ib;
    Qw.prototype.setTileLoadFunction = Qw.prototype.nb;
    Qw.prototype.setTileUrlFunction = Qw.prototype.Ta;
    Qw.prototype.setUrl = Qw.prototype.Ya;
    Qw.prototype.setUrls = Qw.prototype.Ua;
    Qw.prototype.getTileGrid = Qw.prototype.Ra;
    Qw.prototype.refresh = Qw.prototype.ta;
    Qw.prototype.getAttributions = Qw.prototype.va;
    Qw.prototype.getLogo = Qw.prototype.ua;
    Qw.prototype.getProjection = Qw.prototype.wa;
    Qw.prototype.getState = Qw.prototype.U;
    Qw.prototype.setAttributions = Qw.prototype.qa;
    Qw.prototype.get = Qw.prototype.get;
    Qw.prototype.getKeys = Qw.prototype.O;
    Qw.prototype.getProperties = Qw.prototype.N;
    Qw.prototype.set = Qw.prototype.set;
    Qw.prototype.setProperties = Qw.prototype.H;
    Qw.prototype.unset = Qw.prototype.R;
    Qw.prototype.changed = Qw.prototype.v;
    Qw.prototype.dispatchEvent = Qw.prototype.b;
    Qw.prototype.getRevision = Qw.prototype.K;
    Qw.prototype.on = Qw.prototype.I;
    Qw.prototype.once = Qw.prototype.L;
    Qw.prototype.un = Qw.prototype.J;
    Qw.prototype.unByKey = Qw.prototype.M;
    pu.prototype.type = pu.prototype.type;
    pu.prototype.target = pu.prototype.target;
    pu.prototype.preventDefault = pu.prototype.preventDefault;
    pu.prototype.stopPropagation = pu.prototype.stopPropagation;
    Ww.prototype.getTileLoadFunction = Ww.prototype.fb;
    Ww.prototype.getTileUrlFunction = Ww.prototype.hb;
    Ww.prototype.getUrls = Ww.prototype.ib;
    Ww.prototype.setTileLoadFunction = Ww.prototype.nb;
    Ww.prototype.setTileUrlFunction = Ww.prototype.Ta;
    Ww.prototype.setUrl = Ww.prototype.Ya;
    Ww.prototype.setUrls = Ww.prototype.Ua;
    Ww.prototype.getTileGrid = Ww.prototype.Ra;
    Ww.prototype.refresh = Ww.prototype.ta;
    Ww.prototype.getAttributions = Ww.prototype.va;
    Ww.prototype.getLogo = Ww.prototype.ua;
    Ww.prototype.getProjection = Ww.prototype.wa;
    Ww.prototype.getState = Ww.prototype.U;
    Ww.prototype.setAttributions = Ww.prototype.qa;
    Ww.prototype.get = Ww.prototype.get;
    Ww.prototype.getKeys = Ww.prototype.O;
    Ww.prototype.getProperties = Ww.prototype.N;
    Ww.prototype.set = Ww.prototype.set;
    Ww.prototype.setProperties = Ww.prototype.H;
    Ww.prototype.unset = Ww.prototype.R;
    Ww.prototype.changed = Ww.prototype.v;
    Ww.prototype.dispatchEvent = Ww.prototype.b;
    Ww.prototype.getRevision = Ww.prototype.K;
    Ww.prototype.on = Ww.prototype.I;
    Ww.prototype.once = Ww.prototype.L;
    Ww.prototype.un = Ww.prototype.J;
    Ww.prototype.unByKey = Ww.prototype.M;
    Z.prototype.setRenderReprojectionEdges = Z.prototype.Bb;
    Z.prototype.setTileGridForProjection = Z.prototype.Cb;
    Z.prototype.getTileLoadFunction = Z.prototype.fb;
    Z.prototype.getTileUrlFunction = Z.prototype.hb;
    Z.prototype.getUrls = Z.prototype.ib;
    Z.prototype.setTileLoadFunction = Z.prototype.nb;
    Z.prototype.setTileUrlFunction = Z.prototype.Ta;
    Z.prototype.setUrl = Z.prototype.Ya;
    Z.prototype.setUrls = Z.prototype.Ua;
    Z.prototype.getTileGrid = Z.prototype.Ra;
    Z.prototype.refresh = Z.prototype.ta;
    Z.prototype.getAttributions = Z.prototype.va;
    Z.prototype.getLogo = Z.prototype.ua;
    Z.prototype.getProjection = Z.prototype.wa;
    Z.prototype.getState = Z.prototype.U;
    Z.prototype.setAttributions = Z.prototype.qa;
    Z.prototype.get = Z.prototype.get;
    Z.prototype.getKeys = Z.prototype.O;
    Z.prototype.getProperties = Z.prototype.N;
    Z.prototype.set = Z.prototype.set;
    Z.prototype.setProperties = Z.prototype.H;
    Z.prototype.unset = Z.prototype.R;
    Z.prototype.changed = Z.prototype.v;
    Z.prototype.dispatchEvent = Z.prototype.b;
    Z.prototype.getRevision = Z.prototype.K;
    Z.prototype.on = Z.prototype.I;
    Z.prototype.once = Z.prototype.L;
    Z.prototype.un = Z.prototype.J;
    Z.prototype.unByKey = Z.prototype.M;
    bx.prototype.setRenderReprojectionEdges = bx.prototype.Bb;
    bx.prototype.setTileGridForProjection = bx.prototype.Cb;
    bx.prototype.getTileLoadFunction = bx.prototype.fb;
    bx.prototype.getTileUrlFunction = bx.prototype.hb;
    bx.prototype.getUrls = bx.prototype.ib;
    bx.prototype.setTileLoadFunction = bx.prototype.nb;
    bx.prototype.setTileUrlFunction = bx.prototype.Ta;
    bx.prototype.setUrl = bx.prototype.Ya;
    bx.prototype.setUrls = bx.prototype.Ua;
    bx.prototype.getTileGrid = bx.prototype.Ra;
    bx.prototype.refresh = bx.prototype.ta;
    bx.prototype.getAttributions = bx.prototype.va;
    bx.prototype.getLogo = bx.prototype.ua;
    bx.prototype.getProjection = bx.prototype.wa;
    bx.prototype.getState = bx.prototype.U;
    bx.prototype.setAttributions = bx.prototype.qa;
    bx.prototype.get = bx.prototype.get;
    bx.prototype.getKeys = bx.prototype.O;
    bx.prototype.getProperties = bx.prototype.N;
    bx.prototype.set = bx.prototype.set;
    bx.prototype.setProperties = bx.prototype.H;
    bx.prototype.unset = bx.prototype.R;
    bx.prototype.changed = bx.prototype.v;
    bx.prototype.dispatchEvent = bx.prototype.b;
    bx.prototype.getRevision = bx.prototype.K;
    bx.prototype.on = bx.prototype.I;
    bx.prototype.once = bx.prototype.L;
    bx.prototype.un = bx.prototype.J;
    bx.prototype.unByKey = bx.prototype.M;
    Pv.prototype.getTileCoord = Pv.prototype.i;
    Pv.prototype.load = Pv.prototype.load;
    Yi.prototype.changed = Yi.prototype.v;
    Yi.prototype.dispatchEvent = Yi.prototype.b;
    Yi.prototype.getRevision = Yi.prototype.K;
    Yi.prototype.on = Yi.prototype.I;
    Yi.prototype.once = Yi.prototype.L;
    Yi.prototype.un = Yi.prototype.J;
    Yi.prototype.unByKey = Yi.prototype.M;
    gl.prototype.changed = gl.prototype.v;
    gl.prototype.dispatchEvent = gl.prototype.b;
    gl.prototype.getRevision = gl.prototype.K;
    gl.prototype.on = gl.prototype.I;
    gl.prototype.once = gl.prototype.L;
    gl.prototype.un = gl.prototype.J;
    gl.prototype.unByKey = gl.prototype.M;
    jl.prototype.changed = jl.prototype.v;
    jl.prototype.dispatchEvent = jl.prototype.b;
    jl.prototype.getRevision = jl.prototype.K;
    jl.prototype.on = jl.prototype.I;
    jl.prototype.once = jl.prototype.L;
    jl.prototype.un = jl.prototype.J;
    jl.prototype.unByKey = jl.prototype.M;
    sl.prototype.changed = sl.prototype.v;
    sl.prototype.dispatchEvent = sl.prototype.b;
    sl.prototype.getRevision = sl.prototype.K;
    sl.prototype.on = sl.prototype.I;
    sl.prototype.once = sl.prototype.L;
    sl.prototype.un = sl.prototype.J;
    sl.prototype.unByKey = sl.prototype.M;
    ul.prototype.changed = ul.prototype.v;
    ul.prototype.dispatchEvent = ul.prototype.b;
    ul.prototype.getRevision = ul.prototype.K;
    ul.prototype.on = ul.prototype.I;
    ul.prototype.once = ul.prototype.L;
    ul.prototype.un = ul.prototype.J;
    ul.prototype.unByKey = ul.prototype.M;
    gj.prototype.changed = gj.prototype.v;
    gj.prototype.dispatchEvent = gj.prototype.b;
    gj.prototype.getRevision = gj.prototype.K;
    gj.prototype.on = gj.prototype.I;
    gj.prototype.once = gj.prototype.L;
    gj.prototype.un = gj.prototype.J;
    gj.prototype.unByKey = gj.prototype.M;
    jk.prototype.changed = jk.prototype.v;
    jk.prototype.dispatchEvent = jk.prototype.b;
    jk.prototype.getRevision = jk.prototype.K;
    jk.prototype.on = jk.prototype.I;
    jk.prototype.once = jk.prototype.L;
    jk.prototype.un = jk.prototype.J;
    jk.prototype.unByKey = jk.prototype.M;
    kk.prototype.changed = kk.prototype.v;
    kk.prototype.dispatchEvent = kk.prototype.b;
    kk.prototype.getRevision = kk.prototype.K;
    kk.prototype.on = kk.prototype.I;
    kk.prototype.once = kk.prototype.L;
    kk.prototype.un = kk.prototype.J;
    kk.prototype.unByKey = kk.prototype.M;
    mk.prototype.changed = mk.prototype.v;
    mk.prototype.dispatchEvent = mk.prototype.b;
    mk.prototype.getRevision = mk.prototype.K;
    mk.prototype.on = mk.prototype.I;
    mk.prototype.once = mk.prototype.L;
    mk.prototype.un = mk.prototype.J;
    mk.prototype.unByKey = mk.prototype.M;
    nk.prototype.changed = nk.prototype.v;
    nk.prototype.dispatchEvent = nk.prototype.b;
    nk.prototype.getRevision = nk.prototype.K;
    nk.prototype.on = nk.prototype.I;
    nk.prototype.once = nk.prototype.L;
    nk.prototype.un = nk.prototype.J;
    nk.prototype.unByKey = nk.prototype.M;
    Lh.prototype.type = Lh.prototype.type;
    Lh.prototype.target = Lh.prototype.target;
    Lh.prototype.preventDefault = Lh.prototype.preventDefault;
    Lh.prototype.stopPropagation = Lh.prototype.stopPropagation;
    Gf.prototype.type = Gf.prototype.type;
    Gf.prototype.target = Gf.prototype.target;
    Gf.prototype.preventDefault = Gf.prototype.preventDefault;
    Gf.prototype.stopPropagation = Gf.prototype.stopPropagation;
    yh.prototype.get = yh.prototype.get;
    yh.prototype.getKeys = yh.prototype.O;
    yh.prototype.getProperties = yh.prototype.N;
    yh.prototype.set = yh.prototype.set;
    yh.prototype.setProperties = yh.prototype.H;
    yh.prototype.unset = yh.prototype.R;
    yh.prototype.changed = yh.prototype.v;
    yh.prototype.dispatchEvent = yh.prototype.b;
    yh.prototype.getRevision = yh.prototype.K;
    yh.prototype.on = yh.prototype.I;
    yh.prototype.once = yh.prototype.L;
    yh.prototype.un = yh.prototype.J;
    yh.prototype.unByKey = yh.prototype.M;
    Ah.prototype.getExtent = Ah.prototype.D;
    Ah.prototype.getMaxResolution = Ah.prototype.Pb;
    Ah.prototype.getMinResolution = Ah.prototype.Qb;
    Ah.prototype.getOpacity = Ah.prototype.Rb;
    Ah.prototype.getVisible = Ah.prototype.zb;
    Ah.prototype.getZIndex = Ah.prototype.Sb;
    Ah.prototype.setExtent = Ah.prototype.fc;
    Ah.prototype.setMaxResolution = Ah.prototype.lc;
    Ah.prototype.setMinResolution = Ah.prototype.mc;
    Ah.prototype.setOpacity = Ah.prototype.gc;
    Ah.prototype.setVisible = Ah.prototype.hc;
    Ah.prototype.setZIndex = Ah.prototype.ic;
    Ah.prototype.get = Ah.prototype.get;
    Ah.prototype.getKeys = Ah.prototype.O;
    Ah.prototype.getProperties = Ah.prototype.N;
    Ah.prototype.set = Ah.prototype.set;
    Ah.prototype.setProperties = Ah.prototype.H;
    Ah.prototype.unset = Ah.prototype.R;
    Ah.prototype.changed = Ah.prototype.v;
    Ah.prototype.dispatchEvent = Ah.prototype.b;
    Ah.prototype.getRevision = Ah.prototype.K;
    Ah.prototype.on = Ah.prototype.I;
    Ah.prototype.once = Ah.prototype.L;
    Ah.prototype.un = Ah.prototype.J;
    Ah.prototype.unByKey = Ah.prototype.M;
    Mh.prototype.getExtent = Mh.prototype.D;
    Mh.prototype.getMaxResolution = Mh.prototype.Pb;
    Mh.prototype.getMinResolution = Mh.prototype.Qb;
    Mh.prototype.getOpacity = Mh.prototype.Rb;
    Mh.prototype.getVisible = Mh.prototype.zb;
    Mh.prototype.getZIndex = Mh.prototype.Sb;
    Mh.prototype.setExtent = Mh.prototype.fc;
    Mh.prototype.setMaxResolution = Mh.prototype.lc;
    Mh.prototype.setMinResolution = Mh.prototype.mc;
    Mh.prototype.setOpacity = Mh.prototype.gc;
    Mh.prototype.setVisible = Mh.prototype.hc;
    Mh.prototype.setZIndex = Mh.prototype.ic;
    Mh.prototype.get = Mh.prototype.get;
    Mh.prototype.getKeys = Mh.prototype.O;
    Mh.prototype.getProperties = Mh.prototype.N;
    Mh.prototype.set = Mh.prototype.set;
    Mh.prototype.setProperties = Mh.prototype.H;
    Mh.prototype.unset = Mh.prototype.R;
    Mh.prototype.changed = Mh.prototype.v;
    Mh.prototype.dispatchEvent = Mh.prototype.b;
    Mh.prototype.getRevision = Mh.prototype.K;
    Mh.prototype.on = Mh.prototype.I;
    Mh.prototype.once = Mh.prototype.L;
    Mh.prototype.un = Mh.prototype.J;
    Mh.prototype.unByKey = Mh.prototype.M;
    E.prototype.setMap = E.prototype.setMap;
    E.prototype.setSource = E.prototype.Ec;
    E.prototype.getExtent = E.prototype.D;
    E.prototype.getMaxResolution = E.prototype.Pb;
    E.prototype.getMinResolution = E.prototype.Qb;
    E.prototype.getOpacity = E.prototype.Rb;
    E.prototype.getVisible = E.prototype.zb;
    E.prototype.getZIndex = E.prototype.Sb;
    E.prototype.setExtent = E.prototype.fc;
    E.prototype.setMaxResolution = E.prototype.lc;
    E.prototype.setMinResolution = E.prototype.mc;
    E.prototype.setOpacity = E.prototype.gc;
    E.prototype.setVisible = E.prototype.hc;
    E.prototype.setZIndex = E.prototype.ic;
    E.prototype.get = E.prototype.get;
    E.prototype.getKeys = E.prototype.O;
    E.prototype.getProperties = E.prototype.N;
    E.prototype.set = E.prototype.set;
    E.prototype.setProperties = E.prototype.H;
    E.prototype.unset = E.prototype.R;
    E.prototype.changed = E.prototype.v;
    E.prototype.dispatchEvent = E.prototype.b;
    E.prototype.getRevision = E.prototype.K;
    E.prototype.on = E.prototype.I;
    E.prototype.once = E.prototype.L;
    E.prototype.un = E.prototype.J;
    E.prototype.unByKey = E.prototype.M;
    W.prototype.getSource = W.prototype.ga;
    W.prototype.getStyle = W.prototype.G;
    W.prototype.getStyleFunction = W.prototype.S;
    W.prototype.setStyle = W.prototype.l;
    W.prototype.setMap = W.prototype.setMap;
    W.prototype.setSource = W.prototype.Ec;
    W.prototype.getExtent = W.prototype.D;
    W.prototype.getMaxResolution = W.prototype.Pb;
    W.prototype.getMinResolution = W.prototype.Qb;
    W.prototype.getOpacity = W.prototype.Rb;
    W.prototype.getVisible = W.prototype.zb;
    W.prototype.getZIndex = W.prototype.Sb;
    W.prototype.setExtent = W.prototype.fc;
    W.prototype.setMaxResolution = W.prototype.lc;
    W.prototype.setMinResolution = W.prototype.mc;
    W.prototype.setOpacity = W.prototype.gc;
    W.prototype.setVisible = W.prototype.hc;
    W.prototype.setZIndex = W.prototype.ic;
    W.prototype.get = W.prototype.get;
    W.prototype.getKeys = W.prototype.O;
    W.prototype.getProperties = W.prototype.N;
    W.prototype.set = W.prototype.set;
    W.prototype.setProperties = W.prototype.H;
    W.prototype.unset = W.prototype.R;
    W.prototype.changed = W.prototype.v;
    W.prototype.dispatchEvent = W.prototype.b;
    W.prototype.getRevision = W.prototype.K;
    W.prototype.on = W.prototype.I;
    W.prototype.once = W.prototype.L;
    W.prototype.un = W.prototype.J;
    W.prototype.unByKey = W.prototype.M;
    gi.prototype.setMap = gi.prototype.setMap;
    gi.prototype.setSource = gi.prototype.Ec;
    gi.prototype.getExtent = gi.prototype.D;
    gi.prototype.getMaxResolution = gi.prototype.Pb;
    gi.prototype.getMinResolution = gi.prototype.Qb;
    gi.prototype.getOpacity = gi.prototype.Rb;
    gi.prototype.getVisible = gi.prototype.zb;
    gi.prototype.getZIndex = gi.prototype.Sb;
    gi.prototype.setExtent = gi.prototype.fc;
    gi.prototype.setMaxResolution = gi.prototype.lc;
    gi.prototype.setMinResolution = gi.prototype.mc;
    gi.prototype.setOpacity = gi.prototype.gc;
    gi.prototype.setVisible = gi.prototype.hc;
    gi.prototype.setZIndex = gi.prototype.ic;
    gi.prototype.get = gi.prototype.get;
    gi.prototype.getKeys = gi.prototype.O;
    gi.prototype.getProperties = gi.prototype.N;
    gi.prototype.set = gi.prototype.set;
    gi.prototype.setProperties = gi.prototype.H;
    gi.prototype.unset = gi.prototype.R;
    gi.prototype.changed = gi.prototype.v;
    gi.prototype.dispatchEvent = gi.prototype.b;
    gi.prototype.getRevision = gi.prototype.K;
    gi.prototype.on = gi.prototype.I;
    gi.prototype.once = gi.prototype.L;
    gi.prototype.un = gi.prototype.J;
    gi.prototype.unByKey = gi.prototype.M;
    D.prototype.setMap = D.prototype.setMap;
    D.prototype.setSource = D.prototype.Ec;
    D.prototype.getExtent = D.prototype.D;
    D.prototype.getMaxResolution = D.prototype.Pb;
    D.prototype.getMinResolution = D.prototype.Qb;
    D.prototype.getOpacity = D.prototype.Rb;
    D.prototype.getVisible = D.prototype.zb;
    D.prototype.getZIndex = D.prototype.Sb;
    D.prototype.setExtent = D.prototype.fc;
    D.prototype.setMaxResolution = D.prototype.lc;
    D.prototype.setMinResolution = D.prototype.mc;
    D.prototype.setOpacity = D.prototype.gc;
    D.prototype.setVisible = D.prototype.hc;
    D.prototype.setZIndex = D.prototype.ic;
    D.prototype.get = D.prototype.get;
    D.prototype.getKeys = D.prototype.O;
    D.prototype.getProperties = D.prototype.N;
    D.prototype.set = D.prototype.set;
    D.prototype.setProperties = D.prototype.H;
    D.prototype.unset = D.prototype.R;
    D.prototype.changed = D.prototype.v;
    D.prototype.dispatchEvent = D.prototype.b;
    D.prototype.getRevision = D.prototype.K;
    D.prototype.on = D.prototype.I;
    D.prototype.once = D.prototype.L;
    D.prototype.un = D.prototype.J;
    D.prototype.unByKey = D.prototype.M;
    G.prototype.getSource = G.prototype.ga;
    G.prototype.getStyle = G.prototype.G;
    G.prototype.getStyleFunction = G.prototype.S;
    G.prototype.setStyle = G.prototype.l;
    G.prototype.setMap = G.prototype.setMap;
    G.prototype.setSource = G.prototype.Ec;
    G.prototype.getExtent = G.prototype.D;
    G.prototype.getMaxResolution = G.prototype.Pb;
    G.prototype.getMinResolution = G.prototype.Qb;
    G.prototype.getOpacity = G.prototype.Rb;
    G.prototype.getVisible = G.prototype.zb;
    G.prototype.getZIndex = G.prototype.Sb;
    G.prototype.setExtent = G.prototype.fc;
    G.prototype.setMaxResolution = G.prototype.lc;
    G.prototype.setMinResolution = G.prototype.mc;
    G.prototype.setOpacity = G.prototype.gc;
    G.prototype.setVisible = G.prototype.hc;
    G.prototype.setZIndex = G.prototype.ic;
    G.prototype.get = G.prototype.get;
    G.prototype.getKeys = G.prototype.O;
    G.prototype.getProperties = G.prototype.N;
    G.prototype.set = G.prototype.set;
    G.prototype.setProperties = G.prototype.H;
    G.prototype.unset = G.prototype.R;
    G.prototype.changed = G.prototype.v;
    G.prototype.dispatchEvent = G.prototype.b;
    G.prototype.getRevision = G.prototype.K;
    G.prototype.on = G.prototype.I;
    G.prototype.once = G.prototype.L;
    G.prototype.un = G.prototype.J;
    G.prototype.unByKey = G.prototype.M;
    wg.prototype.get = wg.prototype.get;
    wg.prototype.getKeys = wg.prototype.O;
    wg.prototype.getProperties = wg.prototype.N;
    wg.prototype.set = wg.prototype.set;
    wg.prototype.setProperties = wg.prototype.H;
    wg.prototype.unset = wg.prototype.R;
    wg.prototype.changed = wg.prototype.v;
    wg.prototype.dispatchEvent = wg.prototype.b;
    wg.prototype.getRevision = wg.prototype.K;
    wg.prototype.on = wg.prototype.I;
    wg.prototype.once = wg.prototype.L;
    wg.prototype.un = wg.prototype.J;
    wg.prototype.unByKey = wg.prototype.M;
    Bg.prototype.getActive = Bg.prototype.f;
    Bg.prototype.getMap = Bg.prototype.c;
    Bg.prototype.setActive = Bg.prototype.Ba;
    Bg.prototype.get = Bg.prototype.get;
    Bg.prototype.getKeys = Bg.prototype.O;
    Bg.prototype.getProperties = Bg.prototype.N;
    Bg.prototype.set = Bg.prototype.set;
    Bg.prototype.setProperties = Bg.prototype.H;
    Bg.prototype.unset = Bg.prototype.R;
    Bg.prototype.changed = Bg.prototype.v;
    Bg.prototype.dispatchEvent = Bg.prototype.b;
    Bg.prototype.getRevision = Bg.prototype.K;
    Bg.prototype.on = Bg.prototype.I;
    Bg.prototype.once = Bg.prototype.L;
    Bg.prototype.un = Bg.prototype.J;
    Bg.prototype.unByKey = Bg.prototype.M;
    Wt.prototype.getActive = Wt.prototype.f;
    Wt.prototype.getMap = Wt.prototype.c;
    Wt.prototype.setActive = Wt.prototype.Ba;
    Wt.prototype.get = Wt.prototype.get;
    Wt.prototype.getKeys = Wt.prototype.O;
    Wt.prototype.getProperties = Wt.prototype.N;
    Wt.prototype.set = Wt.prototype.set;
    Wt.prototype.setProperties = Wt.prototype.H;
    Wt.prototype.unset = Wt.prototype.R;
    Wt.prototype.changed = Wt.prototype.v;
    Wt.prototype.dispatchEvent = Wt.prototype.b;
    Wt.prototype.getRevision = Wt.prototype.K;
    Wt.prototype.on = Wt.prototype.I;
    Wt.prototype.once = Wt.prototype.L;
    Wt.prototype.un = Wt.prototype.J;
    Wt.prototype.unByKey = Wt.prototype.M;
    Zt.prototype.type = Zt.prototype.type;
    Zt.prototype.target = Zt.prototype.target;
    Zt.prototype.preventDefault = Zt.prototype.preventDefault;
    Zt.prototype.stopPropagation = Zt.prototype.stopPropagation;
    Mg.prototype.getActive = Mg.prototype.f;
    Mg.prototype.getMap = Mg.prototype.c;
    Mg.prototype.setActive = Mg.prototype.Ba;
    Mg.prototype.get = Mg.prototype.get;
    Mg.prototype.getKeys = Mg.prototype.O;
    Mg.prototype.getProperties = Mg.prototype.N;
    Mg.prototype.set = Mg.prototype.set;
    Mg.prototype.setProperties = Mg.prototype.H;
    Mg.prototype.unset = Mg.prototype.R;
    Mg.prototype.changed = Mg.prototype.v;
    Mg.prototype.dispatchEvent = Mg.prototype.b;
    Mg.prototype.getRevision = Mg.prototype.K;
    Mg.prototype.on = Mg.prototype.I;
    Mg.prototype.once = Mg.prototype.L;
    Mg.prototype.un = Mg.prototype.J;
    Mg.prototype.unByKey = Mg.prototype.M;
    $g.prototype.getActive = $g.prototype.f;
    $g.prototype.getMap = $g.prototype.c;
    $g.prototype.setActive = $g.prototype.Ba;
    $g.prototype.get = $g.prototype.get;
    $g.prototype.getKeys = $g.prototype.O;
    $g.prototype.getProperties = $g.prototype.N;
    $g.prototype.set = $g.prototype.set;
    $g.prototype.setProperties = $g.prototype.H;
    $g.prototype.unset = $g.prototype.R;
    $g.prototype.changed = $g.prototype.v;
    $g.prototype.dispatchEvent = $g.prototype.b;
    $g.prototype.getRevision = $g.prototype.K;
    $g.prototype.on = $g.prototype.I;
    $g.prototype.once = $g.prototype.L;
    $g.prototype.un = $g.prototype.J;
    $g.prototype.unByKey = $g.prototype.M;
    eh.prototype.type = eh.prototype.type;
    eh.prototype.target = eh.prototype.target;
    eh.prototype.preventDefault = eh.prototype.preventDefault;
    eh.prototype.stopPropagation = eh.prototype.stopPropagation;
    Pg.prototype.getActive = Pg.prototype.f;
    Pg.prototype.getMap = Pg.prototype.c;
    Pg.prototype.setActive = Pg.prototype.Ba;
    Pg.prototype.get = Pg.prototype.get;
    Pg.prototype.getKeys = Pg.prototype.O;
    Pg.prototype.getProperties = Pg.prototype.N;
    Pg.prototype.set = Pg.prototype.set;
    Pg.prototype.setProperties = Pg.prototype.H;
    Pg.prototype.unset = Pg.prototype.R;
    Pg.prototype.changed = Pg.prototype.v;
    Pg.prototype.dispatchEvent = Pg.prototype.b;
    Pg.prototype.getRevision = Pg.prototype.K;
    Pg.prototype.on = Pg.prototype.I;
    Pg.prototype.once = Pg.prototype.L;
    Pg.prototype.un = Pg.prototype.J;
    Pg.prototype.unByKey = Pg.prototype.M;
    Tg.prototype.getActive = Tg.prototype.f;
    Tg.prototype.getMap = Tg.prototype.c;
    Tg.prototype.setActive = Tg.prototype.Ba;
    Tg.prototype.get = Tg.prototype.get;
    Tg.prototype.getKeys = Tg.prototype.O;
    Tg.prototype.getProperties = Tg.prototype.N;
    Tg.prototype.set = Tg.prototype.set;
    Tg.prototype.setProperties = Tg.prototype.H;
    Tg.prototype.unset = Tg.prototype.R;
    Tg.prototype.changed = Tg.prototype.v;
    Tg.prototype.dispatchEvent = Tg.prototype.b;
    Tg.prototype.getRevision = Tg.prototype.K;
    Tg.prototype.on = Tg.prototype.I;
    Tg.prototype.once = Tg.prototype.L;
    Tg.prototype.un = Tg.prototype.J;
    Tg.prototype.unByKey = Tg.prototype.M;
    au.prototype.getActive = au.prototype.f;
    au.prototype.getMap = au.prototype.c;
    au.prototype.setActive = au.prototype.Ba;
    au.prototype.get = au.prototype.get;
    au.prototype.getKeys = au.prototype.O;
    au.prototype.getProperties = au.prototype.N;
    au.prototype.set = au.prototype.set;
    au.prototype.setProperties = au.prototype.H;
    au.prototype.unset = au.prototype.R;
    au.prototype.changed = au.prototype.v;
    au.prototype.dispatchEvent = au.prototype.b;
    au.prototype.getRevision = au.prototype.K;
    au.prototype.on = au.prototype.I;
    au.prototype.once = au.prototype.L;
    au.prototype.un = au.prototype.J;
    au.prototype.unByKey = au.prototype.M;
    ih.prototype.getGeometry = ih.prototype.V;
    ih.prototype.getActive = ih.prototype.f;
    ih.prototype.getMap = ih.prototype.c;
    ih.prototype.setActive = ih.prototype.Ba;
    ih.prototype.get = ih.prototype.get;
    ih.prototype.getKeys = ih.prototype.O;
    ih.prototype.getProperties = ih.prototype.N;
    ih.prototype.set = ih.prototype.set;
    ih.prototype.setProperties = ih.prototype.H;
    ih.prototype.unset = ih.prototype.R;
    ih.prototype.changed = ih.prototype.v;
    ih.prototype.dispatchEvent = ih.prototype.b;
    ih.prototype.getRevision = ih.prototype.K;
    ih.prototype.on = ih.prototype.I;
    ih.prototype.once = ih.prototype.L;
    ih.prototype.un = ih.prototype.J;
    ih.prototype.unByKey = ih.prototype.M;
    wu.prototype.getActive = wu.prototype.f;
    wu.prototype.getMap = wu.prototype.c;
    wu.prototype.setActive = wu.prototype.Ba;
    wu.prototype.get = wu.prototype.get;
    wu.prototype.getKeys = wu.prototype.O;
    wu.prototype.getProperties = wu.prototype.N;
    wu.prototype.set = wu.prototype.set;
    wu.prototype.setProperties = wu.prototype.H;
    wu.prototype.unset = wu.prototype.R;
    wu.prototype.changed = wu.prototype.v;
    wu.prototype.dispatchEvent = wu.prototype.b;
    wu.prototype.getRevision = wu.prototype.K;
    wu.prototype.on = wu.prototype.I;
    wu.prototype.once = wu.prototype.L;
    wu.prototype.un = wu.prototype.J;
    wu.prototype.unByKey = wu.prototype.M;
    Lu.prototype.type = Lu.prototype.type;
    Lu.prototype.target = Lu.prototype.target;
    Lu.prototype.preventDefault = Lu.prototype.preventDefault;
    Lu.prototype.stopPropagation = Lu.prototype.stopPropagation;
    Pu.prototype.getActive = Pu.prototype.f;
    Pu.prototype.getMap = Pu.prototype.c;
    Pu.prototype.setActive = Pu.prototype.Ba;
    Pu.prototype.get = Pu.prototype.get;
    Pu.prototype.getKeys = Pu.prototype.O;
    Pu.prototype.getProperties = Pu.prototype.N;
    Pu.prototype.set = Pu.prototype.set;
    Pu.prototype.setProperties = Pu.prototype.H;
    Pu.prototype.unset = Pu.prototype.R;
    Pu.prototype.changed = Pu.prototype.v;
    Pu.prototype.dispatchEvent = Pu.prototype.b;
    Pu.prototype.getRevision = Pu.prototype.K;
    Pu.prototype.on = Pu.prototype.I;
    Pu.prototype.once = Pu.prototype.L;
    Pu.prototype.un = Pu.prototype.J;
    Pu.prototype.unByKey = Pu.prototype.M;
    $u.prototype.type = $u.prototype.type;
    $u.prototype.target = $u.prototype.target;
    $u.prototype.preventDefault = $u.prototype.preventDefault;
    $u.prototype.stopPropagation = $u.prototype.stopPropagation;
    jh.prototype.getActive = jh.prototype.f;
    jh.prototype.getMap = jh.prototype.c;
    jh.prototype.setActive = jh.prototype.Ba;
    jh.prototype.get = jh.prototype.get;
    jh.prototype.getKeys = jh.prototype.O;
    jh.prototype.getProperties = jh.prototype.N;
    jh.prototype.set = jh.prototype.set;
    jh.prototype.setProperties = jh.prototype.H;
    jh.prototype.unset = jh.prototype.R;
    jh.prototype.changed = jh.prototype.v;
    jh.prototype.dispatchEvent = jh.prototype.b;
    jh.prototype.getRevision = jh.prototype.K;
    jh.prototype.on = jh.prototype.I;
    jh.prototype.once = jh.prototype.L;
    jh.prototype.un = jh.prototype.J;
    jh.prototype.unByKey = jh.prototype.M;
    lh.prototype.getActive = lh.prototype.f;
    lh.prototype.getMap = lh.prototype.c;
    lh.prototype.setActive = lh.prototype.Ba;
    lh.prototype.get = lh.prototype.get;
    lh.prototype.getKeys = lh.prototype.O;
    lh.prototype.getProperties = lh.prototype.N;
    lh.prototype.set = lh.prototype.set;
    lh.prototype.setProperties = lh.prototype.H;
    lh.prototype.unset = lh.prototype.R;
    lh.prototype.changed = lh.prototype.v;
    lh.prototype.dispatchEvent = lh.prototype.b;
    lh.prototype.getRevision = lh.prototype.K;
    lh.prototype.on = lh.prototype.I;
    lh.prototype.once = lh.prototype.L;
    lh.prototype.un = lh.prototype.J;
    lh.prototype.unByKey = lh.prototype.M;
    bv.prototype.getActive = bv.prototype.f;
    bv.prototype.getMap = bv.prototype.c;
    bv.prototype.setActive = bv.prototype.Ba;
    bv.prototype.get = bv.prototype.get;
    bv.prototype.getKeys = bv.prototype.O;
    bv.prototype.getProperties = bv.prototype.N;
    bv.prototype.set = bv.prototype.set;
    bv.prototype.setProperties = bv.prototype.H;
    bv.prototype.unset = bv.prototype.R;
    bv.prototype.changed = bv.prototype.v;
    bv.prototype.dispatchEvent = bv.prototype.b;
    bv.prototype.getRevision = bv.prototype.K;
    bv.prototype.on = bv.prototype.I;
    bv.prototype.once = bv.prototype.L;
    bv.prototype.un = bv.prototype.J;
    bv.prototype.unByKey = bv.prototype.M;
    jv.prototype.type = jv.prototype.type;
    jv.prototype.target = jv.prototype.target;
    jv.prototype.preventDefault = jv.prototype.preventDefault;
    jv.prototype.stopPropagation = jv.prototype.stopPropagation;
    nh.prototype.getActive = nh.prototype.f;
    nh.prototype.getMap = nh.prototype.c;
    nh.prototype.setActive = nh.prototype.Ba;
    nh.prototype.get = nh.prototype.get;
    nh.prototype.getKeys = nh.prototype.O;
    nh.prototype.getProperties = nh.prototype.N;
    nh.prototype.set = nh.prototype.set;
    nh.prototype.setProperties = nh.prototype.H;
    nh.prototype.unset = nh.prototype.R;
    nh.prototype.changed = nh.prototype.v;
    nh.prototype.dispatchEvent = nh.prototype.b;
    nh.prototype.getRevision = nh.prototype.K;
    nh.prototype.on = nh.prototype.I;
    nh.prototype.once = nh.prototype.L;
    nh.prototype.un = nh.prototype.J;
    nh.prototype.unByKey = nh.prototype.M;
    ph.prototype.getActive = ph.prototype.f;
    ph.prototype.getMap = ph.prototype.c;
    ph.prototype.setActive = ph.prototype.Ba;
    ph.prototype.get = ph.prototype.get;
    ph.prototype.getKeys = ph.prototype.O;
    ph.prototype.getProperties = ph.prototype.N;
    ph.prototype.set = ph.prototype.set;
    ph.prototype.setProperties = ph.prototype.H;
    ph.prototype.unset = ph.prototype.R;
    ph.prototype.changed = ph.prototype.v;
    ph.prototype.dispatchEvent = ph.prototype.b;
    ph.prototype.getRevision = ph.prototype.K;
    ph.prototype.on = ph.prototype.I;
    ph.prototype.once = ph.prototype.L;
    ph.prototype.un = ph.prototype.J;
    ph.prototype.unByKey = ph.prototype.M;
    th.prototype.getActive = th.prototype.f;
    th.prototype.getMap = th.prototype.c;
    th.prototype.setActive = th.prototype.Ba;
    th.prototype.get = th.prototype.get;
    th.prototype.getKeys = th.prototype.O;
    th.prototype.getProperties = th.prototype.N;
    th.prototype.set = th.prototype.set;
    th.prototype.setProperties = th.prototype.H;
    th.prototype.unset = th.prototype.R;
    th.prototype.changed = th.prototype.v;
    th.prototype.dispatchEvent = th.prototype.b;
    th.prototype.getRevision = th.prototype.K;
    th.prototype.on = th.prototype.I;
    th.prototype.once = th.prototype.L;
    th.prototype.un = th.prototype.J;
    th.prototype.unByKey = th.prototype.M;
    rv.prototype.getActive = rv.prototype.f;
    rv.prototype.getMap = rv.prototype.c;
    rv.prototype.setActive = rv.prototype.Ba;
    rv.prototype.get = rv.prototype.get;
    rv.prototype.getKeys = rv.prototype.O;
    rv.prototype.getProperties = rv.prototype.N;
    rv.prototype.set = rv.prototype.set;
    rv.prototype.setProperties = rv.prototype.H;
    rv.prototype.unset = rv.prototype.R;
    rv.prototype.changed = rv.prototype.v;
    rv.prototype.dispatchEvent = rv.prototype.b;
    rv.prototype.getRevision = rv.prototype.K;
    rv.prototype.on = rv.prototype.I;
    rv.prototype.once = rv.prototype.L;
    rv.prototype.un = rv.prototype.J;
    rv.prototype.unByKey = rv.prototype.M;
    uv.prototype.type = uv.prototype.type;
    uv.prototype.target = uv.prototype.target;
    uv.prototype.preventDefault = uv.prototype.preventDefault;
    uv.prototype.stopPropagation = uv.prototype.stopPropagation;
    wv.prototype.getActive = wv.prototype.f;
    wv.prototype.getMap = wv.prototype.c;
    wv.prototype.setActive = wv.prototype.Ba;
    wv.prototype.get = wv.prototype.get;
    wv.prototype.getKeys = wv.prototype.O;
    wv.prototype.getProperties = wv.prototype.N;
    wv.prototype.set = wv.prototype.set;
    wv.prototype.setProperties = wv.prototype.H;
    wv.prototype.unset = wv.prototype.R;
    wv.prototype.changed = wv.prototype.v;
    wv.prototype.dispatchEvent = wv.prototype.b;
    wv.prototype.getRevision = wv.prototype.K;
    wv.prototype.on = wv.prototype.I;
    wv.prototype.once = wv.prototype.L;
    wv.prototype.un = wv.prototype.J;
    wv.prototype.unByKey = wv.prototype.M;
    Av.prototype.getActive = Av.prototype.f;
    Av.prototype.getMap = Av.prototype.c;
    Av.prototype.setActive = Av.prototype.Ba;
    Av.prototype.get = Av.prototype.get;
    Av.prototype.getKeys = Av.prototype.O;
    Av.prototype.getProperties = Av.prototype.N;
    Av.prototype.set = Av.prototype.set;
    Av.prototype.setProperties = Av.prototype.H;
    Av.prototype.unset = Av.prototype.R;
    Av.prototype.changed = Av.prototype.v;
    Av.prototype.dispatchEvent = Av.prototype.b;
    Av.prototype.getRevision = Av.prototype.K;
    Av.prototype.on = Av.prototype.I;
    Av.prototype.once = Av.prototype.L;
    Av.prototype.un = Av.prototype.J;
    Av.prototype.unByKey = Av.prototype.M;
    Gv.prototype.type = Gv.prototype.type;
    Gv.prototype.target = Gv.prototype.target;
    Gv.prototype.preventDefault = Gv.prototype.preventDefault;
    Gv.prototype.stopPropagation = Gv.prototype.stopPropagation;
    Mc.prototype.get = Mc.prototype.get;
    Mc.prototype.getKeys = Mc.prototype.O;
    Mc.prototype.getProperties = Mc.prototype.N;
    Mc.prototype.set = Mc.prototype.set;
    Mc.prototype.setProperties = Mc.prototype.H;
    Mc.prototype.unset = Mc.prototype.R;
    Mc.prototype.changed = Mc.prototype.v;
    Mc.prototype.dispatchEvent = Mc.prototype.b;
    Mc.prototype.getRevision = Mc.prototype.K;
    Mc.prototype.on = Mc.prototype.I;
    Mc.prototype.once = Mc.prototype.L;
    Mc.prototype.un = Mc.prototype.J;
    Mc.prototype.unByKey = Mc.prototype.M;
    Oc.prototype.getClosestPoint = Oc.prototype.xb;
    Oc.prototype.intersectsCoordinate = Oc.prototype.jb;
    Oc.prototype.getExtent = Oc.prototype.D;
    Oc.prototype.rotate = Oc.prototype.rotate;
    Oc.prototype.scale = Oc.prototype.scale;
    Oc.prototype.simplify = Oc.prototype.Db;
    Oc.prototype.transform = Oc.prototype.lb;
    Oc.prototype.get = Oc.prototype.get;
    Oc.prototype.getKeys = Oc.prototype.O;
    Oc.prototype.getProperties = Oc.prototype.N;
    Oc.prototype.set = Oc.prototype.set;
    Oc.prototype.setProperties = Oc.prototype.H;
    Oc.prototype.unset = Oc.prototype.R;
    Oc.prototype.changed = Oc.prototype.v;
    Oc.prototype.dispatchEvent = Oc.prototype.b;
    Oc.prototype.getRevision = Oc.prototype.K;
    Oc.prototype.on = Oc.prototype.I;
    Oc.prototype.once = Oc.prototype.L;
    Oc.prototype.un = Oc.prototype.J;
    Oc.prototype.unByKey = Oc.prototype.M;
    Kt.prototype.getFirstCoordinate = Kt.prototype.Lb;
    Kt.prototype.getLastCoordinate = Kt.prototype.Mb;
    Kt.prototype.getLayout = Kt.prototype.Nb;
    Kt.prototype.rotate = Kt.prototype.rotate;
    Kt.prototype.scale = Kt.prototype.scale;
    Kt.prototype.getClosestPoint = Kt.prototype.xb;
    Kt.prototype.intersectsCoordinate = Kt.prototype.jb;
    Kt.prototype.getExtent = Kt.prototype.D;
    Kt.prototype.simplify = Kt.prototype.Db;
    Kt.prototype.get = Kt.prototype.get;
    Kt.prototype.getKeys = Kt.prototype.O;
    Kt.prototype.getProperties = Kt.prototype.N;
    Kt.prototype.set = Kt.prototype.set;
    Kt.prototype.setProperties = Kt.prototype.H;
    Kt.prototype.unset = Kt.prototype.R;
    Kt.prototype.changed = Kt.prototype.v;
    Kt.prototype.dispatchEvent = Kt.prototype.b;
    Kt.prototype.getRevision = Kt.prototype.K;
    Kt.prototype.on = Kt.prototype.I;
    Kt.prototype.once = Kt.prototype.L;
    Kt.prototype.un = Kt.prototype.J;
    Kt.prototype.unByKey = Kt.prototype.M;
    Jn.prototype.getClosestPoint = Jn.prototype.xb;
    Jn.prototype.intersectsCoordinate = Jn.prototype.jb;
    Jn.prototype.getExtent = Jn.prototype.D;
    Jn.prototype.rotate = Jn.prototype.rotate;
    Jn.prototype.scale = Jn.prototype.scale;
    Jn.prototype.simplify = Jn.prototype.Db;
    Jn.prototype.transform = Jn.prototype.lb;
    Jn.prototype.get = Jn.prototype.get;
    Jn.prototype.getKeys = Jn.prototype.O;
    Jn.prototype.getProperties = Jn.prototype.N;
    Jn.prototype.set = Jn.prototype.set;
    Jn.prototype.setProperties = Jn.prototype.H;
    Jn.prototype.unset = Jn.prototype.R;
    Jn.prototype.changed = Jn.prototype.v;
    Jn.prototype.dispatchEvent = Jn.prototype.b;
    Jn.prototype.getRevision = Jn.prototype.K;
    Jn.prototype.on = Jn.prototype.I;
    Jn.prototype.once = Jn.prototype.L;
    Jn.prototype.un = Jn.prototype.J;
    Jn.prototype.unByKey = Jn.prototype.M;
    id.prototype.getFirstCoordinate = id.prototype.Lb;
    id.prototype.getLastCoordinate = id.prototype.Mb;
    id.prototype.getLayout = id.prototype.Nb;
    id.prototype.rotate = id.prototype.rotate;
    id.prototype.scale = id.prototype.scale;
    id.prototype.getClosestPoint = id.prototype.xb;
    id.prototype.intersectsCoordinate = id.prototype.jb;
    id.prototype.getExtent = id.prototype.D;
    id.prototype.simplify = id.prototype.Db;
    id.prototype.transform = id.prototype.lb;
    id.prototype.get = id.prototype.get;
    id.prototype.getKeys = id.prototype.O;
    id.prototype.getProperties = id.prototype.N;
    id.prototype.set = id.prototype.set;
    id.prototype.setProperties = id.prototype.H;
    id.prototype.unset = id.prototype.R;
    id.prototype.changed = id.prototype.v;
    id.prototype.dispatchEvent = id.prototype.b;
    id.prototype.getRevision = id.prototype.K;
    id.prototype.on = id.prototype.I;
    id.prototype.once = id.prototype.L;
    id.prototype.un = id.prototype.J;
    id.prototype.unByKey = id.prototype.M;
    P.prototype.getFirstCoordinate = P.prototype.Lb;
    P.prototype.getLastCoordinate = P.prototype.Mb;
    P.prototype.getLayout = P.prototype.Nb;
    P.prototype.rotate = P.prototype.rotate;
    P.prototype.scale = P.prototype.scale;
    P.prototype.getClosestPoint = P.prototype.xb;
    P.prototype.intersectsCoordinate = P.prototype.jb;
    P.prototype.getExtent = P.prototype.D;
    P.prototype.simplify = P.prototype.Db;
    P.prototype.transform = P.prototype.lb;
    P.prototype.get = P.prototype.get;
    P.prototype.getKeys = P.prototype.O;
    P.prototype.getProperties = P.prototype.N;
    P.prototype.set = P.prototype.set;
    P.prototype.setProperties = P.prototype.H;
    P.prototype.unset = P.prototype.R;
    P.prototype.changed = P.prototype.v;
    P.prototype.dispatchEvent = P.prototype.b;
    P.prototype.getRevision = P.prototype.K;
    P.prototype.on = P.prototype.I;
    P.prototype.once = P.prototype.L;
    P.prototype.un = P.prototype.J;
    P.prototype.unByKey = P.prototype.M;
    Q.prototype.getFirstCoordinate = Q.prototype.Lb;
    Q.prototype.getLastCoordinate = Q.prototype.Mb;
    Q.prototype.getLayout = Q.prototype.Nb;
    Q.prototype.rotate = Q.prototype.rotate;
    Q.prototype.scale = Q.prototype.scale;
    Q.prototype.getClosestPoint = Q.prototype.xb;
    Q.prototype.intersectsCoordinate = Q.prototype.jb;
    Q.prototype.getExtent = Q.prototype.D;
    Q.prototype.simplify = Q.prototype.Db;
    Q.prototype.transform = Q.prototype.lb;
    Q.prototype.get = Q.prototype.get;
    Q.prototype.getKeys = Q.prototype.O;
    Q.prototype.getProperties = Q.prototype.N;
    Q.prototype.set = Q.prototype.set;
    Q.prototype.setProperties = Q.prototype.H;
    Q.prototype.unset = Q.prototype.R;
    Q.prototype.changed = Q.prototype.v;
    Q.prototype.dispatchEvent = Q.prototype.b;
    Q.prototype.getRevision = Q.prototype.K;
    Q.prototype.on = Q.prototype.I;
    Q.prototype.once = Q.prototype.L;
    Q.prototype.un = Q.prototype.J;
    Q.prototype.unByKey = Q.prototype.M;
    S.prototype.getFirstCoordinate = S.prototype.Lb;
    S.prototype.getLastCoordinate = S.prototype.Mb;
    S.prototype.getLayout = S.prototype.Nb;
    S.prototype.rotate = S.prototype.rotate;
    S.prototype.scale = S.prototype.scale;
    S.prototype.getClosestPoint = S.prototype.xb;
    S.prototype.intersectsCoordinate = S.prototype.jb;
    S.prototype.getExtent = S.prototype.D;
    S.prototype.simplify = S.prototype.Db;
    S.prototype.transform = S.prototype.lb;
    S.prototype.get = S.prototype.get;
    S.prototype.getKeys = S.prototype.O;
    S.prototype.getProperties = S.prototype.N;
    S.prototype.set = S.prototype.set;
    S.prototype.setProperties = S.prototype.H;
    S.prototype.unset = S.prototype.R;
    S.prototype.changed = S.prototype.v;
    S.prototype.dispatchEvent = S.prototype.b;
    S.prototype.getRevision = S.prototype.K;
    S.prototype.on = S.prototype.I;
    S.prototype.once = S.prototype.L;
    S.prototype.un = S.prototype.J;
    S.prototype.unByKey = S.prototype.M;
    T.prototype.getFirstCoordinate = T.prototype.Lb;
    T.prototype.getLastCoordinate = T.prototype.Mb;
    T.prototype.getLayout = T.prototype.Nb;
    T.prototype.rotate = T.prototype.rotate;
    T.prototype.scale = T.prototype.scale;
    T.prototype.getClosestPoint = T.prototype.xb;
    T.prototype.intersectsCoordinate = T.prototype.jb;
    T.prototype.getExtent = T.prototype.D;
    T.prototype.simplify = T.prototype.Db;
    T.prototype.transform = T.prototype.lb;
    T.prototype.get = T.prototype.get;
    T.prototype.getKeys = T.prototype.O;
    T.prototype.getProperties = T.prototype.N;
    T.prototype.set = T.prototype.set;
    T.prototype.setProperties = T.prototype.H;
    T.prototype.unset = T.prototype.R;
    T.prototype.changed = T.prototype.v;
    T.prototype.dispatchEvent = T.prototype.b;
    T.prototype.getRevision = T.prototype.K;
    T.prototype.on = T.prototype.I;
    T.prototype.once = T.prototype.L;
    T.prototype.un = T.prototype.J;
    T.prototype.unByKey = T.prototype.M;
    B.prototype.getFirstCoordinate = B.prototype.Lb;
    B.prototype.getLastCoordinate = B.prototype.Mb;
    B.prototype.getLayout = B.prototype.Nb;
    B.prototype.rotate = B.prototype.rotate;
    B.prototype.scale = B.prototype.scale;
    B.prototype.getClosestPoint = B.prototype.xb;
    B.prototype.intersectsCoordinate = B.prototype.jb;
    B.prototype.getExtent = B.prototype.D;
    B.prototype.simplify = B.prototype.Db;
    B.prototype.transform = B.prototype.lb;
    B.prototype.get = B.prototype.get;
    B.prototype.getKeys = B.prototype.O;
    B.prototype.getProperties = B.prototype.N;
    B.prototype.set = B.prototype.set;
    B.prototype.setProperties = B.prototype.H;
    B.prototype.unset = B.prototype.R;
    B.prototype.changed = B.prototype.v;
    B.prototype.dispatchEvent = B.prototype.b;
    B.prototype.getRevision = B.prototype.K;
    B.prototype.on = B.prototype.I;
    B.prototype.once = B.prototype.L;
    B.prototype.un = B.prototype.J;
    B.prototype.unByKey = B.prototype.M;
    C.prototype.getFirstCoordinate = C.prototype.Lb;
    C.prototype.getLastCoordinate = C.prototype.Mb;
    C.prototype.getLayout = C.prototype.Nb;
    C.prototype.rotate = C.prototype.rotate;
    C.prototype.scale = C.prototype.scale;
    C.prototype.getClosestPoint = C.prototype.xb;
    C.prototype.intersectsCoordinate = C.prototype.jb;
    C.prototype.getExtent = C.prototype.D;
    C.prototype.simplify = C.prototype.Db;
    C.prototype.transform = C.prototype.lb;
    C.prototype.get = C.prototype.get;
    C.prototype.getKeys = C.prototype.O;
    C.prototype.getProperties = C.prototype.N;
    C.prototype.set = C.prototype.set;
    C.prototype.setProperties = C.prototype.H;
    C.prototype.unset = C.prototype.R;
    C.prototype.changed = C.prototype.v;
    C.prototype.dispatchEvent = C.prototype.b;
    C.prototype.getRevision = C.prototype.K;
    C.prototype.on = C.prototype.I;
    C.prototype.once = C.prototype.L;
    C.prototype.un = C.prototype.J;
    C.prototype.unByKey = C.prototype.M;
    io.prototype.readFeatures = io.prototype.Ha;
    ro.prototype.readFeatures = ro.prototype.Ha;
    io.prototype.readFeatures = io.prototype.Ha;
    Ke.prototype.get = Ke.prototype.get;
    Ke.prototype.getKeys = Ke.prototype.O;
    Ke.prototype.getProperties = Ke.prototype.N;
    Ke.prototype.set = Ke.prototype.set;
    Ke.prototype.setProperties = Ke.prototype.H;
    Ke.prototype.unset = Ke.prototype.R;
    Ke.prototype.changed = Ke.prototype.v;
    Ke.prototype.dispatchEvent = Ke.prototype.b;
    Ke.prototype.getRevision = Ke.prototype.K;
    Ke.prototype.on = Ke.prototype.I;
    Ke.prototype.once = Ke.prototype.L;
    Ke.prototype.un = Ke.prototype.J;
    Ke.prototype.unByKey = Ke.prototype.M;
    Le.prototype.getMap = Le.prototype.i;
    Le.prototype.setMap = Le.prototype.setMap;
    Le.prototype.setTarget = Le.prototype.c;
    Le.prototype.get = Le.prototype.get;
    Le.prototype.getKeys = Le.prototype.O;
    Le.prototype.getProperties = Le.prototype.N;
    Le.prototype.set = Le.prototype.set;
    Le.prototype.setProperties = Le.prototype.H;
    Le.prototype.unset = Le.prototype.R;
    Le.prototype.changed = Le.prototype.v;
    Le.prototype.dispatchEvent = Le.prototype.b;
    Le.prototype.getRevision = Le.prototype.K;
    Le.prototype.on = Le.prototype.I;
    Le.prototype.once = Le.prototype.L;
    Le.prototype.un = Le.prototype.J;
    Le.prototype.unByKey = Le.prototype.M;
    Oe.prototype.getMap = Oe.prototype.i;
    Oe.prototype.setMap = Oe.prototype.setMap;
    Oe.prototype.setTarget = Oe.prototype.c;
    Oe.prototype.get = Oe.prototype.get;
    Oe.prototype.getKeys = Oe.prototype.O;
    Oe.prototype.getProperties = Oe.prototype.N;
    Oe.prototype.set = Oe.prototype.set;
    Oe.prototype.setProperties = Oe.prototype.H;
    Oe.prototype.unset = Oe.prototype.R;
    Oe.prototype.changed = Oe.prototype.v;
    Oe.prototype.dispatchEvent = Oe.prototype.b;
    Oe.prototype.getRevision = Oe.prototype.K;
    Oe.prototype.on = Oe.prototype.I;
    Oe.prototype.once = Oe.prototype.L;
    Oe.prototype.un = Oe.prototype.J;
    Oe.prototype.unByKey = Oe.prototype.M;
    Xe.prototype.getMap = Xe.prototype.i;
    Xe.prototype.setMap = Xe.prototype.setMap;
    Xe.prototype.setTarget = Xe.prototype.c;
    Xe.prototype.get = Xe.prototype.get;
    Xe.prototype.getKeys = Xe.prototype.O;
    Xe.prototype.getProperties = Xe.prototype.N;
    Xe.prototype.set = Xe.prototype.set;
    Xe.prototype.setProperties = Xe.prototype.H;
    Xe.prototype.unset = Xe.prototype.R;
    Xe.prototype.changed = Xe.prototype.v;
    Xe.prototype.dispatchEvent = Xe.prototype.b;
    Xe.prototype.getRevision = Xe.prototype.K;
    Xe.prototype.on = Xe.prototype.I;
    Xe.prototype.once = Xe.prototype.L;
    Xe.prototype.un = Xe.prototype.J;
    Xe.prototype.unByKey = Xe.prototype.M;
    Xl.prototype.getMap = Xl.prototype.i;
    Xl.prototype.setMap = Xl.prototype.setMap;
    Xl.prototype.setTarget = Xl.prototype.c;
    Xl.prototype.get = Xl.prototype.get;
    Xl.prototype.getKeys = Xl.prototype.O;
    Xl.prototype.getProperties = Xl.prototype.N;
    Xl.prototype.set = Xl.prototype.set;
    Xl.prototype.setProperties = Xl.prototype.H;
    Xl.prototype.unset = Xl.prototype.R;
    Xl.prototype.changed = Xl.prototype.v;
    Xl.prototype.dispatchEvent = Xl.prototype.b;
    Xl.prototype.getRevision = Xl.prototype.K;
    Xl.prototype.on = Xl.prototype.I;
    Xl.prototype.once = Xl.prototype.L;
    Xl.prototype.un = Xl.prototype.J;
    Xl.prototype.unByKey = Xl.prototype.M;
    Te.prototype.getMap = Te.prototype.i;
    Te.prototype.setMap = Te.prototype.setMap;
    Te.prototype.setTarget = Te.prototype.c;
    Te.prototype.get = Te.prototype.get;
    Te.prototype.getKeys = Te.prototype.O;
    Te.prototype.getProperties = Te.prototype.N;
    Te.prototype.set = Te.prototype.set;
    Te.prototype.setProperties = Te.prototype.H;
    Te.prototype.unset = Te.prototype.R;
    Te.prototype.changed = Te.prototype.v;
    Te.prototype.dispatchEvent = Te.prototype.b;
    Te.prototype.getRevision = Te.prototype.K;
    Te.prototype.on = Te.prototype.I;
    Te.prototype.once = Te.prototype.L;
    Te.prototype.un = Te.prototype.J;
    Te.prototype.unByKey = Te.prototype.M;
    bm.prototype.getMap = bm.prototype.i;
    bm.prototype.setMap = bm.prototype.setMap;
    bm.prototype.setTarget = bm.prototype.c;
    bm.prototype.get = bm.prototype.get;
    bm.prototype.getKeys = bm.prototype.O;
    bm.prototype.getProperties = bm.prototype.N;
    bm.prototype.set = bm.prototype.set;
    bm.prototype.setProperties = bm.prototype.H;
    bm.prototype.unset = bm.prototype.R;
    bm.prototype.changed = bm.prototype.v;
    bm.prototype.dispatchEvent = bm.prototype.b;
    bm.prototype.getRevision = bm.prototype.K;
    bm.prototype.on = bm.prototype.I;
    bm.prototype.once = bm.prototype.L;
    bm.prototype.un = bm.prototype.J;
    bm.prototype.unByKey = bm.prototype.M;
    Ve.prototype.getMap = Ve.prototype.i;
    Ve.prototype.setMap = Ve.prototype.setMap;
    Ve.prototype.setTarget = Ve.prototype.c;
    Ve.prototype.get = Ve.prototype.get;
    Ve.prototype.getKeys = Ve.prototype.O;
    Ve.prototype.getProperties = Ve.prototype.N;
    Ve.prototype.set = Ve.prototype.set;
    Ve.prototype.setProperties = Ve.prototype.H;
    Ve.prototype.unset = Ve.prototype.R;
    Ve.prototype.changed = Ve.prototype.v;
    Ve.prototype.dispatchEvent = Ve.prototype.b;
    Ve.prototype.getRevision = Ve.prototype.K;
    Ve.prototype.on = Ve.prototype.I;
    Ve.prototype.once = Ve.prototype.L;
    Ve.prototype.un = Ve.prototype.J;
    Ve.prototype.unByKey = Ve.prototype.M;
    lm.prototype.getMap = lm.prototype.i;
    lm.prototype.setMap = lm.prototype.setMap;
    lm.prototype.setTarget = lm.prototype.c;
    lm.prototype.get = lm.prototype.get;
    lm.prototype.getKeys = lm.prototype.O;
    lm.prototype.getProperties = lm.prototype.N;
    lm.prototype.set = lm.prototype.set;
    lm.prototype.setProperties = lm.prototype.H;
    lm.prototype.unset = lm.prototype.R;
    lm.prototype.changed = lm.prototype.v;
    lm.prototype.dispatchEvent = lm.prototype.b;
    lm.prototype.getRevision = lm.prototype.K;
    lm.prototype.on = lm.prototype.I;
    lm.prototype.once = lm.prototype.L;
    lm.prototype.un = lm.prototype.J;
    lm.prototype.unByKey = lm.prototype.M;
    qm.prototype.getMap = qm.prototype.i;
    qm.prototype.setMap = qm.prototype.setMap;
    qm.prototype.setTarget = qm.prototype.c;
    qm.prototype.get = qm.prototype.get;
    qm.prototype.getKeys = qm.prototype.O;
    qm.prototype.getProperties = qm.prototype.N;
    qm.prototype.set = qm.prototype.set;
    qm.prototype.setProperties = qm.prototype.H;
    qm.prototype.unset = qm.prototype.R;
    qm.prototype.changed = qm.prototype.v;
    qm.prototype.dispatchEvent = qm.prototype.b;
    qm.prototype.getRevision = qm.prototype.K;
    qm.prototype.on = qm.prototype.I;
    qm.prototype.once = qm.prototype.L;
    qm.prototype.un = qm.prototype.J;
    qm.prototype.unByKey = qm.prototype.M;
    return OPENLAYERS.ol;
}));

