// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let final = [];
    const arr = str.split(" ");
    for (i = 0; i < arr.length; i++) {
        let word = arr[i].split('');
        word[0] = word[0].toUpperCase();
        final.push(word.join(''))
    }
    return final.join(' ')
}

module.exports = capitalize;
