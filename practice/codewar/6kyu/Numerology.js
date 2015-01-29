/*Description:

 In numerology, every number has a certain meaning that expresses someones connection to the universe! This single digit integer can be calculated by adding up every digit in the birthdate: year, month, and date. Each time the sum exceeds 10, add up the 2 digits.
 For example, new Date('06/14/2010') = 5
 So, what is your number?*/

/**
 * Your solution
 * @date JS Date object
 **/
function solution(date){
    var data = [],sum = 0;
    data.push(date.getMonth());
    data.push(date.getDate()+1);
    data.push(Math.floor(date.getFullYear()/100));
    data.push(date.getFullYear()%100);
    for(var i = 0 ;i < 4;i++){
        sum += data[i];
        if(sum >= 10){
            sum = Math.floor(sum/10)+sum%10;
        }
    }
    return sum;
}
