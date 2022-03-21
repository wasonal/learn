function fakeInstance (left, right) {
    if (typeof left !== 'object') {
        return false;
    }
    if (typeof right !== 'object') {
        throw new Error('right-side should be object');
        return;
    }
    let proto = left.__proto__;
    while (proto) {
        if (proto === right.prototype) { return true; }
        proto = proto.__proto__;
    }

    return false;
}

console.log(fakeInstance({}, Object));