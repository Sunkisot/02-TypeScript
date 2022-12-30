// number
let a: number = 10
let b: number = NaN
let c: number = Infinity
let d: number = 0xA12  // 十六进制数字
let e: number = 0b101010 // 二进制数字
let f: number = 0o75 // 八进制数字

// string
let str: string = '123'
let str1: string = "232"
let str2: string = `这是一个字符串${a}`

// boolean
let flag: boolean = true

// 数组
// Array<数据类型>
let arr: Array<number> = [1, 2]
// 数据类型[]
let arr1: number[] = [1, 2]

// 元组（Tuple）通常用于解构
let arr2: [number, string] = [1, "2"]
arr2[0] = 123
arr2[1] = 's'
// 限制了数组长度只能是2，除非push进去，限制了数组内元素类型只能是number或string
// arr2[2] = undefined
// arr2.push(1)

// void 空值
let res: void = undefined

// undefined
let res1: undefined = undefined;

// null
let res2: null = null

// any 任意类型
let somevar: any = 1123
somevar = '123'

// never 类型
// never类型一般用在不可能返回内容的函数的返回值类型设置
function test(): never {
  while (true) {

  }
}

export {a}