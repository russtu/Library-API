const mysqlBooksRepository = require('../repositories/mysql/mysqlBooksRepository')

const getABook = async(req, res) => {
  const { bookId } = req.params

  let book
  try {
    book = await mysqlBooksRepository.getOneBook(bookId)
  } catch (error) {
    res.status(500)
    res.end(error.message)
    return
  }
  res.status(200)
  res.send(book)
}
module.exports =  getABook