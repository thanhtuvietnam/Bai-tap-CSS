export const editTask = () => {
    const pick_edit__Btn = document.querySelectorAll('.container__task .edit__Btn');
    pick_edit__Btn.forEach(function (onebtnedit, index) {
      onebtnedit.addEventListener('click', () => {
        const selectedLabel = onebtnedit.closest('.container__task');
        const lapelInput = selectedLabel.querySelector('.label__input');
        // lapelInput.contentEditable = lapelInput.contentEditable === 'true' ? 'false' : 'true';
        lapelInput.contentEditable = true;
        lapelInput.focus();
      });
    });
  };