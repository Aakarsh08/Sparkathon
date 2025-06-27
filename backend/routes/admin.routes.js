import express from 'express';
import { signup, login } from '../controllers/admin.controller.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);


// temporary route
// router.get('/signup', (req, res) => {
//   res.status(200).json({ message: 'Hello from signup' });
// });
export default router;
