var MedianFinder = function() {
    this.arr = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    for (let i = 0; i < this.arr.length; i++) {
        if (this.arr[i] > num) {
            this.arr.splice(i, 0, num);
            return;
        }
    }
    this.arr.push(num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const len = this.arr.length;
    const mid = Math.floor(len / 2);
    const isOdd = len % 2 === 0;
    return isOdd ? (this.arr[mid] + this.arr[mid + 1]) / 2 : this.arr[mid];
};



var obj = new MedianFinder()
obj.addNum(num)
var param_2 = obj.findMedian()

