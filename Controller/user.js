import { User } from "../Models/user.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
//register user
export const register=(async(req,res)=>{
  const {name,email,password}=req.body
  try {
    let user = await User.findOne({email})
    if (user){
      res.json({message:"User already exists ! ",sucess:false})
    }
    else{
      const hashPass =await bcrypt.hash(password,10) 
      user = await User.create({name,email,password:hashPass})
      res.json({message:"User registered Sucessfully",sucess:true})
    }

    
  } catch (error) {
    res.json("Error!!")
  }
})

//login user
export const login=async(req,res)=>{
  const {email,password} = req.body;
  try {
    let user = await User.findOne({email})
    if (!user) return res.json({message:"User not found !",success:false})
      const validpassword=await bcrypt.compare(password,user.password)
    if (!validpassword)return res.json({message:"Invalid Credentials",success:false})

      const token = jwt.sign({userId:user._id},"@#$$##%%",{
        expiresIn:'365d'
      })
      res.json({message:`Matched Credentials ${user.name}`,token,success:true})
  } catch (error) {
    res.json({message:error.message})
  }
}

//get all users 

export const user = async(req,res)=>{
  
  try {
    let users = await User.find().sort({createdAt:-1})
    res.json(users)
  } catch (error) {
    res.json(error.message)
  }
}

//get profile
export const profile = async (req,res)=>{
  res.json({user:req.user})
}