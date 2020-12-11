console.log('Problem Solving Q: 20');

/* largestProductOfThree */

/*  
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.
*/

function largestProductOfThree(arr) {
  let finalNum = 1
  for(i=0;i<arr.length;i++){
    finalNum = finalNum *arr[i]
  }
  return finalNum
}


res1 =largestProductOfThree([2, 1, 3, 7]) // => 42
res2 =largestProductOfThree([0, 2, 3]) // => 0
res3 =largestProductOfThree([2, 3, 5]) // => 30

console.log(res1,res2,res3)