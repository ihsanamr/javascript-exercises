const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  if (array.length === 0) return 0;
  const finalSum = array.reduce((acc, num) => {
    return (acc += num);
  });
  return finalSum;
};

const multiply = function (array) {
  if (array.length === 0) return 0;
  const finalMultiply = array.reduce((acc, num) => {
    return (acc *= num);
  });
  return finalMultiply;
};

const power = function (num, power) {
  return num ** power;
};

const factorial = function (num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
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
  factorial,
};
