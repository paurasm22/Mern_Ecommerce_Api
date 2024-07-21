import express from 'express'
import {allOrders, checkout,userOrder,verify} from '../Controller/payment.js'
import { Authenticated } from '../Middleware/auth.js'
const router = express.Router()


// initiate payment
router.post('/checkout',checkout)

// verify payment and save to db
router.post('/verify-payment',verify)

// user order

router.get('/userorder',Authenticated,userOrder)

// get all orders (for admin)
router.get('/allorders',allOrders)

export default router;