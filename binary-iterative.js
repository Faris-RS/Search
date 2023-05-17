function binarySearch(arr, element) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === element) {
      return middle;
    } else if (arr[middle] < element) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}

const test = binarySearch([2, 3, 6, 8, 10], 6);

if (test === -1) {
  console.log("Element is not present in array");
} else {
  console.log("Element is present at index " + test);
}
