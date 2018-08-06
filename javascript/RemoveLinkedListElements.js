/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (head === null) {
        return null
    }
    let tmp = new ListNode(0)
    tmp.next = head
    let prev = tmp
    // head = head.next
    while (head) {
        if (head.val === val) {
            prev.next = head.next

        } else {
            prev = head
        }
        head = head.next
    }
    return tmp.next
};