class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(name, morning = false) {
    if (morning) {
      return 'Good morning, ' + name + '!';
    } else {
      return 'Hello, ' + name + '!';
    }
  }

  findBook(bookTitle) {
    var fantasyShelf, fictionShelf, nonFictionShelf, shelves;

    fantasyShelf = this.library.shelves.fantasy;
    fictionShelf = this.library.shelves.fiction;
    nonFictionShelf = this.library.shelves.nonFiction;
    shelves = [fantasyShelf, fictionShelf, nonFictionShelf];

    for (var i = 0; i < shelves.length; i++) {
      for (var ii = 0; ii < shelves[i].length; ii++) {
        if (shelves[i][ii].title === bookTitle) {
          return 'Yes, we have ' + bookTitle;
        }
      }
    }

    return 'Sorry, we do not have ' + bookTitle;
  }
}

module.exports = Librarian;
