## ajax2.0
- update 
1. onload
2. onprogress
- formData (使用ajax上传文件)
1. (FormData 对象的字段类型可以是 Blob, File, 或者 string: 如果它的字段类型不是Blob也不是File，则会被转换成字符串类型
- 跨域 cors设置
- xhr.send
xhr.send(formData)
xhr.send(Blob)
xhr.send(Buffer)??


### 浏览器支持情况
Feature	            Chrome	    Firefox (Gecko)	Internet Explorer	Opera	Safari
Basic support	        7+	       4.0 (2.0)	        10+	         12+	  5+
支持filename参数        (Yes)	     22.0 (22.0)	       ?	       ?	    ?

- 自写jsonp后台


- 拓展：
- Blob
1. 值的类型可以有哪些？ --》MIME类型
2. 通过url转化成将内容转化成url --》URL.createObjectURL(blob)
3. 接收媒体文件？

使用a标签与blobweb下载文件
不使用blob：
<a download='下载文件名' href='data:text/txt;charset=utf-8,[[/ufeff]内容]'></a>
使用Blob:
const b = new Blob(['文件内容'],{type:'text/txt;charset=uft-8'})
const url = URL.createObjectURL(b) --通过URL来获取内容源
a.href = url;
1. /ufeff确保在execl中中文不乱码
2. 若需生成表格 ： 行以【,】隔开，列以【\n】隔开，若不使用blob，需要使用encodeURIComponent转义\n

