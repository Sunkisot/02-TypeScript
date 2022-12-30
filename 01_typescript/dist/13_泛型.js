"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var _01_______1 = require("./01_\u57FA\u7840\u6570\u636E\u7C7B\u578B");
// 泛型函数
function fn(val) {
    return val;
}
fn("123");
// 泛型类
var cl = /** @class */ (function () {
    function cl() {
        this.list = [];
        // static a: T  // 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型参数
    }
    cl.prototype.add = function (val) {
        this.list.push(val);
    };
    cl.prototype.min = function () {
        return this.list[0];
    };
    return cl;
}());
var func = function (val) { return val; };
var func1 = function (val) { return val; };
var func2 = function (val) { return val; };
function create(A) {
    return new A();
}
create(Object);
// 泛型约束
function fan(arg) {
    console.log(arg.list);
    return arg;
}
function fan1(obj, key) {
    return obj[key];
}
fan1({ a: 1 }, "a");
var b = _01_______1.a;
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
        this.hasMask = false;
    }
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper() {
        this.nametag = "123";
    }
    return ZooKeeper;
}());
var Animal = /** @class */ (function () {
    function Animal() {
        this.numLegs = 123;
    }
    return Animal;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.keeper = { hasMask: false };
        return _this;
    }
    return Bee;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.keeper = { nametag: "123" };
        return _this;
    }
    return Lion;
}(Animal));
// 类类型约束
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag; // typechecks!
createInstance(Bee).keeper.hasMask; // typechecks!
exports.default = b = 200;
