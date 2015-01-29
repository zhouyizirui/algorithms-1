/*Description:

 In this kata, you'll have to implement a function solve_graph(start, end, arcs) that will return true if the end node can be reached from the start node, using 0 or more arcs. It will return false if it is not possible.

 The graph is defined by a list of arcs, where each arc is an object that has two properties, start and end, representing the start and end nodes, respectively. Each arc is unidirectional, in other words it goes from a start node to an end node, and not the other way around. Note that 0 or more arcs can leave a node, and 0 or more can arrive to it. If you need more info on the way these graphs work, you can see there : http://en.wikipedia.org/wiki/Adjacency_list and there : http://en.wikipedia.org/wiki/Directed_graph

 Note that the solve_graph() method doesn't take a list of nodes as input: for simplicity's sake, let's assume that all nodes present in arcs are valid. However, the start or end node may not be in arcs.

 Let's take a simple example :

 var arcs = [
 { start : "a", end : "b" },
 { start : "a", end : "a"}
 ];

 solve_graph("a", "b", arcs);
 // Should return true, because "b" can be reached from "a"

 solve_graph("a", "c", arcs);
 // Should return false, because "c" can never be reached from "a", using any combination of arcs*/

function Graph() {
    this.adjList = {};
    this.vertices = [];
}

Graph.prototype.addVertex = function (v) {
    this.vertices.push('' + v);
    this.adjList[v] = {};
};
Graph.prototype.inGraph = function(v) {
    return Object.keys(this.adjList).indexOf(v) >= 0;
}
Graph.prototype.addEdge = function (a, b) {
    if (!this.adjList[a]) this.addVertex(a);
    if (!this.adjList[b]) this.addVertex(b);

    this.adjList[a][b] = 1;


};

Graph.prototype.neighbors = function (v) {
    return Object.keys(this.adjList[v]);
};

Graph.prototype.DFSMOnce = function(start){
    var that = this;
    function run(v){
        isTrav.push(v);
        var neighbors = that.neighbors(v);
        for(var j = 0;j < neighbors.length;j++){
            if(isTrav.indexOf(neighbors[j])<0){
                run(neighbors[j]);
            }
        }
    }
    var isTrav = [];
    var unTrav = this.vertices;
    for(var i = 0;i < unTrav.length;i++){
        if(unTrav[i] == start){
            run(unTrav[i]);
        }
    }
    return isTrav;
};

function solve_graph(start, end, arcs) {
    // TODO
    var graph = new Graph();
    arcs.forEach(function(v,i){
        graph.addEdge(v.start,v.end);
    });
    return graph.inGraph(start) && graph.inGraph(end) && graph.DFSMOnce(start).indexOf(end) >= 0;
}
