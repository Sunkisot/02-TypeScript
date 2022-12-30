"use strict";
var point = {
    x: 100,
    y: 100,
    z: 100,
};
var point1 = {
    x: 100,
    y: 100,
    z: 100,
    time: new Date(),
};
// 接口继承类
var Bird = /** @class */ (function () {
    function Bird() {
        this.name = "布谷鸟";
    }
    Bird.prototype.fly = function () { };
    return Bird;
}());
var flyBird = {
    name: "飞鸟",
    fly: function () { },
};
var AClock = /** @class */ (function () {
    function AClock(a, b) {
        this.a = 123;
    }
    AClock.prototype.fn = function () {
        console.log("AClock");
    };
    return AClock;
}());
var BClock = /** @class */ (function () {
    function BClock(a, b) {
        this.a = 200;
    }
    BClock.prototype.fn = function () {
        console.log("BClock");
    };
    return BClock;
}());
function createClock(ctor, a, b) {
    return new ctor(a, b);
}
var aClock = createClock(AClock, "1", 2);
var bClock = createClock(BClock, "1", 2);
