function hasLoop(obj){
	function loop(obj, arr) {
        const newArr = arr.concat([obj]);
        for (let key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                if (arr.includes(obj[key]) || loop(obj[key], newArr)) {
                    return true;
                }
            }
        }

        return false;
    }

    return loop(obj, []);
}

const o = {};
const oo = { a: {}, b: o }
o.a = oo;
console.log(hasLoop(oo));