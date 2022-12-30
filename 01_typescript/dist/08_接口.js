"use strict";
// 接口
// 接口可以理解为一个约定 一个规范
Object.defineProperty(exports, "__esModule", { value: true });
exports.j2 = void 0;
// options参数中 需要包含 url type data success
function ajax(options) {
    console.log(options);
}
ajax({
    url: "https://www.baidu.com",
    // type: 'get',
    // data: {},
    success: function (data) { },
});
var poi = {
    x: 10,
    y: 10,
    z: 100,
};
var obj1 = {
    "13": 1,
};
var fun = function (val) { return val; };
fun("1");
function getFn4() {
    var a = (function (start) { return start; });
    a.a = 123;
    a.b = function () { return "123"; };
    return a;
}
var z1 = { a: 1, b: "123" };
var j2 = /** @class */ (function () {
    function j2() {
        this.a = 123;
    }
    return j2;
}());
exports.j2 = j2;
(function (j2) {
})(j2 = exports.j2 || (exports.j2 = {}));
exports.j2 = j2;
