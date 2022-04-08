<!--
 * @Descripttion: 
 * @Author: denghuawen3<denghuawen3@jd.com>
 * @Date: 2021-11-22 14:52:38
-->
```
Promise.fakeAll = function fakeAll<T>(parr: Promise<T>[]) {
    let finishCount = 0;
    const resArr: Array<T> = [];
    return new Promise((resolve, reject) => {
        parr.forEach((p, i) => {
            Promise.resolve(p).then((res) => {
                finishCount++;
                resArr[i] = res;
                if (finishCount === parr.length) {
                    resolve(resArr);
                }
            })
            .catch((e) => {
                reject(e);
            });
        });
    });
};
```