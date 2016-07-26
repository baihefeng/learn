# 学习笔记

##H5构建跨平台web页面及app

> 由学习hybrid App开发时，突发奇想要用一套代码生成web页面及app，初步想法是由gulp制动构建工具，来动态切换页面所引用的不同文件，相应原则如下：

1. 功能性的function写在funcs.js中
2. monitoring event区分写在meweb.js(on web event js)和meapp.js(on app evetn js)
3. 动态加载模块儿web环境用zepto.js中的$.load("url #selector")方式，app环境中用appcloud的api.openFrame或api.openWindow
4. 数据绑定有待补充
