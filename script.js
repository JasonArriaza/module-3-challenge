// Assignment code here

function generatePassword(){
  var lowerCaseValue = window.confirm('Would you like to add lowercase letters to you password?');
  var upperCaseValue = window.confirm('Would you like to add uppercase letters to your password?');
  var numberValue = window.confirm('Would you like to add numbers to your password?');
  var symbolsValue = window.confirm('Would you like to add symbols to your password?');
  var lengthValue = prompt('How long would you like your password to be (Must be in between 8-128 characters)');
}

//generate the lowercase letters
function generateLowerCase(lowerCaseValue){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// console.log(generateLowerCase());
//generate the uppercase letters
function generateUpperCase(upperCaseValue){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// console.log(generateUpperCase());
//generate the numbers
function generateNumbers(numbersValue){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// console.log(generateNumbers());
//generate the symbols
function generateSymbols(symbolsValue){
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}
// console.log(generateSymbols());
//Hava a limit for the password


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);