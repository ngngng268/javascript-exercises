const palindromes = function palindromes(str) {
  str = str.replace(/[^\w\']|_/g, "").toLowerCase() ;
  function reverse (strng) {
    return strng.split("").reverse().join("")
  }
  let reverseStr = reverse(str) ;
  if (str === reverseStr) {return true}
  else {return false}
};


// Do not edit below this line
module.exports = palindromes;
