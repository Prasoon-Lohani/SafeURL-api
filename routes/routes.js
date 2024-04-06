const express = require('express');
const router = express();

const {urlcheck} = require('../controllers/checkController');
const { reportURL } = require("../controllers/reportController");

router.post("/check", urlcheck);
router.post("/report", reportURL);

router.get('/',(req,res)=>{
    res.status(200).send("Hello Developer!!")
});

module.exports = router;