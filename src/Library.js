function createLibrary(name) {
  var library = {
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  };

  library.name = name;

  return library;
}

function addBook(library, book) {
  library.shelves[book.genre].push(book);
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  // checkoutBook
};
