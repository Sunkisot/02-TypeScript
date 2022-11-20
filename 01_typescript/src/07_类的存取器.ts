class People {
  private _name: string = ''
  // 属性存取器

  get name (): string {
    return this._name
  }
  set name (value: string) {
    // 设置属性可以增加校验逻辑
    if(value.length < 2 || value.length > 5) {
      throw new Error('名字不合法不允许使用')
    }
    this._name = value
  } 
}
let p = new People()
p.name = 'asdfasdads'
console.log(p.name)