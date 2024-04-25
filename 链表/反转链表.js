/**
 * 真题描述：定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。
 *
 * 示例:
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
function reverse(head) {
    let pre = null
    let next = null
    while (head != null) {
        next = head.next
        head.next = pre
        pre = head
        head = next
    }
    return pre
}

function printList(lis) {
    let res = ""
    while (lis != null) {
        res += lis.val + "-"
    }
    console.log(res)
}

function test() {
    let n = new ListNode(1)
    n.next = new ListNode(2)
    n.next.next = new ListNode(3)
    n.next.next.next = new ListNode(4)
    n.next.next.next.next = new ListNode(5)

    let reverse1 = reverse(n);

    printList(reverse1)
}

test()