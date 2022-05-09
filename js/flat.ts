function flat<T>(arr: T[]): T[] {
    return arr.reduce((res, cur) => {
        return Array.isArray(cur) ? (Array.prototype.push.apply(res, flat(cur)), res) : (res.push(cur), res);
    }, [] as T[]);
}

console.log(flat([1,[2, [4, [3, 2], 2],3]]));
