const express = require('express');
const bodyParser = require('body-parser')
//const data = require('./samples/csv_report.csv')
var port = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('client'))


app.listen(port, () => {
    console.log(`listening on port ${port}`)
});
exports.app = app;

// create a post method here !!!
app.post('/json_post', (req, res) => {
    console.log(req.body.INPUT)
    res.sendStatus(200).end()
})
//