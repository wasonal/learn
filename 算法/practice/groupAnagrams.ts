function groupAnagrams(strs: string[]): string[][] {
    const result: Record<string, string[]> = {};
    for (let str of strs) {
        const arr = new Array(26).fill(0);
        const strArray = str.split('');
        for (const c of strArray) {
            arr[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        result[arr.join('')]
            ? result[arr.join('')].push(str)
            : result[arr.join('')] = [str];
    }

    return Object.values(result);
};

console.log(groupAnagrams(["bdddddddddd","bbbbbbbbbbc"]));