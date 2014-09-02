var Graph = require('../../data_structures/graph');
var initGraph = require('./initGraph');
Graph.prototype.floyed = function(){
    var arr = this.vertices;
    var temp = [];
    var temp1 = [];
    for(var i = 0;i < arr.length;i++){
        temp[i] = [];
        temp1[i] = [];
        for(var j = 0;j < arr.length;j++){
          temp[i][j] = this.adjList[this.vertices[i]][this.vertices[j]] || Number.MAX_VALUE;
          temp1[i][j] = 0;
        }
    }

    for(var k = 1;k <= arr.length;k++){
        for(var t = 0; t < arr.length; t++){
            for(var q = 0;q < arr.length; q++){
               if(temp[t][k-1]+temp[k-1][q] < temp[t][q]){
                   temp[t][q] = temp[t][k-1]+temp[k-1][q];
                   temp1[t][q] = k;
               }
            }
        }
    }
    console.log(temp);
    console.log(temp1);
};
var graph = initGraph.build(Graph);
graph.floyed();