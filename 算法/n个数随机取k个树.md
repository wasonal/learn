```
function getK(n, k) {
    for (i=0;i<n;i++)
        if(Math.random() * (n-i) < k){
            console.log(i);
            k--;
        }
}

getK(10, 3);
```