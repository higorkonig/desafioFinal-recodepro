const conn = require('../../database/connection');

class LoginController {
	page(req, res) {
		return res.render('pages/login');
	}

	index(req, res) {
		//1 - paciente
		//2 - médico
		//3 - gestor

		const { email, senha } = req.body;

		conn.query(
			'SELECT * FROM users WHERE email = (?)',
			[email],
			(error, result, fields) => {
				if (error) console.log(error);

				if (result[0] != undefined) {
					if (result[0].senha == senha) {
						if (result[0].tipo == 1) {
							return res.redirect('/consulta');
						} else {
							return res.redirect('/cadastro');
						}
					} else {
						return res.redirect('/');
					}
				} else {
					return res.redirect('/');
				}
			}
		);
	}
}

module.exports = new LoginController();
