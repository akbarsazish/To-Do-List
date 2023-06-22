 import '@fortawesome/fontawesome-free/css/all.css';
 import "./style.css";

const form = document.getElementById('todoForm');
const todoInput = document.getElementById('newtodo');
const errorMessag = document.getElementById('errorMessag');

const todosListParent = document.getElementById('todo-list');

 let todoLists = [];

 todoLists = JSON.parse(localStorage.getItem("todoLists")) || [];

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


// submiting the form
form.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.keyCode === 13) {
    event.preventDefault();
      formValidation();
      form.submit();
      displayTodoList ();
   }
});

// validate the form if it is empty the form will not submit
let formValidation = () => {
    if(todoInput.value === ''){
        errorMessag.innerHTML = "it can't be blank!!!"
    }else {
        errorMessag.innerHTML = ""
        saveTodo()
    }
}

// save the data in to local storage 
const saveTodo = ()=> {
    const todoValue = todoInput.value;
    console.log(todoValue)

       let index = todoLists.length;
       todoLists.push({
            index: index,
            description: todoValue,
            completed: false,
        })
    
    localStorage.setItem("todoLists", JSON.stringify(todoLists));
    todoInput.value = '';

    displayTodoList ();
}


// Define the removeTodo function
const removeTodo = (index) => {
  todoLists.splice(index, 1);
  displayTodoList();
  localStorage.setItem('todoLists', JSON.stringify(todoLists));
};

// Attach event listener using event delegation
todosListParent.addEventListener('click', (event) => {
  if (event.target.classList.contains('deleteBtn')) {
    const index = parseInt(event.target.id.split('-')[1]);
    removeTodo(index);
  }
});

  
  // display the task in the browser
  const displayTodoList = () => {
    todosListParent.innerHTML = '';
    todoLists.forEach((todo, index) => {
      todosListParent.innerHTML += `
        <div class="todo" id="${index}">
            <input type="checkbox" id='myCheckbox-${index}'>
            <p class="description ${todo.checked ? 'completed' : ''}">${todo.description}</p>
            <i id='editBtn' class='fa fa-edit editBtn'></i>&nbsp;
            <i id='deleteBtn-${index}' class='fa fa-trash deleteBtn'></i>
        </div>
      `;
    });
  };
  
  // Call displayTodoList initially or wherever appropriate in your code
  displayTodoList();
  





