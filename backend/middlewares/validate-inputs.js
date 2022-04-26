import pg from 'pg';
const { Client } = pg;

const validateInputs = async (req, res, next) => {
	const { username, email, password, birthday } = req.body.data;

	const regex = {
		html: /<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/,
		username: /^\w{5,}$/,
		email: /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,4})+$/,
		password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
	};

	if (
		regex.html.test(username) ||
		regex.html.test(email) ||
		regex.html.test(birthday) ||
		!regex.username.test(username) ||
		!regex.email.test(email) ||
		!regex.password.test(password) ||
		birthday.toString().length < 13
	) {
		return next(new Error('invalid inputs'));
	}

	//---QUERY THE DATABASE FOR THE USERNAME (IF EXISTS, THROW AN ERROR)
	const client = new Client();
	await client.connect();

	const query = `SELECT * FROM public.users WHERE username=$1`;
	const results = await client.query(query, [username]);
	console.log(results.rows);

	if (results.rows[0]) {
		return next(new Error('this username already exists!'));
	}

	await client.end();
	//---

	const birthdayISO = new Date(birthday).toISOString().split('T')[0];

	req.user = { username, email, password, birthdayISO };

	return next();
};

export default validateInputs;
