// handleMouseEnter.js 의 리팩토링.

const title = document.querySelector(".hello:first-child h1");
const selectBodyColor = document.querySelector('body').style;

function changeBodyColor(color, backgroundColor) {
   selectBodyColor.color = color;
   selectBodyColor.backgroundColor = backgroundColor;
}


function handleTitleClick() {
   title.style.color = 'pink';
}

function handleMouseEnter() {
   title.innerHTML = "Mouse is here!";
   changeBodyColor("lavender", "black");
}

function handleMouseLeave() {
   title.innerHTML = "Mouse was gone!";
   changeBodyColor("black", "lavender");
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);