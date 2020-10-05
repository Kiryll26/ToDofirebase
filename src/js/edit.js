import db from './firebase.js';
const task = db.collection('tasks');

export default function addEditButton(li, id) {
	let buttonEdit = document.createElement('button');
	buttonEdit.textContent = 'Edit';
	li.appendChild(buttonEdit);


	let divEdit = document.createElement('div');
	divEdit.classList.add('boxEdit');
	let inputEdit = document.createElement('input');
	let buttonSave = document.createElement('button');

	buttonSave.textContent = 'save';
	divEdit.append(inputEdit);
	divEdit.append(buttonSave);

	// click button edit
	buttonEdit.addEventListener('click', () => {
		if (document.querySelector('.boxEdit')) {
			document.querySelector('.boxEdit').remove();
		} else {
			li.append(divEdit);
		}
	});

	//click button save
	buttonSave.addEventListener('click', () => {
		task.doc(id).set({ title: inputEdit.value } )
		divEdit.remove();
		inputEdit.value = '';
	});
}
