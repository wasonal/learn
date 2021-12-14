1. 为何有的地方使用 require 去引用一个模块时需要加上 default？ require('xx').default
2. 经常在各大UI组件引用的文档上会看到说明 import { button } from 'xx-ui' 这样会引入所有组件内容，需要添加额外的 babel 配置，比如 babel-plugin-component？
3. 为什么可以使用 es6 的 import 去引用 commonjs 规范定义的模块，或者反过来也可以又是为什么？
4. 我们在浏览一些 npm 下载下来的 UI 组件模块时（比如说 element-ui 的 lib 文件下），看到的都是 webpack 编译好的 js 文件，可以使用 import 或 require 再去引用。但是我们平时编译好的 js 是无法再被其他模块 import 的，这是为什么？
5. babel 在模块化的场景中充当了什么角色？以及 webpack ？哪个启到了关键作用？
6. 听说 es6 还有 tree-shaking 功能，怎么才能使用这个功能？

webpack和babel在模块化中的作用
webpack模块化的原理
webpack打包后是一个如下的自执行函数，参数是按文件划分的js文件(就是webpack中所谓的模块——module)
```
(function(modules) {

})([]);
```
自执行函数里面有一个webpack_require函数
```
function __webpack_require__(moduleId) {
    var module = {
        i: moduleId,
        l: false,
        exports: {},
    };

    modules[moduleId].call(module.exports, module, module.exports, __webpacl_require__);

    return module.exports;
}
```
而传入的modules参数是一个参数为
```
module, __webpack_exports__, __webpacl_require__
```
的函数
可以看到，```modules[moduleId].call(...rest)```这里调用了函数,调用了函数之后就返回了module.exports这个对象，所以调用函数是为了给module.exports中放入文件导出的对象

babel
babel是专门用来处理es6转es5的插件，当然也包括了es6的import，export的模块语法的转换。babel的转换是将es6的模块语法转换成commonjs的规范
babel的转换
**导出模块转换**
```
export default 123;

export const a = 123;

const b = 3;
const c = 4;
export { b,c };
```
会转换为
```
exports.default = 123;
export.a = 123;
export.b = 3;
export.c = 4;
export.__esModule = true; // 表示原本的代码是es6
```
babel对es6的模块导出转换逻辑非常简单，即将所有的数据都挂载在exports上，并带上一个__esModule的标识

**导入模块转换**
```
import a from './a.js';
```
会转换为
```
var a = require('./a.js');
```
import的本意是引用一个es6模块中的default导出
而通过babel转换后却是得到整个对象，所以需要对a做些改变
```
function _interopRequireDefault(obj) {
    return obj && obj.__esModule
        ? obj
        : { 'default': obj };
}

var _a = require('./a.js');
var _a2 = _interopRequireDefault(a);

var a = _a['default'];
```

***通配符**
```
import * as a from './a.js';
```
上面这段模块导入的本意是将es6模块的所有导出以及default输出打包为一个对象复制给a变量
```
export default 123;

export const a = 123;

const b = 3;
const c = 4;
export { b,c };
```
转换为
```
exports.default = 123;
export.a = 123;
export.b = 3;
export.c = 4;
export.__esModule = true; // 表示原本的代码是es6
```
转换结果其实就已经符合意图，所以直接返回这个export对象
如果本来是commonjs模块，因为导出的时候没有default属性，所以需要添加一个default属性
并吧整个对象再次复制给default属性
```
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};
        if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    newObj[key] = obj[key];
                }
            }
        }
        newObj.default = obj;
        return newObj;
    }
}
```
**解构导入**
```
import { a } from 'a.js';
```
转换为
```
var a = require('./a.js').a;
```
