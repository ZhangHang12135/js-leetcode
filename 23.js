/**
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

示例:

输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6

思路：采用多个两两合并的方法进行解决
 */
var mergeKLists = function(lists) {
    let newL = new ListNode(0);
    let len = lists.length;
    if(len == 0) return newL.next;
    if(len == 1) return lists[0];
    let l1 = lists[0], l2 = lists[1];
    newL.next = mergeTwoLists(lists[0], lists[1]);
    for(let i = 2; i < len; i++){
        newL.next = mergeTwoLists(newL.next, lists[i]);
    }
    return newL.next;
};
var mergeTwoLists = function(l1, l2) {
    let newL = new ListNode(0);
    let dummy = newL;
    while(l1 !== null && l2 !== null){
            if (l1.val <= l2.val) {
                dummy.next = l1;
                l1 = l1.next;
            } else {
                dummy.next = l2;
                l2 = l2.next;
            }
            dummy = dummy.next;
    }
    dummy.next = l1 == null? l2 : l1;
    return newL.next;
};