const input = document.querySelector(".new-task-input");
const button = document.querySelector(".new-task-button");
const tasks = document.querySelector(".tasks-container");

button.addEventListener("click", function () {
  if (!input.value) return;
  createTask(input.value);
});

input.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    if (!input.value) return;
    createTask(input.value);
  }
});

function clearnInput() {
  input.value = "";
  input.focus();
}

function createLi(value) {
  const li = document.createElement("li");
  return li;
}

function createBtnDelete(li) {
  const buttonDelete = document.createElement("button");
  buttonDelete.innerText = "Delete";
  buttonDelete.setAttribute("class", "delete");
  li.appendChild(buttonDelete);
}

document.addEventListener("click", function (event) {
  const el = event.target;

  if (el.classList.contains("delete")) {
    el.parentElement.remove();
  }
});

function createTask(inputValue) {
  const li = createLi();
  li.innerText = inputValue;
  tasks.appendChild(li);
  clearnInput();
  createBtnDelete(li);
}
