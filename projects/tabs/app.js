const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");
//querySelector是找到第一个符合的，括号里则是class名，tabs这个class里面只有一个
//querySelectorAll是找到所有符合的，btn和content里面都各有三个，所以需要加all

tabs.addEventListener("click", function (e) {
  //只要tabs内部被点击，就运行以下function
  const id = e.target.dataset.id;
  //e.target是被点击到的element，e可以更换名字，target不行
  // dataset读取html中的data-xxx自定义属性，在此读到的是data-id这个属性，赋值给常量id
  if (id) {
  //如果有id，即被点到btn，而不是content
    btns.forEach(function (btn) {
      btn.classList.remove("live");
    });
    //去除每个btn身上的live这个class；classList是某个element身上所有的class合集
    e.target.classList.add("live");
    //被选中的加上live
    articles.forEach(function (article) {
      article.classList.remove("live");
    });
    //content也都去掉live
    const element = document.getElementById(id);
    //在html里面找到id对应的内容（content）并导入给element
    element.classList.add("live");
    //将element改为live，实现content显示
  }
});
