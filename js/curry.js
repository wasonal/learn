// // // function add(a, b) {
// // //     return a + b;
// // // }

// // // const curryAdd = curry(add);
// // // console.log(curryAdd(1)(2) === add(1, 2)); // true

// // function curry(fn, ...outArgs) {
// //     const partArgs = outArgs;
// //     const innerArgsLength = fn.length - partArgs.length;
// //     return function (...innerArgs) {
// //         if (innerArgsLength > innerArgs.length) {
// //             return curry(fn, ...partArgs.concat(innerArgs));
// //         }

// //         return fn.apply(undefined, partArgs.concat(innerArgs));
// //     }
// // }

// // var fn = curry(function(a, b, c) {
// //     console.log([a, b, c]);
// //     return [a, b, c];
// // });

// // fn("a", "b", "c") // ["a", "b", "c"]
// // fn("a", "b")("c") // ["a", "b", "c"]
// // fn("a")("b")("c") // ["a", "b", "c"]
// // fn("a")("b", "c") // ["a", "b", "c"]

// const obj = {  a: {   b: 1,   c: 2,   d: {    e: 5   }  },   b: [1, 3, {a: 2, b: 3}],   c: 3 }

// // { //   'a.b': 1, //   'a.c': 2, //   'a.d.e': 5, //   'b[0]': 1, //   'b[1]': 3, //   'b[2].a': 2, //   'b[2].b': 3 //   c: 3 // }

// function flat(o) {
//     const result = {};

//     function dfs(key, value) {
//         if (Object(value) !== value) { // 基础类型
//             result[`${key}`] = value;
//         } else if (Array.isArray(value)) {
//             for (let i = 0; i < value.length; i++) {
//                 dfs(`${key}[${i}]`, value[i])
//             }
//             if (value.length === 0) {
//                 result[`${key}`] = [];
//             }
//         } else {
//             const keys = Object.keys(value);
//             for (let k of keys) {
//                 dfs(key ? `${key}.${k}` : `${k}`, value[k])
//             }
//             if (keys.length === 0) {
//                 result[`${key}`] = {};
//             }
//         }
//     }

//     dfs('', o);

//     return result;
// }

// console.log(flat(obj));


function List(val, next) {
    this.val = val;
    this.next = next;
}
let l4 = new List(4);
let l3 = new List(3, l4);
let l2 = new List(2, l3);
let l1 = new List(1, l2);

function reverseList(head) {
    let pre = null;
    let next = null;
    while (head.next) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }

    head.next = pre;

    return head;
}

console.log(reverseList(l1));

function myInstance(obj, fn) {
    while (obj) {
        if (obj.__proto__ === fn.prototype) { return true; }
        obj = obj.__proto__;
    }
    return false;
}

console.log(myInstance({}, Object));
