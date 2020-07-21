const express = require("express"); //adds frameWork
const chalk = require("chalk"); //Adds color to debugging
const debug = require("debug")("app"); //Adds Debugging
const morgan = require("morgan"); //HTTP request logger - middleware
var path = require("path"); //The path module provides utilities for working with file and directory paths

const app = express();

app.use(morgan("tiny"));
//app.use(morgan("combined")); //too verbose
app.use(express.static(path.join(__dirname, "views/public/"))); //this makes all the files in this folder accessible to the world
app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
); //sets bootstrap directory for any NPM updates
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
); //sets bootstrap directory for any NPM updates
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/jquery/dist"))
); //sets jquery directory for any NPM updates

app.get("/", (req, res) => {
  //res.send("Hello from my library app");
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.listen(3000, () => {
  debug(`listening on port ${chalk.green(3000)}`);
});
