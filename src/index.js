const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
        const app = express();
const port = 30000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

// HTTP logger
// app.use(morgan('combined'));

//Template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
    app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//route init
route(app);

app.listen(port, () => 
    console.log(`Example app listening at http://localhost:${port}`)
);