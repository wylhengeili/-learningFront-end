//1.引入模块
const http = require("http");

//2.创建服务对象
const server = http.createServer((request, response) => {
  //request 封装请求报文的对象
  //response 封装响应报文的对象
  response.setHeader("content-type", "text/html;charset=utf-8"); //中文乱码解决
  response.end("你好 HTTP Server"); //设置相应体并结束服务
});

//3.监听端口，启动服务
server.listen(9000, () => {
  console.log("服务已启动");
});

//HTTP默认端口 80 HTTPS默认端口443
//HTTP服务开发常用端口 3000，8080，8090
