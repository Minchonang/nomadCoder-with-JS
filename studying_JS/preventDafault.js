// preventDefault()를 이용해 브라우저가 원래 작동하는 걸 멈추는 코드.

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");

// 'Log in' 버튼을 눌렀을 때 input에 입력한 정보를 input에 그대로 유지.
function onLoginSubmit(event) {
   event.preventDefault();
   console.log(loginInput.value);
}

// 링크를 눌러도 해당 링크로 넘어가지 않게 하기.
function handleLinkClick(event) {
   event.preventDefault();
   console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);