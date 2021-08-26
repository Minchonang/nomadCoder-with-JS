const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting"); // .hidden

// string만 포함한 const는 일반적으로 대문자로 작성.
// 반복되는 "string"은 const로 지정해 사용하는 것이 좋다.
const HIDDEN_CLASSNAME = "hidden";
const SUBMIT = "submit";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
   event.preventDefault();

   // 로그인하면 form을 class="hidden"으로 화면에서 숨김.
   loginForm.classList.add(HIDDEN_CLASSNAME);

   const username = loginInput.value;

   // form에 이름(username)을 입력하면 인사한다.
   localStorage.setItem(USERNAME_KEY, username);
   paintGreetings(username);
}

// 'Log in' 버튼을 누르면 onLoginSubmit 실행.
loginForm.addEventListener(SUBMIT, onLoginSubmit);

function paintGreetings(username) {
   greeting.classList.remove(HIDDEN_CLASSNAME);
   greeting.innerText = `hello! @${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

// username이 local storage에 없으면 hidden을 지워 form을 띄우고, 저장되어 있으면 유저 이름과 인사를 띄운다.
if (savedUsername === null) {
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener(SUBMIT, onLoginSubmit);
} else {
   paintGreetings(savedUsername);
}
