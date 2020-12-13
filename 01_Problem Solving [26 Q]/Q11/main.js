console.log('Problem Solving Q: 11');

/* Is Power Of Two */

/*  
Write a function that returns YES if a number is a power of 2, and NO otherwise.
*/

function isPowerOfTwo(n) {
  for(i=0;i<1000;i++){
    if(Math.pow(2,i)===n){
      return "yes"
    }
  }
  return"no"
}


res1 =isPowerOfTwo(0) // => 'NO'  
res2 =isPowerOfTwo(1) // => 'YES'  
// I am sure not a typo 1 => YES
res3 =isPowerOfTwo(2) // => 'YES'
res4 =isPowerOfTwo(4) // => 'YES'
res5 =isPowerOfTwo(6) // => 'NO'
res6 =isPowerOfTwo(11) // => 'NO'
res7 =isPowerOfTwo(16) // => 'YES'
res8 =isPowerOfTwo(18) // => 'NO'
res9 =isPowerOfTwo(24) // => 'NO'
res10 =isPowerOfTwo(25) // => 'NO'
res11 =isPowerOfTwo(28) // => 'NO'
res12 =isPowerOfTwo(32) // => 'YES'
res13 =isPowerOfTwo(63) // => 'NO'
res14 =isPowerOfTwo(64) // => 'YES'
res15 =isPowerOfTwo(1023) // => 'NO'
res16 =isPowerOfTwo(1024) // => 'YES'

console.log(res1,
  res2,
  res3,
  res4,
  res5,
  res6,
  res7,
  res8,
  res9,
  res10,
  res11,
  res12,
  res13,
  res14,
  res15,
  res16)