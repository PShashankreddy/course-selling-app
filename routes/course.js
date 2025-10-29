const express=require("express");
const CourseRouter=express.Router();
const {courseModel}=require("../db");

CourseRouter.post("/purchase",async function(req,res)
{
  res.json(
    {
    message:"purchase endpoint"
   })
})

CourseRouter.get("/preview",function(req,res)
{
  res.json(
    {
    message:"courses endpoint"
   })
})


module.exports={
  CourseRouter:CourseRouter
}
