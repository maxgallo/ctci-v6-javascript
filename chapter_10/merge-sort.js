/*
10
Merge Sort
*/

function mergeSort(array, low, high) {
    if (low < high) {
        var middle = Math.floor((low + high) / 2);
        mergeSort(array, low, middle);
        mergeSort(array, middle + 1, high);
        merge(array, low, middle, high);
    }
}

function merge(array, low, middle, high) {
    var helper = [];
    for (var i = low; i <= high; i++) {
        helper[i] = array[i];
    }

    var helperLeft = low,
        helperRight = middle + 1,
        current = low;

    while (helperLeft <= middle && helperRight <= high) {

        if (helper[helperLeft] < helper[helperRight]) {
            array[current] = helper[helperLeft];
            helperLeft++;
        } else {
            array[current] = helper[helperRight];
            helperRight++;
        }
        current++;
    }

    // left side remaining, right side values are already there
    var remaining = middle - helperLeft;
    for (var k = 0; k <= remaining; k++) {
        array[current + k] = helper[helperLeft + k];
    }

}

var arr = [3, 10, 5, 8, 2];
console.log(arr);
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
