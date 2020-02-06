// Assignment Code
var generateBtn = document.querySelector("#generate");
// var passwordGenerated = [];
var arr = [];


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
var numbr = confirm("Do you want to include numbers?\nClick cancel if no");

if (length >= 8 && length <= 128){
  for (let i=0; i < length; i++){
    if (lowerCase == upperCase == specialChar == numbr){
      arr.push(String.fromCharCode(Math.floor(Math.random()*94)+32))
    }  
    }
}else if (length >= 8 && length <= 128){
  for (let i=0;i < length; i++){
    if (lowerCase){
      // passwordGenerated.push(String.fromCharCode(Math.floor(Math.random()*26)+97));
      arr.push(String.fromCharCode(Math.floor(Math.random()*26)+97));
    }
    if (upperCase){
      // passwordGenerated.push(String.fromCharCode(Math.floor(Math.random()*26)+65));
      arr.push(String.fromCharCode(Math.floor(Math.random()*26)+65));
    }
    // if (specialChar){
    //   passwordGenerated.push(String.fromCharCode())
    // }
    if (numbr){
      arr.push(String.fromCharCode(Math.floor(Math.random()*9)+48))
  }
  }
}else console.log("peramiters not met")


console.log("The length is "+length)
console.log("lowerCase="+ lowerCase)
console.log("upperCase="+ upperCase)
console.log("specialChar="+ specialChar)
console.log("number="+ numbr)
// console.log("The password is " +passwordGenerated)
console.log(arr)
console.log(arr.length);
console.log(arr.splice(0, length).join(''));

