const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors');
//Routes
const routes = require('./routes');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParse.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use(routes);

app.listen(8000, () => {
	console.log('Sever ligado!');
});
