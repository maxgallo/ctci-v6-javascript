/*
10
Quick Sort
*/

function quicksort(arr, left, right) {
    var index = partition(arr, left, right);
    if (left < index - 1) {
        quicksort(arr, left, index - 1);
    }
    if (right > index) {
        quicksort(arr, index, right);
    }
}

function partition(arr, left, right) {
    var pivot = arr[Math.floor((left + right) / 2)];

    while (left < right) {
        while (arr[left] < pivot) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }

        if (arr[left] > arr[right]) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }

    return left + 1;
}

function swap(arr, from, to) {
    var temp = arr[to];
    arr[to] = arr[from];
    arr[from] = temp;
}

var arr = [3, 10, 5, 8, 2];
console.log(arr);
quicksort(arr, 0, arr.length - 1);
console.log(arr);
