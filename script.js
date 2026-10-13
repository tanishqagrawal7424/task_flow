// Todo App — Add Task & Complete Task Features
// Only implements "Add a task" and "Complete a task" (without Delete a task)

document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task-input');
  const addBtn = document.getElementById('add-btn');
  const taskList = document.getElementById('task-list');

  // Attach complete toggle listener to a task item
  function attachTaskEvents(taskItem) {
    const checkBtn = taskItem.querySelector('.check-btn');
    if (checkBtn) {
      checkBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        taskItem.classList.toggle('completed');
      });
    }

    const taskText = taskItem.querySelector('.task-text');
    if (taskText) {
      taskText.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
      });
    }
  }

  // Attach events to existing task items in HTML
  document.querySelectorAll('.task-item').forEach(attachTaskEvents);

  // Add a task feature
  function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;

    // Create new task element with complete toggle button (no delete button)
    const li = document.createElement('li');
    li.className = 'task-item';

    const checkBtn = document.createElement('button');
    checkBtn.type = 'button';
    checkBtn.className = 'check-btn';
    checkBtn.setAttribute('aria-label', 'Toggle task complete');
    checkBtn.innerHTML = `
      <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    `;

    const textSpan = document.createElement('span');
    textSpan.className = 'task-text';
    textSpan.textContent = text;

    li.appendChild(checkBtn);
    li.appendChild(textSpan);

    // Attach complete task event to the newly added item
    attachTaskEvents(li);

    // Add to task list
    taskList.appendChild(li);

    // Clear input and refocus
    taskInput.value = '';
    taskInput.focus();
  }

  // Add task on button click
  addBtn.addEventListener('click', addTask);

  // Add task on Enter key
  taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTask();
    }
  });
});
