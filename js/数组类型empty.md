数组对于empty的元素，在进行遍历方法的时候，不会去处理它
```
let a = new Array(5);
a.forEach((item) => console.log(item));

// no console

a[1] = 2;
a.forEach((item) => console.log(item));
// 2
```