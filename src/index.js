 import '@fortawesome/fontawesome-free/css/all.css';
 import "./style.css";

const form = document.getElementById('todoForm');
const todoInput = document.getElementById('newtodo');
const errorMessag = document.getElementById('errorMessag');

const todosListParent = document.getElementById('todo-list');

 let todoLists = [];

 todoLists = JSON.parse(localStorage.getItem("todoLists")) || [];


form.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.keyCode === 13) {
    event.preventDefault();
      formValidation();
      form.submit();
   }
});

let formValidation = () => {
    if(todoInput.value === ''){
        errorMessag.innerHTML = "it can't be blank!!!"
    }else {
        errorMessag.innerHTML = ""
        saveTodo()
    }
}


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
    displayTodoList ();
    todoInput.value = '';
}

const displayTodoList = () => {
    todosListParent.innerHTML = '';
    todoLists.forEach ((todo, index) => {

        todosListParent.innerHTML += `
          <div class="todo" id="${index}">    
              <input type="checkbox" id='myCheckbox-${index}' data-action='check'> 
              <p class="description ${todo.checked ? 'completed' : ''} " data-action='check'> ${todo.value} </p>
              <i id='editBtn' class='fa fa-edit editBtn' data-action='edit'></i>  &nbsp;  
              <i class='fa fa-trash deleteBtn' data-action='delete'> </i> 
          </div>
     `})
}

window.onload = saveTodo();

