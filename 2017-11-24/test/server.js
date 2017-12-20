const http = require('http');
const fs = require('fs');

const proxy = http.createServer((req,res) => {
    fs.readFile(`./${req.url}`,(err,data)=>{    
        if(!err){
            res.write(data);
            res.end()
        }
    })
})
proxy.listen(8081);