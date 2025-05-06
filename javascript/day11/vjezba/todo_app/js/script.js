class Todo {
    constructor(inputField, btnAdd, taskList) {
        this.inputField = inputField;
        this.btnAdd = btnAdd;
        this.taskList = taskList;

        this.btnAdd.addEventListener("click", this.addItem)
    }

    markDone = (event) => {
        const btnMark = event.target;
        btnMark.parentNode.classList.toggle("obavljeno")
    }

    removeTask = (event) => {
        const btnDelete = event.target;
        btnDelete.parentNode.remove();
        this.inputField.focus();
    }

    addRemoveButton = (item) => {
        const btnDelete = document.createElement("div");
        btnDelete.className = "gumbic-ukloni";
        btnDelete.addEventListener("click", this.removeTask);
        item.appendChild(btnDelete);
    }

    addMarkButton = (item) => {
        const btnInputMark = document.createElement("input");
        btnInputMark.setAttribute("type", "checkbox");
        btnInputMark.addEventListener("click", this.markDone);
        item.insertBefore(btnInputMark, item.firstChild);
    }

    createItem = (text) => {
        const item = document.createElement("li");
        item.innerText = text;
        this.addRemoveButton(item);
        this.addMarkButton(item);
        return item;
    }

    addItem = () => {
        const text = this.inputField.value.trim();
        if (text != "") {
            const item = this.createItem(text);
            this.taskList.appendChild(item);
            this.inputField.value = "";
            this.inputField.focus();
        } else {
            alert("Task description is empty! Write something in field!");
            this.inputField.focus();
        }
    }
}

(function() {
    "use strict";

    const inputField = document.querySelector("input");
    const btnAdd = document.querySelector("button");
    const taskList = document.querySelector("ul");
    
    const todo = new Todo(inputField, btnAdd, taskList);
})();