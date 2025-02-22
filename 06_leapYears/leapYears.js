const leapYears = function(year) {
    if(!Number.isInteger(year) || year < 0) return "ERROR";

    return ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0));
};

// Do not edit below this line
module.exports = leapYears;
