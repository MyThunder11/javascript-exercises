const ftoc = function(fTemp) {
    let newCTemp = (fTemp - 32) * (5/9)
    return +(Math.round(newCTemp + "e+1")  + "e-1");
};

const ctof = function(cTemp) {
    let newFTemp = (cTemp * (9/5)) + 32;
    return +(Math.round(newFTemp + "e+1")  + "e-1");

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
