class Animal {
  age: number
  constructor(age: number) {
    this.age = age
  }
  eat() {
    console.log('吃')
  }
}

class Dog extends Animal {
  type: string
  constructor(type: string, age: number) {
    super(age)
    this.type = type
  }
  eat() {
    // 会覆盖父类中的方法
    console.log('狗中的eat')
  }
}

var dog = new Dog('哈士奇', 18)
dog.eat()