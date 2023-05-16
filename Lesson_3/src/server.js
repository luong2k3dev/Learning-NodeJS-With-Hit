const path = require('path');
const express = require('express');
const router = require('./routes/index.route');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/', router);

app.listen(port, () => {
    console.log(`This app listening on http://localhost:${port}`);
});