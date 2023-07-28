const { createOrd, cancelOrd } = require("../service/order");

exports.createOrder = async (req, res) => {
  const { userId, bookId } = req.body;

  let result = await createOrd(userId, bookId);

  return res.json(result);
};
exports.cancelOrder = async (req, res) => {
  const { userId, bookId } = req.body;

  let result = await cancelOrd(userId, bookId);

  return res.json(result);
};
