/*Description:

 Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number. Division by zero should return NaN. Arguments will both be integers.*/

function remainder(a, b){
    // Divide the larger argument by the smaller argument and return the remainder
    var max = Math.max(a,b);
    var min = Math.min(a,b);
    if(min != 0){
        return max%min;
    }
    else{
        return NaN;
    }
}
