const cloudinary = require("cloudinary").v2;
require('dotenv').config();
const {
    CD_APIKEY, CD_APISECRET, CD_NAME
  } = process.env;

          
cloudinary.config({ 
  cloud_name: CD_NAME, 
  api_key: CD_APIKEY, 
  api_secret: CD_APISECRET 
});

const uploadImage = async (image)=>{
    try {
        return await cloudinary.uploader.upload(image);
    } catch (error) {
        return new Error("Could not upload image.")
    }
}

module.exports = {uploadImage}