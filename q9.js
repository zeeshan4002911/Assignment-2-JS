function removeDuplicate(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicate([1, 3, 5, 1, 2, 5, 6, 5, 2, 2, 0])); /* Task 9 */
