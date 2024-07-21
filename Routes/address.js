import express from 'express'
import { addAddress, getAddress } from '../Controller/address.js';
import { Authenticated } from '../Middleware/Auth.js';
const router = express.Router()


//add address
router.post('/add',Authenticated,addAddress)

//get address
router.get('/get',Authenticated,getAddress)
export default router ;