const cloudinary = require("cloudinary").v2;
const axios = require("axios");
require("dotenv").config();

//import axios from "axios";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const opts = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto",
};

const apiEndpoint = "";

// module.exports = (file) => {
//   return new Promise((resolve, reject) => {
//     cloudinary.uploader.upload(file, opts, (error, result) => {
//       if (result && result.secure_url) {
//         console.log(result.secure_url);
//         return resolve(result.secure_url);
//       }
//       console.log(error.message);
//       return reject({ message: error.message });
//     });
//   });
// };

module.exports = (file) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      file,
      opts,
      async (cloudinaryError, cloudinaryResult) => {
        if (cloudinaryResult && cloudinaryResult.secure_url) {
          console.log("Cloudinary URL:", cloudinaryResult.secure_url);

          try {
            // Send the PDF to Data API
            const apiResponse = await axios.post(apiEndpoint, {
              pdfUrl: cloudinaryResult.secure_url,
            });

            console.log("API Response:", apiResponse.data);

            return resolve(cloudinaryResult.secure_url);
          } catch (apiError) {
            console.error("API Error:", apiError.message);
            return reject({ message: apiError.message });
          }
        }

        console.error("Cloudinary Error:", cloudinaryError.message);
        return reject({ message: cloudinaryError.message });
      }
    );
  });
};
