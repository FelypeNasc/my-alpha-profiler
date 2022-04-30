import { Router } from 'express';
import validateUser from '../middlewares/validate-user.js';
import generateToken from '../modules/generate-token.js';
const router = Router();

router.post('/login', validateUser, (req, res) => {
  try {
    if (!req.user.isAuth) {
      throw new Error(req.user.error);
    }

    const token = generateToken(req.user.data);

    res
      .cookie('token', token, {
        httpOnly: true,
      })
      .send({ isAuthorized: true });
  } catch (error) {
    console.error(error.code);
    res.status(error.code || 400).send({ error: error.message });
  }
});

export default router;
