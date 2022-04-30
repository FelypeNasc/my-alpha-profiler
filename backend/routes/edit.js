import { Router } from "express";
const router = Router();
import pg from "pg";
const { Client } = pg;

// modules
/* 		const queryInsert = `UPDATE public.users SET password=$1, email=$2, photo=$3 WHERE username=$4; 
		`; */
// route

router.put("/", async (req, res) => {
	const client = new Client();
	console.log(req.body);
	let queryUser = req.body.username;
	let queryEmail = req.body.email;
	let queryPass = req.body.password;
	let queryPhoto = req.body.photo;
	/* 	const queryInsert = `UPDATE public.users SET ${queryPass} ${queryEmail} ${queryPhoto} WHERE ${queryUser};`;
	 */
	//res.send("ok");

	try {
		await client.connect();
		const queryInsert = `UPDATE public.users SET password=$1, email=$2, photo=$3 WHERE username=$4;`;

		const values = [queryPass, queryEmail, queryPhoto, queryUser];
		await client.query(queryInsert, values);
	} catch (error) {
		console.error(error);
		await client.query("ROLLBACK");
		res.send("Problemas ocorreram, Rollback realizado");
	} finally {
		res.send("Dados atualizados");
		await client.end();
	}
});

export default router;
