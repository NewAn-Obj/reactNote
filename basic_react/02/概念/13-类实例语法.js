// 类实例语法
class Person {
  // constructor() {
  //   this.name = 'zs'
  //   this.age = 18
  // }
  name = 'zs'
  age = 18
  say = () => {
    console.log('哈哈哈')
  }
}

const p = new Person()
console.log(p)
p.say()
