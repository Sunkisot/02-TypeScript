interface SumInterFace {
  (a: number, b: number): number
}

let sum: SumInterFace = function(c: number, d: number) {
  return c + d
}

sum(1, 2)


class Handler {
  info: string = '456'
  onClick() {
    this.info = "123"
  }
}
let h = new Handler()
function fn(callBack: () => void) {
  callBack()
}

fn(h.onClick)
