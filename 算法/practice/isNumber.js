function isNumber(s) {
    const stateArr = [
        { ' ': 0, s: 1, p: 4, n: 3 }, // 空格0
        { n: 2, p: 4 }, // +-1
        { n: 2, p: 3, e: 6, ' ': 9 }, // 小数点前数字2
        { n: 5, e: 6, ' ': 9 }, // 小数点3
        { n: 5 }, // 前无数字小数点4
        { n: 5, e: 6, ' ': 9 }, // 小数点后数字5
        { s: 7, n: 8 }, // e6
        { n: 8 }, // 符号7
        { n: 8, ' ': 9 }, // 数字8
        { ' ': 9 }, // 空格9
    ];
    debugger;
    let index = 0;
    for (let i = 0; i < s.length; i++) {
        let k = '';
        if (s[i] >= '0' && s[i] <= '9') {
            k = 'n';
        } else if (s[i] === ' ') {
            k = ' ';
        } else if (s[i].toLocaleLowerCase() === 'e') {
            k = 'e';
        } else if(s[i] === '.') {
            k = 'p';
        } else if (s[i] === '+' || s[i] === '-') {
            k = 's';
        }

        if (stateArr[index] && stateArr[index][k] !== undefined){
            index = stateArr[index][k];
        } else {
            return false;
        }
    }

    return [2, 3, 5, 8, 9].includes(index);
};

console.log(isNumber('3.'));