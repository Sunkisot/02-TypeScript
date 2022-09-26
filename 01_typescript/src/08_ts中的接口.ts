// 接口
// 接口可以理解为一个约定 一个规范

// 接口使用interface进行声明
interface AjaxOption {
  url: string,
  type?: string,  //属性后加问号代表这个属性可传可不传
  data?: object,
  success: (data: object) => void
}

// options参数中 需要包含 url type data success
function ajax(options: AjaxOption) {
  console.log(options)
}
ajax({
  url: 'https://www.baidu.com',
  // type: 'get',
  // data: {},
  success(data) {

  }
})


interface Point {
  readonly x: number,
  y: number,
  [propName: string]: any
}
let poi: Point = {
  x: 10,
  y: 10,
  z: 100
}
// poi.x = 100 不可赋值