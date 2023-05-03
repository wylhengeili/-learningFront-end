/* 导入模块 */
const http = require("http");

/* 创建服务对象 */
const server = http.createServer((request, response) => {
  /* 设置响应状态码 */
  response.statusCode = 200;

  /* 设置响应状态描述 */
  response.statusMessage = "Not Found";

  /* 设置响应头 */
  response.setHeader("content-type", "text/html;charset=utf-8"); //utf-8 之前的 = 不能用空格隔开
  response.setHeader("Server", "Node.js");
  response.setHeader("test", ["a", "b", "c"]); //设置多个同名响应头

  /* 设置响应体 */
  response.write("node.js\r\n"); //write 可以多次调用
  response.end("你好"); //end 在一次设置里必须且只能调用一次
});

/* 监听端口 */
server.listen(9000, () => {
  console.log("9000端口服务已启动");
});
