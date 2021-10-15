const express = require("express");
const app = express();
require("dotenv").config();
// all middleware
const middleware = [
  //body-parser connect
  express.json({ limit: "30mb", extended: true }),
  express.urlencoded({ limit: "30mb", extended: true }),
  //cors connect

  // passport middleware used
];
app.use(middleware);
//server connect
require("./connect");

//load routes
const userHandler = require("./routes/user.route");
const authHandler = require("./routes/auth.route");
const productHandler = require("./routes/product.route");
// application routes
app.use("/api/users", userHandler);
app.use("/api/auth", authHandler);
app.use("/api/product", productHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`api is ready on http://localhost:${PORT}`);
});
