// 划分链表
// https://leetcode.cn/problems/partition-list/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    
    let lHead = null,
        lTail = null,
        rHead = null,
        rTail = null,
        next = null

    while (head) {
        next = head.next
        head.next = null
        if (head.val < x) {
            if (!lHead) {
                lHead = lTail = head
            } else {
                lTail.next = head
                lTail = lTail.next
            }
        } else {
            if (!rHead) {
                rHead = rTail = head
            } else {
                rTail.next = head
                rTail = rTail.next
            }
        }
        head = next
    }    

    if (lTail) {
        lTail.next = rHead
        return lHead
    } else {
        return rHead
    }

};