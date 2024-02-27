import { passwordInput, eyeOpen, requirementList, requirements } from './variables.js';
//valid
function validPassword(password) {
   return requirements.map(function (itemRegex) {
      return itemRegex.regex.test(password);
   });
}
//events
passwordInput.addEventListener('keyup', function (text) {
   let password2 = text.target.value;
   let validationResults = validPassword(password2);
   requirementList.forEach(function (requirementItem, index) {
      {
         let isValid = validationResults[index];
         let checklist = requirementItem.querySelector('.material-symbols-outlined.checklist');
         let listItem = requirementItem.closest('li');
         checklist.innerText = isValid ? 'task_alt' : 'circle';
         listItem.style.color = isValid ? 'green' : 'red';
      }
   });
});
//change Icon
function changeIcon() {
   const iconSpan = document.getElementById('iconEye').innerText;
   if (iconSpan == 'visibility') {
      document.getElementById('iconEye').innerText = 'visibility_off';
   } else {
      document.getElementById('iconEye').innerText = 'visibility';
   }
}
function showPassword() {
   passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
   //    if (passwordInput.type === 'password') {
   //       passwordInput.type = 'text';
   //    } else {
   //       passwordInput.type = 'password';
   //    }
}
eyeOpen.addEventListener('click', () => {
   changeIcon();
   showPassword();
});

// function tickList() {
//    const listItems = document.querySelectorAll('.requirement-list li .material-symbols-outlined.checklist');

//    listItems.forEach(function (item) {
//       item.innerText = 'task_alt';
//    });
// }
console.log(requirements);
