// First Solution (with filter)
// const removeFromArray = function (array, ...args) {
//   return (cleanedArray = array.filter((val) => !args.includes(val)));
// };

// Second Solution (manual)
const removeFromArray = function (array, ...args) {
  let cleanedArray = [];

  array.forEach((element) => {
    if (!args.includes(element)) {
      cleanedArray.push(element);
    }
  });

  return cleanedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
