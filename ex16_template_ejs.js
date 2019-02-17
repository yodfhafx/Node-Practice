const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './public');

app.get('/', (req, res) => {
    res.render('index2', {
        header: 'Ejs Template engine',
        description: 'Learn NodeJS template engine',
        books: ['Harry Porter', 'NodeJS', 'PHP', 'Java', 'SCSS']
    });
});

app.listen(3000, () => {
    console.log('server run at port 3000');
});