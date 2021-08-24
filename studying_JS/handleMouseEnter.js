// h1을 클릭하면 글자가 pink색으로 변경, 마우스를 h1에 대면 글자는 라벤더, 배경은 블랙
// 마우스를 떼면 글자는 블랙, 배경은 라벤더가 되는 함수.

const title = document.querySelector(".hello:first-child h1");
const selectBodyColor = document.querySelector('body').style;
const selectBodyBackgroundColor = document.querySelector('body').style;


function handleTitleClick() {
title.style.color = 'pink';
}

function handleMouseEnter() {

   title.innerHTML = "Mouse is here!";
   selectBodyColor.color = "lavender";
   selectBodyBackgroundColor.backgroundColor = "black";

}

function handleMouseLeave() {

   title.innerHTML = "Mouse was gone!";
   selectBodyColor.color = "black";
   selectBodyBackgroundColor.backgroundColor = "lavender";

}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);