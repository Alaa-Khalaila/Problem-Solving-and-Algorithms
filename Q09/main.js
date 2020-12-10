console.log('Problem Solving Q: 9');

/* Longest Sequence */

/*  
Write a function that returns the length of the longest sequence of 1s in an array of 1s and 0s.
*/

function longestSequence(arr) {
  let longest = 0;
  let test=0
  for(i=0;i<arr.length-1;i++){
    if(arr[i]===1){
      test=test+1;
      if(test>longest){
        longest = test
      }
    }else{
      test=0
    }
  }
  return longest
}


res1=longestSequence([0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1]) // => 4
res2=longestSequence([1, 1, 0, 1, 1, 0, 1, 0, 1, 1]) // => 2
res3=longestSequence([1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1]) // => 3
res4=longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1]) // => 4
res5=longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1]) // => 5
res6=longestSequence([1, 0, 0, 1]) // => 1
res7=longestSequence([0, 0, 0, 0]) // => 'There is no one sequenced'

console.log(res1,res2,res3,res4,res5,res6,res7)