// Assignment code here
function generatePassword(){
  var upperCaseValue = window.confirm('Would you like to add uppercase letters to your password?');
  var lowerCaseValue = window.confirm('Would you like to add lowercase letters to you password?');
  var numberValue = window.confirm('Would you like to add numbers to your password?');
  var symbolsValue = window.confirm('Would you like to add symbols to your password?');
  var lengthValue = prompt('How long would you like your password to be (Must be in between 8-128 characters)');
}

//generate the lowercase letters
//generate the uppercase letters
//generate the symbols
//Hava a linit for the password


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