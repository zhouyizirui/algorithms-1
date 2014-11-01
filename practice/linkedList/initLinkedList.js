exports.build = function(LinkedList,file){
    var linkedListData = require('./'+(!!file ? file : 'default.json')).data;
    var linkedList = new LinkedList();
    for(var i = 0;i < linkedListData.length;i ++){
        linkedList.add(linkedListData[i],i);
    }
    return linkedList;
};
