import { Router } from 'express';
import createUser from '../modules/create-user.js';
import validateInputs from '../middlewares/validate-inputs.js';
const router = Router();

router.post('/', validateInputs, (req, res) => {
  try {
    const response = createUser(req.user);

    if (!response.userCreated) {
      throw new Error('oops! something went wrong');
    }

    res.send({ userCreated: true });
  } catch (error) {
    console.error(error);
    res.status(error.code || 400).send({ error: error.message });
  }
});

export default router;
