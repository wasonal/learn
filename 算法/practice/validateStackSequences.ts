function validateStackSequences(pushed: number[], popped: number[]): boolean {
    const stack: number[] = [];
    while (pushed.length) {
        if (pushed.length) {
            stack.push(pushed.shift()!);
        }
        let tail = stack[stack.length - 1];
        while (popped[0] === tail && tail !== undefined) {
            popped.shift();
            stack.pop();
            tail = stack[stack.length - 1];
        }
    }
    let result = true;

    while (popped.length) {
        if (stack.pop() !== popped.shift()) {
            result = false;
        }
    }

    return result;
};

console.log(validateStackSequences([1,2,3,4,5], [4,3,5,1,2]));