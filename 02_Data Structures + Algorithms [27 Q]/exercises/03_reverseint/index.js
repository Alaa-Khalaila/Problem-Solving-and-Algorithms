// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const parse = String(n).split('').reverse().join('')
    if(String(n).split('').includes('-')){
        if(String(n).split('').reverse() === '0'){
            return -1 * parseInt(parse.shift())
        };
        return -1 *  parseInt(parse)
    };
   
    return parseInt(parse)
}

module.exports = reverseInt;
