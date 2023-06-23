// Add these lines at the top of the file
import { todoLists, displayTodoList } from './todos.js';

const form = document.getElementById('todoForm');
const todoInput = document.getElementById('newtodo');
const errorMessag = document.getElementById('errorMessag');
const todosListParent = document.getElementById('todo-list');

// save the data in to local storage
const saveTodo = (todosListParent) => {
  const todoValue = todoInput.value;

  const index = todoLists.length + 1;
  todoLists.push({ index, description: todoValue, completed: false });

  localStorage.setItem('todoLists', JSON.stringify(todoLists));
  todoInput.value = '';

  displayTodoList(todosListParent);
};

// validate the form if it is empty the form will not submit
const formValidation = (todosListParent) => {
  if (todoInput.value === '') {
    errorMessag.innerHTML = "it can't be blank!!!";
  } else {
    errorMessag.innerHTML = '';
    saveTodo(todosListParent);
  }
};

// submiting the form
form.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.keyCode === 13) {
    event.preventDefault();
    formValidation(todosListParent);
    form.submit();
  }
});

// Call displayTodoList initially or wherever appropriate in your code
displayTodoList(todosListParent);
