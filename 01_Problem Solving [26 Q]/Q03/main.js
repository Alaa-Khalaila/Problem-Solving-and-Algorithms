console.log('Problem Solving Q: 3 ');

/* First Reverse */

/*  
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
*/

function firstReverse(str) {
  let newArray=str.split("") ;
  //console.log(newArray)
  let finalArray=[];
  for(i=newArray.length-1;i>=0; i--){
    finalArray.push(newArray[i]);
    //console.log(newArray);
  }
  console.log(finalArray.join(''));
  return finalArray.join('')
}


firstReverse('I Love Code'); // => 'edoC evoL I'
firstReverse('Hello World'); // => 'dlroW olleH'
firstReverse('How are you?'); // => '?uoy era woH'

