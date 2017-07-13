const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const routes = require('./config/routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/puzzles',routes.puzzles);

app.listen(3000);
console.log('Listening on http://localhost:3000');