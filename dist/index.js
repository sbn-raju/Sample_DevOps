"use strict";

var express = require("express");
var app = express();
var PORT = 8567;
app.get("/greet", function (req, res) {
  res.send("Hello from Collasyn");
});
app.listen(PORT, function () {
  console.log("App is running on the port ".concat(PORT));
});