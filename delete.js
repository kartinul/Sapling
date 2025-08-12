var fs = require('fs');
var files = fs.readdirSync('./');

let noRemove = ['.upm', 'node_modules', 'package-lock.json', 'package.json', '.env', 'delete.js', 'server.js']

const removeDir = function(path) {
  if (fs.existsSync(path)) {
    const files = fs.readdirSync(path)

    if (files.length > 0) {
      files.forEach(function(filename) {
        if (!noRemove.includes(filename))
        {if (fs.statSync(path + "/" + filename).isDirectory()) {
          removeDir(path + "/" + filename)
        } else {
          fs.unlinkSync(path + "/" + filename)
        }}
      })
      fs.rmdirSync(path)
    } else {
      fs.rmdirSync(path)
    }
  } else {
    console.log("Directory path not found.")
  }
}

removeDir('./')