console.log('Problem Solving Q:15 ');

/*  commonCharacters*/

/*  
Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.
Your function should return the common characters in the same order that they appear in the first argument. 
Do not return duplicate characters and ignore whitespace in your returned string.
*/

function commonCharacters(str1,str2) {
  const arr1 = str1.split('');
  const arr2 = str2.split('');
  let word =''

  for(i=0;i<arr1.length;i++){
    let filterArr = arr2.filter(e=>e===arr1[i])
    if(filterArr[0] && filterArr[0]!==' ' && !word.includes(filterArr[0]) ){
      word= word + filterArr[0]
    }
  }
  return word;
}


res1 =commonCharacters('abc', 'abc') // => 'abc'
res2 =commonCharacters('What is love?', "Baby don't hurt me") // => 'hatoe'
res3 =commonCharacters('Riding on a buffalo makes me more approachable','so what') // => 'oash'

console.log(res1,res2,res3)