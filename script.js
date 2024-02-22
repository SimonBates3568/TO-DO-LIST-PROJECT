document.addEventListener('DOMContentLoaded', function () {

const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', addItem);
todoList.addEventListener('click', deleteItem);
todoInput.addEventListener('keypress', function (e) {
if (e.key === 'Enter') {
    addItem();

}
});

function addItem() {
const todoText = todoInput.value.trim();
if (todoText !== '') {
    const li = document.createElement('li');
    li.textContent = todoText;
    todoList.appendChild(li);
    todoInput.value = '';
}
}

function deleteItem(e) {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
}

});























