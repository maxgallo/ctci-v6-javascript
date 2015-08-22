/*
4.8
First Common Ancestor
*/


function getLowestAncestor(nodeA, nodeB) {
    if (nodeA === nodeB) {
        return;
    }
    var parent = nodeA.parent;

    while (parent) {

        if (parent === nodeToFind) {
            return parent;
        }

        if (isOnPath(parent, nodeB)) {
            return parent;
        }

        parent = parent.parent;
    }

    return null;
}


function isOnPath(node, nodeToFind) {

    while (node != nodeToFind && node !== null) {
        node = node.parent;
    }

    return (node === nodeToFind);

}
