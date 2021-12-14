sourcemap的配置
关键字|含义|效果
-|-|-
sourcemap|产生.map文件|定位信息最全，.map文件最大，效率最低
eval|用eval包裹源代码执行|利用字符串可缓存从而提效
inline|将map作为DataURI嵌入，不单独生成.map文件|减少文件数
cheap|错误信息只定位到行，不定位到列，只能定位到loader转换后的代码|精准度降低换取文件内容的缩小
cheap-module|保留loader处理前后的文件信息映射|解决cheap的问题
