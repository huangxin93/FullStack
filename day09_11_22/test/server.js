const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer( (req,res) => {
    if(req.url == 'upload'){
        let form = new multiparty.Form();
        form.encoding ='utf-8';
        form.uploadDir = 'upload';
        form.maxFilesSize = 20*1024*1024;
        form.parse(req, (err,fields,files) => {
            var originalFilename = files.myfile[0].originalFilename; 
            var path = files.myfile[0].path;  
            fs.renameSync(path, originalFilename);  
            res.writeHead(200, {'content-type': 'text/plain'});
            res.write('received upload:\n\n');
            res.end(util.inspect({fields: fields, files: files}));
        })
    }else{
        fs.readFile(`./${req.url}`, (err,data) =>{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(data);
            res.end();
        })
    }
})
server.listen(8081);