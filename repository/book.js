const db = require("../entity");
const Book = db.books;
const Op = db.Sequelize.Op;

exports.createBookQry = async (book) => {
  await Book.create(book)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return false;
    });
};

exports.getBookQry = async (bookId) => {
  let book = await Book.findOne({ where: { id: bookId } });

  if (book) {
    return book;
  } else {
    return false;
  }
};

exports.getAllBookQry = async () => {
  let books = await Book.findAll();

  if (books) {
    return books;
  } else {
    return false;
  }
};

exports.deleteBookQry = async (bookId) => {
  let deleteData = await Book.destroy({ where: { id: bookId } });

  if (deleteData) {
    return true;
  } else {
    return false;
  }
};
