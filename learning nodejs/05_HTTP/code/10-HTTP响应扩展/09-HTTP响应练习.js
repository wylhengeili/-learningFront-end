/* 引入模块 */
const http = require("http");
const fs = require("fs");

/* 创建对象 */
const server = http.createServer((request, response) => {
  // response.setHeader("content-type", "text/html;charset=utf-8");

  /* 获取url */
  let { pathname } = new URL(request.url, "http://127.0.0.1");

  /* 分别响应 */
  if (pathname === "/") {
    /* 读取文件 */
    let data = fs.readFileSync(__dirname + "/09.1-table.html");
    response.end(data);
  } else if (pathname === "/index.css") {
    let css = fs.readFileSync(__dirname + "/index.css");
    response.end(css);
  } else if (pathname === "/index.js") {
    let js = fs.readFileSync(__dirname + "/index.js");
    response.end(js);
  } else {
    response.statusCode = 404;
    response.end("Not Found");
  }

  // /* 响应3*4的表格 每行颜色不一样 点击高亮 */
  //  //可以接受STR 和 BUFFER
  //  response.end(data);
  //response.end("你好");
});

/* 监听接口 */
server.listen(9000, () => {
  console.log("9000端口服务已启动");
});
