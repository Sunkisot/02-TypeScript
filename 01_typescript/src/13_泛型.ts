import { a } from "./01_基础数据类型";
// 泛型函数
function fn<T>(val: T): T {
  return val;
}

fn<string>("123");

// 泛型类
class cl<T> {
  list: T[] = [];
  add(val: T) {
    this.list.push(val);
  }
  min(): T {
    return this.list[0];
  }
  // static a: T  // 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型参数
}

// 泛型接口
interface fn4 {
  <T>(val: T): T;
}

const func: fn4 = (val) => val;
const func1: <T>(val: T) => T = (val) => val;
const func2: { <T>(val: T): T } = (val) => val;

interface obj4<T> {
  list: T[];
  eat(val: T): never;
  a: { new (): [] };
}

function create<T, U>(A: { new (): T | U }): T | U {
  return new A();
}

create<object, any[]>(Object);

// 泛型约束
function fan<T extends obj4<string>>(arg: T): T {
  console.log(arg.list);
  return arg;
}

function fan1<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
fan1({ a: 1 }, "a");

let b = a;

class BeeKeeper {
  hasMask: boolean = false;
}

class ZooKeeper {
  nametag: string = "123";
}

class Animal {
  numLegs: number = 123;
}

class Bee extends Animal {
  keeper: BeeKeeper = { hasMask: false };
}

class Lion extends Animal {
  keeper: ZooKeeper = { nametag: "123" };
}
// 类类型约束
function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

createInstance(Lion).keeper.nametag; // typechecks!
createInstance(Bee).keeper.hasMask; // typechecks!
export {};
export default b = 200;
