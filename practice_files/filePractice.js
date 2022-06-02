var fs = require("fs");

fs.writeFileSync("tempFile.txt" , "temperory text in this file , not usefull");
//fs.writeFileSync("temp/tempFile.txt" , "temperory text in this file , not usefull"); //-----------how to make dir --------------------

var content = fs.readFileSync("tempFile.txt").toString();
console.log(content);
