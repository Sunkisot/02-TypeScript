// 泛型函数
function fn<T>(val: T): T {
  return val
}

fn<string>('123')

// 泛型类
class cl<T> {
  list: T[] = []
  add(val: T) {
    this.list.push(val)
  }
  min(): T {
    return this.list[0]
  }
}

// 泛型接口
interface fn4 {
  <T>(val: T): T
}

const func:fn4 = (val) => val 

interface obj4<T> {
  list: T[];
  eat(val: T):never;
}