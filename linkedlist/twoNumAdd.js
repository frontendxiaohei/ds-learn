// https://leetcode.cn/problems/add-two-numbers/description/



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = null,
        tail = null,
        carry = 0

    while(l1 || l2) {
        const n1 = l1 ? l1.val : 0
        const n2 = l2 ? l2.val : 0
        const sum = n1 + n2 + carry
        const val = sum % 10
        carry = Math.floor(sum / 10)

        if (!head) {
            head = tail = new ListNode(val)
        } else {
            tail.next = new ListNode(val)
            tail = tail.next
        }
        l1 = l1?.next
        l2 = l2?.next
    }
    if(carry == 1) {
        tail.next = new ListNode(1)
    }
    return head
};