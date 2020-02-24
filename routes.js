const { Router } = require('express');

//Controllers
const CadastroController = require('./app/controllers/CadastroController');
const ConsultaController = require('./app/controllers/ConsultaController');
const LoginController = require('./app/controllers/LoginController');

const routes = Router();

routes.get('/', (req, res) => {
    return res.render('pages/login');
});
routes.get('/cadastro', CadastroController.index);
routes.get('/consulta', ConsultaController.index);

routes.get('/editar/:id', ConsultaController.editar);
routes.get('/apagar/:id', CadastroController.apagar);

routes.post('/nova-consulta', CadastroController.criar);
routes.post('/update-consulta/:id', CadastroController.update);
routes.post('/login', LoginController.index);
routes.get('/login', LoginController.page);

//Routes React
routes.post('/criar-consulta', CadastroController.react);
routes.get('/listar-consulta', ConsultaController.react);



module.exports = routes;
