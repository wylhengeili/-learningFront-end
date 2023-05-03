//获取所有td
let tds = document.querySelectorAll("td");
//遍历td 绑定点击事件
tds.forEach((item) => {
  item.onclick = function () {
    this.style.background = "#fff";
  };
});
