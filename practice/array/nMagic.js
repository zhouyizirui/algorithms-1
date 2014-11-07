function nMagic(n){
    var SQUARE = [],p = 0,q = Math.floor(n/2);
    for(var i = 0;i < n;i++){
        SQUARE[i] = [];
        for(var j = 0;j < n;j++){
            SQUARE[i][j] = 0;
        }
    }
    for(var num = 1;num <= n*n;num++){
        if(p < 0 && q < 0 || SQUARE[p][q] != 0){
            p += 2;
            q++;
        }
        SQUARE[p--][q--] = num;
        if(p < 0 && q >= 0){
            p = n - 1;
        }
        if(q < 0 && p >= 0){
            q = n - 1;
        }
    }
    return SQUARE;
}

var result = nMagic(3);
for(var o = 0;o < result.length;o++){
    for(var t = 0;t < result[o].length;t++){
        console.log(result[o][t]);
    }
}
