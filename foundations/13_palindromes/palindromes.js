const palindromes = function palindromes(str) {
  let strCopy = str ;
  let reverseStr = strCopy.split("").reverse().join("") ;
  if (str === reverseStr) {return true}
  else {return false}
};


// Do not edit below this line
module.exports = palindromes;
