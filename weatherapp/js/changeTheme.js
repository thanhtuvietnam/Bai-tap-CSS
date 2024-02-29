const myButton = document.getElementById('myButton');
const pickBody = document.querySelector('.container');
const pickInput = document.querySelector('.city__input');

function changeTheme() {
   pickBody.classList.toggle('dark');
   pickInput.classList.toggle('city__input--dark')
}
myButton.addEventListener('click', changeTheme);

export default { myButton, pickBody,changeTheme };
