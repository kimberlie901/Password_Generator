// Assignment Code

var generateBtn = document.querySelector("#generate");



var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var specialCharacters = ["!", "@", "*", "$", "%", "^", "&", "#", "/", "?", "^","(", ")", "+", "=", "[", "]", "{", "}"]


var passwordRequirements = 128;
var Arr = [];






// Write password to the #password input


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 

  passwordText.value = password; 

  if (password) {
    var userPassword = madeupPassword();
    passwordText.value = userPassword;
  }

  else {
    passwordText.value = "";
  }




function generatePassword() {

  var password = " "
  for (i = 0; i < passwordRequirements; i++) {
    var random = [Math.floor (Math.random() * Arr.length)]
  }
 
  return password;
}


function generatePassword() {
  var passwordLength = prompt("How many characters do you want? 8 - 128");
  var parseAmount = parseInt(passwordLength);

  if(isNan(passwordLength)) {
    return ("Password is too short/long");
    return false; 
  }
}

  if (confirm ("Do you want to include an uppercase letter?" )) {
    Arr = Arr.concat(upperLetters);
  }


  if (confirm ("Do you want to include a lowercase letter?")) {
    Arr = Arr.concat(lowerLetters);
  }

  if (confirm ("Do you want to include a number?")){
    Arr = Arr.concat(num);
  }

  if (confirm ("Do you want to include a special character?")) {
    Arr = Arr.concat(specialCharacters);
  }


}

  


// Add event listener to generate button

// this is for when the user "clicks" on the generate button
// and when the user clicks it'll prompt writePassword function


generateBtn.addEventListener("click", writePassword);
