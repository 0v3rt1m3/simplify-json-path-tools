var express = require("express");
var router = express.Router();
var grokjs = require("grok-js");
// const p =
//   '%{IP:client} \\[%{TIMESTAMP_ISO8601:timestamp}\\] "%{WORD:method} %{URIHOST:site}%{URIPATHPARAM:url}" %{INT:code} %{INT:request} %{INT:response} - %{NUMBER:took} \\[%{DATA:cache}\\] "%{DATA:mtag}" "%{DATA:agent}"';

router.get("/", function (req, res, next) {
  res.send("API is working properly");
  var p =
    '%{IP:client} \\[%{TIMESTAMP_ISO8601:timestamp}\\] "%{WORD:method} %{URIHOST:site}%{URIPATHPARAM:url}" %{INT:code} %{INT:request} %{INT:response} - %{NUMBER:took} \\[%{DATA:cache}\\] "%{DATA:mtag}" "%{DATA:agent}"';
  var str =
    '203.35.135.165 [2016-03-15T12:42:04+11:00] "GET memz.co/cloud/" 304 962 0 - 0.003 [MISS] "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36"';

  var patterns = grokjs.loadDefaultSync();
  var pattern = patterns.createPattern(p);
  console.log(pattern.parseSync(str));
  res.send(pattern.parseSync(str));
});

router.post("/grok", function (req, res, next) {
  console.log("received");
  var data = { status: "loading...." };
  try {
    var p = req.body.pattern;
    var str = req.body.log;
    console.log("Pattern: " + p);
    console.log("Log: " + str);

    var patterns = grokjs.loadDefaultSync();
    var pattern = patterns.createPattern(p);

    data = pattern.parseSync(str);
    console.log(data);
  } catch (e) {
    console.log("invalid pattern");
    var data = { status: "invalid pattern" };
  }
  console.log(data);
  res.json(data);
  //   res.send(pattern.parseSync(str));
});
module.exports = router;
