/** 乱序
 * 打乱数组
 */
const shuffle = (arr: number[]) => {
    const len = arr.length - 1;
    for (let i = 0; i <= len; i++) {
        const transferIndex = len * Math.random();
        [arr[i], arr[transferIndex]] = [arr[transferIndex], arr[i]];
    }
    return arr;
}

// 乱序测试方法
// 测试原理是：将 [1, 2, 3, 4, 5] 乱序 10 万次，计算乱序后的数组的第一个元素是 1、2、3、4、5 的次数分别是多少
const test = (fn: (arr: number[]) => number[]) => {
    const arr = [1, 2, 3, 4, 5];
    const judge: Record<string, number> = {};
    
    for(let i = 0; i < 10000; i++) {
        const result = shuffle(arr);
        const [n] = result;
        judge[n] = judge[n] === undefined ? 1 : judge[n] + 1;
    }

    return judge;
}

interface Member {
    name?: string;
    age?: number;
}

type Omitt<A, B> = {
    [K in Exclude<keyof A, B>]: A[K]
};

type t = Omitt<'a' | 'b', 'a' | 'c'>;
