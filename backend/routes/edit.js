import { Router } from "express";
const router = Router();
import pg from "pg";
const { Client } = pg;

// modules

// route
router.put("/", async (req, res) => {
	const client = new Client();
	console.log(req.query);
	try {
		await client.connect();
		const queryInsert = `UPDATE public.users SET password=$1, email=$2, photo=$3 WHERE username=$4; 
		`;
		const values = [
			req.query.password,
			req.query.email,
			req.query.photo,
			req.query.username,
		];

		await client.query(queryInsert, values);
	} catch (error) {
		console.error(error);
		await client.query("ROLLBACK");
	} finally {
		res.send("Dados atualizados");
		await client.end();
	}
});

export default router;
