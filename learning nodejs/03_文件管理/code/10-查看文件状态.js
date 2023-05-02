//1.导入fs模块
const fs = require("fs");

//2.stat 方法
fs.stat("../资料/字母.txt", (err, data) => {
  if (err) {
    console.log("读取失败");
    return;
  }
  //console.log(data);
  //查看文件是否是文件 isFile
  //console.log(data.isFile());
  //查看文件是否是文件夹 isDirectory
  console.log(data.isDirectory());
});
