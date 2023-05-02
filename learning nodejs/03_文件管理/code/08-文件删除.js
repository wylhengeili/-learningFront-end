//1.引入fs模块
const fs = require("fs");

//2.调用 unlink 方法    unlinkSync
// fs.unlink("./03_文件管理/资料/蚁人与黄蜂女：量子狂潮.mkv", (err) => {
//   if (err) {
//     console.log("删除失败");
//     return;
//   }
//   console.log("删除成功");
// });

//3.调用 rm 方法    rmSync
fs.rm("./03_文件管理/资料/test.txt", (err) => {
  if (err) {
    console.log("删除失败");
    return;
  }
  console.log("删除成功");
});
