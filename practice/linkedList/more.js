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
LinkedList.prototype.invert = function(){
    var p = this.head,
        q = null,
        r;
    while(p!=null){
        r = q;
        q = p;
        p = p.next;
        q.next = r;
    }
    this.head = q;
};
LinkedList.prototype.connect = function(list){
    var p;
    for(p = this.head; p.next!=null;p= p.next){}
    p.next = list.head;
};
LinkedList.prototype.merge = function(list){
    var p = this.head,
        q = list.head;
    var c = new LinkedList();
    while(!!p && !!q){
        if(p.value <= q.value){
            c.add(p.value);
            p = p.next;
        }
        else{
            c.add(q.value);
            q = q.next;
        }
    }
    c.tail.next = !!q?q:p;
    return c;
};
LinkedList.prototype.copy = function(){
    var b = new LinkedList();
    var p = this.head;
    while(!!p){
        b.add(p.value);
        p = p.next;
    }
    return b;
};
LinkedList.prototype.circular = function(){
    this.tail.next = this.head;
    return this;
};
var linkedList = initLinkedList.build(LinkedList);
var circular = linkedList.circular();





