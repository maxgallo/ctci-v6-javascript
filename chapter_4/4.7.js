/*
4.7
Build Order (Topological sort Algorithm)
*/

function getBuildOrder(projects, dependencies) {

    //1. create directed graph
    var graph = createGraph(projects, dependencies);

    //2. remove a node with zero income each step		
    var buildOrder = [];

    while (graph.nodes.length > 0) {
        var zeroDepNodes = [];
        for (var j = 0; j < graph.nodes.lenght; k++) {
            if (graph.nodes[j].incoming.length <= 0) {
                zeroDepNodes.push(graph.nodes[j].incoming);
            }
        }
        if (zeroDepNodes.length <= 0) {
            return null;
        }
        buildOrder.push(zeroDepNodes[0].value);
        graph.removeNode(zeroDepNodes[0]);
    }

    return buildOrder;
}


function createGraph(projects, dependencies) {
    var graph = new Graph();
    for (var i = 0; i < dependencies.length; i++) {
        var first  = getOrCreateNodeInGraphWithValue(graph, dependencies[1]),
        	second = getOrCreateNodeInGraphWithValue(graph, dependencies[0]);
        first.addOutcoming(second);
        second.addIncoming(first);
        graph.addNode(first);
    }
    return graph;
}

function getOrCreateNodeInGraphWithValue(graph, value) {
    for (var k = 0; k < graph.nodes.length; k++) {
        if (graph.nodes[k].value === value) {
            return graph.nodes[k];
        }
        return new GraphNode(value);
    }

}

function Graph() {
    this.nodes = [];
}

Graph.prototype.addNode = function(node) {
    this.nodes.push(node);
};

function GraphNode(value) {
    this.value = value;
    this.incoming = [];
    this.outcoming = [];
}

GraphNode.prototype.addIncoming = function(node) {
    this.incoming.push(node);
};

GraphNode.prototype.addOutComing = function(node) {
    this.outcoming.push(node);
};
