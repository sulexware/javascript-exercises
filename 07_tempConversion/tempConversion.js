const ftoc = function(arg1) {
  return round(((arg1-32)*(5/9)), 1)
};

const ctof = function(arg1) {
  return round((arg1 * 9/5 + 32) , 1)
};

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
