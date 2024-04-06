const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();

var corsOption = {
  origin: "*",
  methods: "GET,POST",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOption));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  console.log("Path: ", req.path);
  next();
});

const routes = require("./routes/routes");
app.use("/api/v1", routes);

module.exports = app;
