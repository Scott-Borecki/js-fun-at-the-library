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

function listTitles(shelf) {
  var list;

  for (var i = 0; i < shelf.length; i++) {
    if (!list) {
      list = shelf[i].title;
    } else {
      list = list + ', ' + shelf[i].title;
    }
  }

  return list;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  // searchShelf
};
