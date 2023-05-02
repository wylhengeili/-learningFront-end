/**
 * 需求：
 * 新建一个文件，hello.txt , 内容， 你好，WYL！
 */

// 1.导入 fs 模块
const fs = require("fs");

//2.写入文件 (异步写入，程序不会等待err的回调而是向下执行)
// fs.writeFile("hello.txt", "你好，WYL！", (err) => {
//   if (err) {
//     console.log("写入失败");
//     return;
//   }
//   console.log("写入成功");
// });

//3.同步写入
fs.writeFileSync("test.txt", "test");
