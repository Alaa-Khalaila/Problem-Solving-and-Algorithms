console.log('Problem Solving Q: 12');

/* Reverse Each Word */

/*  
Write a function that reverses the characters of every word of a sentence. Input sentences contain only English letter and space characters.
*/

function reverseEachWord(str) {
  let arr =str.split(' ')
  let lastArr=[];
  for(i=0;i<arr.length;i++){
    let word =arr[i].split('').reverse().join('');
    lastArr.push(word)
  }
  return lastArr.join(" ");
}


res1 =reverseEachWord("This is a test") // => "sihT si a tset"
res2 =reverseEachWord("Lets code guys") // => "steL edoc syug"
res3 =reverseEachWord("Jouza admire Fried Chicken") // => "azuoJ erimda deirF nekcihC"

console.log(res1,res2,res3)