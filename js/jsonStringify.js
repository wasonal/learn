function jsonStringify(obj) {
    const type = typeof obj;
    if (type !== 'object') {
      if (/string|undefined|function/.test(type)) {
        obj = '"' + obj + '"';
      }
      return String(obj);
    }
    const isArray = Array.isArray(obj);

    const resArr = [];
    for(const key in obj) {
      let cur = obj[key];
      const type = typeof cur;

      if (type !== 'object') {
        if (/string|undefined|function/.test(type)) {
          cur = '"' + cur + '"';
        }
      } else {
        cur = jsonStringify(obj[key]);
      }
      isArray
       ? resArr.push(`${cur}`)
       : resArr.push(`"${key}":${cur}`);
    }

    return isArray ? `"[${resArr.join(',')}]"` : `"{${resArr.join(',')}}"`;
}

console.log(jsonStringify({ name: { age: 21 } }));