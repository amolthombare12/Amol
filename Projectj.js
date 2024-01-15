function addTask() {
    // Get the task input value
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value;

    if (taskText.trim() !== "") {
        // Create a new task element
        var taskElement = document.createElement("div");
        taskElement.className = "task";
        taskElement.innerHTML = taskText;

        // Append the task element to the tasks container
        var tasksContainer = document.getElementById("tasks-container");
        tasksContainer.appendChild(taskElement);

        // Clear the input field
        taskInput.value = "";
    }
}