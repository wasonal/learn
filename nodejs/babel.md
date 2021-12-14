
babel5->babel6的升级
去掉了export default时候导入数据的hack
babel5的时候，对于export default的数据，导入是可以直接转化为require('some.js')的
```
// some.js
export default 123;
```
```
var a = require('some.js'); // a = 123
```
但是如果在some.js中如果进行了具名的导出，那么最后导入的结果将会是一个对象
```
// some.js
export default 123;
export const a = 111;
```
```
var a = require('some.js'); // a = { default: 123, a: 111 }
```
引入方没有进修改就会产生导出错误的问题
而在babel6中则去掉了这个处理
遵循es6的定义，即也将default视为一个具名的导出
```
// some.js
export default 123;
```
```
var a = require('some.js').deault; // a = 123
```
tips: 升级babel6不兼容的问题可以通过 babel-plugin-add-module-exports 插件修复