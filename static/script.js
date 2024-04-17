// document.addEventListener("DOMContentLoaded", function() {
//     const images = [
//       "images/image1.png",
//       "images/image2.png",
//       "images/image3.png",
//       "images/image4.png"
//     ];
//     let currentIndex = 0;
//     const backgroundElement = document.querySelector('.background');
//     const prevButton = document.querySelector('.prev-button');
//     const nextButton = document.querySelector('.next-button');
  
//     function changeBackground() {
//       backgroundElement.style.backgroundImage = `url(${images[currentIndex]})`;
//       currentIndex = (currentIndex + 1) % images.length;
//       setTimeout(changeBackground, 1500); // Change image every 1.5 seconds
//     }
  
//     function changeBackgroundManually(direction) {
//       if (direction === 'next') {
//         currentIndex = (currentIndex + 1) % images.length;
//       } else {
//         currentIndex = (currentIndex - 1 + images.length) % images.length;
//       }
//       backgroundElement.style.backgroundImage = `url(${images[currentIndex]})`;
//     }
  
//     prevButton.addEventListener('click', function() {
//       changeBackgroundManually('prev');
//     });
  
//     nextButton.addEventListener('click', function() {
//       changeBackgroundManually('next');
//     });
  
//     changeBackground();
//   });
  