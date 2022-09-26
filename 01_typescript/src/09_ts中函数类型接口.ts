interface sumInterFace {
  (a: number, b: number): number
}

let sum: sumInterFace = function(c: number, d: number) {
  return c + d
}

sum(1, 2)