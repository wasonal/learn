// 给定一个升序整型数组[0,1,2,4,5,7,13,15,16],找出其中连续出现的数字区间，输出为["0->2","4->5","7","13","15->16"] 
function split(arr) {
    const getLink = (arr) => {
        const splitArr = [];
        let cur = [];
        for (let i = 0; i < arr.length; i++) {
            if (cur.length === 0) {
                cur.push(arr[i]);
                continue;
            }

            if (cur[cur.length - 1] + 1 === arr[i]) {
                cur.push(arr[i]);
            } else {
                splitArr.push(cur);
                cur = [arr[i]];
            }
        }

        cur.length && splitArr.push(cur);

        return splitArr;
    }

    const linkArr = getLink(arr);

    return linkArr.map((a) => {
        if (a.length === 1) { return `${a[0]}`; }
        else { return `${a[0]}->${a[a.length - 1]}` };
    });
}