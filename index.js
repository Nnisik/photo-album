// Import the drawGallery function from the gallery.js file
import drawGallery from './src/js/gallery.js';

// Add an event listener for when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Call the drawGallery function to initialize or render the gallery
  drawGallery();
});


/*
FIXME: can not find an element
document.getElementById("add").addEventListener("click", () => {
  openModalWindow();
});

document.getElementById("close-modal-btn").addEventListener("click", () => {
  closeModalWindow();
});

// document.querySelectorAll("like-btn").forEach((button) => {
//   button.onchange = () => {
//     console.log(button.id);
//   }
// })

document.getElementById("create-new-btn").addEventListener("click", () => {
  createNewPost();
});
*/