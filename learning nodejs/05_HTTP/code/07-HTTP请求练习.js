/* 导入模块 */
const http = require("http");

/* 创建服务对象 */
const server = http.createServer((request, response) => {
  response.setHeader("content-type", "text/html;charset=utf-8");

  /* 获取请求方法和路径 */
  let { method } = request;
  let { pathname } = new URL(request.url, "http://127.0.0.1");

  /* 判断 */
  if (method === "GET" && pathname === "/login") {
    //登录
    response.end("登录页面");
  } else if (method === "GET" && pathname === "/reg") {
    /* 判断 */
    //注册
    response.end("注册页面");
  } else {
    response.end("Not Found");
  }

  //console.log(method, pathname);
  //response.end("练习");
});

/* 监听端口 */
server.listen(9000, () => {
  console.log("9000端口服务启动");
});
