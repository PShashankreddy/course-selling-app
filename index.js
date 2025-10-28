const express=require("express");
const { UserRouter }=require("./routes/user");
const { CourseRouter }=require("./routes/course");
const mongoose=require("mongoose");

const app=express();
app.use(express.json());

app.use("/user",);
app.use("/course",);
createUserRoutes(app);
createCourseRoutes(app);
app.listen(3000);