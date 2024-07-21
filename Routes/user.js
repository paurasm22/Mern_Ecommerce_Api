import express from 'express'
import { login, profile, register, user } from '../Controller/user.js';
import { Authenticated } from '../Middleware/Auth.js';
const Router = express.Router();

//register user 
Router.post('/register',register)//=>/api/user/register
//login user
Router.post('/login',login)

//get all user 
Router.get('/all',user)

//get user profile
Router.get('/profile',Authenticated,profile)
export default Router;
