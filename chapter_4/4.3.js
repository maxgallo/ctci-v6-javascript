/*
4.3
List of Depth
*/

function DepthLinkedList(rootValue) {
    this.linkedList = new LinkedList(rootValue);
    this.root = this.linkedList.root;
    this.last = this.linkedList.root;
}
DepthLinkedList.prototype.addNode = function(node) {
    this.last.next = node;
    this.last = this.last.next;
};

function create(tree) {
    var linkedListArray = [], // array of linked list	for each depth
        depth = 0,
        rootTreeNode = tree.root;

    preOrderTraversal(rootTreeNode, depth, linkedListArray);

}

function preOrderTraversal(node, depth, linkedListArray) {
    if (node === null) {
        return;
    }
    addOrCreateNodeInLinkedListAtDepth(node, depth, linkedListArray);

    preOrderTraversal(node.left, depth + 1, linkedListArray);
    preOrderTraversal(node.right, depth + 1, linkedListArray);

}

function addOrCreateNodeInLinkedListAtDepth(node, depth, linkedListArray) {
    var llnode = new LinkedListNode(node.value);

    if (!linkedListArray[depth]) {
        linkedListArray[depth] = new DepthLinkedList(llnode);
    } else {
        linkedListArray[depth].addNode(llnode);
    }
}
