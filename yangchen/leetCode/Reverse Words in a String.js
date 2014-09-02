/*
Given an input string, reverse the string word by word.
    For example,
    Given s = "the sky is blue",
    return "blue is sky the".
*/
function reverse(str){
  return str.split(' ').reverse().join(' ');
}

console.log(reverse('the sky is blue'));