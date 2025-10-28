const express=require("express");
const CourseRouter=express.Router();

CourseRouter.post("/purchase",function(req,res)
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
