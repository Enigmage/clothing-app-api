const path = require('path') 

exports.process_image =  (req,res) => {

//adding file validation
    
    if(req.file == undefined)
throw new Error("File cannot be empty");
    
    var extension = path.extname(req.file.originalname);
    console.log(extension);
    
    if(extension == '.sh' || extension == '.bashrc')
	throw new Error("Begone Script Kiddie!");
    
    else if(extension != '.jpg' && extension != '.jpeg' && extension != '.png' && extension != '.raw'){
	throw new Error("Only images are allowed");
    }
    else if(parseInt(req.file.size) > 10000000) //file size limit = 10mb
	
	throw new Error("File size is greater than the limit")
    
    else if(req.file)
	res.json(req.file)
    }

