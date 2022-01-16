function lastRemaining(n: number, m: number): number {
    class ListNode {
        val: number;
        next?: ListNode;
        constructor(val: number, node?: ListNode) {
            this.val = val;
            this.next = node;
        }
    }
    let cur = new ListNode(-1);
    const start = cur;
    for (let i = 0; i < n; i++) {
        cur.next = new ListNode(i);
        cur = cur.next;
    }
    let pre = cur;
    cur.next = start.next;
    cur = start.next!;
    let i = 0;

    while (cur.next !== cur) {
        if (i + 1 === m) {
            pre.next = cur.next;
        } else {
            pre = cur;
        }
        cur = cur.next!;

        i = (i + 1) % m;
    }

    return pre.val;
};

console.log(lastRemaining(70866, 116922));