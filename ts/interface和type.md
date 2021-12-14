相同
1. 都可以描述一个对象或者函数
interface
```
interface Person {
    name: string
    age: number
}
interface setUser {
    (name: string): void
}
```
type
```
type Person = {
    name: string
    age: number
}
type setUser = (name: string) => void
```

2. 都允许扩展
而且可以interface和type互相extends，但是两者的扩展语法不太相同
interface extends interface
```
interface Person {
    name: string
    age: number
}
interface Staff extends Person {
    skill: string
}
```
type extends type
```
type Name = {
    name: string
}
type User = Name & { age: string }
```
interface extends type
type extends interface

不同点
type可以声明基本类型，联合类型，元祖等
```
interface Dog {
    name: string
}
interface Cat {
    age: number
}
type Animal = Dog | Cat
```
type可以使用typeof获取实例的类型进行赋值
```
let div = document.body
type El = typeof div
```
type可以使用类型映射
```
type Keys = 'firstname' | 'lastname'
type Person = {
    [key in Keys]: string
}
```
interface能够声明合并
```
interface User {
    name: string
}
interface User {
    age: number
}
/**
实际是
interface User {
    name: string
    age: number
}
*/
```