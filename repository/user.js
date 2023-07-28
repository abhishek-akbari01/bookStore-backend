const db = require("../entity");
const User = db.users;
const Op = db.Sequelize.Op;

exports.createUserQry = async (user) => {
  User.create(user)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log("err - ", err);
      return false;
    });
};

exports.findUser = async (user) => {
  let existsUser = User.findOne({ where: { email: user.email } });

  if (existsUser) {
    return existsUser;
  } else {
    return false;
  }
};

exports.findUserById = async (userId) => {
  let user = User.findOne({ where: { id: userId } });

  if (user) {
    return user;
  } else {
    return false;
  }
};

exports.getAllUser = async () => {
  let users = User.findAll();

  if (users) {
    return users;
  } else {
    return false;
  }
};
