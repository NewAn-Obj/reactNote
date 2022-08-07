class Person {
  // constructor() {
  //   this.name = 'zs'
  //   this.age = 19
  // }
  // 类实例属性
  name = 'zs'
  age = 19

  say = function () {
    console.log('哈哈哈')
  }
}

const p = new Person()
console.log(p)
p.say()
