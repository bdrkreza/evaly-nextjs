const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
// all middleware
const middleware = [
  //body-parser connect
  express.json({ limit: "30mb", extended: true }),
  express.urlencoded({ limit: "30mb", extended: true }),
  //cors connect
  cors(),
];
app.use(middleware);
//server connect
require("./connect");

//load routes
const userHandler = require("./routes/user.route");
const authHandler = require("./routes/auth.route");
const productHandler = require("./routes/product.route");
const cartHandler = require("./routes/cart.route");
const orderHandler = require("./routes/order.route");
// application routes
app.use("/api/users", userHandler);
app.use("/api/auth", authHandler);
app.use("/api/product", productHandler);
app.use("/api/cart", cartHandler);
app.use("/api/orders", orderHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`api is ready on http://localhost:${PORT}`);
});
