const mongoose = require("mongoose");

const connectionString = process.env.MONGO_URI;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Database connection successfully established");
  })
  .catch((err) => console.log(err));
