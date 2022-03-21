function randomArray(arr) {
    let m = arr.length;

    while (m) {
        const curIndex = Math.floor(m-- * Math.random());
        [arr[m], arr[curIndex]] = [arr[curIndex], arr[m]];
    }

    return arr;
}

console.log(randomArray([1,2,3,4,5]));