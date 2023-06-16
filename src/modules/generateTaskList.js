// Array of to-do tasks
const tasks = [
  {
    description: 'Task 01',
    completed: false,
    index: 1,
  },
  {
    description: 'Task 2',
    completed: true,
    index: 2,
  },
  {
    description: 'Task 3',
    completed: false,
    index: 3,
  },
];

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

// Render the dynamically created list on page load
window.addEventListener('load', generateTaskList);
export default generateTaskList;