console.log('Problem Solving Q: 8');

/* Unique Item */

/*  
Write a function that returns the number of unique items in an array.
*/

function uniqueItems(arr) {
  let newArr=[];

  arr.forEach(element => {
    if(!newArr.includes(element)){
      newArr.push(element)
    }
  })
  return newArr.length
}

res1=uniqueItems([1, 1, 1, 1, 1]) // => 1
res2=uniqueItems([3, 3, 5, 3]) // => 2
res3=uniqueItems([5, 1, 1, 5, 1]) // => 2
res4=uniqueItems([1, 6, 7]) // => 3
res5=uniqueItems([1, 2, 3, 1, 2, 3]) // => 3
res6=uniqueItems([5, 1, 2, 2, 1, 5]) // => 3
res7=uniqueItems([5, 77, 1, 3]) // => 4

console.log(res1,res2,res3,res4,res5,res6,res7)

