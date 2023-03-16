function strConcatenator(str1, str2) {
  let j = str1.length - 1;
  let str = "";
  for (let i = str2.length - 1; i >= 0; i--) {
    if (str1[j] === str2[i]) {
      j--;
      str += str2[i];
    }
  }
  const common_str = str.split("").reverse().join("");
  return str1.split(common_str)[0] + str2;
}

console.log(strConcatenator("abcdeaa13hj", "13hjiopsjakk")); /* Task 4 */
