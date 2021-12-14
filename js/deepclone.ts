/*
 * @Descripttion: 
 * @Author: denghuawen3<denghuawen3@jd.com>
 * @Date: 2021-11-23 15:42:20
 */
function deepClone(o: Record<string, any>) {
    const cloneO: Record<string, any> = {};
    const stack = [{ parent: { name: o }, key: 'name', clone: cloneO }];
    while (stack.length) {
      const cur = stack.pop();
      if (cur) {
        const { parent, key, clone } = cur;
        Object.keys(parent[key]).forEach((k) => {
          if (typeof parent[key][k] === 'object') {
            clone[key] = clone[key] ? clone[key] : {};
            stack.push({
              parent: parent[key],
              key: k,
              clone: clone[key],
            });
          } else {
            clone[key] = clone[key] ? (clone[key][k] = parent[key][k], clone[key]) : { [k]: parent[key][k] };
          }
        });
      }
    }
    return cloneO.name;
  }