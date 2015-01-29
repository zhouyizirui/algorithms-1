/*Description:

 Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

 flatten([1,2,3]) // => [1,2,3]
 flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
 flatten([[[1,2,3]]]) // => [[1,2,3]]*/

var flatten = function (array){
    // TODO: Program me
    var len = array.length;
    var newArray = [];
    for(var i = 0;i < len;i++){
        var temp = array[i];
        if(typeof(temp) == 'object'){
            for(var j = 0;j < temp.length;j++){
                newArray.push(temp[j]);
            }
        }
        else{
            newArray.push(temp);
        }
    }
    return newArray;
}
