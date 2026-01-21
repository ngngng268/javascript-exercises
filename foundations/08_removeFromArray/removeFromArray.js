const removeFromArray = function(arr, a, b, c, d) {
    return arr.filter(
        (num) => (
        (num!==a)
        &&(num!==b)
        &&(num!==c)
        &&(num!==d)
    ))
};

// Do not edit below this line
module.exports = removeFromArray;
