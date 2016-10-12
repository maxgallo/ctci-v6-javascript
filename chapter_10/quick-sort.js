/*
10
Quick Sort
*/

function quickSort(arr, left, right){
  var index = partition(arr, left, right);    
  
  if(left < index - 1){
    quickSort(arr, left, index - 1);
  }
  
  if(right > index){
    quickSort(arr, index + 1, right); 
  }

}



function partition(arr, left, right){
    var pivot = arr[parseInt((left + right)/2)];

    while(left < right){
      while(arr[left] < pivot){
        left++;  
      }
      while(arr[right] > pivot){
        right--;  
      }
      if(arr[left] >= arr[right]){
        swap(arr, left, right);
        left++;
        right--;
      }
    }
  
    return left;
}

function swap(arr, i, j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


var arr = [3, 10, 5, 8, 2];
console.log(arr);
quicksort(arr, 0, arr.length - 1);
console.log(arr);
