const express = require('express');
const router = express.Router();

app.use('/users', rssFeed);
app.use('/promotions', promotion);
app.use('/programs', rssFeed);
app.use('/rssFeed', rssFeed);

module.exports = router;
