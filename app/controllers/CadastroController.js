const conn = require('../../database/connection');

class CadastroController {
	index(req, res) {
		return res.render('pages/cadastro');
	}

	criar(req, res) {
		const { data, hora, medico, paciente, especialidade } = req.body;
		conn.query(
			'INSERT INTO cadastros(data, hora, medico, paciente, especialidade) VALUES (?,?,?,?,?)',
			[data, hora, medico, paciente, especialidade],
			(error, result) => {
				if (error) console.log(error);

				console.log(result);
				return res.redirect('/cadastro');
			}
		);
	}

	update(req, res) {
		const { data, hora, medico, paciente, especialidade } = req.body;
		const { id } = req.params;
		conn.query(
			'UPDATE cadastros SET data = ?, hora = ?, medico = ?, paciente= ?, especialidade= ?  WHERE id= ? ',
			[data, hora, medico, paciente, especialidade, id],
			(error, result) => {
				if (error) console.log(error);

				console.log(result);

				return res.redirect('/consulta');
			}
		);
	}

	apagar(req, res) {
		conn.query(
			'DELETE FROM cadastros WHERE id= ' + Number(req.params.id),
			(error, result) => {
				if (error) console.log(error);

				return res.redirect('/consulta');
			}
		);
	}

	react(req, res) {
		const { data, hora, medico, paciente, especialidade } = req.body;

		conn.query(
			'INSERT INTO cadastros(data, hora, medico, paciente, especialidade) VALUES (?,?,?,?,?)',
			[data, hora, medico, paciente, especialidade],
			(error, result) => {
				if (error) console.log(error);

				return res.json(result);
			}
		);
	}
}

module.exports = new CadastroController();
