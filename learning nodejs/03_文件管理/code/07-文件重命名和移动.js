//1.导入fs模块
const fs = require("fs");

//2.调用rename方法  renameSync
/* fs.rename("./03_文件管理/诗词.txt", "./03_文件管理/字母.txt", (err) => {
  if (err) {
    console.log("操作失败");
    return;
  }
  console.log("操作成功");
}); */

//3.文件移动
fs.rename("./03_文件管理/test.txt", "./03_文件管理/资料/test.txt", (err) => {
  if (err) {
    console.log("操作失败");
    return;
  }
  console.log("操作成功");
});
