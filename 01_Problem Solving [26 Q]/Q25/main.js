console.log('Problem Solving Q: 25');

/*is_array   */

/*  
Write a JavaScript function to check whether an `input` is an array or not.
*/

function is_array(arr) {
  return typeof(arr)=== 'object'
}


res1 =is_array('w3resource') //=> false
res2= is_array ([1, 2, 4, 0]) // => true

console.log(res1,res2)