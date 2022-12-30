class Cat {
  // 如果给属性添加了readonly修饰 则这个属性无法被赋值
  // 而且属性必须在声明的时候或者在构造函数中被赋值！
  readonly name: string;
  // type: string
  // 构造函数中给参数前面加上修饰符，就相当与声明了一个属性，并把值赋给了这个属性
  constructor(public type: string) {
    this.name = "加菲猫";
    // this.type = type
  }
}
interface Cat1 {
  new (type: string): Cat;
}
// 1. 类的同名类型Cat可以描述类所创建的实例
// 2. 可以用 {new (): 实例类型} 描述类
let cat: Cat = new Cat("橘猫");
let catClass: Cat1 = Cat;

// cat.name = '123'
// console.log(cat.type)
