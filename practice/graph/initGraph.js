exports.build = function(Graph,file){
  var graphData = require('./'+(!!file ? file : 'default.json'));
  var graph = new Graph(graphData.directed);
  graphData.vertices.forEach(function(v){
    graph.addVertex(v);
  });
  graphData.edges.forEach(function(v){
    graph.addEdge(v.start, v.end, v.weight);
  });
  return graph;
};



