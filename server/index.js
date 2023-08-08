const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");

const { baseUrl } = require("./constants");
const { Paradoxes } = require("./data/paradoxes");

const app = express();
const port = 3080;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const corsOptions = {
  origin: `${baseUrl.client}`,
  credentials: true,
};

app.get("/", cors(corsOptions), (req, res) => {
  res.send("Welcome to paradoxes server");
});

app.get("/paradoxes", cors(corsOptions), (req, res) => {
  res.send(Paradoxes);
});

app.get("/paradox/:id", cors(corsOptions), (req, res) => {
  const id = req.params.id;
  res.send(Paradoxes[id]);
});

app.post("/posts", cors(corsOptions), (req, res) => {});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
