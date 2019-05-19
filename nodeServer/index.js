const express = require('express');

const app = express();

const initList = [
    1,
    2,
    3
]

app.get('/getList', (req, res) => {
    res.send(initList);
})

app.listen(1348, () => {
    console.log('server started in 1348')
})