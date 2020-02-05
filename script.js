// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordGenerated = [];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Prompt user the what requirments the want to meet
var length = prompt("How long do you want the password?\nYou can enter a number between 8 and 128");
var lowerCase = confirm("Do you want to include lowercase letters?\nClick cancel if no");
var upperCase = confirm("Do you want to include uppercase letters?\nClick cancel if no");
var specialChar = confirm("Do you want to include special characters?\nClick cancel if no");
var number = confirm("Do you want to include numbers?\nClick cancel if no");



console.log("The length is "+length)
console.log("lowerCase="+ lowerCase)
console.log("upperCase="+ upperCase)
console.log("specialChar="+ specialChar)
console.log("number="+ number)
console.log("The password is " +passwordGenerated)

