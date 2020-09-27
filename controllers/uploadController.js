const path = require('path') 

exports.process_image =  (req,res) => {
	
//adding file validation
	
    if(!req.file) {
		throw new Error("File cannot be empty");
		return;
	}
    const extension = path.extname(req.file.originalname);
    
    if(extension != '.jpg' && extension != '.jpeg' && extension != '.png' && extension != '.raw')	
		throw new Error("Only images are allowed");

    else if(parseInt(req.file.size) > 10000000) //file size limit = 10mb
		throw new Error("File size is greater than the limit")
    
	else
		res.json(req.file)
}

