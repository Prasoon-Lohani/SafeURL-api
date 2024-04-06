const express = require('express');
const router = express();

const checkRoute = require('./checkRoute');
const reportRoute = require('./reportRoute');

router.use('/check',checkRoute);
router.use('/report', reportRoute);

module.exports = router;