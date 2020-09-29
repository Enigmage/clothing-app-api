const { py_connect } = require("../utils/connectors")

exports.process_image =  (req,res) => {
    if(req.file) {
        req.file.demoProperties = py_connect(req.file.file_destination , req.file.filename)
        res.json(req.file)
    } else
	throw new Error("File cannot be empty.")
}

