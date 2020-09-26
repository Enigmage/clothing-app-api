const path = require('path')

exports.render = (req,res) => {
    res.sendFile(path.resolve(__dirname , "../public/templates/index.html"))
}

exports.hello = (req, res) => {
    // app.set('json spaces', 30)
    res.json({message:"Hello World"})
}