// Todo App — Add a Task Feature
// Only implements "Add a task" (without Complete a task or Delete a task)

document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task-input');
  const addBtn = document.getElementById('add-btn');
  const taskList = document.getElementById('task-list');

  function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;

    // Create new task element matching layout
    const li = document.createElement('li');
    li.className = 'task-item';

    const bullet = document.createElement('span');
    bullet.className = 'task-bullet';

    const textSpan = document.createElement('span');
    textSpan.className = 'task-text';
    textSpan.textContent = text;

    li.appendChild(bullet);
    li.appendChild(textSpan);

    // Add to task list
    taskList.appendChild(li);

    // Clear input and refocus
    taskInput.value = '';
    taskInput.focus();
  }

  // Add on button click
  addBtn.addEventListener('click', addTask);

  // Add on Enter key
  taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTask();
    }
  });
});
