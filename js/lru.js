class LRUCache{
    constructor(max = 5) {
        this.max = max;
        this.keys = [];
        this.cache = {};
    }

    put(key, value) {
        if (this.cache[key]) { return; }
        this.queue.push(key);
        if (this.keys.concat.length > this.max) {
            const head = this.keys.shift();
            delete this.cache[head];
        }
        this.cache[key] = value;
    }

    get(k) {
        if(this.cache[k]) {
            this.remove(this.keys, k);
            this.keys.push(k);
            return this.cache[k];
        } else {
            return -1;
        }
    }

    remove(arr, item) {
        if(arr.length) {
            const index = arr.findIndex(item);
            if (index > -1) {
                return arr.splice(index, 1);
            }
        }
    }
}