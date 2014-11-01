var LinkedList = require('../../data_structures/linked_list');
var initLinkedList = require('./initLinkedList');


LinkedList.prototype.find = function(item){
    var node = this.head;
    var index = 0;
    while(!!node.next){
        if(node.value == item){
            return {
                index: index,
                node: node
            }
        }
        index++;
        node = node.next;
    }
    return null;
};

LinkedList.prototype.destory = function(){
    var point = this.head;
    while(!!point){
        this.delNode(point);
        point = this.head;
    }
};
LinkedList.prototype.delAll = function(item){
    var point = this.head;
    while(!!point){
        if(point.value == item){
            this.delNode(point);
        }
        point = point.next;
    }
};

var linkedList = initLinkedList.build(LinkedList);
linkedList.forEach(function(v){
    console.log(v);
});
/*linkedList.delAll(1);
linkedList.forEach(function(v){
    console.log(v);
});*/
/*linkedList.destory();
linkedList.forEach(function(v){
    console.log(v);
});*/

//console.log(linkedList.find(5));

