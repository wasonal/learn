// function add(a, b) {
//     return a + b;
// }

// const curryAdd = curry(add);
// console.log(curryAdd(1)(2) === add(1, 2)); // true

function curry(fn, ...outArgs) {
    const partArgs = outArgs;
    const innerArgsLength = fn.length - partArgs.length;
    return function (...innerArgs) {
        if (innerArgsLength > innerArgs.length) {
            return curry(fn, ...partArgs.concat(innerArgs));
        }

        return fn.apply(undefined, partArgs.concat(innerArgs));
    }
}

var fn = curry(function(a, b, c) {
    console.log([a, b, c]);
    return [a, b, c];
});

fn("a", "b", "c") // ["a", "b", "c"]
fn("a", "b")("c") // ["a", "b", "c"]
fn("a")("b")("c") // ["a", "b", "c"]
fn("a")("b", "c") // ["a", "b", "c"]