/*
 * Time complexity
 * * worst   ：O(nlogn)
 * * best    : O(n)
 * * average : 0(nlogn)
 * Space complexity
 * * total     : O(n)
 * * auxiliary : O(logn)
 * Stability : yes
 * */
var merge = function(left,right){
    var final = [];
    while(left.length && right.length){
        final.push(left[0] <= right[0] ? left.shift() : right.shift());
    }
    var temp = final.concat(left.concat(right));
    return temp;
}
var mergeSort = function(opts){
    var data = opts.data;
    if(data.length<2){
        return data;
    }
    var left = data.slice(0,parseInt(data.length/2));
    var right = data.slice(parseInt(data.length/2));
    return merge(mergeSort({data:left}),mergeSort({data:right}));
}

console.log(mergeSort({data:[13,2,543,5475,3]}));

