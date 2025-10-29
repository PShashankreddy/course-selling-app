const express=require("express")
const UserRouter=express.Router();
const jwt=require("jsonwebtoken");
const JWT_USER_PASSWORD=require("../config");
const {userMiddleware}=require("../middleware/user");
const {userModel}=require("../db");


UserRouter.post("/signup",async function(req,res)
{
  const {email,password,firstName,lastName}=req.body; //add zod validation later on
  try{
  await userModel.create(
    {
      email:email,
      password:password,
      firstname:firstName,
      lastName:lastName
    }) 
  }catch(err)
  {
    return res.status(500).json(
      {
        message:"signup failed",
        error:err.message
      }
    )
  }

   res.json(
    {
    message:"signup succeeded"
   })
})

UserRouter.post("/signin",async function(req,res)
{
  const {email,password}=req.body;

  const user=await userModel.findOne({
    email:email,
    password:password
  });

  if(user)
  {
    const token=jwt.sign({
      id:user._id
    },JWT_USER_PASSWORD)
    res.json(
      {
        token:token
      }
    )
  }else
  {
    res.status(401).json(
      {
        message:"invalid credentials"
      }
    )
  }

  res.json(
    {
    message:"signin endpoint"
   })
})


UserRouter.get("/purchases",userMiddleware,async function(req,res)
{
  const userId=req.userId;
  const purchases=await purchaseModel.find(
    {
      userId:userId
    }
  )
  res.json(
    {
      purchases:purchases
   })
})


module.exports={
  UserRouter:UserRouter
}