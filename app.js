const express = require("express");
const app = express();

require("dotenv").config();
require("./db/connect");

const tasks = require("./routes/tasks");

// middleware
app.use(express.static("./public"));
app.use(express.json());

// Routes
app.get("/hello", (req, res) => {
  res.send("Task manager app");
});

app.use("/api/v1/tasks", tasks);

const HOST = "0.0.0.0";
const PORT = process.env.PORT || 3000;

app.listen(PORT, HOST, console.log(`server is running on port ${PORT}`));
