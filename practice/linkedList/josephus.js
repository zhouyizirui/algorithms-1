var LinkedList = require('../../data_structures/linked_list');
var initLinkedList = require('./initLinkedList');

LinkedList.prototype.circular = function(){
    this.tail.next = this.head;
    return this;
};

function josephus(start,which){
    var linkedList = initLinkedList.build(LinkedList);
    var circular = linkedList.circular();
    var p = circular.head,r;
    for(var i = 1;i < start;i++){
        r = p;
        p = p.next;
    }
    while(p.next != p){
        for(var j = 1;j < which;j++){
            r = p;
            p = p.next;
        }
        r.next = p.next;
        console.log(p.value);
        p = r.next;
    }
    console.log(p.value);
}

josephus(3,4);
