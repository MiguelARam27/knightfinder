import path from 'path';
import express from 'express';
import multer from 'multer';
import aws from 'aws-sdk';
import multerS3 from 'multer-s3';
import dotenv from 'dotenv';
dotenv.config();
const router = express.Router();

const s3 = new aws.S3({});
aws.config.update({
  secretAccessKey: process.env.secretAccessKey,
  accessKeyId: process.env.accessKeyId,
  region: 'us-east-2',
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'knightfinder',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: 'Testing' });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    },
    fileFilter: function (req, file, cb) {
      checkFileType(file, cb);
    },
  }),
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Images only!');
  }
}

router.post('/', upload.single('image'), (req, res) => {
  return res.json(req.file.location);
});

export default router;
