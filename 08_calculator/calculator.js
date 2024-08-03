const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce((total, item)=> total+=item, 0);
};

const multiply = function(array) {
  return array.reduce((total, item)=> total*=item, 1);
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	if(a===1) return 1;
  let total = 1;
  for(let i = a; i>0; i--){
    total*=i;
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
