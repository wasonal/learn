/*
 * @Descripttion: 
 * @Author: denghuawen3<denghuawen3@jd.com>
 * @Date: 2021-11-23 15:42:20
 */
// function deepClone(o: Record<string, any>) {
//     const cloneO: Record<string, any> = {};
//     const stack = [{ parent: { name: o }, key: 'name', clone: cloneO }];
//     while (stack.length) {
//       const cur = stack.pop();
//       if (cur) {
//         const { parent, key, clone } = cur;
//         Object.keys(parent[key]).forEach((k) => {
//           if (typeof parent[key][k] === 'object') {
//             clone[key] = clone[key] ? clone[key] : {};
//             stack.push({
//               parent: parent[key],
//               key: k,
//               clone: clone[key],
//             });
//           } else {
//             clone[key] = clone[key] ? (clone[key][k] = parent[key][k], clone[key]) : { [k]: parent[key][k] };
//           }
//         });
//       }
//     }
//     return cloneO.name;
//   }

function cloneDeep(obj: Record<string, any>){
    const map = new WeakMap();
    const co: Record<string, any> = Array.isArray(obj) ? [] : {};
    map.set(obj, co);
    const stack: Record<string, any>[] = [{ parent: { obj: obj }, key: 'obj', value: co }];

    function clone() {
        while (stack.length) {
        const { key, parent, value } = stack.pop()!;
        const cur = parent[key];
        Object.keys(cur).forEach((key) => {
            if (typeof cur[key] === 'object' && !!cur[key]) {
            if (map.get(cur[key])) { value[key] = map.get(cur[key]); return; }
            const co = Array.isArray(cur[key]) ? [] : {};
            stack.push({
                parent: { [key]: cur[key] },
                key,
                value: co,
            });
            } else {
            value[key] = cur[key];
            }
        });
        }
    }

    clone();
    return co;
}
