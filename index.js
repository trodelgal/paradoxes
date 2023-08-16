require("dotenv").config();
const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");

const { baseUrl } = require("./constants");
const { Paradoxes } = require("./data/paradoxes");
const path = require("path");

const app = express();
const port = process.env.port || 3080;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/welcome", (req, res) => {
  res.send("Welcome to paradoxes server");
});

app.get("/paradoxes", (req, res) => {
  res.send(Paradoxes);
});

app.get("/paradoxById/:id", (req, res) => {
  const id = req.params.id;
  res.send(Paradoxes[id - 1]);
});

app.post("/posts", (req, res) => {});
app.use(express.static("./client/build"));

//conect client
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
