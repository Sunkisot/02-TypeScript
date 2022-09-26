class Person {
  // 和es6不同的是，TS中属性必须声明，需要制定类型
  name: string
  // 声明好属性后，属性必须赋值一个默认值或在构造函数中进行初始化
  age: number = 18
  constructor(name: string) {
    this.name = name
  }
  asyHi(msg: string): void {
    console.log(msg)
  }
}

