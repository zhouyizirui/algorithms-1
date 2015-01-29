/*Description:

 Write a small function that returns the values of an array that are not odd.

 All values in the array will be integers. Return the good values in the order they are given.

 function noOdds( values )*/

function noOdds( values ){
    // Return all non-odd values
    var len  = values.length;
    var newArray = [];
    for(var i = 0;i < len; i++){
        if(values[i] % 2 == 0){
            newArray.push(values[i]);
        }
    }
    return newArray;
}
