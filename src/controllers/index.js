const getBooks = require('./getBooks')
const postBook = require('./postBook')
const putBook = require('./putBook')
const deleteBook = require('./deleteBook')
const getABook = require('./getABook')

module.exports = {
  getBooks,
  getABook,
  postBook,
  putBook,
  deleteBook
}