const palindromes = function (string) {
  let validChars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let lowerString = string.toLowerCase();
  let splittedString = lowerString.split("");
  let cleanedString = "";
  let reversedString = "";

  for (let i = splittedString.length - 1; i >= 0; i--) {
    let char = splittedString[i].toLowerCase();
    if (validChars.includes(char)) {
      cleanedString += char;
      reversedString = char + reversedString;
      console.log(cleanedString);
      console.log(reversedString);
    }
  }
  return cleanedString === reversedString ? true : false;
};

palindromes("r3ace3car");

// Do not edit below this line
module.exports = palindromes;
