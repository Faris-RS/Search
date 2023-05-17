function linearSearchRecursive(array, size, searchValue) {
  if (size === 0) {
    return -1;
  } else if (array[size - 1] === searchValue) {
    return size - 1;
  } else {
    const result = linearSearchRecursive(array, size - 1, searchValue);
    return result;
  }
}

const array = [5, 15, 6, 9, 4];
const searchValue = 4;
const arraySize = array.length;

const result = linearSearchRecursive(array, arraySize, searchValue);

if (result === -1) {
  console.log(`The element ${searchValue} is not found.`);
} else {
  console.log(
    `The element ${searchValue} is found at ${result} index of the given array.`
  );
}
