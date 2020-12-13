console.log('Problem Solving Q: 22');

/* characterFrequency */

/*  
 Write a function that takes as its input a string and returns an array of 
 arrays as shown below sorted in descending order by frequency and then by 
 ascending order by character.
*/

function characterFrequency(str) {
  let arr = str.split('');
  let finalArr =[];
  for(i=0;i<arr.length;i++){
    let newArr=arr.filter(e=>arr[i]===e)
    let result =[arr[i],newArr.length]
    if(!finalArr.includes(result)){ // I don't know why includes is not working here => always True !!!
      finalArr.push(result)
    }
  }
  return finalArr
}


res1 =characterFrequency('mississippi') // =>  [ ['i', 4],['s', 4],  ['p', 2],  ['m', 1]  ]
res2 =characterFrequency('miaaiaaippi') // =>  [ ['a', 4],  ['i', 4],  ['p', 2],  ['m', 1] ]

console.log(res1,res2)
