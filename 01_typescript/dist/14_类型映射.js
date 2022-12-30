"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ReadonlyArray<T> 只读数组
var A3 = [1, 2];
// ConstructorParameters<T> 获取类的构造函数的参数类型类似Parameters
var AClass = /** @class */ (function () {
    function AClass(a, b) {
        this.a = a;
        this.b = b;
    }
    return AClass;
}());
var A15 = {
    fn: function () {
        this; // this == AObj
    },
    fn2: function () {
        this; // this == {c: []}
    },
};
// is 主要用在类型判断函数上，通过和函数返回值的比较，推断出参数类型
var isRegExp = function (val) { return '[object RegExp]' === Object.prototype.toString.call(val); };
function isRegExp1(val) {
    return '[object RegExp]' === Object.prototype.toString.call(val);
}
