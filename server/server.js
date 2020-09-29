const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const port = 9999;

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {
    console.log("Hello")
});

app.post('/', (req, res) => {
    res.send("Complete");
    console.log(req.body)
});

app.listen(port, err => {
    if (err) throw Error (err);
    console.log(`Server start localhost:${port}`);
})

