// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let arr = str.split('')
    let mostUsed =''
    for(i = 0; i < arr.length; i++){
       if(arr.filter(e=>e === arr[i].length >mostUsed.length)) {
        mostUsed =arr[i]
       }
    }
    return mostUsed
    }

module.exports = maxChar;
