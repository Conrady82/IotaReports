const s3Service = require("../services/s3Service");

exports.uploadFile = async (req, res) => {
  try {
    const file = req.file;
    console.log("file received", file); // Assuming you use multer for file parsing
    const result = await s3Service.uploadFile(file);
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
