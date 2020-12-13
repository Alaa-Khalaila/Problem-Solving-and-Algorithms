console.log('Problem Solving Q:26 ');

/*  */

/*  
Write a JavaScript function to clone an array.
*/

function array_Clone(arr) {
  let clone = []
  for(i=0;i<arr.length;i++){
    clone[i]=arr[i]
  }
  return clone
}


res1 =array_Clone ([1,2,3]) // =>[1,2,3]
res2 =array_Clone ([1,9,8]) // =>[1,9,8]

console.log(res1,res2)