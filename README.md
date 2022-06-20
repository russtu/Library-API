# Library api

-  Se trata de una api de librería donde se pueden añadir , borrar , consultar o modificar libros.
-  It is a library api where you can add, delete, consult or modify books.

## Endpoints

-   GET - [/books] - Retorna el listado de libros. / Return the list of books ✅
-   GET - [/books/:bookId] - Retorna un libro según su id. / Returns a book according to its id. ✅
-   POST - [/books/saveABook] - Añade un libro. / Add a book. ✅
-   PUT - [/books/modifyBook/:bookId] - Modifica un libro. / Edit a book. ✅
-   DELETE - [/books/deleteBook/:bookId] - Borra una libro. / Delete a book. ✅


-GET - [/books] Example:

  return list of book like this:

    [
    {
        "id": 5,
        "isbn": "9788499921181",
        "title": "STEVE JOBS: LA BIOGRAFIA",
        "author": "Walter Isaacson",
        "category": "Biography",
        "publisher": "DEBATE",
        "publication_date": "28/10/2011"
    },

    {
        "id": 12,
        "isbn": "9788415140207",
        "title": "El clan del oso cavernario",
        "author": "Jeam M. Auel",
        "category": "Fictional",
        "publisher": "Maeva ",
        "publication_date": "04/05/1980"
    }
]

-GET - [/books/:bookId] - Retorna un libro según su id. / Returns a book according to its id.

  You just have to send ,in the url, the id of the book you want to delete.

  Output example:
  
  {
        "id": 12,
        "isbn": "9788415140207",
        "title": "El clan del oso cavernario",
        "author": "Jeam M. Auel",
        "category": "Fictional",
        "publisher": "Maeva ",
        "publication_date": "04/05/1980"
    }


-POST - [/books/saveABook] - Añade un libro. / Add a book. Example:

  You have to send this JSON format :

    {
        "isbn": "9788415140207",
        "title": "el clan del oso cavernario",
        "author": "Jeam M. Auel",
        "category": "Fictional",
        "publisher": "Maeva ",
        "publication_date": "1980-05-04"  // the date has to be sent in this format: "YYYY-MM-DD"
    }

-PUT - [/books/modifyBook/:bookId] - Modifica un libro. / Edit a book. Example:

  You just have to send ,in the url, the id of the book that you want to modify.
  You have to send this JSON format modifying what you want :

    {
        "isbn": "9788415140207",
        "title": "el clan del oso cavernario",
        "author": "Jeam M. Auel",
        "category": "Fictional",
        "publisher": "Maeva ",
        "publication_date": "1980-05-04"  // the date has to be sent in this format: "YYYY-MM-DD"
    }

-DELETE - [/books/deleteBook/:bookId] - Borra una libro. / Delete a book.

  You just have to send ,in the url, the id of the book you want to delete.
