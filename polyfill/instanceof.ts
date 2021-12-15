function fakeInstanceof(obj: any, classObj: any) {
    let cur = obj.__proto__;
    while (cur) {
        if (cur === classObj.prototype) {
            return true;
        }
        cur = cur.__proto__;
    }

    return false;
}

class Person {
    constructor() {
        this.name = 'xiaoming';
    }

    name = '';
}

const p1 = new Person;

console.log(fakeInstanceof(p1, Person));
console.log(p1 instanceof Person);

