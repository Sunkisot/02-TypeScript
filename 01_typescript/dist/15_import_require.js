"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _08___1 = require("./08_\u63A5\u53E3");
/**
 * 1. 变量声明空间和类型声明空间的变量不能互用
 * 2. 默认情况下文件内部没有import或export，定义的变量和类型是全局的
 */
var i15 = { a: 123, b: "123" };
myLib.a = function (a) { return a; };
console.log(myLib.a("123"));
greet("123");
greet(123);
new w5("123").a;
var i17 = /** @class */ (function () {
    function i17(a) {
        this.a = a;
    }
    return i17;
}());
var i18 = new i17(123);
var i19 = _08___1.j2.c;
/**
 * 1. 接口可以和接口组合
 * 2. 接口可以和类组合
 * 3. namespace既可以定义值又可以定义类型
 * 4. export 和 import 会导入目标的所有含义
 */ 
