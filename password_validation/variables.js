export const passwordInput = document.querySelector('.validation__input input');
export const eyeOpen = document.getElementById('iconEye');
export const requirementList = document.querySelectorAll('.requirement-list li');
export const requirements = [
   { regex: /.{8,}/, index: 0 }, // Minimum of 8 characters
   { regex: /[0-9]/, index: 1 }, // At least one number
   { regex: /[a-z]/, index: 2 }, // At least one lowercase letter
   { regex: /[^A-Za-z0-9]/, index: 3 }, // At least one special character
   { regex: /[A-Z]/, index: 4 }, // At least one uppercase letter
];

