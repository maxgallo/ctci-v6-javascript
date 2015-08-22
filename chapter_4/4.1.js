/*
4.1
Route Between Nodes
*/


function Node() {
    this.ajacent = [];
}


function isConnected(graph, startNode, endNode) {

    for (var i = 0; i < graph.nodes.length; i++) {
        graph.nodes[i].visited = false;
    }

    var queue = [];

    startNode.visited = true;
    queue.push(startNode);

    while (queue.length > 0) {
        var node = queue.shift();
        if (node === endNode) {
            return true;
        } else {
            for (var k = 0; k < node.adjacent.length; k++) {
                if (!node.adjacent[k].visited) {
                    node.adjacent[k].visited = true;
                    queue.push(node.adjacent[k]);
                }
            }
        }
    }

    return false;
}
