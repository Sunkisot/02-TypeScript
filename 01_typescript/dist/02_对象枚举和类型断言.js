"use strict";
// object类型(引用类型)
var o = {};
var o1 = [];
// 对象类型
var o2 = { name: '张三', age: 18 };
// enum 枚举类型
// gender: 0 1 -1
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 1] = "male";
    Gender[Gender["female"] = 0] = "female";
    Gender[Gender["unknow"] = -1] = "unknow";
})(Gender || (Gender = {}));
var gender = Gender.male;
var obj = {
    gender: Gender.male
};
// 类型断言(用的不多)
var stri = '123';
var len = stri.length;
var len1 = stri.length;
