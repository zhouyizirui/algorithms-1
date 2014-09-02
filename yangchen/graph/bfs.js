var Graph = require('../../data_structures/graph');
var initGraph = require('./initGraph');

Graph.prototype.BFS = function(){
    if(!this.vertices)throw 'Empty graph';
    var isTrav = [];
    var unTrav = this.vertices;
    var temp = [];
    for(var i = 0;i < unTrav.length;i++){
        if(isTrav.indexOf(unTrav[i])>0) {
            continue;
        }
        temp.push(unTrav[i]);
        for(var j = 0;j < temp.length;j++){
            var neighbors = this.neighbors(temp[j]);
            if(isTrav.indexOf(temp[j])<0){
                isTrav.push(temp[j]);
            }
            for(var k = 0;k < neighbors.length;k++){
                if(isTrav.indexOf(neighbors[k])<0){
                    isTrav.push(neighbors[k]);
                    temp.push(neighbors[k]);
                }
            }
        }
    }
    return isTrav.join('=>');
};

var graph = initGraph.build(Graph);
console.log(graph.BFS());
