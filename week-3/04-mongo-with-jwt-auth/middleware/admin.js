const jwt=require("jsonwebtoken");
const secret=require("../index");
// Middleware for handling auth

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token=req.headers.authorization;
    /*
    since Actual token contains Bearer and the real token , so first convert it into an array split by
    space and then jwtToken  will be arr[1]
    */
    const words=token.split(" ");
    const jwtToken=words[1];
}

module.exports = adminMiddleware;