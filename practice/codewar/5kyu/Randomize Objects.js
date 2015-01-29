/*Description:

 Implement the following methods:

 Object.prototype.random(): returns randomly one of the values of the object.

 For example:

 var obj = {
 a: 1,
 b: {
 x: 2,
 y: 3
 },
 c: {
 z: {
 q: 4
 }
 }
 };

 obj.random(); //returns 1 or 2 or 3 or 4. All values have the same probability to be returned

 obj = {};

 obj.random(); //returns undefined
 Object.prototype.toRandomArray(): returns an array of the random values.

 For example,

 var obj = {
 a: 1,
 b: {
 x: 2,
 y: 3
 },
 c: {
 z: {
 q: 4
 }
 }
 };

 obj.toRandomArray(); //returns a random permutation of [1, 2, 3, 4]

 obj = {};

 obj.toRandomArray(); //returns []*/

Object.prototype.random = function() {
    function rand(num){
        return Math.floor(Math.random()*num);
    }
    var arr = this.toRandomArray();
    return arr[Math.floor(rand(arr.length))];
};

Object.prototype.toRandomArray = function() {
    var arr = [];
    for(var k in this){
        var v = this[k];
        if(typeof v == "object"){
            arr = arr.concat(v.toRandomArray());
        }
        else if(typeof v != "function"){
            arr.push(v);
        }
    }
    return arr.sort(function(){
        return Math.random() > 0.5;
    });
};
