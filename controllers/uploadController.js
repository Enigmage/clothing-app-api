const { py_connect } = require("../utils/connectors")

exports.process_image =  (req,res) => {
    if(req.file) {
        req.file.demoProperties = JSON.parse(py_connect(req.file.destination , req.file.filename))
        res.json(req.file)
    } else
	throw new Error("File cannot be empty.")
}

