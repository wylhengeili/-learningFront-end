/**
 * 写入一首诗
 */
//1.导入fs
const fs = require("fs");

//2.创建写入流对象
const ws = fs.createWriteStream("./03_文件管理/诗词.txt");

//3. write
ws.write("abcdefg\r\n");
ws.write("hijklmn\r\n");
ws.write("opqrst\r\n");
ws.write("uvwxyz\r\n");

//4.关闭通道
ws.close(); //默认会自动关闭
