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