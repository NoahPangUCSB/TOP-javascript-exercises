const convertToCelsius = function(fTemp) {
    if(!typeof fTemp === "number") return "ERROR";

    let cTemp = (fTemp - 32) * (5/9);
    cTemp = Math.round(cTemp * 10) / 10;
    return cTemp;
};

const convertToFahrenheit = function(cTemp) {
    if(!typeof cTemp === "number") return "ERROR";

    let fTemp = (9/5) * cTemp + 32;
    fTemp = Math.round(fTemp * 10) / 10;
    return fTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
