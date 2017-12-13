# 数据交互
## http协议
### 拓展：
	- request和response结构
	- 状态机
		1. 100 - 199 信息类状态
		2. 200 - 299 成功状态码
		3. 300 - 399 重定向类状态码
		- 301:永久重定向  a.html -> b.html 第一次访问会走老地址a，第二次访问将不会再访问a
		- 302:临时重定向  a.html -> b.html 每次都会先访问a
		- 304:请求缓存，判断若当前请求资源在上一次请求后未更新则使用缓存
		4. 400 - 499 浏览器错误
		- 403:服务器拒绝，（跨域的时候会报403）
		- 404:资源不存在
		- 405:请求方法与接受方法不一致 
		5. 500 - 599 服务器错误
		- 500:服务器错误（多指于服务器运行错误）
		- 502:服务器无响应
	- 缓存 http://blog.csdn.net/ywh147/article/details/47731387sa

		1. cache-control
		2. expires

	- Keep-Alive 长连接


## form
	- action：请求接口
	- method：请求类型，常用GET|POST 可自定义方法，无法发出HEAD请求
	- enctype
	1. application／x-www-form-urlencoded 字符串键值对形式 key=value&key2=value2
	2. multipart/form-data 可用于文件上传
	3. text/plain 参数以文本格式

## ajax
	拓展：可自写原生xhr

## jsonp 利用script可跨域，需要后端配合结果返回
	拓展：可自写jsonp
	
## websocket