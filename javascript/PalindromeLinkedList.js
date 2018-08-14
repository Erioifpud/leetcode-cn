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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head || !head.next) {
    return true
  }
  let slow = head
  let fast = head
  let stack = []
  stack.push(head.val)
  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
    stack.push(slow.val)
  }
  if (!fast.next) {
    stack.pop()
  }
  while (slow.next) {
    slow = slow.next
    let tmp = stack[stack.length - 1]
    stack.pop()
    if (tmp != slow.val) {
      return false
    }
  }
  return true
};

let n1 = new ListNode(1)
let n2 = new ListNode(2)
let n3 = new ListNode(2)
let n4 = new ListNode(1)
// let n5 = new ListNode(5)
n1.next = n2
n2.next = n3
n3.next = n4
n4.next = null
// n4.next = n5
// n5.next = null
console.log(isPalindrome(n1))