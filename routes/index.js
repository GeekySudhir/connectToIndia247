var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "connectToIndia247" });
});
router.get("/apply", function (req, res, next) {
  res.render("apply", { title: "connect2India247" });
});

module.exports = router;
