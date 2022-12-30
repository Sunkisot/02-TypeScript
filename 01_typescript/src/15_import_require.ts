import Type = require("./14_类型映射");
import { j2 } from "./08_接口";
/**
 * 1. 变量声明空间和类型声明空间的变量不能互用
 * 2. 默认情况下文件内部没有import或export，定义的变量和类型是全局的
 */
const i15: Type.A1 = { a: 123, b: "123" };
type i16 = Type.A1;

myLib.a = (a) => a;

console.log(myLib.a("123"));

greet("123");
greet(123);
new w5("123").a;

class i17 {
  constructor(public a: number) {}
}

let i18: i17 = new i17(123);

let i19 = j2.c;
/**
 * 1. 接口可以和接口组合
 * 2. 接口可以和类组合
 * 3. namespace既可以定义值又可以定义类型
 * 4. export 和 import 会导入目标的所有含义
 */