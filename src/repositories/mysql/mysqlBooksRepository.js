const connection = require('./mysqlConnection')

const getAllBooks = async() => {
  const books = await connection.query('SELECT *, DATE_FORMAT(books.publication_date, "%d/%m/%Y") AS publication_date FROM books')
  return books
}

const saveABook = async(bookData) => {
  const { title, isbn, author, category, publication_date, publisher  } = bookData
  const [book] = await connection.query('INSERT INTO books (title, isbn, author, category, publication_date, publisher) VALUES (?, ?, ?, ?, ?, ?)',
  [title, isbn, author, category, publication_date, publisher])
  return(book.insertId)
}

const modifyABook = async(bookData, bookId) => {
  const { title, isbn, author, category, publication_date, publisher, id  } = bookData
  const book = await connection.query('UPDATE books SET title = ?, isbn = ?, author = ?, category = ?, publication_date = ?, publisher = ? WHERE books.id = ?',
  [title, isbn, author, category, publication_date, publisher, bookId])
  return book
}

const removeBook = async(bookId) => {
 
  const bookRemoved = await connection.query('DELETE FROM books WHERE id = ?', [bookId])
  return bookRemoved
}

module.exports = {
  getAllBooks,
  saveABook,
  modifyABook,
  removeBook
}