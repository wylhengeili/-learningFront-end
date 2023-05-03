/* 引入模块 */
const http = require("http");
const fs = require("fs");

/* 创建对象 */
const server = http.createServer((request, response) => {
  response.setHeader("content-type", "text/html;charset=utf-8");

  /* 读取文件 */
  let data = fs.readFileSync("./09.1-table.html");

  /* 响应3*4的表格 每行颜色不一样 点击高亮 */
  response.end(data); //可以接受STR 和 BUFFER

  //response.end("你好");
});

/* 监听接口 */
server.listen(9000, () => {
  console.log("9000端口服务已启动");
});
