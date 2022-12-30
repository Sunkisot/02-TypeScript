/**
 * 无论全局有没有真实的定义这个变量，
 * 这个定义只是为了类型声明
 */

// 全局变量
declare var w1: number;

// 全局函数
declare function greet(s: string): void;
declare function greet(l: number): void; // 函数重载

// 对象（此时namespace声明的是对象）
declare namespace myLib {
  function a(s: string): string;
  let b: number;
}

// 可重用类型（接口）
interface w2 {
  a: number;
  b?: string;
}
declare function fn1(s: w2): void;

// 可重用类型（类型别名）
type w3 = string | (() => string) | w2;

declare function fn2(s: w3): void;

// 组织类型 (此时namespace声明的是类型)
declare namespace w4 {
  interface a {
    verbose: boolean;
  }
  interface b {
    modal: boolean;
    title?: string;
    color?: string;
  }
  type c = "123" | 123;
}

// 类
declare class w5 {
  constructor(s: string);

  a: string;
  fn(): void;
}
