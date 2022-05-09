const str = '?sku=17240758191&ptag=1';
// const urlSearchParams = new URLSearchParams(str);
// const paramObj = Object.fromEntries(urlSearchParams.entries());

function parseUrlParams(url: string) {
    const paramArr = url.split('?')[1].split('&');
    return paramArr.reduce((res, cur) => {
        const [key, value] = cur.split('=');
        res[key] = decodeURIComponent(value);
        return res;
    }, {} as Record<string, string>);
}

console.log(parseUrlParams(str));
