const sumAll = function(a, b) {
    if (
        (a<0 || b<0)
        || ((a % 1 !== 0) || (b % 1 !== 0))
        ||((Number.isInteger(a) === false) || (Number.isInteger(b) === false))
    ) {
        return "ERROR"
    }
    else return (
        ((a+b) * ((Math.abs(a-b)) + 1))/2
    )
};

// Do not edit below this line
module.exports = sumAll;
