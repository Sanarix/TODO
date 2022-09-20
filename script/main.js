'use strict'

const textInput = document.querySelector('.text-input');
const buttonAdd = document.querySelector('.btn-add');
const list = document.querySelector('.list');
const buttonRemove = document.querySelector('.btn-remove');

function addTask(input) {
  const task = document.createElement("div");
  const div = document.createElement("div");
  const checkbox = document.createElement("i");
  const trash = document.createElement("i");
  const p = document.createElement("p");
	const buttonsContainer = div;
	buttonsContainer.className = "buttons";

  task.className = "task";
	p.className = "text";
  p.textContent = input;
	buttonsContainer.append(checkbox);
	buttonsContainer.append(trash);
  task.append(p);
  task.append(buttonsContainer);

  list.append(task);
  textInput.value = "";

	checkbox.className = "fa fa-check-square checkbox";
  checkbox.addEventListener("click", () => {
    checkbox.style.color = "limegreen";
  })

  trash.className = "fas fa-trash trash";
  trash.addEventListener("click", () => {
		task.classList.add('deleted');
		setTimeout(()=>{task.remove();}, 300)
  })
}

textInput.addEventListener("keydown", (event) => {
  if(event.key === "Enter" && textInput.value){
    addTask(textInput.value);
  }
});

buttonAdd.addEventListener("click", () => {
	if(textInput.value) {
		addTask(textInput.value);
	}
});
