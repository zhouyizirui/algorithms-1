/*
 * Time complexity
 * * worst   ：O(nlogn)
 * * best    : O(n)
 * * average : ...
 * Space complexity
 * * total     : O(n)
 * * auxiliary : ...
 * Stability : no
 * */

var shellSort = function(opts){
    var data = opts.data,
        temp;
    for(var gap =  Math.floor(data.length/2);gap > 0;gap=Math.floor(gap/2)){
        for(var i = gap;i < data.length;i++){
         temp = data[i];
         for(var j = i - gap;data[j] > temp;j-=gap){
           data[j+gap] = data[j];
           data[j] = temp;
         }
       }
    }
    return data;
}

console.log(shellSort({data:[2,342,2,11,3455,67,32,46,43,2]}));