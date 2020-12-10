console.log('Problem Solving Q:16 ');

/* evenOccurrence */

/*  
Find the first item that occurs an even number of times in an array.
*/

function evenOccurrence(arr) {
  for(i=0;i<arr.length;i++){
   let singleNum = arr.filter(e=>e===arr[i])
   if(singleNum.length %2===0 && singleNum.length !==0){
     return singleNum[0]
   }
  }
}


res1 =evenOccurrence([1,2,6,6]) // => 6
res2 =evenOccurrence([1,2,9,8,8,6,6]) // => 8 
res3 =evenOccurrence([1,9,7,3,6,6,8,9,9]) // => 6

console.log(res1,res2,res3)