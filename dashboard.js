var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.send("hi fi");
});

module.exports = router;
