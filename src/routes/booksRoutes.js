const router = require('express').Router()

const { getBooks, postBook, putBook, deleteBook, getABook } = require('../controllers')


//GET ONE BOOK

router.get('/:bookId', getABook)

//GET ALL BOOKS

router.get('/', getBooks)

//SAVE A BOOK

router.post('/saveABook', postBook)

//EDIT A BOOK

router.put('/modifyBook/:bookId', putBook)

//DELETE A BOOK

router.delete('/deleteBook/:bookId', deleteBook)


module.exports = router