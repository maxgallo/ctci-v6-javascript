/*
17.3
Random Set
*/

function getRandomSet(m, arr) {
    if (m > arr.length) {
        return null;
    }
    var subset = [];
    for (var i = 0; i < m; i++) {
        subset.push(getRandomElement(arr));
    }
    return subset;
}

function getRandomElement(arr) {
    return arr[Math.round(Math.random() * arr.length)];
}

console.log(getRandomSet(2, [3,6,29,46,23,4,7]));