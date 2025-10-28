const express=require("express");
const { UserRouter }=require("./routes/user");
const { CourseRouter }=require("./routes/course");
const { AdminRouter }=require("./routes/admin");
const mongoose=require("mongoose");
const {userModel,adminModel,courseModel,purchaseModel}=require("./db");

const app=express();
app.use(express.json());

app.use("/api/v1/user",UserRouter);
app.use("/api/v1/course",CourseRouter);
app.use("/api/v1/admin",AdminRouter);

app.listen(3000);