marked.setOptions({
  breaks: true
});
//解决换行问题

const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");

function showTab(id) {

  btns.forEach(function (btn) {
    btn.classList.remove("live");
  });
  articles.forEach(function (article) {
    article.classList.remove("live");
  });
  //remove "live"

  const button = document.querySelector(`[data-id="${id}"]`);
  //[]=属性查找,${id}=变量id对应的内容
  // ``反引号支持插入变量内容${id}；单引双引都是字符，${id}会被直接输出
  const article = document.getElementById(id);
  //search target
  
  button.classList.add("live");
  article.classList.add("live");
  //live

  fetch(`${id}.md`)
  //请求文件(need time)
  .then(function (response) {
    //拿到结果后开始运行
    return response.text();
    //将得到的文件转换为字符串（need time）
  })
  .then(function (text) {
    //拿到结果后开始运行
    article.innerHTML = marked.parse(text);
    //md文件对应格式输出html，结果放入step1
  });
  //article部分放入md文件，用id读取
}



tabs.addEventListener("click", function (e) {
  const id = e.target.dataset.id;

  if (id) {
    showTab(id);
  }
});

