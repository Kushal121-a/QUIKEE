import app from "./app.js";
import cloudinary from "cloudinary";

import jwt from "jsonwebtoken";

const generateToken =(userId) =>{
  return jwt.sign({id: userId},process.env.JWT_SECRET,{
    expiresIn: '30d',
  });
};
export { generateToken };

cloudinary.v2.config({
  cloud_url:process.env.CLOUDINARY_URL,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});