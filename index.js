import closeModalWindow, { openModalWindow } from "./src/js/dialog.js";
import drawGallery from './src/js/gallery.js';

document.addEventListener('DOMContentLoaded', () => {
  drawGallery();
});

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