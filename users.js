var express = require("express");
var router = express.Router();

/* GET users listing. */
router.post("/", function (req, res, next) {
  const name = req.body.name;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const checkBox = req.body.checkBox;
  console.log(
    name + " " + lastName + " " + email + " " + password + " " + checkBox
  );
  res.send(`${1}`);
});

module.exports = router;
