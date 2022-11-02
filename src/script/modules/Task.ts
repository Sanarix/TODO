export default class Task {
	render(text: string) {
		const task = document.createElement("div");
		const div = document.createElement("div");
		const checkbox = document.createElement("i");
		const trash = document.createElement("i");
		const p = document.createElement("p");
		const buttonsContainer = div;
		buttonsContainer.className = "buttons";

		task.className = "task";
		p.className = "text";
		p.textContent = text;
		buttonsContainer.append(checkbox);
		buttonsContainer.append(trash);
		task.append(p);
		task.append(buttonsContainer);

		checkbox.className = "fa fa-check-square checkbox";
		checkbox.addEventListener("click", (): void => {
			checkbox.style.color = "limegreen";
		})

		trash.className = "fas fa-trash trash";
		trash.addEventListener("click", (): void => {
			task.classList.add('deleted');
			setTimeout((): void =>{task.remove();}, 300)
		})
		return task;
	}
}