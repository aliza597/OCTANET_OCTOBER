function addTask() {
    var taskInput = document.getElementById("task-input");
    var deadlineInput = document.getElementById("deadline-input");
    var priorityInput = document.getElementById("priority-input");
    var labelInput = document.getElementById("label-input");

    var taskText = taskInput.value;
    var deadline = deadlineInput.value;
    var priority = priorityInput.value;
    var label = labelInput.value;

    if (taskText === "" || deadline === "") {
        alert("Please enter task and deadline.");
        return;
    }

    var taskList = document.getElementById("task-list");

    var taskElement = document.createElement("div");
    taskElement.className = "task " + priority + "-priority";
    taskElement.innerHTML = `<strong>${taskText}</strong> - Deadline: ${deadline}, Priority: ${priority}, Label: ${label}`;
    
    taskList.appendChild(taskElement);

    taskInput.value = "";
    deadlineInput.value = "";
}
