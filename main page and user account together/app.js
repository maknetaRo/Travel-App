class UI {
    constructor() {
    this.inputBar = document.getElementById('todo-input-bar');
    this.addBtn = document.getElementById('add-todo-btn');
    this.uList = document.getElementById('todo-list');
    }

    startFunction() {
        let inputBarValue = this.inputBar.value;
        if(inputBarValue.length > 0) {
            this.addToList(inputBarValue);
        }
    }

    addToList(inputBarValue){
        let itemText = document.createElement('li');
        itemText.innerHTML = `<li class='todo'>${inputBarValue}
        <button class='done-btn'>✓</button>
        <button class='delete-btn'>x</button>
        </li>`
        this.uList.appendChild(itemText);
        this.inputBar.value = '';
    }

    deleteFromList(element) {
        let parent = element.parentElement.parentElement;
        this.uList.removeChild(parent);
    }

    tickFromList(element) {
        let parent = element.parentElement;
        if (parent.classList.contains('done')) {
            parent.classList.remove('done')
        } else {
            parent.classList.add('done')
        }
    }
}
    
function eventListeners() {
    const inputBar = document.getElementById('todo-input-bar');
    const addBtn = document.getElementById('add-todo-btn');
    const uList = document.getElementById('todo-list');
    
    const ui = new UI();
        
    inputBar.addEventListener('keypress', function(e) {
        if(e.key === 'Enter'){
            ui.startFunction();
        }
    });

    addBtn.addEventListener('click', function() {
            ui.startFunction();
    });

    uList.addEventListener('click', function(event) {
        if (event.target.classList.contains('done-btn')) {
            ui.tickFromList(event.target);
        } else if (event.target.classList.contains('delete-btn')) {
            ui.deleteFromList(event.target)
        }
    });
}
    
document.addEventListener('DOMContentLoaded', function() {
    eventListeners();
});