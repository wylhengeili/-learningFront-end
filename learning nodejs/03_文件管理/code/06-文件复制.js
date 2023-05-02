/**
 * 复制文件
 */

//1.导入fs模块
const fs = require("fs");
const process = require("process");
//同步读写 (超过2G 报错)

/* let data = fs.readFileSync("./03_文件管理/资料/蚁人与黄蜂女：量子狂潮.mkv");
fs.writeFileSync("./03_文件管理/资料/蚁人与黄蜂女：量子狂潮-1.mkv", data); */

//流式读写
//创建读取流、写入流对象
const rs = fs.createReadStream("./03_文件管理/资料/蚁人与黄蜂女：量子狂潮.mkv");
const ws = fs.createWriteStream(
  "./03_文件管理/资料/蚁人与黄蜂女：量子狂潮-2.mkv"
);
/* rs.on("data", (chunk) => {
  ws.write(chunk);
});

rs.on("end", () => {
  console.log(process.memoryUsage());
}); */

rs.pipe(ws);
