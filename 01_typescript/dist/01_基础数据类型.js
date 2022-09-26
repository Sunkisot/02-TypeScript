"use strict";
// number
var a = 10;
var b = NaN;
var c = Infinity;
var d = 0xA12; // 十六进制数字
var e = 42; // 二进制数字
var f = 61; // 八进制数字
// string
var str = '123';
var str1 = "232";
var str2 = "\u8FD9\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32" + a;
// boolean
var flag = true;
// 数组
// Array<数据类型>
var arr = [1, 2];
// 数据类型[]
var arr1 = [1, 2];
// 元组（Tuple）
var arr2 = [1, "2"];
arr2[0] = 123;
arr2[1] = 's';
// 限制了数组长度只能是2，除非push进去，限制了数组内元素类型只能是number或string
// arr2[2] = undefined
// arr2.push(1)
// void 空值
var res = undefined;
// undefined
var res1 = undefined;
// null
var res2 = null;
// any 任意类型
var somevar = 1123;
somevar = '123';
// never 类型
// never类型一般用在不可能返回内容的函数的返回值类型设置
function test() {
    while (true) {
    }
}
