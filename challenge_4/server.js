const express = require('express');

var app = express()
app.use(express.static('client/dist'));
var port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`))
