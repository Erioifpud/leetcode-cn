/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if ()
    let tmp1 = head
    let tmp2 = head
    while (!tmp1 && !tmp2) {
        tmp1 = tmp1.next
        tmp2 = tmp2.next
        if (!tmp1 || !tmp2) {
            return false
        }
        tmp2 = tmp2.next
        if (tmp2 === tmp1) {
            return true
        }
    }
    return false
};