/*Description:

 Complete the squareSum method so that it squares each number passed into it and then sums the results together.

 For example:

 squareSum([1,2, 2]); // should return 9*/

function squareSum(numbers){
    var result = 0;
    numbers.forEach(function(v,i,a){
        result += v*v;
    });
    return result;
}
