// backend/routes/index.js
import express from 'express';
import adminRoutes from './admin.routes.js';

const router = express.Router();

router.use('/admin', adminRoutes);

// Optional: fallback route
// router.all('*', (req, res) => {
//   res.status(404).json({ message: 'Route not found' });
// });

export default router;
