/*
Your job is to create a calculator which evaluates expressions in Reverse Polish notation.

    For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.

Note that for simplicity you may assume that there are always spaces between numbers and operations, e.g. 1 3 + expression is valid, but 1 3+ isn't.

Empty expression should evaluate to 0.

Valid operations are +, -, *, /.

You may assume that there won't be exceptional situations (like stack underflow or division by zero).*/

function calc(expr) {
    // TODO: Your awesome code here
    var oper = ['+','-','*','/'];
    var calcArr = expr.split(' ');
    var temp = [];
    while(calcArr.length > 0){
        var e = calcArr.shift();
        if(oper.indexOf(e) < 0){
            temp.push(parseFloat(e));
        }
        else{
            var second = temp.pop();
            var first = temp.pop();
            temp.push(eval(first+e+second));
        }
    }
    return temp.pop() || 0;
}
