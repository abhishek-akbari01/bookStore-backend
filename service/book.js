const {
  createBookQry,
  getBookQry,
  getAllBookQry,
  deleteBookQry,
} = require("../repository/book");

exports.createBookData = async (book) => {
  let newBook = await createBookQry(book);

  if (newBook == false) {
    return {
      message: "Failed to create book!",
      success: false,
    };
  }

  return { message: "Book created successfully!", success: true };
};

exports.getBook = async (bookId) => {
  let book = await getBookQry(bookId);
  console.log("=====book", book);

  if (book == false) {
    return {
      message: "Failed to get book!",
      success: false,
    };
  }
  return { message: "Book get successfully!", success: true, book: book };
};

exports.getAllBook = async () => {
  let books = await getAllBookQry();

  if (books == false) {
    return {
      message: "Failed to get all book!",
      success: false,
    };
  }

  return { message: "All book get successfully!", success: true, books: books };
};

exports.deleteBook = async (bookId) => {
  let deletedData = deleteBookQry(bookId);

  if (deletedData == false) {
    return {
      message: "Failed to delete book!",
      success: false,
    };
  }

  return { message: "Book deleted successfully!", success: true };
};
