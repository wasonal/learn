/*
 * @Descripttion: 
 * @Author: denghuawen3<denghuawen3@jd.com>
 * @Date: 2021-08-24 20:19:03
 */
/**
 * 1. 传入执行函数
 * 2. 状态控制
 * 3. then的支持
 * 4. 异步支持
 * 5. then方法多次调用
 * 6. 链式调用
 * 7. 环形调用报错
 * 8. 错误捕获
 * 9. then错误捕获
 * 10. reject、pending push callback代码优化
 * 11. resolve reject变成可选参数
 * 12. 静态调用
 * 13. Promise A+ 测试
 * 14. resolvePromise 改造: 判断是否是promise的改造
 */ 

 const PROMISE_STATE = {
    PENGDING: 'pending',
    FULLFILLED: 'fullfilled',
    REJECTED: 'rejected',
}

let i = 0;

const isFunction = (fn) => typeof fn === 'function';
const isObject = (obj) => typeof obj === 'object';

const resolvePromise = (originPromise, x, resolve, reject) => {
    if (originPromise === x) {
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'));
    }
    if (x instanceof PromiseLike) {
        x.then(resolve, reject);
    } else {
        resolve(x);
    }
}

/** Promise
 * new Promise((res, rej) => {
 *  if (/成功/) { res(val) }
 *  else { rej(val) }
 * }).then(function fullfilled(val) {
 *  console.info(val);
 *  return val;
 * }, function rejected(err) {
 *  console.error(err);
 * })
 */
class PromiseLike{
    static resolve(value) {
        return new PromiseLike((resolve) => resolve(value));
    }

    static reject(value) {
        return new PromiseLike((resolve, reject) => reject(value));
    }

    constructor(executor) {
        this.promiseState = PROMISE_STATE.PENGDING;
        this.promiseResult = undefined;

        this.index = i++;

        this.onFullfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        try {
            executor(this._resolve.bind(this), this._reject.bind(this));
        } catch(error) {
            this._reject(error);
        }
    }

    _resolve(value) {
        if (this.promiseState === PROMISE_STATE.PENGDING) {
            this.promiseResult = value;
            this.promiseState = PROMISE_STATE.FULLFILLED;
            while (this.onFullfilledCallbacks.length > 0) {
                const fn = this.onFullfilledCallbacks.shift();
                fn && fn(this.promiseResult);
            }
        }
    }

    _reject(value) {
        if (this.promiseState === PROMISE_STATE.PENGDING) {
            this.promiseResult = value;
            this.promiseState = PROMISE_STATE.REJECTED;
            while (this.onRejectedCallbacks.length > 0) {
                const fn = this.onRejectedCallbacks.shift();
                fn && fn(this.promiseResult);
            }
        }
    }

    then(onFullfilled, onRejected) {
        onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : (value) => value;
        onRejected = typeof onRejected === 'function' ? onRejected : (error) => { throw error; };

        const innerPromise = new PromiseLike((res, rej) => {
            if (this.promiseState === PROMISE_STATE.FULLFILLED) {
                queueMicrotask(() => {
                    try {
                        const x = onFullfilled(this.promiseResult);
                        resolvePromise(innerPromise, x, res, rej);
                    } catch(e) {
                        rej(e);
                    }
                })
            } else if (this.promiseState === PROMISE_STATE.REJECTED) {
                queueMicrotask(() => {
                    try {
                        const x = onRejected(this.promiseResult);
                        resolvePromise(innerPromise, x, rej, res);
                    } catch (e) {
                        rej(e);
                    }
                })
            } else {
                this.onFullfilledCallbacks.push(() => {
                    queueMicrotask(() => {
                        try {
                            const x = onFullfilled(this.promiseResult);
                            resolvePromise(innerPromise, x, res, rej);
                        } catch (e) {
                            rej(e);
                        }
                    })
                });
                this.onRejectedCallbacks.push(() => {
                    queueMicrotask(() => {
                        try {
                            const x = onRejected(this.promiseResult);
                            resolvePromise(innerPromise, x, res, rej);
                        } catch (e) {
                            rej(e);
                        }
                    })
                });
            }
        });

        return innerPromise;
    }
}

PromiseLike.resolve().then(() => {
    console.log(0);
    return PromiseLike.resolve(4);
}).then((res) => {
    console.log(res)
})
