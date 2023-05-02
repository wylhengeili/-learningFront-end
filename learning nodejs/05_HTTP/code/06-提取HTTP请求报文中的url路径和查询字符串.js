//1.引入模块
const http = require("http");

//2.创建服务对象
const server = http.createServer((request, response) => {
  //中文乱码解决
  response.setHeader("content-type", "text/html;charset=utf-8");

  //实例化url对象
  let url = new URL(request.url, "http://127.0.0.1");

  //获取pathnam
  console.log(url.pathname);

  //获取查询字符串
  console.log(url.searchParams.get("keyword"));

  response.end("你好，HTTP");
});

//3.监听端口，启动服务
server.listen(9000, () => {
  console.log("服务已启动");
});
