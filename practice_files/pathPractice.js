var path = require('path');

var dirName = "home//vishal/desktop/commands.txt";

console.log(path.normalize(dirName));
console.log(path.dirname(dirName));
console.log(path.basename(dirName));
console.log(path.extname(dirName));