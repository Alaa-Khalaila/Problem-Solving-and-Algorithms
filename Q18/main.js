console.log('Problem Solving Q:18 ');

/*  factorial*/

/*  
Given an integer, n, return n! (n factorial)
5! = 5 * 4 * 3 * 2 * 1
*/

function factorial(n) {
  let nFact =1
  for(i=n;i>0;i--){
    nFact = nFact*i 
  }
  return nFact
}


res1 =factorial(1) // => 1
res2 =factorial(3) // => 6
res3 =factorial(4) // => 24

console.log(res1,res2,res3)