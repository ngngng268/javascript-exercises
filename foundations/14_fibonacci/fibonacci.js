const fibonacci = function fibonacciNo (n) {
  const f = [];
  f[0] = 0 ;
  f[1] = 1 ;
  function fibonacciTo (a) {
    for (i=2; i<=a; i++) {
      f[i] = f[(i-1)] + f[(i-2)]
    };
  };
  if (n >= 2) {
    fibonacciTo(n);
    return (f[n]);
  } else if (n < 0) {
    return "OOPS"
  } else {return(f[n]);};
};


// Do not edit below this line
module.exports = fibonacci;
