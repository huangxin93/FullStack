#flex
## flex容器
- 主轴（Main-Axis） 当flex-direction为row的时候主轴相当于水平方向，当direction为column的时候主轴则为垂直方向
- 侧轴（Cross-Axis) 当flex-direction为row的时候侧轴相当于垂直方向，当direction为column的时候侧轴则为水平方向
### flex-direction 排序方向
- row
- column
- row-reverse
- column-reverse 
### flex-wrap 当flex项目增多时是否换行
- wrap 换行排列
- nowrap 不换行
- wrap-reverse 反向换行
### flex-flow:row wrap  flex-direction和flex-wrap的组合      
### justify-content flex项目的对齐方式
- flex-start：主轴的开始边缘对齐
- flex-end:主轴的结束边缘对齐
- center:主轴居中对齐
- space-between:主轴两端对齐
- space-around:主轴每个项目间距相同 
### align-items 控制项目在侧轴方向上的对齐方式
- stretch:默认值，若dir为row，在侧轴方向高度\宽度一致.例如dir为row则项目的高度与容器的高度一致，若换行则高度与行高一致。弱dir为col则项目的宽度与容器的宽度一致，若换行则宽度与行宽一致
- flex-start:在侧轴开始边缘对齐
- flex-end:在侧轴的结束边缘对齐
- center:在侧轴居中对齐
- baseline:沿着项目的基准钱对齐
### align-content 用于多行容器项目在容器里的排列方式
- center:将多行在侧轴中间
- flex-start:将多行靠侧轴开始边缘
- flex-end:将多行靠侧轴结束边缘
- stretch:在侧轴方向拉伸项目

##flex项目
###order 用于项目排列顺序 默认为0 顺序从低到高排序
###flex-grow 控制项目的增长
- 0 项目遵循自身大小
- 1 项目宽\高会放大以适应屏幕
- 2及更多，表示项目占总项目的多少比例 ”单项比例 / 总比例”
例子：
li:nth-child(1){flex:1 1 auto} 1/3
li:nth-child(2){flex:2 1 auto} 2/3

###flex-shrink 控制项目的缩小
- 0 项目遵循自身大小
- 1 项目宽\高会缩小以适应屏幕
###flex-basis 设置项目的初始宽度\高度
###align-self 控制单个项目在侧轴的对齐方式
- flex-start:在侧轴开始边缘对齐
- flex-end:在侧轴的结束边缘对齐
- center:在侧轴居中对齐
- baseline:沿着项目的基准钱对齐
