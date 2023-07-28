const user = require("../controller/user");

var router = require("express").Router();

router.post("/register", user.register);
router.get("/allUsers", user.getUserList);
router.post("/loginUser", user.login);
router.post("/getUser", user.getUserByEmail);

module.exports = router;
