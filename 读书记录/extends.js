
/**
 * 一个好的继承实现方式可以做到
 * 继承父类的属性，方法，且在子类进行实例化的时候可以初始化在父类中的属性
 * 对属性的修改不会影响父类的属性和方法
 * */ 

 /*
// 1.原型链继承
// 通过将子类的prototype指向父类的实例实现继承
// 缺点：(1)子类进行实例化的时候不能设置父类中的属性;(2)子类修改继承的引用类型会影响其他实例
function Animal(name) {
    this.name = name
    this.family = []
}
Animal.prototype.say = function () {
    console.log('^%&*%&%')
}
function Dog() {
    
}
// 精髓在这呢
Dog.prototype = new Animal('dog')
Dog.prototype.constructor = Dog

let dog = new Dog(), dogg = new Dog()
console.log(dog.name)

console.log(dogg.family)
dog.family.push('sister')
console.log(dogg.family);
*/

/*
// 2.借用构造函数继承
// 利用call方法实现属性继承
// 缺点：(1)每次实例化都要调用一次父类函数(2)不能使用父类的方法
function Animal(name) {
    this.name = name
    this.family = []
}
Animal.prototype.say = function () {
    console.log('^%&*%&%')
}
function Dog(name) {
    // 精髓在这呢
    Animal.call(this, name)
}
let dog = new Dog('dog')
console.log(dog.name) // 报错
*/

/*
// 3.原型链继承和借用函数继承合并
// 结合了两种继承的特性并解决了它的缺点
// 缺点：(1)调用了两次父类函数
function Animal(name) {
    this.name = name
    this.family = []
}
Animal.prototype.say = function () {
    console.log('^%&*%&%')
}
function Dog(name) {
    Animal.call(this, name)
}
Dog.prototype = new Animal()
Dog.prototype.constructor = Dog

let dog = new Dog('dog')
console.log(dog.name)
dog.say()
*/

// 4. 寄生组合式继承
// 实现的过程中只需要执行一次父类函数
/*
function Animal(name) {
    this.name = name
    this.family = []
}
Animal.prototype.say = function () {
    console.log('^%&*%&%')
}
function Dog(name) {
    Animal.call(this, name)
}
// 这里用原生式继承代替prototype=new Parent()，就不用再执行多一次
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog

let dog = new Dog(), dogg = new Dog('dog')
console.log(dog.name)

console.log(dogg.family)
dog.family.push('sister')
console.log(dogg.family);
*/

// 5. es6 继承
class Animal{
    constructor(name) {
        this.name = name
        this.family = []
    }
    say() {
        console.log('^%&*%&%')
    }
}
class Dog extends Animal{
    constructor(name) {
        super(name)
    }
}

let dog = new Dog(), dogg = new Dog('dog')
console.log(dog.name)

console.log(dogg.family)
dog.family.push('sister')
console.log(dogg.family);
