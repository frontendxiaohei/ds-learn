/**
 * 给定一个链表，返回链表开始入环的第一个节点。
 *  从链表的头节点开始沿着 next 指针进入环的第一个节点为环的入口节点。
 * 如果链表无环，则返回 null。
 * https://leetcode.cn/problems/c32eOV/description/
 * 
 * 
 * 快慢指针
 * 一个快指针，一个慢指针
 * 快指针一次走两步，满指针一次走一步
 * 两个指针相遇之后
 * 
 * 快指针来到头部
 * 
 * 然后快慢指针一块走， 再次相遇
 * 快指针的位置就是第一个入环节点
 * 
 * 
 */

const detectCycle = function(head) {

    if (head === null) return null
    let slow = head
    let fast = head

    while (fast !== null && fast.next !== null) {
        slow = slow.next    
        fast = fast.next.next
        if (slow === fast) {
            break
        }
    }
    if (fast === null || fast.next === null) return null
    fast = head
    while (fast !== slow) {
        slow = slow.next
        fast  = fast.next
    }
    return fast
}