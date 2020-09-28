const express = require('express') ,
      multer = require('multer') ,
      path = require('path'),
      baseController = require('../controllers/baseController') , 
      uploadController = require('../controllers/uploadController')

// Path to where files will be saved
// store files with their original names
const storage = multer.diskStorage({
      destination: function (req, file, cb) {
            cb(null, path.join(__dirname, '../uploads/images'))
      },
      filename: function(req, file, cb) {
            cb(null, file.originalname )
      }
})

//Validating file type

const fileFilter = function(req, file, cb)	{
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/raw', 'image/pjpeg'];
    if(allowedTypes.includes(file.mimetype)) {
		cb(null, true);
    }
    else {
		cb(null, false);
		cb(new Error("Only images are allowed."))
    }
};

//validating file size

const limit = {
    fileSize: 1500000
} 

const options = {  //Created an object of options for simplification
    storage: storage,
    limits: limit,
    fileFilter: fileFilter
};


const upload = multer(options).single('image')  

const router = express.Router() 

router.get('/', baseController.render)
router.get('/hello', baseController.hello)

// upload.array() for multiple files
// Route saves file using upload.single then returns json data about the file
router.post('/process_image', upload, uploadController.process_image)

module.exports = router
