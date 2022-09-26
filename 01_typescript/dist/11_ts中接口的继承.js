"use strict";
var point = {
    x: 100,
    y: 100,
    z: 100
};
var point1 = {
    x: 100,
    y: 100,
    z: 100,
    time: new Date()
};
// 接口继承类
var Bird = /** @class */ (function () {
    function Bird() {
        this.name = '布谷鸟';
    }
    Bird.prototype.fly = function () {
    };
    return Bird;
}());
var flyBird = {
    name: '飞鸟',
    fly: function () {
    }
};
