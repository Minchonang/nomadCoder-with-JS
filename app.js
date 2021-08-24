// const loginForm = document.querySelector('#login-form') // or getElementById
// getElementById는 'id'를 대상으로 하기 때문에 '#'을 붙일 필요가 없다.

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginClick(event) {
   event.preventDefault(); // preventDefault() -> 브라우저 기본 기능을 막아줌.
   console.log(loginInput);
}

loginForm.addEventListener("submit", onLoginClick);