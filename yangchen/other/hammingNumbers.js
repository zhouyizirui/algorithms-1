function hamming (n) {
    var result = [],last2 = last3 =last5 = 0;
    result[0] = 1;
    for (var i = 1; i < n; ++i) {
        var prev = result[i - 1];

        while (result[last2] * 2 <= prev) {
            ++last2;
        }
        while (result[last3] * 3 <= prev) {
            ++last3;
        }
        while (result[last5] * 5 <= prev) {
            ++last5;
        }

        var candidate1 = result[last2] * 2;
        var candidate2 = result[last3] * 3;
        var candidate3 = result[last5] * 5;

        result[i] = Math.min(candidate1, Math.min(candidate2, candidate3));
    }

    return result[n-1];
}

console.log(hamming(7));