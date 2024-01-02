function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books") //returns fetch url
    .then((res) => res.json()) //turns the response to json format
    .then((data) => renderBooks(data)); //the callback function is passed in the data
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});
