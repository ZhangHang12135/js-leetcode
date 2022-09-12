var isValidBST = function(root) {
    let stack = [];
    let inorder = -Infinity;

    while (stack.length || root !== null) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        console.log(root.val);
        root = root.right;
    }
    return true;
};
isValidBST({
    val: 2,
    left: {
        val: 1,
        left: null,
        right: null,
    },
    right: {
        val: 3,
        left: null,
        right: null,
    }
})