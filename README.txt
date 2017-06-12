# module
module :  es6 => es5 => 浏览器

通过 babel 将 ES6 转为 ES5
通过 babel 将 ES6 的 import/export 转为 ES5 的 require
通过 webpack 将 require 打包为 浏览器可识别的JS。

1.配置：
    配置IDE：
        设置ES6可用
    初始化：
        npm init
    安装babel:
        npm install babel-preset-es2015 --save-dev
        npm install babel-preset-stage-2 --save-dev
        npm install babel-cli --save-dev (命令行转码)
    安装webpack:
        npm install webpack --save-dev
    安装webpack loader:
        npm install babel-loader --save-dev

2.配置File Watcher:
    即通过npm.cmd自动转换:
        "node": "babel src -d dist/node",
        "browser": "webpack"

3.运行：
    如果不进行配置File Watcher，可直接运行：
        npm run node
        npm run browser

4.结果：
    1.在命令行中：babel-node src/module/module.js
    2.在node中：直接运行dist/node/module/module.js
    3.在浏览器中：浏览器打开src/test.html
