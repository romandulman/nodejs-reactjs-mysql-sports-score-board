var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const sqlServer = require("./config/mysql");
var cors = require("cors");
var apiRouter = require("./routes/api");

var app = express();

app.use(cors());
sqlServer.connect();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/api", apiRouter);
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = app;
