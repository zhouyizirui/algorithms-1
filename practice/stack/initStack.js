exports.build = function(Stack,file){
    var StackData = require('./'+(!!file ? file : 'default.json')).data;
    var stack = new Stack();
    for(var i = 0;i < StackData.length;i ++){
        stack.push(StackData[i],i);
    }
    return stack;
};
