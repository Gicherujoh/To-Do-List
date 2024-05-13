// Function to retrieve tasks from local storage
        function getTasks() {
            return JSON.parse(localStorage.getItem('tasks')) || [];
        }

        // Function to save tasks to local storage
        function saveTasks(tasks) {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }

        // Function to render tasks
        function renderTasks() {
            const taskList = document.getElementById('taskList');
            taskList.innerHTML = '';
            const tasks = getTasks();
            tasks.forEach((task, index) => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <span>${task}</span>
                <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
            `;
                taskList.appendChild(li);
            });
        }

        // Function to add a new task
        function addTask() {
            const taskInput = document.getElementById('taskInput');
            const task = taskInput.value.trim();
            if (task !== '') {
                const tasks = getTasks();
                tasks.push(task);
                saveTasks(tasks);
                renderTasks();
                taskInput.value = '';
            }
        }
        //Function to Edit Task
        function editTask(index) {
        const tasks = getTasks();
        const newTask = prompt("Edit task:", tasks[index]);
        if (newTask !== null && newTask.trim() !== '') {
            tasks[index] = newTask.trim();
            saveTasks(tasks);
            renderTasks();
        }
    }
        // Function to delete a task
        function deleteTask(index) {
            const tasks = getTasks();
            tasks.splice(index, 1);
            saveTasks(tasks);
            renderTasks();
        }

        // Event listener for adding a new task
        document.getElementById('taskInput').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                addTask();
            }
        });

        // Initial rendering of tasks
        renderTasks();