function add(a, b) {
  return (a + b);
};

function subtract(a, b) {
  return (a - b);
};

function sum(arr) {
  let sum = (arr.reduce((sum, item) => (sum+parseInt(item)), 0));
  return sum
};

function multiply(arr) {
  let multiply = (arr.reduce((product, item) => (product * parseInt(item)), 1));
  return multiply
};

function power(a, b) {
  let power = 1 ;
  for (i=1 ; i<=b ; i++) {
    power = power * a;
  };
  return power ;
};

function factorial(a) {
  let factorial = 1 ;
  for (i = 1 ; i <= a ; i++) {
    factorial = factorial * i;
  };
  return factorial ;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
