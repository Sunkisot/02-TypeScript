"use strict";
// object类型(引用类型)
var o = {};
var o1 = [];
// 对象类型
var o2 = { name: "张三", age: 18 };
var a1 = { a: 123, b: "123" };
var a2 = 0.5 < Math.random() ? 123 : "123";
// 类型保护
if (typeof a2 === "number") {
    a2 = a2 * 2;
}
// 类型断言也可以进行类型定义
var o3 = {};
// enum 枚举类型
// gender: 0 1 -1
// Gender是类型,  Gender.male/Gender[0] 是值
// 某些情况下Gender.male也可以是一种类型
// 枚举声明时 继承成一个类型 又声明了一个对象
// 只有数字枚举具有反向映射，字符串成员不生成反向映射
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 1] = "male";
    Gender[Gender["female"] = 0] = "female";
    Gender[Gender["unknow"] = -1] = "unknow";
})(Gender || (Gender = {}));
var gender = Gender.male;
console.log(Gender[1] === "male");
var obj = {
    kind: 123,
    a: Gender.male
};
console.log(0 /* Enum.A */);
// 类型断言(用的不多)
var stri = "123";
var len = stri.length;
var len1 = stri.length;
