class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(name, morning = false) {
    if (morning) {
      return 'Good morning, ' + name + '!'
    } else {
      return 'Hello, ' + name + '!'
    }
  }
}

module.exports = Librarian;
