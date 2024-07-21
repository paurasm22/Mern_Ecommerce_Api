import { Products } from "../Models/product.js";

//add product 
export const addProduct=async(req,res)=>{
  const {title,description,price,category,qty,imgsrc,createdAt} = req.body

  try {
    let product = await Products.create({title,description,price,category,qty,imgsrc,createdAt})
    res.json({message:"Product added Sucessfully ",product})
  } catch (error) {
    res.json(error.message)
  }
}

//get products 

export const getProducts = async(req,res)=>{
  
  try {
    let products = await Products.find().sort({createdAt:-1})
    res.json({message:"All Products",products})
  } catch (error) {
    res.json(error)
  }
}

//get product by ID

export const getProductbyid = async(req,res)=>{
  const id = req.params.id
  try {
    let product = await Products.findById(id)
    if (!product) return res.json({message:"Invalid Id"})
    res.json({message:"specific Product",product})
  } catch (error) {
    res.json(error)
  }
}

//update product by id 

export const updateProductbyid = async(req,res)=>{
  const id = req.params.id
  try {
    let product = await Products.findByIdAndUpdate(id,req.body,{new:true})
    if (!product) return res.json({message:"Invalid Id"})
    res.json({message:" Product has been updated ! ",product})
  } catch (error) {
    res.json(error)
  }
}

//delete product 
export const deleteProductbyid = async(req,res)=>{
  const id = req.params.id
  try {
    let product = await Products.findByIdAndDelete(id)
    if (!product) return res.json({message:"Invalid Id"})
    res.json({message:" Product has been deleted ! ",product})
  } catch (error) {
    res.json(error)
  }
}