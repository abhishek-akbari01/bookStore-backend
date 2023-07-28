const order = require("../controller/order");

var router = require("express").Router();

router.post("/createOrd", order.createOrder);
router.post("/cancelOrd", order.cancelOrder);

module.exports = router;
