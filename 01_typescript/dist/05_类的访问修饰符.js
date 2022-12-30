"use strict";
// 访问修饰符
// 指的就是可以在类的成员前通过关键字来设置但前成员的访问权限
// public：公开的，默认  所有人都可以进行访问
// private：私有的，  只能在当前类中进行访问
// protected：受保护的， 只能在当前类或者子类中进行访问（也可以标记构造函数）
// readonly： 只读的，
// 对于有private和protected成员的类时， 只有其子类才可以对其进行赋值，(类型相同的其他类不可以赋值 因为类型不同)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["yellow"] = 1] = "yellow";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var Car = /** @class */ (function () {
    // public color: Color
    function Car() {
        this.color = Color.red;
        this.run(); // ok
        this.zairen(); // ok
    }
    // 加了private之后，当前成员就只能在当前类中使用
    Car.prototype.run = function () {
    };
    // 加了protected之后，当前类或者子类中使用
    Car.prototype.zairen = function () {
    };
    return Car;
}());
var car = new Car();
car.color;
// car.run() // no
// car.zairen() // no
var Aodi = /** @class */ (function (_super) {
    __extends(Aodi, _super);
    function Aodi() {
        var _this = _super.call(this) || this;
        _this.color; // ok
        // this.run() // no
        _this.zairen(); // ok
        return _this;
    }
    return Aodi;
}(Car));
var aodi = new Aodi();
aodi.color;
// aodi.run() // no
// aodi.zairen() no
