// h1 클릭 시 class의 이름을 바꾸는 함수.

const h1 = document.querySelector(".hello:fist-child h1");

function handleTitleClick() {
   const clickedClass = "clicked";
   
   if (h1.classList.contains(clickedClass)) {
      h1.classList.remove(clickedClass);
   } else {
      h1.classList.add(clickedClass);
   }
}

h1.addEventListener("click", handleTitleClick);