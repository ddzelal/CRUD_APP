const express = require("express");
const router = express.Router();

const mongojs = require("mongojs");
const db = mongojs("dzelalovadb", ["accounts"]);

router.get("/", (req, res) => {
  db.accounts.find((err, data) => {
    res.render("edit-view", { data: data });
  });
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  db.accounts.findOne({ _id: db.ObjectId(id) }, (err, data) => {
    res.render("edit-form-view", { data: data });
  });
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  db.accounts.remove({ _id: db.ObjectId(id) }, (err, data) => {
    res.redirect("/");
  });
  console.log(id);
});

module.exports = router;
