const btnEl = document.getElementById("fortune-text");
const emojiNameEl = document.getElementById("emoji-name");
const dateElement = document.getElementById("date");
//接入html定义好的区域

const emoji = [];

async function getEmoji() {
//async指的是函数需要等待,无法立刻执行
  let response = await fetch(
    "https://emoji-api.com/emojis?access_key=773b58f681fb786fafdb8392e8b8a75ddc177fd1"
  );
//向这个网站发请求,并等待拿到资料,放入response(是个箱子),内容很多

  data = await response.json();
  //用json拆箱为js可以用的数据,只提取一部分

  for (let i = 0; i < 1500; i++) {
    //最多运行1500次
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
    //push=塞到array最后的位置
    //大括号中是一组内容放入object,把object放入array
    //character和unicodeName都是property
  }
}

getEmoji();

const today = new Date();

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

dateElement.textContent = `${year}.${month}.${day}`;

btnEl.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * emoji.length);
  btnEl.innerText = emoji[randomNum].emojiName;
  emojiNameEl.innerText = emoji[randomNum].emojiCode;
});
//addEventListener是条件监听器,动作发生即执行后续代码
//math.floor是向下取整,把得到的结果取整为array里面存在的位置
