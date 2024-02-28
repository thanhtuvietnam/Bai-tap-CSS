// đổi ảnh
export const addImg = document.querySelectorAll('.container .slider-wrapper .image-list .image-item');
// get ảnh từ api về
export async function getRandomImages() {
   let unsplashApi = 'https://api.unsplash.com/photos/?client_id=9qbcWqRufKOCxqV3NhEryGCBuXtVNHx3zJx7ssJ9QOw';
   try {
      const response = await fetch(unsplashApi);
      const data = await response.json();
      console.log(data);
      addImg.forEach(function (img, index) {
         img.src = data[index].urls.thumb + '&w=100&dpr=2';
      });
   } catch (error) {
      console.error(`bạn đã gặp lỗi... `);
   }
}
getRandomImages();
