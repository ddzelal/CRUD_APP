const express = require("express");
const router = express.Router();

const mongojs = require("mongojs");
const db = mongojs("dzelalovadb", ["accounts"]);

router.post("/", (req, res) => {
  db.accounts.insert(
    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
    },
    (err, data) => {
      res.redirect("/");
    }
  );
});

router.get("/", (req, res) => {
  res.render("add-view");
});

module.exports = router;
