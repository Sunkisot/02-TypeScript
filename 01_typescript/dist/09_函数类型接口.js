"use strict";
var sum = function (c, d) {
    return c + d;
};
sum(1, 2);
var Handler = /** @class */ (function () {
    function Handler() {
        this.info = '456';
    }
    Handler.prototype.onClick = function () {
        this.info = "123";
    };
    return Handler;
}());
var h = new Handler();
function fn(callBack) {
    callBack();
}
fn(h.onClick);
