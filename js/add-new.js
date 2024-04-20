document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#add-new-pop-up").style.display = 'none';
});

document.querySelector("#add").addEventListener("click", function () {
  document.querySelector("#add-new-pop-up").style.display = 'flex';
});

document.querySelector("#close-modal-btn").addEventListener("click", function () {
    document.querySelector("#add-new-pop-up").style.display = 'none';
});
