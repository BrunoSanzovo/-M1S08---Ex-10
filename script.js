document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');

        const taskTextNode = document.createTextNode(taskText);
        li.appendChild(taskTextNode);

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Concluir';
        completeBtn.addEventListener('click', function() {
            li.classList.toggle('completed');
        });
        li.appendChild(completeBtn);

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover';
        removeBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });
        li.appendChild(removeBtn);

        const img = document.createElement('img');
        img.src = 'assets/tarefaicon01.jpeg';
        img.alt = 'checkmark';
        img.className = 'task-img'; 
        li.appendChild(img);

        taskList.appendChild(li);
    }
});
