//npm install express --save
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
const path = require('path');
app.set('views', path.join(__dirname, '/view/'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const consign = require('consign');
consign().include('rest/controller/routes').into(app);

app.listen(8081, function () {
  console.info('API funcionando');
});
