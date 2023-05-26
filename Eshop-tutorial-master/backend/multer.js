// // Use ES6 import syntax instead of require
// import multer from "multer";
// import path from "path";

// // Use arrow functions instead of regular functions
// const storage = multer.diskStorage({
//   destination: (req, res, cb) => {
//     // Use path.resolve instead of path.join for absolute paths
//     cb(null, path.resolve(__dirname, "./uploads"));
//   },
//   filename: (req, file, cb) => {
//     // Use template literals instead of string concatenation
//     const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
//     const filename = file.originalname.split(".")[0];
//     cb(null, `${filename}-${uniqueSuffix}.png`);
//   },
// });

// Use export default instead of exports
// export default multer({ storage: storage });

/* older code is down */

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, path.join(__dirname, './uploads'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const filename = file.originalname.split('.')[0];
    cb(null, filename + '-' + uniqueSuffix + '.png');
  },
});

exports.upload = multer({ storage: storage });
