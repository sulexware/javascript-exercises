const palindromes = function (str) {
  let re =/[^a-z]/g;
  let lowReStr = str.toLowerCase().replace(re,'');
  console.log(lowReStr);
  let reStr = lowReStr.split('').reverse().join('');
  return reStr === lowReStr
};

// Do not edit below this line
module.exports = palindromes;
