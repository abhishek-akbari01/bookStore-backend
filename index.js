const express = require("express");
const cors = require("cors");
const app = express();

const port = 3005;

const userRoutes = require("./routes/user");
const bookRoutes = require("./routes/book");
const orderRoutes = require("./routes/order");

app.use(cors());
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoutes);
app.use("/api/book", bookRoutes);
app.use("/api/order", orderRoutes);

const db = require("./entity");
db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
