// function Person(){}

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  static sayHi() {
    console.log('哈哈')
  }

  // static关键字：静态
  static aa = 'bb'
}

const p = new Person('zs', 19)
Person.sayHi()

// 实例成员: 通过实例调用的属性或者方法，，，叫做实例成员（属性或者方法）
// 静态成员：通过类或者构造函数本身才能访问的属性或者方法
// console.log(p)

// console.log(p.name)
// console.log(p.age)
// p.sayHi()

// console.log(Person.aa)
// console.log(p.aa)
