// object类型(引用类型)
let o: object = {};
let o1: object = [];

// 对象类型
let o2: { name: string; age: number } = { name: "张三", age: 18 };
interface O1 {
  a: number;
}
interface O2 {
  b: string;
}

let a1: O1 & O2 = { a: 123, b: "123" };
let a2: string | number = 0.5 < Math.random() ? 123 : "123";
// 类型保护
if (typeof a2 === "number") {
  a2 = a2 * 2;
}

// 类型断言也可以进行类型定义
let o3 = <O1 & O2>{};

// enum 枚举类型
// gender: 0 1 -1
// Gender是类型,  Gender.male/Gender[0] 是值
// 某些情况下Gender.male也可以是一种类型
// 枚举声明时 继承成一个类型 又声明了一个对象
// 只有数字枚举具有反向映射，字符串成员不生成反向映射
enum Gender {
  male = 1, // 默认 0 1 2 字符串枚举没有自增
  female = 0,
  unknow = -1,
}
let gender: Gender = Gender.male;
console.log(Gender[1] === "male");

interface Circle {
  kind: Gender.male;
  [propName: string]: any;
}

let obj: Circle = {
  kind: 123,
  a: Gender.male
};
// 常量枚举 编译后会被内联到使用的地方
const enum Enum {
  A,
  B,
  C
}
console.log(Enum.A) 

// 类型断言(用的不多)
let stri = "123";
let len: number = (<string>stri).length;
let len1: number = (stri as string).length;
