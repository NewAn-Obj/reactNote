/* 
  Person  人

  Chinese 中国人
  African 非洲人
*/
class Person {
  constructor(name, gender) {
    this.name = name
    this.gender = gender
  }

  eat() {
    console.log('都会吃')
  }
}

class Chinese extends Person {
  constructor(name, gender) {
    // 父类的构造函数
    super(name, gender)
    this.skin = 'yellow'
  }
  pingpong() {
    console.log('打乒乓球')
  }
}

const c1 = new Chinese('姚明', 40)
console.log(c1)
c1.eat()
c1.pingpong()

class African extends Person {
  constructor(name, gender) {
    super(name, gender)
    this.skin = 'black'
  }
  run() {
    console.log('跑的贼快')
  }
}

const xh = new African('小黑', 30)
console.log(xh)

/* 
  练习：
    Animal 动物
      name: 名字
      type: 品种
    方法：eat

    Dog
      leg:  4

      方法： bark
    
    Bird
      leg   2
    方法    fly

*/
class Animal {
  constructor(name, type) {
    this.name = name
    this.type = type
  }
  eat() {
    console.log('吃')
  }
}
class Dog extends Animal {
  constructor(name, type) {
    super(name, type)
    this.legs = 4
  }
  bark() {
    console.log('汪汪')
  }
}

const d = new Dog('小金', '金毛')
console.log(d)
