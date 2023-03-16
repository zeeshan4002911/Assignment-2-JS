function frequencyFinder(str) {
  str = str.toLowerCase();
  let counter = {};
  for (let i = 0; i < str.length; i++) {
    if (counter.hasOwnProperty(str[i])) {
      counter[str[i]] = counter[str[i]] + 1;
    } else {
      counter[str[i]] = 1;
    }
  }
  let result = [];
  for (let key in counter)
    result.push({ character: key, numberOfOccurance: counter[key] });
  return result;
}

result = frequencyFinder("abracadabra"); /* Task 3 */
console.log(result);
