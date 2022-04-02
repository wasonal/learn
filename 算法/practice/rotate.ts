function test(str: string) {
    function isNum(s: string) {
        return +s >= 0 && +s <= 9;
    }
    let max = '';
    for (let i = 0, pre = -1, startIndex = -1; i < str.length; i++) {
        if (!isNum(str[i])) {
            max = max.length > (i - startIndex) ? max : str.slice(startIndex, i);
            pre = -1;
            startIndex = -1;
            continue;
        }
        const num = +str[i];
        if (pre === -1 && startIndex === -1) {
            startIndex = i;
            pre = num;
            continue;
        }
        if (pre + 1 === num) {
            pre = num;
        } else {
            max = max.length > (i - startIndex) ? max : str.slice(startIndex, i);
            pre = -1;
            startIndex = -1;
        }
    }

    return max;
}

console.log(test("a12379abcdef2345sg76543a345ab6789"));