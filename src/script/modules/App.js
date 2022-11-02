"use strict";
exports.__esModule = true;
var Task_1 = require("./Task");
var App = /** @class */ (function () {
    function App() {
        this.textInput = document.querySelector('.text-input');
        this.buttonAdd = document.querySelector('.btn-add');
        this.list = document.querySelector('.list');
        this.task = new Task_1["default"]();
    }
    App.prototype.run = function () {
        var _this = this;
        this.textInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter" && _this.textInput.value) {
                _this.addTask(_this.textInput.value);
                _this.clearInput();
            }
        });
        this.buttonAdd.addEventListener("click", function () {
            if (_this.textInput.value) {
                _this.addTask(_this.textInput.value);
                _this.clearInput();
            }
        });
        this.textInput.value = '';
    };
    App.prototype.addTask = function (text) {
        var task = this.task.render(text);
        this.list.append(task);
    };
    App.prototype.clearInput = function () {
        this.textInput.value = null;
    };
    return App;
}());
exports["default"] = App;
