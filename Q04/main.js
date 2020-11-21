console.log('Problem Solving Q: 4 ');

/* Username Validation */

/*  
Have the function usernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.
*/

function usernameValidation(str) {
  function checkLetters(str){
    let strFilter=str.split('')
    let final =strFilter.filter(e=> typeof e ==='string');
    console.log(final) 
    if(final.length===0){
      return true
    }
  }
  if(str.length>=4 && str.length<=25){
    if(typeof(str.split('')[0])){
      if(checkLetters(str)){
        console.log(true,str)
      } 
    }
  }else{
    return false;
  }
}

usernameValidation('aa_'); // => false
usernameValidation('aaaaa'); // => false
usernameValidation('u__hello_world123'); // => true
usernameValidation('u__h^el$lo_world123'); // => false

