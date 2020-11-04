const multer = require('multer');
const path = require('path');

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img/users');
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});

// const fileFilter = function (req, file, callback) {
//   if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
//     req.fileValidationError = 'Only Images';
//     return callback(null, false, req.fileValidationError);
//   }
//   callback(null, true);
// };

const upload = multer({
  storage: storage,
  // fileFilter: fileFilter,
});

module.exports = upload;
