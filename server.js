import express from 'express'
import mongoose from 'mongoose'
import userRouter from "./Routes/user.js"
import productRouter from './Routes/product.js'
import cartRouter from './Routes/cart.js'
import addressRouter from './Routes/address.js'
import bodyParser from 'express'
import cors from 'cors'
import paymentRouter from './Routes/payment.js'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
app.use(bodyParser.json())

app.use(cors({
  origin:true,
  methods:["GET","POST","PUT","DELETE","PATCH"],
  credentials:true
}))
// home route for server testing
app.get('/',(req,res)=>{
  res.json({'message':"Hello Pauras"})
})

//user Router
app.use('/api/user',userRouter)

//product router
app.use('/api/product',productRouter)

//cart router
app.use('/api/cart',cartRouter)

//address router 
app.use('/api/address',addressRouter)

// payment router
app.use('/api/payment',paymentRouter)

const port = 1000;
mongoose.connect(process.env.MONGOOSE_CONNECTION_STRING,{
  dbName:"MernEcommerce"
}).then(()=>{
  console.log("Connected Sucessfully !")
})



app.listen(port,()=>{
  console.log(`Server is on Port number : ${port}`)
})