"use strict";
var Cat = /** @class */ (function () {
    // type: string
    // 构造函数中给参数前面加上修饰符，就相当与声明了一个属性，并把值赋给了这个属性
    function Cat(type) {
        this.type = type;
        this.name = '加菲猫';
        // this.type = type
    }
    return Cat;
}());
var cat = new Cat('橘猫');
// cat.name = '123'
console.log(cat.type);
