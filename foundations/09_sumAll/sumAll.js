const sumAll = function(a, b) {
    if (
        (a<0 || b<0)
    ) {
        return "ERROR"
    }
    else return (
        ((a+b) * ((Math.abs(a-b)) + 1))/2
    )
};

// Do not edit below this line
module.exports = sumAll;
