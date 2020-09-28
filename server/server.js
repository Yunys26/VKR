const express = require('express');

const app = express();

const port = 9999;

app.get('/', (req, res) => {
    console.log("Hello")
})

app.listen(port, err => {
    if (err) throw Error (err);
    console.log(`Server start localhost:${port}`);
})

