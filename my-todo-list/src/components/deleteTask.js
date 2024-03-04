export const deleteTask = () => {
    const pick_delete__Btn = document.querySelectorAll('.container__task .delete__Btn');
    pick_delete__Btn.forEach(function (onebtndel, index) {
      onebtndel.addEventListener('click', function () {
        let selectedTask = onebtndel.closest('.container__task');
        selectedTask.remove();
      });
    });
  };
  