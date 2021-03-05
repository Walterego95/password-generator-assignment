// Assignment code here
function generatePassword() {
  // ask how many characters would like to use and make sure it is only a number value
  var passwordLength = window.prompt("How many characters would you like your password to be? [type a number between 8 and 128]");
  if (isNaN(passwordLength) || parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128 || passwordLength <= 0) {
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
  var passwordCharacter = window.prompt("What character types would you like to use? you may type one or more of the following strings separated by a comma: 'lowercase' 'uppercase' 'numeric' 'special'");
  //valid types accepted
  var validTypes = ["lowercase", "LOWERCASE", "uppercase", "UPPERCASE", "numeric", "NUMERIC", "special", "SPECIAL"];
  var chosenTypes = passwordCharacter.replace(/ /gi, "").split(",");

  var approvedTypes = [];
//conditions to have a valid type
  chosenTypes.forEach(chosenType => {
    if (validTypes.includes(chosenType)) {
      approvedTypes.push(chosenType);
    }
  });

  if (approvedTypes.length > 0) {
    return approvedTypes;
  } else {
    window.alert("It must contain at least one character type. You may choose between 'lowercase', 'uppercase', 'numeric', 'special'");
    return checkType();
  }
}
//conditions to create password
function createPassword(passwordLength, chosenTypes) {
  var characters = "";
  if (chosenTypes.includes("lowercase")) {
    characters += "abcdefghilmnopqrstuvwxyz";
  }
  if (chosenTypes.includes("LOWERCASE")) {
    characters += "abcdefghilmnopqrstuvwxyz";
  }
  if (chosenTypes.includes("uppercase")) {
    characters += "ABCDEFGHILMNOPQRSTUVWXYZ";
  }
  if (chosenTypes.includes("UPPERCASE")) {
    characters += "ABCDEFGHILMNOPQRSTUVWXYZ";
  }
  if (chosenTypes.includes("numeric")) {
    characters += "0123456789";
  }
  if (chosenTypes.includes("NUMERIC")) {
    characters += "0123456789";
  }
  if (chosenTypes.includes("special")) {
    characters += "@#$%^&*()";
  }
  if (chosenTypes.includes("SPECIAL")) {
    characters += "@#$%^&*()";
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
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
