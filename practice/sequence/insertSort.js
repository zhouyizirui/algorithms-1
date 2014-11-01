/*
 * Time complexity
 * * worst   ：O(n^2)
 * * best    : O(n)
 * * average : 0(n^2)
 * Space complexity
 * * total     : O(n)
 * * auxiliary : O(1)
 * Stability : yes
 * */
var insertSort = function(opts){
    var data = opts.data,
        temp;
    for(var i = 1;i<data.length;i++){
       temp = data[i];
       for(var j = i-1;data[j] > temp;j--){
         data[j+1] = data[j];
         data[j] = temp
       }
    }
    return data;
}

console.log(insertSort({data:[2,5,12,5,7]}));