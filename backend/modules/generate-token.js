import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import pg from 'pg';
const { Client } = pg;
dotenv.config();

const generateToken = async (user) => {
	try {
		const client = new Client();
		await client.connect();

		const jsonwebtoken = jwt.sign(
			{
				email: user.email,
				birthday: user.birthday,
			},
			process.env.JWT_SECRET,
			//FIXME raise the time to expire, 1min is only for testing
			{ expiresIn: 60 * 1 }
		);

		const query = `UPDATE public.users SET token=$1 WHERE id=$2 RETURNING *`;
		const results = await client.query(query, [jsonwebtoken, user.id]);
		console.log(results.rows);

		return jsonwebtoken;
	} catch (error) {
		console.error(error);
		await client.query('ROLLBACK');
	} finally {
		await client.end();
	}
};

export default generateToken;
