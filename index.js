async function fetchData() {
  await fetch("https://jsonplaceholder.typicode.com/posts/#")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const data_length = data.length; /* Task 1.1 */
      const display = document.querySelectorAll(".display");
      display[0].innerText = data_length;
      data = data.filter((obj) => (obj.id == 52 ? false : true));

      const word = JSON.stringify(data).split(/\W+/);
      word_length = word.length; /* Task 1.2 */
      display[1].innerText = `${word_length} words`;

      console.log("After id: 52 delete", data);

      data.push({
        userId: 100,
        id: 101,
        title: "test",
        body: "test_body",
      });

      console.log("After Inserting", data); /* Task 1.3 */
      display[2].innerText = JSON.stringify(data[data.length - 1]);
    });
}
fetchData(); /* Task 1 */