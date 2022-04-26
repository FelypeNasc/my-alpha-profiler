import { Router } from "express";
const router = Router();
import pg from "pg";
const { Client } = pg;

router.get("/", async (req, res) => {
	const client = new Client();
	let query;
	let conexao = false;
	let table = req.query.table;
	let id = req.query.id;
	console.log(table, id);
	switch (table) {
		case "id":
			if (isNaN(id) || id < 1) {
				res.send("pesquisa inválida");
				return false;
			}
			conexao = true;
			query = `SELECT * FROM public.vw_usuarios WHERE ${table} = ${id} AND deleted IS NOT TRUE`;
			break;
		case "username":
			conexao = true;
			query = `SELECT * FROM public.vw_usuarios WHERE ${table} = '${id}' AND deleted IS NOT TRUE`;
			break;
		case "email":
			conexao = true;
			query = `SELECT * FROM public.vw_usuarios WHERE ${table} = '${id}' AND deleted IS NOT TRUE`;
			break;
		default:
			conexao = false;
	}

	if (conexao) {
		await client
			.connect()
			.then(() => console.log("conectado ao banco"))
			.then(() => client.query(query))
			.then((results) => {
				res.send(results.rows);
			})
			.catch((e) => console.log(e))
			.finally(() => client.end(), console.log("cliente fechado"));
	} else {
		res.send("pesquisa inválida");
		return false;
	}
});

export default router;
