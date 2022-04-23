import { Router, json } from 'express';

const router = Router();
router.use(json());

// modules

// route
router.delete('/', (req, res) => {
  res.send('Delete Route POST');
});
export default router;
