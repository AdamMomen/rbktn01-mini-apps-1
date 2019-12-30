const express = require('express')
const bodyParser = require('body-parser');

var app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



var port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});