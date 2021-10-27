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

function checkoutBook(library, bookTitle, genre) {
  var index;

  for (var i = 0; i < library.shelves[genre].length; i++) {
    if (library.shelves[genre][i].title === bookTitle) {
      index = i;

      library.shelves[genre].splice(index, 1);

      return 'You have now checked out ' + bookTitle + ' from the ' + library.name;
    }
  }

  return 'Sorry, there are currently no copies of ' + bookTitle + ' available at the ' + library.name;
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
