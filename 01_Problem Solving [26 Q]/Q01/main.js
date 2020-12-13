console.log('Problem Solving Q: 1 ');

/* Longest Word */

/*  
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length.
*/

function longestWord(sen) {
  let newArray = sen.split(" ");
  let word =''
  for(i=0; i<newArray.length ; i++){
    if(newArray[i].length > word.length){word= newArray[i]}
  }
  console.log(word)
  return word;
}


longestWord('lol time'); // => 'time'
longestWord('I love cats'); // => 'love'
longestWord('coding is awesome'); // => 'awesome'
longestWord('hello world'); // => 'hello'
