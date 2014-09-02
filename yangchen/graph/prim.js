var Graph = require('../../data_structures/graph');
var initGraph = require('./initGraph');

Graph.prototype.prim = function(){
    if(!this.vertices)throw 'Empty graph';
    var V = this.vertices;
    var U = [];
    var edge = [];
    var minSum = 0;
    U.push(V[0]);
    while(U.length != V.length){
        var min = Number.MAX_VALUE;
        var minEdge = '';
        var minVertex = '';
        for(var i = 0;i < U.length;i++){
            var neighbors = this.neighbors(U[i]);
            for(var j = 0;j < neighbors.length;j++){
                if(this.edge(U[i],neighbors[j]) < min && U.indexOf(neighbors[j]) < 0){
                    minEdge = U[i]+'-'+neighbors[j];
                    minVertex = neighbors[j];
                    min = this.edge(U[i],neighbors[j]);
                }
            }
        }
        U.push(minVertex);
        edge.push(minEdge);
        minSum += min;
    }
    return {
        minSum : minSum,
        edge : edge
    }
};


var graph = initGraph.build(Graph);
console.log(graph.prim());
