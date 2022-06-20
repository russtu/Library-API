const mysqlBooksRepository = require('../repositories/mysql/mysqlBooksRepository')

const postBook = async(req, res) => {
  const bookData = req.body
  let books
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