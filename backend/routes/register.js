import { Router, json } from 'express';

const router = Router();
router.use(json());

// modules

// route
router.post('/', (req, res) => {
  res.send('Register Route POST');
});
export default router;
