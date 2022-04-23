import { Router, json } from 'express';

const router = Router();
router.use(json());

// modules

// route
router.get('/', (req, res) => {
  res.send('Auth Route POST');
});
export default router;
