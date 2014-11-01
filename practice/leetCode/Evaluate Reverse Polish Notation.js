/*
Evaluate the value of an arithmetic expression in Reverse Polish Notation.

    Valid operators are +, -, *, /. Each operand may be an integer or another expression.

    Some examples:
    ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
    ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
*/
function ERPN(arr){
  var oper = ["+","-","*","/"];
  var temp = [];
  for(var i = 0;i < arr.length;i++){
    if(oper.indexOf(arr[i]) < 0){
      temp.push(parseInt(arr[i]));
    }
    else{
      var number2 = temp.pop();
      var number1 = temp.pop();
      temp.push(Math.floor(eval(number1+arr[i]+number2)));
    }
  }
  return temp.pop();
}
console.log(ERPN(["2", "1", "+", "3", "*"]));
console.log(ERPN(["4", "13", "5", "/", "+"]));
