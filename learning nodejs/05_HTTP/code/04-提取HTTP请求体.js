//1.引入模块
const http = require("http");

//2.创建服务对象
const server = http.createServer((request, response) => {
  //中文乱码解决
  response.setHeader("content-type", "text/html;charset=utf-8");

  //声明变量接收响应体结果
  let body = "";
  //绑定事件 data
  request.on("data", (chunk) => {
    body += chunk;
  });
  //绑定事件 end
  request.on("end", () => {
    console.log(body);
    //响应
    response.end("你好，HTTP");
  });

  //设置相应体并结束服务
  // response.end("你好 HTTP Server");
});

//3.监听端口，启动服务
server.listen(9000, () => {
  console.log("服务已启动");
});
