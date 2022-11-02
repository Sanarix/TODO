"use strict";
exports.__esModule = true;
var Task = /** @class */ (function () {
    function Task() {
    }
    Task.prototype.render = function (text) {
        var task = document.createElement("div");
        var div = document.createElement("div");
        var checkbox = document.createElement("i");
        var trash = document.createElement("i");
        var p = document.createElement("p");
        var buttonsContainer = div;
        buttonsContainer.className = "buttons";
        task.className = "task";
        p.className = "text";
        p.textContent = text;
        buttonsContainer.append(checkbox);
        buttonsContainer.append(trash);
        task.append(p);
        task.append(buttonsContainer);
        checkbox.className = "fa fa-check-square checkbox";
        checkbox.addEventListener("click", function () {
            checkbox.style.color = "limegreen";
        });
        trash.className = "fas fa-trash trash";
        trash.addEventListener("click", function () {
            task.classList.add('deleted');
            setTimeout(function () { task.remove(); }, 300);
        });
        return task;
    };
    return Task;
}());
exports["default"] = Task;
