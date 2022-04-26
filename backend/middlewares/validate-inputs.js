//FIXME use regex here
const validateInputs = (req, res, next) => {
	const regex = /^[0-9]+$/;

	return next();
};

export default validateInputs;
