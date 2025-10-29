require("dotenv").config();
console.log(process.env.MONGO_URL)
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

async function main()
{
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(3000);
  console.log("Server is running on port 3000");
}

main();
