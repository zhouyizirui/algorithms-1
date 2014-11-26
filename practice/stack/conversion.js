var Stack = require('../../data_structures/stack');

function conversion(num,n){
    var stack = new Stack();
    var result = '';
    do{
        stack.push(num % n);
        num = Math.floor(num / n);
    }
    while(num != 0);
    while(!stack.isEmpty()){
        result += stack.pop();
    }

    return result;
}

console.log(conversion(391,8));


