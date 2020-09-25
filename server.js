const express = require('express');
const app = express()
// Multer library for handling file uploads with multipart/form-data encoding
const multer = require('multer');

const PORT = 8000;

// Path to where files will be saved
const upload = multer({dest: __dirname+'/uploads/images'});

app.use(express.static('public'));

app.get('/', function(req,res) {
    res.sendFile(__dirname + "/public/templates/index.html")
})

app.get('/hello', function(req, res) {
    app.set('json spaces', 30)
    res.json({message:"Hello World"});
})

// upload.array() for multiple files
// Route saves file using upload.single then returns json data about the file
app.post('/process_image', upload.single('image'), function(req, res){
    if(req.file)
        res.json(req.file);
    else
        throw 'error';
})

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`)
})
