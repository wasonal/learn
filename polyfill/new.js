function fakeNew(classFunc) {
    const args = Array.prototype.slice.call(arguments, 1);
    let o = {};
    const res = classFunc.apply(o, args);
    o.__proto__ = classFunc.prototype;
    return typeof res !== 'object' ? o : res;
}

function Person(name) {
    this.name = name;
}

console.log(fakeNew(Person, 'xiaoming'));