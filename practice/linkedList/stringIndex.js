var LinkedList = require('../../data_structures/linked_list');
var initLinkedList = require('./initLinkedList');


function stringIndex(s,pat){
    var p, r,
        i = 0,
        save = s.head,
        q = pat.tail,
        n = pat.length,
        t = s.head;
        for(var k = 1;k < n;k++){
            t = t.next;
        }
        while(!!t){
            p = pat.head;
            r = save;
            i++;
            if(q.value == t.value){
                while(p!=q && p.value == r.value){
                    p = p.next;
                    r = r.next;
                }
                if(p == q && p.value == r.value){
                    return i;
                }
            }
            save = save.next;
            t = t.next;
        }
        return 0;
}


var string1 = initLinkedList.build(LinkedList,'string1.json');
var string2 = initLinkedList.build(LinkedList,'string2.json');

console.log(stringIndex(string1,string2));
