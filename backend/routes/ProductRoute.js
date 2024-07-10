import express from "express";
import { getProducts, getProductById, createProduct, updateProduct } from '../controllers/ProductController.js';

const router = express.Router();

router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);

export default router;