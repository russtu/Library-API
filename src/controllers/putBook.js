const mysqlBooksRepository = require('../repositories/mysql/mysqlBooksRepository')
const booksSchema = require('../validationSchemas/booksSchema')

const putBook = async (req, res) => {
  const { bookId } = req.params
  const bookData = req.body
  const { isbn, title, author, category, publisher, publication_date } = bookData

  try {
    await booksSchema.validateAsync({ isbn, title, author, category, publisher, publication_date })
  } catch (error) {
    res.status(404)
    res.end(error.message)
    return
  }

  let books
  try {
    books = await mysqlBooksRepository.modifyABook(bookData, bookId)
  } catch (error) {
    res.status(500)
    res.end(error.message)
    return
  }

  res.status(200)
  res.send('Book modify Succesfully')
}

module.exports = putBook