//selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//ADDlistener

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//functions
function addTodo(e) {
  e.preventDefault();
  console.log('holla');

  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todoo');

  const newTodo = document.createElement('li');
  newTodo.classList.add('todo-items');
  newTodo.innerText = todoInput.value;
  todoInput.value = '';
  todoDiv.appendChild(newTodo);

  const complatebtn = document.createElement('button');
  complatebtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  complatebtn.classList.add('complite-btn');
  todoDiv.appendChild(complatebtn);

  const deletebtn = document.createElement('button');
  deletebtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deletebtn.classList.add('delete-btn');
  todoDiv.appendChild(deletebtn);

  todoList.appendChild(todoDiv);
}

function deleteCheck(n) {
  const item = n.target;
  if (item.classList[0] === 'delete-btn') {
    const todo = item.parentElement;
    todo.classList.add('fall');
    //waiting animation compliting and next remove todo Element
    todo.addEventListener('transitionend', function () {
      todo.remove();
    });
  }

  if (item.classList[0] === 'complite-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('complited');
  }
}
