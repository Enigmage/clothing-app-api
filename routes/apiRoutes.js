const express = require('express') ,
      multer = require('multer') ,
      baseController = require('../controllers/baseController') , 
      uploadController = require('../controllers/uploadController')

// Path to where files will be saved
const upload = multer({dest: __dirname+'/../uploads/images'})

const router = express.Router() 

router.get('/', baseController.render)
router.get('/hello', baseController.hello)

// upload.array() for multiple files
// Route saves file using upload.single then returns json data about the file
router.post('/process_image', upload.single('image'), uploadController.process_image)

module.exports = router