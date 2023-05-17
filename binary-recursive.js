function recursiveBinarySearch(arr, start, end, element) {
    if (end >= start) {
      const middle = start + Math.floor((end - start) / 2);
      if (arr[middle] === element) {
        return middle;
      }
      if (arr[middle] > element) {
        return recursiveBinarySearch(arr, start, middle - 1, element);
      }
      return recursiveBinarySearch(arr, middle + 1, end, element);
    }
    return -1;
  }
  
  const arr = [1, 2, 3, 4, 5];
  const test = recursiveBinarySearch(arr, 0, arr.length - 1, 5);
  
  if (test === -1) {
    console.log("Element is not present in array");
  } else {
    console.log("Element is present at index " + test);
  }
  