const express=require("express");
const CourseRouter=express.Router();
const {userMiddleware}=require("../middleware/user");
const {purchaseModel}=require("../db");
const {courseModel}=require("../db");

CourseRouter.post("/purchase",userMiddleware,async function(req,res)
{
  const userId=req.userId;
  const courseId=req.body.courseId;

  

  await purchaseModel.create(
    {
      userId:userId,
      courseId:courseId
    }
  )
  res.json(
    {
    message:"you have successfully purchased the course"
   })
})

CourseRouter.get("/preview",async function(req,res)
{
  const courses=await courseModel.find({});
  res.json(
    {
    courses:courses
   })
})


module.exports={
  CourseRouter:CourseRouter
}
