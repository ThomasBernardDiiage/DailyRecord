const multer = require('multer');

const MIME_TYPES = {
  'audio/mp3': 'mp3'
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'audio');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  }
});

module.exports = multer({storage: storage}).single('audio');