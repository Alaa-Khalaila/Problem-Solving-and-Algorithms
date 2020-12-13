console.log('Problem Solving Q: 7');

/* Sum Array Odd */

/*  
Write a function that returns the sum of odd numbers in an array.
*/

function SumOddNumber(arr) {
  let sum=0
  arr.forEach(e=>{
    if(e % 2 !== 0){
      sum += e
    }
  })
  return sum
}


res1=SumOddNumber([1, 2, 3, 4, 5]) // => 9
res2=SumOddNumber([1, 5, 3, 4, 5]) // => 14
res3=SumOddNumber([12, 2, 3, 4, 5, 0]) // => 8

console.log(res1,res2,res3)

