/*
 * @Descripttion: 
 * @Author: denghuawen3<denghuawen3@jd.com>
 * @Date: 2021-09-22 22:03:27
 */
const isIterable = (object) => object !== null && typeof object === 'object' && typeof object[Symbol.iterator] === 'function';

Promise.fakeAll = (promiseArr) => {
    return new Promise((resolve, reject) => {
        if(!isIterable(promiseArr)) {
            const error = new TypeError(`${typeof promiseArr }${promiseArr} is not iterable (cannot read property Symbol(Symbol.iterator))`);
            reject(error);
        }
        if (promiseArr.length === 0) {
            return resolve([]);
        }
        
        const result = [];
        let count = 0;

        promiseArr.forEach((promise, i) => {
            promise.then((val) => {
                result[i] = val;
                count++;
                count === promiseArr.length && resolve(result);
            }, (err) => {
                reject(err);
            })
        })
    })
}