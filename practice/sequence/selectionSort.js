/*
 * Time complexity
 * * worst   ：O(n^2)
 * * best    : O(n^2)
 * * average : 0(n^2)
 * Space complexity
 * * total     : O(n)
 * * auxiliary : O(1)
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
var selectionSort = function(opts){
    var data = opts.data,
        tempFlag;
    for(var i = 0;i < data.length;i++){
        tempFlag = i;
        for(var j=i+1;j<data.length;j++){
          if(data[tempFlag]>data[j]){
              tempFlag = j;
          }
        }
        if(tempFlag != i){
            swap(data,tempFlag,i);
        }
    }
    return data;
}

console.log(selectionSort({data: [1,2,3,4,5,42,11,5645,3242,46,55]}));
