const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [ ];

// 'toDos'라는 Array를 String type으로 변환하여 LocalStorage에 저장.
const TODOS_KEY = "todos";
function saveToDos() {
   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos) );
}

// x를 누르면 todo(li)를 삭제하고 'toDos'라는 Array에 새로운(해당 list를 삭제한) Array를 적용하는 함수.
function deleteTodo(event) {
   const li = (event.target.parentElement);
   li.remove();
   toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
   saveToDos();
}

// handleToDoSubmit에서 가져온 'newTodo'를 생성하고 옆에 x버튼을 만들어 이 버튼을 누르면 deleteTodo(event)를 통해 삭제되는 함수.
function paintToDo(newTodo) {
   const li = document.createElement("li");
   li.id = newTodo.id;

   const span = document.createElement("span");

   span.innerText = newTodo.text + " ";

   const button = document.createElement("button");
   button.innerText = "❌";
   button.addEventListener("click", deleteTodo);

   li.appendChild(span);
   li.appendChild(button);
   toDoList.appendChild(li);
}

// toDoForm에서 값을 입력해도 새로고침 되지 않고, 입력한 값을 newTodo로 변환해 paintToDo(newTodo)로 값을 넘긴다. 
function handleToDoSubmit(event) {
   event.preventDefault();
   const newTodo = toDoInput.value;

   toDoInput.value = "";

   // newTodo를 toDos라는 Array [id: Date.now(), text: newTodo]에 추가한다.
   const newTodoObj = {
      text: newTodo,
      id: Date.now(),
   }
   toDos.push(newTodoObj);
   paintToDo(newTodoObj);
   saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

// 'todos' Array에 내용이 있으면 String인 내용을 Obj화 하고 내용들을 paintTodo()로 보낸다.
if(savedToDos !== null) {
   const parsedToDos = JSON.parse(savedToDos);
   toDos = parsedToDos;
   parsedToDos.forEach(paintToDo);
}

