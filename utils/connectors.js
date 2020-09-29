const path = require('path') , 
      spawnSync = require('child_process').spawnSync

exports.py_connect = (file_destination , filename) => {
    const py = spawnSync('python3' , [path.resolve(__dirname, '../models/demo.py'), file_destination, filename], {'encoding': 'utf8'})
    
    if(py.stderr)
        return 'ERROR'
    else
        return py.stdout
}