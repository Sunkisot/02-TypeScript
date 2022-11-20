// 定义这个类 必须有这个属性  从而可以放心使用这些属性

interface PersonInterFace {
  name: string,
  age: number,
  eat?(): void
}

class XiaoMing implements PersonInterFace {
  name: string = '小明'
  age: number = 18
  eat() {

  }
}
