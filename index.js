const express=require("express");
const { UserRouter }=require("./routes/user");
const { CourseRouter }=require("./routes/course");
const mongoose=require("mongoose");

const app=express();
app.use(express.json());

app.use("/api/v1/user",UserRouter);
app.use("/api/v1/course",CourseRouter);

app.listen(3000);