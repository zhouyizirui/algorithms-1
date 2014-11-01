var Tree = require('../../data_structures/bst');
var initTree = require('./initTree');

Tree.prototype.DLR = function(callback,root){
    var node = root || this.root;
    callback(node.value);
    !!node.left && this.DLR(callback,node.left);
    !!node.right && this.DLR(callback,node.right);
};
Tree.prototype.LDR = function(callback,root){
    var node = root || this.root;
    !!node.left && this.LDR(callback,node.left);
    callback(node.value);
    !!node.right && this.LDR(callback,node.right);
};
Tree.prototype.LRD = function(callback,root){
    var node = root || this.root;
    !!node.left && this.LRD(callback,node.left);
    !!node.right && this.LRD(callback,node.right);
    callback(node.value);
};
Tree.prototype.Level = function(){
   var res = [this.root];
   var nodes = [];
   while(res.length != 0){
     var node = res.shift();
     nodes.push(node.value);
     if(node.left){
        res.push(node.left);
     }
     if(node.right){
         res.push(node.right);
     }
   }
   return nodes;
};
var tree = initTree.build(Tree);
tree.DLR(function(v){
  console.log(v);
});
tree.LRD(function(v){
  console.log(v);
});
tree.LDR(function(v){
    console.log(v);
});
console.log(tree.Level());