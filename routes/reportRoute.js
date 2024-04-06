const express = require("express");
const router = express.Router();

const { reportURL } = require("../controllers/reportController");

router.post("/", reportURL);

module.exports = router;
