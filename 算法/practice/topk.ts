// 取最小k个数则用大顶堆，取最大k个数用小顶堆

function buildHeap(arr) {
    for (let i = Math.floor((arr.length - 1) / 2); i >= 0; i--) {
        heapify(arr, i);
    }
}

function heapify(heap, index) {
    let temp = heap[index];
    for (let i = index * 2; i < heap.length; i = i * 2) {
        if (i + 1 < heap.length && heap[i + 1] > heap[i]) {
        i = i + 1;
        }
        if (temp < heap[i]) {
        heap[index] = heap[i];
        index = i;
        } else {
        break;
        }
    }

    heap[index] = temp;
}

function heapMinK(arr, k) {
    const heap = arr.slice(0, k);
    buildHeap(heap); // 大顶堆
    for (let i = k; i < arr.length; i++) {
        if (arr[i] < heap[0]) {
        heap[0] = arr[i];
        heapify(heap, 0);
        }
    }

    if (heap.length === 0) { return []; }
    const minK = heap.shift();
    const result = [];

    for (let i = 0; result.length < k && i < arr.length; i++) {
        if (arr[i] <= minK) {
        result.push(arr[i]);
        }
    }

    return result;
}


console.log(heapMinK([5,3,7,1,8,2,9,4,7,2,6,6], 4));