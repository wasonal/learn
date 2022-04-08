function minK(arr: number[], k: number) {
    function insertHeap(heap: number[], item: number) {
        heap.push(item)
        let i = heap.length - 1
        while(true) {
            const fatherIndex = Math.floor(i / 2)
            if (heap[i] < heap[fatherIndex]) {
                [heap[i], heap[fatherIndex]] = [heap[fatherIndex], heap[i]]
                i = fatherIndex
            } else {
                break;
            }
        }
    }

    const heap: number[] = []
    for (let i = 0; i < k + 1; i++) {
        insertHeap(heap, arr[i])
    }

    if (heap.length === 0) { return []; }
    const k_1min = heap.pop()!

    const result: number[] = []

    for (let i = 0; result.length < k; i++) {
        if (arr[i] < k_1min) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(minK([-2, 0, 1, -9, 4, 5], 2));