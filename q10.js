function largestWord(str) {
  let arr = str.split(" ");
  let max = arr[0].length;
  let result = arr[0];
  for (let ele of arr) {
    if (ele.length >= max) {
      max = ele.length;
      result = ele;
    }
  }
  return result;
}

console.log(
  largestWord("The greatest victory is that which requires no battle")
);
