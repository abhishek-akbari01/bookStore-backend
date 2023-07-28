const { createUserQry, findUser } = require("../repository/user");

exports.createUser = async (data) => {
  let user = {
    name: data.name,
    email: data.email,
    password: data.password,
    points: 100,
    orderBooks: [],
  };

  let existsingUser = await findUser(user);

  if (existsingUser) {
    return {
      message: "User already exists!",
      success: false,
    };
  }

  let newUser = await createUserQry(user);

  if (newUser == false) {
    return {
      message: "Failed to create user!",
      success: false,
    };
  }

  return { message: "User register successfully!", success: true };
};

exports.loginUser = async (data) => {
  let user = await findUser(data);

  if (!user) {
    return {
      message: "User does not exists!",
      success: false,
    };
  }

  if (user.password !== data.password) {
    return {
      message: "Password is incorrect!",
      success: false,
    };
  }

  return {
    message: "Login successfully!",
    success: true,
    user: user,
  };
};

exports.getUser = async (data) => {
  let user = await findUser(data);

  console.log("====user", user);

  if (!user) {
    return {
      message: "User does not exists!",
      success: false,
    };
  }

  return {
    message: "User get successfully!",
    success: true,
    user: user,
  };
};
