function arrToTree(arr, keys) {
    class Obj {
        constructor(value) {
            this.value = value;
            this.children = [];
        }
    }

    function pushItem(childList, item, level) {
        if (level >= keys.length) { return; }
        const key = keys[level];
        const value = item[key];
        const inItem = childList.find((c) => c.value === value);
        const newItem = inItem || new Obj(value);
        if (!inItem) {
            childList.push(newItem);
        }

        pushItem(newItem.children, item, level + 1);
    }

    const result = [];
    arr.forEach((i) => pushItem(result, i, 0))

    return result;
}

const entries = [
    {
        "province": "浙江", "city": "杭州", "name": "西湖"
    }, {
        "province": "四川", "city": "成都", "name": "锦里"
    }, {
        "province": "四川", "city": "成都", "name": "方所"
    }, {
        "province": "四川", "city": "阿坝", "name": "九寨沟"
    }
];
const level = ["province", "city", "name"];

console.log(JSON.stringify(arrToTree(entries, level), null, 2));