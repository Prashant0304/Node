const http = require('http');

const server = http.createServer((req,res)=>{
     console.log(req.url);
     res.writeHead(200,{'content-Type': 'text/plain'});
     res.end('Hello World!');
});
console.log('port 3000');
server.listen(3000, 'localhost');  