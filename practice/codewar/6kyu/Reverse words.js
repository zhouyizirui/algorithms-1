/*Description:

 Write a reverseWords function that accepts a string a parameter, and reverses each word in the string. Every space should stay, so you cannot use words from Prelude.

 Example:

 reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"*/

function reverseWords(str) {
    // Go for it
    var arrayStr = str.split(" "),
        arrLen = arrayStr.length;
    for(var i = 0 ; i < arrLen ; i++){
        arrayStr[i] = arrayStr[i].split('').reverse().join('');
    }

    return arrayStr.join(' ');
}
