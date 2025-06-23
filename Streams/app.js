 const http = require('http');
 const fs= require('fs');

 const readStream = fs.createReadStream(__dirname + '/read-me.txt','utf-8');
 const writeStrem=fs.createWriteStream(__dirname + '/write-me.txt');

 readStream.on('data',(chunk) => {
    console.log('new data received');
    console.log(chunk);
    writeStrem.write(chunk);
 });