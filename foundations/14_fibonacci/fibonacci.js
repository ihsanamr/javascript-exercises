const fibonacci = function (n) {
  // // iterative apporach
  // let fiboNum = [0, 1];
  // if (n < 0) return "OOPS";
  // if (n === 0) return fiboNum[0];
  // if (n === 1) return fiboNum[1];
  // for (let i = 0; i < n; i++) {
  //   fiboNum.push(fiboNum[i] + fiboNum[i + 1]);
  // }
  // return fiboNum[n];

  // recursive
  if (n < 0) {
    return "OOPS";
  } else if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

// Do not edit below this line
module.exports = fibonacci;
