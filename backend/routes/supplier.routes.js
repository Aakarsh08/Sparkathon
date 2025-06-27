import express from 'express';
import { supplierSignup, supplierLogin } from '../controllers/supplier.controller.js';

const router = express.Router();

// Supplier Auth Routes
router.post('/signup', supplierSignup);
router.post('/login', supplierLogin);

export default router;
