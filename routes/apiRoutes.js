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


const upload = multer({storage: storage})

const router = express.Router() 

router.get('/', baseController.render)
router.get('/hello', baseController.hello)

// upload.array() for multiple files
// Route saves file using upload.single then returns json data about the file
router.post('/process_image', upload.single('image'), uploadController.process_image)

module.exports = router
