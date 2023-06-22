// Add these lines at the top of the file
import { todoLists, displayTodoList } from './todos.js';

const form = document.getElementById('todoForm');
const todoInput = document.getElementById('newtodo');
const errorMessag = document.getElementById('errorMessag');
const todosListParent = document.getElementById('todo-list');

// Define the removeTodo function
// eslint-disable-next-line no-use-before-define
const removeTodo = (index) => { // eslint-disable-line
  todoLists.splice(index, 1);
  displayTodoList();
  localStorage.setItem('todoLists', JSON.stringify(todoLists));
};

// add event listener to editBtn
todosListParent.addEventListener('click', (e) => {
  if (e.target.classList.contains('editBtn')) {
    const todoIndex = e.target.id.split('-')[1];
    const todo = todoLists[todoIndex];
    const todoElement = document.getElementById(todoIndex);
    const descriptionElement = todoElement.querySelector('.description');
    const inputElement = document.createElement('input');
    inputElement.setAttribute('class', 'editInput');
    inputElement.value = todo.description;
    todoElement.replaceChild(inputElement, descriptionElement);
    inputElement.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        todo.description = inputElement.value;
        const newDescriptionElement = document.createElement('p');
        newDescriptionElement.classList.add('description');
        newDescriptionElement.innerText = todo.description;
        todoElement.replaceChild(newDescriptionElement, inputElement);
      }
    });
  }
});

// save the data in to local storage
const saveTodo = (todosListParent) => {
  const todoValue = todoInput.value;

  const index = todoLists.length;
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
