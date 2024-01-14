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
  return new Promise(async (resolve, reject) => {
    cloudinary.uploader.upload(
      file,
      opts,
      async (cloudinaryError, cloudinaryResult) => {
        if (cloudinaryResult && cloudinaryResult.secure_url) {
          console.log("Cloudinary URL:", cloudinaryResult.secure_url);

          try {
            // Fetch the PDF file data from Cloudinary
            const pdfResponse = await axios.get(cloudinaryResult.secure_url, {
              responseType: "arraybuffer",
            });

            // Send the PDF file data to the API
            const apiResponse = await axios.post(apiEndpoint, {
              pdfData: pdfResponse.data,
              // Other data you might want to send along with the PDF
            });

            console.log("API Response:", apiResponse.data);

            return resolve(cloudinaryResult.secure_url);
          } catch (error) {
            console.error("Error:", error.message);
            return reject({ message: error.message });
          }
        }

        console.error("Cloudinary Error:", cloudinaryError.message);
        return reject({ message: cloudinaryError.message });
      }
    );
  });
};
