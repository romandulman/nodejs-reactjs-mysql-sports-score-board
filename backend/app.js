const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const apiRouter = require("./routes/api.routes");
const db = require('./models').sequelize;
const helmet = require('helmet');
const app = express();

app.use(cors());

// Security
app.use(helmet());

//app.disable('x-powered-by');

// Sequalize connection
db.authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/api", apiRouter);
app.get("/*", (req, res) =>{
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = app;
