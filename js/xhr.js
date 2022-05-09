function request(url, method, params) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(this.responseType === 'text' ? this.responseText : JSON.parse(this.response));
                } else if (this.status >= 400) {
                    reject(this.statusText);
                }
            }
        }
        xhr.open(url, method, params);
        xhr.send();
    });
}