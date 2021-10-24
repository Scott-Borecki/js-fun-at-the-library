function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
}

function unshelfBook(bookTitle, shelf) {
  var index;

  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) { index = i; }
  }

  shelf.splice(index, 1);
}

module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};
