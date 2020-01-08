const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = app.listen(3000, () => console.log('server is running on port', server.address().port));
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');

require('./config/routes.js')(app);