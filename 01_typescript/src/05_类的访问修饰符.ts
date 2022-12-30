// 访问修饰符
// 指的就是可以在类的成员前通过关键字来设置但前成员的访问权限
// public：公开的，默认  所有人都可以进行访问
// private：私有的，  只能在当前类中进行访问
// protected：受保护的， 只能在当前类或者子类中进行访问（也可以标记构造函数）
// readonly： 只读的，
// 对于有private和protected成员的类时， 只有其子类才可以对其进行赋值，(类型相同的其他类不可以赋值 因为类型不同)

enum Color {
  red,
  yellow,
  blue
}

class Car {
  // 如果不加修饰符或者加public，则当前成员是公开的，所有人都可以访问
  color: Color
  // public color: Color
  constructor() {
    this.color = Color.red
    this.run() // ok
    this.zairen() // ok
  }
  // 加了private之后，当前成员就只能在当前类中使用
  private run () {

  }
  // 加了protected之后，当前类或者子类中使用
  protected zairen() {

  }
}

let car = new Car()
car.color
// car.run() // no
// car.zairen() // no


class Aodi extends Car {
  constructor() {
    super()
    this.color // ok
    // this.run() // no
    this.zairen() // ok
  }
}

let aodi = new Aodi()
aodi.color
// aodi.run() // no
// aodi.zairen() no