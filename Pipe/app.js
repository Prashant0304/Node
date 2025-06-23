const http = require('http');
const fs =require('fs');


const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application/json'});
    const person = {
        name: 'alex',
        email:'alex@gmail.com',
        job:'developer'
    };
    res.end(JSON.stringify(person));
});

server.listen(3000,'127.0.0.1'); 