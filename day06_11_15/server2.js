const http = require('http');
const fs = require('fs');
const io = require('socket.io');
const url = require('url')
const reg = require('./lib/reg.js');
const mysql = require('mysql');

const db = mysql.createPool({
  host:'localhost',
  user:'root',
  password:'',
  database:'huangxin'
})

const proxy = http.createServer((req,res) => {
  let {pathname,query} = url.parse(req.url,true);
  fs.readFile(`page${pathname}`,(err,data) => {
    if(err){
      res.writeHeader(404);
      res.write('404');
    }else{
      res.write(data);
    }
    res.end();
  })


});
proxy.listen(8080);
const wsServer = io.listen(proxy);
let onlineQueue = [];
wsServer.on('connection', sock => {
  let userinfo = {}
  sock.on('reg',(user,pass) => {
    //1、校验用户名是否符合规范
    if(!reg.username.test(user)){
        sock.emit('reg_res',1,'用户名不符合规范');
    }else if(!reg.password.test(pass)){
      sock.emit('reg_res',1,'密码不符合规范');
    }else{
      //检查用户是否存在
      db.query(`select * from user_table where user='${user}'`,(err,data) => {
        if(err){
          console.log(err);
          sock.emit('reg_res',1,'数据库连接失败');
        }else if(data.length){
          sock.emit('reg_res',1,'用户名已存在');
        }else{
          db.query(`insert into user_table (user,pass,online) values('${user}','${pass}',0)`,(err,data) => {
            if(err){
              console.log(err);
              sock.emit('reg_res',1,'数据库连接失败');
            }else{
              sock.emit('reg_res',0,'注册成功');
            }
          })
        }
      })
    }
  })


  sock.on('login',(user,pass) => {
    if(!reg.username.test(user)){
        sock.emit('login_res',1,'用户名不符合规范');
    }else if(!reg.password.test(pass)){
      sock.emit('login_res',1,'密码不符合规范');
    }else{
      db.query(`select * from user_table where user='${user}'`,(err,data)=>{
        if(err){
          sock.emit('login_res',1,'数据库查询出错');
        }else{
          if(!data.length){
            sock.emit('login_res',1,'无此用户');
          }else{
            if(data[0].pass == pass){
              onlineQueue.push(sock);
              userinfo.user = user;
              userinfo.id = data[0].id;
              sock.emit('login_res',0,'登陆成功');
            }else{
              sock.emit('login_res',1,'密码错误');
            }
          }
        }
      });
    }
  })

  sock.on('send',(txt) =>{
    if(!txt){
      sock.emit('send_res',1,'数据不能为空');
    }else{
      onlineQueue.forEach(socket => {
        socket.emit('msg',userinfo.user,txt);
      })
      sock.emit('send_res',0,'success');
    }
  })
})
