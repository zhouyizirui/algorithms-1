var Graph = require('../../data_structures/graph');
var initGraph = require('./initGraph');

Graph.prototype.DFS = function(){
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
    if(!this.vertices)throw 'Empty graph';
    var isTrav = [];
    var unTrav = this.vertices;
    for(var i = 0;i < unTrav.length;i++){
        if(isTrav.indexOf(unTrav[i])>0){
            continue;
        }
        run(unTrav[i]);
    }
    return isTrav.join('=>');
};

var graph = initGraph.build(Graph);
console.log(graph.DFS());
