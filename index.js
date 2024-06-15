require("dotenv").config();

const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/shubh", (req, res) => {
  res.send("<h2>I am Iron man</h2>");
});

app.get("/login", (req, res) => {
  res.send("<h3>You are logged In</h3>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
