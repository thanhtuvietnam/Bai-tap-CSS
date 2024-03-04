import { addTask } from './components/addTask.js';
import { saveTasksToLocalStorage } from './components/saveLocal.js';
import { deleteTask } from './components/deleteTask.js';
import { editTask } from './components/editTask.js';

const pick_btnAdd = document.getElementById('btnAdd');

const list_function = () => {
  addTask();
  deleteTask();
  editTask();
  saveTasksToLocalStorage();
};
pick_btnAdd.addEventListener('click', list_function);
