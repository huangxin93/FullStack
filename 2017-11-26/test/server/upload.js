const express = require('express');
const multer = require('multer');
const upload = multer({dest:'uploads/'});
const app = express();

app.use(express.static('../static'));

app.post('/upload',upload.array('fileInput',12),(req,res,next)=>{
	console.log(`files: ${req.files}`);
	res.send('ok');
})

const proxy = app.listen(8081,()=>{
	const host = proxy.address().address;
	const port = proxy.address().port;

	console.log(`listener:${host}:${port}`);
})

