/* class 类  extends 继承 */
// function Teacher(name, age) {
//   this.name = name
//   this.age = age
// }

// Teacher.prototype.sayHi = function () {
//   console.log('大家好，我是' + this.name)
// }

// const stu = new Teacher('松哥', 29)
// console.log(stu)
// stu.sayHi()

// class是一个语法糖
class Teacher {
  // 构造函数
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayHi() {
    console.log('大家好，我是' + this.name)
  }

  sing() {
    console.log('能够唱歌')
  }
}

const stu = new Teacher('松哥', 29)
console.log(stu)
stu.sing()
