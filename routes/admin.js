const {Router}=require("express");
const AdminRouter=Router();
const {adminModel}=require("../db");
const {courseModel}=require("../db");
const adminMiddleware=require("../middleware/admin");
const jwt=require("jsonwebtoken");
const JWT_ADMIN_PASSWORD=require("../config");
AdminRouter.post("/signup",async function(req,res)
{
  const {email,password,firstName,lastName}=req.body; //add zod validation later on
  try{
  await adminModel.create(
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

AdminRouter.post("/signin",async function(req,res)
{
  const {email,password}=req.body;

  const admin=await adminModel.findOne({
    email:email,
    password:password
  });

  if(admin)
  {
    const token=jwt.sign({
      id:admin._id
    },JWT_ADMIN_PASSWORD)
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

AdminRouter.post("/course",adminMiddleware,async function(req,res)
{
  const adminId=req.userId; 
  const {title,description,price,imageUrl}=req.body;
  const course=await courseModel.create(
    {
      title,
      description,
      price,
      imageUrl,
      creatorId:adminId
    }
  )
  res.json(
    {
    message:"course endpoint",
    courseId:course._id
   })
})

AdminRouter.put("/course",async function(req,res)
{
  const adminId=req.userId;
  const {courseId,title,description,price,imageUrl}=req.body;
  await courseModel.updateOne(
    {
      _id:courseId,
      creatorId:adminId
    },
    {
      title,
      description,
      price,
      imageUrl
    }
  )

  res.json(
    {
    message:"course updated endpoint"
   })
})

AdminRouter.get("/course/bulk",async function(req,res)
{
  const adminId=req.userId;
  const courses=await courseModel.find(
    {
      creatorId:adminId
    }
  );
  res.json(
    {
    message:"course endpoint",
    courses:courses
   })
})

AdminRouter.delete("/course",function(req,res)
{
  res.json(
    {
    message:"course endpoint"
   })
})



module.exports={AdminRouter};