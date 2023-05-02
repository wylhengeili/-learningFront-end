//1.引入fs模块
const fs = require("fs");

//2.创建读取流对象
const rs = fs.createReadStream("./03_文件管理/资料/蚁人与黄蜂女：量子狂潮.mkv");

//3.绑定 data 事件
rs.on("data", (chunk) => {
  console.log(chunk.length);
});

//4.end 事件
rs.on("end", () => {
  console.log("读取完成");
});
