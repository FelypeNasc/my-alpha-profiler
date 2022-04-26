import bcrypt from 'bcrypt';
import pg from 'pg';
const { Client } = pg;
const saltRounds = 12;

const validateUser = async (req, res, next) => {
	try {
		if (!req.body.data || !req.body.data.email || !req.body.data.password) {
			throw new Error('the inputs provided are not valid!');
		}

		const client = new Client();
		await client.connect();

		const query = `SELECT * FROM public.users WHERE email=$1`;
		const results = await client.query(query, [req.body.data.email]);
		console.log(results.rows);

		const user = results.rows[0];

		if (!user) {
			throw new Error('the user is not registered!');
		}

		const match = await bcrypt.compare(req.body.data.password, user.password);

		if (!match) {
			throw new Error('wrong password!');
		}

		req.user = { data: user, isAuth: true };
		return next();
	} catch (error) {
		console.error(error);
		return next(error);
	} finally {
		await client.end();
	}
};

export default validateUser;
