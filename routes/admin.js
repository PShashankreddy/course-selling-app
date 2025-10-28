const {Router}=require("express");
const AdminRouter=Router();
const {adminModel}=require("../db");

AdminRouter.post("/signup",function(req,res)
{
  res.json(
    {
    message:"signup endpoint"
   })
})

AdminRouter.post("/signin",function(req,res)
{
  res.json(
    {
    message:"signin endpoint"
   })
})

AdminRouter.post("/course",function(req,res)
{
  res.json(
    {
    message:"course endpoint"
   })
})

AdminRouter.put("/course",function(req,res)
{
  res.json(
    {
    message:"course endpoint"
   })
})

AdminRouter.get("/course/bulk",function(req,res)
{
  res.json(
    {
    message:"course endpoint"
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