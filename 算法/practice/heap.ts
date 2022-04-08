function heap(arr: number[]) {
    for (let i = arr.length - 1; i >= 0; i--) {
        buildSonHeap(arr, i)
    }

    return arr
}

function buildSonHeap(arr: number[], i: number) {
    while (true) {
        const fatherIndex = Math.floor(i / 2);
        if (arr[fatherIndex] < arr[i]) {
            [arr[i], arr[fatherIndex]] = [arr[fatherIndex], arr[i]]
            i = fatherIndex
        } else {
            break;
        }
    }
}

function buildFatherHeap(arr: number[], i: number) {
    const heapSize = arr.length
    while (true) {
        let maxIndex = i
        if (i * 2 < heapSize && arr[i * 2] > arr[i]) {
            maxIndex = i
        }
        if (i * 2 + 1 < heapSize && arr[i * 2 + 1] > arr[i]) {
            maxIndex = i
        }
        if (maxIndex === i) { break }
        [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]]
        i = maxIndex
    }
}

console.log(heap([5, 2, 9, 4, 1]));