import { Router } from 'express';
import createUser from '../modules/create-user.js';
import validateInputs from '../middlewares/validate-inputs.js';

router.post('/register', validateInputs, (req, res) => {
	try {
		const response = createUser(req.body.data);

		if (!response.userCreated) {
			throw new Error('oops! something went wrong');
		}

		res.send({ userCreated: true });
	} catch (error) {
		console.error(error);
		res.status(error.code || 400).send({ error: error.message });
	}
});
