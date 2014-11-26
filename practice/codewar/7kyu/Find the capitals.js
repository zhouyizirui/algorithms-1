/*Description:

 Instructions

 Write a function capitals that takes a single string (word) as argument. The functions must return an ordered list containing the indexes of all capital letters in the string.

 Example

 Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );*/

var capitals = function (word) {
    // Write your code here
    var res = [];
    for(var i = 0;i < word.length;i++){
        if(word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90){
            res.push(i);
        }
    }
    return res;
};
