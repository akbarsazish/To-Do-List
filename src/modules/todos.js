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
  updateTodoIndexes();
  // eslint-disable-next-line no-use-before-define
  displayTodoList();
  localStorage.setItem('todoLists', JSON.stringify(todoLists));
};

const updateTodoIndexes = () => {
  todoLists.forEach((todo, index) => {
    todo.index = index + 1;
  });
};

// Attach event listener using event delegation
todosListParent.addEventListener('click', (event) => {
  if (event.target.classList.contains('deleteBtn')) {
    // eslint-disable-next-line no-use-before-define
    const index = parseInt(event.target.id.split('-', 2)[1], 10);
    removeTodo(index);
  }
});

// event lister for checking the completed task
todosListParent.addEventListener('change', (event) => {
  if (event.target.type === 'checkbox') {
    const taskDesc = event.target.parentElement.querySelector('p');
    const todoIndex = parseInt(event.target.dataset.index, 10);

    if (event.target.checked) {
      taskDesc.classList.add('taskComplet');
    } else {
      taskDesc.classList.remove('taskComplet');
    }

    todoLists[todoIndex].completed = event.target.checked;
    localStorage.setItem('todoLists', JSON.stringify(todoLists));
  }
});

// return the html content and load on webpage
export const displayTodoList = () => {
  todosListParent.innerHTML = '';
  todoLists.forEach((todo, index) => {
    const todoElement = document.createElement('div');
    todoElement.classList.add('todo');
    todoElement.id = index;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `myCheckbox-${index}`;
    checkbox.classList.add('checkbox');
    checkbox.dataset.index = index;
    todoElement.appendChild(checkbox);

    const descriptionElement = document.createElement('p');
    descriptionElement.id = `description-${index}`;
    descriptionElement.classList.add('content');
    descriptionElement.innerText = todo.description;

    if (todo.completed) {
      checkbox.checked = true;
      descriptionElement.classList.add('taskComplet');
    }

    todoElement.appendChild(descriptionElement);

    const editBtn = document.createElement('i');
    editBtn.id = `editBtn-${index}`;
    editBtn.classList.add('fa', 'fa-edit', 'editBtn');
    todoElement.appendChild(editBtn);

    const deleteBtn = document.createElement('i');
    deleteBtn.id = `deleteBtn-${index}`;
    deleteBtn.classList.add('fa', 'fa-trash', 'deleteBtn');
    todoElement.appendChild(deleteBtn);
    todosListParent.appendChild(todoElement);

    // Add event listener to the edit button
    editBtn.addEventListener('click', () => {
      const paragraph = document.getElementById(`description-${index}`);
      if (paragraph) {
        const inputElement = document.createElement('input');
        inputElement.classList.add('editInput');
        inputElement.id = 'editInput';
        inputElement.value = todo.description;
        todoElement.replaceChild(inputElement, paragraph);

        const handleKeyUp = (e) => {
          if (e.keyCode === 13) {
            todo.description = inputElement.value;
            const newParagraph = document.createElement('p');
            newParagraph.classList.add('content');
            newParagraph.innerText = todo.description;
            todoElement.replaceChild(newParagraph, inputElement);
            document.removeEventListener('keyup', handleKeyUp);

            // eslint-disable-next-line no-use-before-define
            updateLocalStorage();
          }
        };

        document.addEventListener('keyup', handleKeyUp);
      }
    });
  });
};

// Function to update localStorage
const updateLocalStorage = () => {
  localStorage.setItem('todoLists', JSON.stringify(todoLists));
};

// Call displayTodoList initially or wherever appropriate in your code
displayTodoList();
