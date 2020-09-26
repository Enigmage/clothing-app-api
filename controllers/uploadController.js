
exports.process_image =  (req,res) => {
    if(req.file)
        res.json(req.file)
    else
        throw 'error'
}