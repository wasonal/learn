/*
 * @Descripttion: 
 * @Author: denghuawen3<denghuawen3@jd.com>
 * @Date: 2021-09-23 17:54:15
 */
const isIterable = (object) => object !== null && typeof object === 'object' && typeof object[Symbol.iterator] === 'function';

Promise.fakeRace = (promiseArr) => {
    return new Promise((resolve, reject) => {
        if(!isIterable(promiseArr)) {
            const error = new TypeError(`${typeof promiseArr }${promiseArr} is not iterable (cannot read property Symbol(Symbol.iterator))`);
            reject(error);
        }
        if (promiseArr.length === 0) {
            return resolve([]);
        }

        promiseArr.forEach((promise) => {
            promise.then((res) => {
                resolve(res);
            }, (err) => {
                reject(err);
            })
        })
    })
}