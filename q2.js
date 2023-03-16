function distictNumberFinder(arr) {
  return [...new Set(arr)];
}

let result = distictNumberFinder([
  1, 3, 5, 1, 2, 5, 6, 5, 2, 2, 0,
]); /* Task 2 */
console.log(result);
