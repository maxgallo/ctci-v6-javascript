/*
10
Radix Sort
*/

function radixsort(arr) {
    var m = getMax(arr);
    for (var exp = 1; exp < m; exp *= 10) {
        countingSort(arr, exp);
    }
}

function countingSort(arr, exp) {
    var group = [];

    for (var k = 0; k < arr.length; k++) {
        var digit = Math.floor((arr[k] / exp) % 10);
        (group[digit] || (group[digit] = [])).push(arr[k]);
    }

    for (var j = 0, jj = 0; j < group.length; j++) {
        if (!group[j]) continue;
        for (var i = 0; i < group[j].length; i++) {
            arr[jj++] = group[j][i];
        }
    }
}

function getMax(arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}


var arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(arr);
radixsort(arr, 0);
console.log(arr);
