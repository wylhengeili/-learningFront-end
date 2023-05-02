//1.导入fs模块
const fs = require("fs");

//2.创建文件夹
// fs.mkdir("./html", (err) => {
//   if (err) {
//     console.log("创建失败");
//     return;
//   }
//   console.log("创建成功");
// });

//2.2递归创建  { recursive: true }
// fs.mkdir("./a/b/c", { recursive: true }, (err) => {
//   if (err) {
//     console.log("创建失败");
//     return;
//   }
//   console.log("创建成功");
// });

//2.3文件夹读取 data 是 Array
// fs.readdir("../code", (err, data) => {
//   if (err) {
//     console.log("读取失败");
//     return;
//   }
//   console.log(data);
// });

//2.4删除文件夹
// fs.rmdir("./html", (err, data) => {
//   if (err) {
//     console.log("删除失败");
//     return;
//   }
//   console.log("删除成功");
// });

// 递归删除
// fs.rmdir("./a", { recursive: true }, (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("删除成功");
// });

//建议使用rm
fs.rm("../a", { recursive: true }, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("删除成功");
});
