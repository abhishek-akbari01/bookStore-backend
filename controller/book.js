const {
  createBookData,
  getBook,
  getAllBook,
  deleteBook,
} = require("../service/book");

exports.createBook = async (req, res) => {
  const data = req.body;

  let result = await createBookData(data);

  return res.json(result);
};
exports.getBookById = async (req, res) => {
  const id = req.body.id;

  let result = await getBook(id);

  return res.json(result);
};
exports.getAllBooks = async (req, res) => {
  let result = await getAllBook();

  return res.json(result);
};
exports.deleteBookById = async (req, res) => {
  const id = req.body.id;
  let result = await deleteBook(id);

  return res.json(result);
};
