let studentRecords = [
  { name: "John", id: 123, marks: 98 },
  { name: "Baba", id: 101, marks: 23 },
  { name: "John", id: 200, marks: 45 },
  { name: "Wick", id: 115, marks: 75 },
];

function marksCalculator(arrObj) {
  let sum = 0;
  arrObj.forEach((obj) => {
    if (obj.marks > 50) sum += obj.marks;
    else {
      const graceful_marks = obj.marks + 15;
      if (graceful_marks > 50) sum += graceful_marks;
    }
  });
  return sum;
}

console.log(marksCalculator(studentRecords)); /* Task 5 */
