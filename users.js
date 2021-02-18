var express = require("express");
var router = express.Router();

/* GET users listing. */
router.post("/", function (req, res, next) {
  //create each individual cosnt for POST data coming from the web app 
  //capture it and store them in const's
  const name = req.body.name;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const checkBox = req.body.checkBox;
  //check if the POST data has been interpreted correctly and log them to the console 
  console.log(
    name + " " + lastName + " " + email + " " + password + " " + checkBox
  );
  res.send(`${1}`);
});

module.exports = router;
