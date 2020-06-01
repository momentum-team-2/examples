const books = [
  { title: 'Middlemarch', author: 'George Eliot', read: true },
  { title: 'Song of Solomon', author: 'Toni Morrison', read: true },
  { title: 'To the Lighthouse', author: 'Virgina Woolf', read: false },
  {
    title: 'Oranges Are Not the Only Fruit',
    author: 'Jeanette Winterson',
    read: true
  }
]

// there is a bug in this code.
function createReadingList (bookList) {
  const booksToRead = []
  for (const book of bookList) {
    if (book.read !== true) {
      booksToRead.push(book.title)
    }
    return booksToRead
  }
}

createReadingList(books)
