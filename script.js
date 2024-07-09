function drawPostImage(image) {
  const postImage = document.createElement("img");
  postImage.src = image;
  postImage.classList.add("post-img");
  return postImage;
}

function drawDeleteBtn(postId) {
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.setAttribute("data-id", postId);
  return deleteBtn;
}

function drawPostHeader(text) {
  const postHeader = document.createElement("h2");
  postHeader.classList.add("post-header");
  postHeader.textContent = text;
  return postHeader;
}

function drawLikeBtn(postId) {
  const likeBtn = document.createElement("input");
  likeBtn.type = "checkbox";
  likeBtn.setAttribute("id", `${postId}`);
  likeBtn.classList.add("like-btn");
  return likeBtn;
}

function drawNewPost(postInfo) {
  // post container
  const postContainer = document.createElement("section");
  postContainer.setAttribute("data-id", postInfo.id);
  postContainer.classList.add("post");

  // post image
  postContainer.appendChild(drawPostImage(postInfo.image));

  // post delete button
  postContainer.appendChild(drawDeleteBtn(postInfo.id));

  // post information section
  const postInfoSection = document.createElement("section");
  postInfoSection.classList.add("post-info");

  // post header
  postInfoSection.appendChild(drawPostHeader(postInfo.name));

  // like button
  postInfoSection.appendChild(drawLikeBtn(postInfo.id));

  postContainer.appendChild(postInfoSection);
  return postContainer;
}

function closeModalWindow() {
  document.getElementById("add-new-pop-up").style.visibility = "hidden";
}

function openModalWindow() {
  document.getElementById("add-new-pop-up").style.visibility = "visible";
}

const postsData = [
  {
    id: 1,
    name: "Карачаевск",
    image:
      "https://images.unsplash.com/photo-1588584922681-745a2223f72c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUQwJUJBJUQwJUIwJUQxJTgwJUQwJUIwJUQxJTg3JUQwJUIwJUQwJUI1JUQwJUIyJUQxJTgxJUQwJUJBfGVufDB8fDB8fHww28",
    like: false,
  },
  {
    id: 2,
    name: "Гора Эльбрус",
    image:
      "https://images.unsplash.com/photo-1687816771997-203b56817f37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fCVEMSU4RCVEMCVCQiVEMSU4QyVEMCVCMSVEMSU4MCVEMSU4MyVEMSU4MXxlbnwwfHwwfHx8MA%3D%3D",
    like: true,
  },
  {
    id: 3,
    name: "Домбай",
    image:
      "https://images.unsplash.com/photo-1601816934472-609e170a9a17?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: false,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  postsData.map((post) => {
    document.querySelector("#gallery").appendChild(drawNewPost(post));
  });
});

document.getElementById("add").addEventListener("click", () => {
  openModalWindow();
});

document.getElementById("close-modal-btn").addEventListener("click", () => {
  closeModalWindow();
});
