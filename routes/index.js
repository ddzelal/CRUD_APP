const express = require("express");
const router = express.Router();
const mongojs = require("mongojs");
const db = mongojs("dzelalovadb", ["accounts"]);

router.get("/", (req, res) => {
  db.accounts.find((err, data) => {
    res.render("index", { data: data });
  });
});

router.use("/save", require("./save"));
router.use("/add", require("./save"));
router.use("/edit", require("./managementAcc"));
router.use("delete_acc", require("./managementAcc"));
// router.use("/edit_acc/:id", require("./managementAcc"));

module.exports = router;
