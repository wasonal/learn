import { initListNode } from './ListNode';
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val: number, node: ListNode | null) {
        this.val = val;
        this.next = node;
    }
}

// function reverseList(head: ListNode | null): ListNode | null {
//     let cur = head;
//     let pre: ListNode | null = null;
//     while (cur) {
//         const next = cur.next;
//         cur.next = pre;
//         pre = cur;
//         cur = next;
//     }

//     return pre;
// };

function reverseList(head: ListNode | null): ListNode | null {
    debugger;
    if(head === null || head.next === null) {
        return head;
    }
    const next = reverseList(head.next);
    head.next = next && next.next;
    next && (next.next = head);

    return head;
};

const lists = initListNode([1,2,3,4,5]);
console.log(reverseList(lists));