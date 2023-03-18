/** CRITERIA */

/** GIVEN I need a new, secure password
 * WHEN I click the button to generate a password
 * THEN I am presented with a series of prompts for password criteria
 * WHEN prompted for password criteria
 * THEN I select which criteria to include in the password
 * WHEN prompted for the length of the password
 * THEN I choose a length of at least 8 characters and no more than 128 characters
 * WHEN asked for character types to include in the password 
 * THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters 
 * WHEN I answer each prompt
 * THEN my input should be validated and at least one character type should be selected
 * WHEN all prompts are answered 
 * THEN a password is generated that matches the selected criteria 
 * WHEN the password is generated 
 * THEN the password is either displayed in an alert or written to the page
 */


// Assignment Code
var generateBtn = document.querySelector("#generate");

/** variable of requirements needed for password to be acceptable */

var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var specialCharacters = ["!", "@", "*", "$", "%", "^", "&", "#", "/", "?", "^", "(", ")", "+", "=", "[", "]", "{", "}"]

/** variables we will declare */
var passwordArray = []

// User password Prompts

function generatePassword() {

  var passwordLength = prompt("How many characters do you want? 8 - 128");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password is too short/long");
    return
  }

    var passwordUppers = confirm("Do you want to include an uppercase letter");
    var passwordLowers = confirm("Do you want to include a lowercase letter?");
    var passwordNum = confirm("Do you want to include a number?");
    var characterSpecial = confirm("Do you want to include a special character?");

    console.log(characterSpecial, "character special");

    if (passwordUppers === false && 
      passwordLowers === false && 
      passwordNum === false && 
      characterSpecial === false ) {

      /** If user does not choose at least yes for one of the questions */

      alert("At least one requirment is needed to move");
      return
    }

if (passwordUppers === true) {
  console.log(passwordArray)
  passwordArray = passwordArray+ upperLetters
  console.log(passwordArray) 
} 

if (passwordLowers === true) {
  console.log(passwordArray)
  passwordArray = passwordArray+ lowerLetters
  console.log(passwordArray) 
} 

if (passwordNum === true) {
  console.log(passwordArray)
  passwordArray = passwordArray+ num
  console.log(passwordArray) 
} 

if (characterSpecial === true) {
  console.log(passwordArray)
  passwordArray = passwordArray+ specialCharacters
  console.log(passwordArray) 
} 


  var password = " "
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = [Math.floor (Math.random() * passwordArray.length)]

    password = password+ passwordArray[randomIndex]
    console.log(randomIndex)
  }

  return password 
}  
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// this is for when the user "clicks" on the generate button
// and when the user clicks it'll prompt writePassword function

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
