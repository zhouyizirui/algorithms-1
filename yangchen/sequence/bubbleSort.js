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
 var swap = function(arr,pos1,pos2){
     var temp;
     temp = arr[pos2];
     arr[pos2] = arr[pos1];
     arr[pos1] = temp;
     /*arr[pos2] = arr[pos1]+arr[pos2];
      arr[pos1] = arr[pos2]-arr[pos1];
      arr[pos2] = arr[pos2]-arr[pos1];*/
 }
 var bubbleSort = function(opts){
    var data = opts.data,
        flag = data.length,
        tempEnd;
    while(flag > 0){
      tempEnd = flag;
      flag = 0;
      for(var j = 0;j < tempEnd;j++){
        if(data[j]>data[j+1]){
            swap(data,j,j+1);
            flag = j;
        }
      }
    }
    return data;
}

console.log(bubbleSort({data: [1,2,3,4,5,42,11,5645,3242,46,55]}));
