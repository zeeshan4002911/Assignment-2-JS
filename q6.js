function frequencyAsteriskCounter(str) {
  str = str.toLowerCase();
  let counter = {};
  for (let i = 0; i < str.length; i++) {
    if (counter.hasOwnProperty(str[i])) {
      counter[str[i]] = counter[str[i]] + 1;
    } else {
      counter[str[i]] = 1;
    }
  }
  let result = "";
  for (let key in counter) {
    result += `${key}:`;
    while (counter[key]--) {
      result += "*";
    }
    result += ",";
  }
  return result.substring(0, result.length - 1);
}

console.log(frequencyAsteriskCounter("Abracadabra")); /* Task 6 */
