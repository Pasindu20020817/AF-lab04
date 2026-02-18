console.log("Node lab Started");

// Reading a file using Node.js
const fs = require('fs'); 
fs.readFile('file.txt', 'utf8', function (err, data) {   if (err) throw err; 
  console.log(data); 
}); 
