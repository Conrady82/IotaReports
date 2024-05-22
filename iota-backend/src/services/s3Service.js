const AWS = require("aws-sdk");
require("dotenv").config(); // Load environment variables

const isProduction = process.env.NODE_ENV === "production";

const s3 = new AWS.S3({
  accessKeyId: isProduction
    ? process.env.AWS_ACCESS_KEY_ID
    : process.env.MINIO_ROOT_USER,
  secretAccessKey: isProduction
    ? process.env.AWS_SECRET_ACCESS_KEY
    : process.env.MINIO_ROOT_PASSWORD,
  region: isProduction ? process.env.AWS_REGION : "us-east-1",
  endpoint: isProduction ? undefined : process.env.MINIO_ENDPOINT,
  s3ForcePathStyle: !isProduction, // needed with MinIO
});

exports.uploadFile = async (file) => {
  const params = {
    Bucket: process.env.MINIO_BUCKET_NAME,
    Key: file.originalname, // or file.filename depending on how multer handles file names
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  return s3.upload(params).promise();
};

exports.deleteFile = async (key) => {
  const params = {
    Bucket: process.env.MINIO_BUCKET_NAME,
    Key: key,
  };

  return s3.deleteObject(params).promise();
};
