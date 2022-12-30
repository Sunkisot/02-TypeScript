abstract class Department {
  // 抽象类
  constructor(public name: string) {}
  printName(): void {
    console.log("Department name: " + this.name);
  }
  abstract printMeeting(): void; // 必须在派生类中实现
}

class SonDepartment extends Department {
  constructor() {
    super("name"); // 在派生类的构造函数中必须调用 super()
  }
  printMeeting(): void {
    console.log("printMeeting");
  }
  a(): void {
    console.log("a");
  }
}

let department = new SonDepartment();
console.log(department.name);
department.printName();
department.printMeeting();
department.a();

// 使用 typeof SonDepartment，意思是取SonDepartment类的类型，而不是实例的类型。 或者更确切的说，"告诉我SonDepartment标识符的类型"，也就是构造函数的类型。
let department1: typeof SonDepartment = SonDepartment
