//приложение 
import addEditButton  from './edit.js';
import db from './firebase.js';
const task = db.collection('tasks');

//button del
function createButtonDel(li, id) {
	let buttonDel = document.createElement('button');
	buttonDel.textContent = 'Del';
	li.append(buttonDel);
	buttonDel.addEventListener('click', () => {
		task.doc(id).delete().then(() => li.remove());
	});
};

//add check box
function addCheckbox(li, id) {
	let inputCheckbox = document.createElement('input');
	inputCheckbox.setAttribute('type', 'checkbox');
	li.appendChild(inputCheckbox);

	inputCheckbox.addEventListener('change', () => {
		if (inputCheckbox.checked) {
			li.style.textDecoration = 'line-through';
		} else {
			li.style.textDecoration = '';
		}
	})
}

//добавление li элементов в ul  списак
function addLiInUl(a, id) {
	let ul = document.querySelector('ul');
	let li = document.createElement('li');
	let p = document.createElement('p');
	p.textContent = a;
	li.append(p)
	ul.appendChild(li);

	addCheckbox(li, id);
	createButtonDel(li, id);
	addEditButton(li, id);
};

//add tasks
function addTask() {
	let input = document.querySelector('input');
	let form = document.querySelector('form');

	form.addEventListener('submit', (event) => {
		event.preventDefault();
		task.add({
			title: input.value,
		})
			// .then(datas => task.doc(datas.id).get().then(data => { addLiInUl(data.data().title, data.id) }))
			.catch(error => console.error("Error adding document: ", error));
			input.value = '';
	});
}
addTask();

function liRemove() {
	let lis = document.querySelectorAll('li');
	for (let li of lis) {
		li.remove();
	}
}

function addTodoList() {
	task.onSnapshot(datas => {
		liRemove();
		datas.forEach(data => {
			addLiInUl(data.data().title, data.id);
		})
	})
};
addTodoList();