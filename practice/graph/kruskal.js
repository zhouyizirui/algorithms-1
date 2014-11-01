var Graph = require('../../data_structures/graph');
var initGraph = require('./initGraph');

Graph.prototype.getEdges = function(){
  var starts = Object.keys(this.adjList);
  var edges = [];
  for(var i = 0;i < starts.length;i++){
    var neighbors = this.neighbors(starts[i]);
    for(var j = 0;j < neighbors.length;j++){
      edges.push({
        v : [starts[i],neighbors[j]],
        w : this.edge(starts[i],neighbors[j])
      });
    }
  }
  return edges;
};


Graph.prototype.kruskal = function (){
   var result = [];
   var minSum = 0;
   var edges = this.getEdges();
   var weights = edges.map(function(v){
     return v.w;
   });
   var vertices = edges.map(function(v){
     return v.v;
   });
   var V = this.vertices.map(function(v){
       return [v]
   });
   while(result.length != this.vertices.length-1){
     var min = Math.min.apply('',weights);
     var which = weights.indexOf(min);
     var t1 = V.filter(function(v){
         return v.indexOf(vertices[which][0]) >= 0;
     });
     var t2 = V.filter(function(v){
         return v.indexOf(vertices[which][1]) >= 0;
     });
       if(t1[0] != t2[0]){
           V.splice(V.indexOf(t1[0]), 1);
           V.splice(V.indexOf(t2[0]), 1);
           V.push(t1[0].concat(t2[0]));
           result.push(vertices[which]);
           minSum += weights[which];
     }
       weights.splice(which,1);
       vertices.splice(which,1);
   }
   return {
       minSum : minSum,
       ways : result
   };
};

var graph = initGraph.build(Graph);
console.log(graph.kruskal());