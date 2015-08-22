/*
10
Bubble Sort
*/

function bubblesort(arr) {
    var dirty = true;

    while (dirty) {
        dirty = false;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
                dirty = true;
            }
        }
    }
}


function swap(arr, from, to) {
    var temp = arr[from];
    arr[from] = arr[to];
    arr[to] = temp;
}

var arr = [3, 10, 5, 8, 2];
console.log(arr);
bubblesort(arr);
console.log(arr);
