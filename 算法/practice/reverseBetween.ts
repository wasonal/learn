import { ListNode, initListNode } from './ListNode';

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    const res: ListNode = new ListNode(0, null);
    let newHead: ListNode | null = null;

    res.next = head;

    function loop(head: ListNode | null, n: number, left: number, right: number) {
        debugger;
        if (head === null) {
            return head;
        }
        if (n === right) {
            newHead = head;
            return head;
        }

        const next = loop(head.next, n + 1, left, right);
        if (n >= left) {
            head.next = next && next.next;
            next && (next.next = head);
            return head;
        }

        if (n === left - 1) {
            head.next = newHead;
        }
        return head;
    }

    loop(res, 0, left, right);

    return res.next;
};

const list = initListNode([1,2,3,4,5]);
console.log(reverseBetween(list, 2, 4));
