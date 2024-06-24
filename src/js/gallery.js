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
  return likeBtn
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

export default async function drawGallery() {
  const JSONFilePath = "../src/data/data-posts.json";
  fetch(JSONFilePath)
    .then((response) => response.json())
    .then((json) => {
      json.map((post) => {
        document.querySelector("#gallery").appendChild(drawNewPost(post));
      });
    });
}
