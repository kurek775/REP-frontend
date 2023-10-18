const express = require("express");
const cors = require("cors");
const path = require("path");
const createScripts = require("./createScripts.js");
const inserScripts = require("./insertScripts.js");
const userController = require("./controllers/userController.js");
const usersController = require("./controllers/usersController.js");
const app = express();
app.use(cors());
const { Client } = require("pg");
require("dotenv").config();
const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "docker",
  database: "mydb",
});

client.query(createScripts.CreateTableUsers, function (err, result) {
  if (err) throw err;
  console.log(result.rows);
});

app.get("/api/user/:id", function (req, res) {
  userController.get(req, res, client);
});

app.post("/api/user/:id", userController.post);

app.put("/api/user/:id", userController.put);

app.delete("/api/user/:id", userController.delete);

app.get("/api/users/:role", usersController.get);

const port = process.env.PORT || 8080;
client.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
});
