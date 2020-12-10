console.log('Problem Solving Q: 10');

/* Times Of Most Freq Char */

/*  
Write a function that returns the number of occurrences of the most frequent character in a sentence.
*/

function timesOfMostFreqChar(str) {
  let sortStr = str.split('').sort()
  let lognest = 0;
  let test = 0;
  for(i=0;i<sortStr.length;i++){
    test = sortStr.filter(e=>e===sortStr[i]).length
    if(test>lognest){
      lognest=test
    }
  }
  return lognest
}


res1=timesOfMostFreqChar('hello world') // => 3
res2 =timesOfMostFreqChar('hello world lol') // => 5
res3 =timesOfMostFreqChar('hello world lol woooow') // => 7
res4 =timesOfMostFreqChar('hello world lol wow www.com') // => 6

console.log(res1,res2,res3,res4)