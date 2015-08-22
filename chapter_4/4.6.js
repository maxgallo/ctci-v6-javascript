/*
4.6
Successor
*/

// binary search tree
// find next node
// each node has a link to his parent
// in order traversal re-arrange

function findSuccessorInBst(node) {
    if (node === null) {
        return null;
    }

    if (node.right) {
        // find minimum value in right subtree 
        var successorInRightSubtree = getMinNode(node.right);
        return successorInRightSubtree.value;
    }

    // find minimum value in parent tree
    var successorInParentTree = getSuccessorInParentTree(node, node.value);

    if (successorInParentTree === null) {
        return null;
    }
    return successorInParentTree;
}


function getSuccessorInParentTree(node, valueToCheck) {
    if (node === null) {
        return null;
    }
    if (node.value < valueToCheck) {
        return getSuccessorInParentTree(node.parent, valueToCheck);
    }
    return node;
}

function getMinNode(node) {
    if (node === null) {
        return;
    }
    getMinNodeInSubtree(node.left);
    return node;
}
