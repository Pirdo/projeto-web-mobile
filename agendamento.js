//npm install express --save
const express = require('express');
const app = express();

//npm install ejs
app.set('view engine', 'ejs');
var path = require('path');
app.set('views', path.join(__dirname, '/view/'));

//Carregamento de arquivos estáticos
app.use(express.static(path.join(__dirname, '/view/')));
app.use(express.static('view'));

app.engine('html', require('ejs').renderFile);

//npm install body-parser
bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//npm install consign
var consign = require('consign');
consign().include('controller/routes').into(app);

(async () => {
  const database = require('./rest/model/services/bd');
  const Consulta = require('./rest/model/entities/consulta');
  const Medico = require('./rest/model/entities/medico');
  const Paciente = require('./rest/model/entities/paciente');

  try {
    const resultado = await database.sync();
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
})();

app.listen(8081, function () {
  console.info('Servidor funcionando');
});
