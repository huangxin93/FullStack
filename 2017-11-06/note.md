  # 问题纪录
- src refspec master does not match any.(git无法提交空目录)

## es6
- 变量
  var -- 无块级作用域、重复定义不报错

  let -- 可改变的
  const  -- 不可修改 final 一旦定义必须立即赋值（Missing initializer in const declaration）

  拓展：变量提前


- 尖头函数
  只有一个参数时，（）可省略
  只有一个语句且是return语句，｛｝省略

- ...函数
  function(arg1,arg2,...args);
  接收参数的扩展，只能在最后

  let array = [1,2,3];
  ...array
  展开参数

- 数组
 let arr = [1,2,3];
 1. map 映射
  arr.map( item => item * 2 )  每项乘2
 2. reduce 汇总
  arr.reduce((temp,item,index) => {
    temp:前一个项
    item:当前项
    index:当前下标
    })
 3. filter 过滤
  arr.filter( item => item%2 == 0) 偶数返回
 4. forEach 遍历

 - 面向对象
 class extends super
 拓展：public set get static private 传参类型校验 枚举
 1）class修饰不会变量提前
 2) es6中只有静态方法没有静态属性，es7支持静态属性 (静态方法直接定义在类上，Person.sayHi() , 因此子类无法继承 )
 3) set name(){} get name(){}
 4) js无重载
 5) class内部定义的方法定义在原型链上，且不可枚举
 6）set和get 使用defineProperty定义

 

 - promise 异步操作

 let p = new Promise(function(resolve,reject){
    异步操作
   })      
            resolve       reject
   p.then(function(){},function(){})
  拓展：更多方法、内部跑出错误是否可以让外部捕获


- 解构赋值
var [a,b,c] = [1,2,3];
