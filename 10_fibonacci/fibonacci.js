const fibonacci = function(num) {
  /*
    if(Math.sign(num) === -1) return 'OOPS'
  num = parseInt(num);
  if(num === 1) return 1
  if(num === 2) return 1
  let num1 = 0;
  let num2 = 1;
  let sum;
  
  for (let i = 2; i <= num; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
  return sum
  */
  if (num < 0) return "OOPS";
  if (num === 0) return 0;
  let a = 0;
  let b = 1;
  for (let i = 1; i < num; i++) {
    const temp = b;
    b = a + b;
    a = temp;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
