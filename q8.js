function anagramChecker(str1, str2) {
  str1 = str1.toLowerCase().split("").sort().join("");
  str2 = str2.toLowerCase().split("").sort().join("");
  if (str1 == str2) return true;
  return false;
}

console.log(anagramChecker("Mary", "Army")); /* Task 8 */
