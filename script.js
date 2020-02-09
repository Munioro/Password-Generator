// Assignment Code
var generateBtn = document.querySelector("#generate");
var arr = [];
var lngth;

// Write password to the #password input
function writePassword() {
  var password = generatePassword(arr);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//create function to generate password
function generatePassword(arr){
  //Prompt user the what requirments they want to meet
  lngth = prompt("How long do you want the password?\nYou can enter a number between 8 and 128");

  //console log variable inputs
  console.log("The length is "+lngth);

  //if length requirments are met start for loop
  if (lngth >= 8 && lngth <= 128){
    var lowerCase = confirm("Do you want to include lowercase letters?\nClick cancel if no");
    var upperCase = confirm("Do you want to include uppercase letters?\nClick cancel if no");
    var specialChar = confirm("Do you want to include special characters?\nClick cancel if no");
    var numbr = confirm("Do you want to include numbers?\nClick cancel if no");
    //reset to an empty array when function runs
    arr = [];
    // console.log("The password is " + generatePassword(arr));
    console.log("lowerCase="+ lowerCase);
    console.log("upperCase="+ upperCase);
    console.log("specialChar="+ specialChar);
    console.log("number="+ numbr);
    console.log(arr);
    console.log(arr.length);
    console.log(arr.splice(0, length).join(''));
  
  
    //create for loop to generate characters for password
    for (let i=0; i < lngth; i++){
       //if lowerCase is true generate characters and push into string
       if (lowerCase){
          arr.push(String.fromCharCode(Math.floor(Math.random()*26)+97));
        }
        //if upperCase is true generate characters and push into string
        if (upperCase){
          arr.push(String.fromCharCode(Math.floor(Math.random()*26)+65));
        }
        //if specialChar is true generate characters and push into string
        if (specialChar){
          var spArr = [" ","!","\"","#","$","%","&","\'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
          arr.push(spArr[Math.floor(Math.random()*spArr.length)]);
        }
        //if numbr is true generate characters and push into string
        if (numbr){
          arr.push(String.fromCharCode(Math.floor(Math.random()*9)+48));
          }
    //return arr with wanted length and remove commas from array
    }return arr.splice(0, lngth).join('');

    
  //alert length requirments if not met
  }else {
    alert("Please enter a number between 8 and 128.");
    console.log("peramiters not met");
  }
}



