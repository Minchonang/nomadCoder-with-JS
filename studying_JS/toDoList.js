const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

// x를 누르면 todo(li)를 삭제하는 함수.
function deleteTodo(event) {
   const li = (event.target.parentElement);
   li.remove();
}

// todo를 생성하고 옆에 x버튼을 만들어 누르면 deleteTodo(event)를 통해 삭제되는 함수.
function paintToDo(newTodo) {
   const list = document.createElement("li");
   const span = document.createElement("span");

   span.innerText = newTodo + " ";

   const button = document.createElement("button");

   button.innerText = "❌";
   button.addEventListener("click", deleteTodo)
   list.appendChild(span);
   list.appendChild(button);
   toDoList.appendChild(list);
}

// toDoForm에서 값을 입력해도 새로고침 되지 않고, 입력한 값을 newTodo로 변환해 paintToDo(newTodo)로 값을 넘긴다. 
function handleToDoSubmit(event) {
   event.preventDefault();
   const newTodo = toDoInput.value;

   toDoInput.value = "";
   paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
