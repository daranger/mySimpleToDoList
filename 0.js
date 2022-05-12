let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

taskList.forEach((task) => {
    insertLi(task);
});

function deleteTask(task) {
    taskList.splice(taskList.indexOf(task), 1);
    localStorage.setItem("tasks", JSON.stringify(taskList));
}

function addTask(task) {
    taskList.push(task);
    localStorage.setItem("tasks", JSON.stringify(taskList));
}

function insertLi(task) {
    let li = `<li>
      <input type="checkbox">
         <span class="task">${task}</span>
         <button class="delete-btn">X</button>
   </li>`;
    document.getElementById('task-list').innerHTML += li;
}

document.getElementById('add-task-button').addEventListener("click", () => {
    let task = document.getElementById('input-task').value;
    insertLi(task);
    addTask(task);
    init();
});

function init() {
    let delBtn = document.querySelectorAll('.delete-btn');
    delBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.parentElement.remove();
            deleteTask(btn.parentElement.children[1].innerHTML);
        });
    });
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach((box) => {
        box.addEventListener("click", () => {
            if (box.checked) {
                box.nextElementSibling.classList.add('done');
                deleteTask(box.parentElement.children[1].innerHTML); //delete task if done (delete for pass hyperskill tests)
            } else {
                box.nextElementSibling.classList.remove('done');
                addTask(box.parentElement.children[1].innerHTML); //add task if cancel (delete for pass hyperskill tests)
            }
        });
    });

}

init();