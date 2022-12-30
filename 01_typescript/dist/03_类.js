"use strict";
var Person = /** @class */ (function () {
    function Person(name) {
        // 声明好属性后，属性必须赋值一个默认值或在构造函数中进行初始化
        this.age = 18;
        this.name = name;
    }
    Person.prototype.asyHi = function (msg) {
        console.log(msg);
    };
    return Person;
}());
// class 声明一个值的同时也声明了一个类型
var person;
