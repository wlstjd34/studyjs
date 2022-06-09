const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input")
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    const rm = li.firstElementChild.innerText;
    const rmid = li.firstElementChild.id;
    toDos = toDos.filter(e => e.id !== parseInt(rmid));
    li.remove();
    saveToDos();
}

function paintTodo(newTodoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    button.classList.add("deletebtn");
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodoObj.text;
    span.id = newTodoObj.id;
    li.classList.add("todo")
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        id: Date.now(),
        text: newTodo
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos !== null) {
    const parsedToDos = JSON.parse(savedTodos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo); 
}
