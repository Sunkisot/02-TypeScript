// object类型(引用类型)
let o: object = {}
let o1: object = []

// 对象类型
let o2: { name: string, age: number } = { name: '张三', age: 18 }

// enum 枚举类型
// gender: 0 1 -1
enum Gender {
  male = 1, // 默认 0 1 2
  female = 0,
  unknow = -1
}
let gender: Gender = Gender.male

let obj = {
  gender: Gender.male
}

// 类型断言(用的不多)
let stri: any = '123'
let len: number = (<string>stri).length
let len1: number = (stri as string).length