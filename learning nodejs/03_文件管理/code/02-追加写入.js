//1.引入fs模块
const fs = require("fs");

//2.调用 appendFile
// fs.appendFile("./03_文件管理/hello.txt", "Hello World!", (err) => {
//   if (err) {
//     console.log("写入失败");
//     return;
//   }
//   console.log("写入成功");
// });

//3.同步方法
//fs.appendFileSync("./03_文件管理/test.txt", "\r\n!!!test!!!");

//writeFie 实现追加写入
fs.writeFile(
  "./03_文件管理/hello.txt",
  "\r\n你好，WYL！",
  { flag: "a" },
  (err) => {
    if (err) {
      console.log("写入失败");
      return;
    }
    console.log("写入成功");
  }
);
