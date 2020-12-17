// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let arr = str.toLowerCase().split('');
    arr = arr.filter(e => e === 'a' | e === 'e' | e === 'i' | e === 'o' | e === 'u');
    return arr.length
}

module.exports = vowels;
