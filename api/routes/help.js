var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  //   var fs = require("fs");
  //   let readmeval = fs.readFile("./README.md", "utf8", function (err, data) {
  //     console.log("READING");
  //     if (err) {
  //       return "#ERROR SENDING";
  //     }
  //     return data;
  //   });
  //   res.send(readmeval);
  res.send("APIISWORKING");
});

module.exports = router;
