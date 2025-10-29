const jwt=require("jsonwebtoken");
const JWT_USER_PASSWORD=require("../config");

function userMiddleware(re,res,next)
{
  const token=req.headers.token;
  const decoded=jwt.verify(token,JWT_USER_PASSWORD);

  if(decoded)
  {
    req.userId=decoded.id;
    next();
  }
  else{
    res.status(401).json(
      {
        message:"unauthorized"
      }
    )
  }

}

module.exports={
  userMiddleware
}