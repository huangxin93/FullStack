const http = require('http');
const fs = require('fs');

const proxy = http.createServer((req,res)=>{
    fs.readFile(`./${req.url}`,(err,data)=>{
        if(err){
            console.log('读取错误');
        }else{
            res.write(data);
            res.end();
        }
    })
})
proxy.listen(8081);