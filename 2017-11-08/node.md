# generator
－ 传值,返回值

# async await
1. async和await都会自动讲定义的内容转换为promise对象

拓展：runner，async如何实现runner，async正确设计
执行顺序？
第一个promise错误后，后续promise是否会中断返回？ 后续不再执行
遇到第一个await是将线程交出async外的流程，是否等外面执行完了再回到async内？
async里如何使用某一个请求的返回值作为整个方法的返回值？

外部内容执行完后交回执行权，异步任务回按顺序进入执行队列

+null =》 0


# 模块化
seajsrequire如何实现
node require如何实现 fs.readFile
es6 import
拓展：export import （es6 export mdn详细了解），CMD AMD


# node require
1. 默认从node_modules目录下找


# node发布包
npm login npm账户
npm publish
