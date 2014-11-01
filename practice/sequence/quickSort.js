/*
 * Time complexity
 * * worst   ：O(nlbn)
 * * best    : O(n^2)
 * * average : 0(nlbn)
 * Space complexity
 * * total     : ...
 * * auxiliary : O(logn)
 * Stability : no
 * */
var swap = function(arr,pos1,pos2){
    var temp;
    temp = arr[pos2];
    arr[pos2] = arr[pos1];
    arr[pos1] = temp;
    /*arr[pos2] = arr[pos1]+arr[pos2];
     arr[pos1] = arr[pos2]-arr[pos1];
     arr[pos2] = arr[pos2]-arr[pos1];*/
}
var formatArr = function(arr,start,end){
    var index = start;
    var temp = arr[index];
    swap(arr,index,end);
    for(var i = start;i < end;i++){
      if(arr[i] < temp){
          swap(arr,index++,i);
      }
    }
    swap(arr,index,end);
    return index;
}
var quickSort = function(opts){
    var data = opts.data;
    var start = opts.start;
    var end= opts.end;
    if(start>end){
        return;
    }
    var index = formatArr(data,start,end);
    quickSort({data:data,start:start,end:index-1});
    quickSort({data:data,start:index+1,end:end});
}

var ex = [6,5,9,3,7];
quickSort({
    data: ex,
    start: 0,
    end: 4
});
console.log(ex);
