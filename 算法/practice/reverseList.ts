class ListNode {
    val: number;
    next?: ListNode;
    constructor(val: number, node?: ListNode) {
        this.val = val;
        this.next = node;
    }
}

 function reverseList(head: ListNode | null): ListNode | null {
    let cur = head;
    let pre: ListNode | null = null;
    while (cur) {
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }

    return pre;
};