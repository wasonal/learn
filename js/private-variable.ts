/**
 * 私有变量的实现
 */

// 1. 函数闭包实现
class Example1 {
    constructor() {
        let _name = 'xiaoming';

        this.getName = function() { return _name; }
    }

    getName() {};
}

// 2. 修改类 函数闭包实现
const Example2 = (function () {
    var _name = '';

    return class E {
        constructor(){}

        getName() {
            return _name;
        }
    }
})()

// 3. Symbol
const Example3 = (function () {
    let _name = Symbol('name');

    return class E {
        constructor(){
            this[_name] = '';
        }

        getName() {
            return this[_name];
        }
    }
})()

// 4. WeakMap
const Example4 = (function () {
    const _private = new WeakMap();

    return class E {
        constructor(){
            _private.set(this, 'xiaoming');
        }

        getName() {
            return _private.get(this);
        }
    }
})()