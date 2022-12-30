// Readonly<T> 只读
type A1 = { a: number; b: string };
type A2 = Readonly<A1>;

// ReadonlyArray<T> 只读数组
let A3: ReadonlyArray<number> = [1, 2]
/**
 * 注意：把整个ReadonlyArray赋值到一个普通数组也是不可以的。 但是你可以用类型断言重写：
    a = ro as number[];
 */

// Rartial<T> 可选
type A3 = Partial<A1>;

// Required<T> 必填
type A4 = Required<A3>;

// Pick<T, K> 提取属性
type A5 = Pick<A1, "a">;

// Omit<T, K> 排除属性
type A6 = Omit<A1, "a">;

// Record<K, V> 通过Key的类型和Value的类型创建一个类型
type A7 = Record<"a" | "b", number>;

// Exclude<T, U> 过滤掉T中和U相同的类型，如果没有匹配上返回never
type A8 = Exclude<number | boolean, string | number>;

// Extract<T, U> 提取T中和U相同的类型，如果没有匹配上返回never
type A9 = Extract<number | string, boolean | "a">;

// NonNullable<T> 排除T中的null和undefined
type A10 = NonNullable<any[] | string | null | number | undefined | "a" | "c">;

// ReturnType<F> 获取函数F的返回值类型
type A11 = ReturnType<() => number>;

// Parameters<F> 获取函数F参数的类型，返回的是元组，元素顺序同参数顺序
type A12 = Parameters<(a: string | boolean, b: number) => void>;
// 源码: type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never

// InstanceType<C> 返回构造函数C生成的实例类型
interface AConstructor {
  new (): string;
}
type A13 = InstanceType<AConstructor>;

// ConstructorParameters<T> 获取类的构造函数的参数类型类似Parameters
class AClass {
  constructor(public a: string | boolean, public b: number) {}
}
type A14 = ConstructorParameters<typeof AClass>;

// ThisType 修改对象字面量中的this
interface AObj {
  a: number;
  b: string;
}
let A15: ThisType<AObj> = {
  fn() {
    this; // this == AObj
  },
  fn2(this: { c: [] }) {
    this; // this == {c: []}
  },
};

// extends 条件类型 T extends U ? X : Y
// 如果U的类型可以表示T, 那么返回X, 否则Y. 举几个例子:
// string的范围更大, '123'可以被string表示, 反之不可.
type A15 = string extends "123" ? string : 123;
type A16 = "123" extends string ? string : 123;

// infer 类型推断
// 删除元组中的第一个元素
type A17 = [number, string, boolean];
type A18<T extends any[]> = ((...args: T) => void) extends (
  a: any,
  ...args: infer P
) => void
  ? P
  : never;
type A19 = A18<A17>;
// 实现ReturnType<F>
type A20 = () => number
type A21<F extends (...args: any) => any> = F extends (...args: any) => infer P
  ? P
  : never;
type A22 = A21<A20>

// is 主要用在类型判断函数上，通过和函数返回值的比较，推断出参数类型
const isRegExp = (val: any): val is RegExp => '[object RegExp]' === Object.prototype.toString.call(val)
function isRegExp1(val: any): val is RegExp {
  return '[object RegExp]' === Object.prototype.toString.call(val)
}

export {A1}