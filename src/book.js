function createTitle(title) {
  return 'The ' + title;
}

function buildMainCharacter(name, age, pronouns) {
  var character = {};

  character.name = name;
  character.age = age;
  character.pronouns = pronouns;

  return character;
}

function saveReview(newReview, reviews) {
  if (reviews.includes(newReview)) {
    return;
  } else {
    reviews.push(newReview);
  }
}

function calculatePageCount(bookTitle) {
  var titleLength = bookTitle.length;
  return titleLength * 20;
}

function writeBook(title, mainCharacter, genre) {
  var book = {};

  book.title = title;
  book.mainCharacter = mainCharacter;
  book.genre = genre;
  book.pageCount = calculatePageCount(book.title);

  return book;
}

function editBook(book) {
  book.pageCount = book.pageCount * 3 / 4;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
