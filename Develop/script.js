// Assignment Code


var generateBtn = document.querySelector("#generate");
var output = document.querySelector("#output");

function showPassword(password) {

}


function generatePassword(passwordRequirements) {
  var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var special = ["!", "@", "*", "$", "%", "^", "&", "#", "/", "?"]

  var passChoices = [];
  var passList = [];

  var randomSelection = function (arr) {
    var random = passChoices[Math.floor(Math.random() * arr.length)];

    if (passList.includes(randomSelection)) {
      return randomSelection(arr);
    }  

    return random;
  }

  if (passwordRequirements.letters) {
    passChoices = passChoices.concat(letters);
  } 
  if (passwordRequirements.num) {
    passChoices = passChoices.concat(num);
  }
  if (passwordRequirements.special) {
    passChoices = passChoices.concat(special)
  }

 for (var i = 0; i < passwordRequirements.amount; i ++) {
    var random = randomSelection(passChoices);
    passList.push(random)

 }

  showPassword(passList);
}
  

// Write password to the #password input


function writePassword() {

  var passwordCharacters = confirm("Do you want to include a letter?");
  var passwordNumbers = confirm("Do you want to include a number?");
  var passwordSpecial = confirm("Do you want to include special characters?");
  var passwordLength = prompt("How many characters do you want? 8 - 128");
  var parseAmount = parseInt(passwordLength);


  var requirements = {
    letters: passwordCharacters,
    num: passwordNumbers,
    special: passwordSpecial,
    amount: parseAmount
  }


  generatePassword(password);

  // console.log(parseAmount);

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}


// Add event listener to generate button

// this is for when the user "clicks" on the generate button
// and when the user clicks it'll prompt writePassword function


generateBtn.addEventListener("click", writePassword);
