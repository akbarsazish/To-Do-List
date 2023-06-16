// Array of to-do tasks
let tasks = [
  {
    description: '',
    completed: false,
    index: 1,
  }
];

tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Function to add a new task
function addTask() {
  var inputField = document.getElementById("add-list");
  var inputValue = inputField.value;

  // Create a new task object
  var newTask = {
    description: inputValue,
    completed: false,
    index: tasks.length + 1,
  };

  // Add the new task to the tasks array
  tasks.push(newTask);

  // Save the updated tasks array to local storage
  localStorage.setItem("tasks", JSON.stringify(tasks));

  // Clear the input field
  inputField.value = "";

  // Update the task list
  generateTaskList();
}


// Function to generate HTML list items for tasks
function generateTaskList() {
  const todoList = document.getElementById('todo-list');

  todoList.innerHTML = '';

  tasks.forEach((task) => {
    const completedClass = task.completed ? 'completed' : '';
    const checking = task.completed ? 'checked' : 'unchecked';
    const html = `
    <li class="todo-item">
      <input type="checkbox" class="checkbox-input" ${checking}>
       <div id="task-description" class="task-description ${completedClass}"> ${task.description} </div>
       <span class="drag-to-order"> &#x22EE; </span>
    </li>
  `;

    todoList.innerHTML += html;
  });
}


 // Add event listener to handle Enter key press
 var inputField = document.getElementById("add-list");
 inputField.addEventListener("keydown", function (event) {
   if (event.key === "Enter") {
     addTask();
   }
 });

// Render the dynamically created list on page load
window.addEventListener('load', generateTaskList);
export default generateTaskList;