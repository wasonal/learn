function permutation(s: string): string[] {
    const res: string[] = [];
    const arr = s.split('');
    const dfs = (x: number) => {
        
        if (x === s.length) {
            res.push(arr.join(''));
            return;
        }
        for (let i = x; i < arr.length; i++) {
            let temp = arr[i];
            arr[i] = arr[x];
            arr[x] = temp;
            
            dfs(x + 1);
            
            temp = arr[i];
            arr[i] = arr[x];
            arr[x] = temp;
        }
    }

    dfs(0);

    return res;
};

console.log(permutation("abc"));