const http = require('http');
const fs = require('fs');

const proxy = http.createServer((res,req)=>{
    fs.readFile(`./{res.url}`,(err,data)=>{
        if(!err){
            res.wirte(data);
            res.end();
        }
    })
})
proxy.listen(8081);