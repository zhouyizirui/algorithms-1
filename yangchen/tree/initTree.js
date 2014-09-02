exports.build = function(Tree,file){
    var treeData = require('./'+(!!file ? file : 'default.json'));
    var tree = new Tree(null);
    var root = tree.insert(treeData.root.weight,null,'');
    function insertNode(node,nodeData){
        if(!!nodeData.left){
          insertNode(tree.insert(nodeData.left.weight,node),nodeData.left);
        }
        if(!!nodeData.right){
          insertNode(tree.insert(nodeData.right.weight,node),nodeData.right);
        }
    }
    insertNode(root,treeData.root);
    return tree;
};

