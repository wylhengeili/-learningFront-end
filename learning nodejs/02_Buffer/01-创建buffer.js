/* 1.alloc */
let buf = Buffer.alloc(10); //每一个变量初始为0
//console.log(buf);

/* 2.allocUnsafe */
let buf_2 = Buffer.allocUnsafe(1000); //可能包含原有空间内的数据，不会初始化
//console.log(buf_2);

/* 3.from */
let buf_3 = Buffer.from("hello");
let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
console.log(buf_4);
