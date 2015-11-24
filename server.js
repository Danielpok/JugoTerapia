var express = require("express");
var path = require("path");
var process = require("process");
var app = express();


app.use(express.static("www"));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "www/index.html"));
});

var server = app.listen(3000, function () {
  var port = server.address().port;

  console.log("Server listening on port %s", port);
});

process.on("SIGINT", function() {
  console.log("\nClosing server\n");
  process.exit();
});
