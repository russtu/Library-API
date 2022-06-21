const mysqlBooksRepository = require('../repositories/mysql/mysqlBooksRepository')
const booksSchema = require('../validationSchemas/booksSchema')

const postBook = async(req, res) => {
  const bookData = req.body
  const { isbn, title, author, category, publisher, publication_date} = bookData
  let books

  try {
    await booksSchema.validateAsync({ isbn, title, author, category, publisher, publication_date })
  } catch (error) {
    res.status(404)
    res.end(error.message)
    return
  }

  try {
    books = await mysqlBooksRepository.saveABook(bookData)
  } catch (error) {
    res.status(500)
    res.end(error.message)
    return
  }
  res.status(200)
  res.send('Book Save Succesfully')
}

module.exports =  postBook