const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(args) {
  	return args.reduce((total, item) => total + item, 0);
};

const multiply = function(args) {
  return args.length ? args.reduce((totalz, itemz) => totalz * itemz) : 0;
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(n) {
	if(n === 0) return 1
  let f = 1;
  for(let i =n; i > 0; i--){
    f *= i;
  }

  return f;
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
