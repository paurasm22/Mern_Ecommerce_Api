import express from 'express'
import { addProduct, deleteProductbyid, getProductbyid, getProducts, updateProductbyid } from '../Controller/product.js';

const router = express.Router();


//add product 
router.post('/add',addProduct)
//get products
router.get('/all',getProducts)
//get product by id
router.get('/:id',getProductbyid)
//update product by id 
router.put('/:id',updateProductbyid)
//delete product
router.delete('/:id',deleteProductbyid)
export default router