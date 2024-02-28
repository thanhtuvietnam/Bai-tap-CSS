// JavaScript để toggle theme dark và light
const themeToggleBtn = document.getElementById('themeToggle');
const cards = document.querySelectorAll('.card'); // Lấy tất cả phần tử có class .card
const iconItems = document.querySelectorAll('.iconitem'); // Lấy tất cả phần tử có class .iconitem

themeToggleBtn.addEventListener('click', function () {
  // Lặp qua từng phần tử card và toggle class 'dark'
  cards.forEach(function (card) {
    card.classList.toggle('dark');
  });
  // Lặp qua từng phần tử iconitem và toggle class 'iconitem--dark'
  iconItems.forEach(function (item) {
    item.classList.toggle('iconitem--dark');
  });
});
