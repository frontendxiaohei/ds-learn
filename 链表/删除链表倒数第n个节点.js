/**
 * 真题描述：给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 *
 * 示例： 给定一个链表: 1->2->3->4->5, 和 n = 2.
 * 当删除了倒数第二个结点后，链表变为 1->2->3->5.
 * 说明： 给定的 n 保证是有效的。
 *
 * 分析： 删除倒数第n个， 要找到倒数第n+1个元素 -> x， x.next = x.next.next
 * 长度为7
 * 倒数第1个，正数第7个
 * 倒数第2个，正数第6个
 * 倒数第3个，正数第5个
 * 倒数第n个，正数 len - n + 1
 *
 * 找到第len-n个 位置的节点， 这题就解了
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
const removeNthFromEnd = function(head, n) {
    let dummy = new ListNode()
    dummy.next = head
    let fast = dummy
    let slow = dummy
    while (n !== 0) {
        fast = fast.next
        n--
    }
    while (fast.next) {
        slow = slow.next
        fast = fast.next
    }
    slow.next = slow.next.next
    return dummy.next
}