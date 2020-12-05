console.log('Problem Solving Q: 6');

/* Even or Not */

/*  
Write a function that returns true if a number is even, and false otherwise.
*/

function evenOrNot(n) {
  if(n%2===0){
    return true
  }else{
    return false
  }
}



res1 = evenOrNot(1) // => false
res2 = evenOrNot(2) // => true
res3 = evenOrNot(5) // => false
res4 = evenOrNot(99) // => false
res5 = evenOrNot(0) // => true

console.log(res1,res2,res3,res4,res5)

