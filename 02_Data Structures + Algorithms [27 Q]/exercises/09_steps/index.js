// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    let hash = ''
    let space = ''

    for (i = n; i > 0; i--) {
        for (j = 0; j < i; j++) {
            space = space + ' '
        }
        if (i === n) {
            hash = hash + '#'
            console.log(hash);
        } else {
            hash = hash + '#' + space
            console.log(hash);
            hash = hash.slice(0, n-i)
            space = ''
        }


    }
}

module.exports = steps;
