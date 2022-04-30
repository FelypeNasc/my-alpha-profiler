import { Router } from "express";
const router = Router();
import pg from "pg";
const { Client } = pg;

// modules

// route
router.delete("/", async (req, res) => {
	console.log("delete initiated");
	async function deleteUser(user) {
		const client = new Client();
		try {
			let query =
				"UPDATE public.users SET deleted = true WHERE username=$1";
			await client.connect();
			console.log("conectado ao banco");
			await client.query(query, [user]);
			console.log(user);
			await client.end();
			return "end-conection";
		} catch (e) {
			await client.query("ROLLBACK");
			console.log("erro:", e);
		} finally {
			await client.end();
			console.log("Fim da conexão");
		}
	}
	res.send(await deleteUser(req.query.user));
});
export default router;