// 类型别名
type A = string
type Coordinates = Pair<number>;
type NameLookup = Obj<string, number>;  
type fn2 = Function
// 数组
type Arr = [number, string]
type Pair<T> = [T, T]
// 对象
type Obj<T, U> = {
  a: string
  b: T
  c: U
  fn(val: string): void
}
// 函数
type fn = (val: string) => void
type fn1<T> = (val: T) => void

// 联合类型
// 可以计算属性
// interface不可以继承联合类型
type keys = '小王' | '小李';
type Tree<T> = T | { left: Tree<T>, right: Tree<T> };

type X = {
  [k in keys]: string;
}

let testX: X = {
  '小王': '123',
  '小李': '456'
}


// 继承

type Y = X & { '小明': number }

let testY: Y = {
  '小王': '123',
  '小李': '456',
  '小明': 123
}
