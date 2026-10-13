// Todo App — Add Task, Complete Task & Delete Task Features

document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task-input');
  const addBtn = document.getElementById('add-btn');
  const taskList = document.getElementById('task-list');

  // Attach event listeners (Complete & Delete) to a task item
  function attachTaskEvents(taskItem) {
    // Complete toggle button
    const checkBtn = taskItem.querySelector('.check-btn');
    if (checkBtn) {
      checkBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        taskItem.classList.toggle('completed');
      });
    }

    // Complete toggle by clicking task text
    const taskText = taskItem.querySelector('.task-text');
    if (taskText) {
      taskText.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
      });
    }

    // Delete task button
    const deleteBtn = taskItem.querySelector('.delete-btn');
    if (deleteBtn) {
      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        taskItem.style.transition = 'all 0.2s ease';
        taskItem.style.opacity = '0';
        taskItem.style.transform = 'translateY(-8px)';
        setTimeout(() => {
          taskItem.remove();
        }, 200);
      });
    }
  }

  // Attach events to existing task items in HTML
  document.querySelectorAll('.task-item').forEach(attachTaskEvents);

  // Add a task feature
  function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;

    // Create new task element
    const li = document.createElement('li');
    li.className = 'task-item';

    // Complete button
    const checkBtn = document.createElement('button');
    checkBtn.type = 'button';
    checkBtn.className = 'check-btn';
    checkBtn.setAttribute('aria-label', 'Toggle task complete');
    checkBtn.innerHTML = `
      <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    `;

    // Task text
    const textSpan = document.createElement('span');
    textSpan.className = 'task-text';
    textSpan.textContent = text;

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'delete-btn';
    deleteBtn.setAttribute('aria-label', 'Delete task');
    deleteBtn.innerHTML = `
      <svg class="delete-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
      </svg>
    `;

    li.appendChild(checkBtn);
    li.appendChild(textSpan);
    li.appendChild(deleteBtn);

    // Attach complete and delete events to the newly added item
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
