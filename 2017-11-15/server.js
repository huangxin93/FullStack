const http = require('http');
const fs = require('fs');
const mysql = require('mysql');
const url = require('url');
//数据库
let db = mysql.createPool({
  host:'localhost',
  user:'root',
  password:'',
  database:'huangxin'
})


let proxy = http.createServer((req,res) => {
 let {pathname,query} = url.parse(req.url,true);
 console.log(`path:${pathname}`)
  if(pathname == '/reg'){
    let {user,pass} = query;
    console.log(`user:${user},pass=${pass}`)
    //先校验格式

    //校验是否已存在
    db.query(`select * from user_table where user=${user}`, (err,data) => {
      if(err){
        console.log('请求错误');
        res.write('请求错误');
        res.end();
      }else if(data.length){
        res.write('用户已存在');
        res.end();
      }else{
        db.query(`insert into user_table (user,password,online) values(${user},${pass},0)`,(err,data) => {
          if(err){
            console.log('插入错误');
            res.write('插入失败');
            res.end();
          }else{
            res.write('成功');
            res.end();
          }
        });
      }

    })

  }else if(pathname == 'login'){

  }else{
    fs.readFile(`page${req.url}`,(err,data) => {
      if(err){
        res.writeHeader(404);
        res.write('404');
      }else{
        res.witer(data);
      }
      res.end();
    })
  }
})

proxy.listen(8080)
