import express from 'express';
import { createSKU , getAllSKUs , deleteSKU , updateSKU } from '../controllers/sku.controller.js';
import fetchAdmin from '../middlewares/fetchAdmin.js'; // assuming you use a middleware to protect admin routes

const router = express.Router();

router.post('/create', fetchAdmin, createSKU);
router.get('/getSKUs', fetchAdmin, getAllSKUs); 
router.delete('/delete/:id', fetchAdmin, deleteSKU);
router.put('/edit/:id', fetchAdmin, updateSKU);

export default router;
