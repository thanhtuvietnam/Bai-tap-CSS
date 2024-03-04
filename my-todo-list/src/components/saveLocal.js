export const saveTasksToLocalStorage = () => {
  const saveBtn = document.getElementById('save__Btn');
  const pick_container__task = document.querySelectorAll('.container__task');

  saveBtn.addEventListener('click', function () {
    const tasks = Array.from(pick_container__task).map(function (container) {
      return container.querySelector('.label__input').textContent;
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));

    const pick_result = document.getElementById('result');
    pick_result.textContent = 'tasks đã lưu thành công vào local storage...';
    setTimeout(() => {
      pick_result.style.display = 'none';
    }, 2000);
  });
};
