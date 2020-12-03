const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

//Enable CORS
app.use("*", function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header(
        'Access-Control-Allow-Headers',
        'access-control-request-headers'
    );
    next();
});

// divert all other routing to react app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

module.exports = app;