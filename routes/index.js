var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "connectToIndia247" });
});

// route for apply form that will carry the data from list of jobs
router.get("/apply", function (req, res, next) {
  res.render("apply", { title: "connect2India247" });
});

// route for jobs lists from the database

router.get("/jobs", function (req, res, next) {
  res.render("jobs", { title: "connect2India247" });
});

// route for seeing a specific job
module.exports = router;
