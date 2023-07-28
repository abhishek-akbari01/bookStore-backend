const db = require("../entity");
const User = db.users;
const Op = db.Sequelize.Op;

exports.OrdQry = (orderList, newPoint, userId) => {
  let result = User.update(
    {
      orderBooks: orderList,
      points: newPoint,
    },
    { where: { id: userId } }
  );

  if (result) {
    return true;
  } else {
    return false;
  }
};
