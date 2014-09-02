var Graph = require('../../data_structures/graph');
var initGraph = require('./initGraph');

Graph.prototype.edge = function (a, b) {
    return this.neighbors(a).indexOf(b) >= 0 ? this.adjList[a][b] : Number.MAX_VALUE;
};
Graph.prototype.dijkstra = function(){
    if(!this.vertices)throw 'Empty graph';
    var V = this.vertices;
    var U = [];
    U.push(V.shift());
    var ways = {};
    var minName = '';
    var that = this;
    V.forEach(function(v){
        ways[v] = that.edge(U[0],v);
    });
    ways[U[0]] = 0;
    console.log(ways);
    var index = 0;
    var result = [];
    while(V.length != 0){
        var minWeight = Number.MAX_VALUE;
            for (var i = 0; i < V.length; i++) {
                if (that.edge(U[index], V[i]) + ways[U[index]] < ways[V[i]]) {
                    ways[V[i]] = that.edge(U[index], V[i]) + ways[U[index]];
                }
            }
        delete ways[U[index]];
        for(var k in ways){
          if(ways[k] < minWeight){
            minWeight = ways[k];
            minName = k;
          }
        }
        U.push(minName);
        V.splice(V.indexOf(minName),1);
        result.push({name : minName,weight : minWeight});
        index++;

    }
    return result;
};
var graph = initGraph.build(Graph);
console.log(graph.dijkstra());
