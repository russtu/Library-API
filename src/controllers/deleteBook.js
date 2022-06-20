const mysqlBooksRepository = require('../repositories/mysql/mysqlBooksRepository')

const deleteBook = async(req, res) => {
  const { bookId } = req.params
  let book
  try {
    book = await mysqlBooksRepository.removeBook(bookId)
  } catch (error) {
    res.status(500)
    res.end(error.message)
    return
    
  }
  res.status(200)
  res.send('book removed succesfully')
}
module.exports =  deleteBook