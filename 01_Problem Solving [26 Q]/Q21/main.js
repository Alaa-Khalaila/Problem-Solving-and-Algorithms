console.log('Problem Solving Q: 21');

/* onlyUnique */

/*  
Given a string, remove any characters that are not unique from the string.
*/

function onlyUnique(str) {
  let finalStr=''
  let arr = str.split('')
  for(i=0;i<arr.length;i++){
    let filterArr  = arr.filter(e=>arr[i]===e)
    if(filterArr.length===1){
      finalStr = finalStr + filterArr[0]
    }
  }
  return finalStr
}


res1 =onlyUnique('hello there') // => 'o tr'
res2 =onlyUnique('xyz') // => 'xyz'
res3 =onlyUnique('iiii') // => ''

console.log(res1,res2,res3)