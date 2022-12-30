"use strict";
var People = /** @class */ (function () {
    function People() {
        this._name = '';
    }
    Object.defineProperty(People.prototype, "name", {
        // 属性存取器
        get: function () {
            return this._name;
        },
        set: function (value) {
            // 设置属性可以增加校验逻辑
            if (value.length < 2 || value.length > 5) {
                throw new Error('名字不合法不允许使用');
            }
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return People;
}());
var p = new People();
p.name = 'asdfasdads';
console.log(p.name);
