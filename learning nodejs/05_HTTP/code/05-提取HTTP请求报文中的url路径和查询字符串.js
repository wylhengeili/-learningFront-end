//1.引入模块
const http = require("http");
const url = require("url");

//2.创建服务对象
const server = http.createServer((request, response) => {
  //中文乱码解决
  response.setHeader("content-type", "text/html;charset=utf-8");

  // console.log(request.url); 第二参数true 将query返回成object
  let res = url.parse(request.url, true);
  // console.log(res);
  //路径
  let pathname = res.pathname;

  //查询字符串
  let keyword = res.query.keyword;
  console.log(keyword, pathname);

  response.end("你好，HTTP");
});

//3.监听端口，启动服务
server.listen(9000, () => {
  console.log("服务已启动");
});
