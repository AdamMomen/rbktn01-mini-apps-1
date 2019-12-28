const express = require('express');
const $ = require('jquery');

var port = process.env.PORT || 3000;
var app = express();

app.use(express.static('client'))

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});
exports.app = app;