import { Router } from 'express';
import { addProduct, generateInvoice } from '../controllers/productController';

const router = Router();

router.post('/add', addProduct);
router.post('/generate', generateInvoice);

export default router;
