const { getBookQry } = require("../repository/book");
const { OrdQry } = require("../repository/order");
const { findUserById } = require("../repository/user");

exports.createOrd = async (userId, bookId) => {
  let book = await getBookQry(bookId);

  if (book == false) {
    return {
      message: "Book not exists",
      success: false,
    };
  }

  let userData = await findUserById(userId);

  if (userData == false) {
    return {
      message: "User not exists",
      success: false,
    };
  }

  let orders = userData.orderBooks;

  let newPoint = userData.points - book.points;

  orders.push(JSON.parse(JSON.stringify(book)));

  let updateOrder = OrdQry(orders, newPoint, userData.id);

  if (updateOrder == false) {
    return {
      message: "Failed to create order",
      success: false,
    };
  }

  return {
    message: "Order created successfully!",
    success: true,
  };
};

exports.cancelOrd = async (userId, bookId) => {
  let userData = await findUserById(userId);

  if (userData == false) {
    return {
      message: "User not exists",
      success: false,
    };
  }

  let orders = userData.orderBooks;

  let cancelBook = orders.find((d) => d.id == bookId);

  let newPoint = userData.points + cancelBook.points;

  let newOrders = orders.filter((d) => d.id != bookId);

  let updateOrder = OrdQry(newOrders, newPoint, userData.id);

  if (updateOrder == false) {
    return {
      message: "Failed to cancel order",
      success: false,
    };
  }

  return {
    message: "Order cancel successfully!",
    success: true,
  };
};
