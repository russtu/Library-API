const mysqlBooksRepository = require('../repositories/mysql/mysqlBooksRepository')

const getBooks = async(req, res) => {
  let books
  try {
    books = await mysqlBooksRepository.getAllBooks()
  } catch (error) {
    res.status(400)
    res.end(error.message)
    return
    
  }
  res.status(200)
  res.send(books[0])
}
module.exports =  getBooks