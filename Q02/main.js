console.log('Problem Solving Q: 2 ');

/* Longest Word 2 */

/*  
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
*/

function longestWord_2(sen) {
  let newArray = sen.split(" ");
  let word =''
  for(i=0; i<newArray.length ; i++){
    let cleanWord = newArray[i].replaceAll("[^A-Za-z0-9]","")
    if(cleanWord.length > word.length){word= cleanWord}
  }
  console.log(word)
  return word;
}
// I don't know why is replaceAll methode is not working....

longestWord_2('lol!- time.'); // => 'time'
longestWord_2('I** love, cats'); // => 'love'
longestWord_2('coding&& is awesome'); // => 'awesome'
longestWord_2('hello|| world'); // => 'hello'

