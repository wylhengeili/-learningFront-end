/* 引入模块 */
const http = require("http");
const fs = require("fs");

/* 创建服务 */
const server = http.createServer((requset, response) => {
  //获取URL路径
  let { pathname } = new URL(requset.url, "http://127.0.0.1");
  //设置根目录
  let root = __dirname + "/page";
  //拼接文件路径
  let filepath = root + pathname;
  //异步读取file
  fs.readFile(filepath, (err, data) => {
    if (err) {
      response.setHeader("content-type", "text/html;charset=utf-8");
      response.statusCode = 500;
      response.end("读取文件失败");
      return;
    }
    //响应文件内容
    response.end(data);
  });
});

/* 监听端口 */
server.listen(9000, () => {
  console.log("9000端口服务已启动");
});
