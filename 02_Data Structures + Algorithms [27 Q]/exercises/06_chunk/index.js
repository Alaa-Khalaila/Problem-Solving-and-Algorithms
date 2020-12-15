// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4],2 ) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let arr = [];
    let insideArr = [];
    for (i = 0; i < array.length; i++) {
        if (i % size !== 0 || i === 0) {
            insideArr.push(array[i])
        } else if (i % size !== 0 && array.length === i + 1) {
            insideArr.push(array[i]);
            arr.push(insideArr);
        } else if (i % size === 0) {
            arr.push(insideArr);
            insideArr = [];
            insideArr.push(array[i])
        }
    }
    if (insideArr.length !== 0) {
        arr.push(insideArr)
    }
    return arr
}

module.exports = chunk;
