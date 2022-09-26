// 接口继承接口
interface TwoPoint {
  x: number
  y: number
}

interface ThreePoint extends TwoPoint {
  z: number
}

let point: ThreePoint = {
  x: 100,
  y: 100,
  z: 100
}


interface FourPoint extends ThreePoint,TwoPoint {
  time: Date
}

let point1: FourPoint = {
  x: 100,
  y: 100,
  z: 100,
  time: new Date()
}



// 接口继承类

class Bird {
  name: string = '布谷鸟'
  fly(): void {

  }
}

interface BirdInterFace extends Bird {

}

let flyBird: BirdInterFace = {
  name: '飞鸟',
  fly() {
    
  }
}