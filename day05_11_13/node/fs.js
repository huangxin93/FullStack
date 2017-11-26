const fs = require('fs');
fs.readFile('assets/data.txt',(err,data) => {
  console.log(JSON.stringify(data));

})


fs.writeFile('assets/write.txt','write',err =>{
  console.log(err);
})
