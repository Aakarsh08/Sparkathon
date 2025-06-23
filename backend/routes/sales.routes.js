import express from 'express';
import { createSale, getAllSales, updateSale, deleteSale } from '../controllers/sales.controller.js';
import fetchAdmin from '../middlewares/fetchAdmin.js';

const router = express.Router();

router.post('/create', fetchAdmin, createSale);
router.get('/getSales', fetchAdmin, getAllSales);
router.put('/edit/:id', fetchAdmin, updateSale);
router.delete('/delete/:id', fetchAdmin, deleteSale);

export default router;
