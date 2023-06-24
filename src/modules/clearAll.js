import { todoLists, displayTodoList } from './todos.js';
// Function to clear all completed tasks
const clearCompletedTasks = () => {
  const incompleteTasks = todoLists.filter((todo) => !todo.completed);
  todoLists.length = 0;
  Array.prototype.push.apply(todoLists, incompleteTasks);
  // eslint-disable-next-line no-use-before-define
  updateLocalStorage();
  displayTodoList();
};

const updateLocalStorage = () => {
  localStorage.setItem('todoLists', JSON.stringify(todoLists));
};

// Add event listener for Clear All Completed button
const clearCompletedBtn = document.getElementById('clear-all');
clearCompletedBtn.addEventListener('click', clearCompletedTasks);
