/* buffer 与字符串转换 */
let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]); //默认utf-8编码规范
//console.log(buf_4.toString());

/* [] */
// let buf = Buffer.from("hello");
//console.log(buf[0].toString(2)); //01101000 查看单个元素
//buf[0] = 95; //改变对应元素的值
//console.log(buf);

/* 溢出 */
// let buf = Buffer.from("hello");
// buf[0] = 361; //会舍弃高位数字 361.toString(2) = 0001 0110 1001  会变成 0110 1001
// console.log(buf);

/* 中文 */
let buf = Buffer.from("你好"); //utf-8编码规范，一个中文字符占3个字节
console.log(buf);
