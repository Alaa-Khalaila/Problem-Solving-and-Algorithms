console.log('Problem Solving Q: 4 ');

/* Username Validation */

/*  
Have the function usernameValidation(str) take the str parameter being passed and determine if
 the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.
*/

function usernameValidation(str) {
  
  
  if(str.length>=4 && str.length<=25){
    //console.log(str[0].match(/[a-zA-Z]/g))
     if(str[0].match(/[a-zA-Z]/g)){
       for(i=0 ; i<str.length ; i++){
         let valid=str[i].match(/[a-zA-z _1-9]/g);
         if(!valid){
           return false 
        }};
         if(str[str.length-1] !=="_"){
          console.log(str,true)
          return true
      }else{
        return false}
  }else{
    return false;
  }
}else{
  return false
}
}
usernameValidation('aa_'); // => false
usernameValidation('*aaaa'); // => false
usernameValidation('u__hello_world123'); // => true
usernameValidation('u__h^el$lo_world123'); // => false

