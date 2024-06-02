const jwt=require("jsonwebtoken");
const secret=require("../index");
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token=req.headers.authorization;
    /*
    since Actual token contains Bearer and the real token , so first convert it into an array split by
    space and then jwtToken  will be arr[1]
    */
    const words=token.split(" ");
    const jwtToken=words[1];
    const decodedValue=jwt.verify(jwtToken,secret);
    if(decodedValue.username){
        next();
    }
    else{
        res.status(403).json({
            msg:"You are not authenticated"
        })
    }
}

module.exports = userMiddleware;