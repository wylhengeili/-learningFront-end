//导入模块
const fs = require("fs");
const path = require("path");

//resolve 拼接 路径
//console.log(path.resolve(__dirname, "./01-path.js"));

//sep 保存路径分隔符
//console.log(path.sep);

//parse 解析路径
//console.log(__filename);
let str = "G:前端学习learning nodejs\\04_PATHcode\\01-path.js";
//console.log(path.parse(str));

//basename 获取文件名
//console.log(path.basename(str));

//dirname 获取路径的目录命
//console.log(path.dirname(str));

//extname 获取扩展名
console.log(path.extname(str));
