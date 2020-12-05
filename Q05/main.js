console.log('Problem Solving Q: 5 ');

/* Find Intersection */

/*  
Have the function FindIntersection(strArr) read the array of strings stored in strArr which will
 contain 2 elements: the first element will represent a list of comma-separated
  numbers sorted in ascending order, the second element will represent a second
   list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string
    containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
*/

function findIntersection(strArr) {
  const arr1 =strArr[0].split(", ");
  const arr2 = strArr[1].split(", ");
  const finalArr =[];

  arr1.forEach(e=>{
    if(arr2.includes(e)){
      finalArr.push(e);
    }
  })
  return finalArr
}


res1 =findIntersection(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15']); // => '1,4,13'
res2 =findIntersection(['1, 3, 9, 10, 17, 18', '1, 4, 9, 10']); // => '1,9,10'

console.log(res1,res2)
