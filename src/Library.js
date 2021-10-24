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

module.exports = {
  createLibrary,
  // addBook,
  // checkoutBook
};
