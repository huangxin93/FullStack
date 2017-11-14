- 常见状态码
	1. 100 - 199 信息类状态
	2. 200 - 299 成功状态码
		- 200:成功处理请求
		- 202:服务器已经接受请求，但是还未处理
		- 204:服务器已经成功处理了请求，但是无返回内容
	3. 300 - 399 重定向类状态码
		- 301:永久重定向  a.html -> b.html 第一次访问会走老地址a，第二次访问将不会再访问a
		- 302:临时重定向  a.html -> b.html 每次都会先访问a （在非GET|HEAD请求时，302往往会以303的形式去处理，也就是以get请求去请求b）
		- 303:临时重定向，当以post请求a时，返回303，浏览器会以get的请求b
		- 304:请求缓存，判断若当前请求资源在上一次请求后未更新则使用缓存
		- 307:临时重定向，当以post请求a时，返回307，浏览器还是以post请求b
	4. 400 - 499 浏览器错误
		- 401:需添加WWW-Authenticate授权信息
		- 403:服务器拒绝，（跨域的时候会报403）
		- 404:资源不存在
		- 405:请求方法不被允许，例如后台接收get请求，前台使用post
		- 414:请求url过长
	5. 500 - 599 服务器错误
		- 500:服务器错误（多指于服务器运行错误）
		- 502:服务器充当代理或者网关时，收到远端服务器的错误相应
		- 503:服务器无响应
		- 504:服务器充当代理或者网关时，没有收到远端服务器的响应
		- 505:服务器并不支持请求中所表明的http版本