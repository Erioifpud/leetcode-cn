/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) {
    return head
  }
  let tmp = new ListNode(null) 
  tmp.next = head
  let cur = head
  while (node = cur.next) {
    cur.next = node.next
    node.next = tmp.next
    tmp.next = node
  }
  return tmp.next
};

let n1 = new ListNode(1)
let n2 = new ListNode(2)
let n3 = new ListNode(3)
let n4 = new ListNode(4)
let n5 = new ListNode(5)
n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
n5.next = null
console.log(reverseList(n1));
console.log(reverseList(null));