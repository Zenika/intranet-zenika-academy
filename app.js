const express = require('express');
const promotion = require('./routes/promotion');
const rssFeed = require('./routes/rssFeed');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use('/api/users', promotion);
app.use('/api/programs', promotion);
app.use('/api/promotions', promotion);
app.use('/api/rssFeed', rssFeed);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = err;

    // render the error page
    res.status(err.status || 500);
    res.send(res.locals.message);
});

module.exports = app;
