console.log('Problem Solving Q:17 ');

/*  */

/*  
Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'
*/

function firstNonRepeatedCharacter(str) {
  for (i=0;i<str.length;i++){
    let arr = str.split('').filter(e=>e===str[i])
    if(arr.length===1){
      return arr[0]
    }
  }
}


res1 =firstNonRepeatedCharacter('ABCDBIRDUP') // => 'A'
res2 =firstNonRepeatedCharacter('ALABAMA') // => 'L'
res3 =firstNonRepeatedCharacter('Uber for horses') // => 'U'

console.log(res1,res2,res3)