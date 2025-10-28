const express=require("express");
const Router=express.Router();

Router.post("/purchase",function(req,res)
{
  res.json(
    {
    message:"purchase endpoint"
   })
})

Router.get("/preview",function(req,res)
{
  res.json(
    {
    message:"courses endpoint"
   })
})


module.exports={
  CourseRouter:CourseRouter
}
