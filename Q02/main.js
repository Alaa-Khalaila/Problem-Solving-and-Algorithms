console.log('Problem Solving Q: 2 ');

/* Longest Word 2 */

/*  
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
*/

function longestWord_2(sen) {
  let newArray = sen.match(/[a-zA-Z]+/g);
  //console.log(newArray);
  let word =''
  for(i=0; i<newArray.length ; i++){
    if(newArray[i].length > word.length){word= newArray[i]}
  }
  console.log(word)
  return word;

}


longestWord_2('lol!- time.'); // => 'time'
longestWord_2('I** love, cats'); // => 'love'
longestWord_2('coding&& is awesome'); // => 'awesome'
longestWord_2('hello|| world'); // => 'hello'

