import express from 'express'
import { addToCart, clearCart, decreaseProductQty, removeProductFromCart, userCart } from '../Controller/cart.js';
import { Authenticated } from '../Middleware/auth.js'
const router = express.Router()

//add to cart
router.post('/add',Authenticated,addToCart)
//get user cart
router.get('/user',Authenticated,userCart)
//to remove product form cart
router.delete('/remove/:productId',Authenticated,removeProductFromCart)
//to clear cart 
router.delete('/clear',Authenticated,clearCart)
//to decrease qty
router.post('/--qty',Authenticated,decreaseProductQty)
export default router;