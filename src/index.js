import closeModalWindow, { openModalWindow } from "./js/dialog.js";
import drawGallery from './js/gallery.js';

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