document.documentElement.style.cursor = 'none';

// gsap cursors

gsap.set(".cursor, .cursor2", { xPercent: -50, yPercent: -50 });

let xToCursor = gsap.quickTo(".cursor", "x", { duration: 0.4, ease: "power3" }),
  yToCursor = gsap.quickTo(".cursor", "y", { duration: 0.4, ease: "power3" });

let xToCursor2 = gsap.quickTo(".cursor2", "x", { duration: 0.6, ease: "power3" }),
  yToCursor2 = gsap.quickTo(".cursor2", "y", { duration: 0.6, ease: "power3" });

window.addEventListener("mousemove", (e) => {
  xToCursor(e.clientX);
  yToCursor(e.clientY);
  xToCursor2(e.clientX);
  yToCursor2(e.clientY);
});

// gsap rotaiion

gsap.to(".contato", {
  rotation: 360,
  duration: 20,
  ease: "linear",
  repeat: -1,
  transformOrigin: "50% 50%"
});

// movement and loading

function sleep(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

const loading = document.querySelector(".loading");
const todo = document.querySelector(".todo");
const title = document.querySelector(".title");

window.addEventListener('load', function () {
  sleep(1).then(() => {
    loading.classList.add('hidden');
    sleep(0.4).then(() =>
      todo.classList.add('visible'),
      title.classList.add('visible')
    );
    setTimeout(() => {
      loading.style.display = 'none';
    }, 500);
  });
});

// sticky button

const $ = (s, o = document) => o.querySelector(s);
const $$ = (s, o = document) => o.querySelectorAll(s);

function isMobile() {
  return window.innerWidth <= 768 || /Mobi|Android/i.test(navigator.userAgent);
}
if (!isMobile()) {
  $$('#add-task').forEach(el => el.addEventListener('mousemove', function (e) {
    const pos = this.getBoundingClientRect();
    const mx = e.clientX - pos.left - pos.width / 2;
    const my = e.clientY - pos.top - pos.height / 2;

    this.style.transform = 'translate(' + mx * 0.10 + 'px, ' + my * 0.2 + 'px)';
    this.style.transform += 'rotate3d(' + mx * -0.1 + ', ' + my * -0.2 + ', 0, 10deg)';
    this.children[0].style.transform = 'translate(' + mx * 0.020 + 'px, ' + my * 0.060 + 'px)';
  }));

  $$('#add-task').forEach(el => el.addEventListener('mouseleave', function () {
    this.style.transform = 'translate3d(0px, 0px, 0px)';
    this.style.transform += 'rotate3d(0, 0, 0, 0deg)';
    this.children[0].style.transform = 'translate3d(0px, 0px, 0px)';
  }));
}
//

var modal = document.getElementById("modal");
var btn = document.getElementById("add-task");
var span = document.getElementsByClassName("bi bi-x-lg")[0];

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//

const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-task-modal");
const todoList = document.getElementById("todolist");

const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < storedTodos.length; i++) {
  addTodoToDOM(storedTodos[i]);
}

addBtn.addEventListener("click", addTodo);

function addTodo() {
  const todoText = todoInput.value;
  if (todoText === "") {
    return;
  }
  const newTodo = {
    text: todoText,
  };
  addTodoToDOM(newTodo);
  addTodoToLocalStorage(newTodo);
  todoInput.value = "";
}

function addTodoToDOM(todo) {
  const newTodo = document.createElement("li");
  newTodo.innerText = todo.text;

  const trashIcon = document.createElement("i");
  trashIcon.className = "bi bi-check";
  trashIcon.id = "icon-2";

  newTodo.appendChild(trashIcon);
  todoList.appendChild(newTodo);

}

function addTodoToLocalStorage(todo) {
  const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  storedTodos.push(todo);
  localStorage.setItem("todos", JSON.stringify(storedTodos));
}

function delTodoToLocalStorage(todo, liElement) {
  const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const updatedTodos = storedTodos.filter(storedTodo => storedTodo.text !== todo.text);
  localStorage.setItem("todos", JSON.stringify(updatedTodos));
  liElement.remove();
}

todoList.addEventListener("click", function (event) {
  if (event.target.id === "icon-2") {
    const liElement = event.target.closest("li");
    const todoText = liElement.firstChild.textContent.trim();
    delTodoToLocalStorage({ text: todoText }, liElement);
  }
});

//

const icon2 = document.querySelector('#icon-2');

icon2.addEventListener('mouseenter', () => {
  gsap.to(icon2, {
    borderRadius: '50%',
    duration: 0.5,
    ease: 'power1.inOut',
  });
});

icon2.addEventListener('mouseleave', () => {
  gsap.to(icon2, {
    borderRadius: '20%',
    duration: 0.5,
    ease: 'power1.inOut',
  });
});

//

const addtask = document.querySelector('#add-task-modal');

addtask.addEventListener('mouseenter', () => {
  gsap.to(addtask, {
    backgroundColor: '#007553',
    duration: 0.5,
    ease: 'power1.inOut',
  });
});

addtask.addEventListener('mouseleave', () => {
  gsap.to(addtask, {
    backgroundColor: '#EAE9B6',
    duration: 0.5,
    ease: 'power1.inOut',
  });
});