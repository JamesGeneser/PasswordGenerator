


//generatePassword is a function that returns a value for the 'password' variable
function generatePassword() {
    //the arrays hold all possible characters as strings
    const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const specialChar = ['!', '@', '#', '$', '%', '=', '&', '*', '?', '_'];
    //prompt asks for user input, 'Number' reassigns the string value input into a number
    const passwordLength = Number(prompt("How long do you want your password to be? (Enter character number)"))


    
        if (passwordLength<8 || passwordLength>128){
            alert("Invalid input. Please chose a character length between 8 and 128");
            return "Invalid";
        
        }
    
    




    //'confirm' makes the const variable a boolean value
    const includeLowerCase = confirm("Do you want any lower-case letters in your password?");
    const includeUpperCase = confirm("Do you want any upper-case letters in your password?");
    const includeSpecial = confirm("Do you want any special characters in your password?");
  
    // charBank is an empty array, using the 'push' method other arrays can be conditionally added to charBank
    const charBank = [];
    if (includeLowerCase) {
      charBank.push(...lowerCase)
    }
  
    // for (let i = 0; i < upperCase.length; i++) {
    //   charBank.push(upperCase[i])
    // }
    // spread operator takes an array within an array and eliminates the inner array while keeping its values ()...[1, 2, 3] = 1, 2, 3)
    if (includeUpperCase) {
      charBank.push(...upperCase)
    }
  
    if (includeSpecial) {
      charBank.push(...specialChar)
    }
    
    //password is defined outside the for loop
    let password = '';
  
    for (let i = 0; i < passwordLength; i += 1) {
      // generate a random number
      const randNum = Math.floor(Math.random() * charBank.length)
      // index into the charBank array at the random number
      const newChar = charBank[randNum]
      // add it to the end of string
      password = password + newChar
    }
  
    return password
  }
  
  
  function writePassword() {
    // declare password, assign to return value of generatePassword
    var password = generatePassword(); // returned result of generatePassword
    // grab password text element
    var passwordText = document.querySelector("#password"); //link to the textarea
    // set value property on passwordText to password result
    passwordText.value = password;
    
  }
  
  // Event listener 'listens' for the user to click the button and then runs the 'writePassword' function
  var generateBtn = document.querySelector("#generate");
  generateBtn.addEventListener("click", writePassword); // will run 
  
