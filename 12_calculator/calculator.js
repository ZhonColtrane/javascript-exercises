const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(numbers) {
  return numbers.reduce((total, number) => total + number, 0);	
};

const multiply = function(arr) {
  return arr.reduce((prod,num) => prod*num,1);
};

const power = function(base,exponent) {
  return base ** exponent;
};

const factorial = function(num) {
	let result = 1;
  for (let i = 1; i<=num; i++) {
    result *= i;
  }
  return result;
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
