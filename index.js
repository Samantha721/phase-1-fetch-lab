// function fetchBooks() {
//   // To pass the tests, don't forget to return your fetch!
//   fetch("https://anapioficeandfire.com/api/books")
//     .then((res) => res.json())
//     .then((data) => renderBooks(data));
// }

// function renderBooks(books) {
//   const main = document.querySelector("main");
//   books.forEach((book) => {
//     const h2 = document.createElement("h2");
//     h2.innerHTML = book.name;
//     main.appendChild(h2);
//   });
// }

function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books");
  return fetch("https://anapioficeandfire.com/api/books")
    .then((res) => res.json())
    .then((data) => renderBooks(data));
}

function renderBooks(datas) {
  const main = document.querySelector("main");
  datas.forEach((data) => {
    const h2 = document.createElement("h2");
    h2.textContent = data.name;
    main.appendChild(h2);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  fetchBooks();
});
