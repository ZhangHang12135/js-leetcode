/**
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

 

示例:

给定 1->2->3->4, 你应该返回 2->1->4->3.
 */
/*
*迭代法，将奇数位的和偶数位的进行交换。
*/
var swapPairs = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let prevNode = dummy;
    while(head != null && head.next !==null ){
        let firstNode = head;
        let secondeNode = head.next;
        
        prevNode.next = secondeNode;
        firstNode.next = secondeNode.next;
        secondeNode.next = firstNode;
        
        prevNode = firstNode;
        head = firstNode.next;
    }
    return dummy.next;
};