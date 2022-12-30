// 接口
// 接口可以理解为一个约定 一个规范

// 接口使用interface进行声明
interface AjaxOption {
  url: string;
  type?: string; //属性后加问号代表这个属性可传可不传
  data?: object;
  success: (data: object) => void;
}

// options参数中 需要包含 url type data success
function ajax(options: AjaxOption) {
  console.log(options);
}
ajax({
  url: "https://www.baidu.com",
  // type: 'get',
  // data: {},
  success(data) {},
});

interface Point {
  readonly x: number;
  y: number;
  [propName: string]: any; // 字符串索引签名
  [index: number]: []; // 数字索引签名（数字索引的返回值必须是字符串索引返回值类型的子类型）
  n?: () => any;
}
let poi: Point = {
  x: 10,
  y: 10,
  z: 100,
};
// poi.x = 100 不可赋值

interface Obj3 {
  [k: string]: number;
}
const obj1: Obj3 = {
  "13": 1,
};

// 函数类型接口
interface fn3 {
  <T>(val: T): T;
}

const fun: fn3 = (val) => val;

fun<string>("1");

// 混合类型
interface fn4 {
  (start: string): string;
  a: number;
  b(): string;
}

function getFn4(): fn4 {
  let a = <fn4>((start: string) => start);
  a.a = 123;
  a.b = () => "123";
  return a;
}

/**
 * 1. 接口可以和接口组合
 * 2. 接口可以和类组合
 * 3. namespace既可以定义值又可以定义类型
 * 4. export 和 import 会导
 */

interface j1 {
  a: number;
}
interface j1 {
  b: string;
}

let z1: j1 = { a: 1, b: "123" };

export class j2 {
  a: number = 123;
}

export interface j2 {
  b: string;
}

export namespace j2 {
  export let c: boolean;
}
