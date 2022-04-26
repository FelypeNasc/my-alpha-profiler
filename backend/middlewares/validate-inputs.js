const validateInputs = (req, res, next) => {
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

	const birthdayISO = new Date(birthday).toISOString().split('T')[0];

	req.user = { username, email, password, birthdayISO };

	return next();
};

export default validateInputs;
