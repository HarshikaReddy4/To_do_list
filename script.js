const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskId = `task-${Date.now()}`;
        const taskItem = document.createElement("div");
        taskItem.classList.add("label-wrapper");
        taskItem.innerHTML = `
            <div class="checkbox-wrapper">
                <input type="checkbox" class="checkbox-input" id="${taskId}">
                <label class="checkbox-custom" for="${taskId}"></label>
            </div>
            <label class="task-label" for="${taskId}">${taskText}</label>`;

        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
});

taskList.addEventListener("change", function (event) {
    const checkbox = event.target;
    if (checkbox.classList.contains("checkbox-input")) {
        const taskId = checkbox.id;
        const taskLabel = document.querySelector(`.task-label[for="${taskId}"]`);
        if (checkbox.checked) {
            taskLabel.classList.add("completed");
        } else {
            taskLabel.classList.remove("completed");
        }
    }
});
