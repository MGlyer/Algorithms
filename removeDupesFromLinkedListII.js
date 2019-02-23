/*
Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

Example 1:

Input: 1->2->3->3->4->4->5
Output: 1->2->5
Example 2:

Input: 1->1->1->2->3
Output: 2->3
*/

var deleteDuplicates = function(head) {
  if (!head) return head
  let dummy = new ListNode()
  dummy.next = head


  const findIfDupe = (node, target) => {
    let next = node.next
    while (next) {
      if (next.val === target) return true
      next = next.next
    }
    return false
  }

  const removeDupes = (node, target) => {
    let subHead = node
    let next = subHead.next
    while (subHead) {
      while (next.val === target) next = next.next
      subHead.next = next
      subHeac = subHead.next
    }
  }

  let newHead = dummy

  while (newHead && newHead.next) {
    if (findIfDupe(newHead.next, newHead.next.val)) removeDupes(newHead, newHead.next.val)
    newHead = newHead.next
  }

  return dummy.next



  // const removeDupes = (node) => {
  //   let target = node.val
  //   let subHead = node

  //   while (subHead) {
  //     let next = subHead.next
  //     while (next.val === target) next = next.next
  //     subHead.next = next
  //   }
  // }
  
  // let dummyHead = head
  // while (dummyHead) {
  //   removeDupes(dummyHead)
  // }

  // return head
};