function runner(_gen){
  return new Promise((resolve, reject)=>{
    var gen=_gen();

    _next();
    function _next(_last_res){
      var res=gen.next(_last_res);

      //若是yiled返回
      if(!res.done){
        //返回内容
        var obj=res.value;
        //如果返回的是一个promise
        if(obj.then){
          //执行primose
          obj.then((res)=>{
            //迭代是否返回的还是promise
            _next(res);
          }, (err)=>{
            reject(err);
          });
          //若返回的是一个方法
        }else if(typeof obj=='function'){
          //如果返回的是一个generator函数
          if(obj.constructor.toString().startsWith('function GeneratorFunction()')){
            //重走流程
            runner(obj).then(res=>_next(res), reject);
          }else{

            _next(obj());
          }
        }else{
          //如果就是一个参数就直接返回，因为generator函数可以传参数，所以将上一步返回的结果传入给下一个yield
          _next(obj);
        }
      }else{
        resolve(res.value);
      }
    }
  });
}
