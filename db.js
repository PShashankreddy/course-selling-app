const mongoose=require("mongoose");
console.log("Connecting to MongoDB...");
mongoose.connect("mongodb+srv://23071a6749_db_user:Wan9SXVXYJwQldTj@cluster0.ltbaavk.mongodb.net/coursera-app");
const Schema=mongoose.Schema;
const ObjectId=Schema.Types.ObjectId;

const userSchema=new Schema(
{
  email:{type:String,required:true,unique:true},
  password:String,
  firstName:String,
  lastName:String

})

const adminSchema=new Schema(
{
  email:{type:String,required:true,unique:true},
  password:String,
  firstName:String,
  lastName:String
  
})

const courseSchema=new Schema(
{
  title:String,
  description:String,
  price:Number,
  imageUrl:String,
  creatorId:ObjectId
})

const purchaseSchema=new Schema(
{
  userId:ObjectId,
  courseId:ObjectId
})



const userModel=mongoose.model("user",userSchema);
const adminModel=mongoose.model("admin",adminSchema);
const courseModel=mongoose.model("course",courseSchema);
const purchaseModel=mongoose.model("purchase",purchaseSchema);

module.exports={
  userModel,
  adminModel,
  courseModel,
  purchaseModel
}
