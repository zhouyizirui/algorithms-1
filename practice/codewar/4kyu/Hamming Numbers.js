/*Description:

 A Hamming number is a positive integer of the form 2i3j5k, for some non-negative integers i, j, and k.

 Write a function that computes the nth smallest Hamming number.

 Specifically:

 The first smallest Hamming number is 1 = 203050
 The second smallest Hamming number is 2 = 213050
 The third smallest Hamming number is 3 = 203150
 The fourth smallest Hamming number is 4 = 223050
 The fifth smallest Hamming number is 5 = 203051
 The 20 smallest Hamming numbers are given in example test fixture.

 Your code should be able to compute all of the smallest 5,000 Hamming numbers without timing out.*/

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

