// Assignment code here

// Prompt the user for the password criteria
// - password length of 8 < 128
// lowercase, uppercase, numbers, and special characters
// validate the input
// generate the password
// display the password

// Function to prompt user for password criteria
function generatePassword() {
  var lowerCaseValue = window.confirm('Would you like to add lowercase letters to your password?');
  var upperCaseValue = window.confirm('Would you like to add uppercase letters to your password?');
  var numberValue = window.confirm('Would you like to add numbers to your password?');
  var symbolsValue = window.confirm('Would you like to add symbols to your password?');
  var lengthValue = prompt('How long would you like your password to be (Must be in between 8-128 characters)');

  // Validate the length input
  var passwordLength = parseInt(lengthValue);

  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert('Please enter a valid length between 8 and 128 characters.');
    lengthValue = prompt('How long would you like your password to be (Must be in between 8-128 characters)');
    passwordLength = parseInt(lengthValue);
  }

  // Generate password based on selected criteria
  var password = '';
  while (password.length < passwordLength) {
    if (lowerCaseValue) {
      password += generateLowerCase();
    }
    if (upperCaseValue) {
      password += generateUpperCase();
    }
    if (numberValue) {
      password += generateNumbers();
    }
    if (symbolsValue) {
      password += generateSymbols();
    }
  }

  // Trim the password to the desired length
  password = password.slice(0, passwordLength);

  return password;
}

// Function to generate lowercase letters
function generateLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Function to generate uppercase letters
function generateUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Function to generate numbers
function generateNumbers() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Function to generate symbols
function generateSymbols() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}

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
