const path = require('path') , 
      spawnSync = require('child_process').spawnSync , 
      fs = require('fs')

exports.py_connect = (file_destination , filename) => {
    console.log('filedestination : ',file_destination)
    console.log('filename : ',filename)
    const py = spawnSync('python3' , [path.resolve(__dirname, '../models/dominant_colors.py'), file_destination, filename], {'encoding': 'utf8'})
    
    if(py.stderr)
        return 'ERROR: '+py.stderr
    
    console.log('COLORS : ',py.stdout)
    return py.stdout
    
}