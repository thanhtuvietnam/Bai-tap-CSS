const pick_container = document.querySelector('.wrapper');
const pick_inputPlace = document.getElementById('inputPlace');

export function addTask() {
  //thẻ div to
  let taskBlock = document.createElement('div');
  //thêm class
  taskBlock.classList.add('container__task');
  //phần label
  const inputContent = pick_inputPlace.value;
  let tickLable = document.createElement('label');
  tickLable.setAttribute('for', 'input');
  tickLable.setAttribute('class', 'label__input');
  tickLable.textContent = inputContent;
  //phần input
  let inputCheckBox = document.createElement('input');
  inputCheckBox.setAttribute('type', 'checkbox');
  inputCheckBox.setAttribute('class', 'checkbox');
  //phần nút delete
  let deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('type', 'button');
  deleteBtn.setAttribute('class', 'delete__Btn');
  deleteBtn.textContent = 'delete';
  //phần nút edit
  let editBtn = document.createElement('button');
  editBtn.setAttribute('type', 'button');
  editBtn.setAttribute('class', 'edit__Btn');
  editBtn.textContent = 'edit';
  //thêm task
  pick_container.appendChild(taskBlock);
  taskBlock.appendChild(tickLable);
  taskBlock.appendChild(inputCheckBox);
  taskBlock.appendChild(deleteBtn);
  taskBlock.appendChild(editBtn);
}

