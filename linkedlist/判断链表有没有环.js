/**
 * 真题描述：给定一个链表，判断链表中是否有环。
 * 
 * 思路1： 快指针一次走一步，满指针一次走两步，快指针和慢指针相遇说明有环
 */

// 入参是头结点 
const hasCycle = function (head) {
    let slow = head,
        fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            return true;
        }
    }
    return false
};