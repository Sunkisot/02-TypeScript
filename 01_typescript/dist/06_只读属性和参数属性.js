"use strict";
var Cat = /** @class */ (function () {
    // type: string
    // 构造函数中给参数前面加上修饰符，就相当与声明了一个属性，并把值赋给了这个属性
    function Cat(type) {
        this.type = type;
        this.name = "加菲猫";
        // this.type = type
    }
    return Cat;
}());
// 1. 类的同名类型Cat可以描述类所创建的实例
// 2. 可以用 {new (): 实例类型} 描述类
var cat = new Cat("橘猫");
var catClass = Cat;
// cat.name = '123'
// console.log(cat.type)
