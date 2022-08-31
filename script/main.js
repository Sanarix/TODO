'use strict'

const textInput = document.querySelector('.text-input');
const buttonAdd = document.querySelector('.btn-add');
const list = document.querySelector('.list');
const buttonRemove = document.querySelector('.btn-remove');

function createTask(text) {
	const div = `
	<div class="task">
		<div class="text">${text}</div>
		<div class="buttons">
			<input class="btn-check" type="checkbox">
			<button class="btn-remove">X</button>
		</div>
	</div>
	`
	return div;
}

function addTask() {
	let task = createTask(textInput.value);
	list.innerHTML += task;
}

function clearInput() {
	textInput.value = '';
}
textInput.addEventListener('keydown', e => {
	if(e.key == 'Enter' && textInput.value) {
		addTask();
		clearInput();
	}
})

buttonAdd.addEventListener('click', () => {
	if(textInput.value) {
		addTask();
		clearInput();
	}
	return
})

list.addEventListener('click', (e) => {
	if(e.target.className == 'btn-remove') {
		e.target.closest('.task').remove();
	}
})