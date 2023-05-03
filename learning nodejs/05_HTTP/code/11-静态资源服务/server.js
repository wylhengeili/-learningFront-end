/* 引入模块 */
const http = require("http");
const fs = require("fs");
const path = require("path");

/* 声明变量 */
let mimes = {
  html: "text/html",
  css: "text/css",
  js: "text/javascript",
  png: "image/png",
  jpg: "image/jpeg",
  gif: "image/gif",
  mp4: "video/mp4",
  mp3: "audio/mpeg",
  json: "application/json",
};

/* 创建服务 */
const server = http.createServer((requset, response) => {
  //不是GET返回错误
  if (requset.method !== "GET") {
    response.statusCode = 405;
    response.end("<h1>405 Method Not Allowed</h1>");
    return;
  }

  //获取URL路径
  let { pathname } = new URL(requset.url, "http://127.0.0.1");
  //设置根目录
  let root = __dirname + "/page";
  //拼接文件路径
  let filepath = root + pathname;
  //异步读取file
  fs.readFile(filepath, (err, data) => {
    if (err) {
      //统一设置
      response.setHeader("content-type", "text/html;charset=utf-8");

      //判断作物代号
      switch (err.code) {
        case "ENOENT":
          response.statusCode = 404;
          response.end("<h1>404 Not Found</h1>");
        case "EPERM":
          response.statusCode = 403;
          response.end("<h1>403 Forbidden</h1>");
      }

      return;
    }
    //获取文件后缀名
    let ext = path.extname(filepath).slice(1);
    //获取对应类型
    let type = mimes[ext];
    if (type) {
      //匹配成功
      //设置响应头                                解决乱码问题
      /* response.setHeader("content-type", type + ";charset=utf-8"); //此处的优先级高于html中的<meta>标签 */

      /* 只给html加字符集 */
      if (ext === "html") {
        response.setHeader("content-type", type + ";charset=utf-8");
      } else {
        response.setHeader("content-type", type);
      }
    } else {
      //匹配失败
      response.setHeader("content-type", "application/octet-stream");
    }

    //响应文件内容
    response.end(data);
  });
});

/* 监听端口 */
server.listen(9000, () => {
  console.log("9000端口服务已启动");
});
