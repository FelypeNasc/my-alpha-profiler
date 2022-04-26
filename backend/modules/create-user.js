import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import pg from 'pg';
const { Client } = pg;
const saltRounds = 12;
dotenv.config();

const createUser = async (data) => {
	try {
		const client = new Client();
		await client.connect();

		const querySelect = `SELECT * FROM public.users WHERE email=$1`;
		const resultsSelect = await client.query(querySelect, [data.email]);
		console.log(resultsSelect.rows);

		const user = results.rows[0];

		if (user) {
			return { userCreated: false };
		}

		const hash = bcrypt.hashSync(req.body.password, saltRounds);

		const jsonwebtoken = jwt.sign(
			{
				email: req.body.email,
				birthday: req.body.birthday,
			},
			process.env.JWT_SECRET,
			//FIXME raise the time to expire, 1min is only for testing
			{ expiresIn: 60 * 1 }
		);

		const queryInsert = `INSERT INTO public.users (email, password, fullName, birthday, picture, token, deletada, data_criacao) VALUES ($1, $2, $3, $4, $5, $6, false, current_timestamp)`;
		const values = [
			req.body.email,
			hash,
			req.body.fullName,
			req.body.birthday,
			req.body.picture,
			jsonwebtoken,
		];

		const resultsInsert = await client.query(queryInsert, values);
		console.log(resultsInsert.rows);

		return { data: user, userCreated: true };
	} catch (error) {
		console.error(error);
		await client.query('ROLLBACK');
	} finally {
		await client.end();
	}
};

export default createUser;
