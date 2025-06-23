const { error } = require('console');
const fs = require('fs');

// fs.readFile('read-me.txt','utf-8',function(error,data){
//    fs.writeFile('write.txt',data, function(error){
//         if(error){
//             console.log(error);
//         }
//    })
// });


// console.log('hi There!');
// fs.writeFileSync('write.txt',text);

// console.log(text);


// fs.unlink('write.txt',(error)=>{
//     console.log(error);
// });

// fs.mkdirSync('my-folder'); to cretae directory synchronously

// fs.rmdirSync('my-folder');  to remove directory synchronously

// fs.mkdir('my-folder',()=>{
//     fs.readFile('read-me.txt','utf-8',(error,data)=>{
//         fs.writeFile('./my-folder/write-me.txt',data,() => {

//         })
//     });
// });

fs.unlink('./my-folder/write-me.txt',()=>{
    fs.rmdir('my-folder',(error)=>{
    console.log(error);
    })
})

