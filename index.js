const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.listen(3005, function() {
  console.log("my server is running now");
});
