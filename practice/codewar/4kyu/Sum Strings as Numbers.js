/*Description:

 Given the string representations of two integers, return the string representation of the sum of those integers.

 For example:

 sumStrings('1','2') // => '3'
 A string representation of an integer will contain no characters besides the ten numerals "0" to "9".*/
function sumStrings(a,b) {
    var aArr = a.split(''),bArr = b.split(''),cArr = [],flag = false;
    while(aArr.length != 0 && bArr.length != 0){
        var c = parseInt(aArr.pop())+parseInt(bArr.pop())+(flag?1:0);
        if(c >= 10){
            flag = true;
            cArr.unshift(c%10);
        }
        else{
            flag = false;
            cArr.unshift(c);
        }
    }
    if(aArr.length != 0){
        aArr[aArr.length-1] = parseInt(aArr[aArr.length-1])+(flag?1:0);
        cArr = aArr.concat(cArr);
    }
    else if(bArr.length != 0){
        bArr[bArr.length-1] = parseInt(bArr[bArr.length-1])+(flag?1:0);
        cArr = bArr.concat(cArr);
    }
    else{
        if(flag){
            cArr.unshift(1);
        }
    }
    while(cArr[0] == 0 || cArr[0] == '0'){
        cArr.shift();
    }
    return cArr.join('');
}
