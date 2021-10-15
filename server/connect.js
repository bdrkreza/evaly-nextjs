const mongoose = require("mongoose");
const DB = `mongodb+srv://${process.env.BD_USER}:${process.env.BD_PASS}@cluster0.9akcg.mongodb.net/${process.env.BD_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection successfully");
  })
  .catch((err) => {
    console.log(err);
  });
