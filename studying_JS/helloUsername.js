// username을 입력한 후 'Log in' 버튼을 누르면 form이 사라지고 그곳에 유저를 환영하는 글이 나오게 한다.

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

// string만 포함한 const는 일반적으로 대문자로 작성.
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
   event.preventDefault();
   loginForm.classList.add(HIDDEN_CLASSNAME);
   const username = loginInput.value;
   greeting.innerText = `hello ${username}`; // == "hello " + username;
   greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(event) {
   event.preventDefault();
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);