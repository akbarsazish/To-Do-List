const form = document.getElementById('todoForm');
const todoInput = document.getElementById('newtodo');
const todosListElement = document.getElementById('todo-list');

// vars 
let todos = [];
let EditTodoId = -1;

form.addEventListener('submit', function(event) {
    event.preventDefault();
    saveTodo();
    renderTodos();
})

// save todo 
function saveTodo(){
  const todoValue = todoInput.value;

// check if the todo is not empty
 const isEmpty = todoValue === '';

 // check for dublication 
 const isDublicate = todos.some((todo) =>  todo.value.toUpperCase() === todoValue.toUpperCase())

 if(isEmpty){
    alert("the to do is empty")
    }else if(isDublicate){
        alert("todo already exist")
    }else {
        if(EditTodoId >= 0){
           todos = todos.map((todo, index) => ({
                ...todo,
                value: index === EditTodoId ? todoValue : todo.value
            }));
            EditTodoId = -1;
        }else {
        todos.push( {
            value: todoValue,
            checked: false,
            color: '#' + Math.floor(Math.random() * 16777215).toString(16)
          })
        }
        todoInput.value = '';
    } 
}

// renderTodos
function renderTodos () {
    todosListElement.innerHTML = '';
  todos.forEach ((todo, index) => {
      todosListElement.innerHTML += `
        <div class="todo" id="${index}">
           ${index+1}  <input type="checkbox" id='myCheckbox' ${todo.checked ? 'checked' : 'unchecked'} style="color:${todo.color}" data-action='check'>
            <p class="checked description" data-action='check'> ${todo.value} </p>
                <i id='editBtn' class='fa fa-edit editBtn' data-action='edit'></i>  &nbsp;  
                <i class='fa fa-trash deleteBtn' data-action='delete'> </i> 
        </div>
   `})
}


// event listern for all target element
todosListElement.addEventListener('click', (event) =>{
    const target = event.target;
    const parentElement = target.parentNode;

    if(parentElement.className != 'todo') return;
    const todo = parentElement;
    const todoId = Number(todo.id);

    const action = target.dataset.action;

    action === 'check' && checkTodo(todoId)
    action === 'edit' && editTodo(todoId)
    action === 'delete' && deleteTodo(todoId)
})

// function check todo
function checkTodo (todoId){
    todos = todos.map((todo, index) =>({
        ...todo,
        checked: index ===todoId ? !todo.checked : todo.checked,
    }));

 renderTodos();
}

// function edit to do 
function editTodo(todoId){
    todoInput.value = todos[todoId].value;
    EditTodoId = todoId;
}

// function delete tod 
function deleteTodo (todoId){
    todos = todos.filter((todo, index) => index !== todoId);
    EditTodoId = -1;

    renderTodos();
}
