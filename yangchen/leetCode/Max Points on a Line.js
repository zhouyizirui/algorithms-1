/*
Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.
*/
function MPOAL(points){
  var nums = [];
  var slopes = [];
  var verticals = [];
  var vnums = [];
  for(var i = 0;i < points.length;i++){
    for(var j = i+1;j < points.length;j++){
      if(points[j].x - points[i].x != 0){
        var slope = (points[j].y - points[i].y)/(points[j].x - points[i].x);
        if(slopes.indexOf(slope) >= 0){
            nums[slopes.indexOf(slope)]++;
        }
        else{
           slopes.push(slope);
           nums.push(0);
        }
      }
      else{
        if(verticals.indexOf(points[j].x) >= 0){
            vnums[verticals.indexOf(points[j].x)]++;
        }
        else{
           verticals.push(points[j].x);
           vnums.push(0);
        }
      }
    }
  }
  return Math.max.apply('',nums.concat(vnums));
}
console.log(MPOAL([
    {x:1,y:1},
    {x:2,y:2},
    {x:3,y:1},
    {x:4,y:2},
    {x:3,y:3}
]));
