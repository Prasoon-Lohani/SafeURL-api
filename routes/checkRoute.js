const express = require("express")
const router = express.Router();

const {urlcheck} = require('../controllers/checkController');

router.post("/check", urlcheck);

module.exports = router;