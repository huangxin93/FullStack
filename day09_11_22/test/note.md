## FileReader
let freader = new FileReader();
freader.readAsText() --读取文本文件
freader.readAsBinaryString() -- 读取二进制文件
freader.readAsDataUrl --读取数据base64
freader.readAsArrayBuffer() --读取文件流

freader.onload --读取完成
feader.onloaded -- 无论失败或者成功都执行
freader.onerror -- 读取失败
freader.abort -- 放弃读取操作

属性：
result:读取到的内容
readyState：FileReader当前状态
error:错误信息

1. 使用ajax2.0配合FileReader上传文件
1. file+Blob