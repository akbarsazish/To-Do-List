const todosListParent = document.getElementById('todo-list');

export const todoLists = JSON.parse(localStorage.getItem('todoLists')) || [];

// When the checkbox is checked it add taskcomplet class and vs
todosListParent.addEventListener('change', (event) => {
  if (event.target.type === 'checkbox') {
    const taskDesc = event.target.parentElement.querySelector('p');
    if (event.target.checked) {
      taskDesc.classList.add('taskComplet');
    } else {
      taskDesc.classList.remove('taskComplet');
    }
  }
});

// Define the removeTodo function
const removeTodo = (index) => {
  todoLists.splice(index, 1);
  // eslint-disable-next-line no-use-before-define
  displayTodoList();
  localStorage.setItem('todoLists', JSON.stringify(todoLists));
};

// Attach event listener using event delegation
todosListParent.addEventListener('click', (event) => {
  if (event.target.classList.contains('deleteBtn')) {
    // eslint-disable-next-line no-use-before-define
    const index = parseInt(event.target.id.split('-', 2)[1], 10);
    removeTodo(index);
  }
});

// add event listener to editBtn
todosListParent.addEventListener('click', (e) => {
  if (e.target.classList.contains('editBtn')) {
    const todoIndex = e.target.id.split('-', 2)[1];
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

// display the task in the browser
export const displayTodoList = () => {
  todosListParent.innerHTML = '';
  todoLists.forEach((todo, index) => {
    todosListParent.innerHTML += `
      <div class="todo" id="${index}">
          <input class='checkbox' type="checkbox" id='myCheckbox-${index}'>
          <p class="description ${todo.checked ? 'completed' : ''}">${todo.description}</p>
          <i id='editBtn-${index}' class='fa fa-edit editBtn'></i> &nbsp; &nbsp;
          <i id='deleteBtn-${index}' class='fa fa-trash deleteBtn'></i>
      </div>
    `;
  });
};

// Call displayTodoList initially or wherever appropriate in your code
displayTodoList();
