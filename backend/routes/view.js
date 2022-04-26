import { Router } from "express";
const router = Router();
import pg from "pg";
const { Client } = pg;

router.get("/", async (req, res) => {
	const client = new Client();
	let id = req.query.id;
	if (isNaN(id)) {
		res.send("pesquisa inválida");
		return false;
	} else {
		let query = `SELECT * FROM public.vw_usuarios WHERE id = ${id} AND deleted IS NOT TRUE`;
		console.log(query);

		await client
			.connect()
			.then(() => console.log("conectado ao banco"))
			.then(() => client.query(query))
			.then((results) => {
				res.send(results.rows);
			})
			.catch((e) => console.log(e))
			.finally(() => client.end(), console.log("cliente fechado"));
	}
});

export default router;
