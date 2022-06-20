const mysqlBooksRepository = require('../repositories/mysql/mysqlBooksRepository')

const putBook = async(req, res) => {
  const { bookId } = req.params
  const bookData = req.body
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

module.exports =  putBook