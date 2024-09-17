let pendingList=document.querySelector('.pending')
let completedList=document.querySelector('.completed')
let input=document.querySelector('.input-text')

function addTask() {
    let newTask = input.value.trim(); // Trim to avoid adding empty spaces as tasks
    if (!newTask) return;

    // Create the list item with the buttons using template literals
    let listItem = document.createElement('div');
    listItem.classList.add('pending-items');
    listItem.innerHTML = `
            <button class="complete-btn"><i class='bi bi-check-lg'></i></button>
            <button class="delete-btn"><i class='bi bi-trash3-fill'></i></button>
            <p>${newTask}</p>
    `;
    
    // Append the list item to the pending list
    pendingList.appendChild(listItem);
}

// Event delegation for handling complete and delete actions
pendingList.addEventListener('click', function(event) {
    if (event.target.closest('.complete-btn')) {
        completedTask(event.target);
    } else if (event.target.closest('.delete-btn')) {
        deleteTask(event.target);
    }
});
completedList.addEventListener('click', function(event) {
    if (event.target.closest('.delete-btn')) {
        deleteTask(event.target);
    }
});
taskAdder=document.querySelector('#add')
taskAdder.addEventListener('click',()=>{
    addTask();
});


// Delete task function
function deleteTask(button) {
    const listItem = button.closest('.pending-items'); // Get the parent list item
    if (listItem) {
        listItem.remove(); // Remove the list item from the Pending List
    }
}

// Completed task function 
function completedTask(button) {
    const listItem = button.closest('.pending-items'); // Get the parent list item
    const task=listItem.lastElementChild.textContent; //Select the text from Completed Task
    console.log(task);
    if (listItem) {
        listItem.remove(); // Remove the list item from the DOM
    }
    const completedlistItem = document.createElement('div');
    listItem.classList.add('completed-items');
    listItem.innerHTML = `
            <button class="delete-btn"><i class='bi bi-trash3-fill'></i></button>
            <s>${task}</s>
    `;
    // Append the list item to the Completed list
    completedList.appendChild(listItem);
}