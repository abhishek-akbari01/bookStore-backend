const { getAllUser } = require("../repository/user");
const { createUser, loginUser, getUser } = require("../service/user");

exports.register = async (req, res) => {
  const data = req.body;

  let result = await createUser(data);

  return res.json(result);
};

exports.login = async (req, res) => {
  const data = req.body;
  console.log("========req", req.body);

  let result = await loginUser(data);

  return res.json(result);
};

exports.getUserList = async (req, res) => {
  let result = await getAllUser();

  return res.json(result);
};

exports.getUserByEmail = async (req, res) => {
  const data = req.body;

  let result = await getUser(data);
  return res.json(result);
};
