const sumAll = function(num1, num2) {
    if(typeof(num1) !== "number" || typeof(num2) !== "number" || num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    const min = num1 < num2 ? num1 : num2;
    const max = num2 !== min ? num2 : num1;

    let sum = 0;
    for(let i = min; i <= max; i++) {
        sum += i;
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
