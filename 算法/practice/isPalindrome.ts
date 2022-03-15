import { ListNode, initListNode } from './ListNode';

function isPalindrome(head: ListNode | null): boolean {
    let len = 0;
    let p: ListNode | null = head;
    while (p) {
        p = p.next;
        len++;
    }

    const stack: number[] = [];
    p = head;
    for (let i = 0; i < len; i++) {
        stack.push(p.val);
        p = p.next;

        if (i < (len / 2)) { continue; }
        
        if (stack[i] !== stack[len - i - 1]) {
            return false;
        }
    }

    return true;
};

const head = initListNode([1, 2]);
console.log(isPalindrome(head));
