import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const validateToken = (req, res, next) => {
	const token = req.cookies['token'];

	const decoded = jwt.verify(token, process.env.JWT_SECRET);

	//FIXME test if data structures is wrong
	if (!token || !decoded || req.body.data.email !== decoded.email) {
		throw new Error(
			'the user does not have authorization for this request or the token has expired, please login as an administrator again!'
		);
	}

	req.user = { data: decoded, isAuth: true };
	return next();
};

export default validateToken;
