const cloudinary = require("cloudinary").v2;
require('dotenv').config();
const {
    CD_APIKEY, CD_APISECRET, CD_NAME
  } = process.env;

          


const uploadImage = async (image)=>{

    cloudinary.config({ 
        cloud_name: CD_NAME, 
        api_key: CD_APIKEY, 
        api_secret: CD_APISECRET 
      });

    try {
        const resp = await cloudinary.uploader.upload(image);
        return resp
    } catch (error) {
        return new Error(error)
    }
}

module.exports = {uploadImage}