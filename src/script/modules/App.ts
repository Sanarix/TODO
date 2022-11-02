import Task from './Task';

export default class App {
	private textInput: HTMLInputElement;
	private buttonAdd: HTMLElement;
	private list: HTMLElement;
	private task: Task;

	constructor() {
		this.textInput = document.querySelector('.text-input');
		this.buttonAdd = document.querySelector('.btn-add');
		this.list = document.querySelector('.list');
		this.task = new Task();
	}

	run() {
		this.textInput.addEventListener("keydown", (event): void => {
			if(event.key === "Enter" && this.textInput.value){
				this.addTask(this.textInput.value);
				this.clearInput();
			}
		});
		
		this.buttonAdd.addEventListener("click", (): void => {
			if(this.textInput.value) {
				this.addTask(this.textInput.value);
				this.clearInput();
			}
		});

		this.textInput.value = '';
	}

	addTask(text: string) {
		const task = this.task.render(text)
		this.list.append(task);
	}

	clearInput(): void {
		this.textInput.value = null;
	}
}