const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function([...a]) {
	const sum = a.reduce((total, number) => {return total += number}, 0);
  return +sum;
};

const multiply = function([...a]) {
  const multiply = a.reduce((total, number) => total *= number, 1);
  return +multiply;
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(a) {
	let total = 1;
  for(let i = a; i > 0; i--) {
    total *= i;
  }
  return total;
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
