import express from 'express';
const router = express.Router();

import adminRoutes from './admin.routes.js';
import skuRoutes from './sku.routes.js';
import salesRoutes from './sales.routes.js';
import supplierRoutes from './supplier.routes.js'

router.use('/admin', adminRoutes);
router.use('/sku', skuRoutes);
router.use('/sales', salesRoutes);
router.use('/supplier', supplierRoutes);

export default router;
