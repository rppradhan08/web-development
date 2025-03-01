"use strict";
var counter = 0
function addTask(){
    // Get the task input element and its value
    console.log("Add Task triggered");
    const inputElement = document.getElementById("todo-input");
    const taskText = inputElement.value.trim()
    console.log("Task name:", taskText)

    // Validate the input; if empty, exit the function
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new list item element for the task
    const li = document.createElement('li');
    li.className = 'task-item';

    // Create a checkbox for the task
    const checkbox = document.createElement('input')
    checkbox.setAttribute("type", "checkbox")
    checkbox.setAttribute("id", "task-"+ counter)
    counter += 1

    // Create a label for the task using the input text
    const label = document.createElement("label");
    label.setAttribute("for", checkbox.id);
    label.textContent = taskText;

    // Append the checkbox and label to the list item
    li.appendChild(checkbox);
    li.appendChild(label);

    // Append the new task to the task list
    const taskList = document.getElementById('task-container');
    taskList.appendChild(li);
    
}

function removeTask() {
    console.log("Remove Task triggered");
    // Get the task items
    const taskItems = document.getElementsByClassName('task-item');
    
    // Iterate over the task items using a for...in loop (ensure only own properties are processed)
    for (let key in taskItems) {
        if (taskItems.hasOwnProperty(key)) {
            const task = taskItems[key];
            // Get the checkbox input within the current task item
            const checkbox = task.querySelector("input[type='checkbox']");
            console.log(checkbox);
            // If the checkbox exists and is checked, remove the task item from the DOM
            if (checkbox && checkbox.checked) {
                task.remove();
            }
        }
    }
}

document.getElementById("add-btn").addEventListener("click", addTask)
document.getElementById("remove-btn").addEventListener("click", removeTask)
