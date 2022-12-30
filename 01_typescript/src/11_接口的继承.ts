// 接口继承接口
interface TwoPoint {
  x: number;
  y: number;
}

interface ThreePoint extends TwoPoint {
  z: number;
}

let point: ThreePoint = {
  x: 100,
  y: 100,
  z: 100,
};

interface FourPoint extends ThreePoint, TwoPoint {
  time: Date;
}

let point1: FourPoint = {
  x: 100,
  y: 100,
  z: 100,
  time: new Date(),
};

// 接口继承类

class Bird {
  name: string = "布谷鸟";
  fly(): void {}
}

interface BirdInterFace extends Bird {}

let flyBird: BirdInterFace = {
  name: "飞鸟",
  fly() {},
};

// 类的实例和静态部分的区别
interface ClockInterface {
  a: number;
  fn(): void;
}
interface ClockConstructor {
  new (a: string, b: number): ClockInterface;
}

class AClock implements ClockInterface {
  constructor(a: string, b: number) {}
  a = 123;
  fn() {
    console.log("AClock");
  }
}

class BClock implements ClockInterface {
  constructor(a: string, b: number) {}
  a = 200;
  fn() {
    console.log("BClock");
  }
}

function createClock(
  ctor: ClockConstructor,
  a: string,
  b: number
): ClockInterface {
  return new ctor(a, b);
}

let aClock = createClock(AClock, "1", 2);
let bClock = createClock(BClock, "1", 2);
