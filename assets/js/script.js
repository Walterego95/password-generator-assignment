// Assignment code here
function generatePassword() {
    // ask how many characters would like to use
  var passwordLength = window.prompt("How many characters would you like your password to be?");
  if(passwordLength < 8 || passwordLength > 128) {
    //check if it is a valid prompt
    window.alert("The value inserted is not valid, try again!");
    return generatePassword();
  } else { 
    //if valid
    var chosenType = checkType();
     return createPassword(passwordLength, chosenType);
  }
} 
// ask what kind of characters would like to use
function checkType() {
  var passwordCharacter = window.prompt("What character types would you like to use?");
  //valid types accepted
  var validTypes = ["lowercase", "uppercase", "numeric", "special"];
  var chosenTypes = passwordCharacter.replace(/ /gi, "").split(",");

  var approvedTypes = [];

  chosenTypes.forEach(chosenType => {
    if(validTypes.includes(chosenType)) {
      approvedTypes.push(chosenType);
    }
  });

  if(approvedTypes.length > 0) {
    return approvedTypes;
  } else {
    window.alert("It must contain at least one character type")
    return checkType();
  }
}

function createPassword(passwordLength, chosenTypes) {
  var characters = "";
  if(chosenTypes.includes("lowercase")) {
    characters += "abcdefghilmnopqrstuvwxyz";
  }
  if(chosenTypes.includes("uppercase")) {
    characters += "ABCDEFGHILMNOPQRSTUVWXYZ";
  }
  if(chosenTypes.includes("numeric")) {
    characters += "0123456789";
  }
  if(chosenTypes.includes("special")) {
    characters += "@#$%^&*()";
  }

  console.log(passwordLength, characters);
  var password = "";
  for ( var i = 0; i < passwordLength; i++ ) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
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
