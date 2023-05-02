//1.引入模块
const http = require("http");

//2.创建服务对象
const server = http.createServer((request, response) => {
  //request 封装请求报文的对象
  //response 封装响应报文的对象
  response.setHeader("content-type", "text/html;charset=utf-8"); //中文乱码解决
  //获取请求方法
  console.log(request.method);
  //获取请求url 只包含url中的路径和查询字符串
  console.log(request.url);
  //获取HTTP协议版本号
  console.log(request.httpVersion);
  //获取HTTP请求头 返回是对象 且key全转为小写 又-的双拼字需要用''括起来
  console.log(request.headers);
  //设置相应体并结束服务
  response.end("你好 HTTP Server");
});

//3.监听端口，启动服务
server.listen(9000, () => {
  console.log("服务已启动");
});

//HTTP默认端口 80 HTTPS默认端口443
//HTTP服务开发常用端口 3000，8080，8090
