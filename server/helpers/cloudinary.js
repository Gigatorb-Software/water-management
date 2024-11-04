// const cloudinary = require("cloudinary").v2;
// const multer = require("multer");

// cloudinary.config({
//   cloud_name: "dw1gshqw4",
//   api_key: "937484887355715",
//   api_secret: "inVGIBOq6DJy-gzBz0Qq91ywkQ0",
// });

// // Multer setup for in-memory storage
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// // Cloudinary image upload utility
// async function imageUploadUtil(file) {
//   const result = await cloudinary.uploader.upload(file, {
//     resource_type: "auto",
//   });
//   return result;
// }

// module.exports = { upload, imageUploadUtil };

// ----------------------------------------------
const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
    cloud_name: "dw1gshqw4",
    api_key: "937484887355715",
    api_secret: "inVGIBOq6DJy-gzBz0Qq91ywkQ0",
  });

const storage = multer.memoryStorage();  // Buffer storage for file uploads

// Convert buffer to base64 and upload to Cloudinary
async function imageUploadUtil(buffer) {
  return new Promise((resolve, reject) => {
    // Convert buffer to base64 string
    const base64String = `data:image/jpeg;base64,${buffer.toString('base64')}`;
    
    // Upload to Cloudinary
    cloudinary.uploader.upload(base64String, { resource_type: "image" }, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };

