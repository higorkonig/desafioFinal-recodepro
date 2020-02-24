const conn = require('../../database/connection');

class ConsultaController {
	index(req, res) {
		conn.query('SELECT * FROM cadastros', (error, result, fields) => {
			res.render('pages/consultas', {
				infos: result
			});
		});
	}

	editar(req, res) {
		conn.query(
			`SELECT * FROM cadastros WHERE id= ${req.params.id}`,
			(error, result, fields) => {
				console.log(result);
				res.render('pages/editar', {
					infos: result,
					data: new Date(result[0].data).toLocaleDateString('pt-br', {
                        month: '2-digit',
                        year: 'numeric',
                        day: '2-digit'
					})
				});
			}
		);
	}

	react(req, res) {
		conn.query('SELECT * FROM cadastros', (error, result, fields) => {
			if (error) console.log(error);

			return res.json(result);
		});
	}
}

module.exports = new ConsultaController();
