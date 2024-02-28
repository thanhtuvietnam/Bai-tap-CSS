import { addImg, getRandomImages } from "./imgFromApi.js";
// bấm chuyển slide
const initSlider = () => {
   const slideButtons = document.querySelectorAll('.slider-wrapper .slide-button');
   const imageList = document.querySelector('.image-list');
   const sliderScrollbar = document.querySelector('.container .slider-scrollbar');
   const scrollbarThumb = sliderScrollbar.querySelector('.scrollbar-thumb');
   const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
   const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
   //ấn chuột vào thumb
   scrollbarThumb.addEventListener('mousedown', (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      //cập nhật thumb position khi mouse di chuyển
      const handleMouseMove = (e) => {
         const deltaX = e.clientX - startX;
         const newThumbPosition = thumbPosition + deltaX;
         scrollbarThumb.style.left = `${newThumbPosition}px`;
         // Ensure the scrollbar thumb stays within bounds
         const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
         const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
         scrollbarThumb.style.left = `${boundedPosition}px`;
         imageList.scrollLeft = scrollPosition;
      };
      // Remove event listeners on mouse up
      const handleMouseUp = () => {
         document.removeEventListener('mousemove', handleMouseMove);
         document.removeEventListener('mouseup', handleMouseUp);
      };
      //thêm sự kiện drag
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
   });

   //ấn nút chuyển slide
   slideButtons.forEach((button) => {
      button.addEventListener('click', () => {
         const direction = button.id === 'prev-slide' ? -1 : 1;
         const scrollAmount = imageList.clientWidth * direction;
         imageList.scrollTo({
            left: imageList.scrollLeft + scrollAmount,
            behavior: 'smooth',
         });
      });
   });
   // khi di chuyển thì nút tự biến mất nếu k còn ảnh
   const handleSlideButtons = () => {
      slideButtons[0].style.display = imageList.scrollLeft <= 0 ? 'none' : 'block';
      slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? 'none' : 'block';
   };
   //thanh trượt ở dưới load theo
   const updateScrollThumPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
   };

   imageList.addEventListener('scroll', () => {
      handleSlideButtons();
      updateScrollThumPosition();
   });
};
window.addEventListener('load', initSlider);
