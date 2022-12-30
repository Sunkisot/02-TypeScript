// 交叉类型
class G1 {
  name: string = "123";
  log(): void {
    console.log("123");
  }
}

class G2 {
  list: [] = [];
  log(): void {
    console.log("123");
  }
}

let G3: G1 & G2 = {
  name: "456",
  list: [],
  log() {
    console.log("123");
  },
}; 
// 联合类型
let L1: string | number = 123 // 其中一个类型
let L2: G1 | G2 = get(); // 可以访问其共有类型

function get(): G1 | G2 {
  return new G1();
}

L2.log;
// L2.name;


// 类型保护
// 自定义类型保护
function isFish(pet: G1 | G2): pet is G1 {
  return (<G1>pet).name !== undefined;
}
// typeof 类型保护
// 必须是 "number"， "string"， "boolean"或 "symbol" 才会进行类型保护
typeof L1 === 'number'
// instanceof 类型保护
// instanceof的右侧要求是一个构造函数
class G4 implements G1 {
  name: string = "789";
  log(): void {
    console.log("789");
  }
}
new G4() instanceof G1

// 非null、undefined断言
L1!.toString()



interface Person {
  [x: string]: number
}
type k3 = keyof Person
let k3: k3 = 123