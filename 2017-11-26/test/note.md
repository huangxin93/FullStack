- canvas像素操作
- canvas操作video
- ajax上传文件
- 拖拽上传文件
-   


js 读取剪贴板

- 使用input file上传文件，多个文件
- 使用FileReader上传文件
- 拖拽上传文件
- 进度 --upload需写在send之前
- canvas制作画布
- canvas像素处理
- canvas加水印
- canvas小游戏
- 绘制粗细不同的线条

- dom3与其他的区别
- addElementListener


几大转换
1. dataURL -> Blob
dataURLtoBlob.html
拓展知识：atob(将base64解码)
        btoa(base64编码)
2. dataURL -> canvas
const img = new Image();
img.src = dataURL;
img.onload = function(){
    canvas.drawImage(img,0,0);
}

3. canvas -> dataURL
canvas.toDataURL('image/png|image/jpeg'[压缩比]);

4. File -> dataURL -> Blob
1. 



