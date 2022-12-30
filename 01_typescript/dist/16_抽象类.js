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
var Department = /** @class */ (function () {
    // 抽象类
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
var SonDepartment = /** @class */ (function (_super) {
    __extends(SonDepartment, _super);
    function SonDepartment() {
        return _super.call(this, "name") || this;
    }
    SonDepartment.prototype.printMeeting = function () {
        console.log("printMeeting");
    };
    SonDepartment.prototype.a = function () {
        console.log("a");
    };
    return SonDepartment;
}(Department));
var department = new SonDepartment();
console.log(department.name);
department.printName();
department.printMeeting();
department.a();
// 使用 typeof SonDepartment，意思是取SonDepartment类的类型，而不是实例的类型。 或者更确切的说，"告诉我SonDepartment标识符的类型"，也就是构造函数的类型。
var department1 = SonDepartment;
