/**
 * 文件读取
 */
//1.引入fs模块
const fs = require("fs");

//2.异步读取
// fs.readFile("./03_文件管理/诗词.txt", (err, data) => {
//   if (err) {
//     console.log("读取失败");
//     return;
//   }
//   console.log(data.toString());
// });

//3.同步读取
let data = fs.readFileSync("./03_文件管理/诗词.txt");
console.log(data.toString());
